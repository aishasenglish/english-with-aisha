import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import LeadMagnet from "@/components/LeadMagnet";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Online English courses for IELTS, PTE, TOEFL, English Writing, and Spoken English. Live on Zoom, classes recorded.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Courses designed to get you results.
          </h1>
          <p className="text-ink-soft text-lg max-w-2xl mx-auto">
            Every course runs as live online classes on Zoom, fully recorded, with regular tests and
            mock exams. Choose the path that fits your goal.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-5">
            {courses.map((course, i) => (
              <FadeUp key={course.slug} delay={i * 80}>
                <ServiceCard course={course} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
      <CTASection />
    </>
  );
}
