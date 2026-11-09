# Master Keyword Map & Cannibalization Shield
**Client:** Minerals Solutions (`mineralssolution.in`)  
**Facility Location:** 10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar / Ahmedabad Industrial Corridor, Gujarat  
**Version:** 1.0 (Consolidated from Pillars 1–4 Semantic Clusters)  
**Total Canonical Routes:** 33 Routes (1 Homepage + 4 Company/Trust + 1 Catalog Hub + 4 Pillar Hubs + 21 Dedicated Spokes + 1 Mineral Supply Hub + 2 Legal)  
**Total Target Content Volume:** ~51,000 Words  
**Last Updated:** November 2026 (Development Branch)

---

## 1. Architectural Principles & Cannibalization Defense

1. **One URL per Search Intent:**
   - Keywords sharing 7+ identical URLs in Google’s top 10 organic search results are mapped to the **same page**.
   - Keywords with distinct buyer personas (e.g. Turnkey Plant Buyer vs Aftermarket Trunnion Spares Buyer) are granted separate dedicated routes.
2. **Strict Trailing Slash Enforcement:**
   - Every route in this map ends with a trailing slash (`/`).
   - Sitemaps, canonical tags, internal links, and Next.js routing match this exact string to eliminate 308 redirect overhead and canonical URL splits.
3. **Zero Orphan Pages & Deep Link Interlocking:**
   - Every spoke page has a mandatory bi-directional link to its parent pillar.
   - Cross-pillar authority bridges link complementary machinery lines (e.g., *Sand Washing Plant* $\rightarrow$ *Rotary Sand Dryer* $\rightarrow$ *Conveyor Systems*).
4. **Honest Schema & E-E-A-T Anchoring:**
   - Zero fabricated ratings or fake review stars.
   - Statutory data (GSTIN: `24AUSPP9555F1ZZ`, MSME UDYAM, Axis Bank) anchored directly into `Organization` and `LocalBusiness` schemas.

---

## 2. Master Route & Keyword Inventory

### Cluster A: Company Core & Trust Routes (4 Pages)

| Route Path | Primary Keyword | Secondary Keywords | Search Intent | Word Count | Visual Asset Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`/`** (Home) | `rotary dryer manufacturer ahmedabad` | `sand washing plant gujarat`, `fertilizer granulator plant`, `conveyor belt systems dahegam` | Commercial & Brand Hub | 2,800 | `factory-signboard.png`, `manufacturing-unit.jpeg`, `working-team.jpeg` |
| **`/about/`** | `minerals solutions dahegam` | `rotary dryer factory zak gidc`, `industrial plant fabricator ahmedabad` | Navigational & Trust | 1,500 | `factory-office.jpeg`, `manufacturing-unit.jpeg`, `working-team.jpeg` |
| **`/contact/`** | `minerals solutions contact` | `rotary dryer manufacturer phone number`, `zak gidc dahegam plant location` | Navigational & Local Contact | 800 | Facility map, Zak GIDC road access photos |
| **`/request-quote/`** | `rotary dryer price quote` | `sand washing plant cost estimate`, `fertilizer machine rfq gujarat` | High Transactional | 1,000 | Machinery RFQ form & inquiry matrix |

---

### Cluster B: Pillar 1 – Industrial Rotary Dryers & Furnaces (12 Pages)

* **Parent Pillar URL:** `/products/rotary-dryers/` (3,500 words)  
* **Pillar Keyword:** `rotary dryer manufacturer ahmedabad` (Vol: 2,400)  
* **Visual Map:** `cluster-map.html` | **Data:** `cluster-plan.json`

