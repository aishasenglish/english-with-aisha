import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. One original, website-created illustrative scenario (Step 4) -- proves only
// the quality of the instructional thinking, never learner work, a testimonial, a formal
// assessment, a CEFR result or evidence that any response was ever spoken aloud. The disclosure
// renders in normal readable text before the scenario (never a tooltip/accordion/footnote), and
// the transcript/outcome boundaries close the section the same way. First and revised attempts are
// distinguished by label and border treatment only -- never red/green "wrong answer" styling.
export default function SpokenEnglishFeedbackDemo() {
  const { feedbackDemo } = spokenEnglishPage;

  return (
    <section
      id={feedbackDemo.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-feedback-example-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {feedbackDemo.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-feedback-example-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {feedbackDemo.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{feedbackDemo.introduction}</p>
        </div>

        {/* Prominent disclosure -- appears before the scenario in DOM order, normal readable
            size and contrast, never faint or hidden copy. */}
        <p className="text-sm text-ink bg-ivory border-2 border-teal/30 rounded-md p-4 sm:p-5 mb-8 leading-relaxed font-medium">
          {feedbackDemo.disclosure}
        </p>

        <article className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">{feedbackDemo.contextLabel}</p>
          <p className="text-ink-soft leading-relaxed mb-6">{feedbackDemo.situation}</p>

          <h3 className="font-serif text-base font-medium text-ink mb-2">{feedbackDemo.firstAttemptLabel}</h3>
          <blockquote className="bg-ivory border border-stone rounded-md p-5 text-base text-ink leading-relaxed m-0 mb-6">
            {feedbackDemo.firstAttempt}
          </blockquote>

          <h3 className="font-serif text-base font-medium text-ink mb-3">{feedbackDemo.whatWorksHeading}</h3>
          <ul className="space-y-3 mb-6">
            {feedbackDemo.whatWorks.map((point) => (
              <li key={point.id} className="text-sm text-ink-soft leading-relaxed">
                <span className="font-medium text-ink">{point.label}.</span> {point.body}
              </li>
            ))}
          </ul>

          <h3 className="font-serif text-base font-medium text-ink mb-3">{feedbackDemo.diagnosisHeading}</h3>
          <ul className="space-y-3 mb-6">
            {feedbackDemo.feedbackPoints.map((point) => (
              <li key={point.id} className="text-sm text-ink-soft leading-relaxed">
                <span className="font-medium text-ink">{point.label}.</span> {point.body}
              </li>
            ))}
          </ul>

          <div className="bg-white border-2 border-teal/30 rounded-md p-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark mb-2">{feedbackDemo.nextPriorityLabel}</p>
            <p className="text-sm text-ink leading-relaxed">{feedbackDemo.nextPriority}</p>
          </div>

          <h3 className="font-serif text-base font-medium text-ink mb-2">{feedbackDemo.revisedAttemptLabel}</h3>
          <blockquote className="bg-white border-2 border-stone rounded-md p-5 text-base text-ink leading-relaxed m-0 mb-8">
            {feedbackDemo.revisedAttempt}
          </blockquote>

          <h3 className="font-serif text-base font-medium text-ink mb-3">{feedbackDemo.followUpHeading}</h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-2">
            <span className="font-medium text-ink">Follow-up question:</span> {feedbackDemo.followUpQuestion}
          </p>
          <blockquote className="bg-ivory border border-stone rounded-md p-5 text-base text-ink leading-relaxed m-0 mb-3">
            {feedbackDemo.followUpResponse}
          </blockquote>
          <p className="text-sm text-ink-soft leading-relaxed mb-6">{feedbackDemo.followUpPurposeNote}</p>

          <h3 className="font-serif text-base font-medium text-ink mb-3">{feedbackDemo.improvementHeading}</h3>
          <ul className="space-y-1.5 mb-8">
            {feedbackDemo.improvements.map((item) => (
              <li key={item.id} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2.5">
                <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item.body}
              </li>
            ))}
          </ul>
        </article>

        {/* Boundaries -- normal readable text, stated once, attached to the demonstration. */}
        <p className="text-sm text-ink-soft leading-relaxed mb-3">{feedbackDemo.transcriptBoundary}</p>
        <p className="text-sm text-ink-soft leading-relaxed">{feedbackDemo.outcomeBoundary}</p>
      </div>
    </section>
  );
}
