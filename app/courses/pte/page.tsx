import type { Metadata } from "next";
import ProgrammePageViewTracker from "@/components/analytics/ProgrammePageViewTracker";
import PTEBreadcrumb from "@/components/pte/PTEBreadcrumb";
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
import { ptePage } from "@/content/pte";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/pte`;

// PTE Step 10: an absolute title (bypasses the root layout's "%s | Aisha's English" template) so
// the search-facing title stays exactly this, never accidentally lengthened. Description, social
// title/description and the social image are all deliberately distinct from the generic
// root-layout metadata other pages inherit -- see docs/pte-content-sources.md and
// docs/pte-offer-verification.md for why no score, price, recording or availability claim appears
// here. Only BreadcrumbList structured data is added below (Part F/G) -- no Offer, Review,
// FAQPage, QAPage or CourseInstance markup, per the current official Google guidance reviewed for
// this step.
export const metadata: Metadata = {
  title: { absolute: "Online PTE Academic Preparation | Aisha's English" },
  description:
    "Online PTE Academic preparation with current task guidance, four-skill practice and computer-test routines. Ask Aisha about current format, fees and availability.",
  alternates: { canonical: "/courses/pte" },
  openGraph: {
    type: "website",
    title: "Online PTE Academic Preparation with Aisha",
    description:
      "Current task guidance, four-skill preparation and computer-based practice for a confirmed PTE Academic requirement.",
    url: pageUrl,
    images: [
      {
        // A genuine 1200x630 canvas composed from the site's existing approved portrait (the same
        // og-image.jpg source used for the IELTS social asset), padded on a restrained ivory
        // background rather than cropped or stretched -- the source photo is portrait-oriented
        // (960x1280), so a true landscape crop would have cut off Aisha's face or body. See
        // docs/pte-content-sources.md for the full rationale.
        url: "/images/social/pte-academic-preparation.jpg",
        width: 1200,
        height: 630,
        alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online PTE Academic Preparation with Aisha",
    description:
      "Current task guidance, four-skill preparation and computer-based practice for a confirmed PTE Academic requirement.",
    images: ["/images/social/pte-academic-preparation.jpg"],
  },
};

// The one search-facing structured type added in this step -- built from the exact same
// content/pte.ts `breadcrumb` array the visible components/pte/PTEBreadcrumb.tsx renders, so the
// visible path and the structured data can never disagree.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: ptePage.breadcrumb.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function PTEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* PTE Step 12: the only Client Component leaf this page adds -- fires programme_view once
          per navigation to this route, through the same shared tracker IELTS uses. Every other
          section below stays server-rendered. */}
      <ProgrammePageViewTracker programme="pte" pagePath="/courses/pte" />
      <PTEBreadcrumb />
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
