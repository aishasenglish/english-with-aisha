import type { Metadata } from "next";
import TOEFLHero from "@/components/toefl/TOEFLHero";
import TOEFLAuthorityStrip from "@/components/toefl/TOEFLAuthorityStrip";
import TOEFLFit from "@/components/toefl/TOEFLFit";
import TOEFLScoreProfile from "@/components/toefl/TOEFLScoreProfile";
import TOEFLTaskCurriculum from "@/components/toefl/TOEFLTaskCurriculum";
import TOEFLCoachingProcess from "@/components/toefl/TOEFLCoachingProcess";
import TOEFLFeedbackDemo from "@/components/toefl/TOEFLFeedbackDemo";
import TOEFLVerifiedEvidence from "@/components/toefl/TOEFLVerifiedEvidence";
import TOEFLLearningFormat from "@/components/toefl/TOEFLLearningFormat";
import TOEFLPricing from "@/components/toefl/TOEFLPricing";
import TOEFLAvailability from "@/components/toefl/TOEFLAvailability";
import TOEFLFAQ from "@/components/toefl/TOEFLFAQ";
import TOEFLFinalCTA from "@/components/toefl/TOEFLFinalCTA";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

// TOEFL Step 1: replaces the outcome-led generic metadata ("get ready for universities
// worldwide", live Zoom/mock/fee claims). Description deliberately omits any recording, price,
// delivery-format or admissions claim -- none of that is verified yet (see
// docs/toefl-offer-verification.md).
export const metadata: Metadata = {
  title: "Online TOEFL iBT Preparation",
  description:
    "Online TOEFL iBT preparation focused on the current four-skill test, updated task demands and the candidate's confirmed overall and section-score requirements.",
  alternates: { canonical: "/courses/toefl" },
};

export default function TOEFLPage() {
  return (
    <>
      <TOEFLHero />
      <TOEFLAuthorityStrip />
      <TOEFLFit />
      <TOEFLScoreProfile />
      <TOEFLTaskCurriculum />
      <TOEFLCoachingProcess />
      <TOEFLFeedbackDemo />
      <TOEFLVerifiedEvidence />
      <TOEFLLearningFormat />
      <TOEFLPricing />
      <TOEFLAvailability />
      <TOEFLFAQ />
      <TOEFLFinalCTA />
    </>
  );
}
