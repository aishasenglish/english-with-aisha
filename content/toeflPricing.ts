import { toeflPage } from "@/content/toefl";
import { pakistanTodayDateOnly } from "@/lib/batches";

/**
 * Single-source, gate-kept TOEFL iBT pricing record (TOEFL Step 6). content/courses.ts's
 * toefl.price field is NOT authoritative for this page and must never be rendered here — see the
 * comment on that record and docs/toefl-offer-verification.md for the full history of why the old
 * figure (`price: 10000`) was never verified.
 *
 * `status` gates rendering: components/toefl/TOEFLPricing.tsx renders the fee-enquiry panel for
 * "enquire" and may render an exact price only for "published" AND only once
 * isValidPublishedTOEFLPrice() below confirms every required field, currency, date and inclusion
 * reference is present and current. A malformed or expired "published" record must fail back to
 * the enquiry state at render time — never render partial or stale pricing.
 */

type TOEFLPricingEnquiry = {
  status: "enquire";
  /** "YYYY-MM-DD" — when this enquiry state was last reviewed against reality. */
  lastReviewed: string;
};

export type TOEFLPublishedPrice = {
  status: "published";
  id: string;
  /** Fixed to the exact supported product — never implies TOEFL Essentials or TOEFL ITP. */
  programmeLabel: "TOEFL iBT preparation";
  /** Must identify the actual coaching offer's format coverage, not merely repeat the public
   *  ETS 21-January-2026 transition fact already stated in content/toefl.ts's `fit` section. */
  testDateContext: string;
  /** Must match the confirmed coaching arrangement — never invents group/one-to-one availability. */
  formatLabel: string;
  /** Numeric only — never a formatted marketing string like "PKR 12,000". */
  amount: number;
  currency: "PKR" | "USD";
  /** An approved phrase, e.g. "per complete programme" — never inferred from the amount alone. */
  billingBasis: string;
  durationLabel: string;
  scheduleNote: string;
  /** Must each match an id in toeflPage.delivery.supportItems — see isValidPublishedTOEFLPrice().
   *  Never an id from toeflPage.delivery.detailsToConfirm — that list is neutral questions, not
   *  confirmed inclusions. */
  verifiedInclusionIds: string[];
  /** "YYYY-MM-DD" */
  effectiveFrom: string;
  /** "YYYY-MM-DD" */
  verifiedAt: string;
  /** "YYYY-MM-DD" — omit only if the fee genuinely has no confirmed end date. */
  validUntil?: string;
  paymentNote: string;
  policyNote: string;
};

export type TOEFLPricing = TOEFLPricingEnquiry | TOEFLPublishedPrice;

// No owner-approved TOEFL pricing record has been supplied — the legacy content/courses.ts figure
// (price: 10000) was never verified for currency, billing basis, test/format context, duration,
// inclusions or policy. Do not insert a placeholder amount and do not copy that legacy figure
// here — see docs/toefl-offer-verification.md and docs/launch-verification.md for the full list of
// billing, inclusion and policy answers still needed from Aisha before this can become a
// "published" record.
export const toeflPricing: TOEFLPricing = {
  status: "enquire",
  lastReviewed: "2026-08-27",
};

const KNOWN_CURRENCIES = new Set(["PKR", "USD"]);

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

/**
 * True only when every required field on a "published" record is present, well-formed, its
 * inclusion ids resolve against the verified Step 5 learning-format support items (never Step 5's
 * neutral "details to confirm" list), `effectiveFrom` is not after `validUntil`, and (if set)
 * `validUntil` has not already passed in Pakistan time. components/toefl/TOEFLPricing.tsx must
 * call this before ever rendering an exact price.
 */
export function isValidPublishedTOEFLPrice(pricing: TOEFLPricing): pricing is TOEFLPublishedPrice {
  if (pricing.status !== "published") return false;

  const validInclusionIds = new Set(toeflPage.delivery.supportItems.map((item) => item.id));

  return (
    Boolean(pricing.id) &&
    pricing.programmeLabel === "TOEFL iBT preparation" &&
    Boolean(pricing.testDateContext.trim()) &&
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
// Once toeflPricing is genuinely valid, this check is a no-op. This is a safety net in addition
// to, not a replacement for, TOEFLPricing.tsx's own runtime isValidPublishedTOEFLPrice() branch,
// which keeps protecting production even if a future change bypasses this module (e.g. a test
// fixture).
//
// Takes `pricing` as a parameter (rather than reading the module-level `toeflPricing` const
// directly) so TypeScript checks the status comparison against the full `TOEFLPricing` union
// instead of narrowing to the literal type of whatever the current const happens to be assigned.
function assertPublishedTOEFLPriceIsValid(pricing: TOEFLPricing): void {
  if (pricing.status === "published" && !isValidPublishedTOEFLPrice(pricing)) {
    throw new Error(
      'content/toeflPricing.ts: toeflPricing has status "published" but fails ' +
        "isValidPublishedTOEFLPrice() validation. Fix or complete every required field (id, " +
        "programmeLabel, testDateContext, formatLabel, amount, currency, billingBasis, " +
        "durationLabel, scheduleNote, verifiedInclusionIds referencing content/toefl.ts's " +
        "delivery.supportItems, effectiveFrom, verifiedAt, an unexpired validUntil if set with " +
        "effectiveFrom <= validUntil, paymentNote, policyNote) before shipping, or set status back " +
        'to "enquire". See docs/toefl-offer-verification.md.'
    );
  }
}

assertPublishedTOEFLPriceIsValid(toeflPricing);
