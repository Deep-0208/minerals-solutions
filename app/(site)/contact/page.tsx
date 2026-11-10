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

export default function ContactPage() {
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
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors font-mono font-bold text-sm text-white"
                >
                  <span>Primary Desk:</span>
                  <span className="text-[#E10613]">{primaryPhone}</span>
                </a>
                <a
                  href={`tel:${cleanSecondaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors font-mono font-bold text-sm text-white"
                >
                  <span>Alternate Desk:</span>
                  <span className="text-white">{secondaryPhone}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#16794B] hover:bg-[#12633D] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Plant Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7EB] shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
                <MapPin className="w-4 h-4 text-[#E10613]" />
                <span>Works &amp; Fabrication Facility</span>
              </div>

              <address className="not-italic text-sm text-neutral-700 leading-relaxed font-medium">
                Plot No. 10, Shed No. 3, Shyam Estate, <br />
                Zak GIDC, Zak-Vahelal Road, <br />
                Ta. Dahegam, District Gandhinagar - 382330, <br />
                Gujarat, India.
              </address>

              <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E10613]" />
                  <a href={`mailto:${company.email}`} className="hover:text-[#E10613] font-mono">
                    {company.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E10613]" />
                  <span>Monday - Saturday: 09:00 - 19:00</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-500 block">GSTIN:</span>
                  <span className="font-mono font-bold text-[#111111]">{company.gstin}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">UDYAM:</span>
                  <span className="font-mono font-bold text-[#111111]">{company.udyamRegistration}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.indiamart.com/mineralssolutions-ahmedabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F5F5F7] hover:bg-neutral-200 text-[#111111] text-xs font-bold transition-colors"
                >
                  <span>Verify on IndiaMART</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E10613]" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-2">
              Send an Enquiry to Our Engineering Desk
            </h2>
            <p className="text-xs sm:text-sm text-[#737373] mb-6">
              Fill in your contact information and equipment requirements below. We will review
              your request and respond within 24 hours.
            </p>

            {status.type === 'success' ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Message Successfully Dispatched
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  {status.message}
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => setStatus({ type: null, message: '' })}
                    variant="outline"
                    size="md"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {status.type === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-[#BC0711] flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#111111] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-[#111111] mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Saurashtra Mineral Works"
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

