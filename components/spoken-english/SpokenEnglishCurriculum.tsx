import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Six curriculum areas rendered as a readable one-column (mobile) / two-column
// (tablet+) grid -- never a wide CEFR-style table, radar chart, horizontal rail or tabbed view
// (Step 2, Part N explicitly rules these out). Each area's optional `boundary` renders as plain
// readable text, not a tooltip, wherever the area is easy to misuse or overstate.
export default function SpokenEnglishCurriculum() {
  const { curriculum } = spokenEnglishPage;

  return (
    <section
      id={curriculum.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="spoken-english-communication-curriculum-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {curriculum.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-communication-curriculum-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {curriculum.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{curriculum.introduction}</p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {curriculum.areas.map((area) => (
            <li key={area.id} className="bg-white border border-stone rounded-md p-5 sm:p-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{area.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{area.purpose}</p>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Focus areas</p>
              <ul className="space-y-1.5 mb-4">
                {area.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Practice examples</p>
              <ul className="space-y-1.5">
                {area.practiceExamples.map((item) => (
                  <li key={item} className="text-sm text-ink-soft leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {area.boundary && (
                <p className="text-sm text-ink-soft leading-relaxed mt-4 pt-4 border-t border-stone">
                  {area.boundary}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
