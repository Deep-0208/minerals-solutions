import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { RequestQuoteClient } from '@/components/quote/RequestQuoteClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Request Machinery Quotation | Minerals Solutions Gujarat',
  },
  description:
    'Request direct factory pricing & custom GA drawings for industrial rotary dryers, sand washing plants, and granulators from our Zak GIDC, Dahegam works.',
  alternates: {
    canonical: `${company.siteUrl}/request-quote/`,
  },
  openGraph: {
    title: 'Request Machinery Quotation | Minerals Solutions Gujarat',
    description:
      'Direct engineering quotation and plant sizing for rotary drum dryers, sand washing plants, fertilizer granulators, and conveyor systems at Zak GIDC.',
    url: `${company.siteUrl}/request-quote/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Machinery Quotation | Minerals Solutions Gujarat',
    description:
      'Submit your process parameters for rapid engineering pricing and GA drawings from Minerals Solutions fabrication works.',
    images: [defaultTwitterImage],
  },
};

export default function RequestQuotePage() {
  const quoteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${company.siteUrl}/request-quote/#webpage`,
    url: `${company.siteUrl}/request-quote/`,
    name: 'Request an Industrial Machinery Quotation',
    description:
      'Direct quotation and technical sizing request desk for industrial equipment manufactured by Minerals Solutions in Zak GIDC, Dahegam.',
    mainEntity: {
      '@type': 'Service',
      name: 'Custom Industrial Machinery Fabrication & Sizing Quotation',
      provider: {
        '@id': `${company.siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${company.siteUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Request a Quote',
          item: `${company.siteUrl}/request-quote/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={quoteSchema} />
      <Suspense fallback={null}>
        <RequestQuoteClient />
      </Suspense>
    </>
  );
}
