import type { Metadata } from "next";
import ProgrammePageViewTracker from "@/components/analytics/ProgrammePageViewTracker";
import TOEFLBreadcrumb from "@/components/toefl/TOEFLBreadcrumb";
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
import { site } from "@/content/site";
import { toeflPage } from "@/content/toefl";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/toefl`;

// TOEFL Step 10: an absolute title (bypasses the root layout's "%s | AISHAS ENGLISH" template) so
// the search-facing title stays exactly this, never accidentally lengthened. Description, social
// title/description and the social image are all deliberately distinct from the generic
// root-layout metadata other pages inherit -- see docs/toefl-content-sources.md and
// docs/toefl-offer-verification.md for why no score, price, recording or availability claim
// appears here. Only BreadcrumbList structured data is added below (Part F/G) -- no Offer,
// Review, FAQPage, QAPage or CourseInstance markup, per the current official Google guidance
// reviewed for this step.
export const metadata: Metadata = {
  title: { absolute: `Online TOEFL iBT Preparation | ${site.brandName}` },
  description:
    "Online TOEFL iBT preparation centred on Reading, Listening, Writing and Speaking and your institution's confirmed score requirement. Ask about current availability.",
  alternates: { canonical: "/courses/toefl" },
  openGraph: {
    type: "website",
    title: "Online TOEFL iBT Preparation with Aisha",
    description:
      "Four-skill TOEFL iBT preparation guided by your institution's confirmed overall and section-score requirements.",
    url: pageUrl,
    images: [
      {
        // A genuine 1200x630 canvas composed from the site's existing approved portrait (the same
        // og-image.jpg source used for the IELTS/PTE social assets), padded on a restrained ivory
        // background rather than cropped or stretched -- the source photo is portrait-oriented
        // (960x1280), so a true landscape crop would have cut off Aisha's face or body. See
        // docs/toefl-content-sources.md for the full rationale.
        url: "/images/social/toefl-ibt-preparation.jpg",
        width: 1200,
        height: 630,
        alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online TOEFL iBT Preparation with Aisha",
    description:
      "Four-skill TOEFL iBT preparation guided by your institution's confirmed overall and section-score requirements.",
    images: ["/images/social/toefl-ibt-preparation.jpg"],
  },
};

// The one search-facing structured type added in this step -- built from the exact same
// content/toefl.ts `breadcrumb` array the visible components/toefl/TOEFLBreadcrumb.tsx renders,
// so the visible path and the structured data can never disagree.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: toeflPage.breadcrumb.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function TOEFLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* TOEFL Step 12: the only Client Component leaf this page adds -- fires programme_view
          once per navigation to this route, through the same shared tracker IELTS/PTE use. Every
          other section below stays server-rendered. */}
      <ProgrammePageViewTracker programme="toefl" pagePath="/courses/toefl" />
      <TOEFLBreadcrumb />
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
