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
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

interface SpokeItem {
  label: string;
  href: string;
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

// Exactly matches official Minerals Solutions manufacturing lines with 4 dedicated spoke pages per division
const productPillars: PillarItem[] = [
  {
    name: 'Industrial Rotary Dryers & Thermal Systems',
    shortName: 'Rotary Dryers',
    href: '/products/industrial-rotary-dryers/',
    badge: '500 kg - 50 TPH',
    icon: Flame,
    description: 'High-efficiency single, double, and triple-pass continuous industrial drying drums.',
    spokes: [
      {
        label: 'Triple Pass Drum Dryer',
        href: '/products/industrial-rotary-dryers/triple-pass-dryer/',
      },
      {
        label: 'Industrial Rotary Sand Dryer',
        href: '/products/industrial-rotary-dryers/sand-dryer/',
      },
      {
        label: 'Stainless Chemical Powder Dryer',
        href: '/products/industrial-rotary-dryers/chemical-powder-dryer/',
      },
      {
        label: 'Biomass & Sawdust Rotary Dryer',
        href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
      },
    ],
  },
  {
    name: 'Sand Washing & Mineral Processing Plants',
    shortName: 'Sand Washing',
    href: '/products/sand-washing-plants/',
    badge: '30 - 200 TPH',
    icon: Waves,
    description: 'Washing, desliming, attrition scrubbing, and fine sand recovery down to 75 microns.',
    spokes: [
      {
        label: 'Silica Sand Washing Plant',
        href: '/products/sand-washing-plants/silica-sand-washing-plant/',
      },
      {
        label: 'Bucket Wheel Sand Washer',
        href: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
      },
      {
        label: 'Hydrocyclone Sand Separator',
        href: '/products/sand-washing-plants/hydrocyclone-sand-separator/',
      },
      {
        label: 'Heavy Duty Mineral Log Washer',
        href: '/products/sand-washing-plants/mineral-log-washer/',
      },
    ],
  },
  {
    name: 'Fertilizer Granulation & Pellet Plants',
    shortName: 'Fertilizers Plant',
    href: '/products/fertilizer-granulation-plants/',
    badge: '1 - 20 TPH',
    icon: Sprout,
    description: 'Turnkey chemical NPK, DAP, compost, and bio-organic fertilizer pelletizing systems.',
    spokes: [
      {
        label: 'Industrial Pan Disc Granulator',
        href: '/products/fertilizer-granulation-plants/disc-granulator/',
      },
      {
        label: 'Double Roller Compactor',
        href: '/products/fertilizer-granulation-plants/double-roller-granulator/',
      },
      {
        label: 'Rotary Drum Granulator',
        href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
      },
      {
        label: 'Fertilizer Cooling & Coating Drum',
        href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
      },
    ],
  },
  {
    name: 'Industrial Conveyors & Heavy Mechanical Spares',
    shortName: 'Conveyors & Spares',
    href: '/products/industrial-conveyors-spares/',
    badge: 'IS 11592 / CEMA',
    icon: Boxes,
    description: 'Bulk material handling conveyors, bucket elevators, trunnion rollers, and spares.',
    spokes: [
      {
        label: 'Heavy Duty Bucket Elevators',
        href: '/products/industrial-conveyors-spares/bucket-elevators/',
      },
      {
        label: 'Industrial Screw Conveyors',
        href: '/products/industrial-conveyors-spares/screw-conveyors/',
      },
      {
        label: 'Forged Trunnion Support Rollers',
        href: '/products/industrial-conveyors-spares/forged-trunnion-rollers/',
      },
      {
        label: 'Troughed Belt Conveyor Systems',
        href: '/products/industrial-conveyors-spares/belt-conveyors/',
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
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E7EB] shadow-[0_4px_20px_rgba(17,17,17,0.06)] h-[74px]'
          : 'bg-white border-b border-[#E7E7EB]/70 h-[80px]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-full flex items-center justify-between relative">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
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
          <div ref={dropdownRef}>
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
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsMegaOpen ? 'rotate-180 text-[#E10613]' : 'text-neutral-500'
                }`}
              />
              {pathname.startsWith('/products') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
              )}
            </button>

            {/* 4-Pillar Mega Panel with Centered Alignment & Zero Horizontal Overflow (Always in DOM for SEO Discovery) */}
            <div
              onMouseLeave={() => setProductsMegaOpen(false)}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[940px] xl:w-[980px] max-w-[calc(100vw-32px)] bg-white rounded-2xl border border-[#E7E7EB] shadow-[0_24px_60px_-12px_rgba(17,17,17,0.16)] p-5 z-50 transition-all duration-150 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
                productsMegaOpen
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 -translate-y-1 invisible pointer-events-none'
              }`}
            >
                {/* 4 Pillar Cards in a Balanced Grid */}
                <div className="grid grid-cols-4 gap-3.5">
                  {productPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.name}
                        className="bg-[#FAFAFA] hover:bg-white rounded-xl p-3.5 border border-[#EBEBEF] hover:border-red-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                      >
                        {/* Header Area */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center shrink-0 border border-red-100">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white text-neutral-600 border border-neutral-200/80">
                              {pillar.badge}
                            </span>
                          </div>

                          <Link
                            href={pillar.href}
                            onClick={() => setProductsMegaOpen(false)}
                            className="block group"
                          >
                            <h3 className="text-[13px] font-bold text-[#111111] group-hover:text-[#E10613] leading-snug transition-colors">
                              {pillar.shortName}
                            </h3>
                            <p className="text-[11px] text-[#737373] mt-0.5 line-clamp-2 leading-relaxed">
                              {pillar.description}
                            </p>
                          </Link>

                          {/* 4 Dedicated Spoke Pages */}
                          <div className="pt-2.5 mt-2.5 border-t border-neutral-200/60 space-y-0.5">
                            {pillar.spokes.map((spoke) => {
                              const isActive = pathname === spoke.href;
                              return (
                                <Link
                                  key={spoke.label}
                                  href={spoke.href}
                                  onClick={() => setProductsMegaOpen(false)}
                                  className={`group flex items-center justify-between py-1.5 px-2 rounded-md transition-all ${
                                    isActive
                                      ? 'bg-red-50 text-[#E10613] font-semibold shadow-xs'
                                      : 'hover:bg-white hover:shadow-xs text-neutral-700'
                                  }`}
                                >
                                  <span
                                    className={`text-xs leading-tight truncate ${
                                      isActive
                                        ? 'text-[#E10613] font-semibold'
                                        : 'group-hover:text-[#E10613] font-medium'
                                    }`}
                                  >
                                    {spoke.label}
                                  </span>
                                  <ChevronRight
                                    className={`w-3 h-3 shrink-0 ml-1 transition-colors ${
                                      isActive
                                        ? 'text-[#E10613]'
                                        : 'text-neutral-300 group-hover:text-[#E10613]'
                                    }`}
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Pinned Bottom CTA */}
                        <div className="pt-2.5 mt-3 border-t border-neutral-200/60">
                          <Link
                            href={pillar.href}
                            onClick={() => setProductsMegaOpen(false)}
                            className="text-[11px] font-bold text-[#E10613] hover:text-[#BC0711] inline-flex items-center gap-1 group"
                          >
                            <span>Explore {pillar.shortName}</span>
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sleek Integrated Bottom Bar */}
                <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs">
                  <div className="flex items-center gap-2 text-neutral-600 truncate">
                    <span className="font-bold text-[#111111] shrink-0 font-mono text-[11px] uppercase tracking-wider text-[#E10613]">16 Spoke Equipment Lines:</span>
                    <span className="text-neutral-500 truncate text-[11px]">
                      Single / Multi-Pass Dryers • Wet Classifiers • Fertilizer Granulators • IS 11592 Conveyors
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href="/products/"
                      onClick={() => setProductsMegaOpen(false)}
                      className="font-bold text-neutral-700 hover:text-[#111111] hover:underline text-xs"
                    >
                      All 16 Equipment Models
                    </Link>
                    <Link
                      href="/request-quote/"
                      onClick={() => setProductsMegaOpen(false)}
                      className="inline-flex items-center gap-1 font-bold text-[#E10613] hover:underline text-xs"
                    >
                      <span>Instant Quotation</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
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
        <div className="lg:hidden fixed inset-0 top-[74px] z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-b border-[#E7E7EB] p-5 max-h-[calc(100vh-74px)] overflow-y-auto space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-1 divide-y divide-neutral-100">
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
                  Machinery Divisions
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
                        <div className="p-3 bg-white space-y-1.5 border-t border-neutral-100">
                          <Link
                            href={pillar.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-bold text-[#E10613] hover:underline pb-1 border-b border-neutral-100"
                          >
                            Explore {pillar.shortName} ({pillar.badge})
                          </Link>
                          <div className="space-y-1 pt-1 pl-1">
                            {pillar.spokes.map((spoke) => {
                              const isActive = pathname === spoke.href;
                              return (
                                <Link
                                  key={spoke.label}
                                  href={spoke.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block text-xs py-1.5 px-2 rounded transition-colors ${
                                    isActive
                                      ? 'text-[#E10613] font-bold bg-red-50'
                                      : 'text-neutral-600 hover:text-[#E10613]'
                                  }`}
                                >
                                  {spoke.label}
                                </Link>
                              );
                            })}
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
