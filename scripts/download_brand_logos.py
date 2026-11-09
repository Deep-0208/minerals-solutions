import urllib.request
import os

urls = [
    'https://5.imimg.com/data5/SELLER/Logo/2026/10/654904866/MI/TS/FO/225132248/logo-1000x1000.jpg',
    'https://5.imimg.com/data5/SELLER/Logo/2026/10/654904866/MI/TS/FO/225132248/logo-500x500.jpg',
    'https://5.imimg.com/data5/SELLER/Logo/2026/10/654904866/MI/TS/FO/225132248/logo-250x250.jpg',
    'https://5.imimg.com/data5/SELLER/Logo/2026/10/654904866/MI/TS/FO/225132248/logo.jpg'
]

out_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\public\images\brand"
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
for u in urls:
    filename = u.split("/")[-1]
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            out_path = os.path.join(out_dir, filename)
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"SUCCESS: {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"FAIL: {filename} - {e}")

