import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const spokePages = [
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'triple-pass-dryer',
    parentHub: '/products/industrial-rotary-dryers/',
    siblings: [
      '/products/industrial-rotary-dryers/sand-dryer/',
      '/products/industrial-rotary-dryers/chemical-powder-dryer/',
    ],
    crossPillar: '/products/sand-washing-plants/silica-sand-washing-plant/',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'sand-dryer',
    parentHub: '/products/industrial-rotary-dryers/',
    siblings: [
      '/products/industrial-rotary-dryers/triple-pass-dryer/',
      '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
    ],
    crossPillar: '/products/sand-washing-plants/silica-sand-washing-plant/',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'chemical-powder-dryer',
    parentHub: '/products/industrial-rotary-dryers/',
    siblings: [
      '/products/industrial-rotary-dryers/triple-pass-dryer/',
      '/products/industrial-rotary-dryers/sand-dryer/',
    ],
    crossPillar: '/products/industrial-conveyors-spares/screw-conveyors/',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'biomass-sawdust-dryer',
    parentHub: '/products/industrial-rotary-dryers/',
    siblings: [
      '/products/industrial-rotary-dryers/triple-pass-dryer/',
      '/products/industrial-rotary-dryers/sand-dryer/',
    ],
    crossPillar: '/products/fertilizer-granulation-plants/disc-granulator/',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'silica-sand-washing-plant',
    parentHub: '/products/sand-washing-plants/',
    siblings: [
      '/products/sand-washing-plants/bucket-wheel-sand-washer/',
      '/products/sand-washing-plants/hydrocyclone-sand-separator/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/sand-dryer/',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'bucket-wheel-sand-washer',
    parentHub: '/products/sand-washing-plants/',
    siblings: [
      '/products/sand-washing-plants/silica-sand-washing-plant/',
      '/products/sand-washing-plants/hydrocyclone-sand-separator/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/sand-dryer/',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'hydrocyclone-sand-separator',
    parentHub: '/products/sand-washing-plants/',
    siblings: [
      '/products/sand-washing-plants/silica-sand-washing-plant/',
      '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    ],
    crossPillar: '/products/industrial-conveyors-spares/belt-conveyors/',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'mineral-log-washer',
    parentHub: '/products/sand-washing-plants/',
    siblings: [
      '/products/sand-washing-plants/silica-sand-washing-plant/',
      '/products/sand-washing-plants/bucket-wheel-sand-washer/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/sand-dryer/',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'disc-granulator',
    parentHub: '/products/fertilizer-granulation-plants/',
    siblings: [
      '/products/fertilizer-granulation-plants/double-roller-granulator/',
      '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/triple-pass-dryer/',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'double-roller-granulator',
    parentHub: '/products/fertilizer-granulation-plants/',
    siblings: [
      '/products/fertilizer-granulation-plants/disc-granulator/',
      '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    ],
    crossPillar: '/products/industrial-conveyors-spares/bucket-elevators/',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'rotary-drum-granulator',
    parentHub: '/products/fertilizer-granulation-plants/',
    siblings: [
      '/products/fertilizer-granulation-plants/disc-granulator/',
      '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/triple-pass-dryer/',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'fertilizer-cooling-coating-drum',
    parentHub: '/products/fertilizer-granulation-plants/',
    siblings: [
      '/products/fertilizer-granulation-plants/disc-granulator/',
      '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    ],
    crossPillar: '/products/industrial-conveyors-spares/belt-conveyors/',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'bucket-elevators',
    parentHub: '/products/industrial-conveyors-spares/',
    siblings: [
      '/products/industrial-conveyors-spares/screw-conveyors/',
      '/products/industrial-conveyors-spares/belt-conveyors/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/sand-dryer/',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'screw-conveyors',
    parentHub: '/products/industrial-conveyors-spares/',
    siblings: [
      '/products/industrial-conveyors-spares/bucket-elevators/',
      '/products/industrial-conveyors-spares/belt-conveyors/',
    ],
    crossPillar: '/products/fertilizer-granulation-plants/disc-granulator/',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'forged-trunnion-rollers',
    parentHub: '/products/industrial-conveyors-spares/',
    siblings: [
      '/products/industrial-conveyors-spares/bucket-elevators/',
      '/products/industrial-conveyors-spares/screw-conveyors/',
    ],
    crossPillar: '/products/industrial-rotary-dryers/triple-pass-dryer/',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'belt-conveyors',
    parentHub: '/products/industrial-conveyors-spares/',
    siblings: [
      '/products/industrial-conveyors-spares/bucket-elevators/',
      '/products/industrial-conveyors-spares/screw-conveyors/',
    ],
    crossPillar: '/products/sand-washing-plants/silica-sand-washing-plant/',
  },
];

spokePages.forEach((item, idx) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', item.pillar, item.spoke, 'page.tsx');
  const content = fs.readFileSync(filePath, 'utf8');

  const hasParent = content.includes(item.parentHub);
  const sib1 = content.includes(item.siblings[0]);
  const sib2 = content.includes(item.siblings[1]);
  const hasCross = content.includes(item.crossPillar);

  console.log(`${idx + 1}. ${item.spoke}: Parent=${hasParent}, Sib1=${sib1}, Sib2=${sib2}, Cross=${hasCross}`);
});

