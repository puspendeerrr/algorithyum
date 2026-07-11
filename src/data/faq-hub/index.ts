/**
 * FAQ Hub Registry
 *
 * To add a new FAQ hub page (topic-specific FAQ collections):
 * 1. Create a new FaqHubPageData object below
 * 2. Add it to the faqHubMap
 * 3. No routing edits, no JSX changes, no SEO edits required.
 *
 * FAQ Hub pages aggregate questions by topic — useful for targeting
 * long-tail "how does X work" search queries.
 *
 * Supported blocks: hero, overview, faq, text, related-content, cta
 *
 * Route pattern: /faq/:id
 *
 * Example pages:
 * - software-development
 * - cloud-infrastructure
 * - ai-machine-learning
 * - mobile-development
 */
import type { FaqHubPageData } from '../types';

export const faqHubMap: Record<string, FaqHubPageData> = {
  // Example structure (commented out — add real FAQ hubs here):
  //
  // 'software-development': {
  //   slug: 'software-development',
  //   title: 'Software Development FAQ — Common Questions Answered | Algorithyum',
  //   description: 'Answers to the most common questions about custom software development, timelines, costs, and process.',
  //   pageType: 'faq',
  //   tags: ['faq', 'software-development', 'questions'],
  //   category: 'FAQ Hub',
  //   blocks: [
  //     { id: 'hero', type: 'hero', title: 'Software Development FAQ', subtitle: '...' },
  //     { id: 'faq-general', type: 'faq', title: 'General Questions', items: [...] },
  //     { id: 'faq-process', type: 'faq', title: 'Process & Timeline', items: [...] },
  //     { id: 'faq-cost', type: 'faq', title: 'Costs & Contracts', items: [...] },
  //     { id: 'cta', type: 'cta', headline: '...', desc: '...', buttonLabel: '...', buttonAction: 'consultation' },
  //   ]
  // }
};
