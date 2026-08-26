export type IeltsFaq = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /**
   * Optional "jump to" links appended after the answer — e.g. the current-offer answer below
   * points to the verified Step 5-7 sections it references instead of duplicating their changing
   * details in the FAQ text itself. Never raw HTML inside `answer`.
   */
  links?: { label: string; href: string }[];
};

/**
 * IELTS Step 8: a dedicated, IELTS-specific FAQ source — deliberately independent of
 * content/faqs.ts's `generalFaqs`. Programme-specific answers need an explicit source rather
 * than inheriting unrelated or unsafe global entries automatically (see that file's
 * `live-or-recorded`, `mock-exams`, `platform` etc., several of which asserted unconfirmed
 * operational claims that would have contradicted this page — corrected there separately as
 * part of this same step; see docs/ielts-offer-verification.md).
 *
 * Kept to exactly eight questions — the highest-conversion IELTS objections, not the complete
 * generic FAQ set. See docs/ielts-content-sources.md for the official sources behind the
 * Academic/General Training claim in the first answer.
 */
export const ieltsFaqs: IeltsFaq[] = [
  {
    id: "academic-general-training",
    question: "Do you prepare candidates for both Academic and General Training IELTS?",
    answer:
      "Yes. Preparation can be matched to Academic or General Training after you confirm which version the organisation receiving your result requires. Listening and Speaking are shared across the two versions, while Reading and Writing differ.",
  },
  {
    id: "required-score",
    question: "How do I know which IELTS score I need?",
    answer:
      "Confirm the exact requirement with the university, employer, visa route or professional body receiving your result. Some organisations specify both an overall band and minimum scores in individual skills. Share that complete requirement with Aisha when discussing preparation.",
  },
  {
    id: "information-to-share",
    question: "What should I share before starting IELTS preparation?",
    answer:
      "Share your test version, required overall and component scores, previous section scores if you have them, test or application deadline, country or time zone, and usual availability. First-time candidates can describe their current English and test experience instead of supplying a previous score.",
  },
  {
    id: "feedback",
    question: "How does feedback work for the four IELTS skills?",
    answer:
      "Writing and Speaking feedback identifies strengths, important limitations and a manageable next priority connected to the relevant assessment criteria. Listening and Reading review focuses on why answers were missed and which error patterns to address. The amount and delivery method of feedback are confirmed with the current coaching option.",
  },
  {
    id: "preparation-time",
    question: "How long will I need to prepare?",
    answer:
      "There is no responsible universal timeline. Preparation time depends on your current performance, required overall and component scores, available study time, deadline and how consistently you apply feedback. Share those details so Aisha can give an honest view of the suitable next step.",
  },
  {
    id: "score-guarantee",
    question: "Do you guarantee an IELTS band score?",
    answer:
      "No. Aisha provides structured teaching, practice and feedback, but no teacher can guarantee an official result. Progress also depends on the candidate's starting point, preparation time and consistent participation.",
  },
  {
    id: "current-offer",
    question: "What class format, fee and support are currently available?",
    answer:
      "Review the current learning-format, fee and availability sections on this page, then ask Aisha to confirm the complete option before payment. Confirm the platform, group or one-to-one availability, schedule and time zone, duration, recordings, feedback frequency, mock-test inclusions, fee and relevant policies.",
    links: [
      { label: "Learning format", href: "#ielts-learning-format" },
      { label: "Fee", href: "#ielts-pricing" },
      { label: "Availability", href: "#ielts-availability" },
    ],
  },
  {
    id: "international-candidates",
    question: "Can I enquire from outside Pakistan?",
    answer:
      "Yes. IELTS coaching is online, but suitability still depends on the current schedule and available format. Include your country and time zone when enquiring so Aisha can confirm whether the timing works and share any relevant payment information.",
  },
];
