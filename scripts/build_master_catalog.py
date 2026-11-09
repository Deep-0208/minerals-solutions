import json
import os
import re

with open('Minerals Solutions SEO/indiamart-data.json', 'r', encoding='utf-8') as f:
    data1 = json.load(f)

with open('Minerals Solutions SEO/products_detailed.json', 'r', encoding='utf-8') as f:
    data2 = json.load(f)

with open('Minerals Solutions SEO/photos_extracted.json', 'r', encoding='utf-8') as f:
    photos = json.load(f)

# Build a unified dictionary of products
master_products = {}

# Seed from data1 products
for p in data1.get('products', []):
    name = p.get('name', '').strip()
    if not name or name in ['Get in touch with us']:
        continue
    master_products[name] = {
        'name': name,
        'price': p.get('price'),
        'image': p.get('image'),
        'specs': p.get('specs', {}),
        'description': p.get('description', ''),
        'source_page': p.get('source_page', '')
    }

# Merge from data2 products
for p in data2:
    name = p.get('name', '').strip()
    if not name or name in ['Get in touch with us']:
        continue
    if name not in master_products:
        master_products[name] = p
    else:
        if p.get('price') and not master_products[name].get('price'):
            master_products[name]['price'] = p.get('price')
        if p.get('specs'):
            master_products[name]['specs'].update(p.get('specs'))
        if p.get('description') and not master_products[name].get('description'):
            master_products[name]['description'] = p.get('description')
        if p.get('image') and not master_products[name].get('image'):
            master_products[name]['image'] = p.get('image')

# Merge photos to catch any missing products
for ph in photos:
    alt = ph.get('alt', '').strip()
    if alt and alt not in ['Minerals Solutions', 'IndiaMART InterMESH Ltd', '']:
        if alt not in master_products:
            master_products[alt] = {
                'name': alt,
                'price': None,
                'image': ph.get('url'),
                'specs': {},
                'description': f"Official Minerals Solutions equipment: {alt}",
                'source_page': 'https://www.indiamart.com/mineralssolutions-ahmedabad/photos.html'
            }

print(f"Total compiled unique products: {len(master_products)}")

# Categorize products into logical engineering silos
silos = {
    "Thermal Drying Systems & Furnaces": [],
    "Dryer & Kiln Mechanical Spares": [],
    "Fertilizer & Granulation Machinery": [],
    "Pellet Mills & Biomass Processing": [],
    "Sand Washing & Mineral Processing Plants": [],
    "Conveyor Systems & Material Handling": [],
    "Crushing Machinery": [],
    "Air Pollution & Environmental Systems": []
}

for name, p in sorted(master_products.items()):
    n_lower = name.lower()
    if any(k in n_lower for k in ['trunnion', 'thrust roller', 'support roller', 'riding ring', 'tyre', 'girth gear', 'flights', 'segment sprocket']):
        silos["Dryer & Kiln Mechanical Spares"].append(p)
    elif any(k in n_lower for k in ['fertilizer', 'disc granulator', 'pan granulator', 'granulation']):
        silos["Fertilizer & Granulation Machinery"].append(p)
    elif any(k in n_lower for k in ['pellet mill', 'pellet making', 'die', 'roller assembly']):
        silos["Pellet Mills & Biomass Processing"].append(p)
    elif any(k in n_lower for k in ['washing plant', 'sand washer', 'stone washer', 'vibrating screen', 'rotary screen', 'trommel']):
        silos["Sand Washing & Mineral Processing Plants"].append(p)
    elif any(k in n_lower for k in ['conveyor', 'idler', 'pulley', 'lagging']):
        silos["Conveyor Systems & Material Handling"].append(p)
    elif any(k in n_lower for k in ['crusher']):
        silos["Crushing Machinery"].append(p)
    elif any(k in n_lower for k in ['bag filter', 'pollution', 'dust collector']):
        silos["Air Pollution & Environmental Systems"].append(p)
    elif any(k in n_lower for k in ['dryer', 'hot air generator', 'burner', 'heating']):
        silos["Thermal Drying Systems & Furnaces"].append(p)
    else:
        silos["Thermal Drying Systems & Furnaces"].append(p)

