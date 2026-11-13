import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('<Image')) {
      const tagChunk = lines.slice(idx, idx + 14).join('\n');
      const hasFill = /\bfill\b/.test(tagChunk);
      const hasSizes = tagChunk.includes('sizes=');
      const hasWidth = tagChunk.includes('width=');
      const hasHeight = tagChunk.includes('height=');
      const srcMatch = tagChunk.match(/src=["']([^"']+)["']/);
      const src = srcMatch ? srcMatch[1] : 'dynamic';
      
      console.log(`[${path.relative(rootDir, file)}:${idx+1}] src="${src}" fill=${hasFill} sizes=${hasSizes} width=${hasWidth} height=${hasHeight}`);
    }
  });
}

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') scan(full);
    } else if (full.endsWith('.tsx')) {
      checkFile(full);
    }
  }
}

console.log('Scanning all Image components...');
scan(path.join(rootDir, 'app'));
scan(path.join(rootDir, 'components'));

