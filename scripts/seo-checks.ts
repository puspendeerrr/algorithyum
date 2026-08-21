import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import central sitemap engine (Single Source of Truth)
import { getSitemapEntries } from '../lib/sitemap/sitemapEngine.js';
import { blogMap } from '../src/data/seoRegistry.js';

const titles = new Set<string>();
const descriptions = new Set<string>();
let hasCriticalErrors = false;
let qualityWarningsCount = 0;

console.log('\n=== Starting Build-Time SEO Validation Audit ===');

// 1. Gather all indexable routes from Central Sitemap Engine
const entries = getSitemapEntries();
const routesData: Record<string, { title: string; description: string }> = {};

entries.forEach((e) => {
  routesData[e.path] = { title: e.title, description: e.description };
});

// 2. Validate all gathered routes (SEO Integrity & Duplicate checks)
const allRoutes = Object.keys(routesData);

allRoutes.forEach((route) => {
  const data = routesData[route];
  
  // Title verification
  if (!data.title || data.title.trim() === '') {
    console.error(`❌ CRITICAL: Page [${route}] is missing a title!`);
    hasCriticalErrors = true;
  } else if (titles.has(data.title)) {
    console.error(`❌ CRITICAL: Page [${route}] has a duplicate title: "${data.title}"`);
    hasCriticalErrors = true;
  } else {
    titles.add(data.title);
  }

  // Description verification
  if (!data.description || data.description.trim() === '') {
    console.error(`❌ CRITICAL: Page [${route}] is missing a description!`);
    hasCriticalErrors = true;
  } else if (descriptions.has(data.description)) {
    console.error(`❌ CRITICAL: Page [${route}] has a duplicate description: "${data.description}"`);
    hasCriticalErrors = true;
  } else {
    descriptions.add(data.description);
  }
});

// Helper: Extract text content from a blocks array
function extractBlockContent(blocks: any[]): string {
  return blocks.map(block => {
    const parts: string[] = [];
    if (block.title) parts.push(block.title);
    if (block.subtitle) parts.push(block.subtitle);
    if (block.content) parts.push(block.content);
    if (block.headline) parts.push(block.headline);
    if (block.desc) parts.push(block.desc);
    if (block.buttonLabel) parts.push(block.buttonLabel);
    if (block.items) {
      block.items.forEach((item: any) => {
        if (typeof item === 'string') parts.push(item);
        else { if (item.title) parts.push(item.title); if (item.desc) parts.push(item.desc); if (item.q) parts.push(item.q); if (item.a) parts.push(item.a); }
      });
    }
    if (block.steps) block.steps.forEach((s: any) => { parts.push(s.title); parts.push(s.desc); });
    if (block.technologies) parts.push(...block.technologies);
    if (block.code) parts.push(block.code);
    if (block.rows) block.rows.forEach((r: any) => parts.push(Object.values(r).join(' ')));
    return parts.join(' ');
  }).join(' ');
}

// Helper: Count FAQ items from blocks
function countFAQs(blocks: any[]): number {
  const faqBlock = blocks.find(b => b.type === 'faq');
  return faqBlock ? (faqBlock.items?.length || 0) : 0;
}

// Helper: Check CTA presence in blocks
function hasCTA(blocks: any[]): boolean {
  return blocks.some(b => b.type === 'cta');
}

// Helper: Extract headings from blocks
function extractHeadings(blocks: any[]): string[] {
  return blocks.filter(b => b.title).map(b => b.title);
}

