import type { Metadata } from "next";
import CourseHero from "@/components/CourseHero";
import CourseModules from "@/components/CourseModules";
import IncludedList from "@/components/IncludedList";
import PricingCard from "@/components/PricingCard";
import BatchTable from "@/components/BatchTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { courses } from "@/content/courses";

const course = courses.find((c) => c.slug === "spoken-english")!;

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Spoken English & Fluency Course",
  description:
    "Speak English without hesitation. Build fluency and confidence for interviews, work, and daily life with expert coaching from Aisha.",
};

export default function SpokenEnglishPage() {
  return (
    <>
      <CourseHero course={course} />
      <CourseModules course={course} />
      <IncludedList course={course} />
      <PricingCard course={course} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            Upcoming Spoken English batches
          </h2>
          <BatchTable courseSlug="spoken-english" />
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
