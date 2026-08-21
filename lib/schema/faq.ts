export interface FAQItem {
  q: string;
  a: string;
}

export function getFaqSchema(items: FAQItem[]) {
  if (!items || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function extractFaqSchemaFromBlocks(blocks: any[]): any {
  if (!Array.isArray(blocks)) return null;
  const faqBlock = blocks.find((b: any) => b && b.type === 'faq');
  if (!faqBlock || !Array.isArray(faqBlock.items)) return null;
  return getFaqSchema(faqBlock.items);
}
