import { whatsappLink } from "@/lib/whatsapp";
import { toeflPage } from "@/content/toefl";

// Server component, no interaction required. Replaces the removed shared <IncludedList> and
// <LearningFormats> renders on this page (TOEFL Step 5). Two clearly separate lists side by side
// at lg+: the left column is the stable, already-approved teaching method (Steps 2-4) with no icon
// at all -- positive but non-promissory, never dressed up as a confirmed inclusion; the right
// column is a checklist of operational questions to confirm before paying, using a hollow "to
// confirm" marker rather than a checkmark so the two lists can never be mistaken for the same kind
// of claim. Mirrors components/ielts/IELTSLearningFormat.tsx and components/pte/PTELearningFormat.tsx.
export default function TOEFLLearningFormat() {
  const { delivery } = toeflPage;

  return (
    <section
      id={delivery.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="toefl-learning-format-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {delivery.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-learning-format-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {delivery.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{delivery.body}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* The learning experience -- stable method, no unverified frequency or quantity */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-4">{delivery.supportHeading}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {delivery.supportItems.map((item) => (
                <li key={item.id} className="border border-stone rounded-md bg-ivory p-5">
                  <p className="font-serif text-base font-medium text-ink mb-1.5">{item.title}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Details to confirm -- questions to ask, never inclusions. A separate <aside>
              landmark (not a plain <div>) keeps this neutral, question-oriented block distinct
              from the stable-support list even to assistive technology, not just visually. */}
          <aside aria-labelledby="toefl-learning-format-confirm-heading">
            <h3 id="toefl-learning-format-confirm-heading" className="font-serif text-lg font-medium text-ink mb-2">
              {delivery.confirmHeading}
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">{delivery.confirmBody}</p>

            <ul className="space-y-3 mb-6">
              {delivery.detailsToConfirm.map((detail) => (
                <li key={detail.id} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                  {/* Hollow circle, not a checkmark -- this is a question to confirm, not a
                      confirmed inclusion. Deliberately a different icon from any checkmark used
                      elsewhere on this page for support items or completed steps. */}
                  <svg className="w-4 h-4 text-ink-faint shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                  {detail.label}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(delivery.cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
              data-analytics-section="learning_format"
              data-analytics-intent="ask_format"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {delivery.cta.label}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
