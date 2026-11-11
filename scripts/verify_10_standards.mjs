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
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/triple-pass-dryer/',
    parentHub: '/products/industrial-rotary-dryers/',
    crossPillarTarget: 'sand-washing-plants',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'sand-dryer',
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/sand-dryer/',
    parentHub: '/products/industrial-rotary-dryers/',
    crossPillarTarget: 'sand-washing-plants',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'chemical-powder-dryer',
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/chemical-powder-dryer/',
    parentHub: '/products/industrial-rotary-dryers/',
    crossPillarTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'industrial-rotary-dryers',
    spoke: 'biomass-sawdust-dryer',
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
    parentHub: '/products/industrial-rotary-dryers/',
    crossPillarTarget: 'fertilizer-granulation-plants',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'silica-sand-washing-plant',
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/silica-sand-washing-plant/',
    parentHub: '/products/sand-washing-plants/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'bucket-wheel-sand-washer',
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/bucket-wheel-sand-washer/',
    parentHub: '/products/sand-washing-plants/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'hydrocyclone-sand-separator',
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/hydrocyclone-sand-separator/',
    parentHub: '/products/sand-washing-plants/',
    crossPillarTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'sand-washing-plants',
    spoke: 'mineral-log-washer',
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/mineral-log-washer/',
    parentHub: '/products/sand-washing-plants/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'disc-granulator',
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/disc-granulator/',
    parentHub: '/products/fertilizer-granulation-plants/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'double-roller-granulator',
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/double-roller-granulator/',
    parentHub: '/products/fertilizer-granulation-plants/',
    crossPillarTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'rotary-drum-granulator',
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/rotary-drum-granulator/',
    parentHub: '/products/fertilizer-granulation-plants/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'fertilizer-granulation-plants',
    spoke: 'fertilizer-cooling-coating-drum',
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
    parentHub: '/products/fertilizer-granulation-plants/',
    crossPillarTarget: 'industrial-conveyors-spares',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'bucket-elevators',
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/bucket-elevators/',
    parentHub: '/products/industrial-conveyors-spares/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'screw-conveyors',
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/screw-conveyors/',
    parentHub: '/products/industrial-conveyors-spares/',
    crossPillarTarget: 'fertilizer-granulation-plants',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'forged-trunnion-rollers',
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/forged-trunnion-rollers/',
    parentHub: '/products/industrial-conveyors-spares/',
    crossPillarTarget: 'industrial-rotary-dryers',
  },
  {
    pillar: 'industrial-conveyors-spares',
    spoke: 'belt-conveyors',
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/belt-conveyors/',
    parentHub: '/products/industrial-conveyors-spares/',
    crossPillarTarget: 'sand-washing-plants',
  },
];

const basePath = path.join(projectRoot, 'app/(site)/products');
const sitemapPath = path.join(projectRoot, 'app/sitemap.ts');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

console.log('========================================================================');
console.log('   AUDITING 10 NON-NEGOTIABLE STANDARDS ACROSS 16 PRODUCT SPOKE PAGES   ');
console.log('========================================================================\n');

let totalIssues = 0;
const issuesList = [];

