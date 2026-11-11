const routes = ['/contact/', '/request-quote/', '/about/', '/privacy-policy/', '/terms/'];

for (const r of routes) {
  const res = await fetch(`http://localhost:3000${r}`);
  const html = await res.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  const title = html.match(/<title>([^<]+)<\/title>/);
  const desc = html.match(/<meta name="description" content="([^"]+)"/);
  const schemas = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);

  console.log(`--- Route: ${r} ---`);
  console.log('Canonical:', canonical ? canonical[1] : 'NONE');
  console.log('Title:', title ? title[1] : 'NONE');
  console.log('Desc:', desc ? desc[1] : 'NONE');
  console.log('JSON-LD count:', schemas ? schemas.length : 0);
}
