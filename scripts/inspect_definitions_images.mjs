import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const spokePages = [
  { pillar: 'industrial-rotary-dryers', spoke: 'triple-pass-dryer' },
  { pillar: 'industrial-rotary-dryers', spoke: 'sand-dryer' },
  { pillar: 'industrial-rotary-dryers', spoke: 'chemical-powder-dryer' },
  { pillar: 'industrial-rotary-dryers', spoke: 'biomass-sawdust-dryer' },
  { pillar: 'sand-washing-plants', spoke: 'silica-sand-washing-plant' },
  { pillar: 'sand-washing-plants', spoke: 'bucket-wheel-sand-washer' },
  { pillar: 'sand-washing-plants', spoke: 'hydrocyclone-sand-separator' },
  { pillar: 'sand-washing-plants', spoke: 'mineral-log-washer' },
  { pillar: 'fertilizer-granulation-plants', spoke: 'disc-granulator' },
  { pillar: 'fertilizer-granulation-plants', spoke: 'double-roller-granulator' },
  { pillar: 'fertilizer-granulation-plants', spoke: 'rotary-drum-granulator' },
  { pillar: 'fertilizer-granulation-plants', spoke: 'fertilizer-cooling-coating-drum' },
  { pillar: 'industrial-conveyors-spares', spoke: 'bucket-elevators' },
  { pillar: 'industrial-conveyors-spares', spoke: 'screw-conveyors' },
  { pillar: 'industrial-conveyors-spares', spoke: 'forged-trunnion-rollers' },
  { pillar: 'industrial-conveyors-spares', spoke: 'belt-conveyors' },
];

spokePages.forEach((item, idx) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', item.pillar, item.spoke, 'page.tsx');
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(`=== [${idx + 1}] ${item.spoke} ===`);

  // Definition search
  // Look for the definition section in the top 30%
  const lines = content.split('\n');
  const top30Percent = lines.slice(0, Math.floor(lines.length * 0.35)).join('\n');
  
  // Find paragraphs with strong tags
  const pMatches = [...top30Percent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  let foundDef = false;
  pMatches.forEach(m => {
    const text = m[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.toLowerCase().includes(' is a ') || text.toLowerCase().includes(' is an ')) {
      const words = text.split(' ').length;
      console.log(`   Def block: ${words} words`);
      if (words < 120 || words > 180) {
        console.log(`   Text preview: "${text.substring(0, 100)}..."`);
      }
      foundDef = true;
    }
  });
  if (!foundDef) {
    console.log('   Def block: NOT FOUND in top 35%');
  }

  // Count em-dashes
  const emDashes = (content.match(/—/g) || []).length;
  console.log(`   Em-dashes: ${emDashes}`);

  // Images
  const imgMatches = [...content.matchAll(/<Image\b([\s\S]*?)\/>/g)];
  console.log(`   Images: ${imgMatches.length}`);
  imgMatches.forEach((m, imgIdx) => {
    const b = m[1];
    const hasFill = b.includes('fill');
    const hasWidth = b.includes('width=');
    const hasHeight = b.includes('height=');
    console.log(`     Image ${imgIdx + 1}: fill=${hasFill}, width=${hasWidth}, height=${hasHeight}`);
  });
  console.log('');
});

