import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy & Data Protection | Minerals Solutions',
  },
  description:
    'Review Minerals Solutions privacy policy governing B2B machinery inquiries, RFQ data, and client confidentiality at our Zak GIDC, Dahegam works, Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/privacy-policy/`,
  },
  openGraph: {
    title: 'Privacy Policy & Data Protection | Minerals Solutions',
    description:
      'Minerals Solutions privacy policy governing B2B machinery inquiries, RFQ process parameters, and client confidentiality in Gujarat.',
    url: `${company.siteUrl}/privacy-policy/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Protection | Minerals Solutions',
    description:
      'Privacy and data handling policies for client machinery RFQs and engineering inquiries.',
    images: [defaultTwitterImage],
  },
};

export default function PrivacyPolicyPage() {
  const policySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${company.siteUrl}/privacy-policy/#webpage`,
    url: `${company.siteUrl}/privacy-policy/`,
    name: 'Privacy Policy | Minerals Solutions',
    description:
      'Information on data collection and privacy practices for Minerals Solutions engineering website.',
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
          name: 'Privacy Policy',
          item: `${company.siteUrl}/privacy-policy/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={policySchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Privacy Policy</span>
          </nav>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-12 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-8">
            <div className="space-y-3 pb-6 border-b border-[#E7E7EB]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Compliance &amp; Data Transparency</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs text-neutral-500">
                Last Updated: November 2026 • Minerals Solutions (Zak GIDC, Dahegam, Gujarat)
              </p>
            </div>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#E10613]" />
                1. Scope &amp; Purpose
              </h2>
              <p>
                Minerals Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the industrial machinery website{' '}
                <strong className="text-[#111111]">https://mineralssolution.in</strong>. This Privacy Policy informs
                business clients, plant managers, and procurement officers regarding our policies regarding the collection,
                use, and safeguarding of commercial and personal data submitted through our quotation and contact forms.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#E10613]" />
                2. Information We Collect
              </h2>
              <p>When you submit a quotation request (RFQ) or technical inquiry, we collect:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Contact Identifiers:</strong> Name, professional email address, telephone / WhatsApp number.</li>
                <li><strong>Company Data:</strong> Registered company name, manufacturing facility location, and city.</li>
                <li><strong>Technical Requirements:</strong> Material characteristics (moisture content, bulk density, throughput TPH), plant layout constraints, and equipment preferences.</li>
              </ul>
              <p className="text-xs text-neutral-500">
                We do NOT collect credit card numbers, payment gateway credentials, or sensitive personal data on this website.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">3. How Your Information is Used</h2>
              <p>We use the collected information exclusively for legitimate industrial business purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Formulating technical machinery sizing calculations and general arrangement (GA) drawings.</li>
                <li>Transmitting formal commercial quotations and cost estimates via email or telephone.</li>
                <li>Coordinating factory or workshop inspection visits at our Zak GIDC, Dahegam facility.</li>
                <li>Providing after-sales support, spare parts dispatch, and warranty communications.</li>
              </ul>
              <p className="font-semibold text-[#111111]">
                We do not sell, rent, or lease commercial inquiry data to any third-party marketing companies.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-[#111111]">4. Data Security &amp; Retention</h2>
              <p>
                Inquiries are transmitted via encrypted HTTPS protocol. We retain inquiry correspondence for the
                duration of your machinery lifecycle and ongoing spare parts support. You may request deletion or
                correction of your contact records at any time by emailing{' '}
                <a href={`mailto:${company.email}`} className="text-[#E10613] font-bold hover:underline">
                  {company.email}
                </a>.
              </p>
            </section>

            <section className="space-y-3 text-sm text-neutral-700 leading-relaxed pt-4 border-t border-[#E7E7EB]">
              <h2 className="text-lg font-bold text-[#111111]">5. Contact &amp; Grievance Officer</h2>
              <p>
                For any privacy questions or data inquiries under the Information Technology Act (India), please contact
                our registered works:
              </p>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] text-xs space-y-1.5 text-neutral-800">
                <p className="font-bold text-[#111111]">{company.legalName}</p>
                <p>Attention: {company.proprietor}</p>
                <p>Address: {company.address.streetAddress}, {company.address.locality}, Gujarat - {company.address.postalCode}, India.</p>
                <p>GSTIN: <span className="font-mono font-semibold">{company.gstin}</span></p>
                <p>Email: <a href={`mailto:${company.email}`} className="text-[#E10613] font-bold">{company.email}</a></p>
                <p>Telephone: <a href={`tel:${company.telephones[0].replace(/\s+/g, '')}`} className="text-[#E10613] font-bold">{company.telephones[0]}</a></p>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

