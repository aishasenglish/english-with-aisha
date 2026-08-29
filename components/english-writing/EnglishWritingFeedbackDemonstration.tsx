import { englishWritingContent } from "@/content/englishWriting";

// Server component. One original, website-created illustrative example -- never a real learner's
// writing, testimonial, grade or result. Makes the Step-3 coaching cycle concrete: a short,
// intentionally imperfect message is reviewed through a small number of focused priorities, then
// shown alongside one possible learner-owned revision. The disclosure renders before either version
// of the writing and stays visible without interaction (no accordion, tab or tooltip). Both writing
// versions are marked up as plain example text, not <blockquote>, since attributing them to a real
// author -- even implicitly through quotation semantics -- would misrepresent the source. No
// document upload, editing field, drag-to-compare control or client interaction is introduced. See
// docs/english-writing-offer-verification.md for the demonstration's exact eligibility/boundary
// rows and docs/testimonial-content-intake.md's "English Writing-specific intake fields" section,
// where this example is recorded as "teaching demonstration -- not learner evidence".
export default function EnglishWritingFeedbackDemonstration() {
  const { demonstration } = englishWritingContent;

  return (
    <section
      id={demonstration.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-demonstration-heading"
    >
      <div className="max-w-5xl mx-auto">
        <header className="max-w-2xl mb-6">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {demonstration.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2
            id="english-writing-demonstration-heading"
            className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3"
          >
            {demonstration.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{demonstration.introduction}</p>
        </header>

        {/* Disclosure: visible to everyone, before either version of the writing -- never hidden,
            shrunk or placed only at the bottom. */}
        <div className="max-w-2xl border-2 border-teal/30 rounded-md bg-ivory p-4 sm:p-5 mb-8">
          <p className="text-sm font-medium text-ink leading-relaxed">{demonstration.disclosure}</p>
        </div>

        <div className="max-w-2xl mb-8">
          <p className="text-sm text-ink-soft leading-relaxed mb-1">{demonstration.situationLabel}</p>
          <p className="text-sm text-ink-soft leading-relaxed mb-1">{demonstration.goalLabel}</p>
          {/* Step 11: bumped from text-xs to text-sm -- this qualifies the illustrative-example
              disclosure above and must read as clearly as the surrounding boundary copy, not as a
              decorative footnote. */}
          <p className="text-sm text-ink-faint leading-relaxed">{demonstration.scopeQualifier}</p>
        </div>

        {/* First attempt and possible revision: stacked on phones/tablets, a two-column comparison
            from lg up. DOM order stays disclosure -> context -> first attempt -> teaching focus ->
            possible revision -> what changed -> boundaries at every breakpoint; no CSS ordering
            moves the revision before its teaching explanation. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-8">
          <article className="border border-stone rounded-md bg-ivory p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-3">
              {demonstration.firstAttemptLabel}
            </p>
            <p className="text-base text-ink leading-relaxed">{demonstration.firstAttempt}</p>
          </article>

          <div className="border border-stone rounded-md bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-3">
              {demonstration.whatAlreadyWorksHeading}
            </p>
            <ul className="space-y-2">
              {demonstration.whatAlreadyWorks.map((item) => (
                <li key={item} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2">
                  <span className="text-amber-dark shrink-0" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mb-8">
          <h3 className="font-serif text-xl font-medium text-ink mb-4">{demonstration.prioritiesHeading}</h3>
          <ol className="space-y-5">
            {demonstration.priorities.map((priority, index) => (
              <li key={priority.id} className="border-l-2 border-teal/30 pl-4">
                <div className="flex items-start gap-2.5 mb-1.5">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md border border-teal/30 bg-ivory font-serif text-xs font-medium text-amber-dark shrink-0"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h4 className="font-serif text-base font-medium text-ink">{priority.title}</h4>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed mb-1.5">{priority.observation}</p>
                <p className="text-sm font-medium text-amber-dark">{priority.revisionQuestion}</p>
              </li>
            ))}
          </ol>
        </div>

        <article className="border border-stone rounded-md bg-ivory p-5 sm:p-6 mb-3 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-3">
            {demonstration.revisionLabel}
          </p>
          <p className="text-base text-ink leading-relaxed">{demonstration.revision}</p>
        </article>
        <p className="text-sm text-ink-soft leading-relaxed max-w-2xl mb-8">{demonstration.revisionAuthorshipNote}</p>

        <div className="max-w-2xl mb-8">
          <h3 className="font-serif text-xl font-medium text-ink mb-3">{demonstration.whatChangedHeading}</h3>
          <ul className="space-y-2">
            {demonstration.whatChanged.map((change) => (
              <li key={change.id} className="text-sm text-ink-soft leading-relaxed">
                <span className="font-medium text-ink">{change.title}:</span> {change.explanation}
              </li>
            ))}
          </ul>
        </div>

        <aside
          className="border-2 border-teal/30 rounded-md bg-white p-4 sm:p-5 max-w-2xl"
          aria-label="Demonstration boundaries"
        >
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{demonstration.formatBoundary}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{demonstration.outcomeBoundary}</p>
        </aside>
      </div>
    </section>
  );
}
