import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Supply & Equipment Quotation | Minerals Solutions',
  },
  description:
    'Review commercial terms, quotation validity, and warranty policies for machinery built by Minerals Solutions at our Zak GIDC, Dahegam works in Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/terms/`,
  },
  openGraph: {
    title: 'Terms of Supply & Equipment Quotation | Minerals Solutions',
    description:
      'Commercial terms, quotation validity, and warranty policies for machinery built by Minerals Solutions in Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/terms/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Supply & Equipment Quotation | Minerals Solutions',
    description:
      'Commercial terms and quotation conditions for Minerals Solutions industrial machinery fabrication.',
    images: [defaultTwitterImage],
  },
};

export default function TermsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${company.siteUrl}/terms/#webpage`,
    url: `${company.siteUrl}/terms/`,
    name: 'Terms of Supply & Equipment Quotation | Minerals Solutions',
    description:
      'General commercial and engineering terms governing industrial equipment quotation and fabrication by Minerals Solutions.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${company.siteUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Terms of Supply',
          item: `${company.siteUrl}/terms/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={termsSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Terms of Supply</span>
          </nav>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-12 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-8">
            <div className="space-y-3 pb-6 border-b border-[#E7E7EB]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100">
                <FileText className="w-3.5 h-3.5" />
                <span>Commercial &amp; Engineering Terms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Terms of Supply &amp; Machinery Quotation
              </h1>
              <p className="text-xs text-neutral-500">
                Last Updated: November 2026 • Minerals Solutions (Zak GIDC, Dahegam, Gujarat)
              </p>
            </div>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">1. General Scope</h2>
              <p>
                These Terms of Supply govern the quotation, engineering design, fabrication, trial testing,
                and supply of industrial equipment (including rotary drum dryers, sand washing plants, fertilizer
                granulators, conveyor systems, and mechanical spares) manufactured by Minerals Solutions at its Zak GIDC works.
              </p>
              <p className="text-xs text-neutral-500">
                Technical parameters, capacities, and drawings published on this website are indicative engineering
                guidelines. Final manufacturing specifications are defined in mutually signed Purchase Orders (PO)
                and approved General Arrangement (GA) drawings.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">2. Quotation Validity &amp; Price Basis</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Quotation Validity:</strong> Unless explicitly noted otherwise, formal engineering quotations are valid for 30 calendar days due to raw steel plate and alloy market price fluctuations.</li>
                <li><strong>Price Exclusions:</strong> Unless itemized in the commercial contract, quotes are Ex-Works (Zak GIDC, Dahegam) and exclude GST (chargeable as applicable), freight, transit insurance, site civil foundations, and heavy crane unloading.</li>
              </ul>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">3. Pre-Dispatch Inspection &amp; Factory Testing</h2>
              <p>
                Clients and their designated third-party inspection (TPI) agencies are entitled to inspect fabricated
                machinery, review material test certificates (MTC), verify weld ultrasonic reports, and witness no-load
                shop trial runs at our Zak GIDC workshop prior to logistics dispatch.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">4. Warranty &amp; Performance Guarantees</h2>
              <p>
                Minerals Solutions warrants all manufactured equipment against defective materials and faulty
                workmanship for a standard period of 12 months from the date of dispatch (or 1,500 operating hours,
                whichever occurs earlier).
              </p>
              <p className="text-xs text-neutral-500">
                Warranty excludes normal operational wear components (such as conveyor belt rubber, scraper tips, screen meshes,
                and drive belts) or damage arising from improper lubrication, unapproved electrical alterations, or operating
                beyond specified design capacities.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed pt-4 border-t border-[#E7E7EB]">
              <h2 className="text-lg font-bold text-[#111111]">5. Jurisdiction &amp; Governing Law</h2>
              <p>
                All commercial quotations, sales contracts, and agreements are executed in the State of Gujarat, India,
                and shall be subject to the exclusive legal jurisdiction of the competent courts in Dahegam / Gandhinagar / Ahmedabad.
              </p>
              <div className="pt-2 text-xs text-neutral-600">
                For commercial contract clarifications, reach our works desk at{' '}
                <a href={`mailto:${company.email}`} className="text-[#E10613] font-bold">{company.email}</a> or call{' '}
                <a href={`tel:${company.telephones[0].replace(/\s+/g, '')}`} className="text-[#E10613] font-bold">{company.telephones[0]}</a>.
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] text-xs space-y-1 text-neutral-800 mt-3">
                <p className="font-bold text-[#111111]">{company.legalName}</p>
                <p>Proprietor: {company.proprietor}</p>
                <p>Works: {company.address.streetAddress}, {company.address.locality}, Gujarat - {company.address.postalCode}, India.</p>
                <p>GSTIN: <span className="font-mono font-semibold">{company.gstin}</span></p>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

