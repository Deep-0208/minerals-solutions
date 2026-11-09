import os
from PIL import Image

card_path = r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded\media_1794230433244_3c6dd23d.jpg"
card = Image.open(card_path)
print("Card original size:", card.size)
# The image might be rotated. Let's check aspect ratio: 575 x 1024 (vertical).
# A visiting card is usually horizontal (aspect ratio ~ 1.75). If it is 575x1024, it might be rotated 90 degrees!
# Let's check if rotating it 90 degrees or 270 degrees makes it horizontal: 1024x575
card_rot = card.rotate(270, expand=True)
card_rot.save(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts\card_rotated_270.jpg")
card_rot90 = card.rotate(90, expand=True)
card_rot90.save(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts\card_rotated_90.jpg")
print("Saved rotated cards")

