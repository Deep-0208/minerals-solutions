import type { Metadata, Viewport } from 'next';
import './globals.css';
import { company } from '@/data/company';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: 'Minerals Solutions | Industrial Rotary Dryers & Turnkey Mineral Plants',
    template: '%s | Minerals Solutions',
  },
  description:
    'Minerals Solutions is a leading heavy industrial machinery manufacturer in Zak GIDC, Dahegam, Ahmedabad corridor, Gujarat. Specialized in industrial rotary dryers, sand washing plants, fertilizer granulators, and bulk conveyor systems.',
  applicationName: 'Minerals Solutions',
  authors: [{ name: company.proprietor, url: company.siteUrl }],
  creator: company.legalName,
  publisher: company.legalName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Minerals Solutions | Heavy Industrial Plants & Rotary Dryers',
    description:
      'Engineered industrial rotary dryers, sand washing plants, fertilizer granulators, and heavy conveyor belt systems manufactured in Gujarat, India.',
    url: company.siteUrl,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#BE2323',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.siteUrl}/#organization`,
    name: company.legalName,
    legalName: company.legalName,
    url: company.siteUrl,
    logo: `${company.siteUrl}/images/brand/logo.jpg`,
    image: `${company.siteUrl}/images/brand/logo.jpg`,
    telephone: company.telephones[0],
    email: company.email,
    taxID: company.gstin,
    founder: {
      '@type': 'Person',
      name: company.proprietor,
    },
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: company.sameAs,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#BE2323] selection:text-white flex flex-col font-sans">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#BE2323] focus:text-white focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}

