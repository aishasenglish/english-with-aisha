import TestimonialCard from "@/components/TestimonialCard";
import { publishedTestimonials } from "@/content/testimonials";

// Server component. Renders only genuine, consent-confirmed Spoken English testimonials --
// filtered from `publishedTestimonials` (already consentConfirmed) to courseSlug === "spoken-
// english" specifically, never all testimonials, homepage-featured items, or evidence from another
// programme. content/testimonials.ts is currently empty, so this returns null: no heading, no
// section, no "coming soon" placeholder, no hidden landmark -- mirroring components/
// TestimonialsSection.tsx's truthfully-empty pattern. See docs/spoken-english-offer-verification.md
// for the current evidence status and docs/testimonial-content-intake.md for how a genuine record
// would be added.
export default function SpokenEnglishVerifiedEvidence() {
  const spokenEnglishTestimonials = publishedTestimonials.filter(
    (testimonial) => testimonial.courseSlug === "spoken-english"
  );

  if (spokenEnglishTestimonials.length === 0) return null;

  return (
    <section
      id="spoken-english-verified-evidence"
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="spoken-english-verified-evidence-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Verified learner experiences
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-verified-evidence-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            What Spoken English learners chose to share.
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Experiences are individual and no communication outcome is guaranteed. These are shared
            with the learner&rsquo;s permission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {spokenEnglishTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
