import { englishWritingContent } from "@/content/englishWriting";

// Six connected development areas, deliberately presented as possible priorities rather than a
// numbered lesson sequence or a promise that every learner receives identical coverage.
export default function EnglishWritingFramework() {
  const { framework } = englishWritingContent;

  return (
    <section
      id={framework.id}
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="english-writing-framework-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {framework.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-framework-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {framework.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{framework.introduction}</p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {framework.areas.map((area) => (
            <li key={area.id} className="bg-white border border-stone rounded-md p-5 sm:p-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{area.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{area.purpose}</p>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Possible priorities</p>
              <ul className="space-y-2 mb-5">
                {area.possiblePriorities.map((priority) => (
                  <li key={priority} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <svg
                      className="w-4 h-4 text-teal shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-ink-soft leading-relaxed border-t border-stone pt-4">
                <span className="font-medium text-ink">Ask yourself:</span> {area.reflectionPrompt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
