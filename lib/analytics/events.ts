/**
 * Strict, allowlisted event contract for the IELTS conversion funnel (IELTS Step 12). This is the
 * only place event names, sections, intents and payload keys are defined — no caller may invent a
 * new event name, add a new payload key, or pass an unbounded string value. See
 * docs/analytics-event-map.md for the human-readable funnel definition and reporting notes, and
 * docs/launch-verification.md for why every event currently resolves to a silent no-op (no
 * provider, consent approach or privacy notice has been approved — see lib/analytics/track.ts).
 *
 * Absolutely nothing defined here may carry a name, email address, phone/WhatsApp number, exact
 * country/city/time zone, IELTS score, deadline, free-text value, prefilled message, form value,
 * or a complete URL/query string. Every value below is a short, fixed, non-sensitive code.
 */

/** The seven events a caller may record. `generate_lead` is deliberately not a callable event —
 *  it is a provider-specific mapping a future approved adapter may derive internally from a
 *  confirmed `assessment_form_submit`, never something a component emits directly. */
export type AnalyticsEventName =
  | "programme_view"
  | "assessment_cta_click"
  | "whatsapp_click"
  | "email_click"
  | "assessment_form_start"
  | "assessment_form_error"
  | "assessment_form_submit";

const ANALYTICS_EVENT_NAMES = new Set<AnalyticsEventName>([
  "programme_view",
  "assessment_cta_click",
  "whatsapp_click",
  "email_click",
  "assessment_form_start",
  "assessment_form_error",
  "assessment_form_submit",
]);

/** Only "ielts" exists today. A future programme would need its own reviewed addition here —
 *  never a raw string passed through from a component. */
export type AnalyticsProgramme = "ielts";

/** A controlled pathname mapping — never `window.location.href`, `document.URL`, or a query
 *  string. See lib/analytics/track.ts's `resolvePagePath()`, the only place this is derived. */
export type AnalyticsPagePath = "/courses/ielts" | "/free-diagnostic-test";

export type AnalyticsSection =
  | "hero"
  | "score_profile"
  | "learning_format"
  | "pricing"
  | "availability"
  | "final_enquiry"
  | "diagnostic_form";

const ANALYTICS_SECTIONS = new Set<AnalyticsSection>([
  "hero",
  "score_profile",
  "learning_format",
  "pricing",
  "availability",
  "final_enquiry",
  "diagnostic_form",
]);

export type AnalyticsIntent =
  | "discuss_goal"
  | "share_score_profile"
  | "ask_format"
  | "ask_fee"
  | "ask_availability"
  | "ask_intake"
  | "request_assessment"
  | "continue_on_whatsapp"
  | "send_email";

const ANALYTICS_INTENTS = new Set<AnalyticsIntent>([
  "discuss_goal",
  "share_score_profile",
  "ask_format",
  "ask_fee",
  "ask_availability",
  "ask_intake",
  "request_assessment",
  "continue_on_whatsapp",
  "send_email",
]);

/** The resolved, allowlisted source — never the raw `?source=` query value. */
export type AnalyticsSource = "ielts-page" | "general";

const ANALYTICS_SOURCES = new Set<AnalyticsSource>(["ielts-page", "general"]);

export type AnalyticsErrorType = "configuration" | "network" | "provider" | "validation";

const ANALYTICS_ERROR_TYPES = new Set<AnalyticsErrorType>([
  "configuration",
  "network",
  "provider",
  "validation",
]);

/**
 * The complete, fixed set of properties any event may carry. Every field is a short bounded code,
 * never free text. `programme` and `page_path` are required on every event; `section`, `intent`,
 * `source` and `error_type` are used only where the specific event calls for them (see
 * docs/analytics-event-map.md's per-event table) — an event that doesn't need a field should
 * simply omit it, not fill it with a placeholder.
 */
export type AnalyticsPayload = {
  programme: AnalyticsProgramme;
  page_path: AnalyticsPagePath;
  section?: AnalyticsSection;
  intent?: AnalyticsIntent;
  source?: AnalyticsSource;
  error_type?: AnalyticsErrorType;
};

export function isAnalyticsEventName(value: unknown): value is AnalyticsEventName {
  return typeof value === "string" && ANALYTICS_EVENT_NAMES.has(value as AnalyticsEventName);
}

/**
 * Rebuilds a payload keeping only the exact allowlisted keys with values found in their
 * corresponding allowlist above — anything else (an unexpected key, a typo, a raw string that
 * isn't one of the fixed codes) is silently dropped rather than forwarded. This is the one place
 * that guards every event, whether it reaches `track()` from a typed call site or from a
 * `data-analytics-*` attribute read by the delegated click listener (see
 * components/analytics/AnalyticsListener.tsx), where values arrive as untrusted strings.
 */
export function sanitizeAnalyticsPayload(input: {
  programme?: unknown;
  page_path?: unknown;
  section?: unknown;
  intent?: unknown;
  source?: unknown;
  error_type?: unknown;
}): AnalyticsPayload | null {
  if (input.programme !== "ielts") return null;
  if (input.page_path !== "/courses/ielts" && input.page_path !== "/free-diagnostic-test") return null;

  const payload: AnalyticsPayload = {
    programme: "ielts",
    page_path: input.page_path,
  };

  if (typeof input.section === "string" && ANALYTICS_SECTIONS.has(input.section as AnalyticsSection)) {
    payload.section = input.section as AnalyticsSection;
  }
  if (typeof input.intent === "string" && ANALYTICS_INTENTS.has(input.intent as AnalyticsIntent)) {
    payload.intent = input.intent as AnalyticsIntent;
  }
  if (typeof input.source === "string" && ANALYTICS_SOURCES.has(input.source as AnalyticsSource)) {
    payload.source = input.source as AnalyticsSource;
  }
  if (typeof input.error_type === "string" && ANALYTICS_ERROR_TYPES.has(input.error_type as AnalyticsErrorType)) {
    payload.error_type = input.error_type as AnalyticsErrorType;
  }

  return payload;
}
