export type FAQ = {
  /** Stable, meaningful — used as the React key and structured-data identifier. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /** Only published items may render anywhere on the public site. */
  published: boolean;
  /** Marks the six items shown in the homepage's closing FAQ (components/HomeFAQ.tsx). */
  homepage?: boolean;
};

// Single canonical FAQ source. The homepage FAQ and the full /faq page are both filtered
// views over this same array — a question is never written out twice. Answers here must be
// backed by content/courses.ts or an explicitly approved site decision; see the Step 12
// implementation prompt's "do not retain an answer simply because it already exists" rule.
export const faqs: FAQ[] = [
  // --- Homepage closing FAQ: the six questions most likely to stop an enrolment ---
  {
    id: "programmes-taught",
    question: "Which learners and programmes do you teach?",
    answer:
      "Aisha teaches live online English across school examinations, IELTS and related tests, spoken English, English writing and professional communication. Choose a programme from the website or send your goal if you are unsure where it fits.",
    published: true,
    homepage: true,
  },
  {
    id: "choosing-programme",
    question: "How do I know which programme is right?",
    answer:
      "Start with the learner's exact requirement: school examination, named language test, speaking goal or writing goal. If you are still unsure, share the current situation and preferred timeline so Aisha can recommend the most relevant next step.",
    published: true,
    homepage: true,
  },
  {
    id: "international-students",
    question: "Can learners join from outside Pakistan?",
    answer:
      "Yes, teaching is online. Current schedules are shown or confirmed in Pakistan Standard Time, so international learners should include their country or time zone when enquiring.",
    published: true,
    homepage: true,
  },
  {
    id: "fees-and-schedules",
    question: "How are course fees confirmed?",
    answer:
      "Fees can differ by programme, learning format and intake. Aisha will share the current fee and payment details before you decide whether to enrol.",
    published: true,
    homepage: true,
  },
  {
    id: "grade-guarantee",
    question: "Do you guarantee a grade, band or score?",
    answer:
      "No responsible teacher can guarantee a result. Aisha provides structured teaching, practice and feedback, while progress also depends on the learner's starting point, available time and consistent participation.",
    published: true,
    homepage: true,
  },
  {
    id: "enquiry-details",
    question: "What should I include in my enquiry?",
    answer:
      "Include the learner's programme or exam, current level or score if known, country or time zone, target and preferred starting date. Parents should also include the student's school level, board or syllabus where relevant.",
    published: true,
    homepage: true,
  },

  // --- Additional questions shown only on the full /faq page ---
  {
    // Corrected (Step 8): the previous answer asserted "live on Zoom" and "every current
    // programme includes a recording" as universal facts. Neither is owner-confirmed for every
    // programme — the IELTS page's own verification record (docs/ielts-offer-verification.md)
    // explicitly lists platform and recording availability as "Needs owner confirmation," which
    // this answer directly contradicted. Rewritten to the safe fallback: confirmed per programme
    // and current option, not asserted as a blanket claim.
    id: "live-or-recorded",
    question: "Are classes live, recorded, or both?",
    answer:
      "This depends on the programme and current option. The class platform, live delivery and recording availability are confirmed for your specific programme before you enrol — ask Aisha when enquiring.",
    published: true,
  },
  {
    // Corrected (Step 8): the previous answer assumed a recording is always available. See the
    // live-or-recorded correction above — missed-class handling depends on the confirmed policy
    // for the specific programme, not a universal recording guarantee.
    id: "missed-class",
    question: "What if I miss a class?",
    answer:
      "Missed-class options — such as a recording, a catch-up session or rescheduling — depend on the policy confirmed for your specific programme and current intake. Ask Aisha about the option that applies to you.",
    published: true,
  },
  {
    // Corrected (Step 8): "New groups open regularly" implied an unconfirmed recurring cadence.
    // Future intake dates are only published once genuinely confirmed (see
    // docs/updating-batches.md) — never inferred from the spacing between past batches.
    id: "new-batches",
    question: "How often do new batches start?",
    answer:
      "New intake dates are published only once confirmed, so how often they open can vary by programme. Ask about the next confirmed start date, or check current published availability on the batches page.",
    published: true,
  },
  {
    id: "fees-payment",
    question: "What does it cost, and how do I pay?",
    answer:
      "Fees differ by programme, format and intake, and are confirmed directly with you. Message Aisha on WhatsApp for the current fee and payment options before you enrol.",
    published: true,
  },
  {
    // Corrected (Step 8): named IELTS, PTE, TOEFL and O & A Level as all including "regular
    // tests and full-length mock exams," which directly contradicted the IELTS page's own
    // verification record (practice-test frequency and mock count are both "Needs owner
    // confirmation" — see docs/ielts-offer-verification.md). Rewritten so quantity and frequency
    // are confirmed per programme rather than asserted as an included quantity.
    id: "mock-exams",
    question: "Do you offer mock exams?",
    answer:
      "Mock-test availability, format and quantity differ by programme and are confirmed for your current option before you enrol. Ask Aisha what's included for your specific programme.",
    published: true,
  },
  {
    // Corrected (Step 8): "Most programmes include a 1-on-1 consultation" asserted an unconfirmed
    // universal inclusion — the IELTS page's own verification record lists one-to-one
    // availability as "Needs owner confirmation," including whether it's included or separately
    // priced. Rewritten so it's confirmed per programme rather than assumed included.
    id: "one-to-one-help",
    question: "Do you offer one-on-one help?",
    answer:
      "One-to-one availability is programme-specific and confirmed before you enrol — it may be the main format, an optional add-on, or not currently offered, depending on the programme. Ask Aisha about the option for yours.",
    published: true,
  },
  {
    // Corrected (Step 8): "All classes run live on Zoom" asserted a universal platform that
    // directly contradicted the IELTS page's own verification record (platform is "Needs owner
    // confirmation," not confirmed as Zoom). Rewritten to the safe fallback: confirmed per
    // programme and current option.
    id: "platform",
    question: "Which platform are classes on?",
    answer: "The class platform is confirmed for your specific programme and current option — ask Aisha when enquiring.",
    published: true,
  },
  {
    id: "ielts-formats",
    question: "Do you teach both Academic and General Training IELTS?",
    answer: "Yes — both Academic and General Training IELTS are covered.",
    published: true,
  },
  {
    // Reviewed, not changed (Step 8): unlike its neighbours above, this doesn't assert an
    // unconfirmed frequency, turnaround time or delivery method — it's consistent with the
    // IELTS page's own feedback description (Steps 3-4) and every other programme's teaching
    // approach, so it was left as-is.
    id: "personal-feedback",
    question: "Do I get personal feedback?",
    answer: "Yes — Aisha reviews your writing and speaking and gives specific, actionable feedback.",
    published: true,
  },

  // --- Added for the Courses hub (Step 4); also useful on the full /faq page ---
  {
    id: "programme-format-schedule",
    question: "Do all programmes have the same class format and schedule?",
    answer:
      "No. Format, schedule, practice requirements and available support can differ by programme and intake. Review the relevant programme page and confirm the current details before enrolling.",
    published: true,
  },
  {
    id: "choosing-language-test",
    question: "How should I choose between IELTS, PTE and TOEFL?",
    answer:
      "First confirm which tests and scores the university, employer, visa route or professional body currently accepts. If more than one is accepted, share those confirmed requirements, your current level or previous score and your deadline when asking Aisha for guidance.",
    published: true,
  },
];

