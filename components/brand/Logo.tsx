import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for white/light backgrounds, 'dark' for dark headers/footers
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md',
}: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#111111]';
  const subtextColor = isDark ? 'text-neutral-400' : 'text-[#737373]';

  const dimensions = {
    sm: { px: 40, textClass: 'text-lg', subtextClass: 'text-[10px]' },
    md: { px: 48, textClass: 'text-xl sm:text-2xl', subtextClass: 'text-[11px] sm:text-xs' },
    lg: { px: 64, textClass: 'text-2xl sm:text-3xl', subtextClass: 'text-xs sm:text-sm' },
  }[size];

  // In dark mode: use logo-dark-md.webp (white 'S' + red 'M' on transparent)
  // In light mode: use logo-transparent-md.webp (graphite 'S' + red 'M' on transparent)
  const logoSrc = isDark
    ? '/images/brand/logo-dark-md.webp'
    : '/images/brand/logo-transparent-md.webp';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E10613] rounded-sm transition-opacity hover:opacity-95 ${className}`}
      aria-label="MS - Home"
    >
      {/* Official MS Monogram Emblem */}
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src={logoSrc}
          alt="MS logo"
          width={dimensions.px}
          height={dimensions.px}
          className="object-contain"
          priority
        />
      </div>

      {/* Typography: MS Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`${dimensions.textClass} font-extrabold tracking-tight uppercase ${textColor} font-display`}
        >
          MS <span className="text-[#E10613]">Solutions</span>
        </span>
        {showTagline && (
          <span
            className={`${dimensions.subtextClass} font-medium tracking-wider uppercase mt-1 ${subtextColor}`}
          >
            Engineering &amp; Technology
          </span>
        )}
      </div>
    </Link>
  );
}