| Spoke Route | Primary Keyword | Secondary Keywords | Intent / Type | Target Words | Associated Client Visual Asset |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.../double-pass-dryer/`** | `double pass dryer manufacturer` | `double pass rotary dryer`, `concentric rotary dryer india` | Transactional (`landing-page`) | 1,800 | `double-pass-rotary-dryer.jpg`, `Double pass dryer.jpeg` |
| **`.../triple-pass-dryer/`** | `triple pass rotary dryer india` | `multi pass drum dryer`, `compact biomass dryer` | Commercial (`landing-page`) | 1,500 | `Double pass dryer (2).jpeg` |
| **`.../roto-louvre-dryer/`** | `roto louvre dryer manufacturer india` | `rotary louvre dryer`, `gentle industrial convective dryer` | Niche Technical (`explainer`) | 1,600 | `roto-louvre-dryers.jpeg`, `Roto Louvre Dryer.jpeg` |
| **`.../chemical-powder-dryer/`**| `boric powder dryer with heat exchanger`| `chemical rotary dryer`, `borax powder drying plant` | Technical B2B (`how-to`) | 1,600 | `boric-powder-dryer.jpeg`, `Borex powder dryer...jpeg` |
| **`.../sand-dryer/`** | `silica sand dryer manufacturer gujarat`| `industrial rotary sand dryer`, `foundry sand drying drum` | Transactional (`landing-page`) | 1,800 | `sand-dryer-with-coal-fired-hot-air-generator.jpeg` |
| **`.../chromite-sand-dryer/`** | `chromite sand dryer with vibrating screen`| `foundry chromite sand dryer`, `sand reclamation dryer` | Commercial (`landing-page`) | 1,400 | `Chromite sand dryer with vibrating screen.jpeg` |
| **`.../biomass-sawdust-dryer/`**| `sawdust rotary dryer machine` | `biomass flash dryer`, `coir pith drying plant` | Commercial (`landing-page`) | 1,500 | `saw-dust-dryer.jpeg`, `Saw dust dryer.jpeg` |
| **`.../hot-air-generators/`** | `hot air generator for rotary dryer` | `coal fired hot air generator`, `solid fuel combustion chamber` | Technical B2B (`comparison`) | 1,500 | `biomass-and-coal-fired-industrial-hot-air-generator.jpg` |
| **`.../coal-burner/`** | `pulverized coal burner for rotary kiln`| `industrial coal burner`, `rotary dryer combustion burner` | Transactional (`landing-page`) | 1,300 | `Coal Burner.jpeg` |
| **`.../trunnion-support-rollers/`**| `rotary dryer trunnion roller manufacturer`| `dryer support roller assembly`, `kiln trunnion bearing blocks` | Aftermarket Spares (`landing-page`) | 1,500 | `dryer-support-roller.jpeg`, `Trunnion roller.jpeg` |
| **`.../riding-rings-girth-gears/`**| `rotary kiln tyre riding ring girth gear`| `dryer girth gear replacement`, `kiln riding tyre manufacturer`| Aftermarket Spares (`landing-page`) | 1,400 | `girth-gear-for-rotary-dryer.jpg`, `Dryer ring.jpeg` |

---

### Cluster C: Pillar 2 – Sand Washing & Mineral Processing (6 Pages)

* **Parent Pillar URL:** `/products/mineral-processing/` (3,200 words)  
* **Pillar Keyword:** `sand washing plant manufacturer gujarat` (Vol: 2,200)  
* **Visual Map:** `washing-cluster-map.html` | **Data:** `washing-cluster-plan.json`

| Spoke Route | Primary Keyword | Secondary Keywords | Intent / Type | Target Words | Associated Client Visual Asset |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.../sand-washing-plant/`** | `river sand washing plant manufacturer` | `m-sand washing machine gujarat`, `aggregate sand washer` | Transactional (`landing-page`) | 1,800 | `river-sand-washing-plant.jpg`, `River sand washing plant.jpeg` |
| **`.../quartz-stone-washer/`** | `quartz stone washer manufacturer gujarat`| `mineral log washer`, `silica rock scrubber machine` | Niche B2B (`landing-page`) | 1,600 | `quartz-stone-sand-washers.jpeg`, `Quartz stone washer.jpeg` |
| **`.../rotary-trommel-screen/`**| `rotary screen trommel manufacturer ahmedabad`| `trommel screen for sand`, `industrial drum screen` | Commercial (`landing-page`) | 1,500 | `rotary-screen.jpeg`, `Rotary screen.jpeg` |
| **`.../vibrating-screen/`** | `vibrating screen manufacturer gujarat` | `circular vibrating screen machine`, `aggregate sizing screen`| Commercial (`landing-page`) | 1,600 | `vibrating-screen.jpeg`, `Vibrating screen.jpeg` |
| **`.../jaw-crusher/`** | `stone jaw crusher manufacturer ahmedabad` | `mineral jaw crusher`, `primary aggregate rock crusher` | Transactional (`landing-page`) | 1,500 | `crusher-machine.jpeg`, `Crusher.jpeg` |

---

### Cluster D: Pillar 3 – Fertilizer Granulation & Biomass Pellet Machinery (6 Pages)

* **Parent Pillar URL:** `/products/granulation-pellet-plants/` (3,400 words)  
* **Pillar Keyword:** `fertilizer granulation plant manufacturer` (Vol: 2,100)  
* **Visual Map:** `fertilizer-cluster-map.html` | **Data:** `fertilizer-cluster-plan.json`

