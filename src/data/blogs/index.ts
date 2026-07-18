import { parseMarkdown } from '../../utils/markdown';
import type { BlogPageData } from '../types';

// Load all markdown files eagerly as raw string modules
const markdownFiles = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', eager: true }) as Record<string, any>;

export const blogMap: Record<string, BlogPageData> = {};

Object.entries(markdownFiles).forEach(([filePath, moduleObj]) => {
  const rawContent = typeof moduleObj === 'string' ? moduleObj : moduleObj.default || '';
  const parsed = parseMarkdown(rawContent);
  const slug = parsed.frontMatter.slug || filePath.split('/').pop()?.replace('.md', '') || '';
  
  // Construct BlogPageData object matching dynamic block page structure
  blogMap[slug] = {
    slug,
    title: parsed.frontMatter.title,
    description: parsed.frontMatter.description,
    ogImage: parsed.frontMatter.image,
    keywords: parsed.frontMatter.tags,
    tags: parsed.frontMatter.tags,
    pageType: 'blog',
    category: parsed.frontMatter.category,
    author: parsed.frontMatter.author,
    datePublished: parsed.frontMatter.date,
    readTime: parsed.frontMatter.readingTime,
    blocks: parsed.blocks
  };
});
