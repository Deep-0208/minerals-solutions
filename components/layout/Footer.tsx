import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { company } from '@/data/company';

export function Footer() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        MS Footer Navigation
      </h2>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Innovative ideas, powerful engineering solutions. We build scalable technology, industrial
              systems, and digital experiences that help businesses move forward with confidence.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-neutral-400">
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
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About MS
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Web &amp; Digital Platforms
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Mobile Application Systems
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  UI/UX Architecture
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Turnkey Plant Engineering
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Thermal Drying Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Works (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E10613] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-neutral-300 text-xs">
                  {company.address.streetAddress},<br />
                  {company.address.locality},<br />
                  {company.address.regionName} - {company.address.postalCode}, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E10613] shrink-0" />
                <a
                  href={`tel:${cleanPhone}`}
                  className="text-white hover:text-[#E10613] transition-colors text-xs font-semibold"
                >
                  {primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-neutral-300 hover:text-white transition-colors text-xs"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} MS (Minerals Solutions). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap/" className="hover:text-neutral-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
