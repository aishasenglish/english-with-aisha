import type { Metadata } from "next";
import TestimonialGrid from "@/components/TestimonialGrid";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Verified testimonials and results from students who completed English coaching with Aisha.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Student progress, shared responsibly.
          </h1>
          <p className="text-ink-soft text-lg">
            Verified testimonials and results will be published here with each student&apos;s permission.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <TestimonialGrid />
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
