import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { courseCategories, coursesForCategory, type CourseCategoryId } from "@/content/courseCategories";

export const metadata: Metadata = {
  title: "Online English Courses and Tutoring",
  description:
    "Compare live online English support for O Level, IGCSE and A Level students, IELTS, PTE and TOEFL candidates, and learners improving speaking or writing.",
};

type GoalChoice = {
  label: string;
  title: string;
  description: string;
  action: string;
  href: `#${CourseCategoryId}`;
};

const GOAL_CHOICES: GoalChoice[] = [
  {
    label: "School English",
    title: "O Level, IGCSE, AS and A Level",
    description:
      "For students preparing for board-specific English papers and parents looking for structured academic support.",
    action: "View School English",
    href: "#school-english",
  },
  {
    label: "Language tests",
    title: "IELTS, PTE and TOEFL",
    description: "For study, migration or professional test requirements where a defined score is needed.",
    action: "Compare Test Preparation",
    href: "#language-tests",
  },
  {
    label: "Communication skills",
    title: "Spoken English and Writing",
    description:
      "For learners who want clearer speaking, stronger writing or more confidence in academic and professional situations.",
    action: "Explore Communication Skills",
    href: "#communication-skills",
  },
];

// Layout per category — the single School English programme gets a constrained "featured"
// width instead of stretching one card across a full grid; the two test-prep/communication
// groups use a real grid whose column count matches how many cards they actually hold.
const CATEGORY_GRID_CLASSES: Record<CourseCategoryId, string> = {
  "school-english": "grid grid-cols-1 max-w-md mx-auto",
  "language-tests": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6",
  "communication-skills": "grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6",
};

const CTA_WHATSAPP_MESSAGE =
  "Hi Aisha! I am comparing your English programmes. My goal is [goal or exam], my current situation is [details], and I hope to begin by [date]. Which programme would you recommend?";

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white text-ink pt-28 pb-14 lg:pt-36 lg:pb-16 px-4 border-b border-line">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
            Live online English programmes
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4 leading-[1.1]">
            Choose the English support that matches your goal.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mb-3">
            Explore school-English tuition, international test preparation, and focused speaking
            or writing support. Each programme page explains who it is for, what it covers and
            how to ask about the current format.
          </p>
          <p className="text-ink-faint text-sm">Not sure where to begin? Start with your goal below.</p>
        </div>
      </section>

      {/* Goal-based category navigator */}
      <section className="py-12 sm:py-14 px-4 bg-ivory" aria-label="Choose your goal">
        {/* Single column through tablet (spec: "a single column is acceptable in portrait" —
            three equal columns are reserved for desktop width, not forced at 768px). */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {GOAL_CHOICES.map((choice) => (
            <article key={choice.href} className="flex flex-col h-full bg-white border border-stone rounded-md p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">{choice.label}</p>
              <p className="font-serif text-lg font-medium text-ink mb-2">{choice.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed mb-5">{choice.description}</p>
              <Link
                href={choice.href}
                className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide text-center px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {choice.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Grouped programmes */}
      {courseCategories.map((category, i) => {
        const categoryCourses = coursesForCategory(category);
        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className={`py-14 sm:py-16 px-4 ${i % 2 === 0 ? "bg-white" : "bg-ivory"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mb-8 sm:mb-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">{category.eyebrow}</p>
                <h2 id={`${category.id}-heading`} className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
                  {category.title}
                </h2>
                <p className="text-ink-soft leading-relaxed">{category.description}</p>
              </div>

              <div className={CATEGORY_GRID_CLASSES[category.id]}>
                {categoryCourses.map((course) => (
                  <ServiceCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* What varies by programme */}
      <section className="py-12 sm:py-14 px-4 bg-white border-y border-line">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-ink mb-3">
            Details are confirmed for the programme you choose.
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Class format, schedule, fees, practice requirements and available support can differ
            by programme and intake. Review the relevant course page or ask Aisha for the current
            details before enrolling.
          </p>
        </div>
      </section>

      {/* One closing recommendation CTA */}
      <CTASection
        eyebrow="Need help choosing?"
        title="Tell Aisha what you are preparing for."
        subtitle="Share the learner's goal, current situation and preferred timeline to receive a suitable programme recommendation."
        primaryLabel="Request a Free Course Recommendation"
        primaryHref="/free-diagnostic-test"
        secondaryLabel="Ask Aisha on WhatsApp"
        whatsappMessage={CTA_WHATSAPP_MESSAGE}
      />
    </>
  );
}
