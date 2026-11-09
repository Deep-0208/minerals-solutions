from bs4 import BeautifulSoup
import json
import re

with open('Minerals Solutions SEO/products_and_services_raw.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

products = []

# IndiaMART lists products in specific sections or blocks. Let's find all product cards.
# Often cards have class containing 'bo-p-card' or 'prd-card' or have data-item attributes.
# Let's search for all elements with an h2 or h3 or strong that represents a product name.

for item in soup.find_all(['div', 'li', 'section']):
    # Find heading
    heading = item.find(['h2', 'h3', 'a'], class_=lambda c: c and any(w in str(c).lower() for w in ['name', 'title', 'pname', 'prdname']))
    if not heading:
        continue
    p_name = heading.get_text(strip=True)
    if not p_name or len(p_name) < 4 or len(p_name) > 120 or 'View All' in p_name:
        continue
    
    # Check if we already have this product container
    # Find price
    price_tag = item.find(['span', 'p', 'div'], class_=lambda c: c and any(w in str(c).lower() for w in ['price', 'prc']))
    price = price_tag.get_text(strip=True) if price_tag else ''
    
    # Find image
    img = item.find('img')
    img_src = ''
    if img:
        img_src = img.get('src') or img.get('data-original') or ''
        # Convert thumbnail 125x125 or 250x250 to 500x500 or 1000x1000
        if img_src and 'imimg.com' in img_src:
            img_src = re.sub(r'-\d+x\d+\.', '-500x500.', img_src)
    
    # Find specs table
    specs = {}
    for tr in item.find_all('tr'):
        tds = tr.find_all(['td', 'th'])
        if len(tds) >= 2:
            k = tds[0].get_text(strip=True)
            v = tds[1].get_text(strip=True)
            if k and v:
                specs[k] = v
                
    if not specs:
        # Check div-based key-values
        for row in item.find_all(['div', 'li', 'p'], class_=lambda c: c and any(w in str(c).lower() for w in ['spec', 'detail', 'row'])):
            t = row.get_text(separator=':', strip=True)
            if ':' in t:
                pts = [p.strip() for p in t.split(':', 1)]
                if len(pts) == 2 and pts[0] and pts[1]:
                    specs[pts[0]] = pts[1]
                    
    # Find description
    desc_tag = item.find(['p', 'div'], class_=lambda c: c and any(w in str(c).lower() for w in ['desc', 'about', 'summary', 'detail']))
    desc = desc_tag.get_text(strip=True) if desc_tag else ''
    
    # Check if already added
    existing = next((p for p in products if p['name'] == p_name), None)
    if not existing:
        products.append({
            'name': p_name,
            'price': price,
            'image': img_src,
            'specs': specs,
            'description': desc
        })
    else:
        if specs:
            existing['specs'].update(specs)
        if desc and not existing['description']:
            existing['description'] = desc
        if price and not existing['price']:
            existing['price'] = price
        if img_src and not existing['image']:
            existing['image'] = img_src

print(f"Extracted {len(products)} detailed products from HTML cards:")
for i, p in enumerate(products):
    print(f"\n{i+1}. {p['name']}")
    if p['price']:
        print(f"   Price: {p['price']}")
    if p['image']:
        print(f"   Image: {p['image']}")
    if p['specs']:
        print(f"   Specs ({len(p['specs'])}): {list(p['specs'].keys())[:5]}")
    if p['description']:
        print(f"   Desc: {p['description'][:100]}...")

with open('Minerals Solutions SEO/products_detailed.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)
