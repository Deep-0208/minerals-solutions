import type { NextConfig } from 'next';
import path from 'path';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  compress: true,
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname, '..'),
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5.imimg.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/products/rotary-dryers/',
        destination: '/products/industrial-rotary-dryers/',
        permanent: true,
      },
      {
        source: '/products/rotary-dryers/triple-pass-dryer/',
        destination: '/products/industrial-rotary-dryers/triple-pass-dryer/',
        permanent: true,
      },
      {
        source: '/products/rotary-dryers/sand-dryer/',
        destination: '/products/industrial-rotary-dryers/sand-dryer/',
        permanent: true,
      },
      {
        source: '/products/rotary-dryers/chemical-powder-dryer/',
        destination: '/products/industrial-rotary-dryers/chemical-powder-dryer/',
        permanent: true,
      },
      {
        source: '/rotary-dryer-manufacturer-ahmedabad/',
        destination: '/products/industrial-rotary-dryers/',
        permanent: true,
      },
      {
        source: '/sand-dryer-with-hot-air-generator/',
        destination: '/products/industrial-rotary-dryers/sand-dryer/',
        permanent: true,
      },
      {
        source: '/saw-dust-dryer-machine/',
        destination: '/products/industrial-rotary-dryers/#configurations',
        permanent: true,
      },
      {
        source: '/rotary-calciner-manufacturer/',
        destination: '/products/industrial-rotary-dryers/#configurations',
        permanent: true,
      },
      {
        source: '/products/granulation-pellet-plants/',
        destination: '/products/fertilizer-granulation-plants/',
        permanent: true,
      },
      {
        source: '/fertilizer-granulation-plant-manufacturer/',
        destination: '/products/fertilizer-granulation-plants/',
        permanent: true,
      },
      {
        source: '/disc-pan-granulator-machine/',
        destination: '/products/fertilizer-granulation-plants/#machinery',
        permanent: true,
      },
      {
        source: '/rotary-drum-granulator-plant/',
        destination: '/products/fertilizer-granulation-plants/#machinery',
        permanent: true,
      },
      {
        source: '/organic-fertilizer-granulation-plant/',
        destination: '/products/fertilizer-granulation-plants/#process',
        permanent: true,
      },
      {
        source: '/products/mineral-processing/',
        destination: '/products/sand-washing-plants/',
        permanent: true,
      },
      {
        source: '/sand-washing-plant-manufacturer-gujarat/',
        destination: '/products/sand-washing-plants/',
        permanent: true,
      },
      {
        source: '/hydrocyclone-sand-washing-plant/',
        destination: '/products/sand-washing-plants/#machinery',
        permanent: true,
      },
      {
        source: '/bucket-wheel-sand-washer/',
        destination: '/products/sand-washing-plants/#machinery',
        permanent: true,
      },
      {
        source: '/spiral-screw-sand-classifier/',
        destination: '/products/sand-washing-plants/#machinery',
        permanent: true,
      },
      {
        source: '/products/conveyor-systems/',
        destination: '/products/industrial-conveyors-spares/',
        permanent: true,
      },
      {
        source: '/industrial-conveyor-belt-system-manufacturer/',
        destination: '/products/industrial-conveyors-spares/',
        permanent: true,
      },
      {
        source: '/conveyor-pulleys-head-tail-snub/',
        destination: '/products/industrial-conveyors-spares/#conveyors',
        permanent: true,
      },
      {
        source: '/conveyor-rollers-idlers-manufacturer/',
        destination: '/products/industrial-conveyors-spares/#conveyors',
        permanent: true,
      },
      {
        source: '/manufacturing-facility/',
        destination: '/manufacturing/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
