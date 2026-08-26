/**
 * Deterministic validation script for the analytics event contract (IELTS Step 12). Not part of
 * the client bundle and not imported by any app code — run manually with:
 *
 *   node scripts/analytics-selftest.mts
 *
 * The repository has no test runner (see package.json), so this exercises the two
 * self-contained modules directly using Node's built-in `assert` and native TypeScript support
 * (Node 23.6+) rather than adding a testing framework for one step. It imports the REAL
 * lib/analytics/events.ts and lib/analytics/config.ts source — not a duplicated copy — so this
 * cannot silently drift out of sync with the implementation. `.mts` (not `.ts`) so Node treats
 * this entry file unambiguously as an ES module; a one-time "MODULE_TYPELESS_PACKAGE_JSON"
 * console warning from the plain-`.ts` files it imports is expected and harmless (the project
 * intentionally isn't configured as `"type": "module"`, since Next.js itself handles module
 * resolution for the actual app).
 *
 * This file is excluded from the app's own `tsc` typecheck (see tsconfig.json's `exclude`) so its
 * Node-ESM-style relative imports (which need an explicit `.ts` extension — see below) don't
 * trip TypeScript's `allowImportingTsExtensions` restriction, which the rest of the project
 * doesn't otherwise need.
 *
 * lib/analytics/track.ts itself (the orchestration layer around these two modules) is instead
 * exercised via the live Playwright browser checks run for this step, since its behaviour
 * — reading DOM `data-analytics-*` attributes, the delegated click listener, and confirming zero
 * network requests — is better verified against the real rendered page than duplicated here.
 */
import assert from "node:assert/strict";
import { isAnalyticsEventName, sanitizeAnalyticsPayload } from "../lib/analytics/events.ts";
import { isValidGaMeasurementId, analyticsIsApproved, analyticsIsActive } from "../lib/analytics/config.ts";

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

check("accepts a minimal valid payload", () => {
  const result = sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/ielts" });
  assert.deepEqual(result, { programme: "ielts", page_path: "/courses/ielts" });
});

check("rejects an unrecognised programme", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "pte", page_path: "/courses/ielts" }), null);
  assert.equal(sanitizeAnalyticsPayload({ programme: undefined, page_path: "/courses/ielts" }), null);
});

check("rejects an unrecognised page_path (never a raw pathname or URL)", () => {
  assert.equal(sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/pte" }), null);
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "https://aishasenglish.com/courses/ielts" }),
    null
  );
  assert.equal(
    sanitizeAnalyticsPayload({ programme: "ielts", page_path: "/courses/ielts?programme=ielts&source=x" }),
    null
  );
});

check("keeps valid section/intent/source/error_type values", () => {
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
    whatsapp: "+92 300 0000000",
    href: "https://wa.me/923112233671?text=leaked+message",
    message: "Hi Aisha! My target score is 7.5 by December.",
  };
  const result = sanitizeAnalyticsPayload(suspiciousInput);
  assert.deepEqual(Object.keys(result ?? {}).sort(), ["page_path", "programme"]);
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

console.log(`\n${pass} check(s) passed.`);
if (process.exitCode) {
  console.log("Some checks FAILED — see above.");
} else {
  console.log("All analytics self-tests passed.");
}
