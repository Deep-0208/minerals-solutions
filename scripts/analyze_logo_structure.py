import os
from PIL import Image

p = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\public\images\brand\logo.jpg"
img = Image.open(p).convert("RGB")
w, h = img.size

# Let's inspect horizontal projections to see if mark and text are stacked vertically or side-by-side
# We count red and dark pixels per row (y) and per column (x)
row_red = [0] * h
row_dark = [0] * h
col_red = [0] * w
col_dark = [0] * w

for y in range(h):
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r > 140 and g < 70 and b < 70:
            row_red[y] += 1
            col_red[x] += 1
        elif r < 60 and g < 60 and b < 60:
            row_dark[y] += 1
            col_dark[x] += 1

print("--- Row Analysis (Y) ---")
for y in range(0, h, 10):
    print(f"y={y:3d}: red={row_red[y]:3d}, dark={row_dark[y]:3d}")

print("\n--- Column Analysis (X) ---")
for x in range(0, w, 15):
    print(f"x={x:3d}: red={col_red[x]:3d}, dark={col_dark[x]:3d}")

