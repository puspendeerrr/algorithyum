/**
 * Cost Page Registry
 *
 * To add a new cost/pricing guide page:
 * 1. Create a new CostPageData object below
 * 2. Add it to the costPageMap
 * 3. No routing edits, no JSX changes, no SEO edits required.
 *
 * Supported blocks: hero, quick-summary, overview, text, pricing-table,
 * checklist, comparison-table, process, faq, cta, related-content
 *
 * Route pattern: /cost/:id
 *
 * Example pages:
 * - custom-software-development
 * - ai-development
 * - cloud-migration
 * - mobile-app-development
 * - devops-setup
 */
import type { CostPageData } from '../types';

export const costPageMap: Record<string, CostPageData> = {
  // Example structure (commented out — add real cost pages here):
  //
  // 'custom-software-development': {
  //   slug: 'custom-software-development',
  //   title: 'Custom Software Development Cost Guide 2026 | Algorithyum',
  //   description: 'Understand the real cost drivers, pricing models, and timeline factors for custom software development projects.',
  //   pageType: 'cost',
  //   tags: ['cost', 'pricing', 'software-development', 'budget'],
  //   category: 'Cost Guides',
  //   blocks: [
  //     { id: 'hero', type: 'hero', title: 'Custom Software Development Cost Guide', subtitle: '...' },
  //     { id: 'quick-summary', type: 'quick-summary', items: ['Typical range: $50K–$500K', 'Timeline: 3–18 months', ...] },
  //     { id: 'overview', type: 'overview', title: 'What Drives the Cost?', content: '...' },
  //     { id: 'pricing', type: 'pricing-table', title: 'Pricing Models', tiers: [...] },
  //     { id: 'faq', type: 'faq', title: 'Frequently Asked Questions', items: [...] },
  //     { id: 'cta', type: 'cta', headline: 'Get a Custom Estimate', desc: '...', buttonLabel: '...', buttonAction: 'consultation' },
  //   ]
  // }
};
