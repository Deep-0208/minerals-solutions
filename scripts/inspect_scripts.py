import urllib.request
import gzip
import json
import re
from bs4 import BeautifulSoup

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

# Inspect Script 5
html = fetch("https://www.indiamart.com/mineralssolutions-ahmedabad/")
soup = BeautifulSoup(html, 'html.parser')
scripts = soup.find_all('script')
for i, s in enumerate(scripts):
    text = s.string or ""
    if len(text) > 1000:
        print(f"--- SCRIPT {i} (len: {len(text)}) ---")
        print(text[:1500])
        print("...\n")

# Check JSON-LD
json_lds = soup.find_all('script', type='application/ld+json')
print(f"Found {len(json_lds)} JSON-LD blocks:")
for j in json_lds:
    try:
        data = json.loads(j.string)
        print("JSON-LD Type:", data.get('@type') or [d.get('@type') for d in data if isinstance(d, dict)])
        print(json.dumps(data, indent=2)[:500])
    except Exception as e:
        print("Error parsing JSON-LD:", e)
