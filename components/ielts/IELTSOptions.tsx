import { formatBatchDate, getPublishedUpcomingBatches } from "@/lib/batches";
import { whatsappLink } from "@/lib/whatsapp";
import type { Batch } from "@/content/batches";
import { ieltsProgrammePage } from "@/content/ielts";
import { ieltsPricing, isValidPublishedPrice } from "@/content/ieltsPricing";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";

type CompleteIeltsIntake = Batch & { duration: string; schedule: string };

function isCompleteIeltsIntake(batch: Batch): batch is CompleteIeltsIntake {
  return Boolean(batch.duration?.trim()) && Boolean(batch.schedule?.trim());
}

export default function IELTSOptions() {
  const { options } = ieltsProgrammePage;
  const intakes = getPublishedUpcomingBatches("ielts").filter(isCompleteIeltsIntake).slice(0, 3);
  const publishedPrice = isValidPublishedPrice(ieltsPricing) ? ieltsPricing : null;
  const feedbackConfirmed = publishedPrice?.includedItemIds.includes("writing-speaking-review") ?? false;
  const hasConfirmedDetails = intakes.length > 0 || Boolean(publishedPrice);

  return (
    <section id={options.id} className="scroll-mt-24 border-y border-line bg-surface-tint px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-32 lg:px-8 lg:py-28" aria-labelledby="ielts-options-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{options.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
          <h2 id="ielts-options-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{options.heading}</h2>
          {!hasConfirmedDetails && <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">{options.fallback}</p>}
        </div>

        {hasConfirmedDetails && (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {intakes.map((batch) => (
              <article key={batch.id} className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-xl font-semibold text-ink">IELTS coaching</h3>
                <dl className="mt-5 divide-y divide-line text-sm">
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Format</dt><dd className="text-right font-medium text-ink">{batch.format}</dd></div>
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Schedule</dt><dd className="text-right font-medium text-ink">{batch.schedule} · PKT</dd></div>
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Duration</dt><dd className="text-right font-medium text-ink">{batch.duration}</dd></div>
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Next start</dt><dd className="text-right font-medium text-ink"><time dateTime={batch.startDate}>{formatBatchDate(batch.startDate)}</time></dd></div>
                </dl>
              </article>
            ))}
            {publishedPrice && (
              <article className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-xl font-semibold text-ink">Confirmed fee</h3>
                <dl className="mt-5 divide-y divide-line text-sm">
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Format</dt><dd className="text-right font-medium text-ink">{publishedPrice.formatLabel}</dd></div>
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Duration</dt><dd className="text-right font-medium text-ink">{publishedPrice.durationLabel}</dd></div>
                  {feedbackConfirmed && <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Writing and Speaking feedback</dt><dd className="text-right font-medium text-ink">Included</dd></div>}
                  <div className="flex justify-between gap-5 py-3"><dt className="text-ink-faint">Current fee</dt><dd className="text-right font-medium text-ink">{new Intl.NumberFormat(publishedPrice.currency === "PKR" ? "en-PK" : "en-US", { style: "currency", currency: publishedPrice.currency, maximumFractionDigits: 0 }).format(publishedPrice.amount)} {publishedPrice.billingBasis}</dd></div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-ink-faint">Last verified {formatBatchDate(publishedPrice.verifiedAt)}.</p>
              </article>
            )}
          </div>
        )}

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-section="availability" data-analytics-intent="discuss_goal" className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:w-auto">{options.primaryLabel}</a>
          <a href={whatsappLink(options.secondaryMessage)} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-section="availability" data-analytics-intent="ask_availability" className="inline-flex min-h-11 items-center text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 hover:text-sea-deep hover:decoration-teal">{options.secondaryLabel}</a>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-faint">{options.supportingNote}</p>
        {hasConfirmedDetails && <p className="sr-only">The information above is shown only when it passes the existing IELTS price and intake validation rules.</p>}
      </div>
    </section>
  );
}
