import React from 'react';
import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Minerals Solutions | Zak GIDC Dahegam Factory',
  },
  description:
    'Contact Minerals Solutions at Zak GIDC, Dahegam. Call +91 6352453050 or email sales@mineralssolution.in for direct industrial machinery quotes in Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/contact/`,
  },
  openGraph: {
    title: 'Contact Minerals Solutions | Zak GIDC Dahegam Factory',
    description:
      'Reach our fabrication works directly for equipment quotes, workshop visits, and engineering support in Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/contact/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Minerals Solutions | Zak GIDC Dahegam Factory',
    description:
      'Connect with Minerals Solutions engineering team for rotary dryers, sand washing plants, and granulator quotations.',
    images: [defaultTwitterImage],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${company.siteUrl}/contact/#webpage`,
    url: `${company.siteUrl}/contact/`,
    name: 'Contact Minerals Solutions Works',
    description:
      'Direct engineering desk and factory contact points for Minerals Solutions in Zak GIDC, Dahegam, Gujarat.',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${company.siteUrl}/#organization`,
      name: company.legalName,
      telephone: company.telephones[0],
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.streetAddress,
        addressLocality: company.address.locality,
        addressRegion: company.address.regionName,
        postalCode: company.address.postalCode,
        addressCountry: company.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: company.geo.lat,
        longitude: company.geo.lng,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: company.telephones[0],
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
        },
        {
          '@type': 'ContactPoint',
          telephone: company.telephones[1],
          contactType: 'technical support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
        },
      ],
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
          name: 'Contact Us',
          item: `${company.siteUrl}/contact/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
