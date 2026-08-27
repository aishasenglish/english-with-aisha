/**
 * Deterministic validation script for the shared IELTS/PTE analytics event contract (IELTS
 * Step 12, extended to PTE in PTE Step 12). Not part of the client bundle and not imported by any
 * app code — run manually with:
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

check("accepts /free-diagnostic-test for either programme with its own matching source", () => {
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
});

check("rejects an unrecognised programme", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "toefl", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: undefined, page_path: "/courses/ielts" }), null);
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
});

check("rejects a programme paired with the OTHER programme's own detail page (PTE Step 12)", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/pte" }), null);
});

check("rejects a source belonging to the OTHER programme, even though the string is a real allowlisted value (PTE Step 12)", () => {
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

// --- track.ts: resolvePagePath(), a pure helper with no DOM dependency ---

check("resolvePagePath resolves each programme's own detail page", () => {
  assert.equal(resolvePagePath("/courses/ielts"), "/courses/ielts");
  assert.equal(resolvePagePath("/courses/pte"), "/courses/pte");
});

check("resolvePagePath resolves the shared detailed-enquiry route", () => {
  assert.equal(resolvePagePath("/free-diagnostic-test"), "/free-diagnostic-test");
});

check("resolvePagePath returns undefined for any other route", () => {
  assert.equal(resolvePagePath("/courses/toefl"), undefined);
  assert.equal(resolvePagePath("/"), undefined);
  assert.equal(resolvePagePath("/batches"), undefined);
});

check("resolvePagePath never returns a path carrying a query string", () => {
  assert.equal(resolvePagePath("/courses/ielts?programme=ielts&source=x"), undefined);
  assert.equal(resolvePagePath("/free-diagnostic-test?programme=pte&source=pte-page"), undefined);
});

console.log(`\n${pass} check(s) passed.`);
if (process.exitCode) {
  console.log("Some checks FAILED — see above.");
} else {
  console.log("All analytics self-tests passed.");
}
