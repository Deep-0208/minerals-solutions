'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Flame,
  Sprout,
  Waves,
  Boxes,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

const productCategories = [
  {
    name: 'Industrial Rotary Dryers & Thermal Systems',
    href: '/products/industrial-rotary-dryers',
    description: 'Single, double, and triple pass drum dryers, calciners, and hot air generators.',
    icon: Flame,
    badge: '500 kg/hr - 50 TPH',
  },
  {
    name: 'Fertilizer Granulation & Pellet Plants',
    href: '/products/fertilizer-granulation-plants',
    description: 'Turnkey NPK & organic compost granulation lines, pan and drum granulators.',
    icon: Sprout,
    badge: '1 - 20 TPH',
  },
  {
    name: 'Sand Washing & Mineral Recovery Plants',
    href: '/products/sand-washing-plants',
    description: 'Bucket wheel sand washers, hydrocyclone deslimers, and spiral classifiers.',
    icon: Waves,
    badge: '30 - 200 TPH',
  },
  {
    name: 'Industrial Conveyors & Mechanical Spares',
    href: '/products/industrial-conveyors-spares',
    description: 'Heavy trough belt conveyors, lagged pulleys, idlers, and forged trunnions.',
    icon: Boxes,
    badge: '400 - 1600 mm',
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E7EB] shadow-[0_4px_20px_rgba(17,17,17,0.06)] h-[76px]'
          : 'bg-white border-b border-[#E7E7EB]/70 h-[84px]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname === '/' ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            Home
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname.startsWith('/about') ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            About Us
            {pathname.startsWith('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>

          {/* Products Mega Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              className={`text-sm font-semibold transition-colors duration-180 py-1 flex items-center gap-1 hover:text-[#E10613] focus:outline-none ${
                pathname.startsWith('/products') ? 'text-[#E10613]' : 'text-[#171717]'
              }`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsOpen ? 'rotate-180 text-[#E10613]' : 'text-neutral-500'
                }`}
              />
              {pathname.startsWith('/products') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
              )}
            </button>

            {productsOpen && (
              <div
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-white rounded-2xl border border-[#E7E7EB] shadow-[0_12px_36px_rgba(17,17,17,0.12)] p-4 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {productCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setProductsOpen(false)}
                      className="group p-3 rounded-xl border border-transparent hover:border-[#E7E7EB] hover:bg-[#F5F5F7] transition-all"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center shrink-0 group-hover:bg-[#E10613] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-[#111111] group-hover:text-[#E10613] leading-snug">
                          {cat.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#737373] line-clamp-2 pl-10">
                        {cat.description}
                      </p>
                      <div className="pl-10 mt-1">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-600 font-medium">
                          {cat.badge}
                        </span>
                      </div>
                    </Link>
                  );
                })}

                <div className="col-span-2 pt-2 border-t border-neutral-100 flex items-center justify-between px-2 text-xs">
                  <span className="text-neutral-500 font-medium">
                    Looking for complete turnkey plant design?
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="font-bold text-[#E10613] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Machinery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/manufacturing"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname.startsWith('/manufacturing') ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            Manufacturing
            {pathname.startsWith('/manufacturing') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>

          <Link
            href="/industries"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname.startsWith('/industries') ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            Industries
            {pathname.startsWith('/industries') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname.startsWith('/contact') ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            Contact
            {pathname.startsWith('/contact') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Desktop Hotline & Primary CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${cleanPhone}`}
            className="flex items-center gap-2 text-xs font-semibold text-[#171717] hover:text-[#E10613] transition-colors"
            title="Call Engineering Desk"
          >
            <div className="w-8 h-8 rounded-full bg-red-50 text-[#E10613] flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                Works Desk
              </span>
              <span className="font-bold text-sm tracking-tight">{primaryPhone}</span>
            </div>
          </a>

          <Button href="/request-quote" variant="primary" size="md">
            Request a Quote
          </Button>
        </div>

        {/* Mobile Actions: Phone & Hamburger Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          <a
            href={`tel:${cleanPhone}`}
            className="p-2 rounded-lg bg-red-50 text-[#E10613] hover:bg-red-100 transition-colors"
            aria-label={`Call Minerals Solutions at ${primaryPhone}`}
          >
            <Phone className="w-5 h-5" />
          </a>

          <Button href="/request-quote" variant="primary" size="sm">
            Quote
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#171717] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#E10613]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-b border-[#E7E7EB] p-5 max-h-[calc(100vh-76px)] overflow-y-auto space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-1 divide-y divide-neutral-100">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </Link>

              {/* Mobile Products Accordion */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full py-2 text-sm font-semibold text-[#171717] flex items-center justify-between focus:outline-none"
                >
                  <span>Machinery Products</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform ${
                      mobileProductsOpen ? 'rotate-180 text-[#E10613]' : ''
                    }`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-[#E10613]">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs font-medium text-neutral-700 hover:text-[#E10613]"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xs font-bold text-[#E10613] hover:underline"
                    >
                      View All Machinery Catalog
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Manufacturing Facility</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Industries Served</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Contact Works</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </nav>

            <div className="pt-2 space-y-2">
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Quote
              </Button>
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-neutral-300 text-xs font-semibold text-[#171717] hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10613]" />
                <span>Call Works: {primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
