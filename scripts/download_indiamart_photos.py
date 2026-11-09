import urllib.request
import json
import os
import re
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Referer': 'https://www.indiamart.com/'
}

with open('Minerals Solutions SEO/photos_extracted.json', 'r', encoding='utf-8') as f:
    photos = json.load(f)

dest_dir = r"c:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\assets\indiamart-images"
os.makedirs(dest_dir, exist_ok=True)

print(f"Starting download of {len(photos)} photos to {dest_dir}...")

downloaded = 0
for i, item in enumerate(photos):
    url = item['url']
    alt = item['alt']
    if 'imlogo.png' in url or 'sprite' in url:
        continue
    
    # generate a clean filename from alt or url
    clean_alt = re.sub(r'[^a-zA-Z0-9]+', '-', alt.strip()).strip('-').lower()
    if not clean_alt or len(clean_alt) < 3:
        clean_alt = f"photo-{i+1}"
        
    ext = os.path.splitext(url)[1].split('?')[0]
    if not ext:
        ext = '.jpg'
        
    filename = f"{clean_alt}{ext}"
    target_path = os.path.join(dest_dir, filename)
    
    # Avoid duplicate name collision
    counter = 1
    base_name = clean_alt
    while os.path.exists(target_path):
        filename = f"{base_name}-{counter}{ext}"
        target_path = os.path.join(dest_dir, filename)
        counter += 1
        
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(target_path, 'wb') as out_f:
                out_f.write(data)
            downloaded += 1
            print(f"[{downloaded}/{len(photos)}] Downloaded: {filename} ({len(data)} bytes)")
        time.sleep(0.3)
    except Exception as e:
        # fallback to 500x500 if 1000x1000 failed
        orig_url = item.get('orig_url')
        if orig_url and orig_url != url:
            try:
                req = urllib.request.Request(orig_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = resp.read()
                    with open(target_path, 'wb') as out_f:
                        out_f.write(data)
                    downloaded += 1
                    print(f"[{downloaded}/{len(photos)}] Fallback Downloaded: {filename} ({len(data)} bytes)")
                time.sleep(0.3)
            except Exception as e2:
                print(f"Failed {url} and {orig_url}: {e2}")
        else:
            print(f"Failed {url}: {e}")

print(f"\nSuccessfully downloaded {downloaded} images to {dest_dir}!")
