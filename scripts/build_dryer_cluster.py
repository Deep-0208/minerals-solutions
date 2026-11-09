#!/usr/bin/env python3
"""
Generates the Semantic Topic Cluster for Rotary Dryers (Pillar 1)
Outputs:
- Minerals Solutions SEO/cluster-plan.json
- Minerals Solutions SEO/cluster-plan.md
- Minerals Solutions SEO/cluster-map.html
"""

import json
import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_PATH = os.path.join(os.path.dirname(BASE_DIR), ".agents", "skills", "seo-cluster", "templates", "cluster-map.html")

# 1. Cluster Definition
pillar = {
    "title": "Industrial Rotary Dryer Manufacturer & Drying Systems",
    "keyword": "rotary dryer manufacturer ahmedabad",
    "volume": 2400,
    "template": "ultimate-guide",
    "wordCount": 3500,
    "url": "/products/rotary-dryers/"
}

clusters = [
    {
        "name": "Multi-Pass Dryers",
        "color": "#1e3a5f",
        "posts": [
            {
                "title": "Double Pass Rotary Dryer",
                "keyword": "double pass dryer manufacturer",
                "volume": 1200,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/rotary-dryers/double-pass-dryer/",
                "status": "planned"
            },
            {
                "title": "Triple Pass Drum Dryer",
                "keyword": "triple pass rotary dryer india",
                "volume": 850,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/rotary-dryers/triple-pass-dryer/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Specialized & Chemical Dryers",
        "color": "#e15759",
        "posts": [
            {
                "title": "Roto Louvre Dryer",
                "keyword": "roto louvre dryer manufacturer india",
                "volume": 720,
                "template": "explainer",
                "wordCount": 1600,
                "url": "/products/rotary-dryers/roto-louvre-dryer/",
                "status": "planned"
            },
            {
                "title": "Chemical Powder Dryer (Boric/Borax)",
                "keyword": "boric powder dryer with heat exchanger",
                "volume": 590,
                "template": "how-to",
                "wordCount": 1600,
                "url": "/products/rotary-dryers/chemical-powder-dryer/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Mineral & Sand Drying Plants",
        "color": "#f28e2b",
        "posts": [
            {
                "title": "Silica Sand Rotary Dryer Plant",
                "keyword": "silica sand dryer manufacturer gujarat",
                "volume": 1400,
                "template": "landing-page",
                "wordCount": 1800,
                "url": "/products/rotary-dryers/sand-dryer/",
                "status": "planned"
            },
            {
                "title": "Chromite Foundry Sand Dryer",
                "keyword": "chromite sand dryer with vibrating screen",
                "volume": 480,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/rotary-dryers/chromite-sand-dryer/",
                "status": "planned"
            },
            {
                "title": "Biomass & Sawdust Drum Dryer",
                "keyword": "sawdust rotary dryer machine",
                "volume": 920,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/rotary-dryers/biomass-sawdust-dryer/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Combustion & Hot Air Generators",
        "color": "#76b7b2",
        "posts": [
            {
                "title": "Industrial Hot Air Generator (Coal/Gas)",
                "keyword": "hot air generator for rotary dryer",
                "volume": 1100,
                "template": "comparison",
                "wordCount": 1500,
                "url": "/products/rotary-dryers/hot-air-generators/",
                "status": "planned"
            },
            {
                "title": "Industrial Coal Burner",
                "keyword": "pulverized coal burner for rotary kiln",
                "volume": 650,
                "template": "landing-page",
                "wordCount": 1300,
                "url": "/products/rotary-dryers/coal-burner/",
                "status": "planned"
            }
        ]
    },
    {
        "name": "Kiln & Dryer Mechanical Spares",
        "color": "#59a14f",
        "posts": [
            {
                "title": "Trunnion Support Roller Assemblies",
                "keyword": "rotary dryer trunnion roller manufacturer",
                "volume": 880,
                "template": "landing-page",
                "wordCount": 1500,
                "url": "/products/rotary-dryers/trunnion-support-rollers/",
                "status": "planned"
            },
            {
                "title": "Dryer Riding Rings & Girth Gears",
                "keyword": "rotary kiln tyre riding ring girth gear",
                "volume": 750,
                "template": "landing-page",
                "wordCount": 1400,
                "url": "/products/rotary-dryers/riding-rings-girth-gears/",
                "status": "planned"
            }
        ]
    }
]

# Generate Link List
links = []

# 1. Mandatory Pillar <-> Spoke links
for ci, c in enumerate(clusters):
    for pi, p in enumerate(c["posts"]):
        node_id = f"cluster-{ci}-post-{pi}"
        # Spoke to pillar
        links.append({"from": node_id, "to": "pillar", "type": "mandatory", "anchor": pillar["keyword"]})
        # Pillar to spoke
        links.append({"from": "pillar", "to": node_id, "type": "mandatory", "anchor": p["keyword"]})

# 2. Recommended Intra-cluster links (Spoke <-> Spoke)
for ci, c in enumerate(clusters):
    num_p = len(c["posts"])
    if num_p > 1:
        for i in range(num_p):
            for j in range(i + 1, num_p):
                node_a = f"cluster-{ci}-post-{i}"
                node_b = f"cluster-{ci}-post-{j}"
                links.append({"from": node_a, "to": node_b, "type": "recommended", "anchor": c["posts"][j]["keyword"]})
                links.append({"from": node_b, "to": node_a, "type": "recommended", "anchor": c["posts"][i]["keyword"]})

# 3. Optional Inter-cluster links (e.g. Dryer to Hot Air Generator, Dryer to Spares)
# Multi-pass Dryer (0,0) <-> Hot Air Generator (3,0)
links.append({"from": "cluster-0-post-0", "to": "cluster-3-post-0", "type": "optional", "anchor": "hot air generator for rotary dryer"})
# Multi-pass Dryer (0,0) <-> Trunnion Roller (4,0)
links.append({"from": "cluster-0-post-0", "to": "cluster-4-post-0", "type": "optional", "anchor": "rotary dryer trunnion roller"})
# Sand Dryer (2,0) <-> Hot Air Generator (3,0)
links.append({"from": "cluster-2-post-0", "to": "cluster-3-post-0", "type": "optional", "anchor": "coal fired hot air generator"})
# Chemical Dryer (1,1) <-> Spares (4,0)
links.append({"from": "cluster-1-post-1", "to": "cluster-4-post-0", "type": "optional", "anchor": "dryer support roller assembly"})

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

# 2. Write cluster-plan.json
json_out_path = os.path.join(BASE_DIR, "cluster-plan.json")
with open(json_out_path, "w", encoding="utf-8") as f:
    json.dump(cluster_data, f, indent=2)
print(f"Wrote {json_out_path}")

# 3. Write cluster-map.html
if os.path.exists(TEMPLATE_PATH):
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        html_template = f.read()
    
    # Replace CLUSTER_DATA in template
    replacement_str = "const CLUSTER_DATA = " + json.dumps(cluster_data, indent=2) + ";"
    pattern = r"const CLUSTER_DATA = \{[\s\S]*?\};\s*// === END CLUSTER DATA ==="
    replacement = replacement_str + "\n    // === END CLUSTER DATA ==="
    rendered_html = re.sub(pattern, replacement, html_template)
    
    html_out_path = os.path.join(BASE_DIR, "cluster-map.html")
    with open(html_out_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    print(f"Wrote {html_out_path}")
else:
    print(f"Warning: Template not found at {TEMPLATE_PATH}")

# 4. Write cluster-plan.md
md_lines = [
    "# Rotary Dryer Semantic Cluster Plan",
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
    "- **Purpose:** Definitive engineering hub covering rotary drying mechanisms, concentric drums, heat balances, thermal efficiency, and manufacturing capabilities at Zak GIDC, Dahegam / Ahmedabad.",
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
    "## 2. Internal Link Matrix (Adjacency & Anchor Text)",
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
    "## 3. Visual Cluster Map",
    "",
    "An interactive SVG visual cluster map has been generated at `Minerals Solutions SEO/cluster-map.html`.",
    "Open it in any modern browser to inspect the complete network graph, link connections, node degrees, and word count distributions."
])

md_out_path = os.path.join(BASE_DIR, "cluster-plan.md")
with open(md_out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))
print(f"Wrote {md_out_path}")
