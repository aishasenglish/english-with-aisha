import type { Metadata } from "next";
import TOEFLHero from "@/components/toefl/TOEFLHero";
import TOEFLAuthorityStrip from "@/components/toefl/TOEFLAuthorityStrip";
import TOEFLFit from "@/components/toefl/TOEFLFit";
import TOEFLScoreProfile from "@/components/toefl/TOEFLScoreProfile";
import TOEFLTaskCurriculum from "@/components/toefl/TOEFLTaskCurriculum";
import TOEFLCoachingProcess from "@/components/toefl/TOEFLCoachingProcess";
import TOEFLFeedbackDemo from "@/components/toefl/TOEFLFeedbackDemo";
import TOEFLVerifiedEvidence from "@/components/toefl/TOEFLVerifiedEvidence";
import BatchTable from "@/components/BatchTable";
import TOEFLFinalCTA from "@/components/toefl/TOEFLFinalCTA";
import { toeflPage } from "@/content/toefl";

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

      {/* TOEFL Step 1: no confirmed TOEFL intake exists yet -- the shared, fail-closed
          BatchTable correctly shows its truthful "ask about the next available intake" state.
          A dedicated TOEFLAvailability component (mirroring IELTS/PTE Step 7) is a later step. */}
      <section id={toeflPage.availability.id} className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            {toeflPage.availability.sectionHeading}
          </h2>
          <BatchTable
            courseSlug="toefl"
            fallbackMessage={toeflPage.availability.fallbackMessage}
            emptyStateHeading={toeflPage.availability.enquiryHeading}
            emptyStateBody={toeflPage.availability.enquiryBody}
          />
        </div>
      </section>

      <TOEFLFinalCTA />
    </>
  );
}
