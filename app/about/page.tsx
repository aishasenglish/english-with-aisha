import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCredentials from "@/components/about/AboutCredentials";
import AboutIntroduction from "@/components/about/AboutIntroduction";
import AboutExpertiseRoutes from "@/components/about/AboutExpertiseRoutes";
import AboutTeachingApproach from "@/components/about/AboutTeachingApproach";
import AboutFitBoundary from "@/components/about/AboutFitBoundary";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

// About Step 1: replaces the previous short generic biography (no unsupported "for years",
// "every kind of background", universal Zoom/recording/feedback claims, or unguaranteed
// "confidence over fear"/"speak without hesitation" outcome framing -- see
// docs/about-credentials-verification.md for the verification status behind every claim below).
// Kept as safe, functional Step 1 metadata only -- structured data, social-image work and full
// technical SEO are reserved for a later About-page step. About Step 2 (credential hierarchy)
// changed no metadata field -- title/description already read only the two owner-confirmed facts.
export const metadata: Metadata = {
  title: "About Aisha",
  description:
    "Meet Aisha, an online English teacher and College Lecturer with an MPhil in English Literature, and explore support for English tests, spoken communication and writing.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* About Step 2: AboutAuthorityStrip's flat fact-pill row was replaced by
          AboutCredentials's categorised academic/role hierarchy in the same position. */}
      <AboutCredentials />
      <AboutIntroduction />
      <AboutExpertiseRoutes />
      {/* About Step 3: AboutTeachingPrinciples's temporary three-item preview was replaced by
          AboutTeachingApproach's concrete five-part method, in the same position. */}
      <AboutTeachingApproach />
      <AboutFitBoundary />
      <AboutFinalCTA />
    </>
  );
}
