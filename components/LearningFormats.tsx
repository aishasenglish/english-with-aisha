import { homeLearningFormats } from "@/content/homeLearningFormats";
import { whatsappLink } from "@/lib/whatsapp";

function GroupIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 20h5v-1.5a3.5 3.5 0 0 0-5.4-2.95M16 20H8m8 0v-1.5c0-1.08-.35-2.08-.95-2.89M8 20H3v-1.5a3.5 3.5 0 0 1 5.4-2.95M8 20v-1.5c0-1.08.35-2.08.95-2.89m6.1 0a5 5 0 0 0-6.1 0M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
}

function IndividualIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21a7 7 0 0 1 14 0H5Z" />
    </svg>
  );
}

function TickIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.25}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function LearningFormats() {
  return (
    <section id="formats" className="bg-surface-tint px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl sm:mb-11">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {homeLearningFormats.eyebrow}
            <span className="h-px w-11 bg-teal" aria-hidden="true" />
          </p>
          <h2 className="mb-4 text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
            {homeLearningFormats.heading}
          </h2>
          <p className="mb-3 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {homeLearningFormats.body}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-faint">
            {homeLearningFormats.availabilityNote}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
          {homeLearningFormats.formats.map((format) => (
            <article
              key={format.id}
              className="flex min-w-0 flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-sea-edge sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-sea-wash text-teal">
                {format.id === "small-group" ? <GroupIcon /> : <IndividualIcon />}
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-ink">
                {format.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ink-soft">{format.description}</p>

              <ul className="mb-7 space-y-3">
                {format.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                    <TickIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(format.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sea-deep"
              >
                {format.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-sea-edge bg-white px-6 py-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
          <div>
            <h3 className="mb-1 text-lg font-semibold text-ink">
              {homeLearningFormats.recommendation.heading}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
              {homeLearningFormats.recommendation.body}
            </p>
          </div>
          <a
            href={whatsappLink(homeLearningFormats.recommendation.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 transition-colors hover:text-sea-deep sm:mt-0"
          >
            {homeLearningFormats.recommendation.ctaLabel}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
