import type { Metadata } from "next";
import SpokenEnglishBreadcrumb from "@/components/spoken-english/SpokenEnglishBreadcrumb";
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
import SpokenEnglishFAQ from "@/components/spoken-english/SpokenEnglishFAQ";
import SpokenEnglishFinalCTA from "@/components/spoken-english/SpokenEnglishFinalCTA";
import { site } from "@/content/site";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing stale content if that ever changes.
export const revalidate = 3600;

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/spoken-english`;

// Step 10: an absolute title (bypasses the root layout's "%s | AISHAS ENGLISH" template) so the
// search-facing title stays exactly this, never accidentally lengthened. Description, social
// title/description and the social image are all deliberately distinct from the generic
// root-layout metadata other pages inherit -- see docs/spoken-english-content-sources.md and
// docs/spoken-english-offer-verification.md for why no format, fee, availability, native-accent or
// guaranteed-outcome claim appears here. Only BreadcrumbList structured data is added below
// (Part E/F) -- no Offer, Review, FAQPage, QAPage or CourseInstance markup, per the current
// official Google guidance reviewed for this step (FAQ rich results stopped appearing 7 May 2026
// and their documentation was removed in June 2026).
export const metadata: Metadata = {
  title: { absolute: `Online Spoken English Coaching | ${site.brandName}` },
  description:
    "Online Spoken English coaching focused on pronunciation, response building and practical communication for work, interviews, presentations, study and everyday situations.",
  alternates: { canonical: "/courses/spoken-english" },
  openGraph: {
    type: "website",
    title: "Online Spoken English Coaching with Aisha",
    description:
      "Focused on pronunciation, response building and practical communication for work, interviews, presentations, study and everyday situations.",
    url: pageUrl,
    images: [
      {
        // A genuine 1200x630 canvas composed from the site's existing approved portrait (the same
        // og-image.jpg source used for the IELTS/PTE/TOEFL social assets), padded on a restrained
        // ivory background rather than cropped or stretched -- the source photo is portrait-
        // oriented (960x1280), so a true landscape crop would have cut off Aisha's face or body.
        // See docs/spoken-english-content-sources.md for the full rationale.
        url: "/images/social/spoken-english-coaching.jpg",
        width: 1200,
        height: 630,
        alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Spoken English Coaching with Aisha",
    description:
      "Focused on pronunciation, response building and practical communication for work, interviews, presentations, study and everyday situations.",
    images: ["/images/social/spoken-english-coaching.jpg"],
  },
};

// The one search-facing structured type added in this step -- built from the exact same
// content/spokenEnglish.ts `breadcrumb` array the visible
// components/spoken-english/SpokenEnglishBreadcrumb.tsx renders, so the visible path and the
// structured data can never disagree.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: spokenEnglishPage.breadcrumb.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function SpokenEnglishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SpokenEnglishBreadcrumb />
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
      <SpokenEnglishFAQ />
      <SpokenEnglishFinalCTA />
    </>
  );
}
