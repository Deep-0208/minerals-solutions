import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowUpRight,
  ExternalLink,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { company } from '@/data/company';

export function Footer() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';
  const cleanSecondaryPhone = secondaryPhone.replace(/\s+/g, '');

  const productLinks = [
    {
      label: 'Industrial Rotary Dryers',
      href: '/products/industrial-rotary-dryers/',
    },
    {
      label: 'Fertilizer Granulation Plants',
      href: '/products/fertilizer-granulation-plants/',
    },
    {
      label: 'Sand Washing & Recovery Plants',
      href: '/products/sand-washing-plants/',
    },
    {
      label: 'Industrial Conveyor Systems',
      href: '/products/industrial-conveyors-spares/',
    },
    {
      label: 'View All Machinery',
      href: '/products/',
    },
  ];

  const quickLinks = [
    { label: 'About Minerals Solutions', href: '/about/' },
    { label: 'Manufacturing Facility', href: '/manufacturing/' },
    { label: 'Industries Served', href: '/industries/' },
    { label: 'Request a Quote', href: '/request-quote/' },
    { label: 'Contact Works', href: '/contact/' },
  ];

  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Minerals Solutions Footer Navigation
      </h2>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credibility (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Minerals Solutions is a Gujarat-based heavy machinery manufacturer specializing in
              industrial rotary drum dryers, fertilizer granulation plants, sand washing systems,
              and bulk material handling equipment engineered for dependable operation.
            </p>

            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E10613] shrink-0" />
                <span>
                  <strong className="text-white">GSTIN:</strong> {company.gstin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong className="text-white">UDYAM:</strong> {company.udyamRegistration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-white">IndiaMART Trust:</strong> 4.8 / 5.0 Star Verified Seller
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Machinery Divisions
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Information (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Works Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Manufacturing Works
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E10613] shrink-0 mt-1" />
                <div className="space-y-1">
                  <address className="not-italic text-xs leading-relaxed text-neutral-300">
                    Plot No. 10, Shed No. 3, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam,
                    District Gandhinagar - 382330, Gujarat, India.
                  </address>
                  <a
                    href={`https://maps.google.com/?q=${company.geo.lat},${company.geo.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#E10613] hover:underline font-semibold"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View Works on Google Maps (Zak GIDC)</span>
                  </a>
                </div>
              </div>

              <div className="text-xs text-neutral-400 pl-6">
                <span className="text-neutral-500 font-medium">Facility Hours:</span> Mon–Sat: 09:00 – 19:00 IST
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E10613] shrink-0" />
                <div className="text-xs space-x-2">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="hover:text-white transition-colors font-mono font-medium"
                  >
                    {primaryPhone}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${cleanSecondaryPhone}`}
                    className="hover:text-white transition-colors font-mono font-medium"
                  >
                    {secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E10613] shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-xs hover:text-white transition-colors font-mono"
                >
                  {company.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.indiamart.com/mineralssolutions-ahmedabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <span>View IndiaMART Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E10613]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Minerals Solutions. All rights reserved. Registered MSME Enterprise in Gujarat, India.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <Link href="/request-quote" className="text-[#E10613] hover:underline font-semibold">
              Get Machine Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
