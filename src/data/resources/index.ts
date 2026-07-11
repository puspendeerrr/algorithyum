/**
 * Resource Registry
 *
 * To add a new resource page (checklist, whitepaper, template, etc.):
 * 1. Create a new ResourcePageData object below
 * 2. Add it to the resourceMap
 * 3. No routing edits, no JSX changes, no SEO edits required.
 *
 * Supported blocks: hero, overview, resource-card, checklist,
 * best-practices, faq, cta, related-content
 *
 * Route pattern: /resources/:id
 */
import type { ResourcePageData } from '../types';

export const resourceMap: Record<string, ResourcePageData> = {
  // Example structure (commented out — add real resources here):
  //
  // 'software-specification-checklist': {
  //   slug: 'software-specification-checklist',
  //   title: 'Software Specification Checklist | Algorithyum',
  //   description: 'A 47-point technical specification checklist for engineering directors.',
  //   pageType: 'resource',
  //   tags: ['specification', 'checklist', 'engineering', 'project-management'],
  //   category: 'Engineering Resources',
  //   blocks: [
  //     { id: 'hero', type: 'hero', title: 'Software Specification Checklist', subtitle: '...' },
  //     { id: 'download', type: 'resource-card', title: 'Download This Resource',
  //       resources: [{ type: 'checklist', title: '...', desc: '...', size: '1 page PDF' }]},
  //     { id: 'checklist', type: 'checklist', title: 'Full Checklist', items: [...] },
  //     { id: 'cta', type: 'cta', headline: '...', desc: '...', buttonLabel: '...', buttonAction: 'consultation' },
  //   ]
  // }
};