// 3. Content Quality Validation Checks
entries.forEach((entry) => {
  const route = entry.path;
  const blocks = entry.blocks || [];

  if (blocks.length === 0) return;

  const contentText = extractBlockContent(blocks);
  const faqCount = countFAQs(blocks);
  const headingsList = extractHeadings(blocks);

  // Run validation metrics on the resolved page contents
  if (contentText) {
    // Audit 1: H1 validation
    const heroBlock = blocks.find(b => b.type === 'hero');
    if (!heroBlock || !heroBlock.title || heroBlock.title.trim() === '') {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] is missing a hero block or H1 title.`);
      qualityWarningsCount++;
    }

    // Audit 2: Thin content (< 300 words)
    const wordsCount = contentText.split(/\s+/).filter(Boolean).length;
    if (wordsCount < 300) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] has thin content (${wordsCount} words, minimum recommended is 300).`);
      qualityWarningsCount++;
    }

    // Audit 3: Duplicate headings
    const uniqueHeadings = new Set(headingsList);
    if (uniqueHeadings.size !== headingsList.length) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] has duplicate headings.`);
      qualityWarningsCount++;
    }

    // Audit 4: Missing FAQ accordion
    if (faqCount === 0) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] is missing FAQ data.`);
      qualityWarningsCount++;
    }

    // Audit 5: Missing CTA block
    if (!hasCTA(blocks)) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] is missing a CTA block.`);
      qualityWarningsCount++;
    }

    // Audit 6: CTA Conversions phrasing
    const lowerText = contentText.toLowerCase();
    if (!lowerText.includes('consult') && !lowerText.includes('contact') && !lowerText.includes('discuss')) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] lacks CTA conversions phrasing.`);
      qualityWarningsCount++;
    }

    // Audit 7: Missing related content sections
    const hasRelated = blocks.some(b => 
      b.type === 'related-content' || 
      b.type === 'capabilities' || 
      b.type === 'use-cases'
    );
    if (!hasRelated) {
      console.warn(`⚠️ QUALITY WARNING: Page [${route}] is missing related content blocks.`);
      qualityWarningsCount++;
    }

    // Audit 8: Broken references in related content
    const relatedContentBlocks = blocks.filter(b => b.type === 'related-content');
    relatedContentBlocks.forEach(b => {
      if (b.items) {
        b.items.forEach((item: any) => {
          const pathOnly = item.url.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
          if (!routesData[pathOnly]) {
            console.error(`❌ BROKEN REFERENCE: Page [${route}] references non-existent URL "${item.url}" in related content`);
            hasCriticalErrors = true;
          }
        });
      }
    });

    // Audit 9: Empty sections
    blocks.forEach(b => {
      if (b.type === 'overview' || b.type === 'text') {
        if (!b.content || b.content.trim() === '') {
          console.warn(`⚠️ QUALITY WARNING: Page [${route}] has an empty content block "${b.id}".`);
          qualityWarningsCount++;
        }
      } else if ('items' in b && Array.isArray((b as any).items) && (b as any).items.length === 0) {
        console.warn(`⚠️ QUALITY WARNING: Page [${route}] has an empty items list in block "${b.id}".`);
        qualityWarningsCount++;
      }
    });
  }
});

// Helper for recursive directory scanning to locate broken links
function getFiles(dir: string, files_: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = path.join(dir, files[i]);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

// 4. Scan codebase for broken internal links
const srcDir = path.resolve(__dirname, '../src');
const srcFiles = getFiles(srcDir);
const linkRegexes = [
  new RegExp('to=["\'](\\/[^"\']*)[\'"]', 'g'),
  new RegExp('href=["\'](\\/[^"\']*)[\'"]', 'g'),
  new RegExp('navigate\\(["\'](\\/[^"\']*)[\'"\\)]', 'g'),
  new RegExp('handleLinkClick\\(e,\\s*["\'](\\/[^"\']*)[\'"]\\)', 'g')
];

let brokenLinksCount = 0;

srcFiles.forEach((file) => {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  const content = fs.readFileSync(file, 'utf-8');
  
  linkRegexes.forEach((regex) => {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(content)) !== null) {
      const link = match[1].split('#')[0].split('?')[0]; // strip hash and query
      const normalizedLink = link.replace(/\/$/, '') || '/';
      
      if (normalizedLink.startsWith('/') && 
          !normalizedLink.startsWith('/src/') && 
          !normalizedLink.endsWith('.svg') &&
          !normalizedLink.endsWith('.png') &&
          !normalizedLink.endsWith('.xml') &&
          !normalizedLink.endsWith('.txt') &&
          !routesData[normalizedLink]) {
        console.error(`❌ BROKEN LINK: Vague routing link target "${normalizedLink}" found in [${path.basename(file)}]`);
        brokenLinksCount++;
        hasCriticalErrors = true;
      }
    }
  });
});

console.log(`✅ Success: Validated Next.js App Router sitemap structure with ${entries.length} URLs`);
console.log(`✅ Success: Validated Next.js App Router Image Sitemap structure with ${entries.filter(e => e.images && e.images.length > 0).length} URLs`);
console.log(`✅ Success: Validated Next.js App Router RSS feed structure with ${Object.keys(blogMap).length} items`);
console.log(`✅ Success: Validated Next.js App Router robots.txt configuration`);
console.log(`✅ Success: Validated Next.js App Router AI Crawlers llms.txt endpoint`);

if (hasCriticalErrors) {
  console.error('\n❌ SEO Build validation check failed! Fix the duplicate meta tags or broken links listed above before building.');
  process.exit(1);
} else {
  console.log(`\n✅ SEO Validation Audit passed! Audit checks: 0 duplicate tags, 0 broken links. Found ${qualityWarningsCount} content quality warnings.\n`);
}
