import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. hydrocyclone-sand-separator: Meta Description 150 chars
const p1 = path.join(projectRoot, 'app/(site)/products/sand-washing-plants/hydrocyclone-sand-separator/page.tsx');
let c1 = fs.readFileSync(p1, 'utf8');
const newDesc = 'Recover 95%+ fine sand down to 75 microns with high-pressure hydrocyclone sand separators (60 to 120 m³/hr). Built by Minerals Solutions in Zak GIDC.';
c1 = c1.replace(/description:\s*['"`][^'"`]+['"`]/, `description: '${newDesc}'`);
fs.writeFileSync(p1, c1, 'utf8');
console.log('1. hydrocyclone desc calibrated to:', newDesc.length, 'chars');

// 2. mineral-log-washer: Title length 56 chars
const p2 = path.join(projectRoot, 'app/(site)/products/sand-washing-plants/mineral-log-washer/page.tsx');
let c2 = fs.readFileSync(p2, 'utf8');
const newTitle2 = 'Heavy Duty Mineral Log Washer Line | Minerals Solutions';
c2 = c2.replace(/title:\s*['"`][^'"`]+['"`]/, `title: '${newTitle2}'`);
fs.writeFileSync(p2, c2, 'utf8');
console.log('2. mineral-log-washer title calibrated to:', newTitle2.length, 'chars');

// 3. disc-granulator: Title length 53 chars
const p3 = path.join(projectRoot, 'app/(site)/products/fertilizer-granulation-plants/disc-granulator/page.tsx');
let c3 = fs.readFileSync(p3, 'utf8');
const newTitle3 = 'Industrial Pan Disc Granulators | Minerals Solutions';
c3 = c3.replace(/title:\s*['"`][^'"`]+['"`]/, `title: '${newTitle3}'`);
fs.writeFileSync(p3, c3, 'utf8');
console.log('3. disc-granulator title calibrated to:', newTitle3.length, 'chars');

// 4. screw-conveyors: Definition passage
const p4 = path.join(projectRoot, 'app/(site)/products/industrial-conveyors-spares/screw-conveyors/page.tsx');
let c4 = fs.readFileSync(p4, 'utf8');
const oldScrewDef = 'in rigorous continuous manufacturing plant operations.';
const newScrewDef = 'in rigorous continuous manufacturing plant operations across mineral and chemical industrial facilities in India.';
if (c4.includes(oldScrewDef)) {
  c4 = c4.replace(oldScrewDef, newScrewDef);
  fs.writeFileSync(p4, c4, 'utf8');
  console.log('4. screw-conveyors definition calibrated (+9 words)');
} else {
  console.log('4. screw-conveyors marker not found, check text');
}

console.log('All 4 surgical fixes applied!');

