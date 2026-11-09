import os
from PIL import Image

artifacts_dir = r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded"
base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts"

for name in os.listdir(artifacts_dir):
    p = os.path.join(artifacts_dir, name)
    if os.path.isfile(p):
        im = Image.open(p)
        print(f"\n{name} ({im.size})")
        # Sample average colors in top, middle, bottom
        w, h = im.size
        top_crop = im.crop((0, 0, w, h//3))
        mid_crop = im.crop((0, h//3, w, 2*h//3))
        bot_crop = im.crop((0, 2*h//3, w, h))
        top_crop.save(os.path.join(base_dir, f"{name[:12]}_top.jpg"))
        print(f"Saved {name[:12]}_top.jpg")

