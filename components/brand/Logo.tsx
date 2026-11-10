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
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subtextColor = isDark ? 'text-slate-300' : 'text-slate-600';

  // Sizing configurations
  const dimensions = {
    sm: { px: 36, textClass: 'text-base sm:text-lg', subtextClass: 'text-[9px]' },
    md: { px: 46, textClass: 'text-lg sm:text-xl', subtextClass: 'text-[10px] sm:text-[11px]' },
    lg: { px: 64, textClass: 'text-2xl sm:text-3xl', subtextClass: 'text-xs sm:text-sm' },
  }[size];

  // Pick the optimal sharp logo variant
  // In dark mode: use logo-dark-md.webp (white 'S' + vivid red 'M' on transparent)
  // In light mode: use logo-transparent-md.webp (dark charcoal 'S' + vivid red 'M' on transparent)
  const logoSrc = isDark
    ? '/images/brand/logo-dark-md.webp'
    : '/images/brand/logo-transparent-md.webp';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#DA020D] rounded-sm ${className}`}
      aria-label="Minerals Solutions Home"
    >
      {/* Official Sharp MS Monogram Emblem */}
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src={logoSrc}
          alt="Minerals Solutions Official MS Monogram Emblem"
          width={dimensions.px}
          height={dimensions.px}
          className="object-contain"
          priority
        />
      </div>

      {/* Typography: Official Minerals Solutions Wordmark */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`${dimensions.textClass} font-extrabold tracking-tight uppercase ${textColor} transition-colors group-hover:text-[#DA020D]`}
        >
          Minerals <span className="text-[#DA020D]">Solutions</span>
        </span>
        {showTagline && (
          <span
            className={`${dimensions.subtextClass} font-semibold tracking-wider uppercase ${subtextColor}`}
          >
            Turnkey Industrial Plants &amp; Dryers
          </span>
        )}
      </div>
    </Link>
  );
}
