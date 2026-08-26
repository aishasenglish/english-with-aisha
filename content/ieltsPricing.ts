import { ieltsPage } from "@/content/ielts";
import { pakistanTodayDateOnly } from "@/lib/batches";

/**
 * Single-source, gate-kept IELTS pricing record (IELTS Step 6). content/courses.ts's ielts.price
 * and ielts.discount fields are NOT authoritative for this page and must never be rendered here —
 * see the comment on that record and docs/ielts-offer-verification.md for the full history of why
 * the old figures were removed.
 *
 * `status` gates rendering: components/ielts/IELTSPricing.tsx renders the fee-enquiry panel for
 * "enquire" and may render an exact price only for "published" AND only once
 * isValidPublishedPrice() below confirms every required field, currency, date and inclusion
 * reference is present and current. A malformed or expired "published" record must fail back to
 * the enquiry state at render time — never render partial or stale pricing.
 */

type IeltsPricingEnquiry = {
  status: "enquire";
  /** "YYYY-MM-DD" — when this enquiry state was last reviewed against reality. */
  lastReviewed: string;
};

export type IeltsPublishedPrice = {
  status: "published";
  id: string;
  formatLabel: string;
  /** Numeric only — never a formatted marketing string like "$45" or "PKR 12,000". */
  amount: number;
  currency: "PKR" | "USD";
  /** An approved phrase, e.g. "per complete programme" — never inferred from the amount alone. */
  billingBasis: string;
  durationLabel: string;
  /** Must each match an id in ieltsPage.delivery.supportItems — see isValidPublishedPrice(). */
  includedItemIds: string[];
  /** "YYYY-MM-DD" */
  effectiveFrom: string;
  /** "YYYY-MM-DD" */
  verifiedAt: string;
  /** "YYYY-MM-DD" — omit only if the fee genuinely has no confirmed end date. */
  validUntil?: string;
  paymentNote: string;
  policyNote: string;
};

export type IeltsPricing = IeltsPricingEnquiry | IeltsPublishedPrice;

// No new owner-approved IELTS pricing record has been supplied since IELTS Step 1 removed the
// contradictory legacy figures ($75->$45 / PKR 20,000->12,000 discount against a base
// content/courses.ts price: 10000, with no verified expiry or billing basis). Do not insert a
// placeholder amount — see docs/ielts-offer-verification.md and docs/launch-verification.md for
// the full list of billing and policy answers still needed from Aisha before this can become a
// "published" record.
export const ieltsPricing: IeltsPricing = {
  status: "enquire",
  lastReviewed: "2026-08-26",
};

const KNOWN_CURRENCIES = new Set(["PKR", "USD"]);

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

/**
 * True only when every required field on a "published" record is present, well-formed, its
 * inclusion ids resolve against the verified Step 5 learning-format data, and (if set)
 * `validUntil` has not already passed in Pakistan time. components/ielts/IELTSPricing.tsx must
 * call this before ever rendering an exact price.
 */
export function isValidPublishedPrice(pricing: IeltsPricing): pricing is IeltsPublishedPrice {
  if (pricing.status !== "published") return false;

  const validIncludedItemIds = new Set(ieltsPage.delivery.supportItems.map((item) => item.id));

  return (
    Boolean(pricing.id) &&
    Boolean(pricing.formatLabel) &&
    Number.isFinite(pricing.amount) &&
    pricing.amount > 0 &&
    KNOWN_CURRENCIES.has(pricing.currency) &&
    Boolean(pricing.billingBasis.trim()) &&
    Boolean(pricing.durationLabel.trim()) &&
    pricing.includedItemIds.length > 0 &&
    pricing.includedItemIds.every((id) => validIncludedItemIds.has(id)) &&
    isIsoDate(pricing.effectiveFrom) &&
    isIsoDate(pricing.verifiedAt) &&
    (pricing.validUntil === undefined || isIsoDate(pricing.validUntil)) &&
    (pricing.validUntil === undefined || pricing.validUntil >= pakistanTodayDateOnly()) &&
    Boolean(pricing.paymentNote.trim()) &&
    Boolean(pricing.policyNote.trim())
  );
}

// Fails the build/dev server loudly and immediately if this file is ever edited to
// `status: "published"` with a field missing, malformed or already expired — so a content mistake
// is caught before it ships, rather than silently rendering nothing or (worse) a partial price.
// Once ieltsPricing is genuinely valid, this check is a no-op. This is a safety net in addition
// to, not a replacement for, IELTSPricing.tsx's own runtime isValidPublishedPrice() branch, which
// keeps protecting production even if a future change bypasses this module (e.g. a test fixture).
//
// Takes `pricing` as a parameter (rather than reading the module-level `ieltsPricing` const
// directly) so TypeScript checks the status comparison against the full `IeltsPricing` union
// instead of narrowing to the literal type of whatever the current const happens to be assigned.
function assertPublishedPriceIsValid(pricing: IeltsPricing): void {
  if (pricing.status === "published" && !isValidPublishedPrice(pricing)) {
    throw new Error(
      'content/ieltsPricing.ts: ieltsPricing has status "published" but fails isValidPublishedPrice() ' +
        "validation. Fix or complete every required field (amount, currency, billingBasis, " +
        "durationLabel, includedItemIds referencing content/ielts.ts's delivery.supportItems, " +
        "effectiveFrom, verifiedAt, an unexpired validUntil if set, paymentNote, policyNote) before " +
        'shipping, or set status back to "enquire". See docs/ielts-offer-verification.md.'
    );
  }
}

assertPublishedPriceIsValid(ieltsPricing);
