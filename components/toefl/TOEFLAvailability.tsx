import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { getPublishedUpcomingBatches, formatBatchDate } from "@/lib/batches";
import type { Batch, BatchStatus } from "@/content/batches";
import { toeflPage } from "@/content/toefl";

const MAX_INTAKES_SHOWN = 3;

/** Narrower publication type: `content/batches.ts`'s generic `Batch` allows `duration` and
 *  `schedule` to be omitted, but TOEFL Step 7 requires both before a record can render as a fully
 *  confirmed intake card. A record missing either is treated as if it weren't published at all --
 *  never shown with a "TBA" placeholder. */
type CompleteToeflIntake = Batch & { duration: string; schedule: string };

function isCompleteToeflIntake(batch: Batch): batch is CompleteToeflIntake {
  return Boolean(batch.duration?.trim()) && Boolean(batch.schedule?.trim());
}

/**
 * "Filling Fast" is a scarcity claim and needs its own recent, manual verification
 * (`statusVerifiedAt`) separate from the record's general `verifiedAt` accuracy check -- never
 * inferred from how close the start date is. Without it, the record displays as the neutral
 * "Open" rather than an unverified scarcity claim. See the field comment in content/batches.ts,
 * which applies this rule to TOEFL specialist availability as well as IELTS and PTE.
 */
function displayStatus(batch: CompleteToeflIntake): Exclude<BatchStatus, "Closed"> {
  if (batch.status === "Filling Fast" && !batch.statusVerifiedAt?.trim()) return "Open";
  return batch.status as Exclude<BatchStatus, "Closed">;
}

function intakeEnquiryMessage(formattedDate: string, schedule: string): string {
  return `Hi Aisha! I am interested in the TOEFL iBT intake starting ${formattedDate} at ${schedule} PKT. My institution/programme is [name], its required overall and section scores are [details] on the [1–6 or 0–120] scale, my previous result or starting point is [details], my planned test/application deadline is [date], and my country/time zone is [details]. Please confirm current availability, format coverage, the complete fee and enrolment terms.`;
}

// Server component, no interaction required. Replaces the TOEFL Step 1 page-level heading +
// <BatchTable> wrapper (TOEFL Step 7) with a component that controls its own TOEFL-specific
// heading, no-intake copy and enquiry message rather than the shared cross-programme fallback.
// Mirrors components/pte/PTEAvailability.tsx.
export default function TOEFLAvailability() {
  const { availability } = toeflPage;
  const completeIntakes = getPublishedUpcomingBatches("toefl").filter(isCompleteToeflIntake);
  const shown = completeIntakes.slice(0, MAX_INTAKES_SHOWN);
  const hasMore = completeIntakes.length > MAX_INTAKES_SHOWN;

  if (shown.length === 0) {
    return (
      <section
        id={availability.id}
        className="py-14 sm:py-16 px-4 bg-white"
        aria-labelledby="toefl-availability-heading"
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {availability.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-availability-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {availability.enquiryHeading}
          </h2>
          <p className="text-ink-soft leading-relaxed mb-6">{availability.enquiryBody}</p>

          <div className="border border-stone rounded-md bg-ivory p-5 sm:p-6 mb-6">
            <p className="font-serif text-base font-medium text-ink mb-3">{availability.detailsHeading}</p>
            <ul className="space-y-2.5">
              {availability.enquiryDetails.map((item) => (
                <li key={item.id} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="w-1.5 h-1.5 rounded-full border border-teal shrink-0 mt-1.5" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink(availability.enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral mb-4"
          >
            {availability.enquiryCtaLabel}
          </a>

          <p className="text-sm text-ink-faint">{availability.reservationNote}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id={availability.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="toefl-availability-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {availability.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-availability-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {availability.scheduledHeading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{availability.scheduledBody}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {shown.map((batch) => {
            const formattedDate = formatBatchDate(batch.startDate);
            const status = displayStatus(batch);
            return (
              <article key={batch.id} className="border border-stone rounded-md bg-white p-5 sm:p-6">
                <h3 className="font-serif text-lg font-medium text-ink mb-1">TOEFL iBT Preparation</h3>
                <p className="text-base font-medium text-ink mb-4">
                  <time dateTime={batch.startDate}>{formattedDate}</time>
                </p>

                <dl className="space-y-3 text-sm mb-5">
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Days and time</dt>
                    {/* Schedule and timezone kept in one adjacent text node so they read as one
                        connected fact, not separate fragments a screen reader could reorder. */}
                    <dd className="text-ink font-medium">
                      {batch.schedule} · {availability.timezoneLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Format</dt>
                    <dd className="text-ink font-medium">{batch.format}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Duration</dt>
                    <dd className="text-ink font-medium">{batch.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Status</dt>
                    {/* Text label, not colour or a badge alone -- status must be understandable
                        without colour. */}
                    <dd className="text-ink font-medium">{status}</dd>
                  </div>
                </dl>

                <p className="text-xs text-ink-faint mb-4">
                  Last verified: <time dateTime={batch.verifiedAt}>{formatBatchDate(batch.verifiedAt)}</time>
                </p>

                <a
                  href={whatsappLink(intakeEnquiryMessage(formattedDate, batch.schedule))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${availability.intakeCtaLabel} — starting ${formattedDate}`}
                  className="flex min-h-12 w-full items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  {availability.intakeCtaLabel}
                </a>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <Link
            href="/batches"
            className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            {availability.moreAvailabilityLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
