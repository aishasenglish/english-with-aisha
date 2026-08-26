import { ptePage } from "@/content/pte";

// Server component, no interaction required. This is an original, explicitly-illustrative
// example created for this website — not a testimonial, not learner work, and never given a
// score estimate. The disclosure renders as a prominent bordered callout (not tiny grey text)
// immediately after the intro and before the scenario itself.
export default function PTEFeedbackDemo() {
  const { feedbackDemo } = ptePage;

  return (
    <section
      id={feedbackDemo.id}
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="pte-feedback-example-heading"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {feedbackDemo.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="pte-feedback-example-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {feedbackDemo.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{feedbackDemo.introduction}</p>
        </header>

        <p className="text-sm sm:text-base text-charcoal bg-white border-2 border-teal/30 rounded-md p-4 sm:p-5 mb-8 leading-relaxed">
          {feedbackDemo.disclosure}
        </p>

        <div className="space-y-6">
          <article aria-labelledby="pte-situation-heading">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint mb-2">
              {feedbackDemo.taskLabel}
            </p>
            <h3 id="pte-situation-heading" className="font-serif text-base font-medium text-ink mb-2">
              {feedbackDemo.situationHeading}
            </h3>
            <p className="bg-white border border-stone rounded-md p-4 sm:p-5 text-charcoal leading-relaxed">
              {feedbackDemo.situation}
            </p>
          </article>

          <article>
            <h3 className="font-serif text-base font-medium text-ink mb-2">
              {feedbackDemo.firstAttemptLabel}
            </h3>
            {/* No quotation marks — this is an illustrative transcript written for the site, not
                a quotation attributed to a real learner. */}
            <p className="bg-amber-tint border border-stone rounded-md p-4 sm:p-5 text-charcoal leading-relaxed mb-2">
              {feedbackDemo.firstAttempt}
            </p>
            <p className="text-sm text-ink-faint leading-relaxed">{feedbackDemo.transcriptLimitation}</p>
          </article>

          <article className="bg-white border border-stone rounded-md p-5 sm:p-6">
            <h3 className="font-serif text-base font-medium text-ink mb-3">
              {feedbackDemo.diagnosisHeading}
            </h3>
            <ul className="space-y-3">
              {feedbackDemo.feedbackPoints.map((point) => (
                <li key={point.id}>
                  <span className="text-sm font-semibold text-teal">{point.label}: </span>
                  <span className="text-sm text-ink-soft leading-relaxed">{point.body}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="border-l-4 border-teal bg-white rounded-r-md p-4 sm:p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-teal mb-1.5">
              {feedbackDemo.nextActionLabel}
            </h3>
            <p className="text-sm sm:text-base text-ink leading-relaxed">{feedbackDemo.nextAction}</p>
          </aside>

          <article>
            <h3 className="font-serif text-base font-medium text-ink mb-2">
              {feedbackDemo.revisionLabel}
            </h3>
            <p className="bg-green-50 border border-green-200 rounded-md p-4 sm:p-5 text-charcoal leading-relaxed">
              {feedbackDemo.revisedAttempt}
            </p>
          </article>

          <div>
            <h3 className="font-serif text-base font-medium text-ink mb-2">
              {feedbackDemo.improvementHeading}
            </h3>
            <ul className="space-y-2">
              {feedbackDemo.improvements.map((point) => (
                <li key={point.id} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                  <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {point.body}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-ink-faint leading-relaxed border-t border-stone pt-5">
            {feedbackDemo.audioBoundary}
          </p>
        </div>
      </div>
    </section>
  );
}
