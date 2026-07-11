/**
 * Case Study Registry
 *
 * To add a new case study page:
 * 1. Create a new CaseStudyPageData object below
 * 2. Add it to the caseStudyMap
 * 3. No routing edits, no JSX changes, no SEO edits required.
 *
 * Supported blocks: hero, quick-summary, overview, text, business-problems,
 * solutions, process, tech-stack, architecture, stats-grid, use-cases,
 * faq, cta, related-content
 *
 * Route pattern: /case-studies/:id
 */
import type { CaseStudyPageData } from '../types';

export const caseStudyMap: Record<string, CaseStudyPageData> = {
  // Example structure (commented out — add real case studies here):
  //
  // 'enterprise-logistics-platform': {
  //   slug: 'enterprise-logistics-platform',
  //   title: 'Enterprise Logistics Platform — Case Study | Algorithyum',
  //   description: 'How Algorithyum built a real-time fleet tracking system ...',
  //   pageType: 'case-study',
  //   tags: ['logistics', 'real-time', 'kubernetes', 'nodejs'],
  //   category: 'Logistics & Supply Chain',
  //   blocks: [
  //     { id: 'hero', type: 'hero', title: '...', subtitle: '...' },
  //     { id: 'overview', type: 'overview', title: 'Project Overview', content: '...' },
  //     { id: 'stats', type: 'stats-grid', title: 'Project Outcomes',
  //       stats: [
  //         { value: '40%', label: 'Reduction in Empty Miles' },
  //         { value: '< 500ms', label: 'GPS Update Latency' },
  //         { value: '99.97%', label: 'Uptime SLA Achieved' },
  //       ]},
  //     { id: 'faq', type: 'faq', title: 'Frequently Asked Questions', items: [...] },
  //     { id: 'cta', type: 'cta', headline: '...', desc: '...', buttonLabel: '...', buttonAction: 'consultation' },
  //   ]
  // }
};
