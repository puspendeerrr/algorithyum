import { NextResponse } from 'next/server';
import { getSitemapEntriesGrouped } from '@/lib/sitemap/sitemapEngine';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const grouped = getSitemapEntriesGrouped();
  const baseUrl = 'https://algorithyum.in';

  let content = `# Algorithyum — Custom Software, ERP, Mobile Apps & AI Solutions\n\n`;
  content += `> Algorithyum is a software engineering company building custom software, ERP systems, web applications, mobile apps, games, AI integrations, AI automations, and providing technical SEO services.\n\n`;

  content += `## Core Services\n\n`;
  content += `- [Custom Software Development](${baseUrl}/services/software-development): Bespoke software, SaaS products, management tools, and APIs.\n`;
  content += `- [ERP System Development](${baseUrl}/services/erp): Custom ERP software, manufacturing ERP, inventory management, CRM, HRMS, and POS.\n`;
  content += `- [Software Redesign & Modernization](${baseUrl}/services/software-redesign): Legacy refactoring, UI/UX redesign, database migration, and cloud upgrade.\n`;
  content += `- [Web Development](${baseUrl}/services/web-development): Fast, modern Next.js and React web applications.\n`;
  content += `- [Android App Development](${baseUrl}/services/android-app-development): Native and cross-platform Android mobile applications.\n`;
  content += `- [iOS App Development](${baseUrl}/services/ios-app-development): Custom iPhone and iPad mobile applications.\n`;
  content += `- [Cross Platform App Development](${baseUrl}/services/cross-platform-app-development): Flutter and React Native cross-platform mobile apps.\n`;
  content += `- [Game Development](${baseUrl}/services/game-development): 2D, casual, and arcade mobile games for Android and iOS.\n`;
  content += `- [AI Integration](${baseUrl}/services/ai-integration): OpenAI API integration, AI chatbots, smart search, and RAG systems.\n`;
  content += `- [AI Automation](${baseUrl}/services/ai-automation): Workflow automation, document data extraction, and ticket sorting.\n`;
  content += `- [SEO Services](${baseUrl}/services/seo): Technical SEO, site speed optimization, schema markup, and Google search ranking.\n\n`;

  content += `## Primary Technology Stack\n\n`;
  content += `- Frontend & Web: Next.js, React, TypeScript, HTML5, Tailwind CSS\n`;
  content += `- Mobile: Flutter, React Native, iOS, Android\n`;
  content += `- Backend & Data: Node.js, Python, PostgreSQL, MongoDB, Redis, Firebase\n`;
  content += `- AI & ML: OpenAI API, LangChain, RAG Systems, Vector Databases\n\n`;

  content += `## Technical Documentation & Guides\n\n`;
  (grouped.guides || []).forEach((guide) => {
    content += `- [${guide.title.split('|')[0].trim()}](${guide.url}): ${guide.description}\n`;
  });
  content += `\n`;

  content += `## Recent Technical Articles & Blog Publications\n\n`;
  (grouped.blog || []).slice(0, 10).forEach((article) => {
    content += `- [${article.title.split('|')[0].trim()}](${article.url}): ${article.description}\n`;
  });
  content += `\n`;

  content += `## Contact & Business Alignment\n\n`;
  content += `- Website: ${baseUrl}\n`;
  content += `- Sitemap Directory: ${baseUrl}/sitemap\n`;
  content += `- Email Contact: info@algorithyum.in\n`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
