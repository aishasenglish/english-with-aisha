import { toeflPage } from "@/content/toefl";

// TOEFL Step 1: a deliberately temporary current-format preview, replacing the pre-2026 module
// labels ("Integrated and independent Writing tasks", "Speaking responses that score") that
// previously rendered on this page. A full task-by-task curriculum with complete official sourcing
// is a later step -- this component intentionally omits exact item counts, timing, adaptive
// mechanics and score weights. See docs/toefl-content-sources.md for the ETS pages behind each
// task family named below.
export default function TOEFLCurriculumPreview() {
  const { curriculumPreview } = toeflPage;

  return (
    <section className="py-14 sm:py-16 px-4 bg-white" aria-labelledby="toefl-curriculum-heading">
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {curriculumPreview.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="toefl-curriculum-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
          {curriculumPreview.heading}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-6">{curriculumPreview.body}</p>

        <ul className="space-y-3 mb-6">
          {curriculumPreview.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-soft leading-relaxed">
              <svg className="w-4 h-4 text-teal shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-faint leading-relaxed border-t border-stone pt-5">
          {curriculumPreview.footnote}
        </p>
      </div>
    </section>
  );
}
