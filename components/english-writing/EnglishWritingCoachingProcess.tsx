import { whatsappLink } from "@/lib/whatsapp";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. Five-stage coaching cycle (Step 3) showing how one real writing need becomes a
// focused attempt: clarify the task, plan, draft, review, then revise and transfer. Feedback is
// explained separately through four lenses (purpose/response, organisation/development,
// sentences/language, revision/independence) so it is never reduced to line-by-line correction.
// text-amber-dark is used for the emphasised text throughout (not text-teal) -- the recurring
// text-teal-on-tinted-surface contrast shortfall found across PTE/TOEFL/IELTS process components
// (see docs/launch-verification.md) is avoided here from the start rather than fixed later. No
// assignment, draft count, feedback method/frequency/turnaround, document upload, homework,
// platform, recording or outcome claim appears anywhere -- see
// docs/english-writing-offer-verification.md for the unresolved operational facts this section
// deliberately avoids asserting.
export default function EnglishWritingCoachingProcess() {
  const { coachingProcess } = englishWritingContent;

  return (
    <section
      id={coachingProcess.id}
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="english-writing-coaching-process-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {coachingProcess.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2
            id="english-writing-coaching-process-heading"
            className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3"
          >
            {coachingProcess.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{coachingProcess.introduction}</p>
        </div>

        {/* Ordered list -- sequence matters, so <ol> carries the semantics rather than relying on
            the visible "01"-"05" numerals alone. One column on phones; two columns from sm (with
            the fifth, odd-one-out stage spanning the full row rather than sitting alone beside
            empty space); three-plus-two layout from lg up (six-column track, spans of 2 and 3)
            instead of five equal narrow columns -- DOM order and visual order agree throughout. */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {coachingProcess.stages.map((stage, index) => (
            <li
              key={stage.id}
              className={`border border-stone rounded-md bg-white p-5 sm:p-6 ${
                index === 4 ? "sm:col-span-2 lg:col-span-3" : index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-teal/30 bg-ivory font-serif text-sm font-medium text-amber-dark mb-3"
                aria-hidden="true"
              >
                {stage.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{stage.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">{stage.purpose}</p>
              <p className="text-sm font-medium text-amber-dark mb-3">{stage.learnerAction}</p>
              {stage.boundary && (
                <p className="text-sm text-ink-soft leading-relaxed border-t border-stone pt-3">{stage.boundary}</p>
              )}
            </li>
          ))}
        </ol>

        <div className="max-w-2xl mb-6">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">{coachingProcess.feedbackHeading}</h3>
          <p className="text-ink-soft leading-relaxed">{coachingProcess.feedbackIntroduction}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {coachingProcess.feedbackLenses.map((lens) => (
            <li key={lens.id} className="bg-white border border-stone rounded-md p-5 sm:p-6">
              <h4 className="font-serif text-base font-medium text-ink mb-2">{lens.title}</h4>
              <p className="text-sm font-medium text-amber-dark mb-3">{lens.question}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Possible focus</p>
              <ul className="space-y-1.5 mb-4">
                {lens.examples.map((example) => (
                  <li key={example} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2">
                    <span className="text-amber-dark shrink-0" aria-hidden="true">
                      •
                    </span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
              {lens.boundary && (
                <p className="text-sm text-ink-soft leading-relaxed border-t border-stone pt-3">{lens.boundary}</p>
              )}
            </li>
          ))}
        </ul>

        {/* Feedback principle -- a modest bordered callout, deliberately not styled like a
            testimonial, guarantee or pricing card. */}
        <aside
          className="border-2 border-teal/30 rounded-md bg-white p-4 sm:p-5 mb-6 max-w-2xl"
          aria-label="Feedback principle"
        >
          <p className="text-sm text-ink-soft leading-relaxed">
            <span className="font-medium text-ink">Feedback principle:</span> {coachingProcess.feedbackPrinciple}
          </p>
        </aside>

        {/* Operational boundary -- readable body text, not a tooltip, accordion or footnote. */}
        <p className="text-sm text-ink-soft leading-relaxed max-w-2xl mb-8">{coachingProcess.boundaryNote}</p>

        <a
          href={whatsappLink(coachingProcess.cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          {coachingProcess.cta.label}
        </a>
      </div>
    </section>
  );
}