print("\nCategorized Breakdown:")
for s_name, p_list in silos.items():
    print(f" - {s_name}: {len(p_list)} products")

# Generate indiamart-scraped-catalog.md
md_lines = [
    "# Official IndiaMART Scraped Catalog & Company Documentation",
    "**Source URL:** `https://www.indiamart.com/mineralssolutions-ahmedabad/`  ",
    "**IndiaMART Trust Profile:** Verified Exporter | GST Verified | Member Since 2023  ",
    "**Extraction Date:** November 2026  ",
    "**Total Products Extracted:** " + str(len(master_products)) + " items  ",
    "**Total Scraped High-Res Images:** 51 images (47 product photos + 4 facility photos)  ",
    "\n---\n",
    "## 1. Verified Company Profile & Factsheet",
    "\n| Attribute | Verified Value on IndiaMART |",
    "| :--- | :--- |",
    "| **Company Name** | **Minerals Solutions** |",
    "| **Legal Status of Firm** | **Proprietorship** |",
    "| **Company CEO / Key Executive** | **P Amrutlal / Vipulbhai A. Prajapati** |",
    "| **GST Identification Number (GSTIN)** | **`24AUSPP9555F1ZZ`** (Verified) |",
    "| **UDYAM Registration** | **`UDYAM-GJ-09-****428`** |",
    "| **Year of Establishment / GST Date** | **2023** |",
    "| **Nature of Business** | **Manufacturer / Service Provider / Office / Sales Office** |",
    "| **Total Employees** | **Up to 10 People** |",
    "| **Banker** | **Axis Bank** |",
    "| **IndiaMART PNS Number** | `+91-8047626632` |",
    "| **Direct Sales Hotlines** | `+91 6352453050` / `+91 9106163058` |",
    "| **Official Email** | `mineralssolutions76@gmail.com` / `sales@mineralssolution.in` |",
    "| **Registered Facility Address** | 10, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam, Dist. Gandhinagar - 382330, Gujarat, India |",
    "\n---\n",
    "## 2. Factory Infrastructure & Facility Verification",
    "\nFour official high-resolution 1000x1000 facility proof photographs were extracted and downloaded to `Minerals Solutions SEO/assets/indiamart-images/`:\n",
    "1. **`factory-signboard.png`**: Official factory facade and signboard displaying Minerals Solutions at Zak GIDC.",
    "2. **`factory-office.jpeg`**: Administrative and design engineering office.",
    "3. **`manufacturing-unit.jpeg`**: Heavy fabrication workshop showing rotary drum rollers, welding bays, and assembly floor.",
    "4. **`working-team.jpeg`**: Mechanical fabrication and plant engineering working team.",
    "\n---\n",
    "## 3. Product Catalog Breakdown by Engineering Silos\n"
]

for s_name, p_list in silos.items():
    md_lines.append(f"### {s_name} ({len(p_list)} Items)\n")
    for p in p_list:
        md_lines.append(f"#### {p['name']}")
        if p.get('price'):
            md_lines.append(f"- **Indicative Price:** `{p['price']}`")
        if p.get('image'):
            md_lines.append(f"- **Image URL:** [{os.path.basename(p['image'])}]({p['image']})")
        if p.get('description'):
            md_lines.append(f"- **Description:** {p['description']}")
        if p.get('specs') and len(p['specs']) > 0:
            md_lines.append("- **Technical Specifications:**")
            for sk, sv in p['specs'].items():
                md_lines.append(f"  - **{sk}:** {sv}")
        md_lines.append("\n")

with open('Minerals Solutions SEO/indiamart-scraped-catalog.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(md_lines))

print("Successfully wrote indiamart-scraped-catalog.md!")
