import { fileURLToPath } from 'url';
import path from 'path';

const routes = [
  '/products/industrial-rotary-dryers/triple-pass-dryer/',
  '/products/industrial-rotary-dryers/sand-dryer/',
  '/products/industrial-rotary-dryers/chemical-powder-dryer/',
  '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
  '/products/sand-washing-plants/silica-sand-washing-plant/',
  '/products/sand-washing-plants/bucket-wheel-sand-washer/',
  '/products/sand-washing-plants/hydrocyclone-sand-separator/',
  '/products/sand-washing-plants/mineral-log-washer/',
  '/products/fertilizer-granulation-plants/disc-granulator/',
  '/products/fertilizer-granulation-plants/double-roller-granulator/',
  '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
  '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
  '/products/industrial-conveyors-spares/bucket-elevators/',
  '/products/industrial-conveyors-spares/screw-conveyors/',
  '/products/industrial-conveyors-spares/forged-trunnion-rollers/',
  '/products/industrial-conveyors-spares/belt-conveyors/'
];

async function verifyAll() {
  console.log('AUDITING ALL 16 SPOKE PAGES ON HTTP://LOCALHOST:3000...\n');
  let passCount = 0;
  for (const r of routes) {
    const url = 'http://localhost:3000' + r;
    const res = await fetch(url);
    if (res.status !== 200) {
      console.error(`[FAIL] ${r} returned status ${res.status}`);
      continue;
    }
    const html = await res.text();
    const hasProductSchema = html.includes('"@type":"Product"') || html.includes('"@type": "Product"');
    const hasFaqSchema = html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"');
    const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"') || html.includes('"@type": "BreadcrumbList"');
    const hasTable = html.includes('<table');
    const hasDefinition = /<strong[^>]*>/.test(html) && (html.includes(' is a ') || html.includes(' is an '));
    
    // strip tags to rough word count
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
    const words = text.split(' ').length;
    
    const allChecks = hasProductSchema && hasFaqSchema && hasBreadcrumb && hasTable && hasDefinition;
    console.log(`[${allChecks ? 'PASS' : 'WARN'}] ${r.padEnd(72, ' ')} | ~${words} words | Status: ${res.status}`);
    if (!allChecks) {
      console.log(`  Details: Schema=${hasProductSchema}, FAQ=${hasFaqSchema}, BC=${hasBreadcrumb}, Table=${hasTable}, Def=${hasDefinition}`);
    } else {
      passCount++;
    }
  }
  console.log(`\n======================================================`);
  console.log(`GLOBAL AUDIT REPORT: ${passCount} of 16 pages PASSED all engineering & SEO standards.`);
  console.log(`======================================================`);
}

verifyAll().catch(console.error);
