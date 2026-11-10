import os
import shutil
from PIL import Image, ImageFilter
import numpy as np

src_path = r"C:\Users\DELL\Desktop\Sharp MS Monogram Logo on White.png"
brand_dir = r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\public\images\brand"

# 1. Delete all old logo files in public/images/brand/
old_files = [
    "logo-1000x1000.jpg",
    "logo.jpg",
    "minerals-solutions-logo-lg.webp",
    "minerals-solutions-logo-thumb.webp",
    "official-logo-raw.png"
]
for f in old_files:
    p = os.path.join(brand_dir, f)
    if os.path.exists(p):
        os.remove(p)
        print(f"Deleted old logo file: {p}")

# 2. Load the source image
img = Image.open(src_path).convert("RGBA")
w, h = img.size
print(f"Loaded source image: {w}x{h}")

# 3. Detect bounding box of the emblem
arr = np.array(img, dtype=np.float32)
# Pixels that belong to emblem: chromatic (red) or dark (black/charcoal)
r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
# Background is off-white ~ (225-235) with small color delta
is_fg = (r < 200) | (g < 200) | (b < 200) | (np.abs(r - g) > 20) | (np.abs(g - b) > 20)

y_indices, x_indices = np.where(is_fg)
min_x, max_x = int(np.min(x_indices)), int(np.max(x_indices))
min_y, max_y = int(np.min(y_indices)), int(np.max(y_indices))
print(f"Emblem bbox: ({min_x}, {min_y}) to ({max_x}, {max_y}), size: {max_x - min_x} x {max_y - min_y}")

# Center of emblem and make it a clean square crop with 4% padding
cx = (min_x + max_x) // 2
cy = (min_y + max_y) // 2
half_size = int(max(max_x - min_x, max_y - min_y) * 0.54) # 8% total margin

crop_x1 = max(0, cx - half_size)
crop_y1 = max(0, cy - half_size)
crop_x2 = min(w, cx + half_size)
crop_y2 = min(h, cy + half_size)

cropped = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
cw, ch = cropped.size
print(f"Cropped square area: {cw}x{ch}")

# 4. Generate Master Pure White version (normalize background to 255, 255, 255)
c_arr = np.array(cropped, dtype=np.float32)
cr, cg, cb, ca = c_arr[:,:,0], c_arr[:,:,1], c_arr[:,:,2], c_arr[:,:,3]

# Create pure white background version
white_bg_arr = c_arr[:,:,:3].copy()
bg_mask = (cr > 215) & (cg > 215) & (cb > 215) & (np.abs(cr - cg) < 20) & (np.abs(cg - cb) < 20)
white_bg_arr[bg_mask] = [255, 255, 255]
# Soft transition for near background
transition_mask = (cr > 195) & (cr <= 215) & (cg > 195) & (cb > 195) & (np.abs(cr - cg) < 18)
for i in range(3):
    factor = (white_bg_arr[:,:,i] - 195) / (215 - 195)
    factor = np.clip(factor, 0, 1)
    white_bg_arr[transition_mask, i] = white_bg_arr[transition_mask, i] * (1 - factor[transition_mask]) + 255 * factor[transition_mask]

master_white = Image.fromarray(np.uint8(np.clip(white_bg_arr, 0, 255)), "RGB")

# 5. Generate Master Transparent version
# Mask alpha: 0 for background, 255 for foreground, antialiased transition
alpha_channel = np.ones((ch, cw), dtype=np.float32) * 255.0
# Distance from white
# Let's measure saturation and darkness
lum = 0.2126 * cr + 0.7152 * cg + 0.0722 * cb
max_c = np.maximum(np.maximum(cr, cg), cb)
min_c = np.minimum(np.minimum(cr, cg), cb)
sat = (max_c - min_c) / np.maximum(max_c, 1.0)

# If high luminance and low saturation, it's background
is_bg_float = np.clip((lum - 190.0) / (225.0 - 190.0), 0.0, 1.0)
# don't make chromatic pixels transparent
is_bg_float[sat > 0.15] = 0.0
alpha_channel = (1.0 - is_bg_float) * 255.0

trans_arr = np.dstack([c_arr[:,:,:3], alpha_channel])
master_trans = Image.fromarray(np.uint8(np.clip(trans_arr, 0, 255)), "RGBA")

# 6. Generate Dark Background version (for dark slate footers)
# In this version: black/charcoal pixels become pure white (#FFFFFF), red pixels stay vivid red (#DA020D)
dark_mode_arr = trans_arr.copy()
# Identify black/charcoal pixels: low lum and low saturation
is_charcoal = (lum < 75.0) & (sat < 0.25)
# Soft blend for antialiased charcoal edges
charcoal_factor = np.clip((75.0 - lum) / 50.0, 0.0, 1.0) * (1.0 - np.clip(sat / 0.25, 0.0, 1.0))
for i in range(3):
    dark_mode_arr[:,:,i] = dark_mode_arr[:,:,i] * (1.0 - charcoal_factor) + 255.0 * charcoal_factor

master_dark = Image.fromarray(np.uint8(np.clip(dark_mode_arr, 0, 255)), "RGBA")

# 7. Save all deliverables into public/images/brand/
# Master White PNG & WebP
master_white.save(os.path.join(brand_dir, "logo.png"), "PNG")
master_white.save(os.path.join(brand_dir, "logo.webp"), "WEBP", quality=95)

# Scaled WebP variants
master_white.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-lg.webp"), "WEBP", quality=92)
master_white.resize((256, 256), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-md.webp"), "WEBP", quality=90)
master_white.resize((128, 128), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-thumb.webp"), "WEBP", quality=88)

# Transparent PNG & WebP (Header & Light pages)
master_trans.save(os.path.join(brand_dir, "logo-transparent.png"), "PNG")
master_trans.save(os.path.join(brand_dir, "logo-transparent.webp"), "WEBP", quality=95)
master_trans.resize((256, 256), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-transparent-md.webp"), "WEBP", quality=90)
master_trans.resize((128, 128), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-transparent-thumb.webp"), "WEBP", quality=88)

# Dark mode PNG & WebP (Footer & Dark sections)
master_dark.save(os.path.join(brand_dir, "logo-dark.png"), "PNG")
master_dark.save(os.path.join(brand_dir, "logo-dark.webp"), "WEBP", quality=95)
master_dark.resize((256, 256), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-dark-md.webp"), "WEBP", quality=90)
master_dark.resize((128, 128), Image.Resampling.LANCZOS).save(os.path.join(brand_dir, "logo-dark-thumb.webp"), "WEBP", quality=88)

print("\n--- Summary of Generated Logo Assets ---")
for f in sorted(os.listdir(brand_dir)):
    p = os.path.join(brand_dir, f)
    size_kb = os.path.getsize(p) / 1024
    print(f"  {f} ({size_kb:.1f} KB)")
