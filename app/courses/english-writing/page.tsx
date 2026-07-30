import type { Metadata } from "next";
import CourseHero from "@/components/CourseHero";
import CourseModules from "@/components/CourseModules";
import IncludedList from "@/components/IncludedList";
import PricingCard from "@/components/PricingCard";
import BatchTable from "@/components/BatchTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { courses } from "@/content/courses";

const course = courses.find((c) => c.slug === "english-writing")!;

export const metadata: Metadata = {
  title: "English Writing Mastery Course",
  description:
    "Write clearly, correctly, and confidently in English. Live Zoom classes, writing assignments with detailed feedback from Aisha.",
};

export default function EnglishWritingPage() {
  return (
    <>
      <CourseHero course={course} />
      <CourseModules course={course} />
      <IncludedList course={course} />
      <PricingCard course={course} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            Upcoming Writing batches
          </h2>
          <BatchTable />
        </div>
      </section>

      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            Common questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
