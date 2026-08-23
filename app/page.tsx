import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AudiencePathways from "@/components/AudiencePathways";
import ProgrammeMatcher from "@/components/ProgrammeMatcher";
import CourseExplorer from "@/components/CourseExplorer";
import LearningFormats from "@/components/LearningFormats";
import AboutAisha from "@/components/AboutAisha";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import BatchTable from "@/components/BatchTable";
import LeadMagnet from "@/components/LeadMagnet";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.brandName} — ${site.tagline}`,
  description:
    "Expert English coaching for O/A Levels, IGCSE, IELTS, PTE and TOEFL, plus Spoken English and Professional English for adults. Personalised live online teaching with Aisha — MPhil in English Literature, Government College Lecturer.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudiencePathways />
      <ProgrammeMatcher />
      <CourseExplorer />
      <LearningFormats />

      <AboutAisha />

      <TestimonialsSection />

      {/* Method */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-7 sm:mb-12">
              <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
                The method
                <span className="h-0.5 w-9 bg-coral" aria-hidden />
              </p>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink">
                Four steps to fluency and confidence
              </h2>
            </div>
          </FadeUp>
          <p className="sm:hidden text-xs text-ink-faint mb-3">Swipe through the four steps</p>
          <HowItWorks />
        </div>
      </section>

      {/* Batch table */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-7 sm:mb-10">
              <div>
                <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
                  Dates
                  <span className="h-0.5 w-9 bg-coral" aria-hidden />
                </p>
                <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink">
                  Upcoming batches
                </h2>
              </div>
            </div>
            <BatchTable />
          </FadeUp>
        </div>
      </section>

      <LeadMagnet />
      <CTASection />
    </>
  );
}
