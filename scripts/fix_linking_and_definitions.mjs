import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const pagesConfig = [
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'triple-pass-dryer',
    title: 'Triple Pass Rotary Drum Dryer Line | Minerals Solutions', // 55 chars
    desc: 'Procure high-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving fuel, fabricated in Zak GIDC, Dahegam.', // 149 chars
    parentHub: '/products/industrial-rotary-dryers/',
    sib1: '/products/industrial-rotary-dryers/sand-dryer/',
    sib2: '/products/industrial-rotary-dryers/chemical-powder-dryer/',
    cross: '/products/sand-washing-plants/silica-sand-washing-plant/',
    crossTarget: 'sand-washing-plants',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'sand-dryer',
    title: 'Industrial Rotary Sand Dryer Unit | Minerals Solutions', // 55 chars
    desc: 'Source heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH) from Minerals Solutions. Moisture drop below 1%, custom built in Zak GIDC, Dahegam.', // 153 chars
    parentHub: '/products/industrial-rotary-dryers/',
    sib1: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    sib2: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
    cross: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    crossTarget: 'sand-washing-plants',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'chemical-powder-dryer',
    title: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions', // 58 chars
    desc: 'Order sanitary stainless chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.', // 153 chars
    parentHub: '/products/industrial-rotary-dryers/',
    sib1: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    sib2: '/products/industrial-rotary-dryers/sand-dryer/',
    cross: '/products/industrial-conveyors-spares/screw-conveyors/',
    crossTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'biomass-sawdust-dryer',
    title: 'Biomass & Sawdust Rotary Dryer Line | Minerals Solutions', // 56 chars
    desc: 'Fabricate industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr) with anti-clogging flights & spark arrestors. Built at Zak GIDC, Dahegam works.', // 154 chars
    parentHub: '/products/industrial-rotary-dryers/',
    sib1: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    sib2: '/products/industrial-rotary-dryers/sand-dryer/',
    cross: '/products/fertilizer-granulation-plants/disc-granulator/',
    crossTarget: 'fertilizer-granulation-plants',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'silica-sand-washing-plant',
    title: 'Silica Sand Washing Plant System | Minerals Solutions', // 53 chars
    desc: 'Engineer complete silica sand washing plants (20 to 150 TPH) with log washing, hydrocyclones & dewatering for glass and foundry sand. Zak GIDC, Dahegam.', // 151 chars
    parentHub: '/products/sand-washing-plants/',
    sib1: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    sib2: '/products/sand-washing-plants/hydrocyclone-sand-separator/',
    cross: '/products/industrial-rotary-dryers/sand-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'bucket-wheel-sand-washer',
    title: 'Bucket Wheel Sand Washer System | Minerals Solutions', // 52 chars
    desc: 'Install heavy duty bucket wheel sand washing machines (30 to 120 TPH) for M-Sand and river gravel. Low power, high fines recovery, built in Zak GIDC.', // 150 chars
    parentHub: '/products/sand-washing-plants/',
    sib1: '/products/sand-washing-plants/silica-sand-washing-plant/',
    sib2: '/products/sand-washing-plants/hydrocyclone-sand-separator/',
    cross: '/products/industrial-rotary-dryers/sand-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'hydrocyclone-sand-separator',
    title: 'Hydrocyclone Fine Sand Recovery Unit | Minerals Solutions', // 57 chars
    desc: 'Recover 95%+ fine sand down to 75 microns with high-pressure hydrocyclone sand separators (60 to 120 m³/hr slurry). Built by Minerals Solutions in Zak GIDC.', // 154 chars
    parentHub: '/products/sand-washing-plants/',
    sib1: '/products/sand-washing-plants/silica-sand-washing-plant/',
    sib2: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    cross: '/products/industrial-conveyors-spares/belt-conveyors/',
    crossTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'mineral-log-washer',
    title: 'Heavy Duty Mineral Log Washers | Minerals Solutions', // 52 chars
    desc: 'Scrub tough clay from quartz stone and ore up to 75mm with heavy twin-shaft mineral log washers (30 to 150 TPH). Fabricated at Zak GIDC, Dahegam workshop.', // 154 chars
    parentHub: '/products/sand-washing-plants/',
    sib1: '/products/sand-washing-plants/silica-sand-washing-plant/',
    sib2: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    cross: '/products/industrial-rotary-dryers/sand-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'disc-granulator',
    title: 'Industrial Pan Disc Granulator | Minerals Solutions', // 52 chars
    desc: 'Procure heavy duty industrial pan disc granulators (1 to 8 TPH) for NPK, bentonite, and compost pellets. 40° to 55° tilt angle, built in Zak GIDC, Dahegam.', // 154 chars
    parentHub: '/products/fertilizer-granulation-plants/',
    sib1: '/products/fertilizer-granulation-plants/double-roller-granulator/',
    sib2: '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    cross: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'double-roller-granulator',
    title: 'Double Roller Compactor Granulator | Minerals Solutions', // 56 chars
    desc: 'Fabricate double roller dry compaction granulators (1 to 5 TPH) for chemical and NPK fertilizers. Zero heat drying required, manufactured in Zak GIDC.', // 150 chars
    parentHub: '/products/fertilizer-granulation-plants/',
    sib1: '/products/fertilizer-granulation-plants/disc-granulator/',
    sib2: '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    cross: '/products/industrial-conveyors-spares/bucket-elevators/',
    crossTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'rotary-drum-granulator',
    title: 'Rotary Drum Granulator Machines | Minerals Solutions', // 52 chars
    desc: 'Source high-capacity rotary drum fertilizer granulators (3 to 20 TPH) with internal steam injection and UHMWPE anti-stick lining from Zak GIDC, Dahegam.', // 152 chars
    parentHub: '/products/fertilizer-granulation-plants/',
    sib1: '/products/fertilizer-granulation-plants/disc-granulator/',
    sib2: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
    cross: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'fertilizer-cooling-coating-drum',
    title: 'Fertilizer Coating & Cooling Drum | Minerals Solutions', // 54 chars
    desc: 'Order rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Prevent bag caking and clumping. Heavy built in Zak GIDC, Dahegam.', // 153 chars
    parentHub: '/products/fertilizer-granulation-plants/',
    sib1: '/products/fertilizer-granulation-plants/disc-granulator/',
    sib2: '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    cross: '/products/industrial-conveyors-spares/belt-conveyors/',
    crossTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'bucket-elevators',
    title: 'Industrial Bucket Elevator Systems | Minerals Solutions', // 56 chars
    desc: 'Source heavy duty industrial bucket elevators (5 to 100 TPH, up to 45m height) with centrifugal and continuous chain/belt drives from Zak GIDC, Dahegam.', // 152 chars
    parentHub: '/products/industrial-conveyors-spares/',
    sib1: '/products/industrial-conveyors-spares/screw-conveyors/',
    sib2: '/products/industrial-conveyors-spares/belt-conveyors/',
    cross: '/products/industrial-rotary-dryers/sand-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'screw-conveyors',
    title: 'Industrial Screw Conveyor Systems | Minerals Solutions', // 55 chars
    desc: 'Procure industrial screw conveyors: U-trough & tubular pipe feeders (100mm to 600mm dia). Dust-tight carbon & stainless steel, built in Zak GIDC, Dahegam.', // 153 chars
    parentHub: '/products/industrial-conveyors-spares/',
    sib1: '/products/industrial-conveyors-spares/bucket-elevators/',
    sib2: '/products/industrial-conveyors-spares/belt-conveyors/',
    cross: '/products/fertilizer-granulation-plants/disc-granulator/',
    crossTarget: 'fertilizer-granulation-plants',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'forged-trunnion-rollers',
    title: 'Forged Steel Dryer Support Rollers | Minerals Solutions', // 55 chars
    desc: 'Order precision forged steel dryer support rollers (EN-8, EN-9, 42CrMo4) induction hardened to 280-320 BHN. Quick turnkey fabrication in Zak GIDC, Dahegam.', // 154 chars
    parentHub: '/products/industrial-conveyors-spares/',
    sib1: '/products/industrial-conveyors-spares/bucket-elevators/',
    sib2: '/products/industrial-conveyors-spares/screw-conveyors/',
    cross: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    crossTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'belt-conveyors',
    title: 'Industrial Belt Conveyor Systems | Minerals Solutions', // 54 chars
    desc: 'Install heavy duty industrial troughed belt conveyors (300mm to 1400mm width) with M24 rubber belting & lagged pulleys. Heavy built in Zak GIDC, Dahegam.', // 152 chars
    parentHub: '/products/industrial-conveyors-spares/',
    sib1: '/products/industrial-conveyors-spares/bucket-elevators/',
    sib2: '/products/industrial-conveyors-spares/screw-conveyors/',
    cross: '/products/sand-washing-plants/silica-sand-washing-plant/',
    crossTarget: 'sand-washing-plants',
  },
];

pagesConfig.forEach((item, index) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', item.pillar, item.spoke, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Title calibration
  content = content.replace(/title:\s*['"`][^'"`]+['"`]/, `title: '${item.title}'`);

  // Desc calibration
  content = content.replace(/description:\s*['"`][^'"`]+['"`]/, `description: '${item.desc}'`);

  // Canonical calibration
  content = content.replace(/canonical:\s*['"`][^'"`]+['"`]/, `canonical: 'https://mineralssolution.in/products/${item.pillar}/${item.spoke}/'`);

  // Ensure 4 linking triangle links exist in content
  // If parentHub, sib1, sib2, or cross is missing from links, let's ensure it's in the related equipment section
  // Let's check which links are present
  const hasParent = content.includes(item.parentHub);
  const hasSib1 = content.includes(item.sib1);
  const hasSib2 = content.includes(item.sib2);
  const hasCross = content.includes(item.cross);

  if (!hasParent || !hasSib1 || !hasSib2 || !hasCross) {
    console.log(`Page [${index + 1}] ${item.spoke} missing link: parent=${hasParent}, sib1=${hasSib1}, sib2=${hasSib2}, cross=${hasCross}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Checked linking configuration.');

