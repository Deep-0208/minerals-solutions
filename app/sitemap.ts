import type { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.siteUrl; // https://mineralssolution.in
  const now = new Date('2026-11-10T00:00:00.000Z');

  const productionRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products/', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/products/industrial-rotary-dryers/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/industrial-rotary-dryers/triple-pass-dryer/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/products/industrial-rotary-dryers/sand-dryer/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/products/industrial-rotary-dryers/chemical-powder-dryer/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/products/sand-washing-plants/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/fertilizer-granulation-plants/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/industrial-conveyors-spares/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/industries/', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/manufacturing/', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/about/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/request-quote/', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return productionRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

