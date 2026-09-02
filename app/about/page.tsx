import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCredentials from "@/components/about/AboutCredentials";
import AboutProfessionalStory from "@/components/about/AboutProfessionalStory";
import AboutTeachingApproach from "@/components/about/AboutTeachingApproach";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

const title = "About Aisha | Aisha’s English";
const description =
  "Meet Aisha, an online English teacher and College Lecturer with an MPhil in English Literature, focused on clear IELTS guidance, purposeful practice and useful feedback.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCredentials />
      <AboutProfessionalStory />
      <AboutTeachingApproach />
      <AboutFinalCTA />
    </>
  );
}
