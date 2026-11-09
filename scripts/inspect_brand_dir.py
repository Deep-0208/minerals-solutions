import os
from PIL import Image

brand_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\public\images\brand"
for f in os.listdir(brand_dir):
    p = os.path.join(brand_dir, f)
    if os.path.isfile(p):
        im = Image.open(p)
        print(f"{f}: format={im.format}, size={im.size}, mode={im.mode}")