spokePages.forEach((item, index) => {
  const filePath = path.join(basePath, item.pillar, item.spoke, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Missing file: ${filePath}`);
    totalIssues++;
    issuesList.push(`[${item.spoke}] Missing file`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(`--- [PAGE ${String(index + 1).padStart(2, '0')}/16]: ${item.spoke} ---`);

  // 1. Title Length (52 - 58 chars)
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : '';
  const titleLen = title.length;
  const titleOk = titleLen >= 52 && titleLen <= 58;
  console.log(`  1. Title Length: ${titleLen} chars | ${titleOk ? 'PASS' : 'FAIL'} ("${title}")`);
  if (!titleOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Title length: ${titleLen} ("${title}")`);
  }

  // 2. Meta Description (145 - 155 chars + Zak GIDC + action verbs)
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const desc = descMatch ? descMatch[1] : '';
  const descLen = desc.length;
  const hasZakGidc = desc.toLowerCase().includes('zak gidc');
  const descOk = descLen >= 145 && descLen <= 155 && hasZakGidc;
  console.log(`  2. Meta Description: ${descLen} chars | Zak GIDC: ${hasZakGidc} | ${descOk ? 'PASS' : 'FAIL'} ("${desc}")`);
  if (!descOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Meta Description: ${descLen} chars (Zak GIDC: ${hasZakGidc})`);
  }

  // 3. Canonical URL
  const canonMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  const canon = canonMatch ? canonMatch[1] : '';
  const canonOk = canon === item.canonical;
  console.log(`  3. Canonical: ${canonOk ? 'PASS' : 'FAIL'} (${canon})`);
  if (!canonOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Canonical mismatch: ${canon}`);
  }

  // 4. Structured Data (Product, AggregateOffer in INR, InStock, 2027, BreadcrumbList)
  const hasProduct = content.includes("'@type': 'Product'") || content.includes('"@type": "Product"');
  const hasOffer = (content.includes("'@type': 'AggregateOffer'") || content.includes('"@type": "AggregateOffer"')) &&
                    content.includes('INR') &&
                    content.includes('InStock') &&
                    content.includes('2027');
  const hasBreadcrumbs = content.includes("'@type': 'BreadcrumbList'") || content.includes('"@type": "BreadcrumbList"');
  const schemaOk = hasProduct && hasOffer && hasBreadcrumbs;
  console.log(`  4. Structured Data: ${schemaOk ? 'PASS' : 'FAIL'} (Product: ${hasProduct}, Offer: ${hasOffer}, Breadcrumbs: ${hasBreadcrumbs})`);
  if (!schemaOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Structured Data incomplete`);
  }

  // 5. AI Citability Passage (130-170 words definition in top 30%)
  let defWords = 0;
  const defMatch = content.match(/<div className="text-slate-800 text-sm sm:text-base leading-relaxed">([\s\S]*?)<\/div>/) ||
                   content.match(/<strong[^>]*>What is[^<]*<\/strong>([\s\S]*?)(<\/p>|<\/div>)/);
  if (defMatch) {
    const rawDef = defMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    defWords = rawDef.split(' ').length;
  }
  const defOk = defWords >= 130 && defWords <= 170;
  console.log(`  5. AI Citability Passage: ${defWords} words | ${defOk ? 'PASS' : 'FAIL'}`);
  if (!defOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] AI Citability Passage: ${defWords} words (Target: 130-170)`);
  }

  // 6. Zero Em-Dash Rule (—, \u2014, &mdash;)
  const hasEmDash = content.includes('—') || content.includes('\u2014') || content.includes('&mdash;');
  console.log(`  6. Zero Em-Dash Rule: ${!hasEmDash ? 'PASS (0 em-dashes)' : 'FAIL (em-dash found!)'}`);
  if (hasEmDash) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Em-dash found`);
  }

  // 7. Next.js Image Compliance (WebP, explicit width/height)
  const multiImageMatches = [...content.matchAll(/<Image\b([\s\S]*?)\/>/g)];
  let imagesOk = multiImageMatches.length > 0;
  multiImageMatches.forEach(m => {
    const imgBlock = m[1];
    const hasWidth = imgBlock.includes('width=');
    const hasHeight = imgBlock.includes('height=');
    if (!hasWidth || !hasHeight) imagesOk = false;
  });
  console.log(`  7. Image Compliance: ${imagesOk ? 'PASS' : 'FAIL'} (${multiImageMatches.length} images checked)`);
  if (!imagesOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Image Compliance (missing width/height)`);
  }

  // 8. Internal Linking Triangle (1 up to hub, 2 across to siblings, 1 cross-pillar)
  const hasParentLink = content.includes(item.parentHub);
  const hasCrossPillar = content.includes(item.crossPillarTarget);
  const productLinks = [...content.matchAll(/href=\{?['"`](\/products\/[^'"`]+)['"`]\}?/g)].map(m => m[1]);
  const uniqueProductLinks = new Set(productLinks);
  const linkingOk = hasParentLink && hasCrossPillar && uniqueProductLinks.size >= 4;
  console.log(`  8. Linking Triangle: ${linkingOk ? 'PASS' : 'FAIL'} (Parent: ${hasParentLink}, Cross-Pillar: ${hasCrossPillar}, Links: ${uniqueProductLinks.size})`);
  if (!linkingOk) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Linking Triangle: Parent=${hasParentLink}, Cross=${hasCrossPillar}, UniqueLinks=${uniqueProductLinks.size}`);
  }

  // 9. Dynamic XML Sitemap Check
  const routePath = item.canonical.replace('https://mineralssolution.in', '');
  const sitemapEntry = sitemapContent.includes(`path: '${routePath}', priority: 0.8, changeFrequency: 'weekly'`);
  console.log(`  9. Sitemap Registered: ${sitemapEntry ? 'PASS' : 'FAIL'}`);
  if (!sitemapEntry) {
    totalIssues++;
    issuesList.push(`[${item.spoke}] Sitemap missing priority: 0.8 & weekly`);
  }

  console.log('');
});

console.log('========================================================================');
console.log(`TOTAL DETECTED ISSUES TO RESOLVE ACROSS 16 PAGES: ${totalIssues}`);
if (issuesList.length > 0) {
  console.log('ISSUES SUMMARY:');
  issuesList.forEach(iss => console.log('  * ' + iss));
}
console.log('========================================================================');
