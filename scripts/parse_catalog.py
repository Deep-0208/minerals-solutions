from bs4 import BeautifulSoup
import json
import re

with open('Minerals Solutions SEO/products_and_services_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
print('Title:', soup.title.string if soup.title else '')

categories_found = []
for s in soup.find_all('script'):
    t = s.string or ''
    if 'COMPANY_DATA' in t:
        m = re.search(r'window\.__COMPANY_DATA__\s*=\s*(\{.*?\});', t, re.DOTALL)
        if m:
            data = json.loads(m.group(1))
            cats = data.get('categories', [])
            print(f"Total categories in __COMPANY_DATA__: {len(cats)}")
            for cat in cats:
                cat_name = cat.get('catName')
                cat_id = cat.get('catId')
                prods = cat.get('products', [])
                categories_found.append({
                    'name': cat_name,
                    'id': cat_id,
                    'count': len(prods),
                    'products': prods
                })
                print(f"\nCategory: {cat_name} ({len(prods)} products)")
                for p in prods:
                    print(f"  * {p.get('name')} | Price: {p.get('price')} | ID: {p.get('id')}")

with open('Minerals Solutions SEO/categories_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(categories_found, f, indent=2, ensure_ascii=False)

print(f"\nSaved {len(categories_found)} categories to categories_extracted.json")
