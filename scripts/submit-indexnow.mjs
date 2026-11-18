import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const HOST = 'mineralssolution.in';
const SITE_URL = `https://${HOST}`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_KEY = '29d1e8672ab3034074fa1a66efe05870';

const key = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();
const keyFilePath = path.join(rootDir, 'public', `${key}.txt`);
const routesFilePath = path.join(rootDir, 'data', 'sitemap-routes.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const customPaths = args.filter((arg) => !arg.startsWith('--'));

if (!existsSync(keyFilePath)) {
  console.error(`Error: IndexNow key verification file missing at public/${key}.txt`);
  process.exit(1);
}

const keyFileContent = readFileSync(keyFilePath, 'utf8').trim();
if (keyFileContent !== key) {
  console.error(`Error: public/${key}.txt content does not match configured INDEXNOW_KEY.`);
  process.exit(1);
}

const routes = JSON.parse(readFileSync(routesFilePath, 'utf8'));
const normalizeUrl = (entry) => {
  if (entry.startsWith('https://') || entry.startsWith('http://')) {
    return entry.endsWith('/') ? entry : `${entry}/`;
  }
  const withLeading = entry.startsWith('/') ? entry : `/${entry}`;
  const withTrailing = withLeading === '/' || withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
  return `${SITE_URL}${withTrailing}`;
};

const urlList = customPaths.length > 0
  ? customPaths.map(normalizeUrl)
  : routes.map((r) => `${SITE_URL}${r.path}`);

const payload = {
  host: HOST,
  key,
  keyLocation: `${SITE_URL}/${key}.txt`,
  urlList,
};

if (dryRun) {
  console.log('IndexNow Dry-Run Payload (not sent):');
  console.log(JSON.stringify(payload, null, 2));
  console.log(`\nVerified key file: public/${key}.txt (${urlList.length} canonical URLs ready)`);
  process.exit(0);
}

console.log(`Submitting ${urlList.length} URLs to IndexNow (${INDEXNOW_ENDPOINT})...`);
const response = await fetch(INDEXNOW_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

const body = await response.text();
if (response.status === 200 || response.status === 202) {
  console.log(`IndexNow submission accepted (HTTP ${response.status}) for ${urlList.length} URLs.`);
  process.exit(0);
}

console.error(`IndexNow submission failed (HTTP ${response.status}): ${body || response.statusText}`);
if (response.status === 403) {
  console.error(`Hint: Ensure ${payload.keyLocation} is deployed and publicly reachable over HTTPS.`);
}
process.exit(1);
