import { parseMarkdown } from '../../utils/markdown';
import type { BlogPageData } from '../types';

export const blogMap: Record<string, BlogPageData> = {};

let markdownFiles: Record<string, any> = {};

const proc = (globalThis as any).process;

if (typeof (import.meta as any).glob === 'function') {
  markdownFiles = (import.meta as any).glob('/src/content/blogs/*.md', { query: '?raw', eager: true });
} else if (typeof proc !== 'undefined' && proc.cwd) {
  try {
    const fsMod = 'fs';
    const pathMod = 'path';
    const fs = await import(fsMod);
    const path = await import(pathMod);
    const dir = path.resolve(proc.cwd(), 'src/content/blogs');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.md'));
      files.forEach((file: string) => {
        const fullPath = path.join(dir, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        markdownFiles[`/src/content/blogs/${file}`] = content;
      });
    }
  } catch (err) {
    // Fallback if fs not available
  }
}

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

