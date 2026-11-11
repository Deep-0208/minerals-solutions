import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle2,
  Factory,
  Wrench,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: {
    absolute: 'About Minerals Solutions | Heavy Machinery Gujarat Works',
  },
  description:
    'Discover Minerals Solutions: Gujarat manufacturer of industrial rotary dryers, fertilizer granulation plants, and sand washers at Zak GIDC, Dahegam.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About Minerals Solutions | Heavy Machinery Gujarat Works',
    description:
      'Learn about our manufacturing credentials, leadership, and fabrication workshop in Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/about/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Minerals Solutions | Heavy Machinery Gujarat Works',
    description:
      'Gujarat manufacturer of industrial rotary dryers, fertilizer granulation plants, and sand washers at Zak GIDC.',
  },
};

export default function AboutPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${company.siteUrl}/about/#webpage`,
    url: `${company.siteUrl}/about/`,
    name: 'About Minerals Solutions | Heavy Machinery Gujarat Works',
    description:
      'Company leadership, statutory credentials, and manufacturing principles of Minerals Solutions in Zak GIDC, Dahegam.',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${company.siteUrl}/#organization`,
      name: company.legalName,
      founder: {
        '@type': 'Person',
        name: company.proprietor,
      },
    },
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
          name: 'About Us',
          item: `${company.siteUrl}/about/`,
        },
      ],
    },
  };

  const principles = [
    {
      title: 'Precision Fabrication Over Trading',
      desc: 'We are hands-on equipment fabricators, not commercial trading agents. Every drum shell, trunnion bearing assembly, and drive chassis is constructed directly in our workshop.',
    },
    {
      title: 'Process-Driven Engineering',
      desc: 'Machinery dimensions and heat ratings are calculated specifically for your material characteristics, including bulk density, abrasiveness, and initial moisture content.',
    },
    {
      title: 'Structural Steel Durability',
      desc: 'We use certified structural steel plates (IS 2062 Grade E250/E350) and forged alloy steels (EN-8/EN-9) to deliver long service lives under severe abrasive wear.',
    },
    {
      title: 'Turnkey Accountability',
      desc: 'From initial equipment sizing drawings to final on-site hot commissioning, we take complete responsibility for mechanical performance.',
    },
  ];

  return (
    <>
      <JsonLd data={aboutSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E10613]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>Company Profile &amp; Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              Engineering Reliability for Heavy Industry
            </h1>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Minerals Solutions is an Indian heavy engineering enterprise headquartered in the Ahmedabad
              industrial corridor of Gujarat. We design, fabricate, and commission industrial rotary dryers,
              fertilizer granulation plants, sand washing systems, and bulk material handling conveyors.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-quote/" variant="primary" size="md">
                Request Engineering Quote
              </Button>
              <Button href="/manufacturing/" variant="outline" size="md">
                Tour Manufacturing Facility
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
              <Image
                src="/images/facility/working-team-lg.webp"
                alt="Mechanical fabrication and plant engineering working team at Minerals Solutions Dahegam facility"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                <span className="font-bold block">Engineering Team at Zak GIDC Works</span>
                <span className="text-neutral-400 text-[11px]">Led by Mr. Vipulbhai Prajapati</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Leadership & Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Leadership Card */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                  Executive Management
                </span>
                <h2 className="text-2xl font-bold text-[#111111]">
                  Company Leadership
                </h2>
              </div>
            </div>

            <p className="text-sm text-[#737373] leading-relaxed">
              Minerals Solutions operates under the technical direction of experienced mechanical fabrication
              and process engineering leadership with decades of cumulative hands-on workshop experience:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all">
                <h3 className="text-base font-bold text-[#111111]">
                  Mr. Vipulbhai A. Prajapati
                </h3>
                <span className="text-xs font-semibold text-[#E10613] block">
                  Proprietor &amp; Managing Director
                </span>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Oversees plant design, metallurgy selection, heavy plate rolling, and direct client engineering
                  consultations across domestic and export markets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all">
                <h3 className="text-base font-bold text-[#111111]">
                  Mr. P Amrutlal
                </h3>
                <span className="text-xs font-semibold text-[#E10613] block">
                  Chief Executive Officer (CEO)
                </span>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Leads commercial operations, vendor relationships, procurement of heavy forgings and motors,
                  and turnkey site project scheduling.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Business Credentials */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                  Statutory Registrations
                </span>
                <h2 className="text-2xl font-bold text-[#111111]">
                  Verified Credentials
                </h2>
              </div>
            </div>

            <p className="text-sm text-[#737373] leading-relaxed">
              Minerals Solutions complies with Indian industrial manufacturing regulations and maintains
              verified commercial credentials for government, institutional, and private procurement:
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] flex items-center justify-between">
                <span className="text-neutral-500 font-medium">Commencement Date</span>
                <span className="font-mono font-bold text-[#111111]">January 1, 2023</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] flex items-center justify-between">
                <span className="text-neutral-500 font-medium">Enterprise Classification</span>
                <span className="font-bold text-[#111111]">Micro, Small &amp; Medium Enterprise (MSME)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] flex items-center justify-between">
                <span className="text-neutral-500 font-medium">GST Identification (GSTIN)</span>
                <span className="font-mono font-bold text-[#111111]">{company.gstin}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] flex items-center justify-between">
                <span className="text-neutral-500 font-medium">UDYAM Registration</span>
                <span className="font-mono font-bold text-[#111111]">{company.udyamRegistration}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] flex items-center justify-between">
                <span className="text-neutral-500 font-medium">IndiaMART Verified Rating</span>
                <span className="font-mono font-bold text-[#111111]">4.8 / 5.0 Star Seller</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.indiamart.com/mineralssolutions-ahmedabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111111] text-white hover:bg-neutral-800 text-xs font-bold transition-colors"
              >
                <span>View Official IndiaMART Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E10613]" />
              </a>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Our Manufacturing Principles
            </h2>
            <p className="text-sm text-[#737373]">
              Every piece of equipment is built for demanding plant uptime and severe operating cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr) => (
              <div
                key={pr.title}
                className="bg-white rounded-2xl border border-[#E7E7EB] p-6 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all space-y-2 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E10613]" />
                <h3 className="text-base font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                  {pr.title}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Location & Visit Coordination */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Factory Visit Coordination
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Visit Our Zak GIDC Workshop
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We welcome prospective plant owners, consulting engineers, and EPC contractors to inspect
              our heavy rolling machines, welding bays, and ongoing dryer assembly work in progress.
            </p>
            <address className="not-italic text-xs text-neutral-300">
              Plot No. 10, Shed No. 3, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam,
              District Gandhinagar - 382330, Gujarat.
            </address>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/contact/" variant="primary" size="lg">
              Schedule Workshop Visit
            </Button>
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-700 hover:border-white text-xs font-bold text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E10613]" />
              <span>Call Works: {primaryPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}

