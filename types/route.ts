export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface RouteSEO {
  title: string; // 50-60 characters
  description: string; // 140-160 characters
  keywords: readonly string[];
  canonical: string;
  ogImage?: string;
}

export interface CanonicalRoute {
  path: string; // Always with trailing slash: '/products/rotary-dryers/'
  label: string;
  priority: number;
  changeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  navGroup: 'home' | 'dryers' | 'washing' | 'fertilizer' | 'conveyors' | 'minerals' | 'company' | 'legal';
  pillarPath?: string;
  breadcrumbTrail: BreadcrumbItem[];
  seo: RouteSEO;
  pendingContent?: boolean;
}

