'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Factory,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

export function ContactClient() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';
  const cleanSecondaryPhone = secondaryPhone.replace(/\s+/g, '');

  const waUrl = `https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to enquire about your industrial machinery and plant solutions.'
  )}`;

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    category: 'General Technical Inquiry',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/quote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setStatus({
        type: 'success',
        message: 'Your message has been received. Our team will contact you shortly.',
      });
      setFormData({
        name: '',
        companyName: '',
        phone: '',
        email: '',
        category: 'General Technical Inquiry',
        message: '',
        honeypot: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please call our works directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E10613]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Contact Us</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Works Desk &amp; Engineering Contacts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
            Contact Minerals Solutions Works
          </h1>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Reach out directly to our manufacturing and design engineers. Whether you need equipment
            quotes, replacement spares, or directions to visit our Zak GIDC plant, we are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Factory Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Calling Hotlines */}
            <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Factory Hotlines
              </span>
              <h2 className="text-2xl font-bold text-white">
                Call Engineering Directly
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect directly with our chief fabrication engineers at the Zak GIDC works.
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E10613]" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Primary Works Line</span>
                      <span className="text-sm font-bold text-white tracking-wide">{primaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-400 group-hover:text-white">Call Now</span>
                </a>

                <a
                  href={`tel:${cleanSecondaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E10613]" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Technical Hotline</span>
                      <span className="text-sm font-bold text-white tracking-wide">{secondaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-400 group-hover:text-white">Call Now</span>
                </a>

                {company.indiamartPns && (
                  <a
                    href={`tel:${company.indiamartPns.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-neutral-400" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block">IndiaMART PNS Line</span>
                        <span className="text-sm font-medium text-neutral-300 tracking-wide">{company.indiamartPns}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-neutral-400 group-hover:text-white">Toll-Free</span>
                  </a>
                )}
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Factory Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7EB] shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373]">
                Physical Location &amp; Works
              </span>
              <h3 className="text-lg font-bold text-[#111111]">
                Fabrication Works &amp; Registered Office
              </h3>

              <div className="space-y-3 text-sm text-[#737373]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E10613] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#111111]">{company.legalName}</p>
                    <p>{company.address.streetAddress},</p>
                    <p>{company.address.locality},</p>
                    <p>District {company.address.metroDistrict}, {company.address.regionName} - {company.address.postalCode}, {company.address.countryName}.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-4 h-4 text-[#E10613] shrink-0" />
                  <a href={`mailto:${company.email}`} className="text-[#111111] font-semibold hover:text-[#E10613]">
                    {company.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#737373] shrink-0" />
                  <span>Monday - Saturday: 9:00 AM - 7:00 PM (IST)</span>
                </div>
              </div>

              {/* Map Directions Link */}
              <div className="pt-2 border-t border-neutral-100">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${company.geo.lat},${company.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E10613] hover:underline"
                >
                  <span>Open Coordinates in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Legal Entity Proof Badge */}
            <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <div className="flex items-center gap-2 font-bold text-[#111111]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Statutory Credentials</span>
              </div>
              <p>GSTIN: <span className="font-mono font-semibold text-neutral-900">{company.gstin}</span></p>
              <p>MSME UDYAM: <span className="font-mono font-semibold text-neutral-900">{company.udyamRegistration}</span></p>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E7EB] shadow-sm">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-2">
              Send an Enquiry to Our Engineering Desk
            </h2>
            <p className="text-sm text-[#737373] mb-6">
              Fill out your process requirements below. Our design engineering team reviews every technical
              submission and responds within 24 working hours with indicative drawings and pricing.
            </p>

            {status.type === 'success' ? (
              <div role="status" aria-live="polite" className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-2 text-base font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Enquiry Transmitted Successfully</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  Thank you for reaching out to Minerals Solutions. Your message has been routed directly to our
                  Zak GIDC engineering team. For immediate assistance, feel free to call our works hotline at{' '}
                  <a href={`tel:${cleanPhone}`} className="font-bold underline">{primaryPhone}</a>.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ type: null, message: '' })}
                  className="text-xs font-bold uppercase tracking-wider text-emerald-800 underline mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.type === 'error' && (
                  <div role="alert" aria-live="assertive" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Honeypot anti-spam field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#111111] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-[#111111] mb-1">
                      Company / Plant Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      autoComplete="organization"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Patel Minerals & Chemicals"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#111111] mb-1">
                      Telephone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#111111] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@company.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-[#111111] mb-1">
                    Subject / Machinery Division
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none bg-white"
                  >
                    <option value="Industrial Rotary Dryers">Industrial Rotary Dryers &amp; Thermal Systems</option>
                    <option value="Fertilizer Granulation Plants">Fertilizer Granulation &amp; Pellet Plants</option>
                    <option value="Sand Washing & Recovery">Sand Washing &amp; Mineral Recovery Plants</option>
                    <option value="Industrial Conveyor Systems">Industrial Conveyor Systems &amp; Spares</option>
                    <option value="Factory Visit Request">Schedule Factory / Workshop Visit</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#111111] mb-1">
                    Message / Technical Specifications
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your process requirements, throughput targets, or questions..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct engineering consultation without sales agents.</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={loading}
                    className="w-full sm:w-auto"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

