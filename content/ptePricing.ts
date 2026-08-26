import { ptePage } from "@/content/pte";
import { pakistanTodayDateOnly } from "@/lib/batches";

/**
 * Single-source, gate-kept PTE Academic pricing record (PTE Step 6). content/courses.ts's
 * pte.price field is NOT authoritative for this page and must never be rendered here — see the
 * comment on that record and docs/pte-offer-verification.md for the full history of why the old
 * figure was never verified.
 *
 * `status` gates rendering: components/pte/PTEPricing.tsx renders the fee-enquiry panel for
 * "enquire" and may render an exact price only for "published" AND only once
 * isValidPublishedPTEPrice() below confirms every required field, currency, date and inclusion
 * reference is present and current. A malformed or expired "published" record must fail back to
 * the enquiry state at render time — never render partial or stale pricing.
 */

type PTEPricingEnquiry = {
  status: "enquire";
  /** "YYYY-MM-DD" — when this enquiry state was last reviewed against reality. */
  lastReviewed: string;
};

export type PTEPublishedPrice = {
  status: "published";
  id: string;
  /** Never wider than what's actually confirmed — do not imply UKVI support isn't confirmed. */
  testLabel: "PTE Academic" | "PTE Academic UKVI" | "PTE Academic and PTE Academic UKVI";
  formatLabel: string;
  /** Numeric only — never a formatted marketing string like "PKR 12,000". */
  amount: number;
  currency: "PKR" | "USD";
  /** An approved phrase, e.g. "per complete programme" — never inferred from the amount alone. */
  billingBasis: string;
  durationLabel: string;
  /** Must each match an id in ptePage.delivery.supportItems — see isValidPublishedPTEPrice(). */
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

export type PTEPricing = PTEPricingEnquiry | PTEPublishedPrice;

// No owner-approved PTE pricing record has been supplied — the legacy content/courses.ts figure
// (price: 10000) was never verified for currency, billing basis, test/format context, duration,
// inclusions or policy. Do not insert a placeholder amount and do not copy that legacy figure
// here — see docs/pte-offer-verification.md and docs/launch-verification.md for the full list of
// billing, inclusion and policy answers still needed from Aisha before this can become a
// "published" record.
export const ptePricing: PTEPricing = {
  status: "enquire",
  lastReviewed: "2026-08-27",
};

const KNOWN_CURRENCIES = new Set(["PKR", "USD"]);

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

/**
 * True only when every required field on a "published" record is present, well-formed, its
 * inclusion ids resolve against the verified Step 5 learning-format data, `effectiveFrom` is not
 * after `validUntil`, and (if set) `validUntil` has not already passed in Pakistan time.
 * components/pte/PTEPricing.tsx must call this before ever rendering an exact price.
 */
export function isValidPublishedPTEPrice(pricing: PTEPricing): pricing is PTEPublishedPrice {
  if (pricing.status !== "published") return false;

  const validIncludedItemIds = new Set(ptePage.delivery.supportItems.map((item) => item.id));

  return (
    Boolean(pricing.id) &&
    Boolean(pricing.testLabel) &&
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
    (pricing.validUntil === undefined || pricing.effectiveFrom <= pricing.validUntil) &&
    (pricing.validUntil === undefined || pricing.validUntil >= pakistanTodayDateOnly()) &&
    Boolean(pricing.paymentNote.trim()) &&
    Boolean(pricing.policyNote.trim())
  );
}

// Fails the build/dev server loudly and immediately if this file is ever edited to
// `status: "published"` with a field missing, malformed or already expired — so a content mistake
// is caught before it ships, rather than silently rendering nothing or (worse) a partial price.
// Once ptePricing is genuinely valid, this check is a no-op. This is a safety net in addition to,
// not a replacement for, PTEPricing.tsx's own runtime isValidPublishedPTEPrice() branch, which
// keeps protecting production even if a future change bypasses this module (e.g. a test fixture).
//
// Takes `pricing` as a parameter (rather than reading the module-level `ptePricing` const
// directly) so TypeScript checks the status comparison against the full `PTEPricing` union
// instead of narrowing to the literal type of whatever the current const happens to be assigned.
function assertPublishedPTEPriceIsValid(pricing: PTEPricing): void {
  if (pricing.status === "published" && !isValidPublishedPTEPrice(pricing)) {
    throw new Error(
      'content/ptePricing.ts: ptePricing has status "published" but fails isValidPublishedPTEPrice() ' +
        "validation. Fix or complete every required field (id, testLabel, formatLabel, amount, " +
        "currency, billingBasis, durationLabel, includedItemIds referencing content/pte.ts's " +
        "delivery.supportItems, effectiveFrom, verifiedAt, an unexpired validUntil if set with " +
        "effectiveFrom <= validUntil, paymentNote, policyNote) before shipping, or set status back " +
        'to "enquire". See docs/pte-offer-verification.md.'
    );
  }
}

assertPublishedPTEPriceIsValid(ptePricing);
