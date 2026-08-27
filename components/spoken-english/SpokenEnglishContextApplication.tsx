import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. A compact mapping showing that curriculum emphasis changes by context --
// deliberately not a wide comparison table (Step 2, Part J/N): one column on phones, a balanced
// grid from tablet up. No separate mini-course, price or guarantee is implied for any context.
export default function SpokenEnglishContextApplication() {
  const { contextApplication } = spokenEnglishPage;

  return (
    <section
      id={contextApplication.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-context-application-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {contextApplication.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-context-application-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {contextApplication.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{contextApplication.introduction}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contextApplication.contexts.map((item) => (
            <li key={item.id} className="border border-stone rounded-md bg-ivory p-5">
              <h3 className="font-serif text-base font-medium text-ink mb-2">{item.context}</h3>
              <ul className="space-y-1.5">
                {item.examples.map((example) => (
                  <li key={example} className="text-sm text-ink-soft leading-relaxed">
                    {example}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
