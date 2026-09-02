import { ieltsProgrammePage } from "@/content/ielts";

function ProgressArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
      <svg className="h-6 w-6 text-sea-edge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" /></svg>
    </div>
  );
}

export default function IELTSFeedbackDemo() {
  const { feedback } = ieltsProgrammePage;

  return (
    <section id={feedback.id} className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="ielts-feedback-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{feedback.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
          <h2 id="ielts-feedback-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{feedback.heading}</h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">{feedback.introduction}</p>
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">{feedback.context}</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          <article className="rounded-xl border border-line bg-surface-tint p-6">
            <p className="text-sm font-semibold text-teal">01</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{feedback.firstLabel}</h3>
            <p className="mt-5 border-l-2 border-line-strong pl-4 text-base leading-relaxed text-ink-soft">{feedback.firstAttempt}</p>
          </article>
          <ProgressArrow />
          <article className="rounded-xl border border-sea-edge bg-sea-wash p-6">
            <p className="text-sm font-semibold text-teal">02</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{feedback.feedbackLabel}</h3>
            <ul className="mt-5 space-y-3">
              {feedback.feedbackPoints.map((point) => (
                <li key={point.id} className="text-sm leading-relaxed text-ink-soft"><strong className="font-semibold text-ink">{point.label}:</strong> {point.body}</li>
              ))}
            </ul>
            <p className="mt-5 border-t border-sea-edge pt-4 text-sm leading-relaxed text-ink"><strong>Next action:</strong> {feedback.nextAction}</p>
          </article>
          <ProgressArrow />
          <article className="rounded-xl border-2 border-teal bg-white p-6">
            <p className="text-sm font-semibold text-teal">03</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{feedback.revisedLabel}</h3>
            <p className="mt-5 border-l-4 border-teal pl-4 text-base font-medium leading-relaxed text-ink">{feedback.revisedAttempt}</p>
            <ul className="mt-5 space-y-2">
              {feedback.improvements.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft"><span className="font-semibold text-teal" aria-hidden="true">✓</span>{point}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-faint">{feedback.disclosure}</p>
      </div>
    </section>
  );
}
