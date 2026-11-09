import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"
im_logo = Image.open(os.path.join(base_dir, "assets", "indiamart-images", "minerals-solutions.jpg")).convert('RGB')
w, h = im_logo.size

# Let's crop vertical thirds
im_logo.crop((0, 0, w, h//3)).save(os.path.join(base_dir, "scripts", "logo_top.png"))
im_logo.crop((0, h//3, w, 2*h//3)).save(os.path.join(base_dir, "scripts", "logo_mid.png"))
im_logo.crop((0, 2*h//3, w, h)).save(os.path.join(base_dir, "scripts", "logo_bot.png"))
print("Saved 3 slices of logo")

