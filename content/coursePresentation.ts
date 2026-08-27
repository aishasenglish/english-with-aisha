import { courses, type Course } from "@/content/courses";

/** A course's canonical slug — kept as its own alias for clarity at call sites, not a new type. */
export type CourseSlug = Course["slug"];

export type CoursePresentation = {
  slug: CourseSlug;
  /** Short category label shown on a card (e.g. "English test preparation") — distinct from the
   *  Courses-hub category grouping in content/courseCategories.ts, which groups several
   *  programmes under one broader label ("Language tests"). */
  typeLabel: string;
  shortDescription: string;
  bestFor: string;
  focus: string;
  ctaLabel: string;
  /** Overrides the generic "I'm interested in the [name] programme…" WhatsApp message when bespoke wording reads better. */
  whatsappMessage?: string;
};

// Shared card copy for both the homepage (components/CourseExplorer.tsx) and the Courses hub
// (components/ServiceCard.tsx) — one source, keyed by slug, so the two pages can't drift apart.
// Canonical programme name, route and long-form content stay in content/courses.ts; homepage-only
// display order and delivery-line overrides stay in content/homeCourses.ts.
export const coursePresentations: CoursePresentation[] = [
  {
    slug: "o-a-level-english",
    typeLabel: "School English",
    shortDescription:
      "Build stronger exam technique, written analysis and syllabus confidence for Cambridge and Edexcel English.",
    bestFor: "O Level, IGCSE, AS and A Level students and their parents",
    focus: "Marked written work and past-paper practice",
    ctaLabel: "View School English Programme",
    whatsappMessage:
      "Hi Aisha! I'm interested in O/A Level or IGCSE English coaching. The student's level and examination board are:",
  },
  {
    slug: "ielts",
    typeLabel: "English test preparation",
    shortDescription:
      "Prepare for Academic or General Training IELTS through strategy lessons, timed practice and feedback on writing and speaking.",
    bestFor: "Study, migration and professional English requirements",
    focus: "Support for learners working towards their required IELTS band",
    ctaLabel: "View IELTS Programme",
  },
  {
    // PTE Step 10: aligned with the verified /courses/pte content (Steps 1-9) after an audit
    // found the previous copy still overstated things -- "task strategy" read like the same
    // algorithm-shortcut marketing the page's own evidence-led positioning explicitly rejects
    // (see content/pte.ts's curriculum.integrityHeading), and "requires PTE Academic" implied a
    // universal acceptance claim rather than one confirmed per receiving organisation.
    slug: "pte",
    typeLabel: "English test preparation",
    shortDescription:
      "Prepare for current PTE Academic task demands through four-skill development and timed computer-based practice.",
    bestFor: "Candidates whose receiving organisation has confirmed PTE Academic and supplied the required score.",
    focus: "Current task demands and timed computer-based practice",
    ctaLabel: "View PTE Programme",
  },
  {
    // TOEFL Step 1: aligned with the rebuilt /courses/toefl content -- the previous copy
    // ("integrated-task practice") described the pre-21-January-2026 TOEFL structure and no
    // longer matches the current test.
    slug: "toefl",
    typeLabel: "English test preparation",
    shortDescription:
      "Prepare for the current TOEFL iBT through Reading, Listening, Writing and Speaking development aligned with your confirmed requirement.",
    bestFor: "Applicants whose institution or programme has confirmed TOEFL iBT and supplied the required score.",
    focus: "Current four-skill TOEFL iBT preparation",
    ctaLabel: "View TOEFL Programme",
  },
  {
    // Spoken English Step 1: "Guided speaking practice with personal feedback" stated personal
    // feedback as an included inclusion, and "Interviews, work, presentations and everyday
    // communication" implied every learner needs the same thing rather than a specific real-world
    // situation. Aligned with the rebuilt /courses/spoken-english content -- see
    // docs/spoken-english-offer-verification.md.
    slug: "spoken-english",
    typeLabel: "Fluency and communication",
    shortDescription:
      "Develop clearer spoken English for work, interviews, presentations, study and everyday interactions.",
    bestFor: "Learners with specific real-world speaking situations",
    focus: "Pronunciation, response-building and interaction priorities",
    ctaLabel: "View Spoken English Programme",
    whatsappMessage:
      "Hi Aisha! I am interested in Spoken English coaching. The situations where I need to speak more clearly are:",
  },
  {
    slug: "english-writing",
    typeLabel: "Writing and communication",
    shortDescription:
      "Improve grammar, sentence control and structure for clearer academic, professional and everyday writing.",
    bestFor: "Students and professionals who want clearer written English",
    focus: "Regular writing practice with actionable feedback",
    ctaLabel: "View Writing Programme",
    whatsappMessage:
      "Hi Aisha! I'm interested in English Writing Mastery. The type of writing I want to improve is:",
  },
];

/** Looks up a course's shared presentation copy. Throws immediately if a slug has none — a
 *  missing entry should fail loudly during development, not silently render a blank card. */
export function getCoursePresentation(slug: CourseSlug): CoursePresentation {
  const presentation = coursePresentations.find((p) => p.slug === slug);
  if (!presentation) {
    throw new Error(`content/coursePresentation.ts: no presentation metadata for course slug "${slug}".`);
  }
  return presentation;
}

if (process.env.NODE_ENV !== "production") {
  for (const presentation of coursePresentations) {
    if (!courses.some((c) => c.slug === presentation.slug)) {
      throw new Error(
        `content/coursePresentation.ts: presentation entry references unknown course slug "${presentation.slug}".`
      );
    }
  }
}
