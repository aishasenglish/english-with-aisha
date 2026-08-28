/**
 * Programme detail routes that provide their own dense above-the-fold content and contextual
 * WhatsApp actions (hero, learning-format/pricing/availability CTAs, final enquiry section) —
 * see components/WhatsAppFloat.tsx and components/UtilityBar.tsx. Centralised here as one named,
 * exact-match route list (PTE Step 11, extended to TOEFL in TOEFL Step 11, extended to Spoken
 * English in Spoken English Step 11) so a route that earns this treatment is added in one place
 * instead of near-duplicate inline `pathname === "/courses/ielts"` conditions. Exact matching
 * only — a nested path under one of these routes does not automatically qualify.
 */
export const PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME: readonly string[] = [
  "/courses/ielts",
  "/courses/pte",
  "/courses/toefl",
  "/courses/spoken-english",
];

/** True only for an exact match against the list above — never a prefix or nested-route match. */
export function isProgrammeDetailRouteWithOwnChrome(pathname: string | null): boolean {
  return pathname !== null && PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME.includes(pathname);
}
