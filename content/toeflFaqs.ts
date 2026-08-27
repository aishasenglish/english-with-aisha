export type ToeflFaq = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /**
   * Optional "jump to" links appended after the answer — e.g. the current-offer answer below
   * points to the verified Step 5-7 sections it references instead of duplicating their changing
   * details (fee, dates, schedule) in the FAQ text itself, where they could drift out of date.
   * Never raw HTML inside `answer` — see components/toefl/TOEFLFAQ.tsx / FAQAccordion.tsx.
   */
  links?: { label: string; href: string }[];
};

/**
 * TOEFL Step 8: a dedicated, TOEFL-specific FAQ source — deliberately independent of
 * content/faqs.ts's `generalFaqs`, following the same pattern as content/ieltsFaqs.ts (IELTS
 * Step 8) and content/pteFaqs.ts (PTE Step 8). A programme-specific answer needs an explicit
 * source rather than inheriting unrelated or unsafe global entries automatically. See
 * docs/toefl-offer-verification.md's "Global FAQ audit (TOEFL Step 8)" section — no global entry
 * needed correction this step; all had already been made programme-neutral by earlier IELTS/PTE
 * Step 8 work.
 *
 * Kept to exactly eight questions — the highest-conversion TOEFL objections, not the complete
 * generic FAQ set. Test-format and scoring facts rechecked against the official ETS sources listed
 * in docs/toefl-content-sources.md on the date noted there ("TOEFL Step 8: FAQ sourcing").
 */
export const toeflFaqs: ToeflFaq[] = [
  {
    id: "exact-test",
    question: "Which TOEFL test should I prepare for?",
    answer:
      "Confirm the exact assessment with the institution or programme receiving your result. This page focuses on TOEFL iBT; TOEFL Essentials and TOEFL ITP are different assessments. If you plan to take TOEFL iBT at a test centre or through the Home Edition, mention that when enquiring so Aisha can confirm whether the current coaching option suits your test plan.",
  },
  {
    id: "required-score",
    question: "How do I know which TOEFL score I need?",
    answer:
      "Use the current requirement supplied by the institution or programme receiving your result. ETS does not set one universal passing score, and the institution may specify an overall score, minimum Reading, Listening, Writing or Speaking scores, or both. Confirm whether its requirement uses the current 1–6 scale or still refers to 0–120 before planning preparation.",
  },
  {
    id: "information-to-share",
    question: "What should I share before starting TOEFL preparation?",
    answer:
      "Share the exact TOEFL iBT requirement, institution and programme, required overall and section scores, score scale, previous TOEFL result if you have one, planned test date, application deadline, country or time zone, and usual availability. First-time candidates can describe their current English and computer-test experience instead of providing a previous result.",
  },
  {
    id: "feedback-vs-official-scoring",
    question: "How does tutor feedback relate to official TOEFL scoring?",
    answer:
      "Tutor feedback can connect an answer or response to current published task demands and identify a practical next priority, but it is not an official TOEFL score, score report or reproduction of ETS's proprietary scoring system. The submission method, feedback frequency and turnaround are confirmed for the current coaching option.",
  },
  {
    id: "preparation-time",
    question: "How long will I need to prepare for TOEFL?",
    answer:
      "There is no responsible universal timeline. Preparation time depends on your current performance, required overall and section scores, available study time, planned test date, task familiarity and how consistently you apply feedback. Share those details so Aisha can advise on the most suitable next step.",
  },
  {
    id: "guarantees-and-shortcuts",
    question: "Do you guarantee a TOEFL score or teach scoring shortcuts?",
    answer:
      "No. Aisha provides structured preparation using current public task information, English-language development, purposeful practice and feedback, but no teacher can guarantee an official result or claim access to ETS's proprietary scoring system. Leaked questions, memorised responses and alleged secret score weights are not presented as guaranteed shortcuts.",
  },
  {
    id: "current-offer",
    question: "What TOEFL class format, fee and availability are currently offered?",
    answer:
      "Review the learning-format, fee and availability sections on this page, then ask Aisha to confirm the complete current option before payment. Confirm the TOEFL iBT format covered, delivery type, platform, group or one-to-one availability, schedule and time zone, duration, recordings, feedback, timed-practice and mock inclusions, materials or platform access, fee and relevant policies.",
    links: [
      { label: "Learning format", href: "#toefl-learning-format" },
      { label: "Fees and enrolment", href: "#toefl-pricing" },
      { label: "Current availability", href: "#toefl-availability" },
    ],
  },
  {
    id: "international-candidates",
    question: "Can I enquire about TOEFL coaching from outside Pakistan?",
    answer:
      "Yes. Coaching is online, but suitability depends on the current delivery format and schedule. Include your country and time zone when enquiring so Aisha can confirm whether the timing works and provide any relevant payment information.",
  },
];
