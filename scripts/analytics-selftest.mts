/**
 * Deterministic validation script for the shared IELTS/PTE/TOEFL/English-Writing analytics event
 * contract (IELTS Step 12, extended to PTE in PTE Step 12, to TOEFL in TOEFL Step 12, and to
 * English Writing in English Writing Step 12). Not part of the client bundle and not imported by
 * any app code — run manually with:
 *
 *   node scripts/analytics-selftest.mts
 *
 * The repository has no test runner (see package.json), so this exercises the self-contained
 * modules directly using Node's built-in `assert` and native TypeScript support (Node 23.6+)
 * rather than adding a testing framework for one step. It imports the REAL lib/analytics/events.ts,
 * lib/analytics/config.ts and (as of PTE Step 12) the pure helper functions in
 * lib/analytics/track.ts — not a duplicated copy — so this cannot silently drift out of sync with
 * the implementation. `.mts` (not `.ts`) so Node treats this entry file unambiguously as an ES
 * module; a one-time "MODULE_TYPELESS_PACKAGE_JSON" console warning from the plain-`.ts` files it
 * imports is expected and harmless (the project intentionally isn't configured as
 * `"type": "module"`, since Next.js itself handles module resolution for the actual app).
 *
 * This file is excluded from the app's own `tsc` typecheck (see tsconfig.json's `exclude`) so its
 * Node-ESM-style relative imports (which need an explicit `.ts` extension — see below) don't trip
 * TypeScript's `allowImportingTsExtensions` restriction, which the rest of the project doesn't
 * otherwise need.
 *
 * `dispatch()` and the DOM-attribute-reading side of `trackFromUntrustedAttributes()` (both in
 * lib/analytics/track.ts) are instead exercised via the live Playwright browser checks run for
 * each step, since that behaviour — reading DOM `data-analytics-*` attributes, the delegated
 * click listener, and confirming zero network requests — is better verified against the real
 * rendered page than duplicated here, and track.ts's own runtime imports of "./config"/"./events"
 * (without a file extension, as plain TypeScript expects) can't be resolved by Node's ESM loader
 * when the file is executed directly like this one. This script instead directly tests
 * `resolvePagePath()` from lib/analytics/pagePaths.ts — split out of track.ts in PTE Step 12
 * specifically so this pure, DOM-free helper could be exercised here without duplicating its
 * logic; its only import is a type-only one, erased before Node ever tries to resolve it.
 */
import assert from "node:assert/strict";
import { isAnalyticsEventName, sanitizeAnalyticsPayload } from "../lib/analytics/events.ts";
import { isValidGaMeasurementId, analyticsIsApproved, analyticsIsActive } from "../lib/analytics/config.ts";
import { resolvePagePath } from "../lib/analytics/pagePaths.ts";

let pass = 0;

