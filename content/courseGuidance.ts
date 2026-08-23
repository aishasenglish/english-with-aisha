import type { CourseSlug } from "@/content/coursePresentation";

/**
 * "Still comparing?" decision rows (components/CourseChoiceGuide.tsx) and the professional/
 * corporate enquiry panel (components/CorporateEnquiryPanel.tsx) for the Courses hub. Canonical
 * programme names and routes still come from content/courses.ts — a situation only stores the
 * slug or anchor it should resolve to, never a hard-coded course path.
 */
export type CourseChoiceSituation = {
  id: string;
  prompt: string;
  guidance: string;
  action: string;
} & (
  | { kind: "course"; courseSlug: CourseSlug }
  | { kind: "anchor"; anchor: `#${string}` }
  | { kind: "whatsapp"; whatsappMessage: string }
);

export const courseChoiceSituations: readonly CourseChoiceSituation[] = [
  {
    id: "school-exam",
    kind: "course",
    courseSlug: "o-a-level-english",
    prompt: "The learner is preparing for O Level, IGCSE, AS or A Level English.",
    guidance:
      "Start with School English and include the board, syllabus or paper code and exam session when enquiring.",
    action: "View School English",
  },
  {
    id: "named-test",
    kind: "anchor",
    anchor: "#language-tests",
    prompt: "A university, employer, visa route or professional body has named IELTS, PTE or TOEFL.",
    guidance: "Choose the programme for that exact test and include the required score and deadline.",
    action: "Compare Test Programmes",
  },
  {
    id: "multi-test",
    kind: "whatsapp",
    whatsappMessage:
      "Hi Aisha! I have confirmed that [organisation] accepts [tests] and requires [score] by [date]. My current level or previous score is [details]. Which preparation route would you recommend?",
    prompt: "The receiving organisation appears to accept more than one English test.",
    guidance:
      "Confirm the current accepted tests, score requirements and deadlines directly with that organisation before paying for preparation.",
    action: "Ask Aisha After Confirming Requirements",
  },
  {
    id: "speaking",
    kind: "course",
    courseSlug: "spoken-english",
    prompt: "The learner understands English but needs clearer, more confident speaking.",
    guidance: "Start with Spoken English for interviews, presentations, work or everyday communication.",
    action: "View Spoken English",
  },
  {
    id: "writing",
    kind: "course",
    courseSlug: "english-writing",
    prompt: "The learner needs stronger grammar, structure and clarity in written English.",
    guidance: "Start with English Writing for academic, professional or everyday written communication.",
    action: "View English Writing",
  },
] as const;

// Single shared source for professional/corporate enquiry copy — reused by both the homepage
// (components/CourseExplorer.tsx's compact panel) and the Courses hub
// (components/CorporateEnquiryPanel.tsx's fuller treatment), so the two pages can't drift into
// different promises about what's available.
export const corporateEnquiry = {
  eyebrow: "For professionals, employers and teams",
  heading: "Need English support for workplace communication?",
  body: "Share the learner roles, number of participants and communication challenges. Aisha can review the requirement and confirm whether a suitable live online training format is available.",
  goalsLabel: "Possible enquiry goals",
  goals: [
    "Clearer professional emails and reports",
    "Presentations and meetings",
    "Interviews and workplace speaking",
    "Client or team communication",
  ],
  ctaLabel: "Discuss Professional English Training",
  whatsappMessage:
    "Hi Aisha! I am enquiring about professional or corporate English training. The learners or roles are [details], the number of participants is [number], our main communication goals are [goals], and our country or time zone is [location].",
  secondaryCtaLabel: "Send a Detailed Enquiry",
  secondaryHref: "/contact",
} as const;
