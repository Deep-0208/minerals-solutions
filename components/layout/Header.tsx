'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Flame,
  Sprout,
  Waves,
  Boxes,
  FileText,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

interface SpokeItem {
  label: string;
  href: string;
  tag?: string;
}

interface PillarItem {
  name: string;
  shortName: string;
  href: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  spokes: SpokeItem[];
}

const productPillars: PillarItem[] = [
  {
    name: 'Industrial Rotary Dryers & Thermal Systems',
    shortName: 'Rotary Dryers',
    href: '/products/industrial-rotary-dryers/',
    badge: '500 kg - 50 TPH',
    icon: Flame,
    description: 'Continuous thermal drying systems for minerals, sand, and chemicals.',
    spokes: [
      {
        label: 'Industrial Rotary Dryers (Hub)',
        href: '/products/industrial-rotary-dryers/',
        tag: 'Pillar Hub',
      },
      {
        label: 'Double Pass Concentric Dryer',
        href: '/products/industrial-rotary-dryers/#configurations',
        tag: 'Space Saving',
      },
      {
        label: 'Sand Dryer with Hot Air Generator',
        href: '/products/industrial-rotary-dryers/#configurations',
      },
      {
        label: 'Sawdust & Biomass Drum Dryer',
        href: '/products/industrial-rotary-dryers/#configurations',
      },
      {
        label: 'Rotary Calciner & High Temp Kiln',
        href: '/products/industrial-rotary-dryers/#configurations',
      },
      {
        label: 'Coal, Gas & Biomass Hot Air Burners',
        href: '/products/industrial-rotary-dryers/#specifications',
      },
    ],
  },
  {
    name: 'Fertilizer Granulation & Pellet Plants',
    shortName: 'Fertilizer Plants',
    href: '/products/fertilizer-granulation-plants/',
    badge: '1 - 20 TPH',
    icon: Sprout,
    description: 'Turnkey NPK & bio-organic compost pelletizing lines.',
    spokes: [
      {
        label: 'Fertilizer Granulation Plants (Hub)',
        href: '/products/fertilizer-granulation-plants/',
        tag: 'Pillar Hub',
      },
      {
        label: 'Pan / Disc Granulator Machine',
        href: '/products/fertilizer-granulation-plants/#machinery',
        tag: '35°-55° Tilt',
      },
      {
        label: 'Rotary Drum Granulator Unit',
        href: '/products/fertilizer-granulation-plants/#machinery',
      },
      {
        label: 'Organic Bio-Compost Granulation Line',
        href: '/products/fertilizer-granulation-plants/#process',
      },
      {
        label: 'Rotary Fertilizer Coolers & Dryers',
        href: '/products/fertilizer-granulation-plants/#machinery',
      },
      {
        label: 'Anti-Caking Chemical Coating Drums',
        href: '/products/fertilizer-granulation-plants/#machinery',
      },
    ],
  },
  {
    name: 'Sand Washing & Mineral Recovery Plants',
    shortName: 'Sand Washing',
    href: '/products/sand-washing-plants/',
    badge: '30 - 200 TPH',
    icon: Waves,
    description: 'Desliming & fine sand recovery plants down to 75 microns.',
    spokes: [
      {
        label: 'Sand Washing Plants (Hub)',
        href: '/products/sand-washing-plants/',
        tag: 'Pillar Hub',
      },
      {
        label: 'Bucket Wheel Sand Washing Machine',
        href: '/products/sand-washing-plants/#machinery',
      },
      {
        label: 'Hydrocyclone Desliming Unit',
        href: '/products/sand-washing-plants/#machinery',
        tag: '75 Micron',
      },
      {
        label: 'Spiral Screw Sand Classifier',
        href: '/products/sand-washing-plants/#machinery',
      },
      {
        label: 'Quartz Stone & Aggregate Log Washer',
        href: '/products/sand-washing-plants/#machinery',
      },
      {
        label: 'Linear Dewatering Screen & Cyclones',
        href: '/products/sand-washing-plants/#specifications',
      },
    ],
  },
  {
    name: 'Industrial Conveyors & Mechanical Spares',
    shortName: 'Conveyor Systems',
    href: '/products/industrial-conveyors-spares/',
    badge: '400 - 1600 mm',
    icon: Boxes,
    description: 'Heavy bulk material transit conveyors and replacement spares.',
    spokes: [
      {
        label: 'Conveyor Systems & Spares (Hub)',
        href: '/products/industrial-conveyors-spares/',
        tag: 'Pillar Hub',
      },
      {
        label: 'Heavy Troughed Belt Conveyor System',
        href: '/products/industrial-conveyors-spares/#conveyors',
        tag: 'IS 11592',
      },
      {
        label: 'Rubber Lagged Head & Tail Pulleys',
        href: '/products/industrial-conveyors-spares/#conveyors',
      },
      {
        label: 'Conveyor Idlers & Troughing Rollers',
        href: '/products/industrial-conveyors-spares/#conveyors',
      },
      {
        label: 'Forged EN-8 / EN-9 Trunnion Rollers',
        href: '/products/industrial-conveyors-spares/#trunnions',
        tag: 'Induction Hardened',
      },
      {
        label: 'Machined Cast Iron Girth Gears & Pinions',
        href: '/products/industrial-conveyors-spares/#conveyors',
      },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const [activeMobilePillar, setActiveMobilePillar] = useState<string | null>(null);
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
    setProductsMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobilePillar = (name: string) => {
    setActiveMobilePillar(activeMobilePillar === name ? null : name);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E7EB] shadow-[0_4px_20px_rgba(17,17,17,0.06)] h-[76px]'
          : 'bg-white border-b border-[#E7E7EB]/70 h-[84px]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
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
            href="/about/"
            className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
              pathname.startsWith('/about') ? 'text-[#E10613]' : 'text-[#171717]'
            }`}
          >
            About Us
            {pathname.startsWith('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
            )}
          </Link>

          {/* 4-Pillar Mega Menu Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsMegaOpen(!productsMegaOpen)}
              onMouseEnter={() => setProductsMegaOpen(true)}
              className={`text-sm font-semibold transition-colors duration-180 py-1 flex items-center gap-1 hover:text-[#E10613] focus:outline-none ${
                pathname.startsWith('/products') ? 'text-[#E10613]' : 'text-[#171717]'
              }`}
              aria-expanded={productsMegaOpen}
              aria-haspopup="true"
            >
              <span>Products &amp; Plants</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsMegaOpen ? 'rotate-180 text-[#E10613]' : 'text-neutral-500'
                }`}
              />
              {pathname.startsWith('/products') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
              )}
            </button>

            {/* 4-Pillar Mega Panel */}
            {productsMegaOpen && (
              <div
                onMouseLeave={() => setProductsMegaOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[1100px] xl:w-[1200px] bg-white rounded-2xl border border-[#E7E7EB] shadow-[0_20px_50px_rgba(17,17,17,0.14)] p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {/* 4 Pillar Columns */}
                <div className="grid grid-cols-4 gap-6">
                  {productPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.name}
                        className="flex flex-col justify-between border-r border-neutral-100 last:border-r-0 pr-4 last:pr-0"
                      >
                        {/* Pillar Header */}
                        <div>
                          <Link
                            href={pillar.href}
                            onClick={() => setProductsMegaOpen(false)}
                            className="group block mb-3"
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center shrink-0 group-hover:bg-[#E10613] group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-700 font-semibold">
                                {pillar.badge}
                              </span>
                            </div>
                            <h3 className="text-sm font-extrabold text-[#111111] group-hover:text-[#E10613] leading-snug transition-colors">
                              {pillar.shortName}
                            </h3>
                            <p className="text-[11px] text-[#737373] mt-1 line-clamp-2 leading-relaxed">
                              {pillar.description}
                            </p>
                          </Link>

                          {/* Sub-Pillars / Spokes List */}
                          <div className="pt-2 border-t border-neutral-100 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                              Machinery &amp; Spares
                            </span>
                            {pillar.spokes.map((spoke) => (
                              <Link
                                key={spoke.label}
                                href={spoke.href}
                                onClick={() => setProductsMegaOpen(false)}
                                className="group flex items-start justify-between py-1 px-1.5 rounded-md hover:bg-[#F5F5F7] transition-colors"
                              >
                                <span className="text-xs text-neutral-700 group-hover:text-[#E10613] font-medium leading-snug">
                                  {spoke.label}
                                </span>
                                {spoke.tag && (
                                  <span className="shrink-0 ml-1 px-1.5 py-0.2 rounded text-[9px] font-mono bg-red-50 text-[#E10613] font-semibold">
                                    {spoke.tag}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* View Pillar Hub Link */}
                        <div className="pt-3 mt-3 border-t border-neutral-100">
                          <Link
                            href={pillar.href}
                            onClick={() => setProductsMegaOpen(false)}
                            className="text-[11px] font-bold text-[#E10613] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Explore {pillar.shortName} Hub</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar */}
                <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between px-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <span className="font-bold text-[#111111]">Turnkey Plant Projects:</span>
                    <span>Complete engineering, fabrication, and on-site commissioning from Zak GIDC.</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href="/products/"
                      onClick={() => setProductsMegaOpen(false)}
                      className="font-bold text-neutral-700 hover:text-[#111111] hover:underline"
                    >
                      View All Machinery Catalog
                    </Link>
                    <Link
                      href="/request-quote/"
                      onClick={() => setProductsMegaOpen(false)}
                      className="inline-flex items-center gap-1 font-bold text-[#E10613] hover:underline"
                    >
                      <span>Request Custom Machinery Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/manufacturing/"
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
            href="/industries/"
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
            href="/contact/"
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

          <Button href="/request-quote/" variant="primary" size="md">
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

          <Button href="/request-quote/" variant="primary" size="sm">
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
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/about/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>

              {/* Mobile 4-Pillars Accordion */}
              <div className="py-2 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block px-1">
                  4 Core Machinery Pillars &amp; Spokes
                </span>
                {productPillars.map((pillar) => {
                  const isOpen = activeMobilePillar === pillar.name;
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.name} className="border border-neutral-200 rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleMobilePillar(pillar.name)}
                        className="w-full p-3 bg-[#F5F5F7] text-left text-xs font-bold text-[#111111] flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#E10613]" />
                          <span>{pillar.shortName}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-500 transition-transform ${
                            isOpen ? 'rotate-180 text-[#E10613]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-3 bg-white space-y-2 border-t border-neutral-100">
                          <Link
                            href={pillar.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-bold text-[#E10613] hover:underline pb-1 border-b border-neutral-100"
                          >
                            Explore {pillar.shortName} Hub ({pillar.badge})
                          </Link>
                          <div className="space-y-1.5 pt-1 pl-1">
                            {pillar.spokes.map((spoke) => (
                              <Link
                                key={spoke.label}
                                href={spoke.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs text-neutral-600 hover:text-[#E10613] py-0.5"
                              >
                                {spoke.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  href="/products/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-xs font-bold text-[#E10613] hover:underline px-1"
                >
                  View All Machinery Catalog
                </Link>
              </div>

              <Link
                href="/manufacturing/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Manufacturing Facility</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/industries/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Industries Served</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>

              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#171717] hover:text-[#E10613] flex items-center justify-between"
              >
                <span>Contact Works</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </nav>

            <div className="pt-2 space-y-2">
              <Button
                href="/request-quote/"
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
