import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import { homepageTestimonials, publishedTestimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  // Truthfully hidden — no heading, no cards, no "coming soon" — until verified, consented
  // testimonials exist. See content/testimonials.ts and docs/testimonial-content-intake.md.
  if (homepageTestimonials.length === 0) return null;

  const hasMoreStories = publishedTestimonials.length > homepageTestimonials.length;

  return (
    <section id="student-stories" className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Student and parent experiences
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4">
            Progress, described by the people doing the work.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Different goals require different kinds of progress. These experiences are shared
            with permission from learners and parents who worked with Aisha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {homepageTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <p className="text-xs text-ink-faint mb-6 max-w-2xl">
          Experiences are individual. Progress depends on starting level, attendance, practice
          and programme fit.
        </p>

        {hasMoreStories && (
          <Link
            href="/#student-experience"
            className="font-serif text-sm font-medium uppercase tracking-wide border-b-2 border-coral min-h-11 hover:text-amber-dark inline-flex items-center gap-2"
          >
            Read More Student Stories
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
