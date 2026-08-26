import type { Metadata } from "next";
import PTEHero from "@/components/pte/PTEHero";
import PTEAuthorityStrip from "@/components/pte/PTEAuthorityStrip";
import PTEFit from "@/components/pte/PTEFit";
import PTEScoreProfile from "@/components/pte/PTEScoreProfile";
import PTETaskCurriculum from "@/components/pte/PTETaskCurriculum";
import PTECoachingProcess from "@/components/pte/PTECoachingProcess";
import PTEFeedbackDemo from "@/components/pte/PTEFeedbackDemo";
import PTEVerifiedEvidence from "@/components/pte/PTEVerifiedEvidence";
import PTELearningFormat from "@/components/pte/PTELearningFormat";
import PTEPricing from "@/components/pte/PTEPricing";
import PTEAvailability from "@/components/pte/PTEAvailability";
import PTEFAQ from "@/components/pte/PTEFAQ";
import PTEFinalCTA from "@/components/pte/PTEFinalCTA";
import { site } from "@/content/site";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/pte`;

// PTE Step 1: replaces the outcome-led generic metadata ("Score high...", live Zoom/mock/fee
// claims). Description deliberately omits any recording, price or delivery-format claim -- none
// of that is verified yet (see docs/pte-offer-verification.md).
export const metadata: Metadata = {
  title: "Online PTE Academic Preparation",
  description:
    "Online PTE Academic preparation focused on current task requirements, timed computer-based practice and the English skills behind the candidate's required score.",
  alternates: { canonical: "/courses/pte" },
  openGraph: {
    type: "website",
    title: `Online PTE Academic Preparation | ${site.brandName}`,
    description:
      "Online PTE Academic preparation focused on current task requirements, timed computer-based practice and the English skills behind the candidate's required score.",
    url: pageUrl,
    // No PTE-specific approved social image exists yet -- reusing the site's existing truthful
    // default rather than a fabricated or mismatched-dimension asset.
    images: [{ url: "/images/og-image.jpg", width: 960, height: 1280, alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}` }],
  },
};

export default function PTEPage() {
  return (
    <>
      <PTEHero />
      <PTEAuthorityStrip />
      <PTEFit />
      <PTEScoreProfile />
      <PTETaskCurriculum />
      <PTECoachingProcess />
      <PTEFeedbackDemo />
      <PTEVerifiedEvidence />
      <PTELearningFormat />
      <PTEPricing />
      <PTEAvailability />
      <PTEFAQ />
      <PTEFinalCTA />
    </>
  );
}
