/**
 * Strict, allowlisted event contract for the shared IELTS/PTE/TOEFL/English-Writing conversion
 * funnel (IELTS Step 12, extended to PTE in PTE Step 12, to TOEFL in TOEFL Step 12, and to English
 * Writing in English Writing Step 12). This is the only place event names, programmes, sections,
 * intents and payload keys are defined — no caller may invent a new event name, add a new payload
 * key, or pass an unbounded string value. A future programme would need its own reviewed addition
 * here, following the same pattern each of these additions established — never a raw string passed
 * through from a component. Spoken English remains deliberately absent — it has not yet had its
 * own reviewed Step 12 extension; do not add it as a side effect of another programme's task. See
 * docs/analytics-event-map.md for the human-readable funnel definition and reporting notes, and
 * docs/launch-verification.md for why every event currently resolves to a silent no-op (no
 * provider, consent approach or privacy notice has been approved — see lib/analytics/track.ts).
 *
 * Absolutely nothing defined here may carry a name, email address, phone/WhatsApp number, exact
 * country/city/time zone, IELTS/PTE/TOEFL score, writing type/context/reader/purpose/difficulty,
 * deadline, free-text value, prefilled message, form value, or a complete URL/query string. Every
 * value below is a short, fixed, non-sensitive code.
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

/** "ielts" and "pte" (PTE Step 12), extended with "toefl" (TOEFL Step 12) and "english-writing"
 *  (English Writing Step 12). A future programme would need its own reviewed addition here —
 *  never a raw string passed through from a component. "spoken-english" is deliberately absent
 *  until its own reviewed Step 12 extension. */
export type AnalyticsProgramme = "ielts" | "pte" | "toefl" | "english-writing";

/** A controlled pathname mapping — never `window.location.href`, `document.URL`, or a query
 *  string. See lib/analytics/track.ts's `resolvePagePath()`, the only place this is derived. */
export type AnalyticsPagePath =
  | "/courses/ielts"
  | "/courses/pte"
  | "/courses/toefl"
  | "/courses/english-writing"
  | "/free-diagnostic-test";

/** Which page paths are valid for a given programme. `/free-diagnostic-test` is shared by every
 *  instrumented programme (the detailed enquiry form each locks to its own variant); each
 *  programme detail page is exclusive to its own programme. Used by `sanitizeAnalyticsPayload()`
 *  below to reject an impossible combination like `programme: "pte"` with
 *  `page_path: "/courses/ielts"` outright, rather than silently letting it through. */
const VALID_PAGE_PATHS_BY_PROGRAMME: Record<AnalyticsProgramme, readonly AnalyticsPagePath[]> = {
  ielts: ["/courses/ielts", "/free-diagnostic-test"],
  pte: ["/courses/pte", "/free-diagnostic-test"],
  toefl: ["/courses/toefl", "/free-diagnostic-test"],
  "english-writing": ["/courses/english-writing", "/free-diagnostic-test"],
};

export type AnalyticsSection =
  | "hero"
  | "score_profile"
  | "writing_profile"
  | "coaching_process"
  | "learning_format"
  | "pricing"
  | "availability"
  | "final_enquiry"
  | "diagnostic_form";

const ANALYTICS_SECTIONS = new Set<AnalyticsSection>([
  "hero",
  "score_profile",
  "writing_profile",
  "coaching_process",
  "learning_format",
  "pricing",
  "availability",
  "final_enquiry",
  "diagnostic_form",
]);

export type AnalyticsIntent =
  | "discuss_goal"
  | "share_score_profile"
  | "share_writing_profile"
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
  "share_writing_profile",
  "ask_format",
  "ask_fee",
  "ask_availability",
  "ask_intake",
  "request_assessment",
  "continue_on_whatsapp",
  "send_email",
]);

/** The resolved, allowlisted source — never the raw `?source=` query value. */
export type AnalyticsSource = "ielts-page" | "pte-page" | "toefl-page" | "english-writing-page" | "general";

const ANALYTICS_SOURCES = new Set<AnalyticsSource>([
  "ielts-page",
  "pte-page",
  "toefl-page",
  "english-writing-page",
  "general",
]);

/** Which resolved source values are valid for a given programme — "general" is neutral and
 *  allowed for any, but "ielts-page" may only ever accompany `programme: "ielts"`, "pte-page"
 *  only `programme: "pte"`, "toefl-page" only `programme: "toefl"`, and "english-writing-page"
 *  only `programme: "english-writing"`. A known source value that belongs to a *different*
 *  programme is a cross-programme mismatch (e.g. a compromised or miscopied
 *  `data-analytics-source` attribute) and rejects the whole payload — see
 *  `sanitizeAnalyticsPayload()` — rather than being silently dropped the way a genuinely
 *  unrecognised string like `"referral-campaign-42"` is. */
const VALID_SOURCES_BY_PROGRAMME: Record<AnalyticsProgramme, readonly AnalyticsSource[]> = {
  ielts: ["ielts-page", "general"],
  pte: ["pte-page", "general"],
  toefl: ["toefl-page", "general"],
  "english-writing": ["english-writing-page", "general"],
};

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
  if (
    input.programme !== "ielts" &&
    input.programme !== "pte" &&
    input.programme !== "toefl" &&
    input.programme !== "english-writing"
  ) {
    return null;
  }
  const programme = input.programme;

  // Reject outright rather than drop-and-continue: an unrecognised page path for this programme
  // (including the *other* programme's own detail page) makes the whole event context impossible,
  // not just one field wrong.
  if (!VALID_PAGE_PATHS_BY_PROGRAMME[programme].includes(input.page_path as AnalyticsPagePath)) {
    return null;
  }
  const pagePath = input.page_path as AnalyticsPagePath;

  const payload: AnalyticsPayload = {
    programme,
    page_path: pagePath,
  };

  if (typeof input.section === "string" && ANALYTICS_SECTIONS.has(input.section as AnalyticsSection)) {
    payload.section = input.section as AnalyticsSection;
  }
  if (typeof input.intent === "string" && ANALYTICS_INTENTS.has(input.intent as AnalyticsIntent)) {
    payload.intent = input.intent as AnalyticsIntent;
  }
  if (typeof input.source === "string" && ANALYTICS_SOURCES.has(input.source as AnalyticsSource)) {
    const candidateSource = input.source as AnalyticsSource;
    // A recognised source that belongs to the *other* programme (e.g. "ielts-page" alongside
    // `programme: "pte"`) is a cross-programme mismatch, not merely an unrecognised value — reject
    // the whole payload rather than silently dropping just this field. A genuinely unrecognised
    // source string (never in ANALYTICS_SOURCES at all) still falls through to the plain drop
    // below, unchanged from the original behaviour.
    if (!VALID_SOURCES_BY_PROGRAMME[programme].includes(candidateSource)) return null;
    payload.source = candidateSource;
  }
  if (typeof input.error_type === "string" && ANALYTICS_ERROR_TYPES.has(input.error_type as AnalyticsErrorType)) {
    payload.error_type = input.error_type as AnalyticsErrorType;
  }

  return payload;
}
