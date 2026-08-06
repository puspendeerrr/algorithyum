// ============================================================
// ALGORITHYUM CONTENT ENGINE — TYPE SYSTEM
// All page data is built from ContentBlock[] arrays.
// Adding a new page = one new data object in the correct map.
// ============================================================

export interface FAQItem {
  q: string;
  a: string;
}

// ── Page Types ──────────────────────────────────────────────
export type PageType =
  | 'service'
  | 'technology'
  | 'industry'
  | 'comparison'
  | 'guide'
  | 'blog'
  | 'case-study'
  | 'resource'
  | 'cost'
  | 'faq';

// ── Block Types ──────────────────────────────────────────────
export type BlockType =
  // Core layout
  | 'hero'
  | 'quick-summary'
  | 'overview'
  | 'text'
  // Items/cards grids
  | 'capabilities'
  | 'features'
  | 'feature-cards'
  | 'use-cases'
  | 'benefits'
  | 'industry-apps'
  | 'industry-applications'
  // Technical content
  | 'tech-stack'
  | 'architecture'
  | 'workflow'
  | 'process'
  | 'development-process'
  | 'timeline'
  | 'stepper'
  // Problem/solution
  | 'business-problems'
  | 'solutions'
  | 'challenges'
  | 'objectives'
  | 'best-practices'
  | 'common-mistakes'
  | 'security'
  | 'security-considerations'
  | 'scalability'
  | 'performance'
  // Lists & checks
  | 'checklist'
  // Tables
  | 'comparison-table'
  | 'pricing-table'
  | 'stats-grid'
  // Rich content
  | 'callout'
  | 'quote'
  | 'code-block'
  | 'references'
  | 'resource-card'
  // Navigation & conversion
  | 'faq'
  | 'cta'
  | 'related-content';

// ── Base Block ───────────────────────────────────────────────
export interface BaseBlock {
  id: string;
  type: BlockType;
  title?: string;   // Renders as <h2> anchor
  subtitle?: string;
}

// ── Individual Block Interfaces ───────────────────────────────

export interface HeroBlock extends BaseBlock {
  type: 'hero';
  title: string;
  subtitle: string;
  badge?: string;   // Optional category badge shown above title
  primaryCta?: { label: string; action: 'consultation' | 'link'; url?: string };
  secondaryCta?: { label: string; url: string };
}

export interface QuickSummaryBlock extends BaseBlock {
  type: 'quick-summary';
  items: string[];  // 3–5 headline facts displayed in a strip
}

export interface OverviewBlock extends BaseBlock {
  type: 'overview';
  content: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
}

export interface CapabilitiesBlock extends BaseBlock {
  type: 'capabilities';
  items: { title: string; desc: string }[];
}

export interface FeaturesBlock extends BaseBlock {
  type: 'features';
  items: { title: string; desc: string }[];
}

export interface FeatureCardsBlock extends BaseBlock {
  type: 'feature-cards';
  items: { icon?: string; title: string; desc: string; highlight?: boolean }[];
}

export interface UseCasesBlock extends BaseBlock {
  type: 'use-cases';
  items: { title: string; desc: string }[];
}

export interface BenefitsBlock extends BaseBlock {
  type: 'benefits';
  items: { title: string; desc: string; metric?: string }[];
}

export interface IndustryAppsBlock extends BaseBlock {
  type: 'industry-apps';
  items: { industry: string; application: string; example?: string }[];
}

export interface TechStackBlock extends BaseBlock {
  type: 'tech-stack';
  technologies: string[];
  grouped?: { label: string; items: string[] }[];  // Optional grouped display
}

export interface ArchitectureBlock extends BaseBlock {
  type: 'architecture';
  content: string;         // Prose description of the architecture
  layers?: { label: string; components: string[] }[];  // Optional layer list
  diagramPlaceholder?: string;  // Description of what a diagram would show
}

export interface WorkflowBlock extends BaseBlock {
  type: 'workflow';
  steps: { label: string; title: string; desc: string }[];
}

export interface ProcessBlock extends BaseBlock {
  type: 'process';
  steps: { title: string; desc: string }[];
}

export interface TimelineBlock extends BaseBlock {
  type: 'timeline';
  items: { date?: string; title: string; desc: string }[];
}

export interface StepperBlock extends BaseBlock {
  type: 'stepper';
  steps: { title: string; desc: string }[];
}

export interface BusinessProblemsBlock extends BaseBlock {
  type: 'business-problems';
  items: string[];
}

export interface SolutionsBlock extends BaseBlock {
  type: 'solutions';
  items: string[];
}

export interface BestPracticesBlock extends BaseBlock {
  type: 'best-practices';
  items: string[];
}

export interface CommonMistakesBlock extends BaseBlock {
  type: 'common-mistakes';
  items: string[];
}

export interface SecurityBlock extends BaseBlock {
  type: 'security';
  items: string[];
}

export interface ScalabilityBlock extends BaseBlock {
  type: 'scalability';
  items: string[];
}

export interface PerformanceBlock extends BaseBlock {
  type: 'performance';
  metrics: { label: string; value: string; context?: string }[];
}

export interface ChecklistBlock extends BaseBlock {
  type: 'checklist';
  items: string[];
}

