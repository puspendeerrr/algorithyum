/**
 * SEO Registry — Central Content Map
 *
 * All dynamic page maps are exported from here.
 * SEOManager and seo-checks.ts import exclusively from this file.
 *
 * To add a new page type:
 * 1. Create the data map in src/data/<type>/index.ts
 * 2. Import and re-export it here
 * 3. Add it to App.tsx routes
 * 4. seo-checks.ts will automatically pick it up
 */
import { serviceMap }    from './services';
import { technologyMap } from './technologies';
import { industryMap }   from './industries';
import { comparisonMap } from './comparisons';
import { guideMap }      from './guides';
import { blogMap }       from './blogs';
import { caseStudyMap }  from './case-studies';
import { resourceMap }   from './resources';
import { costPageMap }   from './cost-pages';
import { faqHubMap }     from './faq-hub';

export {
  serviceMap,
  technologyMap,
  industryMap,
  comparisonMap,
  guideMap,
  blogMap,
  caseStudyMap,
  resourceMap,
  costPageMap,
  faqHubMap,
};

// Unified registry for cross-type operations (linking engine, validators)
export const allContentMaps = {
  services:      serviceMap,
  technologies:  technologyMap,
  industries:    industryMap,
  comparisons:   comparisonMap,
  guides:        guideMap,
  blogs:         blogMap,
  'case-studies': caseStudyMap,
  resources:     resourceMap,
  'cost-pages':  costPageMap,
  'faq-hub':     faqHubMap,
} as const;
