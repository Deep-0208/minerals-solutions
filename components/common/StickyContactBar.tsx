'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { company } from '@/data/company';

export function StickyContactBar() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const waUrl = `https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
    company.whatsapp.prefill
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E7E7EB] px-3 py-2 shadow-lg safe-area-bottom"
      aria-label="Quick Contact Actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#171717] text-[11px] font-semibold transition-colors"
          aria-label={`Call MS at ${primaryPhone}`}
        >
          <Phone className="w-4 h-4 text-[#E10613] mb-0.5" />
          <span>Call Works</span>
        </a>

        {/* WhatsApp Inquiry */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#16794B] hover:bg-[#12633D] text-white text-[11px] font-semibold transition-colors shadow-sm"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Contact CTA */}
        <Link
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#E10613] hover:bg-[#BC0711] text-white text-[11px] font-semibold transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Get Started</span>
        </Link>
      </div>
    </div>
  );
}
