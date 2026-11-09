import os
from PIL import Image

for name in ["media_1794233840550_00d859cc.jpg", "media_1794233843305_d20e42df.jpg", "media_1794230433244_9b8f0c70.jpg"]:
    p = os.path.join(r"C:\Users\DELL\.gemini\antigravity\brain\342b09f9-7dbc-4aad-978f-b80e0b31bf7f\.user_uploaded", name)
    im = Image.open(p)
    print(f"File {name}: size={im.size}")
    # Rotate 270 and check
    rot = im.rotate(270, expand=True)
    rot.resize((400, int(400 * rot.size[1] / rot.size[0]))).save(os.path.join(r"C:\Users\DELL\Desktop\SEO\Minerals Solutions SEO\scripts", f"thumb_{name}"))

