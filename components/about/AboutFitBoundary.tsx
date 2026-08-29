import { aboutContent } from "@/content/about";

// A calm, readable boundary note near the decision point -- not a legal-looking disclaimer wall.
// Explains what the About page can and cannot establish before the final CTA.
export default function AboutFitBoundary() {
  const { fitBoundary } = aboutContent;

  return (
    <section id={fitBoundary.id} className="py-10 sm:py-14 px-4 bg-white" aria-labelledby="about-fit-boundary-heading">
      <div className="max-w-2xl mx-auto">
        <h2 id="about-fit-boundary-heading" className="font-serif text-xl sm:text-2xl font-medium text-ink mb-4">
          {fitBoundary.heading}
        </h2>
        <div className="space-y-3">
          {fitBoundary.body.map((paragraph, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
