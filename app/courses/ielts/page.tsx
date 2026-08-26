import type { Metadata } from "next";
import IELTSHero from "@/components/ielts/IELTSHero";
import IELTSAuthorityStrip from "@/components/ielts/IELTSAuthorityStrip";
import IELTSFit from "@/components/ielts/IELTSFit";
import IELTSScoreProfile from "@/components/ielts/IELTSScoreProfile";
import IELTSSkillsCurriculum from "@/components/ielts/IELTSSkillsCurriculum";
import IELTSCoachingProcess from "@/components/ielts/IELTSCoachingProcess";
import IELTSFeedbackDemo from "@/components/ielts/IELTSFeedbackDemo";
import IELTSVerifiedEvidence from "@/components/ielts/IELTSVerifiedEvidence";
import IELTSLearningFormat from "@/components/ielts/IELTSLearningFormat";
import IELTSPricing from "@/components/ielts/IELTSPricing";
import IELTSAvailability from "@/components/ielts/IELTSAvailability";
import IELTSFinalCTA from "@/components/ielts/IELTSFinalCTA";
import { site } from "@/content/site";

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/ielts`;
const pageTitle = "Online IELTS Preparation with Personal Feedback";
const pageDescription =
  "Live online IELTS preparation for Academic and General Training candidates, with structured practice and feedback on writing and speaking from Aisha.";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/courses/ielts" },
  openGraph: {
    type: "website",
    title: `${pageTitle} | ${site.brandName}`,
    description: pageDescription,
    url: pageUrl,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: site.brandName }],
  },
};

export default function IELTSPage() {
  return (
    <>
      <IELTSHero />
      <IELTSAuthorityStrip />
      <IELTSFit />
      <IELTSScoreProfile />
      <IELTSSkillsCurriculum />
      <IELTSCoachingProcess />
      <IELTSFeedbackDemo />
      <IELTSVerifiedEvidence />
      <IELTSLearningFormat />
      <IELTSPricing />
      <IELTSAvailability />

      {/* The generic 15-question global FAQ is intentionally removed from this page (IELTS
          Step 1) — an IELTS-specific curated FAQ is added in a later step rather than repeating
          unrelated school/batch/programme-selection questions here. */}

      <IELTSFinalCTA />
    </>
  );
}
