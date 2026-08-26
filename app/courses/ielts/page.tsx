import type { Metadata } from "next";
import IELTSHero from "@/components/ielts/IELTSHero";
import IELTSAuthorityStrip from "@/components/ielts/IELTSAuthorityStrip";
import IELTSFit from "@/components/ielts/IELTSFit";
import IELTSScoreProfile from "@/components/ielts/IELTSScoreProfile";
import IELTSSkillsCurriculum from "@/components/ielts/IELTSSkillsCurriculum";
import IELTSCoachingProcess from "@/components/ielts/IELTSCoachingProcess";
import IELTSFeedbackDemo from "@/components/ielts/IELTSFeedbackDemo";
import IELTSVerifiedEvidence from "@/components/ielts/IELTSVerifiedEvidence";
import IncludedList from "@/components/IncludedList";
import BatchTable from "@/components/BatchTable";
import IELTSFinalCTA from "@/components/ielts/IELTSFinalCTA";
import { courses } from "@/content/courses";
import { site } from "@/content/site";

const course = courses.find((c) => c.slug === "ielts")!;

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

      {/* Inclusions are temporarily retained from the generic course template — replaced once a
          later IELTS step verifies exactly what's included against Aisha's current offering. */}
      <IncludedList course={course} />

      {/* Pricing intentionally omitted (IELTS Step 1) — the previous data was internally
          contradictory (a $75->$45 / PKR 20,000->12,000 "LIMITED TIME" discount against a base
          price of PKR 10,000, with no verified expiry or billing basis). See
          docs/launch-verification.md for what's needed before pricing is restored. */}

      <section id="ielts-availability" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            Upcoming IELTS batches
          </h2>
          <BatchTable courseSlug="ielts" />
        </div>
      </section>

      {/* The generic 15-question global FAQ is intentionally removed from this page (IELTS
          Step 1) — an IELTS-specific curated FAQ is added in a later step rather than repeating
          unrelated school/batch/programme-selection questions here. */}

      <IELTSFinalCTA />
    </>
  );
}
