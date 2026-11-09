def rel_luminance(rgb):
    r, g, b = [x / 255.0 for x in rgb]
    r = r / 12.92 if r <= 0.03928 else ((r + 0.055) / 1.055) ** 2.4
    g = g / 12.92 if g <= 0.03928 else ((g + 0.055) / 1.055) ** 2.4
    b = b / 12.92 if b <= 0.03928 else ((b + 0.055) / 1.055) ** 2.4
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast_ratio(rgb1, rgb2):
    l1 = rel_luminance(rgb1)
    l2 = rel_luminance(rgb2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

white = (255, 255, 255)
logo_red = (190, 35, 35)      # #BE2323
logo_red_dark = (182, 32, 32) # #B62020
dark_charcoal = (42, 44, 45)  # #2A2C2D
slate_900 = (15, 23, 42)      # #0F172A
slate_800 = (30, 41, 59)      # #1E293B
slate_600 = (71, 85, 105)     # #475569

print(f"White vs Logo Red (#BE2323): {contrast_ratio(white, logo_red):.2f}:1")
print(f"White vs Darker Red (#B62020): {contrast_ratio(white, logo_red_dark):.2f}:1")
print(f"White vs Charcoal (#2A2C2D): {contrast_ratio(white, dark_charcoal):.2f}:1")
print(f"White vs Slate 900 (#0F172A): {contrast_ratio(white, slate_900):.2f}:1")
print(f"White vs Slate 800 (#1E293B): {contrast_ratio(white, slate_800):.2f}:1")
print(f"White vs Slate 600 (#475569): {contrast_ratio(white, slate_600):.2f}:1")

