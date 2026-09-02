import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeIELTSBenefits from "@/components/HomeIELTSBenefits";
import CourseExplorer from "@/components/CourseExplorer";
import LearningFormats from "@/components/LearningFormats";
import HomeGettingStarted from "@/components/HomeGettingStarted";
import HomeFAQ from "@/components/HomeFAQ";
import HomeFinalCTA from "@/components/HomeFinalCTA";

const title = "Online IELTS Coaching | Aisha’s English";
const description =
  "Live online IELTS coaching for Academic and General Training candidates, with focused practice, personal feedback and support across all four skills.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIELTSBenefits />
      <CourseExplorer />
      <LearningFormats />
      <HomeGettingStarted />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}
