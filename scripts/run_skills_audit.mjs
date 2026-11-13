import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'http://localhost:3000';

const routesToAudit = [
  // 16 Spoke Pages
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
  '/products/industrial-conveyors-spares/belt-conveyors/',

  // 4 Parent Hub Pages
  '/products/industrial-rotary-dryers/',
  '/products/sand-washing-plants/',
  '/products/fertilizer-granulation-plants/',
  '/products/industrial-conveyors-spares/',

  // Core Site Pages
  '/',
  '/products/',
  '/about/',
  '/contact/',
  '/manufacturing/',
  '/industries/',
  '/request-quote/',
  '/privacy-policy/',
  '/terms/'
];

async function fetchRoute(route) {
  const url = `${BASE_URL}${route}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ClaudeSeoAudit/2.4)' } });
    const text = await res.text();
    return { status: res.status, html: text, url };
  } catch (err) {
    return { status: 0, error: err.message, url };
  }
}

function parseHTML(html, route) {
  const results = {
    route,
    title: '',
    titleLen: 0,
    metaDesc: '',
    metaDescLen: 0,
    canonical: '',
    ogTitle: '',
    ogDesc: '',
    ogImage: '',
    twitterCard: '',
    h1s: [],
    h2s: [],
    h3s: [],
    h4s: [],
    h5s: [],
    h6s: [],
    jsonLds: [],
    images: [],
    links: [],
    emDashes: 0,
    rawText: '',
    wordCount: 0,
    citabilityWords: 0,
    citabilityText: '',
    entityMentions: {
      mineralsSolutions: false,
      zakGidc: false,
      dahegam: false,
      gujarat: false,
      gstin: false,
      udyam: false,
    },
    tablesCount: 0,
    listsCount: 0,
  };

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) {
    results.title = titleMatch[1].trim();
    results.titleLen = results.title.length;
  }

  // Meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                        html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  if (metaDescMatch) {
    results.metaDesc = metaDescMatch[1].trim();
    results.metaDescLen = results.metaDesc.length;
  }

  // Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) ||
                         html.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);
  if (canonicalMatch) {
    results.canonical = canonicalMatch[1].trim();
  }

  // OG
  const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  if (ogTitleMatch) results.ogTitle = ogTitleMatch[1];
  const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  if (ogDescMatch) results.ogDesc = ogDescMatch[1];
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  if (ogImageMatch) results.ogImage = ogImageMatch[1];

  // Twitter
  const twCardMatch = html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']*)["']/i);
  if (twCardMatch) results.twitterCard = twCardMatch[1];

  // Headings
  const h1Matches = html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  for (const m of h1Matches) {
    results.h1s.push(m[1].replace(/<[^>]+>/g, '').trim());
  }
  const h2Matches = html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi);
  for (const m of h2Matches) {
    results.h2s.push(m[1].replace(/<[^>]+>/g, '').trim());
  }
  const h3Matches = html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi);
  for (const m of h3Matches) {
    results.h3s.push(m[1].replace(/<[^>]+>/g, '').trim());
  }

  // Tables & Lists
  results.tablesCount = (html.match(/<table/gi) || []).length;
  results.listsCount = (html.match(/<ul|<ol/gi) || []).length;

  // JSON-LD
  const jsonLdMatches = html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (Array.isArray(parsed)) {
        results.jsonLds.push(...parsed);
      } else {
        results.jsonLds.push(parsed);
      }
    } catch (e) {
      results.jsonLds.push({ parseError: e.message, raw: m[1] });
    }
  }

  // Images
  const imgMatches = html.matchAll(/<img\s+([^>]*?)src=["']([^"']*)["']([^>]*?)>/gi);
  for (const m of imgMatches) {
    const fullTag = m[0];
    const src = m[2];
    const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
    const widthMatch = fullTag.match(/width=["']?(\d+)["']?/i);
    const heightMatch = fullTag.match(/height=["']?(\d+)["']?/i);
    results.images.push({
      src,
      alt: altMatch ? altMatch[1] : null,
      width: widthMatch ? parseInt(widthMatch[1]) : null,
      height: heightMatch ? parseInt(heightMatch[1]) : null,
      isWebP: src.endsWith('.webp') || src.includes('.webp'),
    });
  }

  // Em dashes
  const emDashMatches = html.match(/—/g);
  results.emDashes = emDashMatches ? emDashMatches.length : 0;

  // Text content & Word count
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : html;
  const strippedText = bodyContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  results.rawText = strippedText;
  const words = strippedText.split(/\s+/).filter(Boolean);
  results.wordCount = words.length;

  // AI Citability block detection in spoke pages
  const isSpoke = route.split('/').filter(Boolean).length === 3;
  if (isSpoke) {
    // Check for border-l-4 or definition block
    const defMatch = html.match(/<div[^>]*border-l-4[^>]*>([\s\S]*?)<\/div>/i) ||
                     html.match(/<p[^>]*text-slate-700[^>]*>([\s\S]*?)<\/p>/i);
    if (defMatch) {
      const defText = defMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const defWords = defText.split(/\s+/).filter(Boolean);
      results.citabilityWords = defWords.length;
      results.citabilityText = defText.slice(0, 160) + '...';
    }
  }

  // Entity mentions
  const lower = strippedText.toLowerCase();
  results.entityMentions.mineralsSolutions = lower.includes('minerals solutions');
  results.entityMentions.zakGidc = lower.includes('zak gidc') || lower.includes('zak');
  results.entityMentions.dahegam = lower.includes('dahegam');
  results.entityMentions.gujarat = lower.includes('gujarat');
  results.entityMentions.gstin = lower.includes('gstin') || lower.includes('24auspp9555f1zz');
  results.entityMentions.udyam = lower.includes('udyam');

  return results;
}

async function auditSystemFiles() {
  const systemAudit = {
    robotsTxt: { exists: false, content: '', checks: {} },
    llmsTxt: { exists: false, content: '', checks: {} },
    aiCatalog: { exists: false, content: null, checks: {} },
    sitemapXml: { exists: false, urlCount: 0, checks: {} }
  };

  // 1. Robots.txt
  try {
    const res = await fetch(`${BASE_URL}/robots.txt`);
    if (res.status === 200) {
      systemAudit.robotsTxt.exists = true;
      systemAudit.robotsTxt.content = await res.text();
      const txt = systemAudit.robotsTxt.content;
      systemAudit.robotsTxt.checks = {
        hasSitemap: txt.includes('Sitemap:'),
        allowsAll: /User-agent:\s*\*/i.test(txt) && /Allow:\s*\//i.test(txt),
        disallowsApi: /Disallow:\s*\/api\//i.test(txt),
        hasGPTBot: txt.includes('GPTBot'),
        hasOAISearchBot: txt.includes('OAI-SearchBot'),
        hasClaudeBot: txt.includes('ClaudeBot'),
        hasClaudeSearchBot: txt.includes('Claude-SearchBot'),
        hasPerplexityBot: txt.includes('PerplexityBot'),
        hasGoogleExtended: txt.includes('Google-Extended'),
        hasApplebotExtended: txt.includes('Applebot-Extended')
      };
    }
  } catch (e) {
    systemAudit.robotsTxt.error = e.message;
  }

  // 2. llms.txt
  try {
    const res = await fetch(`${BASE_URL}/llms.txt`);
    if (res.status === 200) {
      systemAudit.llmsTxt.exists = true;
      systemAudit.llmsTxt.content = await res.text();
      const txt = systemAudit.llmsTxt.content;
      systemAudit.llmsTxt.checks = {
        hasTitle: txt.includes('# Minerals Solutions'),
        hasGrounding: txt.includes('Company Credentials & Grounding'),
        hasZakGIDC: txt.includes('Zak GIDC'),
        hasCoordinates: txt.includes('23.1672° N, 72.8125° E'),
        hasGSTIN: txt.includes('24AUSPP9555F1ZZ'),
        hasCatalog: txt.includes('Core Equipment Catalog'),
        hasAll16Spokes: (txt.match(/https:\/\/mineralssolution\.in\/products\//g) || []).length >= 16
      };
    }
  } catch (e) {
    systemAudit.llmsTxt.error = e.message;
  }

  // 3. ai-catalog.json
  try {
    const res = await fetch(`${BASE_URL}/.well-known/ai-catalog.json`);
    if (res.status === 200) {
      systemAudit.aiCatalog.exists = true;
      const json = await res.json();
      systemAudit.aiCatalog.content = json;
      systemAudit.aiCatalog.checks = {
        hasSchemaVersion: Boolean(json.schema_version),
        hasProvider: Boolean(json.provider && json.provider.name),
        hasGeo: Boolean(json.provider && json.provider.geo && json.provider.geo.latitude),
        hasCapabilities: Array.isArray(json.capabilities) && json.capabilities.length >= 4,
        hasEndpoints: Boolean(json.endpoints && json.endpoints.catalog && json.endpoints.llms_txt)
      };
    }
  } catch (e) {
    systemAudit.aiCatalog.error = e.message;
  }

  // 4. sitemap.xml
  try {
    const res = await fetch(`${BASE_URL}/sitemap.xml`);
    if (res.status === 200) {
      systemAudit.sitemapXml.exists = true;
      const xml = await res.text();
      const locMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
      systemAudit.sitemapXml.urlCount = locMatches.length;
      systemAudit.sitemapXml.checks = {
        urlCount: locMatches.length,
        hasAll16Spokes: routesToAudit.filter(r => r.split('/').filter(Boolean).length === 3).every(r => xml.includes(r)),
        hasHubs: routesToAudit.filter(r => r.split('/').filter(Boolean).length === 2 && r.startsWith('/products/')).every(r => xml.includes(r))
      };
    }
  } catch (e) {
    systemAudit.sitemapXml.error = e.message;
  }

  return systemAudit;
}

async function run() {
  console.log(`Starting Comprehensive Audit against /seo-page, /seo-audit, /seo-agentic, /seo-geo...`);
  console.log(`Target URL: ${BASE_URL}`);

  const pageAudits = [];
  for (const route of routesToAudit) {
    process.stdout.write(`Fetching ${route}... `);
    const { status, html, error } = await fetchRoute(route);
    if (status !== 200) {
      console.log(`FAILED (${status || error})`);
      pageAudits.push({ route, status, error });
      continue;
    }
    const parsed = parseHTML(html, route);
    parsed.status = status;
    pageAudits.push(parsed);
    console.log(`OK (200) - Title: "${parsed.title}" (${parsed.titleLen}c) - Words: ${parsed.wordCount}`);
  }

  console.log(`\nAuditing System Files (robots.txt, llms.txt, ai-catalog.json, sitemap.xml)...`);
  const systemAudit = await auditSystemFiles();

  const report = {
    timestamp: new Date().toISOString(),
    routesAuditedCount: pageAudits.length,
    pages: pageAudits,
    system: systemAudit
  };

  const outputPath = path.resolve(__dirname, 'comprehensive_audit_results.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\nAudit results written to: ${outputPath}`);

  // Summary analysis
  console.log('\n=== AUDIT SUMMARY ANALYSIS ===');
  const spokePages = pageAudits.filter(p => p.route.split('/').filter(Boolean).length === 3);
  const hubPages = pageAudits.filter(p => p.route.split('/').filter(Boolean).length === 2 && p.route.startsWith('/products/'));
  const corePages = pageAudits.filter(p => !spokePages.includes(p) && !hubPages.includes(p));

  console.log(`16 Spoke Pages Audited: ${spokePages.length}`);
  console.log(`4 Hub Pages Audited: ${hubPages.length}`);
  console.log(`Core Utility Pages Audited: ${corePages.length}`);

  let emDashCountTotal = pageAudits.reduce((acc, p) => acc + (p.emDashes || 0), 0);
  console.log(`Total Em-Dashes detected across all pages: ${emDashCountTotal}`);

  let imagesTotal = pageAudits.reduce((acc, p) => acc + (p.images ? p.images.length : 0), 0);
  let nonWebpCount = pageAudits.reduce((acc, p) => acc + (p.images ? p.images.filter(i => !i.isWebP).length : 0), 0);
  let missingDimensions = pageAudits.reduce((acc, p) => acc + (p.images ? p.images.filter(i => !i.width || !i.height).length : 0), 0);
  console.log(`Total Images: ${imagesTotal} (Non-WebP: ${nonWebpCount}, Missing dimensions: ${missingDimensions})`);

  let jsonLdTotal = pageAudits.reduce((acc, p) => acc + (p.jsonLds ? p.jsonLds.length : 0), 0);
  console.log(`Total JSON-LD schemas detected: ${jsonLdTotal}`);

  // Title lengths
  const titleIssues = pageAudits.filter(p => p.titleLen < 40 || p.titleLen > 65);
  console.log(`Pages with non-ideal title length (<40 or >65): ${titleIssues.length}`);
  if (titleIssues.length > 0) {
    titleIssues.forEach(p => console.log(`  - ${p.route}: "${p.title}" (${p.titleLen} chars)`));
  }

  // Meta desc lengths
  const descIssues = pageAudits.filter(p => p.metaDescLen < 120 || p.metaDescLen > 165);
  console.log(`Pages with non-ideal description length (<120 or >165): ${descIssues.length}`);
  if (descIssues.length > 0) {
    descIssues.forEach(p => console.log(`  - ${p.route}: (${p.metaDescLen} chars) "${p.metaDesc}"`));
  }

  // Robots.txt checks
  console.log('\nSystem Files Status:');
  console.log('robots.txt exists:', systemAudit.robotsTxt.exists, systemAudit.robotsTxt.checks);
  console.log('llms.txt exists:', systemAudit.llmsTxt.exists, systemAudit.llmsTxt.checks);
  console.log('ai-catalog.json exists:', systemAudit.aiCatalog.exists, systemAudit.aiCatalog.checks);
  console.log('sitemap.xml exists:', systemAudit.sitemapXml.exists, systemAudit.sitemapXml.checks);
}

run().catch(console.error);
