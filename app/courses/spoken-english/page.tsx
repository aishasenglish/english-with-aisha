import type { Metadata } from "next";
import SpokenEnglishHero from "@/components/spoken-english/SpokenEnglishHero";
import SpokenEnglishAuthorityStrip from "@/components/spoken-english/SpokenEnglishAuthorityStrip";
import SpokenEnglishFit from "@/components/spoken-english/SpokenEnglishFit";
import SpokenEnglishSpeakingProfile from "@/components/spoken-english/SpokenEnglishSpeakingProfile";
import SpokenEnglishCurriculum from "@/components/spoken-english/SpokenEnglishCurriculum";
import SpokenEnglishContextApplication from "@/components/spoken-english/SpokenEnglishContextApplication";
import SpokenEnglishCoachingProcess from "@/components/spoken-english/SpokenEnglishCoachingProcess";
import SpokenEnglishFeedbackDemo from "@/components/spoken-english/SpokenEnglishFeedbackDemo";
import SpokenEnglishVerifiedEvidence from "@/components/spoken-english/SpokenEnglishVerifiedEvidence";
import SpokenEnglishLearningFormat from "@/components/spoken-english/SpokenEnglishLearningFormat";
import SpokenEnglishPricing from "@/components/spoken-english/SpokenEnglishPricing";
import SpokenEnglishAvailability from "@/components/spoken-english/SpokenEnglishAvailability";
import SpokenEnglishFinalCTA from "@/components/spoken-english/SpokenEnglishFinalCTA";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing stale content if that ever changes.
export const revalidate = 3600;

// Spoken English Step 1: replaces the outcome-led generic metadata ("speak without hesitation",
// broad fluency/confidence claims, "expert coaching" asserted without a verified basis).
// Description deliberately omits any format, recording, price or delivery claim -- none of that
// is verified yet (see docs/spoken-english-offer-verification.md).
export const metadata: Metadata = {
  title: "Online Spoken English Coaching",
  description:
    "Online spoken English coaching focused on clearer pronunciation, stronger responses and practical communication for work, interviews, presentations, study and everyday situations.",
  alternates: { canonical: "/courses/spoken-english" },
};

export default function SpokenEnglishPage() {
  return (
    <>
      <SpokenEnglishHero />
      <SpokenEnglishAuthorityStrip />
      <SpokenEnglishFit />
      <SpokenEnglishSpeakingProfile />
      <SpokenEnglishCurriculum />
      <SpokenEnglishContextApplication />
      <SpokenEnglishCoachingProcess />
      <SpokenEnglishFeedbackDemo />
      <SpokenEnglishVerifiedEvidence />
      <SpokenEnglishLearningFormat />
      <SpokenEnglishPricing />
      <SpokenEnglishAvailability />
      <SpokenEnglishFinalCTA />
    </>
  );
}
