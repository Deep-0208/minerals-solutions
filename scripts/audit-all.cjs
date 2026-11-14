const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(full);
    }
  }
  return fileList;
}

const siteUrl = 'https://mineralssolution.in';
const pages = walk(path.join(__dirname, '..', 'app', '(site)'));
console.log(`Found ${pages.length} pages.\n`);

const issues = [];
const pageData = [];

pages.forEach((p) => {
  const content = fs.readFileSync(p, 'utf8');
  const rel = path.relative(path.join(__dirname, '..'), p).replace(/\\/g, '/');

  // Check canonical
  const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  let canonical = null;
  if (!canonicalMatch) {
    issues.push(`${rel}: Missing canonical in metadata`);
  } else {
    canonical = canonicalMatch[1].replace('${company.siteUrl}', siteUrl);
    if (!canonical.startsWith('https://mineralssolution.in/') && !canonical.startsWith('/')) {
      issues.push(`${rel}: Canonical is invalid: ${canonical}`);
    }
    // Strict 100/100 check: must be fully qualified absolute URL
    if (canonical.startsWith('/') && canonical !== '/') {
      issues.push(`${rel}: Relative canonical instead of absolute: "${canonical}" (should be ${siteUrl}${canonical})`);
    } else if (canonical === '/') {
      issues.push(`${rel}: Root canonical is "/" (should be ${siteUrl}/)`);
    }
    if (!canonical.endsWith('/')) {
      issues.push(`${rel}: Canonical does not end with / (was: ${canonical})`);
    }
  }

  // Check title
  const hasAbsoluteTitle = content.includes('title: {') && content.includes('absolute:');
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/) || content.match(/absolute:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : null;
  if (!title) {
    issues.push(`${rel}: Missing title in metadata`);
  }

  // Check description
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const desc = descMatch ? descMatch[1] : null;
  if (!desc) {
    issues.push(`${rel}: Missing description in metadata`);
  }

  // Check BreadcrumbList schema on product pages
  const hasBreadcrumb = content.includes('BreadcrumbList');
  if (rel.includes('/products/') && !hasBreadcrumb) {
    issues.push(`${rel}: Products page missing BreadcrumbList schema`);
  }

  // Check JsonLd usage
  const hasJsonLd = content.includes('<JsonLd') || content.includes('JsonLd data=') || content.includes('application/ld+json');
  if (!hasJsonLd) {
    issues.push(`${rel}: Missing <JsonLd> component`);
  }

  // Check links trailing slash
  const linkMatches = content.matchAll(/href=['"](\/[^#'"?]+)['"]/g);
  for (const m of linkMatches) {
    const href = m[1];
    if (href.startsWith('/') && !href.endsWith('/') && !href.includes('.') && !href.startsWith('/#')) {
      issues.push(`${rel}: Link href without trailing slash: "${href}"`);
    }
  }
});

console.log(`Issues detected (${issues.length}):`);
issues.forEach((i) => console.log(' - ' + i));