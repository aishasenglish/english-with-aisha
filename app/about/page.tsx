import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutExperience from "@/components/about/AboutExperience";
import AboutStory from "@/components/about/AboutStory";
import AboutLearningExperience from "@/components/about/AboutLearningExperience";
import AboutDevelopment from "@/components/about/AboutDevelopment";
import AboutGallery from "@/components/about/AboutGallery";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

const title = "About Aisha | IELTS & English Teacher";
const description =
  "Meet Aisha, an MPhil-qualified English lecturer and IELTS coach with more than 12 years of experience helping learners prepare with clarity and confidence.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [{ url: "/images/aisha-about-main.jpg", width: 1086, height: 1448, alt: "Professional portrait of Aisha" }],
  },
  twitter: { title, description, images: ["/images/aisha-about-main.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutExperience />
      <AboutStory />
      <AboutLearningExperience />
      <AboutDevelopment />
      <AboutGallery />
      <AboutTestimonial />
      <AboutFinalCTA />
    </>
  );
}
