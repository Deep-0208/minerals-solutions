'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E7EB] shadow-[0_4px_20px_rgba(17,17,17,0.06)] h-[76px]'
          : 'bg-white border-b border-[#E7E7EB]/60 h-[84px]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-180 relative py-1 hover:text-[#E10613] ${
                  isActive ? 'text-[#E10613]' : 'text-[#171717]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E10613] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button href="#contact" variant="primary" size="md">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center lg:hidden gap-3">
          <Button href="#contact" variant="primary" size="sm">
            Get Started
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#171717] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#E10613]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] z-50 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-b border-[#E7E7EB] p-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-semibold text-[#171717] hover:text-[#E10613] border-b border-neutral-100 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
