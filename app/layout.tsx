import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import { JsonLd } from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: 'MS | Innovative Ideas. Powerful Solutions.',
    template: '%s | MS',
  },
  description:
    'We build modern, scalable digital experiences that help businesses move forward. MS provides end-to-end engineering, web and mobile development, and turnkey solutions.',
  applicationName: 'MS',
  icons: {
    icon: '/images/brand/logo-transparent-thumb.webp',
    apple: '/images/brand/logo-md.webp',
  },
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
    title: 'MS | Innovative Ideas. Powerful Solutions.',
    description:
      'We build modern, scalable digital experiences that help businesses move forward.',
    url: company.siteUrl,
    siteName: 'MS',
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
  themeColor: '#E10613',
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
    name: 'MS - Minerals Solutions',
    legalName: company.legalName,
    url: company.siteUrl,
    logo: `${company.siteUrl}/images/brand/logo.png`,
    image: `${company.siteUrl}/images/brand/logo.png`,
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
      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-white text-[#171717] antialiased selection:bg-[#E10613] selection:text-white flex flex-col font-sans`}
      >
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E10613] focus:text-white focus:font-bold focus:rounded-full focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
