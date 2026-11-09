import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyContactBar } from '@/components/common/StickyContactBar';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <StickyContactBar />
      <Footer />
    </div>
  );
}

