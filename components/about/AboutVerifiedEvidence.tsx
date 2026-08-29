import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { aboutTestimonials, publishedTestimonials } from "@/content/testimonials";
import { aboutContent } from "@/content/about";

// About Step 5: renders only genuine, consent-confirmed, explicitly About-featured testimonials --
// never a fabricated entry to make this section "worth" showing. With the current empty
// `aboutTestimonials` array this returns null: no heading, no section wrapper, no explanatory
// copy, no divider, no "coming soon" state, and no Success Stories link -- mirrors
// components/ielts/IELTSVerifiedEvidence.tsx's own fail-closed pattern rather than
// components/TestimonialGrid.tsx's homepage/success-stories empty state (which intentionally does
// show a "not yet" message -- that pattern is wrong here, since this section should not exist at
// all until real, About-curated evidence does).
export default function AboutVerifiedEvidence() {
  if (aboutTestimonials.length === 0) return null;

  const { verifiedEvidence } = aboutContent;
  // Only link onward when /success-stories genuinely has more than what's already shown here --
  // never route a visitor from this trust section to a page repeating the exact same cards.
  const hasMoreStories = publishedTestimonials.length > aboutTestimonials.length;

  return (
    <section
      id={verifiedEvidence.id}
      className="py-10 sm:py-16 px-4 bg-white border-t border-line"
      aria-labelledby="about-verified-evidence-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {verifiedEvidence.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="about-verified-evidence-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {verifiedEvidence.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{verifiedEvidence.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {aboutTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {hasMoreStories && (
          <Link
            href={verifiedEvidence.successStoriesLink.href}
            className="inline-flex min-h-11 items-center font-serif text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
          >
            {verifiedEvidence.successStoriesLink.label}
          </Link>
        )}
      </div>
    </section>
  );
}
