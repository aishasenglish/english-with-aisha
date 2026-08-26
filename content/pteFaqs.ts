export type PTEFaq = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /**
   * Optional "jump to" links appended after the answer — e.g. the current-offer answer below
   * points to the verified Step 5-7 sections it references instead of duplicating their changing
   * details (fee, dates, schedule) in the FAQ text itself, where they could drift out of date.
   * Never raw HTML inside `answer` — see components/pte/PTEFAQ.tsx / FAQAccordion.tsx.
   */
  links?: { label: string; href: string }[];
};

/**
 * PTE Step 8: a dedicated, PTE-specific FAQ source — deliberately independent of
 * content/faqs.ts's `generalFaqs`, following the same pattern as content/ieltsFaqs.ts (IELTS
 * Step 8). A programme-specific answer needs an explicit source rather than inheriting unrelated
 * or unsafe global entries automatically — see that file's `programmes-taught`,
 * `personal-feedback`, `fees-and-schedules` and `fees-payment` entries, several of which asserted
 * unconfirmed universal claims that would have contradicted this page and were corrected as part
 * of this same step. See docs/pte-offer-verification.md's "Global FAQ audit (PTE Step 8)" section.
 *
 * Kept to exactly eight questions — the highest-conversion PTE objections, not the complete
 * generic FAQ set. Test-format and scoring facts rechecked against the official Pearson sources
 * listed in docs/pte-content-sources.md on the date noted there.
 */
export const pteFaqs: PTEFaq[] = [
  {
    id: "exact-test",
    question: "Which PTE test should I prepare for?",
    answer:
      "Confirm the exact test with the university, visa route, employer or professional body receiving your result. PTE Academic, PTE Academic UKVI, PTE Core and PTE Home serve different purposes. This page focuses on PTE Academic preparation; ask Aisha to confirm whether coaching for your exact test is currently available before payment.",
  },
  {
    id: "required-score",
    question: "How do I know which PTE score I need?",
    answer:
      "Use the current requirement supplied by the organisation receiving your result. It may specify an overall score, minimum scores for Listening, Reading, Speaking or Writing, or both. Share the complete requirement with Aisha when discussing preparation.",
  },
  {
    id: "information-to-share",
    question: "What should I share before starting PTE preparation?",
    answer:
      "Share the exact PTE test, required overall and skill scores, previous overall and skill scores if you have them, test or application deadline, country or time zone, and usual availability. First-time candidates can describe their current English and computer-test experience instead of supplying a previous result.",
  },
  {
    id: "feedback-vs-official-scoring",
    question: "How does tutor feedback relate to PTE's official scoring?",
    answer:
      "Tutor feedback can connect a response to the current published task requirements and identify a practical next priority, but it is not an official PTE score or a reproduction of Pearson's scoring system. Pearson describes automated scoring and human expert review for some responses. The feedback method and frequency are confirmed for the current coaching option.",
  },
  {
    id: "preparation-time",
    question: "How long will I need to prepare for PTE?",
    answer:
      "There is no responsible universal timeline. Preparation time depends on your current performance, required overall and skill scores, available study time, deadline, task familiarity and how consistently you apply feedback. Share those details so Aisha can advise on the most suitable next step.",
  },
  {
    id: "guarantees-and-shortcuts",
    question: "Do you guarantee a PTE score or teach algorithm shortcuts?",
    answer:
      "No. Aisha provides structured preparation using current public task information, English-language development, purposeful practice and feedback, but no teacher can guarantee an official result or claim access to Pearson's proprietary scoring system. Memorised responses, prediction files and alleged secret score weights are not presented as guaranteed shortcuts.",
  },
  {
    id: "current-offer",
    question: "What PTE class format, fee and support are currently available?",
    answer:
      "Review the learning-format, fee and availability sections on this page, then ask Aisha to confirm the complete current option before payment. Confirm the exact PTE test supported, platform, group or one-to-one availability, schedule and time zone, duration, recordings, feedback frequency, practice and mock inclusions, any platform access, fee and relevant policies.",
    links: [
      { label: "Learning format", href: "#pte-learning-format" },
      { label: "Fees and enrolment", href: "#pte-pricing" },
      { label: "Current availability", href: "#pte-availability" },
    ],
  },
  {
    id: "international-candidates",
    question: "Can I enquire about PTE coaching from outside Pakistan?",
    answer:
      "Yes. Coaching is online, but suitability depends on the current format and schedule. Include your country and time zone when enquiring so Aisha can confirm whether the timing works and provide any relevant payment information.",
  },
];
