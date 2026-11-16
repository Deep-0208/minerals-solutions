import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('========================================================================');
console.log('   MINERALS SOLUTIONS: COMPREHENSIVE GEO & AI READINESS AUDIT           ');
console.log('========================================================================\n');

let issues = 0;

// 1. Check .well-known/ai-catalog.json
const aiCatalogPath = path.join(rootDir, 'public', '.well-known', 'ai-catalog.json');
if (!fs.existsSync(aiCatalogPath)) {
  console.log('[FAIL] public/.well-known/ai-catalog.json does not exist');
  issues++;
} else {
  try {
    const aiCatalog = JSON.parse(fs.readFileSync(aiCatalogPath, 'utf8'));
    const checks = {
      schemaVersion: aiCatalog.schema_version === '1.0.0',
      hasProvider: Boolean(aiCatalog.provider?.name),
      hasGeo: Boolean(aiCatalog.provider?.geo?.latitude && aiCatalog.provider?.geo?.longitude),
      hasCapabilities: Array.isArray(aiCatalog.capabilities) && aiCatalog.capabilities.length >= 4,
      hasEndpoints: Boolean(aiCatalog.endpoints?.catalog && aiCatalog.endpoints?.llms_txt && aiCatalog.endpoints?.sitemap)
    };
    const passed = Object.values(checks).every(Boolean);
    if (passed) {
      console.log('[PASS] public/.well-known/ai-catalog.json: valid schema, provider, geo (' + aiCatalog.provider.geo.latitude + ', ' + aiCatalog.provider.geo.longitude + '), ' + aiCatalog.capabilities.length + ' capabilities');
    } else {
      console.log('[FAIL] public/.well-known/ai-catalog.json missing required fields:', checks);
      issues++;
    }
  } catch (err) {
    console.log('[FAIL] public/.well-known/ai-catalog.json JSON parse error:', err.message);
    issues++;
  }
}

// 2. Check robots.ts
const robotsPath = path.join(rootDir, 'app', 'robots.ts');
if (!fs.existsSync(robotsPath)) {
  console.log('[FAIL] app/robots.ts does not exist');
  issues++;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  const requiredBots = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot',
    'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'
  ];
  const missingBots = requiredBots.filter(bot => !robotsContent.includes(bot));
  const hasStaticAllow = robotsContent.includes('/_next/static/') && robotsContent.includes('/_next/image');

  if (missingBots.length === 0 && hasStaticAllow) {
    console.log('[PASS] app/robots.ts: all ' + requiredBots.length + ' major AI crawlers explicitly allowed + static assets permitted');
  } else {
    console.log('[FAIL] app/robots.ts issues: missing bots [' + missingBots.join(', ') + '], hasStaticAllow: ' + hasStaticAllow);
    issues++;
  }
}

// 3. Check llms.txt & llms-full.txt
const llmsPath = path.join(rootDir, 'public', 'llms.txt');
const llmsFullPath = path.join(rootDir, 'public', 'llms-full.txt');
if (!fs.existsSync(llmsPath) || !fs.existsSync(llmsFullPath)) {
  console.log('[FAIL] public/llms.txt or public/llms-full.txt does not exist');
  issues++;
} else {
  const llmsContent = fs.readFileSync(llmsPath, 'utf8');
  const checks = {
    hasTitle: llmsContent.includes('# Minerals Solutions'),
    hasGrounding: llmsContent.includes('Company Credentials & Grounding'),
    hasZakGIDC: llmsContent.includes('Zak GIDC'),
    hasCoordinates: llmsContent.includes('23.1672° N, 72.8125° E'),
    hasFullDossier: llmsContent.includes('llms-full.txt'),
    hasAiCatalog: fs.existsSync(aiCatalogPath)
  };
  const passed = Object.values(checks).every(Boolean);
  if (passed) {
    console.log('[PASS] public/llms.txt & llms-full.txt: full grounding, coordinates, and technical dossier linked');
  } else {
    console.log('[FAIL] public/llms.txt checks failed:', checks);
    issues++;
  }
}

// 4. Check WebMCP Quote Tool integration
const webMcpPath = path.join(rootDir, 'components', 'seo', 'WebMCPQuoteTool.tsx');
if (!fs.existsSync(webMcpPath)) {
  console.log('[FAIL] components/seo/WebMCPQuoteTool.tsx does not exist');
  issues++;
} else {
  const mcpContent = fs.readFileSync(webMcpPath, 'utf8');
  if (mcpContent.includes('request_machinery_quote') && mcpContent.includes('registerTool')) {
    console.log('[PASS] components/seo/WebMCPQuoteTool.tsx: Agentic WebMCP machinery quote tool active');
  } else {
    console.log('[FAIL] components/seo/WebMCPQuoteTool.tsx missing registerTool');
    issues++;
  }
}

// 5. Check app/layout.tsx Schema & Head Links
const layoutPath = path.join(rootDir, 'app', 'layout.tsx');
if (!fs.existsSync(layoutPath)) {
  console.log('[FAIL] app/layout.tsx does not exist');
  issues++;
} else {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  const hasGeo = layoutContent.includes('GeoCoordinates') && layoutContent.includes('latitude');
  const hasAiCatalogLink = layoutContent.includes('.well-known/ai-catalog.json');
  const hasWebMcpComponent = layoutContent.includes('<WebMCPQuoteTool');

  if (hasGeo && hasAiCatalogLink && hasWebMcpComponent) {
    console.log('[PASS] app/layout.tsx: Organization schema, GeoCoordinates, ai-catalog link, and WebMCP tool mounted');
  } else {
    console.log('[FAIL] app/layout.tsx incomplete:', { hasGeo, hasAiCatalogLink, hasWebMcpComponent });
    issues++;
  }
}

console.log('\n========================================================================');
console.log(`TOTAL GEO ISSUES DETECTED: ${issues}`);
console.log('========================================================================');
process.exit(issues === 0 ? 0 : 1);
