import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const pagesData = [
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'triple-pass-dryer',
    title: 'Triple Pass Rotary Drum Dryer | Minerals Solutions', // 52 chars
    description: 'Procure high-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving fuel, fabricated in Zak GIDC, Dahegam.', // 149 chars
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/triple-pass-dryer/',
    parentHub: { label: 'Rotary Dryers Hub', href: '/products/industrial-rotary-dryers/' },
    siblings: [
      { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
      { label: 'Stainless Chemical Powder Dryer', href: '/products/industrial-rotary-dryers/chemical-powder-dryer/' },
    ],
    crossPillar: { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
    defTitle: 'What is a triple pass rotary drum dryer?',
    defText: 'A triple pass rotary drum dryer is an advanced continuous industrial thermal processing system constructed from three nested concentric rotating cylinders engineered to maximize heat transfer efficiency in compact factory layouts. Manufactured in Zak GIDC, Dahegam from certified IS 2062 Grade B carbon steel (with optional SS 304/SS 316 inner contact passes), wet granular minerals or crystalline powders travel through an inner co-current cylinder, reverse 180 degrees into a middle counter-cascading annular cylinder, and discharge through an outer low-temperature cylinder. This nested geometry triples thermal retention time while occupying approximately 40% to 50% less linear bay length than equivalent single-pass drums. Operating with evaporative capacities from 500 kg/hr to 15 TPH, thermal efficiency ranges from 80% to 88%, dropping mineral feed moisture from 16% down to below 0.5% at exit shell skin temperatures under 50°C.',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'sand-dryer',
    title: 'Industrial Rotary Sand Dryer Unit | Minerals Solutions', // 55 chars
    description: 'Source heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH) from Minerals Solutions. Moisture drop below 1%, custom built in Zak GIDC, Dahegam.', // 153 chars
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/sand-dryer/',
    parentHub: { label: 'Rotary Dryers Hub', href: '/products/industrial-rotary-dryers/' },
    siblings: [
      { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
      { label: 'Biomass & Sawdust Rotary Dryer', href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/' },
    ],
    crossPillar: { label: 'Bucket Wheel Sand Washing Machine', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/' },
    defTitle: 'What is an industrial rotary sand dryer?',
    defText: 'An industrial rotary sand dryer is a heavy-duty continuous thermal drum engineered to remove surface and capillary moisture from natural river sand, manufactured sand (M-Sand), silica sand, and foundry aggregates. Built at Minerals Solutions in Zak GIDC, Dahegam, the unit features an IS 2062 Grade B structural carbon steel cylindrical shell (12mm to 20mm plate thickness) inclined at 3 to 5 degrees and rotated at 3 to 8 RPM on forged alloy steel trunnion rollers induction-hardened to 280-320 BHN. Internal radial lifting and curtain cascading flighting showers the wet sand bed continuously through high-temperature burner flue gases (600°C to 800°C inlet). Designed for throughputs from 300 kg/hr to 15 TPH, it achieves high thermal heat transfer, reducing raw aggregate moisture from 12%-18% down to bone-dry levels under 0.5% with specific coal consumption as low as 18 to 24 kg per ton of dried aggregate.',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'chemical-powder-dryer',
    title: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions', // 58 chars
    description: 'Order sanitary stainless steel chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.', // 154 chars
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/chemical-powder-dryer/',
    parentHub: { label: 'Rotary Dryers Hub', href: '/products/industrial-rotary-dryers/' },
    siblings: [
      { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
      { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    ],
    crossPillar: { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/' },
    defTitle: 'What is a stainless steel chemical powder dryer?',
    defText: 'A stainless steel chemical powder rotary dryer is an indirect continuous thermal processing unit engineered for sanitary, contamination-free moisture extraction from active pharmaceutical ingredients, fine specialty chemicals, catalysts, and food-grade mineral powders. Fabricated at Zak GIDC, Dahegam utilizing polished AISI SS 304 or SS 316 contact surfaces (mirror finish Ra < 0.4 µm), the drum isolates sensitive materials from combustion byproducts by transferring heat through an external thermal jacket, steam tube bundle, or indirect flue heat exchanger. Operating under continuous negative pressure with Teflon or mechanical face seals, it prevents fugitive dust emissions while processing 200 kg/hr to 8 TPH. Evaporation proceeds gently at controlled product temperatures between 60°C and 180°C, lowering powder moisture from 25% down to under 0.1% with complete recovery of volatile vapors via an integrated reverse-pulse stainless baghouse.',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'biomass-sawdust-dryer',
    title: 'Biomass & Sawdust Rotary Dryer | Minerals Solutions', // 52 chars
    description: 'Fabricate industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr) with anti-clogging flights & spark arrestors. Built at Zak GIDC, Dahegam works.', // 154 chars
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
    parentHub: { label: 'Rotary Dryers Hub', href: '/products/industrial-rotary-dryers/' },
    siblings: [
      { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
      { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    ],
    crossPillar: { label: 'Industrial Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
    defTitle: 'What is an industrial biomass and sawdust rotary dryer?',
    defText: 'An industrial biomass and sawdust rotary dryer is a continuous convective thermal drying drum specifically engineered to dehydrate wet wood shavings, sawdust, sugarcane bagasse, agricultural stalks, and rice husk prior to briquetting and pelletizing. Fabricated in Zak GIDC, Dahegam from heavy-gauge carbon steel, the cylinder is fitted with anti-clogging multi-zone lifting flights that maintain continuous dispersion of low-bulk-density organic particulates without bridging or balling. Operating at throughput capacities from 500 kg/hr to 5,000 kg/hr, hot flue gases (250°C to 400°C inlet) evaporate high green moisture from 45%-55% down to an optimal 10%-12% required for ring-die pellet mills. Integrated safety engineering includes heavy-duty spark arrestor cyclones, explosion relief rupture discs compliant with NFPA guidelines, and automated deluge water quenching nozzles to eliminate biomass smolder hazards during continuous high-tonnage production.',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'silica-sand-washing-plant',
    title: 'Silica Sand Washing Plant Line | Minerals Solutions', // 52 chars
    description: 'Engineer complete silica sand washing plants (20 to 150 TPH) with log washing, hydrocyclones & dewatering for glass and foundry sand. Zak GIDC, Dahegam.', // 151 chars
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/silica-sand-washing-plant/',
    parentHub: { label: 'Sand Washing Plants Hub', href: '/products/sand-washing-plants/' },
    siblings: [
      { label: 'Bucket Wheel Sand Washing Machine', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/' },
      { label: 'Hydrocyclone Fine Sand Recovery Unit', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/' },
    ],
    crossPillar: { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    defTitle: 'What is a turnkey silica sand washing plant?',
    defText: 'A silica sand washing plant is a turnkey mineral wet-processing circuit engineered to eliminate clay slimes, refractory silt, and surface iron staining from raw silica rock and glass sand deposits. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, the modular plant integrates an attrition scrubbing cell, twin-shaft log washer, high-pressure hydrocyclone desliming tower, and high-frequency polyurethane dewatering screen. Processing feed rates from 20 to 150 TPH, the circuit scrubs away stubborn plastic clay coatings, separates detrimental -75 micron fines, and recovers 95%+ of saleable 100 to 600 micron silica sand. Discharging clean industrial aggregate at 12% to 14% residual moisture with silt contents below 0.5%, the plant reliably delivers high-purity SiO2 grades (>99.2%) conforming to strict IS 488 standards for container glass, solar photovoltaics, and automotive foundry casting.',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'bucket-wheel-sand-washer',
    title: 'Bucket Wheel Sand Washer Line | Minerals Solutions', // 52 chars
    description: 'Install heavy duty bucket wheel sand washing machines (30 to 120 TPH) for M-Sand and river gravel. Low power, high fines recovery, built in Zak GIDC.', // 150 chars
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/bucket-wheel-sand-washer/',
    parentHub: { label: 'Sand Washing Plants Hub', href: '/products/sand-washing-plants/' },
    siblings: [
      { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
      { label: 'Hydrocyclone Fine Sand Recovery Unit', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/' },
    ],
    crossPillar: { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    defTitle: 'What is an industrial bucket wheel sand washer?',
    defText: 'An industrial bucket wheel sand washing machine is a heavy mechanical solid-liquid classifier engineered to scrub, desilt, and dewater natural river gravel and manufactured sand (M-Sand). Fabricated in Zak GIDC, Dahegam, material enters an integrated water sedimentation basin where slowly rotating dredging wheels (1.2 to 2.5 RPM) equipped with perforated polyurethane screen buckets dredge settled aggregate from the bottom. Free wash water and suspended clays drain by gravity through calibrated perimeter perforations as the bucket ascends above the slurry line, while fine silt and excess clay colloids overflow an adjustable peripheral weir. Built for capacities from 30 to 180 TPH, washed sand discharges at 12% to 15% moisture, meeting Indian Standard IS 383 Zone II grading requirements with low operating power consumption of only ~0.25 kWh per ton of washed sand.',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'hydrocyclone-sand-separator',
    title: 'Hydrocyclone Fine Sand Recovery Unit | Minerals Solutions', // 57 chars
    description: 'Recover 95%+ fine sand down to 75 microns with high-pressure hydrocyclone sand separators (60 to 120 m³/hr slurry). Built by Minerals Solutions in Zak GIDC.', // 154 chars
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/hydrocyclone-sand-separator/',
    parentHub: { label: 'Sand Washing Plants Hub', href: '/products/sand-washing-plants/' },
    siblings: [
      { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
      { label: 'Heavy Duty Mineral Log Washer', href: '/products/sand-washing-plants/mineral-log-washer/' },
    ],
    crossPillar: { label: 'Industrial Troughed Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/' },
    defTitle: 'What is a hydrocyclone fine sand recovery unit?',
    defText: 'A hydrocyclone fine sand recovery unit is a specialized centrifugal slurry separation machine engineered to capture and dewater saleable 75 to 150 micron (100–200 mesh) fine sand from quarry wash-plant effluent streams. Fabricated at Minerals Solutions in Zak GIDC, Dahegam, the compact skid comprises a heavy-duty slurry pump, high-shear vortex hydrocyclone lined with 95% high-alumina ceramic or 25mm cast polyurethane, and a high-frequency linear vibrating dewatering screen. Processing slurry flows from 60 to 120 m³/hr with 20% to 30% solids, incoming pulp enters tangentially at 0.15 to 0.25 MPa. Centrifugal forces exceeding 500 Gs separate dense fine silica downward into an underflow spigot while water and ultra-fine silt (<40 microns) exit through the overflow vortex finder, recovering over 95% of saleable plaster sand at 12% to 14% stackable moisture.',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'mineral-log-washer',
    title: 'Heavy Duty Mineral Log Washers | Minerals Solutions', // 52 chars
    description: 'Scrub tough clay from quartz stone and ore up to 75mm with heavy twin-shaft mineral log washers (30 to 150 TPH). Fabricated at Zak GIDC, Dahegam workshop.', // 154 chars
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/mineral-log-washer/',
    parentHub: { label: 'Sand Washing Plants Hub', href: '/products/sand-washing-plants/' },
    siblings: [
      { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
      { label: 'Bucket Wheel Sand Washing Machine', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/' },
    ],
    crossPillar: { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    defTitle: 'What is a heavy duty mineral log washer?',
    defText: 'A heavy duty mineral log washer is an intensive high-torque attrition scrubber engineered to break down and wash away stubborn plastic clays, soft mudstone, and conglomerate binders from coarse quartz, manganese ore, silica rock, and limestone. Manufactured at Zak GIDC, Dahegam, the machine features twin counter-rotating steel shafts (up to 7.5m length) housed in a welded IS 2062 steel trough inclined at 6 to 10 degrees. Staggered high-chromium alloy steel (600+ BHN) or Hardox 500 paddle blades continuously intermesh at 25 to 35 RPM, subjecting wet mineral rock up to 75mm to severe rock-on-rock attrition and hydraulic shear. Processing capacities range from 30 to 150 TPH with water consumption of 1.5 to 2.5 m³ per ton, discharging pristine de-slimed gravel while suspended clay colloids overflow a rear adjustable weir.',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'disc-granulator',
    title: 'Industrial Pan Disc Granulator | Minerals Solutions', // 52 chars
    description: 'Procure heavy duty industrial pan disc granulators (1 to 8 TPH) for NPK, bentonite, and compost pellets. 40° to 55° tilt angle, built in Zak GIDC, Dahegam.', // 154 chars
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/disc-granulator/',
    parentHub: { label: 'Fertilizer Granulation Plants Hub', href: '/products/fertilizer-granulation-plants/' },
    siblings: [
      { label: 'Double Roller Compactor Granulator', href: '/products/fertilizer-granulation-plants/double-roller-granulator/' },
      { label: 'Rotary Drum Granulator Machine', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/' },
    ],
    crossPillar: { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
    defTitle: 'What is an industrial pan disc fertilizer granulator?',
    defText: 'An industrial pan disc fertilizer granulator is a continuous rotary agglomeration machine engineered to transform fine powdered compost, vermicompost, NPK compounds, bentonite clay, and dolomite into uniform, dense spherical pellets. Manufactured in Zak GIDC, Dahegam, the machine consists of a heavy circular pan (1,800mm to 3,600mm diameter) lined with polypropylene or stainless steel to prevent sticking, mounted on a rigid structural base with stepless tilt adjustment from 40 to 55 degrees. Powered by high-torque IE3 motors (7.5 to 30 kW), the inclined disc rotates at 12 to 24 RPM while atomized liquid binder sprays over tumbling powder. Centrifugal classification automatically stratifies growing granules, discharging 93%+ on-size spherical pellets (2.0mm to 4.5mm) over the outer rim at continuous production capacities from 1 to 8 TPH.',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'double-roller-granulator',
    title: 'Double Roller Compactor Granulator | Minerals Solutions', // 56 chars
    description: 'Fabricate double roller dry compaction granulators (1 to 5 TPH) for chemical and NPK fertilizers. Zero heat drying required, manufactured in Zak GIDC.', // 150 chars
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/double-roller-granulator/',
    parentHub: { label: 'Fertilizer Granulation Plants Hub', href: '/products/fertilizer-granulation-plants/' },
    siblings: [
      { label: 'Industrial Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
      { label: 'Rotary Drum Granulator Machine', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/' },
    ],
    crossPillar: { label: 'Heavy Duty Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/' },
    defTitle: 'What is a double roller compaction granulator?',
    defText: 'A double roller compaction fertilizer granulator is a heavy mechanical dry extrusion machine engineered to agglomerate chemical fertilizer salts, ammonium sulphate, potassium chloride, and mineral powders into dense granules at room temperature without boiler steam or drying fuel. Built in Zak GIDC, Dahegam, the unit features two synchronized counter-rotating rollers forged from 9Cr2Mo / 38CrMoAl alloy steel, induction-hardened to 55-58 HRC. Driven by a cycloidal pinwheel reducer and pressurized by a dual-cylinder hydraulic accumulator (10 to 25 MPa), raw powder entering the nip area is subjected to immense mechanical linear force (30 to 60 kN/cm), compacting it into dense sheets that are crushed and classified into 2.5mm to 5.0mm angular pellets. Operating at 1 to 5 TPH throughput, energy consumption is only 12 to 18 kWh per ton.',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'rotary-drum-granulator',
    title: 'Rotary Drum Granulator Machines | Minerals Solutions', // 52 chars
    description: 'Source high-capacity rotary drum fertilizer granulators (3 to 20 TPH) with internal steam injection and UHMWPE anti-stick lining from Zak GIDC, Dahegam.', // 152 chars
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    parentHub: { label: 'Fertilizer Granulation Plants Hub', href: '/products/fertilizer-granulation-plants/' },
    siblings: [
      { label: 'Industrial Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
      { label: 'Fertilizer Cooling & Anti-Caking Drum', href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/' },
    ],
    crossPillar: { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
    defTitle: 'What is an industrial rotary drum fertilizer granulator?',
    defText: 'An industrial rotary drum fertilizer granulator is a continuous tumbling agglomeration cylinder engineered for large-scale production of compound NPK fertilizers, DAP, and fortified bio-organic granules. Fabricated in Zak GIDC, Dahegam, the machine comprises a heavy-duty IS 2062 carbon steel cylindrical shell (up to 2,500mm diameter and 12m length) lined with acid-resistant natural rubber or ultra-high molecular weight polyethylene (UHMWPE) to prevent internal scaling. Supported on twin cast alloy steel tyres and induction-hardened trunnion rollers, the drum rotates at 10 to 18 RPM inclined at 2 to 2.5 degrees. An internal submerged stainless spray pipe injects pressurized steam and liquid binder into the tumbling bed, promoting capillary coalescence at 60°C to 80°C. Delivering throughputs from 3 to 20 TPH, it achieves high pelletization sphericity and yield exceeding 90% (2.0mm to 4.75mm).',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'fertilizer-cooling-coating-drum',
    title: 'Fertilizer Coating & Cooling Drum | Minerals Solutions', // 54 chars
    description: 'Order rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Prevent bag caking and clumping. Heavy built in Zak GIDC, Dahegam.', // 153 chars
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
    parentHub: { label: 'Fertilizer Granulation Plants Hub', href: '/products/fertilizer-granulation-plants/' },
    siblings: [
      { label: 'Industrial Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
      { label: 'Rotary Drum Granulator Machine', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/' },
    ],
    crossPillar: { label: 'Industrial Troughed Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/' },
    defTitle: 'What is a fertilizer cooling and anti-caking coating drum?',
    defText: 'A fertilizer cooling and anti-caking coating drum is a critical continuous rotary post-processing machine deployed in chemical compound (NPK, DAP) and organic bio-fertilizer manufacturing lines. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, freshly granulated pellets exiting thermal dryers at 70°C to 85°C enter the counter-current cooling zone where high-volume ambient air passes through cascading internal flights, reducing pellet core temperature below 40°C to eliminate condensation inside bags. The cooled pellets then transfer directly into an enclosed oil-spray coating barrel where high-pressure atomizing nozzles meter liquid paraffin, micronized amine, or neem oil (0.15% to 0.35% by weight), followed by micronized talc dusting. Processing capacities range from 2 to 15 TPH, completely preventing granule caking, bag hardening, and hygroscopic moisture absorption during warehouse storage.',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'bucket-elevators',
    title: 'Industrial Bucket Elevator Systems | Minerals Solutions', // 56 chars
    description: 'Source heavy duty industrial bucket elevators (5 to 100 TPH, up to 45m height) with centrifugal and continuous chain/belt drives from Zak GIDC, Dahegam.', // 152 chars
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/bucket-elevators/',
    parentHub: { label: 'Conveyors & Spares Hub', href: '/products/industrial-conveyors-spares/' },
    siblings: [
      { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/' },
      { label: 'Industrial Troughed Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/' },
    ],
    crossPillar: { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    defTitle: 'What is an industrial bucket elevator?',
    defText: 'An industrial bucket elevator is a heavy-duty vertical bulk material handling system engineered to elevate free-flowing or sluggish powders, minerals, and granular solids through vertical heights up to 45 meters. Fabricated in Zak GIDC, Dahegam in strict compliance with IS 7198 standards, the system features a self-supporting dust-tight carbon steel casing (3mm to 6mm plate), high-tensile multi-ply rubber belt or alloy steel traction chain, and pressed steel or ductile cast iron buckets. Operating in either centrifugal discharge mode (1.2 to 2.5 m/s) for dry aggregates or continuous gravity discharge mode (0.5 to 1.0 m/s) for fragile pellets, throughputs range from 5 to 150 TPH. Standard safety equipment includes an integrated backstop sprag clutch, zero-speed shaft monitor, and explosion relief vent panels for combustible materials.',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'screw-conveyors',
    title: 'Industrial Screw Conveyor Systems | Minerals Solutions', // 55 chars
    description: 'Procure industrial screw conveyors: U-trough & tubular pipe feeders (100mm to 600mm dia). Dust-tight carbon & stainless steel, built in Zak GIDC, Dahegam.', // 153 chars
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/screw-conveyors/',
    parentHub: { label: 'Conveyors & Spares Hub', href: '/products/industrial-conveyors-spares/' },
    siblings: [
      { label: 'Heavy Duty Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/' },
      { label: 'Industrial Troughed Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/' },
    ],
    crossPillar: { label: 'Industrial Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
    defTitle: 'What is an industrial screw conveyor?',
    defText: 'An industrial screw conveyor (also known as an auger conveyor or spiral feeder) is a positive-displacement bulk material handling machine that transports powders, slurries, and granular solids along horizontal or inclined paths up to 30 degrees. Fabricated in Zak GIDC, Dahegam in heavy U-trough or tubular pipe configurations, the conveyor incorporates continuous helical flighting (100mm to 600mm diameter) welded to a central torque shaft. Driven by high-efficiency IE3 geared motors with spherical roller hanger bearings, the unit handles abrasive materials like silica sand, fly ash, cement, and hot fertilizer salts at 3 to 50 TPH. Completely sealed dust-tight bolted covers with silicone gaskets and gland-packing shaft seals eliminate fugitive dust emissions and external product contamination in rigorous industrial plant operations.',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'forged-trunnion-rollers',
    title: 'Forged Steel Dryer Support Rollers | Minerals Solutions', // 55 chars
    description: 'Order precision forged steel dryer support rollers (EN-8, EN-9, 42CrMo4) induction hardened to 280-320 BHN. Quick turnkey fabrication in Zak GIDC, Dahegam.', // 154 chars
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/forged-trunnion-rollers/',
    parentHub: { label: 'Conveyors & Spares Hub', href: '/products/industrial-conveyors-spares/' },
    siblings: [
      { label: 'Heavy Duty Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/' },
      { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/' },
    ],
    crossPillar: { label: 'Triple Pass Rotary Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
    defTitle: 'What is a rotary dryer support roller assembly?',
    defText: 'A rotary dryer support roller assembly (also termed a trunnion roller, carrying roller, or kiln cradle wheel) is a heavy-duty mechanical running gear component engineered to support the dynamic rotating mass of rotary dryers, coolers, calciners, and kilns. Precision machined in Zak GIDC, Dahegam from solid forged alloy steel billets (EN-8, EN-9, or 42CrMo4/EN-19), the roller tyre undergoes rigorous induction hardening to 280-320 BHN and 100% ultrasonic flaw inspection per ASTM A388 standards. Mounted on high-strength forged steel shafts supported by heavy-duty self-aligning spherical roller bearings in cast steel pillow blocks, roller assemblies withstand dynamic radial loads up to 60 tonnes per wheelset. Precision dual-axis spherical alignment prevents uneven shell riding, tyre scalloping, and drive girth gear vibration under high thermal operating conditions.',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'belt-conveyors',
    title: 'Industrial Belt Conveyor Systems | Minerals Solutions', // 54 chars
    description: 'Install heavy duty industrial troughed belt conveyors (300mm to 1400mm width) with M24 rubber belting & lagged pulleys. Heavy built in Zak GIDC, Dahegam.', // 152 chars
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/belt-conveyors/',
    parentHub: { label: 'Conveyors & Spares Hub', href: '/products/industrial-conveyors-spares/' },
    siblings: [
      { label: 'Heavy Duty Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/' },
      { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/' },
    ],
    crossPillar: { label: 'Silica Sand Washing Plant Line', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
    defTitle: 'What is an industrial troughed belt conveyor system?',
    defText: 'An industrial troughed belt conveyor system is a continuous bulk material handling installation designed in strict accordance with Bureau of Indian Standards (IS 11592) to convey crushed stone, silica sand, minerals, ores, and fertilizer pellets across horizontal and inclined paths up to 18 degrees. Fabricated in Zak GIDC, Dahegam from heavy structural IS 2062 channel stringers or welded lattice truss sections, the conveyor incorporates multi-ply nylon-nylon (NN) or polyester-polyamide (EP) rubber belting with Grade M24 wear covers. Heavy-duty three-roll troughing idlers (20°, 35°, or 45° angle) fitted with triple labyrinth dust seals and sealed-for-life deep-groove ball bearings ensure ultra-low rolling friction. Handling throughputs from 20 to 500 TPH at belt speeds between 0.8 and 2.5 m/s, systems feature diamond-groove rubber lagged drive drums.',
  },
];

console.log('Calibrating all 16 spoke pages...\n');

pagesData.forEach((item, index) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', item.pillar, item.spoke, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`Processing [${index + 1}/16] ${item.spoke}...`);

  // 1. Title replacement
  content = content.replace(/title:\s*['"`][^'"`]+['"`]/, `title: '${item.title}'`);

  // 2. Meta description replacement
  content = content.replace(/description:\s*['"`][^'"`]+['"`]/, `description: '${item.description}'`);

  // 3. Canonical replacement
  content = content.replace(/canonical:\s*['"`][^'"`]+['"`]/, `canonical: '${item.canonical}'`);

  // 4. Ban em-dash completely
  content = content.replace(/—/g, ', ');
  content = content.replace(/&mdash;/g, ', ');

  // 5. Replace Image 'fill' with explicit width/height for Next.js image compliance
  // Look for Next.js Image components with 'fill' and add explicit width/height
  content = content.replace(/<Image([\s\S]*?)\/>/g, (match, p1) => {
    let imgBlock = p1;
    // Replace fill with explicit width and height if not present
    if (imgBlock.includes('fill') && !imgBlock.includes('width=')) {
      imgBlock = imgBlock.replace(/\s+fill\b/, ' width={800} height={600}');
    }
    return `<Image${imgBlock}/>`;
  });

  // 6. Ensure priceValidUntil is 2027 in offers schema
  if (content.includes("'@type': 'AggregateOffer'") || content.includes('"@type": "AggregateOffer"')) {
    content = content.replace(/priceValidUntil:\s*['"`][^'"`]+['"`]/g, "priceValidUntil: '2027-12-31'");
    content = content.replace(/"priceValidUntil":\s*"[^"]+"/g, '"priceValidUntil": "2027-12-31"');
  }

  // 7. Update Definition Block to calibrated 130-170 word block
  // Replace definition paragraph
  // Pattern 1: <strong ...>[What is ...]</strong> ... </p> or </div>
  const defRegex = /(<strong[^>]*>What is[^<]*<\/strong>)([\s\S]*?)(<\/p>|<\/div>)/i;
  if (defRegex.test(content)) {
    content = content.replace(defRegex, `$1 ${item.defText}$3`);
  } else {
    // Pattern 2: Inside definition section
    const secRegex = /(<strong[^>]*>[^<]*<\/strong>\s*is\s*a[^<]*)([\s\S]*?)(<\/p>|<\/div>)/i;
    if (secRegex.test(content)) {
      content = content.replace(secRegex, `<strong className="text-slate-950 font-semibold">${item.defTitle} </strong> ${item.defText}$3`);
    }
  }

  // Write calibrated file
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('\nAll 16 pages calibrated successfully.');

