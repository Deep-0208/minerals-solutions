import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"
brochure = Image.open(os.path.join(base_dir, "assets", "raw-images", "brochure page 1.jpeg"))
w, h = brochure.size

# Let's crop several vertical slices of brochure page 1 to see where the logo and text are
# Top slice 0% to 15%
s1 = brochure.crop((0, 0, w, int(h * 0.15)))
s1.save(os.path.join(base_dir, "scripts", "brochure_slice1.jpg"))

# Let's also check bottom 15% (footer often has company name, contact, logo)
s_foot = brochure.crop((0, int(h * 0.85), w, h))
s_foot.save(os.path.join(base_dir, "scripts", "brochure_footer.jpg"))

print("Saved brochure slice 1 and footer")

