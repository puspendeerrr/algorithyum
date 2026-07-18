import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoMap } from '../data/seoData';
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
} from '../data/seoRegistry';

export const SEOManager: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Normalizing canonical URL (remove trailing slashes, keep root)
    const matchPath = pathname.replace(/\/$/, '') || '/';
    
    // Resolve static SEO first
    let seoData = seoMap[matchPath];

    // Fallback: Dynamic SEO metadata generation based on route patterns
    if (!seoData) {
      const parts = matchPath.split('/').filter(Boolean);
      const parent = parts[0];
      const child = parts[1];

      let dynamicData: any = null;
      let type: string = '';

      if (parts.length === 1) {
        const slug = parts[0];
        if (comparisonMap[slug]) {
          dynamicData = comparisonMap[slug];
          type = 'comparison';
        } else if (technologyMap[slug]) {
          dynamicData = technologyMap[slug];
          type = 'technology';
        }
      } else if (parts.length === 2) {
        if (parent === 'services' && serviceMap[child]) {
          dynamicData = serviceMap[child];
          type = 'service';
        } else if (parent === 'technologies' && technologyMap[child]) {
          dynamicData = technologyMap[child];
          type = 'technology';
        } else if (parent === 'industries' && industryMap[child]) {
          dynamicData = industryMap[child];
          type = 'industry';
        } else if (parent === 'guides' && guideMap[child]) {
          dynamicData = guideMap[child];
          type = 'guide';
        } else if (parent === 'blog' && blogMap[child]) {
          dynamicData = blogMap[child];
          type = 'blog';
        } else if (parent === 'resources' && resourceMap[child]) {
          dynamicData = resourceMap[child];
          type = 'resource';
        } else if (parent === 'case-studies' && caseStudyMap[child]) {
          dynamicData = caseStudyMap[child];
          type = 'case-study';
        } else if (parent === 'cost' && costPageMap[child]) {
          dynamicData = costPageMap[child];
          type = 'cost';
        } else if (parent === 'faq' && faqHubMap[child]) {
          dynamicData = faqHubMap[child];
          type = 'faq';
        }
      }

      if (dynamicData) {
        const name = dynamicData.name || dynamicData.title.split('|')[0].trim();
        const url = `https://algorithyum.in${matchPath}`;
        const schemas: any[] = [];

        // Build Core Entity Schema
        if (type === 'service') {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': name,
            'description': dynamicData.description,
            'provider': {
              '@type': 'Organization',
              'name': 'Algorithyum',
              'url': 'https://algorithyum.in'
            }
          });
        } else if (type === 'technology') {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': name,
            'operatingSystem': 'All',
            'applicationCategory': 'DeveloperApplication',
            'offers': {
              '@type': 'Offer',
              'price': '0.00',
              'priceCurrency': 'USD'
            }
          });
        } else if (type === 'guide' || type === 'blog') {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            'headline': dynamicData.title,
            'description': dynamicData.description,
            'datePublished': dynamicData.datePublished || '2026-07-11',
            'dateModified': dynamicData.dateUpdated || dynamicData.datePublished || '2026-07-11',
            'author': {
              '@type': 'Organization',
              'name': dynamicData.author || 'Algorithyum Systems Group'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Algorithyum',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://algorithyum.in/logo.svg'
              }
            }
          });
        } else {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': name,
            'url': url,
            'description': dynamicData.description
          });
        }

        // Auto-generate FAQ Schema from FAQ blocks
        const faqBlock = dynamicData.blocks?.find((b: any) => b.type === 'faq');
        if (faqBlock && faqBlock.items && faqBlock.items.length > 0) {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqBlock.items.map((faq: any) => ({
              '@type': 'Question',
              'name': faq.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
              }
            }))
          });
        }

        seoData = {
          title: dynamicData.title,
          description: dynamicData.description,
          ogImage: dynamicData.ogImage,
          ogImageWidth: dynamicData.ogImageWidth,
          ogImageHeight: dynamicData.ogImageHeight,
          twitterImage: dynamicData.twitterImage,
          schema: schemas
        };
        // Tag type for og:type injection below
        (seoData as any)._pageType = type;
      }
    }

    // Ultimate fallback if still no match
    if (!seoData) {
      seoData = seoMap['/'] || {
        title: 'Algorithyum | Enterprise Technology & Intelligent AI Solutions',
        description: 'Empowering enterprises through custom software development, AI workflows, and multi-cloud architectures.',
        schema: {}
      };
    }

    // Update document title
    document.title = seoData.title;

    // Update description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', seoData.description);

    // Robots meta — all resolved pages are indexable
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow');

    // Canonical URL — for tech alias routes (/react, /nextjs etc.) point to /technologies/:id
    const techAliases = [
      'react', 'nextjs', 'nodejs', 'typescript', 'docker', 'kubernetes',
      'aws', 'azure', 'google-cloud', 'openai', 'langchain', 'mongodb',
      'postgresql', 'redis', 'firebase', 'flutter', 'react-native'
    ];
    const parts2 = matchPath.split('/').filter(Boolean);
    const isTechAlias = parts2.length === 1 && techAliases.includes(parts2[0]);
    const canonicalPath = isTechAlias ? `/technologies/${parts2[0]}` : matchPath;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://algorithyum.in${canonicalPath}`);

    // Update Open Graph Type — 'article' for blog/guide, 'website' for all others
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement('meta');
      ogTypeMeta.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeMeta);
    }
    const pageType = (seoData as any)._pageType;
    const isArticle = pageType === 'blog' || pageType === 'guide';
    ogTypeMeta.setAttribute('content', isArticle ? 'article' : 'website');

    // Update Open Graph Site Name
    let ogSiteNameMeta = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteNameMeta) {
      ogSiteNameMeta = document.createElement('meta');
      ogSiteNameMeta.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteNameMeta);
    }
    ogSiteNameMeta.setAttribute('content', 'Algorithyum');

    // Update Open Graph Title tag
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', seoData.title);

    // Update Open Graph Description tag
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', seoData.description);

    // Update Open Graph URL — use canonical path (handles tech alias routes)
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', `https://algorithyum.in${canonicalPath}`);

    // Update Open Graph Image and dimensions tags
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta');
      ogImageMeta.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageMeta);
    }
    ogImageMeta.setAttribute('content', seoData.ogImage || 'https://algorithyum.in/logo.svg');

    let ogWidthMeta = document.querySelector('meta[property="og:image:width"]');
    if (!ogWidthMeta) {
      ogWidthMeta = document.createElement('meta');
      ogWidthMeta.setAttribute('property', 'og:image:width');
      document.head.appendChild(ogWidthMeta);
    }
    ogWidthMeta.setAttribute('content', seoData.ogImageWidth || '1200');

    let ogHeightMeta = document.querySelector('meta[property="og:image:height"]');
    if (!ogHeightMeta) {
      ogHeightMeta = document.createElement('meta');
      ogHeightMeta.setAttribute('property', 'og:image:height');
      document.head.appendChild(ogHeightMeta);
    }
    ogHeightMeta.setAttribute('content', seoData.ogImageHeight || '630');

    // Update Twitter Card tags
    let twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCardMeta) {
      twitterCardMeta = document.createElement('meta');
      twitterCardMeta.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCardMeta);
    }
    twitterCardMeta.setAttribute('content', 'summary_large_image');

    let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitleMeta) {
      twitterTitleMeta = document.createElement('meta');
      twitterTitleMeta.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitleMeta);
    }
    twitterTitleMeta.setAttribute('content', seoData.title);

    let twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescMeta) {
      twitterDescMeta = document.createElement('meta');
      twitterDescMeta.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescMeta);
    }
    twitterDescMeta.setAttribute('content', seoData.description);

    let twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImageMeta) {
      twitterImageMeta = document.createElement('meta');
      twitterImageMeta.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImageMeta);
    }
    twitterImageMeta.setAttribute('content', seoData.twitterImage || 'https://algorithyum.in/logo.svg');

    // Generate Dynamic BreadcrumbList Schema (uses canonicalPath for tech aliases)
    const parts = matchPath.split('/').filter(Boolean);
    const itemListElement = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://algorithyum.in/'
      }
    ];
    
    let cumulativePath = '';
    parts.forEach((part, index) => {
      cumulativePath += `/${part}`;
      let name = part.charAt(0).toUpperCase() + part.slice(1);
      if (part === 'seo') name = 'SEO Services';
      else if (part === 'ai') name = 'Artificial Intelligence & ML';
      else if (part === 'ui-ux') name = 'UI/UX Design';
      else if (part === 'it-consulting') name = 'IT Strategy Consulting';
      else name = name.replace(/-/g, ' ');

      // For tech alias routes, fix the breadcrumb to reflect the canonical path
      const breadcrumbPath = isTechAlias && index === 0
        ? `/technologies/${part}`
        : cumulativePath;

      itemListElement.push({
        '@type': 'ListItem',
        'position': index + 2,
        'name': name,
        'item': `https://algorithyum.in${breadcrumbPath}`
      });
    });

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };

    // Inject combined JSON-LD schemas, flattening array-based schemas
    const finalSchema = Array.isArray(seoData.schema)
      ? [...seoData.schema, breadcrumbSchema]
      : [seoData.schema, breadcrumbSchema];

    let jsonLdScript = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(finalSchema);
    } else {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-jsonld';
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify(finalSchema);
      document.head.appendChild(jsonLdScript);
    }
  }, [pathname]);

  return null;
};
