import { whatsappLink } from "@/lib/whatsapp";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Three clearly separated pieces (Step 5): a prominent but restrained confirmed-
// online panel (the one operational fact actually on record -- see
// docs/spoken-english-offer-verification.md), a compact summary of the needs-led learning approach
// already public in Steps 1-2 (no icon, positive but non-promissory), and a grouped, neutral
// pre-enrolment checklist using a hollow "to confirm" marker rather than a checkmark so it can
// never be mistaken for a list of included features. No platform, format, schedule, recording,
// feedback, fee or intake detail is presented as confirmed here.
export default function SpokenEnglishLearningFormat() {
  const { delivery } = spokenEnglishPage;

  return (
    <section
      id={delivery.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-learning-format-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {delivery.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-learning-format-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {delivery.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{delivery.body}</p>
        </div>

        {/* Confirmed-online panel -- the only operational fact currently on record. Kept to a
            compact reading width even on wide screens rather than stretching full-bleed. */}
        <div className="mb-10 sm:mb-12 max-w-md">
          <h3 className="font-serif text-lg font-medium text-ink mb-3">{delivery.confirmedHeading}</h3>
          <div className="bg-ivory border-2 border-teal/30 rounded-md p-5 sm:p-6">
            <p className="font-serif text-base font-medium text-ink mb-1.5">{delivery.confirmedOnline.title}</p>
            <p className="text-sm text-ink-soft leading-relaxed">{delivery.confirmedOnline.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* The learning approach -- stable positioning already public in Steps 1-2, no icon, no
              unverified frequency or quantity. */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-4">{delivery.approachHeading}</h3>
            <ul className="space-y-4 mb-4">
              {delivery.approachItems.map((item) => (
                <li key={item.id} className="border border-stone rounded-md bg-ivory p-5">
                  <p className="font-serif text-base font-medium text-ink mb-1.5">{item.title}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft leading-relaxed">{delivery.distinctionNote}</p>
          </div>

          {/* Pre-enrolment checklist -- questions to confirm, never inclusions. Hollow circle
              marker only, never a checkmark, so it reads unmistakably differently from the
              approach list beside it. */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-2">{delivery.confirmHeading}</h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-5">{delivery.confirmBody}</p>

            <div className="space-y-5 mb-6">
              {delivery.detailsToConfirm.map((group) => (
                <div key={group.id}>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">{group.heading}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.id} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                        <svg className="w-4 h-4 text-ink-faint shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(delivery.cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {delivery.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
