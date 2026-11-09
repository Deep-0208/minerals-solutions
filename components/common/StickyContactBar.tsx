'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { company } from '@/data/company';

export function StickyContactBar() {
  const primaryPhone = company.telephones[0] || '+916352453050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const waUrl = `https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
    company.whatsapp.prefill
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg safe-area-bottom"
      aria-label="Quick Contact Actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold transition-colors"
          aria-label={`Call Minerals Solutions at ${primaryPhone}`}
        >
          <Phone className="w-4 h-4 text-[#BE2323] mb-0.5" />
          <span>Call Factory</span>
        </a>

        {/* WhatsApp Inquiry */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#16A34A] hover:bg-[#15803D] text-white text-[11px] font-semibold transition-colors shadow-sm"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Request RFQ */}
        <Link
          href="/request-quote/"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#BE2323] hover:bg-[#9E1B1B] text-white text-[11px] font-semibold transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}

