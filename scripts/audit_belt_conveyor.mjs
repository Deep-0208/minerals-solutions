import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagePath = path.resolve(__dirname, '../app/(site)/products/industrial-conveyors-spares/belt-conveyors/page.tsx');
const content = fs.readFileSync(pagePath, 'utf8');

// Strip imports and metadata to count body text words
const textMatches = content.match(/>([^<]+)</g) || [];
const rawText = textMatches.map(m => m.replace(/[><]/g, '').trim()).filter(Boolean).join(' ');
const words = rawText.split(/\s+/).filter(w => w.length > 1);

console.log(`[Audit] Approximate English Word Count: ${words.length}`);

// Schema tests
const hasProduct = /['"]@type['"]:\s*['"]Product['"]/.test(content);
const hasOffer = /['"]@type['"]:\s*['"]AggregateOffer['"]/.test(content);
const hasBreadcrumb = /['"]@type['"]:\s*['"]BreadcrumbList['"]/.test(content);
const hasFAQ = /['"]@type['"]:\s*['"]FAQPage['"]/.test(content);

console.log(`[Audit] Product Schema: ${hasProduct ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] AggregateOffer Schema: ${hasOffer ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] BreadcrumbList Schema: ${hasBreadcrumb ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] FAQPage Schema: ${hasFAQ ? 'PASS' : 'FAIL'}`);

// Live HTTP test
async function checkLive() {
  const targetUrl = 'http://localhost:3000/products/industrial-conveyors-spares/belt-conveyors/';
  try {
    const res = await fetch(targetUrl);
    console.log(`[Live HTTP] Status: ${res.status} ${res.statusText}`);
    const html = await res.text();
    console.log(`[Live HTTP] HTML Length: ${html.length} bytes`);
    console.log(`[Live HTTP] Contains H1: ${html.includes('Belt Conveyor Systems') ? 'PASS' : 'FAIL'}`);
    console.log(`[Live HTTP] Contains Canonical: ${html.includes('/products/industrial-conveyors-spares/belt-conveyors/') ? 'PASS' : 'FAIL'}`);
  } catch (err) {
    console.error(`[Live HTTP] Error fetching ${targetUrl}:`, err.message);
  }
}

checkLive().catch(console.error);

