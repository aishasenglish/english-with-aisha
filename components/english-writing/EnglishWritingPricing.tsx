import { whatsappLink } from "@/lib/whatsapp";
import { formatBatchDate } from "@/lib/batches";
import { site } from "@/content/site";
import { englishWritingContent } from "@/content/englishWriting";
import { englishWritingPricing, isValidPublishedEnglishWritingPrice } from "@/content/englishWritingPricing";

// Server component, no interaction required. Branches explicitly on validated pricing status --
// this is the ONLY place on the site allowed to render an exact English Writing fee, and only once
// BOTH isValidPublishedEnglishWritingPrice() confirms the record is complete, well-formed and
// unexpired AND site.showPrices is true. `showPrices` may only ever *suppress* an otherwise-valid
// price -- it must never substitute for validation (`site.showPrices && isValid(...)`, never
// `site.showPrices` alone) -- see docs/english-writing-offer-verification.md's pricing section. Any
// malformed or expired "published" record fails safely back to the enquiry panel rather than
// rendering a partial or stale price. Never imports the generic PricingCard or
// content/courses.ts's legacy english-writing `price` field. Mirrors
// components/spoken-english/SpokenEnglishPricing.tsx exactly.
export default function EnglishWritingPricing() {
  const { pricing } = englishWritingContent;

  // Written as a single inline condition (not a separately-stored `mayPublish` boolean) so
  // TypeScript's control-flow narrowing still recognises `englishWritingPricing` as the validated
  // "published" record for everything below -- storing the combined check in an intermediate
  // variable would lose that narrowing even though the runtime behaviour is identical.
  if (!site.showPrices || !isValidPublishedEnglishWritingPrice(englishWritingPricing)) {
    const { enquire } = pricing;
    return (
      <section id={pricing.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="english-writing-pricing-heading">
        <div className="max-w-2xl mx-auto">
          <div className="border border-stone rounded-md bg-white p-6 sm:p-8">
            <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
              {enquire.eyebrow}
              <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
            </p>
            <h2 id="english-writing-pricing-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
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
  // currently makes this branch render -- content/englishWritingPricing.ts's
  // englishWritingPricing.status is "enquire" until Aisha approves a real fee.
  const { published } = pricing;
  const record = englishWritingPricing;
  const includedItems = englishWritingContent.learningFormat.approachItems.filter((item) =>
    record.verifiedInclusionIds.includes(item.id)
  );
  const formattedAmount = new Intl.NumberFormat(record.currency === "PKR" ? "en-PK" : "en-US", {
    style: "currency",
    currency: record.currency,
    maximumFractionDigits: 0,
  }).format(record.amount);
  const enquiryMessage = `Hi Aisha! I am interested in English Writing coaching (${record.optionLabel}, ${record.formatLabel}, ${formattedAmount} ${record.billingBasis}). Please confirm whether this option is currently available and the next steps.`;

  return (
    <section id={pricing.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="english-writing-pricing-heading">
      <div className="max-w-2xl mx-auto">
        <div className="border border-stone rounded-md bg-white p-6 sm:p-8">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {published.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-pricing-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-1">
            {published.heading}
          </h2>
          {/* Option and format context first, both plain text, never implying wider availability
              than confirmed. */}
          <p className="text-sm font-medium text-teal mb-0.5">{record.optionLabel}</p>
          <p className="text-sm font-medium text-ink-soft mb-5">
            {record.formatLabel}
            {record.learnerScope ? ` · ${record.learnerScope}` : ""}
          </p>

          {/* Amount and billing basis rendered as one adjacent text unit, not separate visual
              fragments, so a screen reader announces them in the correct order together -- never
              a bare number without its basis. */}
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
            href={whatsappLink(enquiryMessage)}
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
