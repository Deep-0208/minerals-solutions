import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"

# Check the IndiaMART logo image
im_logo = Image.open(os.path.join(base_dir, "assets", "indiamart-images", "minerals-solutions.jpg"))
print("IndiaMART Logo size:", im_logo.size)

# Inspect top-left of brochure page 1 (usually header with logo)
brochure = Image.open(os.path.join(base_dir, "assets", "raw-images", "brochure page 1.jpeg"))
print("Brochure size:", brochure.size)

# Crop top 25% of brochure
w, h = brochure.size
header = brochure.crop((0, 0, w, int(h * 0.25)))
header.save(os.path.join(base_dir, "scripts", "brochure_header.jpg"))
print("Saved brochure header")

# Also crop visiting card top half
card = Image.open(r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded\media_1794230433244_3c6dd23d.jpg")
cw, ch = card.size
card_top = card.crop((0, 0, cw, int(ch * 0.5)))
card_top.save(os.path.join(base_dir, "scripts", "card_top.jpg"))
print("Saved card top")

