import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts"
card = Image.open(r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded\media_1794230433244_3c6dd23d.jpg")

# Test 90 vs 270: which orientation has "MINERALS SOLUTIONS" legible horizontally?
# Let's save a thumbnail of both so we can check
card.rotate(90, expand=True).resize((400, 225)).save(os.path.join(base_dir, "card_thumb_90.jpg"))
card.rotate(270, expand=True).resize((400, 225)).save(os.path.join(base_dir, "card_thumb_270.jpg"))
print("Saved thumb 90 and 270")

