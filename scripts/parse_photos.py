from bs4 import BeautifulSoup
import re
import json

with open('Minerals Solutions SEO/photos_raw.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('Title:', soup.title.string if soup.title else '')

images = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-original') or ''
    alt = img.get('alt') or ''
    if src and 'imimg.com' in src and 'sprite' not in src:
        high_res = re.sub(r'-\d+x\d+\.', '-1000x1000.', src)
        images.append({'alt': alt, 'url': high_res, 'orig_url': src})

# Also check any anchor tags pointing to full-size images or data-image attributes
for tag in soup.find_all(True):
    for attr in ['data-image', 'data-large', 'data-zoom', 'data-big']:
        val = tag.get(attr)
        if val and 'imimg.com' in val:
            images.append({'alt': tag.get('title') or tag.get('alt') or '', 'url': val, 'orig_url': val})

seen = set()
unique_images = []
for im in images:
    if im['url'] not in seen:
        seen.add(im['url'])
        unique_images.append(im)

print(f"Total unique photos found on photos.html: {len(unique_images)}")
for i, im in enumerate(unique_images):
    print(f"{i+1}. {im['alt']} -> {im['url']}")

with open('Minerals Solutions SEO/photos_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(unique_images, f, indent=2, ensure_ascii=False)
