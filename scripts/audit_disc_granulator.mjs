import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../app/(site)/products/fertilizer-granulation-plants/disc-granulator/page.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Strip JSX tags, code, and symbols to estimate raw copy word count
const textOnly = content
  .replace(/<[^>]+>/g, ' ')
  .replace(/import\s+.*?from\s+['"].*?['"];/g, ' ')
  .replace(/const\s+.*?=.*?;/g, ' ')
  .replace(/[{}()[\],;:"'=`]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const words = textOnly.split(/\s+/).filter(w => w.length > 2);
console.log(`[Audit] Approximate English Word Count: ${words.length}`);

// Check schema definitions
const hasProductSchema = /['"]@type['"]:\s*['"]Product['"]/.test(content);
const hasOffer = /['"]@type['"]:\s*['"]AggregateOffer['"]/.test(content);
const hasBreadcrumbs = /['"]@type['"]:\s*['"]BreadcrumbList['"]/.test(content);
const hasFaq = /['"]@type['"]:\s*['"]FAQPage['"]/.test(content);

console.log(`[Audit] Product Schema: ${hasProductSchema ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] AggregateOffer Schema: ${hasOffer ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] BreadcrumbList Schema: ${hasBreadcrumbs ? 'PASS' : 'FAIL'}`);
console.log(`[Audit] FAQPage Schema: ${hasFaq ? 'PASS' : 'FAIL'}`);

// Test against live dev server
async function checkLive() {
  try {
    const res = await fetch('http://localhost:3000/products/fertilizer-granulation-plants/disc-granulator/');
    console.log(`[Live HTTP] Status: ${res.status} ${res.statusText}`);
    const html = await res.text();
    console.log(`[Live HTTP] HTML Length: ${html.length} bytes`);
    console.log(`[Live HTTP] Contains H1: ${html.includes('<h1') ? 'PASS' : 'FAIL'}`);
    console.log(`[Live HTTP] Contains Canonical: ${html.includes('https://mineralssolution.in/products/fertilizer-granulation-plants/disc-granulator/') ? 'PASS' : 'FAIL'}`);
  } catch (err) {
    console.error(`[Live HTTP] Fetch error: ${err.message}`);
  }
}

checkLive().catch(console.error);
