import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sharp = require('C:/Users/DELL/Desktop/SEO/Honeywell SEO/node_modules/sharp');

const rawDir = path.resolve('Minerals Solutions SEO/assets/raw-images');
const imDir = path.resolve('Minerals Solutions SEO/assets/indiamart-images');

const rawFiles = fs.readdirSync(rawDir);
const imFiles = fs.readdirSync(imDir);

console.log('--- RAW IMAGES (' + rawFiles.length + ') ---');
for (const f of rawFiles) {
  const meta = await sharp(path.join(rawDir, f)).metadata();
  const sz = (fs.statSync(path.join(rawDir, f)).size / 1024).toFixed(1);
  console.log('RAW:', f.padEnd(50), `${meta.width}x${meta.height}`.padEnd(12), meta.format, `${sz} KB`);
}

console.log('\n--- INDIAMART IMAGES (' + imFiles.length + ') ---');
for (const f of imFiles) {
  const meta = await sharp(path.join(imDir, f)).metadata();
  const sz = (fs.statSync(path.join(imDir, f)).size / 1024).toFixed(1);
  console.log('IM :', f.padEnd(50), `${meta.width}x${meta.height}`.padEnd(12), meta.format, `${sz} KB`);
}
