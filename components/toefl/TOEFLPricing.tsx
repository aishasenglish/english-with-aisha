import { whatsappLink } from "@/lib/whatsapp";
import { formatBatchDate } from "@/lib/batches";
import { toeflPage } from "@/content/toefl";
import { toeflPricing, isValidPublishedTOEFLPrice } from "@/content/toeflPricing";

// Server component, no interaction required. Branches explicitly on validated pricing status --
// this is the ONLY place on the site allowed to render an exact TOEFL fee, and only once
// isValidPublishedTOEFLPrice() confirms the record is complete, well-formed and unexpired. Any
// malformed or expired "published" record fails safely back to the enquiry panel rather than
// rendering a partial or stale price. Never imports the generic PricingCard or
// content/courses.ts's legacy toefl.price field. Mirrors components/pte/PTEPricing.tsx.
export default function TOEFLPricing() {
  const { pricing } = toeflPage;

  if (!isValidPublishedTOEFLPrice(toeflPricing)) {
    const { enquire } = pricing;
    return (
      <section
        id={pricing.id}
        className="py-14 sm:py-16 px-4 bg-ivory"
        aria-labelledby="toefl-pricing-heading"
      >
        <div className="max-w-2xl mx-auto">
          <div className="border border-stone rounded-md bg-white p-6 sm:p-8">
            <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
              {enquire.eyebrow}
              <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
            </p>
            <h2 id="toefl-pricing-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
              {enquire.heading}
            </h2>
            <p className="text-ink-soft leading-relaxed mb-4">{enquire.body}</p>
            <p className="text-sm text-ink-faint mb-6">{enquire.note}</p>
            <a
              href={whatsappLink(enquire.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              {enquire.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Reachable only once a genuinely complete, valid, unexpired record exists. No fixture data
  // currently makes this branch render -- content/toeflPricing.ts's toeflPricing.status is
  // "enquire" until Aisha approves a real fee.
  const { published } = pricing;
  const record = toeflPricing;
  const includedItems = toeflPage.delivery.supportItems.filter((item) =>
    record.verifiedInclusionIds.includes(item.id)
  );
  const formattedAmount = new Intl.NumberFormat(record.currency === "PKR" ? "en-PK" : "en-US", {
    style: "currency",
    currency: record.currency,
    maximumFractionDigits: 0,
  }).format(record.amount);
  const enrolMessage = `Hi Aisha! I'd like to enrol in TOEFL iBT coaching (${record.testDateContext}, ${record.formatLabel}, ${formattedAmount} ${record.billingBasis}). Please confirm the next available start date and payment details.`;

  return (
    <section
      id={pricing.id}
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="toefl-pricing-heading"
    >
      <div className="max-w-2xl mx-auto">
        <div className="border border-stone rounded-md bg-white p-6 sm:p-8">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {published.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-pricing-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-1">
            {published.heading}
          </h2>
          {/* Exact TOEFL iBT test-date context first, then format -- both plain text, never
              implying wider test support than confirmed. */}
          <p className="text-sm font-medium text-teal mb-0.5">{record.testDateContext}</p>
          <p className="text-sm font-medium text-ink-soft mb-5">{record.formatLabel}</p>

          {/* Amount and billing basis rendered as one adjacent text unit, not separate visual
              fragments, so a screen reader announces them in the correct order together. */}
          <p className="mb-2">
            <span className="font-serif text-3xl sm:text-4xl font-medium text-ink">{formattedAmount}</span>{" "}
            <span className="text-base text-ink-soft">{record.billingBasis}</span>
          </p>
          <p className="text-sm text-ink-soft mb-1">{record.durationLabel}</p>
          <p className="text-sm text-ink-soft mb-6">{record.scheduleNote}</p>

          {includedItems.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">
                {published.inclusionsHeading}
              </p>
              <ul className="space-y-1.5">
                {includedItems.map((item) => (
                  <li key={item.id} className="text-sm text-ink-soft leading-relaxed">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm text-ink-soft leading-relaxed mb-3">{record.paymentNote}</p>
          <p className="text-sm text-ink-soft leading-relaxed mb-6">{record.policyNote}</p>

          <p className="text-xs text-ink-faint mb-6">
            {published.lastVerifiedLabel}: {formatBatchDate(record.verifiedAt)}
            {record.validUntil && (
              <>
                {" · "}
                {published.validUntilLabel}: {formatBatchDate(record.validUntil)}
              </>
            )}
          </p>

          <a
            href={whatsappLink(enrolMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {published.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
