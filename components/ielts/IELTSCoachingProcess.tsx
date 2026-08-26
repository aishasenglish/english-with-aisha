import { ieltsPage } from "@/content/ielts";

// Server component, no interaction required. Two-column grid at sm+ and held there through
// desktop (not expanded to four columns) — each stage's body is a full explanatory sentence plus
// a result line, so four narrow columns would make paragraphs cramped and tall; two columns keep
// comfortable line lengths while still reading 01-04 left-to-right, top-to-bottom.
export default function IELTSCoachingProcess() {
  const { process } = ieltsPage;

  return (
    // border-b: the shared IncludedList section immediately after this one is also white — this
    // seam (matching the established Footer/CTASection pattern elsewhere) keeps a visible
    // boundary between them without needing a third surface tone the palette doesn't have.
    <section
      id={process.id}
      className="py-14 sm:py-16 px-4 bg-white border-b border-line"
      aria-labelledby="ielts-coaching-process-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {process.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="ielts-coaching-process-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {process.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{process.introduction}</p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {process.steps.map((step) => (
            <li key={step.id} className="flex gap-4 border border-stone rounded-md bg-white p-5 sm:p-6">
              <span
                aria-hidden="true"
                className="shrink-0 w-11 h-11 rounded-md border border-teal/30 bg-white flex items-center justify-center font-serif text-base font-medium text-teal"
              >
                {step.number}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-medium text-ink mb-1.5">{step.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-2.5">{step.body}</p>
                <p className="text-sm font-medium text-teal">{step.result}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Feedback-by-skill subsection */}
        <div className="max-w-2xl mb-6">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">{process.feedbackHeading}</h3>
          <p className="text-ink-soft leading-relaxed">{process.feedbackIntroduction}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {process.feedbackAreas.map((area) => (
            <article key={area.id} className="bg-ivory border border-stone rounded-md p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">{area.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{area.body}</p>
            </article>
          ))}
        </div>

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-2xl">
          {process.expectation}
        </p>
      </div>
    </section>
  );
}
