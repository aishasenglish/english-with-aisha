"use client";

import { useEffect } from "react";
import { trackFromUntrustedAttributes, resolvePagePath } from "@/lib/analytics/track";

/**
 * One small delegated click listener mounted once near the root (see app/layout.tsx) — the
 * "small client boundary for delegated click measurement" from IELTS Step 12's Part E, so
 * server-rendered IELTS sections never need to become Client Components just to add a click
 * handler. It reads only the fixed `data-analytics-*` attributes on the closest matching
 * ancestor of whatever was clicked — never the element's `href`, visible text or surrounding
 * content — and every value passes through `trackFromUntrustedAttributes()`'s allowlist checks
 * before anything is recorded, since dataset strings are untrusted input, not compile-time-
 * checked values. That function (and `track()`, its typed sibling) is a no-op until analytics is
 * explicitly approved (see lib/analytics/config.ts), so this listener currently never produces a
 * network request; it exists so instrumentation can be exercised and tested locally today.
 */
export default function AnalyticsListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const el = event.target.closest<HTMLElement>("[data-analytics-event]");
      if (!el) return;

      const pagePath = resolvePagePath(window.location.pathname);
      if (!pagePath) return;

      trackFromUntrustedAttributes(
        el.dataset.analyticsEvent,
        {
          section: el.dataset.analyticsSection,
          intent: el.dataset.analyticsIntent,
          source: el.dataset.analyticsSource,
        },
        pagePath
      );
    }

    // One listener on the document, not one per CTA — matches every current and future
    // data-analytics-event element without re-registering on route changes.
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