function check(name: string, fn: () => void) {
  try {
    fn();
    pass++;
  } catch (err) {
    console.error(`FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

// --- isAnalyticsEventName: unknown event names must be rejected ---

check("accepts every real event name", () => {
  for (const name of [
    "programme_view",
    "assessment_cta_click",
    "whatsapp_click",
    "email_click",
    "assessment_form_start",
    "assessment_form_error",
    "assessment_form_submit",
  ]) {
    assert.equal(isAnalyticsEventName(name), true, name);
  }
});

check("rejects unknown or made-up event names", () => {
  assert.equal(isAnalyticsEventName("generate_lead"), false); // provider-only mapping, never caller-supplied
  assert.equal(isAnalyticsEventName("page_view"), false);
  assert.equal(isAnalyticsEventName("click"), false);
  assert.equal(isAnalyticsEventName(""), false);
  assert.equal(isAnalyticsEventName(undefined), false);
  assert.equal(isAnalyticsEventName(123), false);
});

// --- sanitizeAnalyticsPayload: the one allowlist gate every payload passes through ---

check("accepts a minimal valid IELTS payload", () => {
  const result = sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/ielts" });
  assert.deepEqual(result, { programme: "ielts", page_path: "/courses/ielts" });
});

check("accepts a minimal valid PTE payload (PTE Step 12)", () => {
  const result = sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/pte" });
  assert.deepEqual(result, { programme: "pte", page_path: "/courses/pte" });
});

check("accepts a minimal valid TOEFL payload (TOEFL Step 12)", () => {
  const result = sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/toefl" });
  assert.deepEqual(result, { programme: "toefl", page_path: "/courses/toefl" });
});

check("accepts a minimal valid English Writing payload (English Writing Step 12)", () => {
  const result = sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/english-writing" });
  assert.deepEqual(result, { programme: "english-writing", page_path: "/courses/english-writing" });
});

check("accepts /free-diagnostic-test for any of the four programmes with its own matching source", () => {
  const ielts = sanitizeAnalyticsPayload({
    programme: "ielts",
    page_path: "/free-diagnostic-test",
    source: "ielts-page",
  });
  assert.deepEqual(ielts, { programme: "ielts", page_path: "/free-diagnostic-test", source: "ielts-page" });

  const pte = sanitizeAnalyticsPayload({
    programme: "pte",
    page_path: "/free-diagnostic-test",
    source: "pte-page",
  });
  assert.deepEqual(pte, { programme: "pte", page_path: "/free-diagnostic-test", source: "pte-page" });

  const toefl = sanitizeAnalyticsPayload({
    programme: "toefl",
    page_path: "/free-diagnostic-test",
    source: "toefl-page",
  });
  assert.deepEqual(toefl, { programme: "toefl", page_path: "/free-diagnostic-test", source: "toefl-page" });

  const englishWriting = sanitizeAnalyticsPayload({
    programme: "english-writing",
    page_path: "/free-diagnostic-test",
    source: "english-writing-page",
  });
  assert.deepEqual(englishWriting, {
    programme: "english-writing",
    page_path: "/free-diagnostic-test",
    source: "english-writing-page",
  });
});

check("rejects an unrecognised programme", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "toeic", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: undefined, page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "spoken-english", page_path: "/courses/spoken-english" }), null);
});

check("rejects an unrecognised page_path (never a raw pathname or URL)", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/toefl" }), null);
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "https://aishasenglish.com/courses/ielts" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/ielts?programme=ielts&source=x" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({
      programme: "english-writing",
      page_path: "/courses/english-writing?programme=english-writing&source=x",
    }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/english-writing/" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/english-writing#pricing" }),
    null
  );
});

check("rejects a programme paired with a DIFFERENT programme's own detail page (PTE Step 12; extended to TOEFL in TOEFL Step 12; extended to English Writing in English Writing Step 12)", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/pte" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/pte" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/toefl" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/toefl" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/pte" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "english-writing", page_path: "/courses/toefl" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/english-writing" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/english-writing" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/english-writing" }), null);
});

check("rejects a source belonging to a DIFFERENT programme, even though the string is a real allowlisted value (PTE Step 12; extended to TOEFL in TOEFL Step 12; extended to English Writing in English Writing Step 12)", () => {
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/pte", source: "ielts-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/ielts", source: "pte-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "pte", page_path: "/free-diagnostic-test", source: "ielts-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/free-diagnostic-test", source: "pte-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/toefl", source: "ielts-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/toefl", source: "pte-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/free-diagnostic-test", source: "toefl-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "pte", page_path: "/free-diagnostic-test", source: "toefl-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/free-diagnostic-test", source: "ielts-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/free-diagnostic-test", source: "pte-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({
      programme: "english-writing",
      page_path: "/courses/english-writing",
      source: "ielts-page",
    }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({
      programme: "english-writing",
      page_path: "/free-diagnostic-test",
      source: "toefl-page",
    }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/free-diagnostic-test", source: "english-writing-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "pte", page_path: "/free-diagnostic-test", source: "english-writing-page" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/free-diagnostic-test", source: "english-writing-page" }),
    null
  );
});

check("keeps valid section/intent/source/error_type values for IELTS", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "ielts",
    page_path: "/courses/ielts",
    section: "pricing",
    intent: "ask_fee",
    source: "ielts-page",
    error_type: "provider",
  });
  assert.deepEqual(result, {
    programme: "ielts",
    page_path: "/courses/ielts",
    section: "pricing",
    intent: "ask_fee",
    source: "ielts-page",
    error_type: "provider",
  });
});

check("keeps valid section/intent/source/error_type values for PTE (PTE Step 12)", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "pte",
    page_path: "/courses/pte",
    section: "availability",
    intent: "ask_intake",
    source: "general",
    error_type: "network",
  });
  assert.deepEqual(result, {
    programme: "pte",
    page_path: "/courses/pte",
    section: "availability",
    intent: "ask_intake",
    source: "general",
    error_type: "network",
  });
});

check("keeps valid section/intent/source/error_type values for TOEFL (TOEFL Step 12)", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "toefl",
    page_path: "/free-diagnostic-test",
    section: "diagnostic_form",
    intent: "request_assessment",
    source: "toefl-page",
    error_type: "configuration",
  });
  assert.deepEqual(result, {
    programme: "toefl",
    page_path: "/free-diagnostic-test",
    section: "diagnostic_form",
    intent: "request_assessment",
    source: "toefl-page",
    error_type: "configuration",
  });
});

check("keeps valid section/intent/source/error_type values for English Writing (English Writing Step 12)", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "english-writing",
    page_path: "/free-diagnostic-test",
    section: "diagnostic_form",
    intent: "request_assessment",
    source: "english-writing-page",
    error_type: "validation",
  });
  assert.deepEqual(result, {
    programme: "english-writing",
    page_path: "/free-diagnostic-test",
    section: "diagnostic_form",
    intent: "request_assessment",
    source: "english-writing-page",
    error_type: "validation",
  });
});

check("keeps the new writing_profile section with share_writing_profile intent (English Writing Step 12)", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "writing_profile",
    intent: "share_writing_profile",
  });
  assert.deepEqual(result, {
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "writing_profile",
    intent: "share_writing_profile",
  });
});

check("keeps the new coaching_process section reusing the existing discuss_goal intent, not a cosmetic duplicate (English Writing Step 12)", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "coaching_process",
    intent: "discuss_goal",
  });
  assert.deepEqual(result, {
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "coaching_process",
    intent: "discuss_goal",
  });
});

check("rejects share_writing_profile paired with an unrelated section (not a real combination this project uses, but the sanitizer must still not invent a cross-check it doesn't need)", () => {
  // section/intent are independently validated against their own allowlists -- there is no
  // cross-field rule requiring share_writing_profile to only ever appear with writing_profile.
  // This test documents that the sanitizer's guarantee is "each field is individually
  // allowlisted", not "field combinations are semantically validated" -- the latter is a
  // convention enforced by callers (this file's own components), not the sanitizer itself.
  const result = sanitizeAnalyticsPayload({
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "hero",
    intent: "share_writing_profile",
  });
  assert.deepEqual(result, {
    programme: "english-writing",
    page_path: "/courses/english-writing",
    section: "hero",
    intent: "share_writing_profile",
  });
});

check("drops unrecognised section/intent/source/error_type values rather than forwarding them", () => {
  const result = sanitizeAnalyticsPayload({
    programme: "ielts",
    page_path: "/courses/ielts",
    section: "not-a-real-section",
    intent: "made-up-intent",
    source: "referral-campaign-42",
    error_type: "timeout",
  });
  assert.deepEqual(result, { programme: "ielts", page_path: "/courses/ielts" });
});

check("never forwards an unexpected key (name, email, url, message, form value)", () => {
  // Deliberately passing keys the sanitizer's input type doesn't declare, via an untyped object,
  // to prove at runtime that it only ever reads the fixed allowlisted fields and can't leak
  // anything else — this is exactly the shape an attacker-controlled `data-*` attribute set or a
  // careless call site might otherwise smuggle through.
  const suspiciousInput: Record<string, unknown> = {
    programme: "ielts",
    page_path: "/courses/ielts",
    name: "Test Candidate",
    email: "test@example.com",
    phone: "+92 300 0000000",
    whatsapp: "+92 300 0000000",
    score: "Overall 65",
    target_score: "Overall 65",
    deadline: "15 November 2026",
    country: "Pakistan",
    href: "https://wa.me/923112233671?text=leaked+message",
    query: "programme=pte&source=pte-page",
    message: "Hi Aisha! My target score is 7.5 by December.",
    form_data: { name: "Test Candidate", email: "test@example.com" },
  };
  const result = sanitizeAnalyticsPayload(suspiciousInput);
  assert.deepEqual(Object.keys(result ?? {}).sort(), ["page_path", "programme"]);
});

check("never forwards the same sensitive keys on a valid PTE payload either (PTE Step 12)", () => {
  const suspiciousPteInput: Record<string, unknown> = {
    programme: "pte",
    page_path: "/free-diagnostic-test",
    source: "pte-page",
    name: "PTE Candidate",
    email: "candidate@example.com",
    phone: "+92 300 1111111",
    whatsapp: "+92 300 1111111",
    score: "Overall 65 (L58 R60 S62 W64)",
    target_score: "Overall 70",
    deadline: "1 December 2026",
    country: "Pakistan, PKT",
    href: "https://wa.me/923112233671?text=leaked",
    query: "programme=pte&source=pte-page",
    message: "My previous score was 58 and I need 65 by December.",
    form_data: { situation: "PTE Academic; previous 58" },
  };
  const result = sanitizeAnalyticsPayload(suspiciousPteInput);
  assert.deepEqual(Object.keys(result ?? {}).sort(), ["page_path", "programme", "source"]);
});

check("never forwards sensitive keys on a valid TOEFL payload either (TOEFL Step 12)", () => {
  const suspiciousToeflInput: Record<string, unknown> = {
    programme: "toefl",
    page_path: "/free-diagnostic-test",
    source: "toefl-page",
    name: "TOEFL Candidate",
    email: "candidate@example.com",
    phone: "+92 300 2222222",
    whatsapp: "+92 300 2222222",
    institution: "ABC University",
    programme_name: "Master's in Engineering",
    score: "Overall 4.5",
    overall_score: "4.5",
    section_score: "Writing 4",
    score_scale: "1-6",
    target_score: "Overall 5",
    previous_result: "Overall 4",
    deadline: "1 December 2026",
    test_date: "15 November 2026",
    country: "Pakistan, PKT",
    timezone: "Asia/Karachi",
    href: "https://wa.me/923112233671?text=leaked",
    query: "programme=toefl&source=toefl-page",
    message: "My institution requires Overall 5 by 1 December 2026.",
    form_data: { situation: "ABC University; 1-6 scale; first attempt." },
  };
  const result = sanitizeAnalyticsPayload(suspiciousToeflInput);
  assert.deepEqual(Object.keys(result ?? {}).sort(), ["page_path", "programme", "source"]);
});

check("never forwards sensitive keys on a valid English Writing payload either (English Writing Step 12)", () => {
  // Every field named in the implementing prompt's Part D absolute sensitive-data prohibition,
  // as harmless synthetic fixture values only -- never real client, contact or writing content.
  const suspiciousEnglishWritingInput: Record<string, unknown> = {
    programme: "english-writing",
    page_path: "/free-diagnostic-test",
    source: "english-writing-page",
    name: "English Writing Candidate",
    email: "candidate@example.com",
    phone: "+92 300 3333333",
    whatsapp: "+92 300 3333333",
    telephone: "+92 300 3333333",
    country: "Pakistan",
    city: "Lahore",
    timezone: "Asia/Karachi",
    availability: "Weekday evenings",
    writing_type: "Workplace emails",
    writing_context: "Work",
    reader: "My manager",
    audience: "Manager",
    purpose: "Explain project delays",
    school: "ABC School",
    college: "ABC College",
    university: "ABC University",
    employer: "ABC Company",
    client: "ABC Client",
    difficulty: "Sentence structure and organisation",
    goal: "Write clearer reports",
    deadline: "15 November 2026",
    level: "Intermediate",
    proficiency: "Intermediate",
    format_preference: "One-to-one",
    document_title: "Quarterly report",
    filename: "report-draft.docx",
    document: "This is my draft paragraph that I want reviewed.",
    paragraph: "This is my draft paragraph that I want reviewed.",
    essay: "This is my draft essay text.",
    upload: "report-draft.docx",
    screenshot: "screenshot.png",
    work_sample: "This is my draft paragraph that I want reviewed.",
    confidential_info: "Internal project codename Falcon",
    disability: "N/A",
    medical: "N/A",
    feedback_text: "Your organisation could be clearer.",
    revision_text: "Revised paragraph text.",
    provider_response: "200 OK",
    prefilled_message: "Hi Aisha! I need help with a report.",
    mailto_subject: "English writing coaching enquiry",
    mailto_body: "Hello Aisha, I would like to ask about coaching.",
    url: "https://aishasenglish.com/courses/english-writing?ref=test",
    href: "https://wa.me/923112233671?text=leaked",
    query: "programme=english-writing&source=english-writing-page",
    referrer: "https://www.google.com/search?q=english+writing+coaching",
    fragment: "#pricing",
    ip_address: "203.0.113.1",
    user_id: "user-12345",
    fingerprint: "abc123fingerprint",
    hashed_email: "5f4dcc3b5aa765d61d8327deb882cf99",
    message: "Hi Aisha! I mainly need to write for work. My difficulty is organisation.",
    form_data: {
      name: "English Writing Candidate",
      whatsapp: "+92 300 3333333",
      writingContext: "work",
      situation: "Workplace emails, difficulty with organisation",
      goalTimeline: "Clearer reports by December",
      location: "Lahore, Pakistan (PKT)",
    },
  };
  const result = sanitizeAnalyticsPayload(suspiciousEnglishWritingInput);
  assert.deepEqual(Object.keys(result ?? {}).sort(), ["page_path", "programme", "source"]);
});

// --- config.ts: the fail-closed activation gate ---

check("isValidGaMeasurementId accepts a plausibly real ID", () => {
  assert.equal(isValidGaMeasurementId("G-ABCD123456"), true);
});

check("isValidGaMeasurementId rejects empty, placeholder, example and malformed values", () => {
  assert.equal(isValidGaMeasurementId(""), false);
  assert.equal(isValidGaMeasurementId("PLACEHOLDER"), false);
  assert.equal(isValidGaMeasurementId("G-PLACEHOLDER"), false);
  assert.equal(isValidGaMeasurementId("G-EXAMPLE123"), false);
  assert.equal(isValidGaMeasurementId("UA-12345678-1"), false); // legacy Universal Analytics shape
  assert.equal(isValidGaMeasurementId("G-"), false);
  assert.equal(isValidGaMeasurementId("not-an-id"), false);
});

check("analyticsIsApproved is hard-coded false", () => {
  assert.equal(analyticsIsApproved(), false);
});

check("analyticsIsActive is false even with a valid-shaped measurement ID present", () => {
  const original = process.env.NEXT_PUBLIC_GA_ID;
  process.env.NEXT_PUBLIC_GA_ID = "G-REALLOOKING1";
  try {
    assert.equal(analyticsIsActive(), false);
  } finally {
    process.env.NEXT_PUBLIC_GA_ID = original;
  }
});

check("adding PTE support does not activate a provider (PTE Step 12)", () => {
  // Even a fully valid-looking PTE payload and a valid-shaped measurement ID together must not
  // flip activation — analyticsIsApproved() alone gates this, regardless of programme.
  const original = process.env.NEXT_PUBLIC_GA_ID;
  process.env.NEXT_PUBLIC_GA_ID = "G-REALLOOKING1";
  try {
    const payload = sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/pte" });
    assert.notEqual(payload, null);
    assert.equal(analyticsIsActive(), false);
  } finally {
    process.env.NEXT_PUBLIC_GA_ID = original;
  }
});

check("adding TOEFL support does not activate a provider (TOEFL Step 12)", () => {
  // Same guarantee as above, now for TOEFL — analyticsIsApproved() alone gates activation,
  // regardless of programme.
  const original = process.env.NEXT_PUBLIC_GA_ID;
  process.env.NEXT_PUBLIC_GA_ID = "G-REALLOOKING1";
  try {
    const payload = sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/toefl" });
    assert.notEqual(payload, null);
    assert.equal(analyticsIsActive(), false);
  } finally {
    process.env.NEXT_PUBLIC_GA_ID = original;
  }
});

check("adding English Writing support does not activate a provider (English Writing Step 12)", () => {
  // Same guarantee as above, now for English Writing — analyticsIsApproved() alone gates
  // activation, regardless of programme. A valid-looking provider ID is still never sufficient.
  const original = process.env.NEXT_PUBLIC_GA_ID;
  process.env.NEXT_PUBLIC_GA_ID = "G-REALLOOKING1";
  try {
    const payload = sanitizeAnalyticsPayload({
      programme: "english-writing",
      page_path: "/courses/english-writing",
    });
    assert.notEqual(payload, null);
    assert.equal(analyticsIsActive(), false);
  } finally {
    process.env.NEXT_PUBLIC_GA_ID = original;
  }
});

// --- track.ts: resolvePagePath(), a pure helper with no DOM dependency ---

check("resolvePagePath resolves each programme's own detail page", () => {
  assert.equal(resolvePagePath("/courses/ielts"), "/courses/ielts");
  assert.equal(resolvePagePath("/courses/pte"), "/courses/pte");
  assert.equal(resolvePagePath("/courses/toefl"), "/courses/toefl");
  assert.equal(resolvePagePath("/courses/english-writing"), "/courses/english-writing");
});

check("resolvePagePath resolves the shared detailed-enquiry route", () => {
  assert.equal(resolvePagePath("/free-diagnostic-test"), "/free-diagnostic-test");
});

check("resolvePagePath returns undefined for any other route", () => {
  assert.equal(resolvePagePath("/courses/o-a-level-english"), undefined);
  assert.equal(resolvePagePath("/courses/spoken-english"), undefined); // uninstrumented pending its own Step 12
  assert.equal(resolvePagePath("/"), undefined);
  assert.equal(resolvePagePath("/batches"), undefined);
});

check("resolvePagePath never returns a path carrying a query string", () => {
  assert.equal(resolvePagePath("/courses/ielts?programme=ielts&source=x"), undefined);
  assert.equal(resolvePagePath("/free-diagnostic-test?programme=pte&source=pte-page"), undefined);
  assert.equal(
    resolvePagePath("/courses/english-writing?programme=english-writing&source=english-writing-page"),
    undefined
  );
  assert.equal(resolvePagePath("/courses/english-writing#pricing"), undefined);
  assert.equal(resolvePagePath("/courses/english-writing/"), undefined);
});

console.log(`\n${pass} check(s) passed.`);
if (process.exitCode) {
  console.log("Some checks FAILED — see above.");
} else {
  console.log("All analytics self-tests passed.");
}
