import urllib.request
import gzip
import json
import re
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate'
}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        raw = resp.read()
        try:
            return gzip.decompress(raw).decode('utf-8', errors='ignore')
        except Exception:
            return raw.decode('utf-8', errors='ignore')

url = "https://www.indiamart.com/mineralssolutions-ahmedabad/"
html = fetch(url)
soup = BeautifulSoup(html, 'html.parser')

print(f"Title: {soup.title.string if soup.title else 'No Title'}")

# Look for embedded JSON or state
scripts = soup.find_all('script')
print(f"Total script tags: {len(scripts)}")
for i, s in enumerate(scripts):
    text = s.string or ""
    if any(keyword in text for keyword in ['glusr', 'mcat', 'product', 'company', 'company_details', 'INITIAL_STATE', 'catalogue']):
        print(f"Script {i} contains keywords, length: {len(text)}")
        if len(text) < 1000:
            print(text[:300])

# Collect all internal links
links = set()
for a in soup.find_all('a', href=True):
    href = a['href']
    full_url = urljoin(url, href)
    if 'mineralssolutions-ahmedabad' in full_url:
        links.add(full_url)

print(f"\nDiscovered {len(links)} internal links:")
for l in sorted(links):
    print(" -", l)
