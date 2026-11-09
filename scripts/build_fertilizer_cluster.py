#!/usr/bin/env python3
"""
Generates the Semantic Topic Cluster for Fertilizer Granulation & Pellet Plants (Pillar 3)
Outputs:
- Minerals Solutions SEO/fertilizer-cluster-plan.json
- Minerals Solutions SEO/fertilizer-cluster-plan.md
- Minerals Solutions SEO/fertilizer-cluster-map.html
"""

import json
import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_PATH = os.path.join(os.path.dirname(BASE_DIR), ".agents", "skills", "seo-cluster", "templates", "cluster-map.html")

pillar = {
    "title": "Fertilizer Granulation Plants & Biomass Pellet Machinery",
    "keyword": "fertilizer granulation plant manufacturer",
    "volume": 2100,
    "template": "ultimate-guide",
    "wordCount": 3400,
    "url": "/products/granulation-pellet-plants/"
}

clusters = [
    {
        "name": "Fertilizer Pan & Disc Granulation",
        "color": "#1e3a5f",
        "posts": [
            {
                "title": "Pan Disc Fertilizer Granulation Machine",
                "keyword": "pan disc fertilizer granulator manufacturer ahmedabad",
                "volume": 1100,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/granulation-pellet-plants/disc-granulator/",
                "status": "planned"
            },
            {
                "title": "Turnkey Fertilizer Granulation Plant",
                "keyword": "npk organic fertilizer granulation plant india",
                "volume": 850,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/granulation-pellet-plants/fertilizer-plant/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Biomass Pellet Processing",
        "color": "#59a14f",
        "posts": [
            {
                "title": "Agro Waste Biomass Pellet Mill",
                "keyword": "biomass pellet making machine manufacturer gujarat",
                "volume": 1200,
                "template": "landing-page",
                "wordCount": 1600,
                "url": "/products/granulation-pellet-plants/biomass-pellet-mill/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Pellet Mill Tooling & Spares",
        "color": "#f28e2b",
        "posts": [
            {
                "title": "Pellet Mill Ring Dies & Flat Dies",
                "keyword": "pellet mill die manufacturer india",
                "volume": 720,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/granulation-pellet-plants/pellet-mill-die/",
                "status": "planned"
            },
            {
                "title": "Pellet Mill Roller Shell Assembly",
                "keyword": "pellet mill roller shell assembly",
                "volume": 650,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/granulation-pellet-plants/pellet-mill-roller-assembly/",
                "status": "planned"
            }
        ]
    }
]

# Generate Links
links = []

# 1. Mandatory Pillar <-> Spoke
for ci, c in enumerate(clusters):
    for pi, p in enumerate(c["posts"]):
        node_id = f"cluster-{ci}-post-{pi}"
        links.append({"from": node_id, "to": "pillar", "type": "mandatory", "anchor": pillar["keyword"]})
        links.append({"from": "pillar", "to": node_id, "type": "mandatory", "anchor": p["keyword"]})

# 2. Recommended Intra-cluster links
for ci, c in enumerate(clusters):
    num_p = len(c["posts"])
    if num_p > 1:
        for i in range(num_p):
            for j in range(i + 1, num_p):
                node_a = f"cluster-{ci}-post-{i}"
                node_b = f"cluster-{ci}-post-{j}"
                links.append({"from": node_a, "to": node_b, "type": "recommended", "anchor": c["posts"][j]["keyword"]})
                links.append({"from": node_b, "to": node_a, "type": "recommended", "anchor": c["posts"][i]["keyword"]})

# 3. Inter-cluster links
# Granulation Plant (0,1) <-> Disc Granulator (0,0) is intra-cluster
# Pellet Mill (1,0) <-> Pellet Die (2,0)
links.append({"from": "cluster-1-post-0", "to": "cluster-2-post-0", "type": "recommended", "anchor": "precision alloy pellet mill die"})
# Pellet Mill (1,0) <-> Roller Assembly (2,1)
links.append({"from": "cluster-1-post-0", "to": "cluster-2-post-1", "type": "recommended", "anchor": "pellet mill roller shell assembly"})
# Die (2,0) <-> Roller Assembly (2,1)
links.append({"from": "cluster-2-post-0", "to": "cluster-2-post-1", "type": "recommended", "anchor": "roller assembly for pellet die"})

total_posts = 1 + sum(len(c["posts"]) for c in clusters)
total_words = pillar["wordCount"] + sum(sum(p["wordCount"] for p in c["posts"]) for c in clusters)

cluster_data = {
    "pillar": pillar,
    "clusters": clusters,
    "links": links,
    "meta": {
        "totalPosts": total_posts,
        "totalClusters": len(clusters),
        "totalLinks": len(links),
        "estimatedWords": total_words
    }
}

# Write JSON
json_out_path = os.path.join(BASE_DIR, "fertilizer-cluster-plan.json")
with open(json_out_path, "w", encoding="utf-8") as f:
    json.dump(cluster_data, f, indent=2)
print(f"Wrote {json_out_path}")

# Write HTML Map
if os.path.exists(TEMPLATE_PATH):
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        html_template = f.read()
    
    replacement_str = "const CLUSTER_DATA = " + json.dumps(cluster_data, indent=2) + ";"
    pattern = r"const CLUSTER_DATA = \{[\s\S]*?\};\s*// === END CLUSTER DATA ==="
    replacement = replacement_str + "\n    // === END CLUSTER DATA ==="
    rendered_html = re.sub(pattern, replacement, html_template)
    
    html_out_path = os.path.join(BASE_DIR, "fertilizer-cluster-map.html")
    with open(html_out_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    print(f"Wrote {html_out_path}")

# Write Markdown Plan
md_lines = [
    "# Fertilizer Granulation & Pellet Plants Semantic Cluster Plan",
    f"**Pillar Keyword:** `{pillar['keyword']}`  ",
    f"**Target Canonical URL:** `https://mineralssolution.in{pillar['url']}`  ",
    f"**Total Pages in Silo:** {total_posts} (1 Pillar Hub + {total_posts - 1} Dedicated Spokes)  ",
    f"**Total Estimated Content Words:** {total_words:,} words  ",
    f"**Total Internal Links Designed:** {len(links)} links  ",
    "",
    "---",
    "",
    "## 1. Hub & Spoke Architecture Breakdown",
    "",
    f"### Pillar Page: {pillar['title']}",
    f"- **URL:** `{pillar['url']}`",
    f"- **Primary Keyword:** `{pillar['keyword']}` (Vol: {pillar['volume']}/mo)",
    f"- **Target Word Count:** {pillar['wordCount']} words | **Template:** `{pillar['template']}`",
    "- **Purpose:** Comprehensive plant engineering guide for organic compost granulation, NPK compound fertilizers, disc pelletizing technology, and biomass waste processing.",
    ""
]

for ci, c in enumerate(clusters):
    md_lines.append(f"### Cluster {ci + 1}: {c['name']}")
    for pi, p in enumerate(c["posts"]):
        md_lines.append(f"#### Spoke {ci + 1}.{pi + 1}: {p['title']}")
        md_lines.append(f"- **Target URL:** `{p['url']}`")
        md_lines.append(f"- **Primary Keyword:** `{p['keyword']}` (Vol: {p['volume']}/mo)")
        md_lines.append(f"- **Word Count Target:** {p['wordCount']} words | **Template:** `{p['template']}`")
        md_lines.append(f"- **Node ID:** `cluster-{ci}-post-{pi}`")
        md_lines.append("")

md_lines.extend([
    "---",
    "",
    "## 2. Internal Link Matrix",
    "",
    "| From Node | To Node | Link Type | Anchor Text / Target Context |",
    "| :--- | :--- | :--- | :--- |"
])

for l in links:
    md_lines.append(f"| `{l['from']}` | `{l['to']}` | **{l['type'].capitalize()}** | \"{l['anchor']}\" |")

md_lines.extend([
    "",
    "---",
    "",
    "## 3. High-Value Cross-Pillar Synergies",
    "",
    "1. **Fertilizer Granulation Plant -> Rotary Fertilizer Dryer Drum (`/products/rotary-dryers/`):**",
    "   - Freshly shaped granules require rotary drum drying to reduce moisture from ~15% down to <2% for mechanical packaging.",
    "2. **Biomass Pellet Mill -> Sawdust Flash Dryer (`/products/rotary-dryers/biomass-sawdust-dryer/`):**",
    "   - Agro-waste and sawdust cannot be pelletized when wet; raw feed must enter the pellet die at 10-12% moisture."
])

md_out_path = os.path.join(BASE_DIR, "fertilizer-cluster-plan.md")
with open(md_out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))
print(f"Wrote {md_out_path}")
