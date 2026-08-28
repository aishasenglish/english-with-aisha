import { englishWritingContent } from "@/content/englishWriting";
import { pakistanTodayDateOnly } from "@/lib/batches";

/**
 * Single-source, gate-kept English Writing pricing record (English Writing Step 6).
 * content/courses.ts's english-writing `price` field (`10000`) is NOT authoritative for this page
 * and must never be rendered here — that figure was never verified for currency, billing basis,
 * lesson arrangement, duration, inclusions or policy; see the comment on that field and
 * docs/english-writing-offer-verification.md's pricing section for the full history.
 *
 * `status` gates rendering: components/english-writing/EnglishWritingPricing.tsx renders the
 * fee-enquiry panel for "enquire" and may render an exact price only for "published" AND only once
 * isValidPublishedEnglishWritingPrice() below confirms every required field, currency, date and
 * inclusion reference is present and current. A malformed or expired "published" record must fail
 * back to the enquiry state at render time — never render partial or stale pricing. Mirrors
 * content/spokenEnglishPricing.ts, content/toeflPricing.ts and content/ptePricing.ts exactly.
 */

type EnglishWritingPricingEnquiry = {
  status: "enquire";
  /** "YYYY-MM-DD" — when this enquiry state was last reviewed against reality. */
  lastReviewed: string;
};

export type EnglishWritingPublishedPrice = {
  status: "published";
  id: string;
  /** Must identify the actual verified option this fee applies to — never a generic label. */
  optionLabel: string;
  /** Must match the confirmed coaching arrangement — never invents group/one-to-one availability. */
  formatLabel: string;
  /** Optional — only set once a specific learner audience is genuinely confirmed for this option. */
  learnerScope?: string;
  /** Numeric only — never a formatted marketing string like "PKR 12,000". */
  amount: number;
  currency: "PKR" | "USD";
  /** An approved phrase, e.g. "per complete programme" — never inferred from the amount alone. */
  billingBasis: string;
  durationLabel: string;
  /** Must each match an id in englishWritingContent.learningFormat.approachItems — see
   *  isValidPublishedEnglishWritingPrice(). Never an id from learningFormat.confirmationGroups —
   *  that list is neutral pre-enrolment questions, not confirmed inclusions. */
  verifiedInclusionIds: string[];
  scheduleNote: string;
  /** "YYYY-MM-DD" */
  effectiveFrom: string;
  /** "YYYY-MM-DD" */
  verifiedAt: string;
  /** "YYYY-MM-DD" — omit only if the fee genuinely has no confirmed end date. */
  validUntil?: string;
  paymentNote: string;
  policyNote: string;
};

export type EnglishWritingPricing = EnglishWritingPricingEnquiry | EnglishWritingPublishedPrice;

// No owner-approved English Writing pricing record has been supplied — the legacy
// content/courses.ts figure (price: 10000) was never verified for currency, billing basis, lesson
// arrangement, duration, inclusions or policy. Do not insert a placeholder amount and do not copy
// that legacy figure here — see docs/english-writing-offer-verification.md's pricing section for
// the full confirmation checklist still needed from Aisha before this can become a "published"
// record.
export const englishWritingPricing: EnglishWritingPricing = {
  status: "enquire",
  lastReviewed: "2026-08-29",
};

const KNOWN_CURRENCIES = new Set(["PKR", "USD"]);

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

/**
 * True only when every required field on a "published" record is present, well-formed, its
 * inclusion ids resolve against the verified Step 5 learning-format approach items (never Step 5's
 * neutral confirmation-checklist questions), `effectiveFrom` is not after `verifiedAt`, and (if set)
 * `validUntil` has not already passed in Pakistan time and is not earlier than `effectiveFrom`.
 * components/english-writing/EnglishWritingPricing.tsx must call this before ever rendering an
 * exact price.
 */
export function isValidPublishedEnglishWritingPrice(
  pricing: EnglishWritingPricing
): pricing is EnglishWritingPublishedPrice {
  if (pricing.status !== "published") return false;

  const validInclusionIds = new Set(englishWritingContent.learningFormat.approachItems.map((item) => item.id));

  return (
    Boolean(pricing.id) &&
    Boolean(pricing.optionLabel.trim()) &&
    Boolean(pricing.formatLabel.trim()) &&
    Number.isFinite(pricing.amount) &&
    pricing.amount > 0 &&
    KNOWN_CURRENCIES.has(pricing.currency) &&
    Boolean(pricing.billingBasis.trim()) &&
    Boolean(pricing.durationLabel.trim()) &&
    Boolean(pricing.scheduleNote.trim()) &&
    pricing.verifiedInclusionIds.length > 0 &&
    pricing.verifiedInclusionIds.every((id) => validInclusionIds.has(id)) &&
    isIsoDate(pricing.effectiveFrom) &&
    isIsoDate(pricing.verifiedAt) &&
    pricing.verifiedAt >= pricing.effectiveFrom &&
    (pricing.validUntil === undefined || isIsoDate(pricing.validUntil)) &&
    (pricing.validUntil === undefined || pricing.effectiveFrom <= pricing.validUntil) &&
    (pricing.validUntil === undefined || pricing.validUntil >= pakistanTodayDateOnly()) &&
    Boolean(pricing.paymentNote.trim()) &&
    Boolean(pricing.policyNote.trim())
  );
}

// Fails the build/dev server loudly and immediately if this file is ever edited to
// `status: "published"` with a field missing, malformed or already expired — so a content mistake
// is caught before it ships, rather than silently rendering nothing or (worse) a partial price.
// Once englishWritingPricing is genuinely valid, this check is a no-op. This is a safety net in
// addition to, not a replacement for, EnglishWritingPricing.tsx's own runtime
// isValidPublishedEnglishWritingPrice() branch, which keeps protecting production even if a future
// change bypasses this module (e.g. a test fixture).
//
// Takes `pricing` as a parameter (rather than reading the module-level `englishWritingPricing`
// const directly) so TypeScript checks the status comparison against the full
// `EnglishWritingPricing` union instead of narrowing to the literal type of whatever the current
// const happens to be assigned.
function assertPublishedEnglishWritingPriceIsValid(pricing: EnglishWritingPricing): void {
  if (pricing.status === "published" && !isValidPublishedEnglishWritingPrice(pricing)) {
    throw new Error(
      'content/englishWritingPricing.ts: englishWritingPricing has status "published" but fails ' +
        "isValidPublishedEnglishWritingPrice() validation. Fix or complete every required field " +
        "(id, optionLabel, formatLabel, amount, currency, billingBasis, durationLabel, " +
        "verifiedInclusionIds referencing content/englishWriting.ts's " +
        "learningFormat.approachItems, scheduleNote, effectiveFrom, verifiedAt, an unexpired " +
        "validUntil if set with effectiveFrom <= validUntil, paymentNote, policyNote) before " +
        'shipping, or set status back to "enquire". See ' +
        "docs/english-writing-offer-verification.md."
    );
  }
}

assertPublishedEnglishWritingPriceIsValid(englishWritingPricing);
