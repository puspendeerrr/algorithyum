import type { MetadataRoute } from 'next';
import { seoMap } from '../data/seoData';
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
} from '../data/seoRegistry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://algorithyum.in';
  const currentDate = new Date();

  const entries: MetadataRoute.Sitemap = [];
  const addedUrls = new Set<string>();

  // Helper to add URL with deduplication and safe Date parsing
  const addEntry = (
    path: string,
    priority: number,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    lastModified?: string | Date
  ) => {
    const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
    const url = `${baseUrl}${cleanPath}`;
    if (addedUrls.has(url)) return;
    addedUrls.add(url);

    let parsedDate = currentDate;
    if (lastModified) {
      const d = new Date(lastModified);
      if (!isNaN(d.getTime())) {
        parsedDate = d;
      }
    }

    entries.push({
      url,
      lastModified: parsedDate,
      changeFrequency,
      priority,
    });
  };

  // 1. Static core pages from seoMap
  Object.keys(seoMap).forEach((path) => {
    if (path === '/sitemap' || path === '/404') return; // Exclude HTML sitemap & error pages

    let priority = 0.6;
    let changeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changeFreq = 'daily';
    } else if (['/services', '/technologies', '/industries', '/solutions', '/blog', '/guides'].includes(path)) {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (['/about', '/careers', '/contact'].includes(path)) {
      priority = 0.6;
      changeFreq = 'monthly';
    } else if (['/privacy', '/terms', '/cookies'].includes(path)) {
      priority = 0.3;
      changeFreq = 'yearly';
    }

    addEntry(path, priority, changeFreq);
  });

  // 2. Dynamic Services
  Object.keys(serviceMap).forEach((id) => {
    addEntry(`/services/${id}`, 0.85, 'weekly');
  });

  // 3. Dynamic Technologies
  Object.keys(technologyMap).forEach((id) => {
    addEntry(`/technologies/${id}`, 0.8, 'monthly');
  });

  // 4. Dynamic Industries
  Object.keys(industryMap).forEach((id) => {
    addEntry(`/industries/${id}`, 0.8, 'monthly');
  });

  // 5. Dynamic Comparisons
  Object.keys(comparisonMap).forEach((id) => {
    addEntry(`/${id}`, 0.8, 'monthly');
  });

  // 6. Dynamic Guides
  Object.entries(guideMap).forEach(([id, data]: [string, any]) => {
    const lastMod = data.dateUpdated || data.datePublished || currentDate;
    addEntry(`/guides/${id}`, 0.8, 'monthly', lastMod);
  });

  // 7. Dynamic Blogs
  Object.entries(blogMap).forEach(([id, data]: [string, any]) => {
    const lastMod = data.dateUpdated || data.datePublished || currentDate;
    addEntry(`/blog/${id}`, 0.75, 'monthly', lastMod);
  });

  // 8. Dynamic Case Studies
  Object.keys(caseStudyMap).forEach((id) => {
    addEntry(`/case-studies/${id}`, 0.7, 'monthly');
  });

  // 9. Dynamic Resources
  Object.keys(resourceMap).forEach((id) => {
    addEntry(`/resources/${id}`, 0.7, 'monthly');
  });

  // 10. Dynamic Cost Guides
  Object.keys(costPageMap).forEach((id) => {
    addEntry(`/cost/${id}`, 0.7, 'monthly');
  });

  // 11. Dynamic FAQ Hub Pages
  Object.keys(faqHubMap).forEach((id) => {
    addEntry(`/faq/${id}`, 0.7, 'monthly');
  });

  return entries;
}
