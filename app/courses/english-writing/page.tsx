import type { Metadata } from "next";
import EnglishWritingHero from "@/components/english-writing/EnglishWritingHero";
import EnglishWritingAuthorityStrip from "@/components/english-writing/EnglishWritingAuthorityStrip";
import EnglishWritingFit from "@/components/english-writing/EnglishWritingFit";
import EnglishWritingProfile from "@/components/english-writing/EnglishWritingProfile";
import EnglishWritingFramework from "@/components/english-writing/EnglishWritingFramework";
import EnglishWritingContextMap from "@/components/english-writing/EnglishWritingContextMap";
import EnglishWritingCoachingProcess from "@/components/english-writing/EnglishWritingCoachingProcess";
import EnglishWritingFeedbackDemonstration from "@/components/english-writing/EnglishWritingFeedbackDemonstration";
import EnglishWritingVerifiedEvidence from "@/components/english-writing/EnglishWritingVerifiedEvidence";
import EnglishWritingLearningFormat from "@/components/english-writing/EnglishWritingLearningFormat";
import EnglishWritingRouteGuidance from "@/components/english-writing/EnglishWritingRouteGuidance";
import EnglishWritingAvailability from "@/components/english-writing/EnglishWritingAvailability";
import EnglishWritingFinalCTA from "@/components/english-writing/EnglishWritingFinalCTA";

// English Writing Step 1: replaces the outcome-led generic metadata ("write clearly, correctly,
// and confidently", live Zoom classes, assignments with detailed feedback -- none of which is
// verified). Description deliberately omits any format, recording, assignment, feedback, price or
// delivery claim -- none of that is verified yet (see docs/english-writing-offer-verification.md).
// No revalidate export: this Step-1 page deliberately does not query content/batches.ts at all
// (see components/english-writing/EnglishWritingAvailability.tsx), so it has no time-dependent
// data to keep fresh.
export const metadata: Metadata = {
  title: "Online English Writing Coaching",
  description:
    "Explore online English writing coaching focused on clearer sentences, stronger organisation and purposeful writing for study, work and everyday communication.",
  alternates: { canonical: "/courses/english-writing" },
};

export default function EnglishWritingPage() {
  return (
    <>
      <EnglishWritingHero />
      <EnglishWritingAuthorityStrip />
      <EnglishWritingFit />
      <EnglishWritingProfile />
      <EnglishWritingFramework />
      <EnglishWritingContextMap />
      <EnglishWritingCoachingProcess />
      <EnglishWritingFeedbackDemonstration />
      <EnglishWritingVerifiedEvidence />
      <EnglishWritingLearningFormat />
      <EnglishWritingRouteGuidance />
      <EnglishWritingAvailability />
      <EnglishWritingFinalCTA />
    </>
  );
}
