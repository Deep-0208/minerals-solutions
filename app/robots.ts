import type { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'cohere-ai',
        ],
        allow: ['/', '/_next/static/', '/_next/image'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
