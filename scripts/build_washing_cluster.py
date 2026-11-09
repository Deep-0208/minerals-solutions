#!/usr/bin/env python3
"""
Generates the Semantic Topic Cluster for Mineral Processing & Sand Washing Plants (Pillar 2)
Outputs:
- Minerals Solutions SEO/washing-cluster-plan.json
- Minerals Solutions SEO/washing-cluster-plan.md
- Minerals Solutions SEO/washing-cluster-map.html
"""

import json
import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_PATH = os.path.join(os.path.dirname(BASE_DIR), ".agents", "skills", "seo-cluster", "templates", "cluster-map.html")

pillar = {
    "title": "Turnkey Sand Washing & Mineral Processing Plants",
    "keyword": "sand washing plant manufacturer gujarat",
    "volume": 2200,
    "template": "ultimate-guide",
    "wordCount": 3200,
    "url": "/products/mineral-processing/"
}

clusters = [
    {
        "name": "Sand & Mineral Washing Plants",
        "color": "#1e3a5f",
        "posts": [
            {
                "title": "River Sand & M-Sand Washing Plant",
                "keyword": "river sand washing plant manufacturer",
                "volume": 1300,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/mineral-processing/sand-washing-plant/",
                "status": "planned"
            },
            {
                "title": "Quartz Stone Washer & Scrubber",
                "keyword": "quartz stone washer manufacturer gujarat",
                "volume": 780,
                "template": "landing-page",
                "wordCount": 1600,
                "url": "/products/mineral-processing/quartz-stone-washer/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Grading & Screening Equipment",
        "color": "#f28e2b",
        "posts": [
            {
                "title": "Rotary Trommel Screen Machine",
                "keyword": "rotary screen trommel manufacturer ahmedabad",
                "volume": 950,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/mineral-processing/rotary-trommel-screen/",
                "status": "planned"
            },
            {
                "title": "Industrial Vibrating Screen Machine",
                "keyword": "vibrating screen manufacturer gujarat",
                "volume": 1400,
                "template": "landing-page",
                "wordCount": 1600,
                "url": "/products/mineral-processing/vibrating-screen/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Primary Crushing Machinery",
        "color": "#e15759",
        "posts": [
            {
                "title": "Industrial Mineral Jaw Crusher",
                "keyword": "stone jaw crusher manufacturer ahmedabad",
                "volume": 1100,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/mineral-processing/jaw-crusher/",
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

# 3. Inter-cluster links (Washers to Screeners to Crushers)
# Sand Washer (0,0) <-> Vibrating Screen (1,1)
links.append({"from": "cluster-0-post-0", "to": "cluster-1-post-1", "type": "optional", "anchor": "dewatering vibrating screen"})
# Quartz Washer (0,1) <-> Trommel Screen (1,0)
links.append({"from": "cluster-0-post-1", "to": "cluster-1-post-0", "type": "optional", "anchor": "rotary trommel screening machine"})
# Jaw Crusher (2,0) <-> Vibrating Screen (1,1)
links.append({"from": "cluster-2-post-0", "to": "cluster-1-post-1", "type": "optional", "anchor": "vibrating screen for crushed stone"})

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
json_out_path = os.path.join(BASE_DIR, "washing-cluster-plan.json")
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
    
    html_out_path = os.path.join(BASE_DIR, "washing-cluster-map.html")
    with open(html_out_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    print(f"Wrote {html_out_path}")

# Write Markdown Plan
md_lines = [
    "# Sand Washing & Mineral Processing Semantic Cluster Plan",
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
    "- **Purpose:** Comprehensive plant engineering guide covering wet classification, silica quartz purification, sand washing cycles, hydrocyclones, and aggregate plant layouts in Gujarat.",
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
    "## 3. Cross-Pillar Synergies (Mineral Processing -> Rotary Dryers & Conveyors)",
    "",
    "1. **Washing Plant to Sand Dryer (`/products/rotary-dryers/sand-dryer/`):**",
    "   - Natural river sand and quartz stone emerging from washing lines contain 12-18% residual surface moisture.",
    "   - Linking to Minerals Solutions' Rotary Sand Dryer captures buyers seeking a complete turnkey **Wash-and-Dry production line**.",
    "2. **Jaw Crusher to Conveyor Systems (`/products/conveyor-systems/`):**",
    "   - Crushed aggregate from the primary jaw crusher is transported to vibrating screens via industrial belt conveyors."
])

md_out_path = os.path.join(BASE_DIR, "washing-cluster-plan.md")
with open(md_out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))
print(f"Wrote {md_out_path}")
