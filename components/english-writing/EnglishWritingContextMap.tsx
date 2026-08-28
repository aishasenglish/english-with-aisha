import { englishWritingContent } from "@/content/englishWriting";

// A static context-to-priority mapping. It avoids a wide comparison table on phones and keeps the
// academic-integrity boundary visible rather than hiding essential scope in a tooltip or accordion.
export default function EnglishWritingContextMap() {
  const { contextMap } = englishWritingContent;

  return (
    <section
      id={contextMap.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-context-map-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {contextMap.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-context-map-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {contextMap.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{contextMap.introduction}</p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {contextMap.contexts.map((context) => (
            <li key={context.id} className="border border-stone rounded-md bg-ivory p-5 sm:p-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{context.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{context.description}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Possible emphasis</p>
              <ul className="space-y-2 mb-5">
                {context.possiblePriorities.map((priority) => (
                  <li key={priority} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2">
                    <span className="text-teal shrink-0" aria-hidden="true">
                      •
                    </span>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-soft leading-relaxed border-t border-stone pt-4">{context.boundary}</p>
            </li>
          ))}
        </ul>

        <aside className="border-2 border-teal/30 rounded-md bg-white p-4 sm:p-5" aria-label="Academic integrity and service scope">
          <p className="text-sm text-ink-soft leading-relaxed">
            <span className="font-medium text-ink">Learning and authorship:</span> {contextMap.integrityNote}
          </p>
        </aside>
      </div>
    </section>
  );
}
