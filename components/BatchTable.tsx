import Link from "next/link";
import type { BatchStatus } from "@/content/batches";
import {
  getPublishedUpcomingBatches,
  batchCourseNames,
  formatBatchDate,
} from "@/lib/batches";
import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/content/site";

const statusClasses: Record<Exclude<BatchStatus, "Closed">, string> = {
  Open: "bg-green-100 text-green-800",
  "Filling Fast": "bg-gold/20 text-charcoal",
};

function intakeMessage(programmeName: string, formattedDate: string): string {
  return `Hi Aisha! I'm interested in the ${programmeName} intake starting ${formattedDate}. My timezone and preferred days or times are:`;
}

const FALLBACK_WHATSAPP_MESSAGE =
  "Hi Aisha! I'd like to ask about the next available English coaching intake. The programme I'm interested in, my timezone and preferred days or times are:";

type Props = {
  /** Show only batches covering this course slug. Omit to show every published batch. */
  courseSlug?: string;
  /** Cap the number of entries shown (the homepage shows at most 3). Omit for no cap. */
  limit?: number;
  /** Hide the "View All Availability Details" link — used on /batches itself. */
  hideViewAllLink?: boolean;
  /**
   * Overrides the generic cross-programme WhatsApp message shown in the no-intake fallback state
   * — use this when a specific programme page needs its own details requested (e.g. PTE Step 1
   * asking for the exact test, required score, deadline, time zone and usual availability rather
   * than the generic "programme, timezone and preferred days" prompt). Omit to keep the default.
   */
  fallbackMessage?: string;
};

export default function BatchTable({ courseSlug, limit, hideViewAllLink, fallbackMessage }: Props) {
  const allUpcoming = getPublishedUpcomingBatches(courseSlug);
  const upcomingBatches = limit ? allUpcoming.slice(0, limit) : allUpcoming;

  if (upcomingBatches.length === 0) {
    return (
      <div className="bg-white border border-stone rounded-md p-6 sm:p-8 text-center">
        <h3 className="font-serif text-xl font-medium text-ink mb-2">
          Ask about the next available intake
        </h3>
        <p className="text-muted text-sm sm:text-base mb-6 max-w-md mx-auto">
          Schedules differ by programme, format and learner location. Tell Aisha which programme
          you need and the days or times that usually suit you.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
          <a
            href={whatsappLink(fallbackMessage ?? FALLBACK_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-medium px-5 py-3 transition-colors"
          >
            Check the Next Intake on WhatsApp
          </a>
          {!hideViewAllLink && (
            <Link
              href="/batches"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white font-medium px-5 py-3 transition-colors"
            >
              View All Availability Details
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs text-ink-faint mb-4">
        All dates shown in Pakistan Standard Time ({site.timezone}).
      </p>

      <div className="grid gap-4 md:hidden">
        {upcomingBatches.map((batch) => {
          const programmeName = batchCourseNames(batch);
          const formattedDate = formatBatchDate(batch.startDate);
          return (
            <article key={batch.id} className="bg-white border border-stone rounded-md p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-serif text-lg font-medium text-ink">{programmeName}</h3>
                <span
                  className={`shrink-0 inline-block px-2.5 py-1 rounded-sm text-xs font-medium ${statusClasses[batch.status as Exclude<BatchStatus, "Closed">]}`}
                >
                  {batch.status}
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm mb-5">
                <div>
                  <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Starts</dt>
                  <dd className="text-ink font-medium">
                    <time dateTime={batch.startDate}>{formattedDate}</time>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Format</dt>
                  <dd className="text-ink font-medium">{batch.format}</dd>
                </div>
                {batch.schedule && (
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Schedule</dt>
                    <dd className="text-ink font-medium">{batch.schedule}</dd>
                  </div>
                )}
                {batch.duration && (
                  <div>
                    <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Duration</dt>
                    <dd className="text-ink font-medium">{batch.duration}</dd>
                  </div>
                )}
              </dl>
              <a
                href={whatsappLink(intakeMessage(programmeName, formattedDate))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask Aisha about the ${programmeName} intake starting ${formattedDate}`}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-coral text-white font-medium px-4 py-3"
              >
                Ask About This Intake
              </a>
            </article>
          );
        })}
      </div>

      <div className="hidden md:block overflow-x-auto rounded-md border border-stone">
        <table className="w-full text-sm min-w-[720px]">
          <caption className="sr-only">Upcoming published intake dates</caption>
          <thead className="bg-sea text-white">
            <tr>
              <th scope="col" className="text-left px-6 py-4 font-medium">Programme</th>
              <th scope="col" className="text-left px-6 py-4 font-medium">Starts</th>
              <th scope="col" className="text-left px-6 py-4 font-medium">Format</th>
              <th scope="col" className="text-left px-6 py-4 font-medium">Duration</th>
              <th scope="col" className="text-left px-6 py-4 font-medium">Status</th>
              <th scope="col" className="text-left px-6 py-4 font-medium">Enquire</th>
            </tr>
          </thead>
          <tbody>
            {upcomingBatches.map((batch, i) => {
              const programmeName = batchCourseNames(batch);
              const formattedDate = formatBatchDate(batch.startDate);
              return (
                <tr key={batch.id} className={`border-t border-stone ${i % 2 === 0 ? "bg-white" : "bg-ivory"}`}>
                  <td className="px-6 py-4 font-medium text-charcoal">{programmeName}</td>
                  <td className="px-6 py-4 text-muted">
                    <time dateTime={batch.startDate}>{formattedDate}</time>
                  </td>
                  <td className="px-6 py-4 text-muted">{batch.format}</td>
                  <td className="px-6 py-4 text-muted">{batch.duration ?? "—"}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-sm text-xs font-medium ${statusClasses[batch.status as Exclude<BatchStatus, "Closed">]}`}
                    >
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={whatsappLink(intakeMessage(programmeName, formattedDate))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ask Aisha about the ${programmeName} intake starting ${formattedDate}`}
                      className="inline-flex items-center gap-1.5 text-teal font-medium hover:text-ink transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Ask About This Intake
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
