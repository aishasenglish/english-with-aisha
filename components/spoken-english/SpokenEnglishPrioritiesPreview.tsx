import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. A deliberately temporary preview (Step 1) -- Step 2 replaces this with the
// final learner-profile and communication curriculum. Rendered as a plain semantic list, never
// styled to look like confirmed modules or an inclusion list, and never labelled with fake
// beginner/intermediate/advanced levels or a CEFR score.
export default function SpokenEnglishPrioritiesPreview() {
  const { prioritiesPreview } = spokenEnglishPage;

  return (
    <section
      id={prioritiesPreview.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-priorities-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {prioritiesPreview.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-priorities-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {prioritiesPreview.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{prioritiesPreview.body}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {prioritiesPreview.priorities.map((priority) => (
            <li key={priority.id} className="border border-stone rounded-md bg-ivory p-5">
              <p className="font-serif text-base font-medium text-ink mb-1.5">{priority.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{priority.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
