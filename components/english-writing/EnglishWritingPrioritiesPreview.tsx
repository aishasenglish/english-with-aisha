import { englishWritingContent } from "@/content/englishWriting";

// Server component. A deliberately limited preview -- not the final curriculum (Step 1, Part F).
// A compact list rather than a repeated card design, so the page doesn't become monotonous after
// the fit section's own cards. Every item is framed as a possible discussion area, never a
// guaranteed module, lesson count or inclusion.
export default function EnglishWritingPrioritiesPreview() {
  const { prioritiesPreview } = englishWritingContent;

  return (
    <section
      id={prioritiesPreview.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-priorities-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {prioritiesPreview.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-priorities-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {prioritiesPreview.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{prioritiesPreview.intro}</p>
        </div>

        <ul className="space-y-4">
          {prioritiesPreview.items.map((item) => (
            <li key={item.id} className="border-l-2 border-teal/30 pl-4">
              <p className="font-serif text-base font-medium text-ink mb-1">{item.label}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
