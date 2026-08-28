import { englishWritingContent } from "@/content/englishWriting";

// Server component. Four writing-context cards help a visitor recognise their own situation
// before anything else on the page -- mirrors components/spoken-english/SpokenEnglishFit.tsx's
// "start with the situation" pattern. Each card answers "This may be relevant when..." and "A
// useful enquiry detail is...", never attaching an outcome metric, lesson count or unverified
// deliverable. The study card's optional note redirects a test-preparation visitor to the
// dedicated route-guidance section below rather than implying this page covers IELTS/PTE/TOEFL
// Writing preparation.
export default function EnglishWritingFit() {
  const { fit } = englishWritingContent;

  return (
    <section id={fit.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="english-writing-fit-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {fit.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-fit-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {fit.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{fit.body}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fit.cards.map((card) => (
            <li key={card.id} className="bg-white border border-stone rounded-md p-5 sm:p-6">
              <p className="font-serif text-base font-medium text-ink mb-3">{card.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">
                <span className="font-medium text-ink">This may be relevant when...</span> {card.relevantWhen}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                <span className="font-medium text-ink">A useful enquiry detail is...</span> {card.usefulDetail}
              </p>
              {card.note && (
                <p className="text-sm text-ink-soft leading-relaxed mt-4 pt-4 border-t border-stone">{card.note}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
