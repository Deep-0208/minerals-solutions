import type { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
          'FacebookBot',
          'GoogleOther',
        ],
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'Bytespider',
          'CCBot',
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
        ],
        disallow: ['/'],
      },
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
