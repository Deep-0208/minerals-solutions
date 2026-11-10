'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { company } from '@/data/company';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Rotary Dryers',
    href: '/rotary-dryer-manufacturer-ahmedabad/',
    children: [
      {
        label: 'Industrial Rotary Dryers (Hub)',
        href: '/rotary-dryer-manufacturer-ahmedabad/',
        desc: 'Custom thermal drying systems from 1 to 50 TPH',
      },
      {
        label: 'Sand Dryer with Hot Air Generator',
        href: '/sand-dryer-with-hot-air-generator/',
        desc: 'Direct & indirect coal, gas, and oil fired sand dryers',
      },
      {
        label: 'Saw Dust Rotary Dryer',
        href: '/saw-dust-dryer-machine/',
        desc: 'Biomass & wood sawdust rotary drying units',
      },
      {
        label: 'Rotary Calciner & High Temp Dryer',
        href: '/rotary-calciner-manufacturer/',
        desc: 'Thermal processing up to 1000°C for chemical ores',
      },
      {
        label: 'Rotary Drum Preheater & Cooler',
        href: '/rotary-drum-preheater-cooler/',
        desc: 'Energy-recovery counter-flow cooling drums',
      },
    ],
  },
  {
    label: 'Fertilizer Plants',
    href: '/fertilizer-granulation-plant-manufacturer/',
    children: [
      {
        label: 'Fertilizer Granulation Plant (Hub)',
        href: '/fertilizer-granulation-plant-manufacturer/',
        desc: 'Complete NPK & organic fertilizer granulation lines',
      },
      {
        label: 'Disc & Pan Granulator Machine',
        href: '/disc-pan-granulator-machine/',
        desc: 'Precision angle disc granulators for uniform pellets',
      },
      {
        label: 'Rotary Drum Granulator',
        href: '/rotary-drum-granulator-plant/',
        desc: 'Continuous high-tonnage wet granulation cylinders',
      },
      {
        label: 'Organic Fertilizer Granulation',
        href: '/organic-fertilizer-granulation-plant/',
        desc: 'Bio-compost and manure pelletizing turnkeys',
      },
    ],
  },
  {
    label: 'Sand Washing',
    href: '/sand-washing-plant-manufacturer-gujarat/',
    children: [
      {
        label: 'Sand Washing Plant (Hub)',
        href: '/sand-washing-plant-manufacturer-gujarat/',
        desc: 'River, silica & crushed stone washing plants up to 200 TPH',
      },
      {
        label: 'Hydrocyclone Sand Washing Plant',
        href: '/hydrocyclone-sand-washing-plant/',
        desc: 'Advanced desliming & fine sand recovery down to 75 microns',
      },
      {
        label: 'Bucket Wheel Sand Washer',
        href: '/bucket-wheel-sand-washer/',
        desc: 'High-efficiency dewatering wheel sand washers',
      },
      {
        label: 'Spiral Screw Sand Classifier',
        href: '/spiral-screw-sand-classifier/',
        desc: 'Heavy-duty continuous screw dewatering classifiers',
      },
    ],
  },
  {
    label: 'Conveyor Systems',
    href: '/industrial-conveyor-belt-system-manufacturer/',
    children: [
      {
        label: 'Conveyor Belt Systems (Hub)',
        href: '/industrial-conveyor-belt-system-manufacturer/',
        desc: 'Heavy-duty bulk material handling conveyors (400-1600mm)',
      },
      {
        label: 'Conveyor Head & Tail Pulleys',
        href: '/conveyor-pulleys-head-tail-snub/',
        desc: 'Diamond grooved rubber lagged drive & tail drums',
      },
      {
        label: 'Conveyor Idlers & Rollers',
        href: '/conveyor-rollers-idlers-manufacturer/',
        desc: 'Precision bearing troughing and return idler sets',
      },
    ],
  },
  {
    label: 'Company',
    href: '/about/',
    children: [
      {
        label: 'About Minerals Solutions',
        href: '/about/',
        desc: 'Our engineering heritage, leadership, and vision',
      },
      {
        label: 'Manufacturing Facility',
        href: '/manufacturing-facility/',
        desc: 'Heavy fabrication facility at Zak GIDC, Dahegam',
      },
      {
        label: 'Quality Standards & Testing',
        href: '/quality-standards/',
        desc: 'Rigorous NDT, dynamic balancing, and weld audits',
      },
      {
        label: 'Contact Factory',
        href: '/contact/',
        desc: 'Factory location, hotlines, and map directions',
      },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  return (
    <header className="w-full relative z-50">
      {/* 1. TOP UTILITY BAR (Industrial Trust & NAP Signals) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Verified Business Credentials */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DA020D]" />
              <strong className="text-white font-medium">GSTIN:</strong> {company.gstin}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <strong className="text-white font-medium">UDYAM:</strong> {company.udyamRegistration}
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Zak GIDC, Dahegam, Gandhinagar / Ahmedabad
            </span>
          </div>

          {/* Right: Direct Factory Contact */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#DA020D]" />
              <span>Plant Hotlines: {primaryPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${company.email}`}
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 transition-all duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Authentic Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isActive = pathname.startsWith(item.href);

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-[#DA020D] bg-red-50/60'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-[#DA020D]' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-80 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-2 space-y-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block p-2.5 rounded-md hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover/item:text-[#DA020D]">
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-quote/"
              className="inline-flex items-center gap-2 bg-[#DA020D] hover:bg-[#B3020B] text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#DA020D] focus:ring-offset-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/request-quote/"
              className="bg-[#DA020D] hover:bg-[#B3020B] text-white text-xs font-bold px-3 py-2 rounded-md shadow-sm"
            >
              RFQ
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#DA020D]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SLIDE-OVER DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <Logo showTagline={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-500 hover:text-slate-800"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label} className="border-b border-slate-100 pb-2">
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-bold text-slate-800 hover:text-[#DA020D]"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-3 space-y-1.5 mt-1 border-l-2 border-slate-200">
                        {item.children.slice(1).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block text-xs font-medium text-slate-600 hover:text-[#DA020D] py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  <strong className="text-slate-900">GSTIN:</strong> {company.gstin}
                </div>
                <div>
                  <strong className="text-slate-900">Plant:</strong> Zak GIDC, Dahegam
                </div>
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-md"
              >
                <Phone className="w-4 h-4 text-[#DA020D]" />
                <span>Call Factory: {primaryPhone}</span>
              </a>
              <Link
                href="/request-quote/"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#DA020D] text-white text-xs font-bold rounded-md"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

