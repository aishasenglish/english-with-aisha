import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import LeadMagnet from "@/components/LeadMagnet";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Online English courses for IELTS, PTE, TOEFL, English Writing, and Spoken English. Live on Zoom, classes recorded, new batch every 15 days.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-ink text-white pt-28 pb-16 lg:pt-36 lg:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Courses designed to get you results.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every course runs as live online classes on Zoom, fully recorded, with regular tests and
            mock exams. Choose the path that fits your goal.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
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
