import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { company } from '@/data/company';

export function Footer() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';
  const cleanSecondary = secondaryPhone.replace(/\s+/g, '');

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Minerals Solutions Footer Navigation
      </h2>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Verification */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Minerals Solutions is a premier heavy industrial manufacturing firm in Gujarat,
              specializing in custom thermal rotary dryers, turnkey fertilizer granulation plants,
              high-recovery sand washing setups, and heavy bulk conveyor systems.
            </p>

            {/* Legal Badges */}
            <div className="pt-2 space-y-2 text-xs border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#DA020D] shrink-0" />
                <span>
                  <strong>GSTIN:</strong> {company.gstin}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>UDYAM:</strong> {company.udyamRegistration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-amber-400 font-bold">★ 4.8 / 5.0</span>
                <span>Verified Seller on IndiaMART</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Machinery Lines */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#DA020D] pl-2.5">
              Industrial Equipment
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/rotary-dryer-manufacturer-ahmedabad/"
                  className="hover:text-white hover:underline transition-colors flex items-center justify-between group"
                >
                  <span>Industrial Rotary Dryers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#DA020D] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sand-dryer-with-hot-air-generator/"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Sand Dryer with Hot Air Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/fertilizer-granulation-plant-manufacturer/"
                  className="hover:text-white hover:underline transition-colors flex items-center justify-between group"
                >
                  <span>Fertilizer Granulation Plants</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#DA020D] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/disc-pan-granulator-machine/"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Disc &amp; Pan Granulators
                </Link>
              </li>
              <li>
                <Link
                  href="/sand-washing-plant-manufacturer-gujarat/"
                  className="hover:text-white hover:underline transition-colors flex items-center justify-between group"
                >
                  <span>Sand Washing Plants</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#DA020D] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/hydrocyclone-sand-washing-plant/"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Hydrocyclone Dewatering Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/industrial-conveyor-belt-system-manufacturer/"
                  className="hover:text-white hover:underline transition-colors flex items-center justify-between group"
                >
                  <span>Bulk Material Conveyor Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#DA020D] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Plant Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#DA020D] pl-2.5">
              Company &amp; Facility
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About Minerals Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturing-facility/"
                  className="hover:text-white transition-colors"
                >
                  Zak GIDC Fabrication Workshop
                </Link>
              </li>
              <li>
                <Link href="/quality-standards/" className="hover:text-white transition-colors">
                  Quality Standards &amp; NDT Testing
                </Link>
              </li>
              <li>
                <Link href="/request-quote/" className="hover:text-white transition-colors">
                  Request Equipment Quotation (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact Factory &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/sitemap/" className="hover:text-white transition-colors">
                  HTML Site Index / Sitemap
                </Link>
              </li>
              <li>
                <a
                  href="https://www.indiamart.com/mineralssolutions-ahmedabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs"
                >
                  <span>IndiaMART Verified Company Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Plant & Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#DA020D] pl-2.5">
              Works &amp; Factory Office
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DA020D] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-slate-300">
                  {company.address.streetAddress},<br />
                  {company.address.locality},<br />
                  {company.address.regionName} - {company.address.postalCode}, India
                </address>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#DA020D] shrink-0 mt-1" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="block text-slate-200 hover:text-white font-medium"
                  >
                    {primaryPhone}
                  </a>
                  <a
                    href={`tel:${cleanSecondary}`}
                    className="block text-slate-300 hover:text-white"
                  >
                    {secondaryPhone}
                  </a>
                  <span className="block text-xs text-slate-500">
                    IndiaMART PNS: {company.indiamartPns}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon - Sat: 09:00 AM - 07:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Minerals Solutions. All rights reserved. Heavy Industrial
            Machinery &amp; Turnkey Mineral Processing Plants.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap/" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

