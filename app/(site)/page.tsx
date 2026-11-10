import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  ShieldCheck,
  Headphones,
  Maximize2,
  Code2,
  Smartphone,
  Layout,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/data/company';

export default function HomePage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-[#E10613]" />,
      title: 'Fast Performance',
      desc: 'Engineered for high throughput, optimized velocity, and responsive execution across workloads.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E10613]" />,
      title: 'Secure by Design',
      desc: 'Built with rigorous industrial safety protocols, verified metallurgy, and strict quality gates.',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#E10613]" />,
      title: 'Reliable Support',
      desc: 'Direct consultation with principal engineers, transparent communication, and rapid turnaround.',
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-[#E10613]" />,
      title: 'Built to Scale',
      desc: 'Modular system architecture crafted to expand seamlessly as operational requirements grow.',
    },
  ];

  const services = [
    {
      icon: <Code2 className="w-7 h-7 text-[#E10613]" />,
      title: 'Web Development',
      desc: 'Custom high-performance web applications, fast APIs, and scalable cloud architectures built for modern enterprise demand.',
      href: '#contact',
    },
    {
      icon: <Smartphone className="w-7 h-7 text-[#E10613]" />,
      title: 'Mobile Applications',
      desc: 'Cross-platform mobile applications offering intuitive user journeys, offline readiness, and fluid native performance.',
      href: '#contact',
    },
    {
      icon: <Layout className="w-7 h-7 text-[#E10613]" />,
      title: 'UI/UX Design',
      desc: 'Clean, conversion-focused design systems, accessible design tokens, and refined interfaces that elevate brand authority.',
      href: '#contact',
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#E10613]" />,
      title: 'Turnkey Industrial Systems',
      desc: 'High-efficiency thermal rotary dryers, turnkey fertilizer granulation plants, and heavy bulk material handling solutions.',
      href: '#contact',
    },
  ];

  const featuredWork = [
    {
      title: 'Industrial Rotary Thermal Dryer',
      category: 'Thermal Processing',
      desc: 'Heavy-duty double pass rotary drying system with automatic thermal draft regulation and dual cyclone dust recovery.',
      image: '/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp',
      outcome: 'Reduced operational moisture from 18% to under 0.5% at continuous 5 TPH capacity.',
    },
    {
      title: 'Fertilizer Granulation Plant Line',
      category: 'Turnkey Plant',
      desc: 'Complete automated pan granulator, rotary cooling cylinder, and screening line for organic and chemical fertilizers.',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-line-md.webp',
      outcome: 'Delivered 92%+ uniform granule sphericity with integrated dust mitigation.',
    },
    {
      title: 'Aggregate Sand Washing Setup',
      category: 'Mineral Recovery',
      desc: 'Bucket wheel sand classifier and hydrocyclone dewatering plant for high-purity construction and foundry sand.',
      image: '/images/products/mineral-processing/river-sand-washing-plant-md.webp',
      outcome: 'Recovers fine sand particles down to 75 microns while removing 95%+ silt and clay.',
    },
  ];

  const differentiators = [
    {
      title: 'Authenticated Manufacturing Credentials',
      desc: 'Registered with GSTIN 24AUSPP9555F1ZZ and UDYAM-GJ-09-0021428, operating an active heavy plate workshop in Zak GIDC.',
    },
    {
      title: 'Engineering Precision & Quality Gates',
      desc: 'Every system undergoes ultrasound weld inspections, dynamic balancing, and rigorous pre-dispatch testing.',
    },
    {
      title: 'Complete Turnkey Delivery',
      desc: 'From initial design calculations and layout drawings to on-site installation, testing, and operational handover.',
    },
    {
      title: 'Transparent Direct Communication',
      desc: 'Clients communicate directly with our engineering team - no intermediary sales layers or inflated promises.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ═══════════════════════════════════════════════
          SECTION B: HERO SECTION (Split Layout on Dark Charcoal)
          ═══════════════════════════════════════════════ */}
      <section className="relative bg-[#1B1B1D] text-white overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Subtle Swoosh Arcs & Ambient Glow inspired by MS logo */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E10613]/15 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#111111] border border-white/5 pointer-events-none"
          aria-hidden="true"
        />

        <Container size="hero" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Headline & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10613]" />
                <span>Built For What's Next</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Innovative Ideas. <br />
                <span className="text-[#E10613]">Powerful Solutions.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-xl">
                We build modern, scalable digital experiences that help businesses move forward.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button href="#services" variant="primary" size="lg">
                  Explore Services
                </Button>
                <Button href="#contact" variant="secondary-dark" size="lg">
                  Contact Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E10613]" />
                  Verified Facility: Zak GIDC, Dahegam
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E10613]" />
                  GSTIN: {company.gstin}
                </span>
              </div>
            </div>

            {/* Right Column: Prominent MS Visual (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-[#111111] to-[#1B1B1D] border border-white/10 p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* Circular Swoosh Graphic */}
                <div
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#E10613_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-2 border-[#E10613]/30 pointer-events-none group-hover:scale-110 transition-transform duration-500"
                  aria-hidden="true"
                />

                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                    MS Identity System
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E10613] animate-pulse" />
                </div>

                {/* Center Sharp Logo Display */}
                <div className="my-auto text-center py-6 z-10 flex flex-col items-center">
                  <div className="relative w-36 h-36 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/images/brand/logo-dark.png"
                      alt="MS logo"
                      width={144}
                      height={144}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="mt-4 text-xl font-bold font-display uppercase tracking-wider">
                    Minerals <span className="text-[#E10613]">Solutions</span>
                  </div>
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                    Engineering &amp; Technology
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="z-10 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-neutral-300">
                  <span>Industrial Quality Standard</span>
                  <span className="text-white font-semibold font-mono">ISO &bull; NDT Audited</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION C: BENEFITS SECTION (4 Concise Columns)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#F5F5F7] border-b border-[#E7E7EB]">
        <Container size="content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-[#E7E7EB] shadow-[0_8px_28px_rgba(17,17,17,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(17,17,17,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0F1] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#737373] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION D: ABOUT SECTION (Two-Column Layout)
          ═══════════════════════════════════════════════ */}
      <section id="about" className="py-20 md:py-28 bg-white border-b border-[#E7E7EB]">
        <Container size="content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-1 bg-[#E10613] rounded-full" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#E10613]">
                About MS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight font-display">
                Driving Progress Through Precision Engineering &amp; Modern Systems
              </h2>
              <p className="text-base text-[#454545] leading-relaxed">
                Minerals Solutions (MS) is a technology-driven engineering firm based in Zak GIDC, Dahegam,
                in the Ahmedabad industrial corridor. We combine heavy plate fabrication excellence with
                modern digital architecture, delivering robust, high-efficiency equipment and scalable
                technical solutions.
              </p>
              <p className="text-base text-[#737373] leading-relaxed">
                Whether deploying continuous 50 TPH thermal rotary dryers, turnkey fertilizer granulation
                lines, or high-performance digital platforms, we engineer with purpose and deliver with
                uncompromising reliability.
              </p>
              <div className="pt-2">
                <Button href="#contact" variant="primary" size="md">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Media Column (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E7E7EB] shadow-[0_14px_36px_rgba(17,17,17,0.08)] bg-neutral-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp"
                    alt="MS manufacturing workshop in Zak GIDC, Dahegam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div className="p-5 bg-white border-t border-[#E7E7EB] flex items-center justify-between text-xs text-[#737373]">
                  <div>
                    <strong className="text-[#111111] block">Dahegam Manufacturing Works</strong>
                    <span>Zak GIDC, Gandhinagar / Ahmedabad</span>
                  </div>
                  <span className="text-[#E10613] font-bold font-mono">Est. 2023</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION E: SERVICES SECTION (4 Elegant Cards)
          ═══════════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-28 bg-[#F5F5F7] border-b border-[#E7E7EB]">
        <Container size="content">
          <SectionHeading
            badge="Our Capabilities"
            title="Comprehensive Services Tailored for Growth"
            subtitle="Explore our specialized services spanning digital platform engineering, intuitive UI architecture, and full turnkey industrial manufacturing."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-7 rounded-2xl bg-white border border-[#E7E7EB] shadow-[0_8px_28px_rgba(17,17,17,0.05)] hover:shadow-[0_14px_36px_rgba(17,17,17,0.1)] transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#FFF0F1] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors font-display">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#737373] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E7EB]">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E10613] group-hover:text-[#BC0711] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION F: PORTFOLIO & FEATURED WORK
          ═══════════════════════════════════════════════ */}
      <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-[#E7E7EB]">
        <Container size="content">
          <SectionHeading
            badge="Featured Projects"
            title="Proven Work Built for High Demand"
            subtitle="A curated showcase of our engineering systems fabricated and successfully commissioned for heavy industrial and mineral operations."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-2xl border border-[#E7E7EB] bg-white overflow-hidden shadow-[0_8px_28px_rgba(17,17,17,0.06)] hover:shadow-[0_14px_36px_rgba(17,17,17,0.12)] transition-all duration-200 hover:-translate-y-1 group"
              >
                {/* 16:10 Ratio Photo Container */}
                <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E10613] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#E10613] transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#737373] leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="mt-4 p-3 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] text-xs text-[#454545] font-medium">
                      <strong>Outcome:</strong> {project.outcome}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E7E7EB]">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-[#E10613] transition-colors"
                    >
                      <span>Consult on This Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION G: WHY CHOOSE MS
          ═══════════════════════════════════════════════ */}
      <section id="why-us" className="py-20 md:py-28 bg-[#F5F5F7] border-b border-[#E7E7EB]">
        <Container size="content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E10613]">
                Why Choose MS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight font-display">
                Engineered for Integrity, Built for Long-Term Value
              </h2>
              <p className="text-base text-[#737373] leading-relaxed">
                We differentiate through technical depth, honest manufacturing commitments, and direct
                accessibility to engineering leadership.
              </p>

              <div className="space-y-4 pt-2">
                {differentiators.map((diff) => (
                  <div
                    key={diff.title}
                    className="p-4 rounded-xl bg-white border border-[#E7E7EB] shadow-sm flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFF0F1] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#E10613]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#111111] font-display">
                        {diff.title}
                      </h3>
                      <p className="text-xs text-[#737373] mt-1 leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#111111] text-white border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div
                  className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#E10613]/20 blur-[100px] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Zak GIDC Facility
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-display">
                    Direct Access to Leadership &amp; Engineering
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Work directly with Mr. Vipulbhai Prajapati and our engineering team at our Dahegam
                    facility. We welcome clients for plant inspections, material trial runs, and custom
                    technical reviews.
                  </p>

                  <div className="pt-2 space-y-3 text-xs text-neutral-300 border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#E10613]" />
                      <span>Direct Hotline: {primaryPhone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      <span>{company.email}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button href="#contact" variant="primary" size="md">
                      Schedule a Factory Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION H: FINAL CTA BAND (Closing on Charcoal)
          ═══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-20 md:py-24 bg-[#1B1B1D] text-white relative overflow-hidden border-t border-neutral-800"
      >
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E10613]/20 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />

        <Container size="sm" className="relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Ready to Bring Your Next Project to Life?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Send us your specifications or technical requirements. Our engineering team will review your
            scope and provide a formal proposal within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Button
              href={`tel:${cleanPhone}`}
              variant="primary"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Works: {primaryPhone}
            </Button>
            <Button
              href={`https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
                company.whatsapp.prefill
              )}`}
              external
              variant="secondary-dark"
              size="lg"
            >
              WhatsApp Consultation
            </Button>
          </div>

          <div className="pt-4 text-xs text-neutral-400">
            Plant: 10, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Dahegam, Gandhinagar - 382330, Gujarat
          </div>
        </Container>
      </section>
    </div>
  );
}
