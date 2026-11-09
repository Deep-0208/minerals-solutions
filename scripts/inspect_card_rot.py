import os
from PIL import Image

card_path = r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded\media_1794230433244_3c6dd23d.jpg"
card = Image.open(card_path)

# Let's inspect card orientation
# In card_rotated_270.jpg and card_rotated_90.jpg:
base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts"
for deg in [0, 90, 180, 270]:
    rot = card.rotate(deg, expand=True)
    # Check width vs height
    print(f"Rotation {deg} deg: {rot.size}")

