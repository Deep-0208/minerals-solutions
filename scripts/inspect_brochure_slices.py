import os
from PIL import Image

base_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO"

for name in ["brochure_slice1.jpg", "brochure_footer.jpg"]:
    img = Image.open(os.path.join(base_dir, "scripts", name)).convert('RGB')
    print(f"=== {name} ({img.size}) ===")
    # Sample colors
    colors = img.resize((100, 100))
    pixels = list(colors.getdata())
    from collections import Counter
    # bucket
    b_colors = [((r // 16) * 16, (g // 16) * 16, (b // 16) * 16) for r, g, b in pixels]
    counts = Counter(b_colors).most_common(5)
    for (r, g, b), count in counts:
        print(f"  #{r:02x}{g:02x}{b:02x} count: {count}")