export interface ComparisonTableBlock extends BaseBlock {
  type: 'comparison-table';
  columns: { key: string; label: string }[];
  rows: Record<string, string>[];
}

export interface PricingTableBlock extends BaseBlock {
  type: 'pricing-table';
  tiers: {
    name: string;
    price?: string;
    period?: string;
    description: string;
    features: string[];
    highlight?: boolean;
    cta?: string;
  }[];
}

export interface StatsGridBlock extends BaseBlock {
  type: 'stats-grid';
  stats: { value: string; label: string; context?: string }[];
}

export interface CalloutBlock extends BaseBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'tip' | 'recommendation';
  content: string;
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  quote: string;
  author: string;
  authorTitle?: string;
}

export interface CodeBlock extends BaseBlock {
  type: 'code-block';
  language: string;
  code: string;
  caption?: string;
}

export interface ReferencesBlock extends BaseBlock {
  type: 'references';
  items: { title: string; url: string; domain?: string }[];
}

export interface ResourceCardBlock extends BaseBlock {
  type: 'resource-card';
  resources: {
    type: 'pdf' | 'checklist' | 'template' | 'whitepaper' | 'guide';
    title: string;
    desc: string;
    size?: string;
    url?: string;  // External URL or internal path
  }[];
}

export interface FaqBlock extends BaseBlock {
  type: 'faq';
  items: FAQItem[];
}

export interface CtaBlock extends BaseBlock {
  type: 'cta';
  headline: string;
  desc: string;
  buttonLabel: string;
  buttonAction?: 'contact' | 'consultation' | 'link';
  buttonUrl?: string;
}

export interface RelatedContentBlock extends BaseBlock {
  type: 'related-content';
  contentType?: 'services' | 'technologies' | 'blog' | 'guides' | 'comparisons' | 'industries' | 'case-studies' | 'resources';
  items?: { id?: string; title: string; desc?: string; url: string; category?: string }[];
}

export interface ChallengesBlock extends BaseBlock {
  type: 'challenges';
  items: string[] | { title: string; desc: string }[];
}

export interface DevelopmentProcessBlock extends BaseBlock {
  type: 'development-process';
  steps: { title: string; desc: string }[];
}

export interface IndustryApplicationsBlock extends BaseBlock {
  type: 'industry-applications';
  items: { industry: string; application: string; example?: string }[];
}

export interface SecurityConsiderationsBlock extends BaseBlock {
  type: 'security-considerations';
  items: string[];
}

export interface ObjectivesBlock extends BaseBlock {
  type: 'objectives';
  items: string[];
}

// ── ContentBlock Union ────────────────────────────────────────
export type ContentBlock =
  | HeroBlock
  | QuickSummaryBlock
  | OverviewBlock
  | TextBlock
  | CapabilitiesBlock
  | FeaturesBlock
  | FeatureCardsBlock
  | UseCasesBlock
  | BenefitsBlock
  | IndustryAppsBlock
  | IndustryApplicationsBlock
  | TechStackBlock
  | ArchitectureBlock
  | WorkflowBlock
  | ProcessBlock
  | DevelopmentProcessBlock
  | TimelineBlock
  | StepperBlock
  | BusinessProblemsBlock
  | SolutionsBlock
  | ChallengesBlock
  | ObjectivesBlock
  | BestPracticesBlock
  | CommonMistakesBlock
  | SecurityBlock
  | SecurityConsiderationsBlock
  | ScalabilityBlock
  | PerformanceBlock
  | ChecklistBlock
  | ComparisonTableBlock
  | PricingTableBlock
  | StatsGridBlock
  | CalloutBlock
  | QuoteBlock
  | CodeBlock
  | ReferencesBlock
  | ResourceCardBlock
  | FaqBlock
  | CtaBlock
  | RelatedContentBlock;

// ── Base SEO Data ─────────────────────────────────────────────
export interface BaseSEOData {
  slug: string;
  title: string;
  description: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterImage?: string;
  keywords?: string[];
  tags?: string[];           // Semantic tags for smart linking engine
  pageType?: PageType;       // Enables correct schema selection
  relatedTo?: string[];      // Explicit slug relationships (overrides tag-based)

  // Optional display fields
  name?: string;
  name1?: string;
  name2?: string;
  tag?: string;
  category?: string;

  // Reading experience fields
  author?: string;
  authorTitle?: string;
  datePublished?: string;
  dateUpdated?: string;
  readTime?: string;         // Auto-computed if not set
}

// ── Dynamic Page Data ─────────────────────────────────────────
export interface DynamicPageData extends BaseSEOData {
  blocks: ContentBlock[];
}

// ── Page-Type Aliases ─────────────────────────────────────────
export type ServicePageData     = DynamicPageData;
export type TechnologyPageData  = DynamicPageData;
export type IndustryPageData    = DynamicPageData;
export type ComparisonPageData  = DynamicPageData;
export type GuidePageData       = DynamicPageData;
export type BlogPageData        = DynamicPageData;
export type CaseStudyPageData   = DynamicPageData;
export type ResourcePageData    = DynamicPageData;
export type CostPageData        = DynamicPageData;
export type FaqHubPageData      = DynamicPageData;
