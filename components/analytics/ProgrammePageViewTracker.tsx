"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics/track";
import type { AnalyticsProgramme, AnalyticsPagePath } from "@/lib/analytics/events";

type Props = {
  /** The one programme this mounted instance measures — never derived from anything the visitor
   *  can influence. */
  programme: AnalyticsProgramme;
  /** The exact route this instance is mounted on (e.g. "/courses/pte") — used both to fire only
   *  on a genuine navigation to that route and as the event's `page_path`. */
  pagePath: AnalyticsPagePath;
};

/**
 * Fires `programme_view` once per actual entry/navigation to the given programme's detail page —
 * not on every re-render of that page's server-rendered content, which never changes for this
 * leaf. PTE Step 12 generalises the original IELTS-only `IELTSPageViewTracker` into this one
 * small, typed, shared component so adding PTE support didn't mean duplicating the whole file
 * under a new name — both `app/courses/ielts/page.tsx` and `app/courses/pte/page.tsx` mount their
 * own instance with their own fixed `programme`/`pagePath` props, matching the WhatsAppFloat
 * pattern already used elsewhere: the page's own content sections stay server-rendered, and only
 * this tiny leaf is a Client Component. `useEffect`'s `pathname` dependency naturally
 * deduplicates: this only re-fires if `pathname` itself changes, i.e. on a genuine navigation, not
 * on an unrelated re-render.
 *
 * `track()` is a no-op until analytics is approved (see lib/analytics/config.ts) — if a real
 * provider is later activated, check whether its own automatic page-view measurement (e.g. GA4
 * Enhanced Measurement) already reports this route before also sending a manual page_view; see
 * docs/analytics-event-map.md's note on avoiding a duplicate page-view.
 */
export default function ProgrammePageViewTracker({ programme, pagePath }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== pagePath) return;
    track("programme_view", { programme, page_path: pagePath });
  }, [pathname, programme, pagePath]);

  return null;
}
