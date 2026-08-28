import { courses, type Course } from "@/content/courses";

export type CourseCategoryId = "school-english" | "language-tests" | "communication-skills";

export type CourseCategory = {
  id: CourseCategoryId;
  eyebrow: string;
  title: string;
  description: string;
  courseSlugs: string[];
};

// Canonical grouping for the /courses hub (Courses Hub Step 1). This is display order for that
// one page only — it doesn't replace content/homeCourses.ts's own homepage ordering, or
// content/courses.ts's own declaration order, which other pages still read directly.
export const courseCategories: readonly CourseCategory[] = [
  {
    id: "school-english",
    eyebrow: "School English",
    title: "English support for school examinations",
    description:
      "Board-aware support for students preparing for O Level, IGCSE, AS or A Level English papers.",
    courseSlugs: ["o-a-level-english"],
  },
  {
    id: "language-tests",
    eyebrow: "Language tests",
    title: "Preparation for international English tests",
    description:
      "Choose the examination required by the university, employer, visa route or professional body receiving your score.",
    courseSlugs: ["ielts", "pte", "toefl"],
  },
  {
    id: "communication-skills",
    eyebrow: "Communication skills",
    // Spoken English Step 10: "Build stronger speaking and writing" plus "improving fluency,
    // confidence" framed these as promised personal outcomes rather than a description of the
    // support offered. Reworded to needs-led language matching the Spoken English page's own
    // positioning (docs/spoken-english-offer-verification.md).
    title: "Develop practical speaking and writing",
    description:
      "Focused support for learners working on spoken communication, language accuracy and written communication beyond a single examination.",
    courseSlugs: ["spoken-english", "english-writing"],
  },
] as const;

// Dev-time data-integrity guard: fail loudly rather than silently dropping or duplicating a
// programme on the hub. Every category slug must resolve to a real course, every course slug
// must appear in exactly one category, and every published course must be categorised.
if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();
  for (const category of courseCategories) {
    for (const slug of category.courseSlugs) {
      if (!courses.some((c) => c.slug === slug)) {
        throw new Error(
          `content/courseCategories.ts: category "${category.id}" references unknown course slug "${slug}".`
        );
      }
      if (seen.has(slug)) {
        throw new Error(
          `content/courseCategories.ts: course slug "${slug}" is assigned to more than one category.`
        );
      }
      seen.add(slug);
    }
  }
  const uncategorised = courses.filter((c) => !seen.has(c.slug)).map((c) => c.slug);
  if (uncategorised.length > 0) {
    throw new Error(
      `content/courseCategories.ts: course(s) not assigned to any hub category: ${uncategorised.join(", ")}.`
    );
  }
}

/** Resolves a category's slugs to full canonical Course objects, in the category's declared order. */
export function coursesForCategory(category: CourseCategory): Course[] {
  return category.courseSlugs.map((slug) => courses.find((c) => c.slug === slug)!);
}
