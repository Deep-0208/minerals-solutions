import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  accentLine?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  accentLine = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E10613] mb-3 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {badge}
        </div>
      )}

      {accentLine && !badge && (
        <div
          className={`w-12 h-1 bg-[#E10613] rounded-full mb-4 ${
            centered ? 'mx-auto' : ''
          }`}
        />
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight font-display ${
          dark ? 'text-white' : 'text-[#111111]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-neutral-400' : 'text-[#737373]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
