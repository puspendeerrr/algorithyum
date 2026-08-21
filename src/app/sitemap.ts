import type { MetadataRoute } from 'next';
import { getSitemapEntries } from '@/lib/sitemap/sitemapEngine';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getSitemapEntries();
  const currentDate = new Date();

  return entries.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified || currentDate,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
