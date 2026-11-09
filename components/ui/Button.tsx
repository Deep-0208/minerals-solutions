import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#BE2323] hover:bg-[#9E1B1B] text-white focus:ring-[#BE2323] shadow-sm active:bg-[#851616]',
    secondary:
      'bg-[#2A2C2D] hover:bg-[#1E2124] text-white focus:ring-[#2A2C2D] shadow-sm',
    outline:
      'border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 focus:ring-slate-400',
    whatsapp:
      'bg-[#16A34A] hover:bg-[#15803D] text-white focus:ring-[#16A34A] shadow-sm',
    ghost:
      'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-300',
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