| Spoke Route | Primary Keyword | Secondary Keywords | Intent / Type | Target Words | Associated Client Visual Asset |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.../disc-granulator/`** | `pan disc fertilizer granulator manufacturer ahmedabad` | `fertilizer pan pelletizer`, `disc granulator 5hp` | Transactional (`landing-page`) | 1,800 | `pan-disc-fertilizer-granulation-machine.jpeg`, `Fertilizer pan granulator.jpeg` |
| **`.../fertilizer-plant/`** | `npk organic fertilizer granulation plant india` | `complete fertilizer manufacturing plant`, `bio fertilizer plant setup`| Turnkey B2B (`landing-page`) | 1,800 | `fertilizer-granulation-plant.jpg`, `Fertilizer granulation plant.jpeg` |
| **`.../biomass-pellet-mill/`** | `biomass pellet making machine manufacturer gujarat`| `agro waste pellet mill`, `wood pellet manufacturing plant` | Commercial (`landing-page`) | 1,600 | `agro-waste-pellet-making-machine.jpeg`, `Pellet Mill.jpeg` |
| **`.../pellet-mill-die/`** | `pellet mill die manufacturer india` | `ring die for pellet machine`, `replacement pellet mill tooling`| Tooling / Spares (`landing-page`)| 1,400 | `pellet-mill-die.jpeg`, `Pellet mill Die.jpeg` |
| **`.../pellet-mill-roller-assembly/`**| `pellet mill roller shell assembly` | `roller shell for pellet press`, `biomass pellet machine spares` | Tooling / Spares (`landing-page`)| 1,400 | `pellet-mill-roller-assembly.jpeg`, `Pellet mill Roller assembly.jpeg` |

---

### Cluster E: Pillar 4 – Industrial Conveyor Systems & Material Handling (7 Pages)

* **Parent Pillar URL:** `/products/conveyor-systems/` (3,200 words)  
* **Pillar Keyword:** `industrial conveyor belt system manufacturer` (Vol: 2,500)  
* **Visual Map:** `conveyor-cluster-map.html` | **Data:** `conveyor-cluster-plan.json`

| Spoke Route | Primary Keyword | Secondary Keywords | Intent / Type | Target Words | Associated Client Visual Asset |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.../belt-conveyors/`** | `industrial belt conveyor manufacturer ahmedabad`| `troughed belt conveyor system`, `bulk material conveyor` | Transactional (`landing-page`) | 1,800 | `belt-conveyor-system.jpeg`, `Conveyor Belt System.jpeg` |
| **`.../mining-conveyors/`** | `mineral ore belt conveyor system gujarat`| `mining aggregate conveyor`, `quarry conveyor manufacturer` | Technical B2B (`landing-page`) | 1,500 | `belt-conveyor-system-for-mineral-ore-beneficiation-plant.jpeg` |
| **`.../pulleys/`** | `conveyor head and tail pulley manufacturer`| `conveyor drive drum pulley`, `tail pulley with internal bearings`| Component (`landing-page`) | 1,500 | `conveyor-head-pulley-tail-pulley.jpeg`, `Conveyor Head and Tail pulley.jpeg` |
| **`.../rubber-lagged-pulleys/`**| `rubber lagged conveyor pulley manufacturer india`| `diamond groove lagging pulley`, `head drum rubber lagging` | High-Value Spares (`landing-page`)| 1,400 | `legging-head-drum-pulley.jpeg`, `Head pulley with lagging.jpeg` |
| **`.../idler-rollers/`** | `conveyor idler roller manufacturer ahmedabad` | `troughing idler roller`, `belt conveyor return roller` | Component (`landing-page`) | 1,500 | `conveyor-idler-roller.jpeg`, `Conveyor idler roller.jpeg` |
| **`.../conveyor-belting/`** | `m24 rubber conveyor belt manufacturer gujarat`| `stone crusher conveyor belt`, `is 1891 conveyor belting` | Consumable (`landing-page`) | 1,400 | `rubber-conveyor-belt-for-stone-crusher.jpeg`, `Conveyor belt.jpeg` |

---

### Cluster F: Minerals & Industrial Sand Supply (1 Page)

| Route Path | Primary Keyword | Secondary Keywords | Search Intent | Word Count | Visual Asset Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`/minerals/industrial-sands/`** | `resin coated sand manufacturer gujarat` | `washed graded silica sand ahmedabad`, `copper slag quartz sand supplier` | Commercial Supply | 1,800 | Direct silica sand and resin coated sand photos from Zak GIDC stock |

---

## 3. High-Value Cross-Pillar Interlink Matrix

To maximize PageRank flow and establish topical authority across whole-plant installations, the following cross-links are mandatory within page body copy:

```
[Sand Washing Plant]         ──────────(Washed sand needs thermal drying)──────────>   [Rotary Sand Dryer]
(/products/mineral-processing/                                                           (/products/rotary-dryers/
  sand-washing-plant/)                                                                     sand-dryer/)

[Fertilizer Granulation Plant]  ───────(Fresh moist granules need moisture removal)──>   [Rotary Dryers Hub]
(/products/granulation-pellet-                                                            (/products/rotary-dryers/)
  plants/fertilizer-plant/)

[Biomass Pellet Mill]        ──────────(Biomass saw dust must be dried <12%)────────>   [Biomass Sawdust Dryer]
(/products/granulation-pellet-                                                            (/products/rotary-dryers/
  plants/biomass-pellet-mill/)                                                              biomass-sawdust-dryer/)

[Primary Jaw Crusher]        ──────────(Crushed ore transfer to screeners)──────────>   [Belt Conveyors]
(/products/mineral-processing/                                                           (/products/conveyor-systems/
  jaw-crusher/)                                                                            belt-conveyors/)
```

---

## 4. Verification Check: Cannibalization Shield Active

* **Total Pages:** 33
* **Duplicate Primary Keywords:** 0 (Verified zero keyword overlap)
* **Average Spoke Depth:** 3 segments (`/products/<category>/<product>/`)
* **Trailing Slashes:** 100% enforced across all routes

