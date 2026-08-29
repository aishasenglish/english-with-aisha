import type { Metadata } from "next";
import EnglishWritingBreadcrumb from "@/components/english-writing/EnglishWritingBreadcrumb";
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
import EnglishWritingFAQ from "@/components/english-writing/EnglishWritingFAQ";
import EnglishWritingFinalCTA from "@/components/english-writing/EnglishWritingFinalCTA";
import { site } from "@/content/site";
import { englishWritingContent } from "@/content/englishWriting";

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

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/english-writing`;

// Step 10: an absolute title (bypasses the root layout's "%s | Aisha's English" template) so the
// search-facing title stays exactly this, never accidentally lengthened. Description, social
// title/description and the social image are all deliberately distinct from the generic
// root-layout metadata other pages inherit -- see docs/english-writing-content-sources.md and
// docs/english-writing-offer-verification.md for why no format, fee, availability or
// guaranteed-outcome claim appears here. Only BreadcrumbList structured data is added below
// (Part E/F) -- no Offer, Review, FAQPage, QAPage or CourseInstance markup, per the current
// official Google guidance reviewed for this step (FAQ rich results stopped appearing 7 May 2026
// and their documentation was removed in June 2026; QAPage requires a user-submitted-answer model
// this page doesn't have; course-list structured data requires an ItemList/carousel summary page
// this repository doesn't yet implement, so isolated Course markup here would be non-compliant).
export const metadata: Metadata = {
  title: { absolute: "Online English Writing Coaching | Aisha's English" },
  description:
    "Online English writing coaching for learners working on sentence clarity, organisation, tone and revision for study, work or everyday communication.",
  alternates: { canonical: "/courses/english-writing" },
  openGraph: {
    type: "website",
    title: "Online English Writing Coaching",
    description:
      "Explore needs-led English writing support for clearer sentences, stronger organisation and purposeful writing for study, work or everyday communication.",
    url: pageUrl,
    images: [
      {
        // A genuine 1200x630 canvas composed from the site's existing approved portrait (the same
        // og-image.jpg source used for the IELTS/PTE/TOEFL/Spoken English social assets), padded
        // on a restrained ivory background rather than cropped or stretched -- the source photo is
        // portrait-oriented (960x1280), so a true landscape crop would have cut off Aisha's face
        // or body. See docs/english-writing-content-sources.md for the full rationale.
        url: "/images/social/english-writing-coaching.jpg",
        width: 1200,
        height: 630,
        alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online English Writing Coaching",
    description:
      "Explore needs-led English writing support for clearer sentences, stronger organisation and purposeful writing for study, work or everyday communication.",
    images: ["/images/social/english-writing-coaching.jpg"],
  },
};

// The one search-facing structured type added in this step -- built from the exact same
// content/englishWriting.ts `breadcrumb` array the visible
// components/english-writing/EnglishWritingBreadcrumb.tsx renders, so the visible path and the
// structured data can never disagree.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: englishWritingContent.breadcrumb.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function EnglishWritingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EnglishWritingBreadcrumb />
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
      <EnglishWritingFAQ />
      <EnglishWritingFinalCTA />
    </>
  );
}
