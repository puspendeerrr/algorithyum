'use client';

import React, { useEffect, useRef, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  GA_MEASUREMENT_ID,
  isDebugMode,
  trackPageView,
  trackError,
  trackScrollDepth,
  trackEmailClick,
  trackPhoneClick,
  trackOutboundLink,
  trackDownload,
  trackWebVitals,
} from '@/lib/analytics';

const AnalyticsTracker: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);
  const trackedScrollDepths = useRef<Set<number>>(new Set());

  // 1. Centralized SPA Route Change & Initial Page Load Tracking
  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString();
    const fullUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Prevent duplicate page_view events for identical routes
    if (lastTrackedUrl.current === fullUrl) return;

    lastTrackedUrl.current = fullUrl;
    trackedScrollDepths.current.clear();

    trackPageView(fullUrl);
  }, [pathname, searchParams]);

  // 2. Global Event Delegation (Runtime Errors, Scroll Depth, Link & Download Clicks, Web Vitals)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // A. Runtime JS Error Monitoring
    const handleGlobalError = (event: ErrorEvent) => {
      const errorMsg = event.message || 'JavaScript Runtime Error';
      const fileInfo = event.filename ? ` at ${event.filename}:${event.lineno}` : '';
      trackError(`${errorMsg}${fileInfo}`, false);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        reason instanceof Error
          ? reason.message
          : typeof reason === 'string'
          ? reason
          : 'Unhandled Promise Rejection';
      trackError(`Unhandled Rejection: ${message}`, false);
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // B. Scroll Depth Monitoring (25%, 50%, 75%, 100%)
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimeout) return;

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        const scrollTop = window.scrollY || window.pageYOffset;
        const winHeight = window.innerHeight;
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight
        );

        if (docHeight <= winHeight) return;

        const scrollPercent = Math.round(((scrollTop + winHeight) / docHeight) * 100);
        const thresholds = [25, 50, 75, 100];

        thresholds.forEach((threshold) => {
          if (scrollPercent >= threshold && !trackedScrollDepths.current.has(threshold)) {
            trackedScrollDepths.current.add(threshold);
            trackScrollDepth(threshold, window.location.pathname);
          }
        });
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // C. Global Link Click Listener (Outbound, Email, Phone, Downloads)
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      const href = anchor.href;

      // Email Click
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '').split('?')[0];
        trackEmailClick(email);
        return;
      }

      // Phone Click
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        trackPhoneClick(phone);
        return;
      }

      // File Download Check
      const downloadPattern = /\.(pdf|zip|gz|docx?|xlsx?|pptx?|mp4|csv|dmg|exe)$/i;
      if (downloadPattern.test(href) || anchor.hasAttribute('download')) {
        const fileName = href.split('/').pop() || 'file';
        trackDownload(fileName);
        return;
      }

      // Outbound External Link Click
      try {
        const urlObj = new URL(href, window.location.origin);
        if (urlObj.hostname && urlObj.hostname !== window.location.hostname) {
          trackOutboundLink(href, anchor.textContent?.trim() || href);
        }
      } catch {
        // Ignore invalid URLs
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // D. Core Web Vitals Monitoring via PerformanceObserver API
    if ('PerformanceObserver' in window) {
      try {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            trackWebVitals({
              name: 'LCP',
              value: lastEntry.startTime,
              id: 'lcp-metric',
              rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor',
            });
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              trackWebVitals({
                name: 'FCP',
                value: entry.startTime,
                id: 'fcp-metric',
                rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor',
              });
            }
          });
        });
        fcpObserver.observe({ type: 'paint', buffered: true });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          entryList.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          trackWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'cls-metric',
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // INP / FID (Interaction to Next Paint / First Input Delay)
        const fidObserver = new PerformanceObserver((entryList) => {
          entryList.getEntries().forEach((entry: any) => {
            const delay = entry.processingStart - entry.startTime;
            trackWebVitals({
              name: 'INP',
              value: delay,
              id: 'inp-metric',
              rating: delay < 200 ? 'good' : delay < 500 ? 'needs-improvement' : 'poor',
            });
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch {
        // Fallback for browsers with partial PerformanceObserver support
      }
    }

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return null;
};

export const Analytics: React.FC = () => {
  if (!GA_MEASUREMENT_ID) return null;

  const isDebug = isDebugMode();

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      <Script
        id="ga-gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              ${isDebug ? 'debug_mode: true,' : ''}
            });
          `,
        }}
      />
    </>
  );
};
