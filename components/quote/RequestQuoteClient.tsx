'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Flame,
  Sprout,
  Waves,
  Boxes,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

export function RequestQuoteClient() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';
  const cleanSecondaryPhone = secondaryPhone.replace(/\s+/g, '');

  const waUrl = `https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering quotation for industrial machinery.'
  )}`;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    city: '',
    country: 'India',
    category: 'rotary-dryers',
    capacity: '',
    material: '',
    inputMoisture: '',
    outputMoisture: '',
    heatSource: 'Coal / Biomass Hot Air Generator',
    beltWidth: '800 mm',
    message: '',
    honeypot: '', // anti-spam
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
        message: data.message || 'Quotation request submitted successfully.',
      });
      // Reset form
      setFormData({
        name: '',
        companyName: '',
        phone: '',
        email: '',
        city: '',
        country: 'India',
        category: 'rotary-dryers',
        capacity: '',
        material: '',
        inputMoisture: '',
        outputMoisture: '',
        heatSource: 'Coal / Biomass Hot Air Generator',
        beltWidth: '800 mm',
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
        {/* Header Breadcrumb & Title */}
        <div className="mb-8 max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Request a Quote</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Direct Works Quotation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
            Request an Industrial Machinery Quotation
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#737373] leading-relaxed">
            Submit your material characteristics, throughput targets, and operating conditions. Our fabrication
            and process engineering team at Zak GIDC will prepare a tailored technical specification and cost estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main RFQ Form (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            {status.type === 'success' ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">
                  Quotation Request Received
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  {status.message}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    onClick={() => setStatus({ type: null, message: '' })}
                    variant="outline"
                    size="md"
                  >
                    Submit Another Enquiry
                  </Button>
                  <Button href="/" variant="primary" size="md">
                    Return to Homepage
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
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
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-[#BC0711] flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Section 1: Equipment Selection */}
                <div>
                  <h2 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E10613]" />
                    Step 1: Select Machinery Category
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`cursor-pointer border rounded-xl p-3.5 flex items-start gap-3 transition-all ${
                        formData.category === 'rotary-dryers'
                          ? 'border-[#E10613] bg-red-50/30 ring-1 ring-[#E10613]'
                          : 'border-[#E7E7EB] hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value="rotary-dryers"
                        checked={formData.category === 'rotary-dryers'}
                        onChange={handleChange}
                        className="mt-1 text-[#E10613] focus:ring-[#E10613]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs text-[#111111]">
                          <Flame className="w-3.5 h-3.5 text-[#E10613]" />
                          <span>Industrial Rotary Dryers</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          Single/double pass drum dryers, calciners, hot air generators.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`cursor-pointer border rounded-xl p-3.5 flex items-start gap-3 transition-all ${
                        formData.category === 'fertilizer-plants'
                          ? 'border-[#E10613] bg-red-50/30 ring-1 ring-[#E10613]'
                          : 'border-[#E7E7EB] hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value="fertilizer-plants"
                        checked={formData.category === 'fertilizer-plants'}
                        onChange={handleChange}
                        className="mt-1 text-[#E10613] focus:ring-[#E10613]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs text-[#111111]">
                          <Sprout className="w-3.5 h-3.5 text-[#E10613]" />
                          <span>Fertilizer Granulation Plants</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          Pan/disc granulators, drum granulators, bio-compost lines.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`cursor-pointer border rounded-xl p-3.5 flex items-start gap-3 transition-all ${
                        formData.category === 'sand-washing'
                          ? 'border-[#E10613] bg-red-50/30 ring-1 ring-[#E10613]'
                          : 'border-[#E7E7EB] hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value="sand-washing"
                        checked={formData.category === 'sand-washing'}
                        onChange={handleChange}
                        className="mt-1 text-[#E10613] focus:ring-[#E10613]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs text-[#111111]">
                          <Waves className="w-3.5 h-3.5 text-[#E10613]" />
                          <span>Sand Washing &amp; Recovery</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          Bucket wheel washers, hydrocyclones, screw classifiers.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`cursor-pointer border rounded-xl p-3.5 flex items-start gap-3 transition-all ${
                        formData.category === 'conveyors-spares'
                          ? 'border-[#E10613] bg-red-50/30 ring-1 ring-[#E10613]'
                          : 'border-[#E7E7EB] hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value="conveyors-spares"
                        checked={formData.category === 'conveyors-spares'}
                        onChange={handleChange}
                        className="mt-1 text-[#E10613] focus:ring-[#E10613]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs text-[#111111]">
                          <Boxes className="w-3.5 h-3.5 text-[#E10613]" />
                          <span>Conveyors &amp; Mechanical Spares</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          Trough belt conveyors, lagged pulleys, rollers, girth gears.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Section 2: Technical & Process Parameters */}
                <div className="pt-2 border-t border-neutral-100">
                  <h2 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E10613]" />
                    Step 2: Operating &amp; Technical Parameters
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="capacity" className="block text-xs font-bold text-[#111111] mb-1">
                        Required Capacity / Throughput *
                      </label>
                      <input
                        type="text"
                        id="capacity"
                        name="capacity"
                        required
                        value={formData.capacity}
                        onChange={handleChange}
                        placeholder="e.g. 5 TPH or 2,000 kg/hr"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="material" className="block text-xs font-bold text-[#111111] mb-1">
                        Raw Material to Process *
                      </label>
                      <input
                        type="text"
                        id="material"
                        name="material"
                        required
                        value={formData.material}
                        onChange={handleChange}
                        placeholder="e.g. Silica sand, cow dung, biomass, slag"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    {/* Conditional Fields for Rotary Dryers */}
                    {formData.category === 'rotary-dryers' && (
                      <>
                        <div>
                          <label htmlFor="inputMoisture" className="block text-xs font-bold text-[#111111] mb-1">
                            Inlet Moisture Content (%)
                          </label>
                          <input
                            type="text"
                            id="inputMoisture"
                            name="inputMoisture"
                            value={formData.inputMoisture}
                            onChange={handleChange}
                            placeholder="e.g. 15% - 22%"
                            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="outputMoisture" className="block text-xs font-bold text-[#111111] mb-1">
                            Target Discharge Moisture (%)
                          </label>
                          <input
                            type="text"
                            id="outputMoisture"
                            name="outputMoisture"
                            value={formData.outputMoisture}
                            onChange={handleChange}
                            placeholder="e.g. < 0.5% or < 1%"
                            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="heatSource" className="block text-xs font-bold text-[#111111] mb-1">
                            Preferred Heat Source / Combustion Furnace
                          </label>
                          <select
                            id="heatSource"
                            name="heatSource"
                            value={formData.heatSource}
                            onChange={handleChange}
                            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none bg-white"
                          >
                            <option value="Coal / Biomass Hot Air Generator">Solid Fuel: Coal / Briquettes / Biomass</option>
                            <option value="Natural Gas / PNG / LPG Burner">Gas: Natural Gas / PNG / LPG Burner</option>
                            <option value="Diesel / Light Diesel Oil (LDO) Burner">Liquid Fuel: Diesel / LDO Burner</option>
                            <option value="Waste Heat Recovery / Steam Heat Exchanger">Waste Heat / Steam Heat Exchanger</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Conditional Fields for Conveyors */}
                    {formData.category === 'conveyors-spares' && (
                      <div className="sm:col-span-2">
                        <label htmlFor="beltWidth" className="block text-xs font-bold text-[#111111] mb-1">
                          Approximate Conveyor Belt Width
                        </label>
                        <select
                          id="beltWidth"
                          name="beltWidth"
                          value={formData.beltWidth}
                          onChange={handleChange}
                          className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none bg-white"
                        >
                          <option value="500 mm">500 mm Width</option>
                          <option value="650 mm">650 mm Width</option>
                          <option value="800 mm">800 mm Width (Standard Heavy Duty)</option>
                          <option value="1000 mm">1000 mm Width</option>
                          <option value="1200 mm">1200 mm Width</option>
                          <option value="1400 mm+">1400 mm+ Large Mining Spans</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 3: Contact Details */}
                <div className="pt-2 border-t border-neutral-100">
                  <h2 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E10613]" />
                    Step 3: Commercial &amp; Contact Details
                  </h2>

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
                        placeholder="e.g. Ramesh Patel"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#111111] mb-1">
                        Company / Enterprise Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Gujarat Mineral Industries Ltd"
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
                        Corporate Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. procurement@company.com"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-bold text-[#111111] mb-1">
                        City / Plant Location
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Morbi, Ahmedabad, Hyderabad"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-bold text-[#111111] mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="India"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-xs font-bold text-[#111111] mb-1">
                        Additional Process Details, Footprint Constraints, or Scope
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details such as particle size, site space constraints, or whether installation and commissioning are required."
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#E7E7EB] focus:border-[#E10613] focus:ring-1 focus:ring-[#E10613] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your technical data is kept strictly confidential.</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[200px]"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {loading ? 'Submitting...' : 'Request Quotation'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar / Factory Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Works Phone Card */}
            <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Need Urgent Discussion?</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Connect directly with our chief fabrication engineers at the Zak GIDC works.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="block w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-center font-mono font-bold text-sm text-white transition-colors"
                >
                  {primaryPhone}
                </a>
                <a
                  href={`tel:${cleanSecondaryPhone}`}
                  className="block w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-center font-mono font-bold text-sm text-white transition-colors"
                >
                  {secondaryPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#16794B] hover:bg-[#12633D] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Works Location Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7EB] shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
                <MapPin className="w-4 h-4 text-[#E10613]" />
                <span>Manufacturing Works</span>
              </div>
              <address className="not-italic text-xs text-neutral-600 leading-relaxed font-medium">
                Plot No. 10, Shed No. 3, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam,
                District Gandhinagar - 382330, Gujarat, India.
              </address>
              <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500 space-y-1">
                <p><strong>Operating Hours:</strong> Mon - Sat: 09:00 - 19:00</p>
                <p><strong>GSTIN:</strong> {company.gstin}</p>
                <p><strong>UDYAM:</strong> {company.udyamRegistration}</p>
              </div>
            </div>

            {/* Turnkey Assurance */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7EB] shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#E10613]" />
                <span>What Happens Next?</span>
              </div>
              <ul className="text-xs text-neutral-600 space-y-2 pt-1">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#E10613]">•</span>
                  <span>Engineering feasibility review based on feed moisture and material behavior.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#E10613]">•</span>
                  <span>Drum sizing and hot air generator fuel heat-balance calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#E10613]">•</span>
                  <span>Formal commercial proposal with drawings and timeline within 24-48 hours.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

