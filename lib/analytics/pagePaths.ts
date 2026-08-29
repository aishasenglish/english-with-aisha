import type { AnalyticsPagePath, AnalyticsProgramme } from "./events";

/**
 * Split out of lib/analytics/track.ts (PTE Step 12) so scripts/analytics-selftest.mts can import
 * and directly test these two pure, DOM-free helpers under Node's native TypeScript execution.
 * Node's ESM resolver needs an explicit extension on every *runtime* relative import, but this
 * file's only import is `import type` — fully erased by TypeScript before Node ever tries to
 * resolve it — so this file has no runtime imports at all and can be executed directly, exactly
 * like lib/analytics/events.ts and lib/analytics/config.ts already are. track.ts (which also
 * imports the `dispatch()`-facing pieces of events.ts/config.ts at runtime) cannot be imported
 * directly this way, which is why this split exists.
 */

/** Which programme owns each programme-specific detail page — used by
 *  `trackFromUntrustedAttributes()` in lib/analytics/track.ts to derive `programme` from the
 *  trustworthy current pathname rather than from a spoofable `data-analytics-*` attribute.
 *  `/free-diagnostic-test` is deliberately absent — it's shared by every instrumented programme,
 *  and no component currently renders `data-analytics-*` elements there (DiagnosticForm.tsx calls
 *  the typed `track()` directly for its own lifecycle events instead). */
const PAGE_PATH_PROGRAMME: Partial<Record<AnalyticsPagePath, AnalyticsProgramme>> = {
  "/courses/ielts": "ielts",
  "/courses/pte": "pte",
  "/courses/toefl": "toefl",
  "/courses/english-writing": "english-writing",
};

export function programmeForPagePath(pagePath: AnalyticsPagePath): AnalyticsProgramme | undefined {
  return PAGE_PATH_PROGRAMME[pagePath];
}

/**
 * Resolves the current pathname to one of the allowlisted analytics page paths — never
 * `window.location.href`, `document.URL`, or anything carrying a query string. Returns
 * `undefined` for any other route, so an unrecognised path is dropped rather than forwarded.
 */
export function resolvePagePath(pathname: string): AnalyticsPagePath | undefined {
  if (pathname === "/courses/ielts") return "/courses/ielts";
  if (pathname === "/courses/pte") return "/courses/pte";
  if (pathname === "/courses/toefl") return "/courses/toefl";
  if (pathname === "/courses/english-writing") return "/courses/english-writing";
  if (pathname === "/free-diagnostic-test") return "/free-diagnostic-test";
  return undefined;
}
