import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeIELTSBenefits from "@/components/HomeIELTSBenefits";
import AudiencePathways from "@/components/AudiencePathways";
import ProgrammeMatcher from "@/components/ProgrammeMatcher";
import CourseExplorer from "@/components/CourseExplorer";
import LearningFormats from "@/components/LearningFormats";
import AboutAisha from "@/components/AboutAisha";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoachingProcess from "@/components/CoachingProcess";
import BatchTable from "@/components/BatchTable";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import HomeFAQ from "@/components/HomeFAQ";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { site } from "@/content/site";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

// TOEFL Step 10: "Personalised live online teaching" asserted a universal "live" claim that
// contradicts TOEFL's verified offer (only online delivery is confirmed -- see
// docs/toefl-offer-verification.md, where synchronous/live delivery remains "Needs owner
// confirmation"). Removed "live" rather than leaving an unconfirmed universal claim this
// site-wide description can't back up for every named programme.
export const metadata: Metadata = {
  title: `${site.brandName} — ${site.tagline}`,
  description:
    `Expert English coaching for O/A Levels, IGCSE, IELTS, PTE and TOEFL, plus Spoken English and Professional English for adults. Personalised online teaching with Aisha — ${site.qualification}, ${site.professionalRole}.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIELTSBenefits />
      <AudiencePathways />
      <ProgrammeMatcher />
      <CourseExplorer />
      <LearningFormats />

      <AboutAisha />

      <TestimonialsSection />

      <CoachingProcess />

      {/* Availability -- Spoken English Step 10: "Upcoming live online intakes" and "the next
          suitable group or one-to-one opening" both asserted a universal live/group/one-to-one
          claim not verified for every programme (including Spoken English). Reworded to neutral
          language that doesn't imply every programme is intake-based or that group/private
          options exist. */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="mb-7 sm:mb-10 max-w-2xl">
              <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
                Current availability
                <span className="h-0.5 w-9 bg-coral" aria-hidden />
              </p>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-3">
                Review confirmed upcoming intakes
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Confirmed future dates are listed in Pakistan Standard Time. If your programme is
                not shown, ask Aisha whether a suitable current option is available.
              </p>
            </div>
            <BatchTable limit={3} />
          </FadeUp>
        </div>
      </section>

      <LeadCaptureSection />
      <HomeFAQ />
      <CTASection eyebrow="Your next step" />
    </>
  );
}
