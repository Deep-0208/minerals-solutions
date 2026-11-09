import os
from PIL import Image

artifacts_dir = r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded"
for f in os.listdir(artifacts_dir):
    p = os.path.join(artifacts_dir, f)
    if os.path.isfile(p):
        im = Image.open(p)
        print(f"{f}: size={im.size}, mode={im.mode}")

