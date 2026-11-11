async function check() {
  const res = await fetch('http://localhost:3000/products/industrial-rotary-dryers/chemical-powder-dryer/');
  const html = await res.text();

  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const schemas = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];

  console.log('--- AUDIT RESULTS FOR CHEMICAL POWDER DRYER ---');
  console.log('HTTP Status:', res.status);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');
  console.log('Title Length:', titleMatch ? titleMatch[1].length : 0);
  console.log('Description:', descMatch ? descMatch[1] : 'NONE');
  console.log('Description Length:', descMatch ? descMatch[1].length : 0);
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE');
  console.log('H2 Count:', h2Matches.length);
  h2Matches.forEach((h, i) => console.log(`  H2[${i+1}]: ${h}`));
  console.log('Total JSON-LD Schemas:', schemas.length);
  schemas.forEach((s, i) => {
    try {
      const parsed = JSON.parse(s[1]);
      console.log(`  Schema[${i+1}] type:`, parsed['@type']);
    } catch (e) {
      console.log(`  Schema[${i+1}] parse error:`, e.message);
    }
  });

  const cleanText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  console.log('Rendered Word Count:', words.length);
}

check().catch(console.error);
