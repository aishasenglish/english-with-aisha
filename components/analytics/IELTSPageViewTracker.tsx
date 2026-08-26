"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics/track";

/**
 * Fires `programme_view` once per actual entry/navigation to `/courses/ielts` — not on every
 * re-render of the page's server-rendered content, which never changes for this leaf. Mounted
 * only on that one route (see app/courses/ielts/page.tsx) as a single small Client Component
 * leaf, matching the WhatsAppFloat pattern already used elsewhere — the page's own content
 * sections stay server-rendered. `useEffect`'s `pathname` dependency naturally deduplicates:
 * this only re-fires if `pathname` itself changes, i.e. on a genuine navigation, not on an
 * unrelated re-render.
 *
 * `track()` is a no-op until analytics is approved (see lib/analytics/config.ts) — if a real
 * provider is later activated, check whether its own automatic page-view measurement (e.g. GA4
 * Enhanced Measurement) already reports this route before also sending a manual page_view; see
 * docs/analytics-event-map.md's note on avoiding a duplicate page-view.
 */
export default function IELTSPageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/courses/ielts") return;
    track("programme_view", { programme: "ielts", page_path: "/courses/ielts" });
  }, [pathname]);

  return null;
}
