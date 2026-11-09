import os
from PIL import Image

# Let's inspect where red text is on 90 vs 270
base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts"
for rot in [90, 270]:
    im = Image.open(os.path.join(base_dir, f"card_thumb_{rot}.jpg")).convert('RGB')
    w, h = im.size
    # Count red in top half vs bottom half
    top_red = sum(1 for y in range(h//2) for x in range(w) if im.getpixel((x, y))[0] > 120 and im.getpixel((x, y))[1] < 60)
    bot_red = sum(1 for y in range(h//2, h) for x in range(w) if im.getpixel((x, y))[0] > 120 and im.getpixel((x, y))[1] < 60)
    print(f"Rot {rot}: top_red={top_red}, bot_red={bot_red}")

