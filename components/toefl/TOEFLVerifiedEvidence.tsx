import TestimonialCard from "@/components/TestimonialCard";
import { publishedTestimonials } from "@/content/testimonials";
import { toeflPage } from "@/content/toefl";

// Renders only genuine, consent-confirmed TOEFL testimonials — never a fabricated entry to make
// this section "worth" showing. With the current empty dataset this returns null: no heading, no
// section, no placeholder text, and no reserved spacing (unlike components/TestimonialGrid.tsx's
// homepage/success-stories empty state, which intentionally does show a "not yet" message — that
// pattern is wrong for this page, since the TOEFL section should not exist at all until real
// evidence does).
export default function TOEFLVerifiedEvidence() {
  const toeflTestimonials = publishedTestimonials.filter((t) => t.courseSlug === "toefl");

  if (toeflTestimonials.length === 0) return null;

  const { verifiedEvidence } = toeflPage;

  return (
    // border-b: pre-emptively guards against a same-colour adjacency with whatever section
    // follows next (irrelevant while this returns null above, but correct as soon as real
    // evidence exists and this section actually renders).
    <section className="py-14 sm:py-16 px-4 bg-white border-b border-line" aria-labelledby="toefl-evidence-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {verifiedEvidence.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-evidence-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {verifiedEvidence.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{verifiedEvidence.contextNote}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {toeflTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
