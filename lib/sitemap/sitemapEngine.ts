import { seoMap } from '../../src/data/seoData';
import {
  serviceMap,
  technologyMap,
  industryMap,
  comparisonMap,
  guideMap,
  blogMap,
  caseStudyMap,
  resourceMap,
  costPageMap,
  faqHubMap,
} from '../../src/data/seoRegistry';

export interface SitemapImage {
  loc: string;
  title: string;
  caption: string;
}

export interface SitemapEntry {
  url: string;
  path: string;
  title: string;
  description: string;
  category:
    | 'main'
    | 'services'
    | 'erp'
    | 'mobile-apps'
    | 'ai'
    | 'seo'
    | 'technologies'
    | 'industries'
    | 'blog'
    | 'guides'
    | 'resources'
    | 'case-studies'
    | 'faq'
    | 'cost'
    | 'comparisons'
    | 'legal';
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified: Date;
  images: SitemapImage[];
  blocks?: any[];
}

export const BASE_URL = 'https://algorithyum.in';
export const DEFAULT_LOGO = 'https://algorithyum.in/logo.svg';

const DEFAULT_MOD_DATE = new Date('2026-02-01T00:00:00Z');
const HOMEPAGE_MOD_DATE = new Date('2026-08-21T00:00:00Z');
const LEGAL_MOD_DATE = new Date('2026-01-15T00:00:00Z');

function parseDateSafely(rawDate?: string | Date): Date {
  if (!rawDate) return DEFAULT_MOD_DATE;
  const parsed = new Date(rawDate);
  return isNaN(parsed.getTime()) ? DEFAULT_MOD_DATE : parsed;
}

export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const addedPaths = new Set<string>();

  const add = (entry: Omit<SitemapEntry, 'url'>) => {
    const cleanPath = entry.path === '/' ? '' : entry.path.replace(/\/$/, '');
    const pathKey = cleanPath === '' ? '/' : cleanPath;
    if (addedPaths.has(pathKey)) return;
    addedPaths.add(pathKey);

    const url = `${BASE_URL}${cleanPath}`;
    entries.push({
      ...entry,
      path: pathKey,
      url,
    });
  };

  // 1. Static & Legal Pages from seoMap
  Object.entries(seoMap).forEach(([path, data]) => {
    if (path === '/404' || path === '/not-found') return;

    let priority = 0.6;
    let changeFreq: SitemapEntry['changeFrequency'] = 'monthly';
    let category: SitemapEntry['category'] = 'main';
    let lastModified = DEFAULT_MOD_DATE;

    if (path === '/') {
      priority = 1.0;
      changeFreq = 'daily';
      category = 'main';
      lastModified = HOMEPAGE_MOD_DATE;
    } else if (['/services', '/technologies', '/industries', '/solutions', '/blog', '/guides'].includes(path)) {
      priority = 0.9;
      changeFreq = 'weekly';
      category = 'main';
    } else if (['/about', '/careers', '/contact', '/sitemap'].includes(path)) {
      priority = 0.6;
      changeFreq = 'monthly';
      category = 'main';
    } else if (['/privacy', '/terms', '/cookies', '/security-policy', '/accessibility', '/editorial-policy'].includes(path)) {
      priority = 0.3;
      changeFreq = 'yearly';
      category = 'legal';
      lastModified = LEGAL_MOD_DATE;
    }

    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path,
      title: data.title,
      description: data.description,
      category,
      priority,
      changeFrequency: changeFreq,
      lastModified,
      images,
    });
  });

  // 2. Services from serviceMap
  Object.entries(serviceMap).forEach(([id, data]) => {
    const path = `/services/${id}`;
    let category: SitemapEntry['category'] = 'services';
    if (id === 'erp' || id.includes('erp')) {
      category = 'erp';
    } else if (id.includes('app-development') || id.includes('mobile')) {
      category = 'mobile-apps';
    } else if (id.startsWith('ai-') || id.includes('ai')) {
      category = 'ai';
    } else if (id === 'seo' || id.includes('seo')) {
      category = 'seo';
    }

    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path,
      title: data.title,
      description: data.description,
      category,
      priority: 0.85,
      changeFrequency: 'weekly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 3. Technologies from technologyMap
  Object.entries(technologyMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/technologies/${id}`,
      title: data.title,
      description: data.description,
      category: 'technologies',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 4. Industries from industryMap
  Object.entries(industryMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/industries/${id}`,
      title: data.title,
      description: data.description,
      category: 'industries',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 5. Comparisons from comparisonMap
  Object.entries(comparisonMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/${id}`,
      title: data.title,
      description: data.description,
      category: 'comparisons',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 6. Guides from guideMap
  Object.entries(guideMap).forEach(([id, data]: [string, any]) => {
    const lastMod = parseDateSafely(data.dateUpdated || data.datePublished);
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/guides/${id}`,
      title: data.title,
      description: data.description,
      category: 'guides',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: lastMod,
      images,
      blocks: data.blocks,
    });
  });

  // 7. Blogs from blogMap
  Object.entries(blogMap).forEach(([id, data]: [string, any]) => {
    const lastMod = parseDateSafely(data.dateUpdated || data.datePublished);
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/blog/${id}`,
      title: data.title,
      description: data.description,
      category: 'blog',
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: lastMod,
      images,
      blocks: data.blocks,
    });
  });

  // 8. Case Studies from caseStudyMap
  Object.entries(caseStudyMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/case-studies/${id}`,
      title: data.title,
      description: data.description,
      category: 'case-studies',
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 9. Resources from resourceMap
  Object.entries(resourceMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/resources/${id}`,
      title: data.title,
      description: data.description,
      category: 'resources',
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 10. Cost Pages from costPageMap
  Object.entries(costPageMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/cost/${id}`,
      title: data.title,
      description: data.description,
      category: 'cost',
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  // 11. FAQ Hub Pages from faqHubMap
  Object.entries(faqHubMap).forEach(([id, data]) => {
    const images: SitemapImage[] = [
      {
        loc: data.ogImage || DEFAULT_LOGO,
        title: data.title.split('|')[0].trim(),
        caption: data.description,
      },
    ];

    add({
      path: `/faq/${id}`,
      title: data.title,
      description: data.description,
      category: 'faq',
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: DEFAULT_MOD_DATE,
      images,
      blocks: data.blocks,
    });
  });

  return entries;
}

export function getSitemapEntriesGrouped(): Record<SitemapEntry['category'], SitemapEntry[]> {
  const entries = getSitemapEntries();
  const groups: Record<SitemapEntry['category'], SitemapEntry[]> = {
    main: [],
    services: [],
    erp: [],
    'mobile-apps': [],
    ai: [],
    seo: [],
    technologies: [],
    industries: [],
    blog: [],
    guides: [],
    resources: [],
    'case-studies': [],
    faq: [],
    cost: [],
    comparisons: [],
    legal: [],
  };

  entries.forEach((entry) => {
    if (groups[entry.category]) {
      groups[entry.category].push(entry);
    }
  });

  return groups;
}

export function getSitemapMap(): Record<string, SitemapEntry> {
  const entries = getSitemapEntries();
  const map: Record<string, SitemapEntry> = {};
  entries.forEach((e) => {
    map[e.path] = e;
  });
  return map;
}
