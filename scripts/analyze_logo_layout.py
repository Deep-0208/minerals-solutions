import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"
im_logo = Image.open(os.path.join(base_dir, "assets", "indiamart-images", "minerals-solutions.jpg")).convert('RGB')
w, h = im_logo.size
print(f"im_logo dimensions: {w}x{h}")

# In minerals-solutions.jpg, let's inspect the layout of logo mark vs text
# Let's save a clean PNG version of this logo to public/images/brand/
os.makedirs(os.path.join(base_dir, "public", "images", "brand"), exist_ok=True)
im_logo.save(os.path.join(base_dir, "public", "images", "brand", "official-logo-raw.png"))

# Let's check the colors and text layout
# Where are the red pixels located?
red_coords = []
black_coords = []

for y in range(h):
    for x in range(w):
        r, g, b = im_logo.getpixel((x, y))
        if r > 150 and g < 60 and b < 60:
            red_coords.append((x, y))
        elif r < 60 and g < 60 and b < 60:
            black_coords.append((x, y))

if red_coords:
    min_rx = min(c[0] for c in red_coords)
    max_rx = max(c[0] for c in red_coords)
    min_ry = min(c[1] for c in red_coords)
    max_ry = max(c[1] for c in red_coords)
    print(f"Red area bbox: x=({min_rx}, {max_rx}), y=({min_ry}, {max_ry})")

if black_coords:
    min_bx = min(c[0] for c in black_coords)
    max_bx = max(c[0] for c in black_coords)
    min_by = min(c[1] for c in black_coords)
    max_by = max(c[1] for c in black_coords)
    print(f"Black area bbox: x=({min_bx}, {max_bx}), y=({min_by}, {max_by})")

