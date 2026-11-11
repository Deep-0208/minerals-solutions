import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const files = [
  'industrial-rotary-dryers/triple-pass-dryer',
  'industrial-rotary-dryers/sand-dryer',
  'industrial-rotary-dryers/chemical-powder-dryer',
  'industrial-rotary-dryers/biomass-sawdust-dryer',
  'sand-washing-plants/silica-sand-washing-plant',
  'sand-washing-plants/bucket-wheel-sand-washer',
  'sand-washing-plants/hydrocyclone-sand-separator',
  'sand-washing-plants/mineral-log-washer',
  'fertilizer-granulation-plants/disc-granulator',
  'fertilizer-granulation-plants/double-roller-granulator',
  'fertilizer-granulation-plants/rotary-drum-granulator',
  'fertilizer-granulation-plants/fertilizer-cooling-coating-drum',
  'industrial-conveyors-spares/bucket-elevators',
  'industrial-conveyors-spares/screw-conveyors',
  'industrial-conveyors-spares/forged-trunnion-rollers',
  'industrial-conveyors-spares/belt-conveyors'
];

files.forEach((f, idx) => {
  const c = fs.readFileSync(path.join(projectRoot, 'app/(site)/products', f, 'page.tsx'), 'utf8');
  let text = '';
  const markers = ['Citability', 'Technical Engineering Definition', 'Technical Definition', 'Process Summary'];
  for (const m of markers) {
    const pos = c.indexOf(m);
    if (pos !== -1) {
      const sub = c.substring(pos, pos + 2500);
      const pMatch = sub.match(/<p[^>]*>([\s\S]*?)<\/p>/);
      if (pMatch) {
        text = pMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        break;
      }
    }
  }
  const words = text ? text.split(' ').length : 0;
  console.log(`${idx + 1}. ${f}: ${words} words [${words >= 130 && words <= 170 ? 'PASS' : 'FAIL'}]`);
  if (words < 130 || words > 170) {
    console.log(`   Text preview: ${text.substring(0, 100)}...`);
  }
});

