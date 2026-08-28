export type EnglishWritingFaq = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /**
   * Optional "jump to" links appended after the answer — e.g. the current-offer answer below
   * points to the verified Step 5-7 sections it references instead of duplicating their changing
   * details (fee, dates, schedule, format) in the FAQ text itself, where they could drift out of
   * date. Never raw HTML inside `answer` — see components/english-writing/EnglishWritingFAQ.tsx /
   * components/FAQAccordion.tsx.
   */
  links?: { label: string; href: string }[];
};

/**
 * English Writing Step 8: a dedicated, English-Writing-specific FAQ source — deliberately
 * independent of content/faqs.ts's `generalFaqs`, following the same pattern as
 * content/spokenEnglishFaqs.ts, content/ieltsFaqs.ts, content/pteFaqs.ts and content/toeflFaqs.ts
 * (their respective Step 8s). A programme-specific answer needs an explicit source rather than
 * inheriting unrelated or unsafe global entries automatically. See
 * docs/english-writing-offer-verification.md's "Specialist FAQ (Step 8)" section for the
 * verification/boundary record behind every answer below and the global FAQ audit.
 *
 * Kept to exactly eight questions -- the highest-value English Writing objections, not the
 * complete generic FAQ set or a restatement of the full framework/process sections above. No
 * document-upload invitation, proofreading/ghostwriting offer, CEFR/formal-assessment claim, fixed
 * improvement timeline, or duplicated fee/date/schedule appears anywhere below -- changing
 * operational facts are linked to their verified Step 5-7 sections instead of being copied here.
 */
export const englishWritingFaqs: EnglishWritingFaq[] = [
  {
    id: "learner-suitability",
    question: "Is English Writing coaching suitable for me?",
    answer:
      "It may be relevant if you want to strengthen general written English for study, work or everyday communication. Fit depends on what you need to write and what currently feels difficult, not on a fixed label -- the writing profile below helps you describe your starting point, and this page does not confirm every age or proficiency level. Ask Aisha to confirm whether the current offer suits your context before enrolling.",
    links: [{ label: "Build your writing profile", href: "#english-writing-profile" }],
  },
  {
    id: "writing-scope",
    question: "What kinds of writing can I ask about?",
    answer:
      "You can begin by describing the writing you use for study, work or everyday communication, but the exact document scope must be confirmed. The examples on this page are recognition cues, not guaranteed inclusions -- name the document type, reader, purpose and difficulty when you enquire. Dissertations, theses, publication papers, admission or application documents, named citation systems and specialist business documents are not automatically included, and confidential or assessed material should not be shared until the process and privacy expectations are confirmed.",
    links: [{ label: "See writing contexts", href: "#english-writing-context-map" }],
  },
  {
    id: "exam-route-distinction",
    question: "Is this the right page for IELTS, PTE, TOEFL or O/A Level writing?",
    answer:
      "No -- named tests and O/A Level English follow separate task- or syllabus-specific routes. This page covers broader written-English development; IELTS, PTE and TOEFL use their own dedicated pages because their tasks and scoring differ, and O/A Level English is a separate specialist offer.",
    links: [{ label: "Choose the appropriate writing route", href: "#english-writing-route-guidance" }],
  },
  {
    id: "authorship-boundary",
    question: "Will Aisha proofread, rewrite or complete my work?",
    answer:
      "This page presents coaching that helps learners develop and revise their own writing, not a done-for-you writing service. You remain the author -- the page does not offer completion of assessed work, ghostwriting, plagiarism concealment or authorship misrepresentation, and the coaching process describes focused review principles rather than a teacher replacing your text. The exact boundary of any feedback or editing activity must be confirmed before material is shared.",
    links: [{ label: "See the coaching and revision process", href: "#english-writing-coaching-process" }],
  },
  {
    id: "writing-sample",
    question: "Do I need to send a writing sample?",
    answer:
      "You do not need to send a full document in your first enquiry. Your first message can describe the writing type, reader/purpose and difficulty instead -- the site currently has no document-upload workflow, and sample collection, storage, retention and privacy remain subject to confirmation. Do not send assessed, confidential or personally sensitive material until Aisha confirms whether a sample is needed and how it would be handled. The illustrative example on this page was created for the website and is not learner evidence.",
    links: [{ label: "See the illustrative teaching example", href: "#english-writing-demonstration" }],
  },
  {
    id: "practice-and-feedback",
    question: "How will writing practice and feedback work?",
    answer:
      "The page explains a responsible writing-and-revision approach, but the current practice and feedback arrangement must be confirmed before enrolment. The public process moves from purpose and planning to a focused writing attempt, useful review priorities and learner-led revision -- it does not prove that assignments or full-document reviews are included, and feedback method, depth, frequency, turnaround and number of revisions are not stated here.",
    links: [
      { label: "See the coaching process", href: "#english-writing-coaching-process" },
      { label: "Confirm the current learning format", href: "#english-writing-learning-format" },
    ],
  },
  {
    id: "current-offer",
    question: "What are the current format, fee and availability?",
    answer:
      "The current format, fee and availability should be confirmed from the dedicated sections below and directly with Aisha before payment. Online tutoring is the only broad delivery fact this page establishes -- platform, live or asynchronous arrangement, group or one-to-one format, schedule and inclusions all follow the current learning-format state, price follows the current fee state, and availability follows the current date-aware state. Sending an enquiry does not reserve a place.",
    links: [
      { label: "Check the learning format", href: "#english-writing-learning-format" },
      { label: "Check the current fee", href: "#english-writing-pricing" },
      { label: "Check current availability", href: "#english-writing-availability" },
    ],
  },
  {
    id: "progress-timeline",
    question: "How quickly will my writing improve?",
    answer:
      "There is no single honest timeline that applies to every learner or writing goal. Progress depends on your starting profile, writing context, the difficulties being addressed, practice and revision -- this page does not promise mastery, error-free writing, a grade, admission, publication, promotion or employment result. Focused priorities can give you something specific to work on and revisit; ask Aisha what expectations are realistic for your current goal and format.",
  },
];
