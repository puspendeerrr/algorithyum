/**
 * Enterprise Google Analytics 4 (GA4) Analytics Engine
 * Supports Next.js App Router, Core Web Vitals, Exception Monitoring,
 * Scroll Tracking, Custom Business Events, and Development Debugging.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.VITE_GA_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_GA_ID ||
  'G-HETYWM5GQ4';

export const isDebugMode = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const getGAMeasurementId = (): string => {
  return GA_MEASUREMENT_ID;
};

export const isGAInitialized = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Send a generic event to Google Analytics 4
 */
export const trackEvent = (action: string, params: Record<string, any> = {}): void => {
  if (typeof window === 'undefined') return;

  const debug = isDebugMode();
  const eventPayload = {
    ...params,
    ...(debug ? { debug_mode: true } : {}),
  };

  if (debug) {
    console.log(`[GA4 Event] ${action}:`, eventPayload);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, eventPayload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      ...eventPayload,
    });
  }
};

/**
 * Send page_view event on route change or initial load
 */
export const trackPageView = (url?: string, title?: string): void => {
  if (typeof window === 'undefined') return;

  const pagePath = url || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  const debug = isDebugMode();

  if (debug) {
    console.log(`[GA4 PageView] ${pagePath} (${pageTitle})`);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
      send_page_view: true,
      ...(debug ? { debug_mode: true } : {}),
    });
  } else {
    trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track Core Web Vitals (CLS, LCP, INP, FCP, TTFB)
 */
export interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta?: number;
  rating?: string;
}

export const trackWebVitals = (metric: WebVitalMetric): void => {
  const formattedValue = metric.name === 'CLS' ? Math.round(metric.value * 1000) / 1000 : Math.round(metric.value);

  trackEvent('web_vitals', {
    event_category: 'Web Vitals',
    event_action: metric.name,
    event_label: metric.id,
    value: formattedValue,
    metric_rating: metric.rating || 'unknown',
    non_interaction: true,
  });
};

/**
 * Track runtime errors & unhandled promise rejections
 */
export const trackError = (description: string, fatal: boolean = false, extraDetails: Record<string, any> = {}): void => {
  trackEvent('exception', {
    description: description.substring(0, 150),
    fatal: fatal,
    ...extraDetails,
  });
};

/**
 * Track scroll depth thresholds (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (depthPercent: number, path: string): void => {
  trackEvent('scroll_depth', {
    event_category: 'Engagement',
    event_label: `${depthPercent}%`,
    scroll_depth_threshold: depthPercent,
    page_path: path,
  });
};

/**
 * Track form submissions (Contact form, Consultation modal)
 */
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  extraData: Record<string, any> = {}
): void => {
  trackEvent('form_submission', {
    event_category: 'Form',
    form_name: formName,
    form_status: success ? 'success' : 'failure',
    ...extraData,
  });
};

/**
 * Track Call To Action (CTA) clicks
 */
export const trackCTAClick = (ctaText: string, location?: string): void => {
  trackEvent('cta_click', {
    event_category: 'CTA',
    cta_text: ctaText,
    cta_location: location || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
  });
};

/**
 * Track outbound external links
 */
export const trackOutboundLink = (url: string, label?: string): void => {
  trackEvent('outbound_link_click', {
    event_category: 'Outbound Link',
    link_url: url,
    link_label: label || url,
  });
};

/**
 * Track file downloads (.pdf, .zip, etc.)
 */
export const trackDownload = (fileName: string, fileType?: string): void => {
  trackEvent('file_download', {
    event_category: 'Download',
    file_name: fileName,
    file_extension: fileType || fileName.split('.').pop() || 'unknown',
  });
};

/**
 * Track email mailto: link clicks
 */
export const trackEmailClick = (emailAddress: string): void => {
  trackEvent('email_click', {
    event_category: 'Contact',
    email_address: emailAddress,
  });
};

/**
 * Track phone tel: link clicks
 */
export const trackPhoneClick = (phoneNumber: string): void => {
  trackEvent('phone_click', {
    event_category: 'Contact',
    phone_number: phoneNumber,
  });
};

/**
 * Track blog article views
 */
export const trackBlogArticleOpen = (articleSlug: string, articleTitle: string): void => {
  trackEvent('blog_article_open', {
    event_category: 'Content',
    article_slug: articleSlug,
    article_title: articleTitle,
  });
};

/**
 * Track career application clicks
 */
export const trackCareerApplicationClick = (positionTitle: string = 'General Inquiry'): void => {
  trackEvent('career_application_click', {
    event_category: 'Careers',
    position_title: positionTitle,
  });
};
