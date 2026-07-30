import type { Metadata } from "next";
import TestimonialGrid from "@/components/TestimonialGrid";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real students, real progress. Testimonials and results from students who completed English coaching with Aisha.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Real students. Real progress.
          </h1>
          <p className="text-ink-soft text-lg">
            Testimonials and results from students I&apos;ve worked with.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <TestimonialGrid />
          </FadeUp>

          {/* Video/screenshot placeholder */}
          <div className="mt-16 bg-white rounded-2xl border border-stone p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2.867a1 1 0 00-.447-.832L15 14" />
              </svg>
            </div>
            <p className="font-serif text-xl font-bold text-ink mb-2">Video testimonials coming soon</p>
            <p className="text-muted">
              This space is reserved for video testimonials and result screenshots from students. Replace
              the placeholder testimonials above with real quotes, photos, and score screenshots.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
