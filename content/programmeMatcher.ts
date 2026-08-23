export type GoalValue =
  | "school-english"
  | "ielts"
  | "pte"
  | "toefl"
  | "spoken-english"
  | "english-writing"
  | "corporate-english";

export type PreferenceValue = "batch" | "private" | "unsure";

export type GoalOption = { value: GoalValue; label: string };
export type PreferenceOption = { value: PreferenceValue; label: string };

export const GOAL_OPTIONS: GoalOption[] = [
  { value: "school-english", label: "O/A Level or IGCSE English" },
  { value: "ielts", label: "IELTS preparation" },
  { value: "pte", label: "PTE Academic preparation" },
  { value: "toefl", label: "TOEFL iBT preparation" },
  { value: "spoken-english", label: "Speaking English confidently" },
  { value: "english-writing", label: "Improving my English writing" },
  { value: "corporate-english", label: "Professional or corporate English" },
];

export const PREFERENCE_OPTIONS: PreferenceOption[] = [
  { value: "batch", label: "Live online small group" },
  { value: "private", label: "One-to-one coaching" },
  { value: "unsure", label: "I'm not sure yet" },
];

export type Recommendation = {
  /** Present when a real course page exists — its own name from content/courses.ts is used as the title. */
  courseSlug?: string;
  /** Only set for goals with no dedicated course page (corporate). */
  corporateTitle?: string;
  reason: string;
};

export const RECOMMENDATIONS: Record<GoalValue, Recommendation> = {
  "school-english": {
    courseSlug: "o-a-level-english",
    reason:
      "The specialist pathway for Cambridge and Edexcel students who need syllabus-focused teaching, marked writing and past-paper practice.",
  },
  ielts: {
    courseSlug: "ielts",
    reason:
      "Preparation for Academic or General Training IELTS with strategy lessons, practice and feedback on writing and speaking.",
  },
  pte: {
    courseSlug: "pte",
    reason:
      "Focused preparation for the computer-based PTE Academic test, including task strategy, timing and speaking practice.",
  },
  toefl: {
    courseSlug: "toefl",
    reason:
      "Preparation for learners who need TOEFL iBT for university or another formal English-language requirement.",
  },
  "spoken-english": {
    courseSlug: "spoken-english",
    reason:
      "The most relevant option for interviews, professional conversations, pronunciation and everyday speaking confidence.",
  },
  "english-writing": {
    courseSlug: "english-writing",
    reason:
      "The focused writing pathway for clearer grammar, sentences, essays, emails and professional communication.",
  },
  "corporate-english": {
    corporateTitle: "Professional & Corporate English Enquiry",
    reason:
      "Corporate requirements vary by role, team size and communication goals. Aisha should recommend a suitable individual or team format directly.",
  },
};
