import { aboutContent } from "@/content/about";

// Concise, first-person human story connected to the learner's decision -- no invented childhood
// story, inspirational turning point, precise years, named institutions or personal hardship.
export default function AboutIntroduction() {
  const { introduction } = aboutContent;

  return (
    <section id={introduction.id} className="py-10 sm:py-16 px-4 bg-ivory" aria-labelledby="about-introduction-heading">
      <div className="max-w-2xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {introduction.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-introduction-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-5">
          {introduction.heading}
        </h2>
        <div className="space-y-4">
          {introduction.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-charcoal leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
