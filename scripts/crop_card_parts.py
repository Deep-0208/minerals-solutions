import os
from PIL import Image

card_rot = Image.open(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts\card_rotated_270.jpg")
w, h = card_rot.size
print(f"Card rotated 270 size: {w}x{h}")

# Top left where logo mark is usually located
logo_crop = card_rot.crop((0, 0, int(w * 0.4), int(h * 0.5)))
logo_crop.save(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts\card_logo_crop.jpg")

# Top right / center where company name is
company_crop = card_rot.crop((int(w * 0.2), 0, w, int(h * 0.5)))
company_crop.save(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts\card_company_crop.jpg")

print("Saved card crops")

