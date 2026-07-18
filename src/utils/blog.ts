import { blogMap } from '../data/blogs';
import type { BlogPageData } from '../data/types';

/**
 * Retrieves all blog posts from the map, sorted by date in descending order.
 */
export function getAllBlogs(): BlogPageData[] {
  return Object.values(blogMap).sort((a, b) => {
    const dateA = new Date(a.datePublished || '').getTime();
    const dateB = new Date(b.datePublished || '').getTime();
    return dateB - dateA;
  });
}

/**
 * Retrieves a single blog post by its slug.
 */
export function getBlogBySlug(slug: string): BlogPageData | undefined {
  return blogMap[slug];
}

/**
 * Retrieves related posts based on matching tags or category, excluding the current post.
 */
export function getRelatedBlogs(currentBlog: BlogPageData, limit: number = 3): BlogPageData[] {
  const all = getAllBlogs().filter(blog => blog.slug !== currentBlog.slug);
  
  return all.map(blog => {
    let score = 0;
    // Boost score if category matches
    if (blog.category === currentBlog.category) {
      score += 5;
    }
    // Boost score for matching tags
    const commonTags = (blog.tags || []).filter(tag => (currentBlog.tags || []).includes(tag));
    score += commonTags.length * 2;

    return { blog, score };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .map(item => item.blog)
  .slice(0, limit);
}

/**
 * Returns chronological navigation posts (previous and next) relative to the current post.
 */
export function getAdjacentBlogs(currentBlog: BlogPageData): { prev: BlogPageData | null; next: BlogPageData | null } {
  const sorted = getAllBlogs();
  const currentIndex = sorted.findIndex(blog => blog.slug === currentBlog.slug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // Descending order, so index - 1 is newer (next) and index + 1 is older (prev)
  const next = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const prev = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return { prev, next };
}
