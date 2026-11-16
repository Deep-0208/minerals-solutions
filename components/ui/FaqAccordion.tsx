'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
  badge?: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
  className?: string;
}

export function FaqAccordion({
  items,
  allowMultiple = false,
  defaultOpenIndex = null,
  className = '',
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(() => {
    return defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : [];
  });

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      if (allowMultiple) {
        return [...prev, index];
      }
      return [index];
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
              isOpen
                ? 'border-[#E10613]/40 shadow-sm ring-1 ring-[#E10613]/10'
                : 'border-[#E7E7EB] hover:border-neutral-300 hover:shadow-xs'
            }`}
          >
            <button
              type="button"
              id={`faq-question-${idx}`}
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10613] rounded-2xl group cursor-pointer"
            >
              <div className="flex items-start gap-3.5 pr-2">
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
                    isOpen
                      ? 'bg-[#E10613] text-white shadow-xs'
                      : 'bg-red-50 text-[#E10613] group-hover:bg-red-100'
                  }`}
                >
                  Q{idx + 1}
                </span>
                <span
                  className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
                    isOpen
                      ? 'text-[#E10613]'
                      : 'text-[#111111] group-hover:text-[#E10613]'
                  }`}
                >
                  {item.question}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'bg-red-50 text-[#E10613] rotate-180'
                    : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              </div>
            </button>

            {/* Answer Region with Smooth Height Transition */}
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-100">
                  <div className="text-sm sm:text-base text-neutral-600 leading-relaxed pl-10">
                    {item.answer}
                  </div>
                  {item.badge && (
                    <div className="mt-3 pl-10 flex items-center gap-1.5 text-xs font-semibold text-[#E10613]">
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
