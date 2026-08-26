import type { Metadata } from "next";
import IELTSBreadcrumb from "@/components/ielts/IELTSBreadcrumb";
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
import IELTSFAQ from "@/components/ielts/IELTSFAQ";
import IELTSFinalCTA from "@/components/ielts/IELTSFinalCTA";
import { site } from "@/content/site";
import { ieltsPage } from "@/content/ielts";

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/ielts`;

// IELTS Step 10: an absolute title (bypasses the root layout's "%s | Aisha's English" template)
// so the search-facing title stays exactly this, never accidentally lengthened. Description,
// social title/description and the social image are all deliberately distinct from the generic
// root-layout metadata other pages inherit -- see docs/ielts-content-sources.md and
// docs/ielts-offer-verification.md for why no score, price, recording or duration claim appears
// here. Only BreadcrumbList structured data is added below (Part F/G) -- no Offer, Review,
// FAQPage, QAPage or CourseInstance markup, per the current official Google guidance reviewed for
// this step.
export const metadata: Metadata = {
  title: { absolute: "Online IELTS Preparation | Aisha's English" },
  description:
    "Online Academic and General Training IELTS preparation with structured practice and specific Writing and Speaking feedback. Ask Aisha about current availability.",
  alternates: { canonical: "/courses/ielts" },
  openGraph: {
    type: "website",
    title: "Online IELTS Preparation with Aisha",
    description:
      "Academic and General Training preparation with structured four-skill practice and specific feedback.",
    url: pageUrl,
    images: [
      {
        // A genuine 1200x630 canvas composed from the site's existing approved portrait, padded
        // on a restrained ivory background rather than cropped or stretched -- the source photo
        // is portrait-oriented (960x1280), so a true landscape crop would have cut off Aisha's
        // face or body. See docs/ielts-content-sources.md for the full rationale.
        url: "/images/social/ielts-preparation.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Aisha, the teacher behind Aisha's English",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online IELTS Preparation with Aisha",
    description:
      "Academic and General Training preparation with structured four-skill practice and specific feedback.",
    images: ["/images/social/ielts-preparation.jpg"],
  },
};

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

// The one search-facing structured type added in this step -- built from the exact same
// content/ielts.ts `breadcrumb` array the visible components/ielts/IELTSBreadcrumb.tsx renders,
// so the visible path and the structured data can never disagree.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: ieltsPage.breadcrumb.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function IELTSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <IELTSBreadcrumb />
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
      <IELTSFAQ />
      <IELTSFinalCTA />
    </>
  );
}
