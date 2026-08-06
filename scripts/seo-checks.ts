import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import static SEO data and the dynamic registries
import { seoMap } from '../src/data/seoData.js';
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
  faqHubMap
} from '../src/data/seoRegistry.js';

const titles = new Set<string>();
const descriptions = new Set<string>();
let hasCriticalErrors = false;
let qualityWarningsCount = 0;

console.log('\n=== Starting Build-Time SEO Validation Audit ===');

// 1. Gather all dynamic and static routes
const routesData: Record<string, { title: string; description: string }> = {};

// Add static routes from seoMap
Object.entries(seoMap).forEach(([route, data]) => {
  routesData[route] = { title: data.title, description: data.description };
});

// Add dynamic services
Object.entries(serviceMap).forEach(([id, data]) => {
  routesData[`/services/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic technologies (both sub-route and direct top-level route)
Object.entries(technologyMap).forEach(([id, data]) => {
  routesData[`/technologies/${id}`] = { title: data.title, description: data.description };
  routesData[`/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic industries
Object.entries(industryMap).forEach(([id, data]) => {
  routesData[`/industries/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic comparisons
Object.entries(comparisonMap).forEach(([id, data]) => {
  routesData[`/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic guides
Object.entries(guideMap).forEach(([id, data]) => {
  routesData[`/guides/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic blogs
Object.entries(blogMap).forEach(([id, data]) => {
  routesData[`/blog/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic case studies
Object.entries(caseStudyMap).forEach(([id, data]) => {
  routesData[`/case-studies/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic resources
Object.entries(resourceMap).forEach(([id, data]) => {
  routesData[`/resources/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic cost pages
Object.entries(costPageMap).forEach(([id, data]) => {
  routesData[`/cost/${id}`] = { title: data.title, description: data.description };
});

// Add dynamic FAQ pages
Object.entries(faqHubMap).forEach(([id, data]) => {
  routesData[`/faq/${id}`] = { title: data.title, description: data.description };
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
    const isTechAlias = route.startsWith('/technologies/') || allRoutes.includes(route.replace(/^\/technologies/, ''));
    if (!isTechAlias) {
      console.error(`❌ CRITICAL: Page [${route}] has a duplicate title: "${data.title}"`);
      hasCriticalErrors = true;
    }
  } else {
    titles.add(data.title);
  }

  // Description verification
  if (!data.description || data.description.trim() === '') {
    console.error(`❌ CRITICAL: Page [${route}] is missing a description!`);
    hasCriticalErrors = true;
  } else if (descriptions.has(data.description)) {
    const isTechAlias = route.startsWith('/technologies/') || allRoutes.includes(route.replace(/^\/technologies/, ''));
    if (!isTechAlias) {
      console.error(`❌ CRITICAL: Page [${route}] has a duplicate description: "${data.description}"`);
      hasCriticalErrors = true;
    }
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
allRoutes.forEach((route) => {
  let blocks: any[] = [];

  const parts = route.split('/').filter(Boolean);
  const parent = parts[0];
  const child = parts[1];

  if (parent === 'services' && child && serviceMap[child]) {
    blocks = (serviceMap[child] as any).blocks || [];
  } else if (parent === 'technologies' && child && technologyMap[child]) {
    blocks = (technologyMap[child] as any).blocks || [];
  } else if (parent === 'industries' && child && industryMap[child]) {
    blocks = (industryMap[child] as any).blocks || [];
  } else if (comparisonMap[route.slice(1)]) {
    blocks = (comparisonMap[route.slice(1)] as any).blocks || [];
  } else if (parent === 'guides' && child && guideMap[child]) {
    blocks = (guideMap[child] as any).blocks || [];
  } else if (parent === 'blog' && child && blogMap[child]) {
    blocks = (blogMap[child] as any).blocks || [];
  } else if (parent === 'resources' && child && resourceMap[child]) {
    blocks = (resourceMap[child] as any).blocks || [];
  } else if (parent === 'case-studies' && child && caseStudyMap[child]) {
    blocks = (caseStudyMap[child] as any).blocks || [];
  } else if (parent === 'cost' && child && costPageMap[child]) {
    blocks = (costPageMap[child] as any).blocks || [];
  } else if (parent === 'faq' && child && faqHubMap[child]) {
    blocks = (faqHubMap[child] as any).blocks || [];
  }

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

// Helper to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Ensure public directory exists
const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// ─────────────────────────────────────────────────────────
// 5. Automatically Generate sitemap.xml
// Excludes:
//   - /404, /not-found
//   - /sitemap (HTML page — crawlers use the XML sitemap)
//   - Tech alias routes (e.g. /react) — canonical is /technologies/react
// Uses datePublished/dateUpdated for lastmod on blog/guide pages
// ─────────────────────────────────────────────────────────
const techAliasSlugs = [
  'react', 'nextjs', 'nodejs', 'typescript', 'docker', 'kubernetes',
  'aws', 'azure', 'google-cloud', 'openai', 'langchain', 'mongodb',
  'postgresql', 'redis', 'firebase', 'flutter', 'react-native'
];

const today = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

allRoutes.forEach((route) => {
  if (route === '/404' || route === '/not-found') return;
  if (route === '/sitemap') return;
  const routeParts = route.split('/').filter(Boolean);
  if (routeParts.length === 1 && techAliasSlugs.includes(routeParts[0])) return;

  const url = `https://algorithyum.in${route}`;
  let priority = '0.6';
  let changefreq = 'monthly';
  let lastmod = today;

  if (route === '/') {
    priority = '1.0'; changefreq = 'daily';
  } else if (
    route === '/services' || route === '/blog' || route === '/solutions' ||
    route === '/technologies' || route === '/industries' || route === '/guides'
  ) {
    priority = '0.8'; changefreq = 'weekly';
  } else if (route.startsWith('/services/')) {
    priority = '0.75'; changefreq = 'monthly';
  } else if (route.startsWith('/technologies/') || route.startsWith('/industries/')) {
    priority = '0.7'; changefreq = 'monthly';
  } else if (route.startsWith('/blog/')) {
    priority = '0.75'; changefreq = 'monthly';
    const slug = routeParts[1];
    const blogData = blogMap[slug] as any;
    if (blogData?.dateUpdated) lastmod = blogData.dateUpdated;
    else if (blogData?.datePublished) lastmod = blogData.datePublished;
  } else if (route.startsWith('/guides/')) {
    priority = '0.7'; changefreq = 'monthly';
    const slug = routeParts[1];
    const guideData = (guideMap as any)[slug];
    if (guideData?.dateUpdated) lastmod = guideData.dateUpdated;
    else if (guideData?.datePublished) lastmod = guideData.datePublished;
  } else if (route === '/contact') {
    priority = '0.7'; changefreq = 'monthly';
  } else if (route === '/about' || route === '/careers') {
    priority = '0.6'; changefreq = 'monthly';
  } else if (route === '/privacy' || route === '/terms' || route === '/cookies') {
    priority = '0.2'; changefreq = 'yearly';
  }

  sitemapXml += `  <url>\n`;
  sitemapXml += `    <loc>${url}</loc>\n`;
  sitemapXml += `    <lastmod>${lastmod}</lastmod>\n`;
  sitemapXml += `    <changefreq>${changefreq}</changefreq>\n`;
  sitemapXml += `    <priority>${priority}</priority>\n`;
  sitemapXml += `  </url>\n`;
});

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
const sitemapUrlCount = allRoutes.filter(route => {
  if (route === '/404' || route === '/not-found' || route === '/sitemap') return false;
  const rp = route.split('/').filter(Boolean);
  if (rp.length === 1 && techAliasSlugs.includes(rp[0])) return false;
  return true;
}).length;
console.log(`✅ Success: Automatically generated sitemap.xml in [public/sitemap.xml] with ${sitemapUrlCount} URLs`);

// ─────────────────────────────────────────────────────────
// 5.5. Automatically Generate rss.xml from blog posts
// ─────────────────────────────────────────────────────────
let rssXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
rssXml += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n`;
rssXml += `  <channel>\n`;
rssXml += `    <title>Algorithyum Blog</title>\n`;
rssXml += `    <link>https://algorithyum.in/blog</link>\n`;
rssXml += `    <description>Enterprise Software Engineering, Security &amp; AI Insights</description>\n`;
rssXml += `    <language>en-us</language>\n`;
rssXml += `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`;
rssXml += `    <atom:link href="https://algorithyum.in/rss.xml" rel="self" type="application/rss+xml" />\n`;

Object.entries(blogMap).forEach(([id, data]) => {
  const url = `https://algorithyum.in/blog/${id}`;
  const pubDate = data.datePublished ? new Date(data.datePublished).toUTCString() : new Date().toUTCString();
  
  rssXml += `    <item>\n`;
  rssXml += `      <title>${escapeXml(data.title.split('|')[0].trim())}</title>\n`;
  rssXml += `      <link>${url}</link>\n`;
  rssXml += `      <guid>${url}</guid>\n`;
  rssXml += `      <pubDate>${pubDate}</pubDate>\n`;
  rssXml += `      <description>${escapeXml(data.description)}</description>\n`;
  if (data.category) {
    rssXml += `      <category>${escapeXml(data.category)}</category>\n`;
  }
  rssXml += `    </item>\n`;
});

rssXml += `  </channel>\n`;
rssXml += `</rss>\n`;

fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml, 'utf-8');
console.log(`✅ Success: Automatically generated rss.xml in [public/rss.xml] with ${Object.keys(blogMap).length} items`);

// ─────────────────────────────────────────────────────────
// 6. Automatically Generate robots.txt
// Disallows: /404, /sitemap (HTML page), legacy tech alias routes
// Adds crawl-delay for heavy SEO/AI audit bots
// Points to XML sitemap + RSS feed
// ─────────────────────────────────────────────────────────
let robotsTxt = `# Algorithyum robots.txt — auto-generated at build time\n\n`;
robotsTxt += `User-agent: *\n`;
robotsTxt += `Allow: /\n`;
robotsTxt += `Disallow: /404\n`;
robotsTxt += `Disallow: /sitemap\n`;
// Disallow tech alias routes to consolidate crawl equity to canonical /technologies/:id
techAliasSlugs.forEach(slug => {
  robotsTxt += `Disallow: /${slug}\n`;
});
robotsTxt += `\n`;

robotsTxt += `# Slow down heavy-crawl SEO audit and AI training bots\n`;
robotsTxt += `User-agent: AhrefsBot\n`;
robotsTxt += `Crawl-delay: 10\n\n`;
robotsTxt += `User-agent: SemrushBot\n`;
robotsTxt += `Crawl-delay: 10\n\n`;
robotsTxt += `User-agent: MJ12bot\n`;
robotsTxt += `Crawl-delay: 10\n\n`;
robotsTxt += `User-agent: DotBot\n`;
robotsTxt += `Disallow: /\n\n`;

robotsTxt += `Sitemap: https://algorithyum.in/sitemap.xml\n`;
robotsTxt += `Sitemap: https://algorithyum.in/rss.xml\n`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
console.log(`✅ Success: Automatically generated robots.txt in [public/robots.txt]`);

// ─────────────────────────────────────────────────────────
// 7. Final validation report outcome
// ─────────────────────────────────────────────────────────
if (hasCriticalErrors) {
  console.error('\n❌ SEO Build validation check failed! Fix the duplicate meta tags or broken links listed above before building.');
  process.exit(1);
} else {
  console.log(`\n✅ SEO Validation Audit passed! Audit checks: 0 duplicate tags, 0 broken links. Found ${qualityWarningsCount} content quality warnings.\n`);
}
