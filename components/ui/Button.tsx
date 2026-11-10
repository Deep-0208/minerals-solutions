import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'outline' | 'whatsapp' | 'ghost' | 'tertiary';
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
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-full tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm px-6 py-3 min-h-[48px] gap-2',
    lg: 'text-base px-8 py-3.5 min-h-[52px] gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#E10613] hover:bg-[#BC0711] text-white hover:-translate-y-0.5 shadow-sm active:translate-y-0 focus:ring-[#E10613]',
    secondary:
      'bg-transparent hover:bg-neutral-100 text-[#171717] border border-[#222222] hover:-translate-y-0.5 active:translate-y-0 focus:ring-neutral-400',
    'secondary-dark':
      'bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0 focus:ring-white',
    outline:
      'border border-[#E7E7EB] hover:border-neutral-400 bg-white hover:bg-neutral-50 text-[#171717] focus:ring-neutral-300',
    whatsapp:
      'bg-[#16794B] hover:bg-[#12633D] text-white hover:-translate-y-0.5 shadow-sm focus:ring-[#16794B]',
    ghost:
      'text-[#171717] hover:text-[#E10613] hover:bg-neutral-100 focus:ring-neutral-200',
    tertiary:
      'bg-transparent text-[#E10613] hover:text-[#BC0711] p-0 font-semibold focus:ring-0 rounded-none inline-flex items-center gap-1.5 hover:underline',
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
          {children}
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
