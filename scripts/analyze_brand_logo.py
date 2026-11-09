import os
from PIL import Image
from collections import Counter

def analyze_image(path, name):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    img = Image.open(path).convert('RGB')
    print(f"\n--- Analysis of {name} ({img.size[0]}x{img.size[1]}) ---")
    
    # Resize to small for fast color clustering
    small = img.resize((150, 150))
    pixels = list(small.getdata())
    
    # Filter out near white (background) and near black to find chromatic colors
    chromatic = []
    dark_neutrals = []
    light_neutrals = []
    
    for r, g, b in pixels:
        max_c = max(r, g, b)
        min_c = min(r, g, b)
        sat = (max_c - min_c) / max(max_c, 1)
        lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
        
        if sat > 0.25:
            chromatic.append((r, g, b))
        elif lum < 60:
            dark_neutrals.append((r, g, b))
        elif lum > 200:
            light_neutrals.append((r, g, b))
            
    print(f"Total sampled pixels: {len(pixels)}")
    print(f"Chromatic pixels: {len(chromatic)}")
    print(f"Dark neutral pixels: {len(dark_neutrals)}")
    
    def top_colors(col_list, n=5):
        # bucket to 16
        bucketed = [((r // 8) * 8, (g // 8) * 8, (b // 8) * 8) for r, g, b in col_list]
        counts = Counter(bucketed).most_common(n)
        return counts

    print("\nTop Chromatic Colors:")
    for (r, g, b), count in top_colors(chromatic, 6):
        hex_c = f"#{r:02x}{g:02x}{b:02x}"
        print(f"  {hex_c} (RGB {r}, {g}, {b}) - Count: {count}")
        
    print("\nTop Dark Neutral Colors:")
    for (r, g, b), count in top_colors(dark_neutrals, 4):
        hex_c = f"#{r:02x}{g:02x}{b:02x}"
        print(f"  {hex_c} (RGB {r}, {g}, {b}) - Count: {count}")

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"
analyze_image(os.path.join(base_dir, "assets", "indiamart-images", "minerals-solutions.jpg"), "IndiaMART Logo Profile Image")
analyze_image(r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded\media_1794230433244_3c6dd23d.jpg", "Official Visiting Card")
analyze_image(os.path.join(base_dir, "assets", "raw-images", "brochure page 1.jpeg"), "Brochure Page 1")

