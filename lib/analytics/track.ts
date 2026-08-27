import { analyticsIsActive } from "./config";
import {
  isAnalyticsEventName,
  sanitizeAnalyticsPayload,
  type AnalyticsEventName,
  type AnalyticsPagePath,
  type AnalyticsPayload,
} from "./events";
import { programmeForPagePath, resolvePagePath } from "./pagePaths";

export { resolvePagePath };

/**
 * Shared dispatch, called only after a payload has already been validated by
 * `sanitizeAnalyticsPayload()` — see `track()` and `trackFromUntrustedAttributes()` below, the
 * only two entry points. Never throws, never blocks the caller, never receives a raw DOM event,
 * `href`, form value or URL.
 *
 * Currently always a no-op beyond the optional local debug log: `analyticsIsActive()` is
 * hard-coded to `false` in lib/analytics/config.ts until Aisha approves a provider, privacy
 * notice, consent approach and production measurement ID — see
 * docs/launch-verification.md's "Analytics activation checklist". Do not add a network call here
 * without updating that document first.
 */
function dispatch(name: AnalyticsEventName, payload: AnalyticsPayload): void {
  if (process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "1") {
    // Local development visibility only — disabled by default (requires the opt-in env flag
    // above) and never runs in a production build. Logs only the sanitised, allowlisted payload,
    // never a form value, URL or query string.
    console.debug("[analytics:dev-only]", name, payload);
  }

  if (!analyticsIsActive()) return;

  // Unreachable until analyticsIsActive() can return true — no approved provider exists yet.
  // When one is approved, its dispatch call belongs here, guarded by the same asynchronous,
  // non-blocking method the provider recommends (e.g. gtag's fire-and-forget event call) so a
  // click or navigation is never delayed waiting on it. See docs/analytics-event-map.md's
  // "Provider mapping" section for the planned generate_lead mapping from a confirmed
  // assessment_form_submit once GA4 is approved.
}

/**
 * The entry point for every typed, compile-time-checked call site (e.g. components/
 * DiagnosticForm.tsx). TypeScript already enforces `payload`'s shape here; sanitizing again is
 * defence in depth against a stray cast, not the primary guard.
 */
export function track(name: AnalyticsEventName, payload: AnalyticsPayload): void {
  const safePayload = sanitizeAnalyticsPayload(payload);
  if (!safePayload) return;
  dispatch(name, safePayload);
}

/**
 * The one entry point for values that are NOT compile-time-checked because they originate as
 * untrusted strings read from a `data-analytics-*` DOM attribute — see
 * components/analytics/AnalyticsListener.tsx, the only caller. `programme` is derived from the
 * current pathname (see `programmeForPagePath()` in lib/analytics/pagePaths.ts), never read from
 * a dataset attribute (PTE Step 12, Part C: "Do not trust data-* attributes simply because the
 * server rendered them") — every other value is validated against the same allowlists `track()`
 * uses before anything is dispatched.
 */
export function trackFromUntrustedAttributes(
  eventNameCandidate: unknown,
  attributeCandidate: { section?: unknown; intent?: unknown; source?: unknown },
  pagePath: AnalyticsPagePath
): void {
  if (!isAnalyticsEventName(eventNameCandidate)) return;
  const programme = programmeForPagePath(pagePath);
  if (!programme) return;
  const safePayload = sanitizeAnalyticsPayload({
    programme,
    page_path: pagePath,
    ...attributeCandidate,
  });
  if (!safePayload) return;
  dispatch(eventNameCandidate, safePayload);
}
