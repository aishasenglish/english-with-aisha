import { toeflPage } from "@/content/toefl";

// Server component, no interaction required. Shows how a confirmed score requirement (Step 2)
// becomes task-focused teaching, appropriate computer-based practice and response-specific
// review. Never claims a guaranteed score, a reproduction of ETS's scoring system, or an
// unconfirmed inclusion (formal diagnostic, mock quantity, feedback turnaround, platform) --
// see docs/toefl-offer-verification.md. `border-b border-line` seam since the next section
// (availability) is also white.
export default function TOEFLCoachingProcess() {
  const { process } = toeflPage;

  return (
    <section
      id={process.id}
      className="py-14 sm:py-16 px-4 bg-white border-b border-line"
      aria-labelledby="toefl-coaching-process-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {process.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-coaching-process-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {process.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{process.introduction}</p>
        </div>

        {/* Ordered list -- sequence matters, so <ol> carries the semantics rather than relying on
            the visible "01"-"04" numerals alone. */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {process.steps.map((step) => (
            <li key={step.id} className="border border-stone rounded-md bg-ivory p-5 sm:p-6">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-teal/30 bg-white font-serif text-sm font-medium text-teal mb-3"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">{step.body}</p>
              {/* text-amber-dark, not text-teal -- an axe-core pass for this step measured
                  text-teal on bg-ivory at 4.41:1, just short of the 4.5:1 WCAG AA minimum for
                  this 14px text (the identical pattern also exists in
                  components/pte/PTECoachingProcess.tsx and
                  components/ielts/IELTSCoachingProcess.tsx -- flagged, not fixed here, in
                  docs/launch-verification.md). text-amber-dark (#1F616E) measures 6.69:1 on the
                  same background. */}
              <p className="text-sm font-medium text-amber-dark">{step.result}</p>
            </li>
          ))}
        </ol>

        <div className="max-w-2xl mb-6">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">{process.feedbackHeading}</h3>
          <p className="text-ink-soft leading-relaxed">{process.feedbackIntroduction}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {process.feedbackAreas.map((area) => (
            <article key={area.id} className="bg-ivory border border-stone rounded-md p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark mb-2">{area.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{area.body}</p>
            </article>
          ))}
        </div>

        {/* Scoring-boundary note + expectation -- normal readable size, not tiny legal copy. */}
        <div className="max-w-2xl">
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{process.scoringNote}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{process.expectation}</p>
        </div>
      </div>
    </section>
  );
}
