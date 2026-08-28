import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Five-stage coaching cycle (Step 3) showing how one real speaking situation
// becomes a focused next attempt: define the task, build language, rehearse, adapt through
// interaction, then review and retry. Feedback is explained separately through four lenses
// (message, language, delivery/intelligibility, interaction/repair) so it is never reduced to
// pronunciation correction alone. text-amber-dark is used for the emphasised text throughout
// (not text-teal) -- the recurring text-teal-on-tinted-surface contrast shortfall found across
// PTE/TOEFL/IELTS process components (see docs/launch-verification.md) is avoided here from the
// start rather than fixed later. No formal assessment, feedback quantity/turnaround, homework,
// platform, recording or outcome claim appears anywhere -- see
// docs/spoken-english-offer-verification.md for the unresolved operational facts this section
// deliberately avoids asserting.
export default function SpokenEnglishCoachingProcess() {
  const { process } = spokenEnglishPage;

  return (
    <section
      id={process.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="spoken-english-coaching-process-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {process.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-coaching-process-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {process.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{process.introduction}</p>
        </div>

        {/* Ordered list -- sequence matters, so <ol> carries the semantics rather than relying on
            the visible "01"-"05" numerals alone. Two columns from sm (with the fifth, odd-one-out
            stage spanning the full row rather than sitting alone beside empty space); three-plus-
            two layout from lg up (six-column track, spans of 2 and 3) instead of five equal
            narrow columns. */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {process.steps.map((step, index) => (
            <li
              key={step.id}
              className={`border border-stone rounded-md bg-white p-5 sm:p-6 ${index === 4 ? "sm:col-span-2 lg:col-span-3" : index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-teal/30 bg-ivory font-serif text-sm font-medium text-amber-dark mb-3"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">{step.body}</p>
              <p className="text-sm font-medium text-amber-dark">{step.focus}</p>
            </li>
          ))}
        </ol>

        <div className="max-w-2xl mb-6">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">{process.feedbackHeading}</h3>
          <p className="text-ink-soft leading-relaxed">{process.feedbackIntroduction}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {process.feedbackFocuses.map((area) => (
            <article key={area.id} className="bg-white border border-stone rounded-md p-5 sm:p-6">
              <h4 className="font-serif text-base font-medium text-ink mb-3">{area.title}</h4>
              <ul className="space-y-1.5 mb-4">
                {area.reviewQuestions.map((question) => (
                  <li key={question} className="text-sm text-ink-soft leading-relaxed">
                    {question}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-amber-dark">{area.nextAction}</p>
              {area.boundary && (
                <p className="text-sm text-ink-soft leading-relaxed mt-3 pt-3 border-t border-stone">
                  {area.boundary}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Feedback principle + expectation -- normal readable size, not tiny legal copy, and
            each stated once rather than repeated inside every card. */}
        <div className="max-w-2xl">
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{process.feedbackPrinciple}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{process.expectation}</p>
        </div>
      </div>
    </section>
  );
}
