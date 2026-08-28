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
import EnglishWritingPricing from "@/components/english-writing/EnglishWritingPricing";
import EnglishWritingRouteGuidance from "@/components/english-writing/EnglishWritingRouteGuidance";
import EnglishWritingAvailability from "@/components/english-writing/EnglishWritingAvailability";
import EnglishWritingFinalCTA from "@/components/english-writing/EnglishWritingFinalCTA";

// English Writing Step 1: replaces the outcome-led generic metadata ("write clearly, correctly,
// and confidently", live Zoom classes, assignments with detailed feedback -- none of which is
// verified). Description deliberately omits any format, recording, assignment, feedback, price or
// delivery claim -- none of that is verified yet (see docs/english-writing-offer-verification.md).

// Step 7: EnglishWritingAvailability now queries content/batches.ts, whose publication status is
// date-dependent (a batch's start date passing, or published/status changing) -- revalidate at
// least daily so a page built once doesn't keep showing a stale scheduled intake (or a stale
// enquiry state after a real intake is published) after that data changes. Matches the exact
// convention already used by app/courses/{ielts,spoken-english,toefl}/page.tsx.
export const revalidate = 3600;

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
      <EnglishWritingPricing />
      <EnglishWritingRouteGuidance />
      <EnglishWritingAvailability />
      <EnglishWritingFinalCTA />
    </>
  );
}
