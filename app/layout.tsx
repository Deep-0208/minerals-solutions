import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import { JsonLd } from '@/components/seo/JsonLd';
import { WebMCPQuoteTool } from '@/components/seo/WebMCPQuoteTool';
import { AgentationClient } from '@/components/common/AgentationClient';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

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
    default: 'Minerals Solutions | Industrial Rotary Dryers & Heavy Machinery',
    template: '%s | Minerals Solutions',
  },
  description:
    'Minerals Solutions designs and manufactures industrial rotary dryers, fertilizer granulation plants, sand washing equipment, and heavy conveyor systems in Gujarat, India.',
  applicationName: 'Minerals Solutions',
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
    title: 'Minerals Solutions | Industrial Rotary Dryers & Heavy Machinery',
    description:
      'Minerals Solutions designs and manufactures industrial drying systems, fertilizer granulation plants, sand washing equipment, and bulk material handling solutions tailored to your process requirements.',
    url: company.siteUrl,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minerals Solutions | Industrial Rotary Dryers & Heavy Machinery',
    description:
      'Minerals Solutions designs and manufactures industrial drying systems, fertilizer granulation plants, sand washing equipment, and bulk material handling solutions tailored to your process requirements.',
    images: [defaultTwitterImage],
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
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      additionalType: 'https://schema.org/ManufacturingPlant',
      '@id': `${company.siteUrl}/#organization`,
      name: 'Minerals Solutions',
      legalName: company.legalName,
      url: company.siteUrl,
      logo: `${company.siteUrl}/images/brand/logo.png`,
      image: `${company.siteUrl}/images/brand/logo.png`,
      telephone: company.telephones[0],
      email: company.email,
      taxID: company.gstin,
      currenciesAccepted: 'INR, USD',
      paymentAccepted: 'Cash, Cheque, Wire Transfer (NEFT/RTGS), Letter of Credit (LC)',
      priceRange: '₹₹₹',
      knowsAbout: [
        'Industrial Rotary Drum Dryers',
        'Triple-Pass Concentric Rotary Dryers',
        'Thermodynamic Heat Balance Calculations',
        'Silica Sand & Mineral Drying Systems',
        'Bucket Wheel Sand Washing Plants',
        'Hydrocyclone Slurry Desliming & 75 Micron Recovery',
        'Bio-Fertilizer Disc Granulators',
        'Double Roller Compaction Granulators',
        'Industrial Trough Belt Conveyor Systems',
        'IS 2062 Grade B Structural Carbon Steel Fabrication',
        'Submerged Arc Welding (ASME Sec IX)',
        'Forged EN-8/EN-9 Trunnion Roller Induction Hardening',
      ],
      founder: {
        '@type': 'Person',
        '@id': `${company.siteUrl}/#vipulbhai-prajapati`,
        name: company.proprietor,
        jobTitle: 'Founder & Chief Fabrication Specialist',
        worksFor: {
          '@id': `${company.siteUrl}/#organization`,
        },
        knowsAbout: [
          'Heavy Industrial Machinery Fabrication',
          'Rotary Drum Dynamic Balancing',
          'Structural Steel Rolling',
        ],
      },
      employee: [
        {
          '@type': 'Person',
          '@id': `${company.siteUrl}/#p-amrutlal`,
          name: company.ceo,
          jobTitle: 'Chief Executive Officer & Mineral Thermal Systems Engineer',
          worksFor: {
            '@id': `${company.siteUrl}/#organization`,
          },
          knowsAbout: [
            'Thermodynamic Dryer Sizing',
            'Combustion Chamber Refractory Design',
            'Hydrocyclone Slurry Dynamics',
          ],
        },
      ],
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
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Gujarat' },
        { '@type': 'AdministrativeArea', name: 'Rajasthan' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      ],
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Industrial Machinery & Processing Equipment',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Industrial Rotary Dryers',
            url: `${company.siteUrl}/products/industrial-rotary-dryers/`,
          },
          {
            '@type': 'OfferCatalog',
            name: 'Sand Washing Plants',
            url: `${company.siteUrl}/products/sand-washing-plants/`,
          },
          {
            '@type': 'OfferCatalog',
            name: 'Fertilizer Granulation Plants',
            url: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
          },
          {
            '@type': 'OfferCatalog',
            name: 'Industrial Conveyors & Spares',
            url: `${company.siteUrl}/products/industrial-conveyors-spares/`,
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${company.siteUrl}/#website`,
      url: company.siteUrl,
      name: 'Minerals Solutions',
      description:
        'Gujarat manufacturer of industrial rotary drum dryers, sand washing plants, fertilizer granulators, and heavy material handling conveyors.',
      publisher: {
        '@id': `${company.siteUrl}/#organization`,
      },
      inLanguage: 'en-IN',
    },
  ];

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="alternate" type="text/plain" href={`${company.siteUrl}/llms.txt`} title="LLM Knowledge Graph" />
        <link rel="alternate" type="text/plain" href={`${company.siteUrl}/llms-full.txt`} title="Full Engineering Context" />
        <link rel="ai-catalog" type="application/ai-catalog+json" href={`${company.siteUrl}/.well-known/ai-catalog.json`} title="AI Agent Discovery Catalog" />
        <JsonLd data={rootSchema} />
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
        <WebMCPQuoteTool />
        <AgentationClient />
        <ScrollAnimation />
      </body>
    </html>
  );
}
