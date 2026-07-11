import { allContentMaps } from '../data/seoRegistry';
import type { BaseSEOData } from '../data/types';

const mapTypeToKey: Record<string, keyof typeof allContentMaps> = {
  services: 'services',
  technologies: 'technologies',
  blog: 'blogs',
  guides: 'guides',
  comparisons: 'comparisons',
  industries: 'industries',
  'case-studies': 'case-studies',
  resources: 'resources',
  'cost-pages': 'cost-pages',
  'faq-hub': 'faq-hub',
  // alternative naming conventions
  service: 'services',
  technology: 'technologies',
  blogs: 'blogs',
  guide: 'guides',
  comparison: 'comparisons',
  industry: 'industries',
  'case-study': 'case-studies',
  resource: 'resources',
  cost: 'cost-pages',
  faq: 'faq-hub'
};

export interface RelatedItem {
  id: string;
  title: string;
  desc?: string;
  url: string;
}

/**
 * Smart Dynamic Internal Linking Engine
 * Calculates a semantic score between the active page and candidates of target type.
 */
export function getRelatedContent(
  currentSlug: string,
  currentTags: string[] = [],
  currentCategory: string = '',
  relatedTo: string[] = [],
  targetContentType: string,
  limit: number = 3
): RelatedItem[] {
  const registryKey = mapTypeToKey[targetContentType];
  if (!registryKey) return [];

  const targetMap = allContentMaps[registryKey] as Record<string, BaseSEOData>;
  if (!targetMap) return [];

  const candidates: { page: BaseSEOData; score: number }[] = [];

  for (const [slug, page] of Object.entries(targetMap)) {
    if (slug === currentSlug) continue;

    let score = 0;

    // 1. Explicit connection via relatedTo array (either direction)
    if (relatedTo.includes(slug) || (page.relatedTo && page.relatedTo.includes(currentSlug))) {
      score += 15;
    }

    // 2. Shared tags intersection
    const lowerCurrentTags = currentTags.map(t => t.toLowerCase());
    
    if (lowerCurrentTags.length > 0) {
      if (page.keywords) {
        const pageKeywords = page.keywords.map(k => k.toLowerCase());
        const intersection = lowerCurrentTags.filter(t => pageKeywords.includes(t));
        score += intersection.length * 3;
      }
      if (page.tags) {
        const pageTags = page.tags.map(t => t.toLowerCase());
        const intersection = lowerCurrentTags.filter(t => pageTags.includes(t));
        score += intersection.length * 3;
      }
    }

    // 3. Category overlap
    if (currentCategory && page.category && currentCategory.toLowerCase() === page.category.toLowerCase()) {
      score += 2;
    }

    candidates.push({ page, score });
  }

  // Sort by score descending, then alphabetically by title
  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.page.title.localeCompare(b.page.title);
  });

  return candidates.slice(0, limit).map(({ page }) => {
    let url = `/${page.slug}`;
    if (registryKey === 'services') url = `/services/${page.slug}`;
    else if (registryKey === 'technologies') url = `/technologies/${page.slug}`;
    else if (registryKey === 'industries') url = `/industries/${page.slug}`;
    else if (registryKey === 'guides') url = `/guides/${page.slug}`;
    else if (registryKey === 'blogs') url = `/blog/${page.slug}`;
    else if (registryKey === 'resources') url = `/resources/${page.slug}`;
    else if (registryKey === 'case-studies') url = `/case-studies/${page.slug}`;
    else if (registryKey === 'cost-pages') url = `/cost/${page.slug}`;
    else if (registryKey === 'faq-hub') url = `/faq/${page.slug}`;

    return {
      id: page.slug,
      title: page.title.split('|')[0].trim(),
      desc: page.description,
      url
    };
  });
}
