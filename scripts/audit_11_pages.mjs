import fs from 'fs';
import path from 'path';

const pages = [
  'app/(site)/page.tsx',
  'app/(site)/about/page.tsx',
  'app/(site)/contact/page.tsx',
  'app/(site)/industries/page.tsx',
  'app/(site)/manufacturing/page.tsx',
  'app/(site)/request-quote/page.tsx',
  'app/(site)/products/page.tsx',
  'app/(site)/products/industrial-rotary-dryers/page.tsx',
  'app/(site)/products/sand-washing-plants/page.tsx',
  'app/(site)/products/fertilizer-granulation-plants/page.tsx',
  'app/(site)/products/industrial-conveyors-spares/page.tsx'
];

const results = [];

for (const p of pages) {
  const fullPath = path.resolve(p);
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  // Title regex
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1].trim() : 'MISSING';
  
  // Description regex
  const descMatch = content.match(/description:\s*['"`]([\s\S]*?)['"`],/);
  const desc = descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : 'MISSING';
  
  // Canonical regex
  const canMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  const canonical = canMatch ? canMatch[1].trim() : 'MISSING';
  
  // H1 regex
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim() : 'MISSING';
  
  // H2 count & sample
  const h2Matches = Array.from(content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)).map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  // Spec tables
  const tableCount = (content.match(/<table|<TechnicalSpecTable/g) || []).length;
  
  // Links count
  const links = Array.from(content.matchAll(/<Link[^>]+href=['"`]([^'"`]+)['"`]/gi)).map(m => m[1]);
  
  // Image tags
  const images = Array.from(content.matchAll(/<Image[^>]+src=\{?['"`]?([^'"\s>]+)['"`]?\}?/gi)).map(m => m[1]);
  
  // Schema tags
  const hasSchema = content.includes('application/ld+json') || content.includes('<JsonLd');

  results.push({
    file: p,
    title,
    titleLen: title.length,
    desc,
    descLen: desc.length,
    canonical,
    h1,
    h2Count: h2Matches.length,
    h2s: h2Matches,
    tableCount,
    linkCount: links.length,
    imageCount: images.length,
    hasSchema
  });
}

console.log(JSON.stringify(results, null, 2));
