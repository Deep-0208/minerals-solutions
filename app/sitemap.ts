import type { MetadataRoute } from 'next';
import { company } from '@/data/company';
import sitemapRoutes from '@/data/sitemap-routes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.siteUrl;

  return sitemapRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(`${route.lastModified}T00:00:00.000Z`),
  }));
}
