#!/usr/bin/env python3
"""
Generates the Semantic Topic Cluster for Conveyor Systems & Material Handling (Pillar 4)
Outputs:
- Minerals Solutions SEO/conveyor-cluster-plan.json
- Minerals Solutions SEO/conveyor-cluster-plan.md
- Minerals Solutions SEO/conveyor-cluster-map.html
"""

import json
import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_PATH = os.path.join(os.path.dirname(BASE_DIR), ".agents", "skills", "seo-cluster", "templates", "cluster-map.html")

pillar = {
    "title": "Industrial Conveyor Belt Systems & Material Handling Equipment",
    "keyword": "industrial conveyor belt system manufacturer",
    "volume": 2500,
    "template": "ultimate-guide",
    "wordCount": 3200,
    "url": "/products/conveyor-systems/"
}

clusters = [
    {
        "name": "Bulk Material Conveyors",
        "color": "#1e3a5f",
        "posts": [
            {
                "title": "Industrial Troughing Belt Conveyor System",
                "keyword": "industrial belt conveyor manufacturer ahmedabad",
                "volume": 1600,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/conveyor-systems/belt-conveyors/",
                "status": "planned"
            },
            {
                "title": "Mineral & Ore Beneficiation Conveyors",
                "keyword": "mineral ore belt conveyor system gujarat",
                "volume": 850,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/conveyor-systems/mining-conveyors/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Conveyor Pulleys & Lagging",
        "color": "#e15759",
        "posts": [
            {
                "title": "Conveyor Head & Tail Drum Pulleys",
                "keyword": "conveyor head and tail pulley manufacturer",
                "volume": 950,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/conveyor-systems/pulleys/",
                "status": "planned"
            },
            {
                "title": "Diamond Rubber Lagged Head Pulleys",
                "keyword": "rubber lagged conveyor pulley manufacturer india",
                "volume": 720,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/conveyor-systems/rubber-lagged-pulleys/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Idlers & Heavy Rubber Belting",
        "color": "#59a14f",
        "posts": [
            {
                "title": "Troughing & Return Idler Rollers",
                "keyword": "conveyor idler roller manufacturer ahmedabad",
                "volume": 1200,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/conveyor-systems/idler-rollers/",
                "status": "planned"
            },
            {
                "title": "Nylon M24 Stone Crusher Rubber Belting",
                "keyword": "m24 rubber conveyor belt manufacturer gujarat",
                "volume": 980,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/conveyor-systems/conveyor-belting/",
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
# Belt Conveyors (0,0) <-> Pulleys (1,0)
links.append({"from": "cluster-0-post-0", "to": "cluster-1-post-0", "type": "recommended", "anchor": "conveyor head and tail pulleys"})
# Belt Conveyors (0,0) <-> Idler Rollers (2,0)
links.append({"from": "cluster-0-post-0", "to": "cluster-2-post-0", "type": "recommended", "anchor": "troughing idler rollers"})
# Pulleys (1,0) <-> Rubber Lagging (1,1) is intra-cluster
# Head Pulley (1,0) <-> M24 Belting (2,1)
links.append({"from": "cluster-1-post-0", "to": "cluster-2-post-1", "type": "recommended", "anchor": "m24 rubber conveyor belt"})
# Idler Rollers (2,0) <-> M24 Belting (2,1)
links.append({"from": "cluster-2-post-0", "to": "cluster-2-post-1", "type": "recommended", "anchor": "heavy duty conveyor belting"})

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
json_out_path = os.path.join(BASE_DIR, "conveyor-cluster-plan.json")
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
    
    html_out_path = os.path.join(BASE_DIR, "conveyor-cluster-map.html")
    with open(html_out_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    print(f"Wrote {html_out_path}")

# Write Markdown Plan
md_lines = [
    "# Industrial Conveyor Systems & Material Handling Semantic Cluster Plan",
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
    "- **Purpose:** Comprehensive engineering guide on bulk material handling, conveyor belt sizing, tension calculations, troughing angles, and heavy mining conveyor installations in Gujarat.",
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
    "## 3. High-Value Plant Integration Bridges",
    "",
    "1. **Conveyor Systems -> Jaw Crusher (`/products/mineral-processing/jaw-crusher/`):**",
    "   - Primary crushed ore and minerals discharge directly onto heavy-duty troughed belt conveyors for screening.",
    "2. **Conveyor Systems -> Rotary Sand Dryers (`/products/rotary-dryers/sand-dryer/`):**",
    "   - Inclined feed belt conveyors charge wet mineral sand directly into continuous rotary drying drums."
])

md_out_path = os.path.join(BASE_DIR, "conveyor-cluster-plan.md")
with open(md_out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))
print(f"Wrote {md_out_path}")
