import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeIELTSBenefits from "@/components/HomeIELTSBenefits";
import CourseExplorer from "@/components/CourseExplorer";
import LearningFormats from "@/components/LearningFormats";
import HomeGettingStarted from "@/components/HomeGettingStarted";
import HomeFAQ from "@/components/HomeFAQ";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import { site } from "@/content/site";

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
      <CourseExplorer />
      <LearningFormats />
      <HomeGettingStarted />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}
