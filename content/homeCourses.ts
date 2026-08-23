/**
 * Homepage-only course presentation metadata. Canonical course data (name, route, price,
 * full description) stays in content/courses.ts — this file only adds what the homepage
 * cards need on top of that, keyed by the same `slug`, in the order the homepage should
 * display them.
 */
export type HomeCourseMeta = {
  slug: string;
  category: string;
  /** Short outcome-focused card description — distinct from the longer content/courses.ts summary. */
  description: string;
  bestFor: string;
  feature: string;
  ctaLabel: string;
  /**
   * Shared delivery line unless a course's actual offering differs (see content/courses.ts
   * `includes`) — only claim "Group or one-to-one" where an individual option is actually listed.
   */
  delivery?: string;
  /** Overrides the generic "I'm interested in the [name] programme…" WhatsApp message when bespoke wording reads better. */
  whatsappMessageOverride?: string;
};

export const DEFAULT_DELIVERY_LINE = "Live online · Group or one-to-one · Recordings included";

export const HOME_COURSES: HomeCourseMeta[] = [
  {
    slug: "o-a-level-english",
    category: "School English",
    description:
      "Build stronger exam technique, written analysis and syllabus confidence for Cambridge and Edexcel English.",
    bestFor: "O Level, IGCSE, AS and A Level students and their parents",
    feature: "Marked written work and past-paper practice",
    ctaLabel: "View School English Programme",
    // Course data lists small-group batches only (max 8 students) with no individual option — so
    // the shared "Group or one-to-one" line would overstate the current offering for this course.
    delivery: "Live online · Small-group classes · Recordings included",
    whatsappMessageOverride:
      "Hi Aisha! I'm interested in O/A Level or IGCSE English coaching. The student's level and examination board are:",
  },
  {
    slug: "ielts",
    category: "English test preparation",
    description:
      "Prepare for Academic or General Training IELTS through strategy lessons, timed practice and feedback on writing and speaking.",
    bestFor: "Study, migration and professional English requirements",
    feature: "Designed for learners working towards Band 7+ goals",
    ctaLabel: "View IELTS Programme",
  },
  {
    slug: "spoken-english",
    category: "Fluency and communication",
    description:
      "Develop clearer pronunciation, faster responses and greater confidence in real conversations.",
    bestFor: "Interviews, work, presentations and everyday communication",
    feature: "Guided speaking practice with personal feedback",
    ctaLabel: "View Spoken English Programme",
    whatsappMessageOverride:
      "Hi Aisha! I'm interested in Spoken English & Fluency coaching. My main speaking goal is:",
  },
  {
    slug: "pte",
    category: "English test preparation",
    description:
      "Learn the task types, timing and speaking strategies required for the computer-based PTE Academic test.",
    bestFor: "University, migration and professional test requirements",
    feature: "Computer-based strategy and timed practice",
    ctaLabel: "View PTE Programme",
  },
  {
    slug: "toefl",
    category: "English test preparation",
    description:
      "Prepare for integrated academic reading, listening, speaking and writing tasks with a structured test strategy.",
    bestFor: "University applicants and learners with a TOEFL requirement",
    feature: "Academic skills and integrated-task practice",
    ctaLabel: "View TOEFL Programme",
  },
  {
    slug: "english-writing",
    category: "Writing and professional communication",
    description:
      "Improve grammar, sentence control and structure for clearer academic, professional and everyday writing.",
    bestFor: "Students and professionals who want clearer written English",
    feature: "Regular marked writing with actionable feedback",
    ctaLabel: "View Writing Programme",
    whatsappMessageOverride:
      "Hi Aisha! I'm interested in English Writing Mastery. The type of writing I want to improve is:",
  },
];

export const corporatePanel = {
  eyebrow: "Need training for a workplace or team?",
  heading: "Ask about professional and corporate English training.",
  body: "Share the roles, team size and communication goals. Aisha can recommend an individual or group format for meetings, presentations, interviews, reports or client communication.",
  ctaLabel: "Discuss Corporate Training",
  whatsappMessage:
    "Hi Aisha! I'm interested in professional or corporate English training. The role or team, number of learners and main communication goals are:",
};
