import type { CourseSlug } from "@/content/coursePresentation";

/**
 * Homepage-only concerns for components/CourseExplorer.tsx: the display order for its card
 * grid (independent of content/courses.ts's own declaration order and of
 * content/courseCategories.ts's Courses-hub grouping) and the one field genuinely specific to
 * that section — its delivery-format line. Shared card copy (description, best-for, focus, CTA
 * label, WhatsApp message) lives once in content/coursePresentation.ts and is reused here rather
 * than duplicated.
 */
export const HOME_COURSE_ORDER: CourseSlug[] = [
  "o-a-level-english",
  "ielts",
  "spoken-english",
  "pte",
  "toefl",
  "english-writing",
];

export const DEFAULT_DELIVERY_LINE = "Live online · Group or one-to-one · Recordings included";

/** Only set where the shared default line would overstate what a course's canonical
 *  content/courses.ts `includes` list actually offers. */
export const HOME_COURSE_DELIVERY: Partial<Record<CourseSlug, string>> = {
  // Course data lists small-group batches only (max 8 students) with no individual option, so
  // the shared "Group or one-to-one" line would overstate the current offering for this course.
  "o-a-level-english": "Live online · Small-group classes · Recordings included",
};

export const corporatePanel = {
  eyebrow: "Need training for a workplace or team?",
  heading: "Ask about professional and corporate English training.",
  body: "Share the roles, team size and communication goals. Aisha can recommend an individual or group format for meetings, presentations, interviews, reports or client communication.",
  ctaLabel: "Discuss Corporate Training",
  whatsappMessage:
    "Hi Aisha! I'm interested in professional or corporate English training. The role or team, number of learners and main communication goals are:",
};
