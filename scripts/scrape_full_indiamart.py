import urllib.request
import gzip
import json
import re
import os
import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate'
}

def fetch(url):
    print(f"Fetching: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            raw = resp.read()
            try:
                return gzip.decompress(raw).decode('utf-8', errors='ignore')
            except Exception:
                return raw.decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

BASE_URL = "https://www.indiamart.com/mineralssolutions-ahmedabad/"
home_html = fetch(BASE_URL)
if not home_html:
    print("Failed to fetch homepage")
    exit(1)

soup = BeautifulSoup(home_html, 'html.parser')

# 1. Extract window.__COMPANY_DATA__
company_data = {}
for s in soup.find_all('script'):
    text = s.string or ""
    if 'window.__COMPANY_DATA__=' in text:
        m = re.search(r'window\.__COMPANY_DATA__\s*=\s*(\{.*?\});', text, re.DOTALL)
        if m:
            try:
                company_data = json.loads(m.group(1))
                print("Successfully parsed window.__COMPANY_DATA__")
            except Exception as e:
                print("Error parsing company data JSON:", e)

# 2. Extract Category Links from Script 6 or HTML
sub_links = []
for s in soup.find_all('script'):
    text = s.string or ""
    if 'var subLinks =' in text:
        m = re.search(r'var subLinks\s*=\s*(\[\{.*?\}\]);', text, re.DOTALL)
        if m:
            try:
                sub_links = json.loads(m.group(1))
                print(f"Found {len(sub_links)} subLinks in script")
            except Exception as e:
                print("Error parsing subLinks JSON:", e)

# Also check all <a> tags
all_urls = set()
for a in soup.find_all('a', href=True):
    href = a['href']
    full = urljoin(BASE_URL, href)
    if 'mineralssolutions-ahmedabad' in full and not full.endswith('.jpeg') and not full.endswith('.jpg') and not '#' in full:
        if 'twitter.com' not in full and 'facebook.com' not in full and 'linkedin.com' not in full:
            all_urls.add(full)

for sl in sub_links:
    link = sl.get('link', '')
    full = urljoin(BASE_URL, link)
    all_urls.add(full)

# Ensure profile and products pages are in all_urls
all_urls.add(urljoin(BASE_URL, 'profile.html'))
all_urls.add(urljoin(BASE_URL, 'products-and-services.html'))
all_urls.add(urljoin(BASE_URL, 'photos.html'))

print(f"\nTotal distinct pages to crawl: {len(all_urls)}")
for u in sorted(all_urls):
    print(" -", u)

# 3. Crawl each page and extract details
scraped_data = {
    'company_profile': {},
    'products': [],
    'categories': {},
    'photos': []
}

# If company_data exists, save it
if company_data:
    scraped_data['raw_company_data'] = company_data
    scraped_data['company_profile']['company_name'] = company_data.get('company', {}).get('companyName')
    scraped_data['company_profile']['pns_number'] = company_data.get('company', {}).get('pnsNumber')
    scraped_data['company_profile']['logo'] = company_data.get('company', {}).get('companyLogo')
    scraped_data['company_profile']['city'] = company_data.get('company', {}).get('city')
    scraped_data['company_profile']['state'] = company_data.get('company', {}).get('state')

products_by_id = {}

def extract_products_from_soup(page_soup, page_url):
    # Method A: Extract from JSON-LD
    for j in page_soup.find_all('script', type='application/ld+json'):
        try:
            ld = json.loads(j.string)
            items = ld if isinstance(ld, list) else [ld]
            for item in items:
                if item.get('@type') == 'Product':
                    name = item.get('name')
                    img = item.get('image')
                    offers = item.get('offers', {})
                    price = offers.get('price') if isinstance(offers, dict) else None
                    if name:
                        key = name.strip()
                        if key not in products_by_id:
                            products_by_id[key] = {
                                'name': name.strip(),
                                'image': img,
                                'price': price,
                                'source_page': page_url,
                                'specs': {},
                                'description': ''
                            }
        except Exception:
            pass

    # Method B: Parse HTML product cards
    # IndiaMART typically uses .prd-card, .bo-p-card, or similar containers
    # Let's inspect product blocks
    for card in page_soup.find_all(['div', 'li', 'section']):
        classes = card.get('class', [])
        c_str = ' '.join(classes) if isinstance(classes, list) else str(classes)
        # Check if this element is a product item container
        title_tag = card.find(['h2', 'h3', 'a'], class_=lambda c: c and any(w in str(c).lower() for w in ['title', 'p-name', 'prdname', 'name']))
        if not title_tag:
            continue
        p_name = title_tag.get_text(strip=True)
        if not p_name or len(p_name) < 3 or len(p_name) > 100:
            continue
        
        # Look for specs table
        specs = {}
        for row in card.find_all(['tr', 'li', 'div'], class_=lambda c: c and any(w in str(c).lower() for w in ['spec', 'row', 'detail'])):
            text = row.get_text(separator=':', strip=True)
            if ':' in text:
                parts = [p.strip() for p in text.split(':', 1)]
                if len(parts) == 2 and parts[0] and parts[1]:
                    specs[parts[0]] = parts[1]
        
        # Look for description
        desc_tag = card.find(['p', 'div'], class_=lambda c: c and any(w in str(c).lower() for w in ['desc', 'detail', 'content', 'about']))
        desc = desc_tag.get_text(strip=True) if desc_tag else ''

        # Look for image
        img_tag = card.find('img', src=True)
        img_url = img_tag['src'] if img_tag else ''
        if img_tag and img_tag.get('data-original'):
            img_url = img_tag['data-original']

        # Look for price
        price_tag = card.find(['span', 'p', 'div'], class_=lambda c: c and any(w in str(c).lower() for w in ['price', 'prc']))
        price = price_tag.get_text(strip=True) if price_tag else ''

        if p_name in products_by_id:
            if specs:
                products_by_id[p_name]['specs'].update(specs)
            if desc and not products_by_id[p_name]['description']:
                products_by_id[p_name]['description'] = desc
            if price and not products_by_id[p_name]['price']:
                products_by_id[p_name]['price'] = price
            if img_url and not products_by_id[p_name]['image']:
                products_by_id[p_name]['image'] = img_url
        else:
            products_by_id[p_name] = {
                'name': p_name,
                'image': img_url,
                'price': price,
                'source_page': page_url,
                'specs': specs,
                'description': desc
            }

for page_url in sorted(all_urls):
    p_html = fetch(page_url)
    if not p_html:
        continue
    time.sleep(0.5)
    p_soup = BeautifulSoup(p_html, 'html.parser')
    
    # If profile.html, extract profile details
    if 'profile.html' in page_url:
        print("Extracting profile.html details...")
        for table in p_soup.find_all('table'):
            for tr in table.find_all('tr'):
                tds = tr.find_all(['td', 'th'])
                if len(tds) >= 2:
                    k = tds[0].get_text(strip=True)
                    v = tds[1].get_text(strip=True)
                    scraped_data['company_profile'][k] = v
        # Also check key-value divs
        for div in p_soup.find_all(['div', 'li', 'p']):
            t = div.get_text(strip=True)
            if 'GST' in t or 'Turnover' in t or 'Year of' in t or 'Nature of' in t:
                scraped_data['company_profile'][t[:40]] = t

    extract_products_from_soup(p_soup, page_url)

scraped_data['products'] = list(products_by_id.values())
print(f"\nTotal unique products extracted: {len(scraped_data['products'])}")

out_path = r"c:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\indiamart-data.json"
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(scraped_data, f, indent=2, ensure_ascii=False)

print(f"Saved scraped data to {out_path}")
