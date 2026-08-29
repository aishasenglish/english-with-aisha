import { whatsappLink } from "@/lib/whatsapp";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. Three clearly separated pieces (Step 5): a prominent but restrained confirmed-
// online panel (the one operational fact actually on record -- see
// docs/english-writing-offer-verification.md), a compact summary of the needs-led learning approach
// already public in Steps 1-4 (no icon, positive but non-promissory), and a grouped, neutral
// pre-enrolment checklist using a hollow "to confirm" marker rather than a checkmark so it can never
// be mistaken for a list of included features. No platform, format, schedule, recording, feedback,
// fee or intake detail is presented as confirmed here. Step 12: the contextual CTA carries fixed
// data-analytics-* attributes read by the shared delegated listener -- never the visitor's format
// questions or visible operational details.
export default function EnglishWritingLearningFormat() {
  const { learningFormat } = englishWritingContent;

  return (
    <section
      id={learningFormat.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-learning-format-heading"
    >
      <div className="max-w-5xl mx-auto">
        <header className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {learningFormat.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2
            id="english-writing-learning-format-heading"
            className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3"
          >
            {learningFormat.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{learningFormat.introduction}</p>
        </header>

        {/* Confirmed-online panel -- the only operational fact currently on record. Kept to a
            compact reading width even on wide screens rather than stretching full-bleed. */}
        <aside className="mb-10 sm:mb-12 max-w-md">
          <h3 className="font-serif text-lg font-medium text-ink mb-3">{learningFormat.confirmedHeading}</h3>
          <div className="bg-ivory border-2 border-teal/30 rounded-md p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-1.5">
              {learningFormat.confirmedFact.label}
            </p>
            <p className="font-serif text-base font-medium text-ink mb-1.5">{learningFormat.confirmedFact.value}</p>
            <p className="text-sm text-ink-soft leading-relaxed">{learningFormat.confirmedFact.explanation}</p>
          </div>
        </aside>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* The learning approach -- stable positioning already public in Steps 1-4, no icon, no
              unverified frequency or quantity. */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-4">{learningFormat.approachHeading}</h3>
            <ul className="space-y-4 mb-4">
              {learningFormat.approachItems.map((item) => (
                <li key={item.id} className="border border-stone rounded-md bg-ivory p-5">
                  <p className="font-serif text-base font-medium text-ink mb-1.5">{item.title}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft leading-relaxed">{learningFormat.approachDistinctionNote}</p>
          </div>

          {/* Pre-enrolment checklist -- questions to confirm, never inclusions. Hollow circle
              marker only, never a checkmark, so it reads unmistakably differently from the
              approach list beside it. */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-2">{learningFormat.confirmHeading}</h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-5">{learningFormat.confirmIntroduction}</p>

            <div className="space-y-5 mb-6">
              {learningFormat.confirmationGroups.map((group) => (
                <section key={group.id} aria-labelledby={`english-writing-confirm-${group.id}`}>
                  <h4
                    id={`english-writing-confirm-${group.id}`}
                    className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2"
                  >
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.questions.map((question) => (
                      <li key={question} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                        <svg
                          className="w-4 h-4 text-ink-faint shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <a
              href={whatsappLink(learningFormat.confirmCta.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
              data-analytics-section="learning_format"
              data-analytics-intent="ask_format"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink mb-3"
            >
              {learningFormat.confirmCta.label}
            </a>
            <p className="text-sm text-ink-faint leading-relaxed">{learningFormat.paymentHelperNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
