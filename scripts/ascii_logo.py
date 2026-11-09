import os
from PIL import Image

p = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\public\images\brand\logo.jpg"
im = Image.open(p).convert("RGB")
w, h = im.size

# Let's inspect the pixels in a text grid to "see" the shape
# Downsample to 50x45 characters
small = im.resize((50, 45))
grid = []
for y in range(45):
    line = []
    for x in range(50):
        r, g, b = small.getpixel((x, y))
        if r > 140 and g < 70 and b < 70:
            line.append("R") # Red
        elif r < 60 and g < 60 and b < 60:
            line.append("#") # Dark
        elif r > 220 and g > 220 and b > 220:
            line.append(".") # White/Background
        else:
            line.append("~") # Intermediate / antialias
    grid.append("".join(line))

print("\n".join(grid))

