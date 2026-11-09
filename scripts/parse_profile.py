from bs4 import BeautifulSoup
import re

with open('Minerals Solutions SEO/profile_raw.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("=== PARSING PROFILE HTML ===")

# Look for all sections, headings, dl, dt, dd, tables
for section in soup.find_all(['section', 'div', 'table']):
    sec_text = section.get_text(separator=' | ', strip=True)
    if any(k in sec_text for k in ['Nature of Business', 'Year of Establishment', 'Legal Status', 'GST', 'Factsheet', 'Company Factsheet', 'CEO', 'Turnover']):
        if len(sec_text) < 1500:
            print("--- Section Found ---")
            print(sec_text)
            print()

# Also let's extract all images from photos.html or profile_raw.html
print("\n=== IMAGES IN PROFILE ===")
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-original')
    alt = img.get('alt')
    if src and ('imimg.com' in src):
        print(f"Alt: {alt} -> {src}")
