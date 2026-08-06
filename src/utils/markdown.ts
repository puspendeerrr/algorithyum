import type { ContentBlock } from '../data/types';

export interface FrontMatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  canonical?: string;
  readingTime: string;
  faq?: { q: string; a: string }[];
}

export interface ParsedMarkdown {
  frontMatter: FrontMatter;
  content: string;
  blocks: ContentBlock[];
}

export function parseMarkdown(rawContent: string): ParsedMarkdown {
  const lines = rawContent.split(/\r?\n/);
  let inFrontMatter = false;
  let hasParsedFM = false;
  const fmLines: string[] = [];
  const bodyLines: string[] = [];

  for (const line of lines) {
    if (line.trim() === '---') {
      if (!inFrontMatter && !hasParsedFM) {
        inFrontMatter = true;
      } else if (inFrontMatter) {
        inFrontMatter = false;
        hasParsedFM = true;
      }
    } else {
      if (inFrontMatter) {
        fmLines.push(line);
      } else {
        bodyLines.push(line);
      }
    }
  }

  const frontMatter = parseFrontMatter(fmLines.join('\n'));
  const content = bodyLines.join('\n').trim();
  const blocks = parseMarkdownToBlocks(content, frontMatter);

  return {
    frontMatter,
    content,
    blocks
  };
}

function parseFrontMatter(yamlString: string): FrontMatter {
  const lines = yamlString.split('\n');
  const result: any = {
    title: '',
    description: '',
    slug: '',
    date: '',
    author: '',
    category: '',
    tags: [],
    image: '',
    readingTime: '5 min read'
  };

  let faqList: { q: string; a: string }[] = [];
  let currentFaqItem: { q?: string; a?: string } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    let key = line.substring(0, colonIdx).trim();
    if (key.startsWith('-')) {
      key = key.substring(1).trim();
    }
    const val = line.substring(colonIdx + 1).trim();

    if (key === 'q' || key === 'question') {
      if (currentFaqItem && currentFaqItem.q && currentFaqItem.a) {
        faqList.push(currentFaqItem as { q: string; a: string });
      }
      currentFaqItem = { q: cleanValue(val) };
      continue;
    } else if (key === 'a' || key === 'answer') {
      if (currentFaqItem) {
        currentFaqItem.a = cleanValue(val);
      }
      continue;
    }

    if (key === 'faq') {
      faqList = [];
      continue;
    }

    if (key === 'tags') {
      if (val.startsWith('[') && val.endsWith(']')) {
        result.tags = val.slice(1, -1).split(',').map(s => cleanValue(s));
      } else {
        result.tags = val.split(',').map(s => cleanValue(s));
      }
    } else {
      result[key] = cleanValue(val);
    }
  }

  // Push final FAQ item if existing
  if (currentFaqItem && currentFaqItem.q && currentFaqItem.a) {
    faqList.push(currentFaqItem as { q: string; a: string });
  }

  if (faqList.length > 0) {
    result.faq = faqList;
  }

  return result as FrontMatter;
}

function cleanValue(val: string): string {
  let cleaned = val.trim();
  // Strip outer quotes
  if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
    cleaned = cleaned.substring(1, cleaned.length - 1);
  }
  return cleaned;
}

function parseMarkdownToBlocks(markdown: string, frontMatter: FrontMatter): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  
  let currentBlockType: 'text' | 'code' | 'list' | null = null;
  let currentTitle = '';
  let currentContentLines: string[] = [];
  let currentCodeLanguage = '';
  let currentListItems: string[] = [];

  const flush = () => {
    const id = `block-${blocks.length}`;
    if (currentBlockType === 'text') {
      if (currentContentLines.length > 0 || currentTitle) {
        blocks.push({
          id,
          type: 'text',
          title: currentTitle || undefined,
          content: currentContentLines.join('\n\n').trim()
        });
      }
    } else if (currentBlockType === 'code') {
      blocks.push({
        id,
        type: 'code-block',
        title: currentTitle || undefined,
        language: currentCodeLanguage || 'text',
        code: currentContentLines.join('\n')
      });
    } else if (currentBlockType === 'list') {
      if (currentListItems.length > 0) {
        blocks.push({
          id,
          type: 'checklist',
          title: currentTitle || undefined,
          items: currentListItems
        });
      }
    }
    currentContentLines = [];
    currentListItems = [];
    currentTitle = '';
    currentBlockType = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Handle code blocks
    if (trimmed.startsWith('```')) {
      if (currentBlockType === 'code') {
        flush();
      } else {
        flush();
        currentBlockType = 'code';
        currentCodeLanguage = trimmed.substring(3).trim();
      }
      continue;
    }

    if (currentBlockType === 'code') {
      currentContentLines.push(line);
      continue;
    }

    // Handle Headings
    if (trimmed.startsWith('#')) {
      flush();
      const levelMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (levelMatch) {
        const level = levelMatch[1].length;
        const text = levelMatch[2].trim();
        if (level === 1) {
          blocks.push({
            id: 'hero',
            type: 'hero',
            title: text,
            subtitle: frontMatter.description
          });
        } else {
          currentTitle = text;
          currentBlockType = 'text';
        }
      }
      continue;
    }

    // Handle Lists
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      if (currentBlockType !== 'list') {
        flush();
        currentBlockType = 'list';
      }
      currentListItems.push(trimmed.substring(2).trim());
      continue;
    }

    // Paragraph text
    if (trimmed) {
      if (currentBlockType !== 'text') {
        flush();
        currentBlockType = 'text';
      }
      currentContentLines.push(trimmed);
    } else {
      if (currentBlockType === 'list') {
        flush();
      }
    }
  }

  flush();

  // If we don't have a hero block, insert one at the start using frontmatter
  const hasHero = blocks.some(b => b.type === 'hero');
  if (!hasHero) {
    blocks.unshift({
      id: 'hero',
      type: 'hero',
      title: frontMatter.title.split('|')[0].trim(),
      subtitle: frontMatter.description
    });
  }

  // Append FAQ block if present in frontmatter
  if (frontMatter.faq && frontMatter.faq.length > 0) {
    blocks.push({
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: frontMatter.faq
    });
  }

  // Append CTA block to satisfy build check
  blocks.push({
    id: 'cta',
    type: 'cta',
    headline: 'Secure & Optimize Your Enterprise Platform',
    desc: 'Our engineering group designs resilient architectures, implements zero-trust systems, and executes technical SEO upgrades.',
    buttonLabel: 'Consult with Our Engineers',
    buttonAction: 'consultation'
  });

  return blocks;
}
