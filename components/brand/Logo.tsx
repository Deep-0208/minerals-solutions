import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for white backgrounds (default), 'dark' for dark headers/footers
  showTagline?: boolean;
}

export function Logo({
  className = '',
  variant = 'light',
  showTagline = true,
}: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subtextColor = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BE2323] rounded-sm ${className}`}
      aria-label="Minerals Solutions Home"
    >
      {/* Official MS Monogram Emblem */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer Circular Ring: Dark Charcoal Left Crescent */}
        <path
          d="M 50 6 A 44 44 0 0 0 50 94 L 50 84 A 34 34 0 0 1 50 16 Z"
          fill="#2A2C2D"
        />
        {/* Outer Circular Ring: Crimson Red Right Crescent */}
        <path
          d="M 50 6 A 44 44 0 0 1 50 94 L 50 84 A 34 34 0 0 0 50 16 Z"
          fill="#BE2323"
        />
        {/* Center Monogram: Crimson Red 'M' */}
        <path
          d="M 24 68 L 24 32 L 32 32 L 39 52 L 46 32 L 53 32 L 53 68 L 47 68 L 47 43 L 41 60 L 37 60 L 30 43 L 30 68 Z"
          fill="#BE2323"
        />
        {/* Center Monogram: Dark Charcoal / Slate 'S' */}
        <path
          d="M 57 33 H 74 C 77 33 78 35 78 37 C 78 43 72 45 68 46 C 60 48 57 50 57 56 C 57 64 63 68 74 68 H 78 V 61 H 73 C 67 61 64 59 64 56 C 64 52 69 50 74 48 C 78 46 84 43 84 37 C 84 30 78 26 69 26 H 57 Z"
          fill="#2A2C2D"
        />
      </svg>

      {/* Typography: Official Minerals Solutions Wordmark */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`text-lg sm:text-xl font-extrabold tracking-tight uppercase ${textColor} transition-colors group-hover:text-[#BE2323]`}
        >
          Minerals <span className="text-[#BE2323]">Solutions</span>
        </span>
        {showTagline && (
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${subtextColor}`}
          >
            Turnkey Industrial Plants &amp; Dryers
          </span>
        )}
      </div>
    </Link>
  );
}

