/**
 * The single fail-closed gate deciding whether analytics may ever transmit anything (IELTS
 * Step 12). See docs/launch-verification.md's "Analytics activation checklist" for the full list
 * of owner/legal decisions required before this can change.
 */

/**
 * Hard-coded `false`. Activation requires a deliberate, reviewed source change recording that
 * Aisha has approved: a chosen provider, the purpose of collection, a consent approach suited to
 * the site's audiences, an approved privacy notice (and cookie notice if required), a
 * data-retention choice, confirmed account ownership, and whether advertising/remarketing/
 * signals/session-recording features are enabled. A valid-shaped measurement ID in the
 * environment is never sufficient on its own — see `isValidGaMeasurementId()` below, which
 * checks shape only, not ownership or approval.
 */
export function analyticsIsApproved(): boolean {
  return false;
}

/**
 * Whether `value` is a plausibly real GA4 measurement ID — shape only. A public GA4 measurement
 * ID always begins "G-" followed by alphanumeric characters; this rejects anything empty, a
 * documentation example, or an obvious placeholder. Shape validity is not proof of ownership.
 */
export function isValidGaMeasurementId(value: string): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  if (trimmed.toUpperCase().includes("PLACEHOLDER")) return false;
  if (trimmed.toUpperCase().includes("EXAMPLE")) return false;
  return /^G-[A-Z0-9]{6,12}$/i.test(trimmed);
}

/**
 * True only when both the source-level approval gate above is `true` AND a valid-shaped
 * production measurement ID is present. Until `analyticsIsApproved()` is changed by a deliberate,
 * documented edit, this is always `false` regardless of environment configuration — see
 * lib/analytics/track.ts, the only caller.
 */
export function analyticsIsActive(): boolean {
  return analyticsIsApproved() && isValidGaMeasurementId(process.env.NEXT_PUBLIC_GA_ID ?? "");
}

// Deliberately no equivalent helper for NEXT_PUBLIC_CLARITY_ID or NEXT_PUBLIC_META_PIXEL_ID —
// Clarity session recording and Meta Pixel both need their own separate purpose, consent,
// disclosure and data-minimisation decisions and are explicitly deferred (IELTS Step 12, Part D).
// Do not wire either merely because the environment variable name already exists in .env.example.
