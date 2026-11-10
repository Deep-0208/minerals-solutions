import urllib.request

try:
    with urllib.request.urlopen('http://localhost:3000/') as resp:
        html = resp.read().decode('utf-8')
        print(f"Status: {resp.status}")
        print(f"Length: {len(html)}")
        print("Has Innovative Ideas:", "Innovative Ideas" in html)
        print("Has Built For Whats Next:", "Built For What" in html)
        print("Has Fast Performance:", "Fast Performance" in html)
        print("Has About MS:", "About MS" in html)
        print("Has Web Development:", "Web Development" in html)
        print("Has Featured Projects:", "Featured Projects" in html)
        print("Has Why Choose MS:", "Why Choose MS" in html)
        print("Has Final CTA:", "Ready to Bring Your Next Project to Life" in html)
        print("Has MS Logo:", "MS logo" in html)
except Exception as e:
    print("Error:", e)
