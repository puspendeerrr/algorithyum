const fs = require('fs');
const path = require('path');

function cleanValue(val) {
  let cleaned = val.trim();
  if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
    cleaned = cleaned.substring(1, cleaned.length - 1);
  }
  return cleaned;
}

function parseFrontMatter(yamlString) {
  const lines = yamlString.split('\n');
  const result = {
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

  let faqList = [];
  let currentFaqItem = null;

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
        faqList.push(currentFaqItem);
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

  if (currentFaqItem && currentFaqItem.q && currentFaqItem.a) {
    faqList.push(currentFaqItem);
  }

  if (faqList.length > 0) {
    result.faq = faqList;
  }

  return result;
}

function parseMarkdownToBlocks(markdown, frontMatter) {
  const blocks = [];
  const lines = markdown.split(/\r?\n/);
  
  let currentBlockType = null;
  let currentTitle = '';
  let currentContentLines = [];
  let currentCodeLanguage = '';
  let currentListItems = [];

  const flush = () => {
    const id = `block-${blocks.length}`;
    if (currentBlockType === 'text') {
      const textContent = currentContentLines.join('\n\n').trim();
      if (textContent.length > 0) {
        blocks.push({
          id,
          type: 'text',
          title: currentTitle || undefined,
          content: textContent
        });
        currentTitle = '';
      }
    } else if (currentBlockType === 'code') {
      if (currentContentLines.length > 0) {
        blocks.push({
          id,
          type: 'code-block',
          title: currentTitle || undefined,
          language: currentCodeLanguage || 'text',
          code: currentContentLines.join('\n')
        });
        currentTitle = '';
      }
    } else if (currentBlockType === 'list') {
      if (currentListItems.length > 0) {
        blocks.push({
          id,
          type: 'checklist',
          title: currentTitle || undefined,
          items: currentListItems
        });
        currentTitle = '';
      }
    }
    currentContentLines = [];
    currentListItems = [];
    currentBlockType = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

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
          currentTitle = '';
        } else {
          currentTitle = text;
          currentBlockType = 'text';
        }
      }
      continue;
    }

    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      if (currentBlockType !== 'list') {
        flush();
        currentBlockType = 'list';
      }
      currentListItems.push(trimmed.substring(2).trim());
      continue;
    }

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

  const hasHero = blocks.some(b => b.type === 'hero');
  if (!hasHero) {
    blocks.unshift({
      id: 'hero',
      type: 'hero',
      title: frontMatter.title.split('|')[0].trim(),
      subtitle: frontMatter.description
    });
  }

  if (frontMatter.faq && frontMatter.faq.length > 0) {
    const hasExistingFaq = blocks.some(b => b.type === 'faq' || (b.title && b.title.toLowerCase().includes('frequently asked questions')));
    if (!hasExistingFaq) {
      blocks.push({
        id: 'faq',
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: frontMatter.faq
      });
    }
  }

  const hasRelated = blocks.some(b => 
    b.type === 'related-content' || 
    b.type === 'capabilities' || 
    b.type === 'use-cases'
  );
  if (!hasRelated) {
    blocks.push({
      id: 'related-content',
      type: 'related-content',
      title: 'Related Engineering Insights & Solutions',
      items: [
        { title: 'Custom Enterprise Software Solutions', url: '/services/software-development', category: 'Services' },
        { title: 'Artificial Intelligence & Agent Pipelines', url: '/services/ai-integration', category: 'Services' },
        { title: 'Software Redesign & Modernization', url: '/services/software-redesign', category: 'Services' }
      ]
    });
  }

  const existingCta = blocks.find(b => b.type === 'cta');
  if (!existingCta) {
    blocks.push({
      id: 'cta',
      type: 'cta',
      headline: 'Ready to Scale Your Enterprise Software Architecture?',
      desc: 'Contact our engineering team to discuss your technical requirements or consult with a lead solution architect today.',
      buttonLabel: 'Consult with Our Engineers',
      buttonAction: 'consultation'
    });
  }

  return blocks;
}

function parseMarkdown(rawContent) {
  const lines = rawContent.split(/\r?\n/);
  let inFrontMatter = false;
  let hasParsedFM = false;
  const fmLines = [];
  const bodyLines = [];

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

  return { frontMatter, content, blocks };
}

const blogDir = path.join(process.cwd(), 'src', 'content', 'blogs');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

const blogMap = {};

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseMarkdown(rawContent);
  const slug = parsed.frontMatter.slug || file.replace('.md', '');
  
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

const tsCode = `import type { BlogPageData } from '../types';

export const blogMap: Record<string, BlogPageData> = ${JSON.stringify(blogMap, null, 2)};
`;

const outputPath = path.join(process.cwd(), 'src', 'data', 'blogs', 'index.ts');
fs.writeFileSync(outputPath, tsCode, 'utf-8');
console.log('Successfully generated src/data/blogs/index.ts with ' + Object.keys(blogMap).length + ' articles!');
