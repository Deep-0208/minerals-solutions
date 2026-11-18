import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export interface SpecRow {
  label: string;
  value: string;
  valueNode?: React.ReactNode;
  highlight?: boolean;
  unit?: string;
  note?: string;
}

export interface TechnicalSpecTableProps {
  title: string;
  subtitle?: string;
  modelCode?: string;
  specs: SpecRow[];
  caption?: string;
  className?: string;
}

export function TechnicalSpecTable({
  title,
  subtitle,
  modelCode,
  specs,
  caption,
  className = '',
}: TechnicalSpecTableProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E7E7EB] shadow-[0_4px_24px_rgba(17,17,17,0.04)] overflow-hidden ${className}`}
    >
      {/* Table Header */}
      <div className="bg-[#111111] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-800">
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E10613]" />
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {modelCode && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-800 text-xs font-mono text-[#E10613] font-semibold self-start sm:self-auto border border-neutral-700">
            <span>Model:</span>
            <span className="text-white">{modelCode}</span>
          </div>
        )}
      </div>

      {/* Specifications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse" aria-label={title}>
          <thead>
            <tr className="bg-[#F5F5F7] border-b border-[#E7E7EB] text-xs font-bold text-[#111111] uppercase tracking-wider">
              <th scope="col" className="py-3 px-6 w-1/3">
                Parameter
              </th>
              <th scope="col" className="py-3 px-6">
                Technical Specification
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7E7EB]">
            {specs.map((spec, index) => {
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={spec.label}
                  className={`transition-colors hover:bg-neutral-50/80 ${
                    spec.highlight
                      ? 'bg-red-50/40 font-medium'
                      : isEven
                      ? 'bg-white'
                      : 'bg-[#FAFAFA]'
                  }`}
                >
                  <td className="py-3.5 px-6 font-semibold text-[#111111] align-top">
                    <div className="flex items-start gap-2">
                      {spec.highlight && (
                        <CheckCircle2 className="w-4 h-4 text-[#E10613] shrink-0 mt-0.5" />
                      )}
                      <span>{spec.label}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-[#171717] align-top">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={spec.highlight ? 'font-bold text-[#111111]' : ''}>
                        {spec.valueNode ?? spec.value}
                      </span>
                      {spec.unit && (
                        <span className="text-xs text-neutral-500 font-mono">
                          [{spec.unit}]
                        </span>
                      )}
                    </div>
                    {spec.note && (
                      <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{spec.note}</span>
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Disclaimers */}
      {caption && (
        <div className="px-6 py-3 bg-[#F5F5F7] border-t border-[#E7E7EB] text-xs text-neutral-500 flex items-center gap-2">
          <Info className="w-4 h-4 text-neutral-400 shrink-0" />
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
}