/** Every FAQ eligible to render anywhere on the public site. */
export const publishedFaqs: FAQ[] = faqs.filter((faq) => faq.published);

/** The full FAQ page's list — every published question, homepage subset included. */
export const generalFaqs: FAQ[] = publishedFaqs;

/** The homepage's six-question closing FAQ (components/HomeFAQ.tsx), in source order. */
export const homepageFaqs: FAQ[] = publishedFaqs.filter((faq) => faq.homepage);

/**
 * Selects published FAQs by stable ID, preserving the requested order — for a page that needs
 * a specific curated subset (e.g. the Courses hub) rather than "every published item" or "every
 * item flagged for one particular page". Deliberately throws (not a silent `.filter()`) if an ID
 * is missing or refers to an unpublished entry, so a typo'd or removed ID fails at build time —
 * the earliest point a developer would see it — rather than quietly rendering a shorter list.
 */
export function selectPublishedFaqs(ids: readonly string[]): FAQ[] {
  return ids.map((id) => {
    const faq = faqs.find((f) => f.id === id);
    if (!faq) {
      throw new Error(`content/faqs.ts: selectPublishedFaqs — no FAQ entry with id "${id}".`);
    }
    if (!faq.published) {
      throw new Error(`content/faqs.ts: selectPublishedFaqs — FAQ "${id}" is not published.`);
    }
    return faq;
  });
}

const COURSE_HUB_FAQ_IDS = [
  "choosing-programme",
  "programme-format-schedule",
  "international-students",
  "fees-and-schedules",
  "choosing-language-test",
] as const;

/** The Courses hub's five-question closing FAQ (components/CoursesFAQ.tsx), in curated order. */
export const courseHubFaqs: FAQ[] = selectPublishedFaqs(COURSE_HUB_FAQ_IDS);
