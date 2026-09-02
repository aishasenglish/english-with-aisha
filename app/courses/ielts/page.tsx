import type { Metadata } from "next";
import ProgrammePageViewTracker from "@/components/analytics/ProgrammePageViewTracker";
import IELTSBreadcrumb from "@/components/ielts/IELTSBreadcrumb";
import IELTSHero from "@/components/ielts/IELTSHero";
import IELTSAuthorityStrip from "@/components/ielts/IELTSAuthorityStrip";
import IELTSFit from "@/components/ielts/IELTSFit";
import IELTSSkillsCurriculum from "@/components/ielts/IELTSSkillsCurriculum";
import IELTSFeedbackDemo from "@/components/ielts/IELTSFeedbackDemo";
import IELTSCoachingProcess from "@/components/ielts/IELTSCoachingProcess";
import IELTSTeacherProof from "@/components/ielts/IELTSTeacherProof";
import IELTSOptions from "@/components/ielts/IELTSOptions";
import IELTSFAQ from "@/components/ielts/IELTSFAQ";
import IELTSFinalCTA from "@/components/ielts/IELTSFinalCTA";
import { site } from "@/content/site";
import { ieltsPage } from "@/content/ielts";

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/ielts`;
const title = "Online IELTS Coaching with Aisha | Academic & General Training";
const description = "Prepare for Academic or General Training IELTS through focused online lessons, timed practice and personal feedback from an experienced English lecturer.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/courses/ielts" },
  openGraph: {
    type: "website",
    title,
    description,
    url: pageUrl,
    images: [{ url: "/images/social/ielts-preparation.jpg", width: 1200, height: 630, alt: "Aisha, IELTS coach and English lecturer" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/social/ielts-preparation.jpg"] },
};

export const revalidate = 3600;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: ieltsPage.breadcrumb.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.label,
    item: "href" in crumb ? `${base}${crumb.href}` : pageUrl,
  })),
};

export default function IELTSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ProgrammePageViewTracker programme="ielts" pagePath="/courses/ielts" />
      <IELTSBreadcrumb />
      <IELTSHero />
      <IELTSAuthorityStrip />
      <IELTSFit />
      <IELTSSkillsCurriculum />
      <IELTSFeedbackDemo />
      <IELTSCoachingProcess />
      <IELTSTeacherProof />
      <IELTSOptions />
      <IELTSFAQ />
      <IELTSFinalCTA />
    </>
  );
}
