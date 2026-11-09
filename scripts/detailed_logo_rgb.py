import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"

# Let's inspect minerals-solutions.jpg in detail
im_logo = Image.open(os.path.join(base_dir, "assets", "indiamart-images", "minerals-solutions.jpg")).convert('RGB')
w, h = im_logo.size

# Let's find bounding boxes of non-white content
pixels = im_logo.load()
min_x, min_y, max_x, max_y = w, h, 0, 0
red_pixels = []
black_pixels = []

for y in range(h):
    for x in range(w):
        r, g, b = pixels[x, y]
        # Check if non-white
        if r < 240 or g < 240 or b < 240:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y
            
            # Check red: high R, low G, low B
            if r > 140 and g < 70 and b < 70:
                red_pixels.append((r, g, b))
            # Check black/charcoal: all low
            elif r < 60 and g < 60 and b < 60:
                black_pixels.append((r, g, b))

print(f"Content bbox: ({min_x}, {min_y}) to ({max_x}, {max_y}), size: {max_x - min_x} x {max_y - min_y}")
print(f"Red pixels count: {len(red_pixels)}")
if red_pixels:
    avg_r = sum(p[0] for p in red_pixels) // len(red_pixels)
    avg_g = sum(p[1] for p in red_pixels) // len(red_pixels)
    avg_b = sum(p[2] for p in red_pixels) // len(red_pixels)
    print(f"Average Red: #{avg_r:02x}{avg_g:02x}{avg_b:02x} (RGB {avg_r}, {avg_g}, {avg_b})")
    # Top 3 reds
    from collections import Counter
    top_r = Counter(red_pixels).most_common(5)
    print("Most common Red pixels:", [(f"#{c[0]:02x}{c[1]:02x}{c[2]:02x}", count) for c, count in top_r])

print(f"Black pixels count: {len(black_pixels)}")
if black_pixels:
    avg_r = sum(p[0] for p in black_pixels) // len(black_pixels)
    avg_g = sum(p[1] for p in black_pixels) // len(black_pixels)
    avg_b = sum(p[2] for p in black_pixels) // len(black_pixels)
    print(f"Average Black: #{avg_r:02x}{avg_g:02x}{avg_b:02x} (RGB {avg_r}, {avg_g}, {avg_b})")
    top_b = Counter(black_pixels).most_common(5)
    print("Most common Black pixels:", [(f"#{c[0]:02x}{c[1]:02x}{c[2]:02x}", count) for c, count in top_b])

