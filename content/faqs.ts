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
      "Share the learner's goal, current situation and preferred timeline. Aisha can then recommend the most relevant programme, learning format or next assessment step.",
    published: true,
    homepage: true,
  },
  {
    id: "international-students",
    question: "Can students join from outside Pakistan?",
    answer:
      "Yes, teaching is online. Current schedules are shown or confirmed in Pakistan Standard Time, so international students should include their country or time zone when enquiring.",
    published: true,
    homepage: true,
  },
  {
    id: "fees-and-schedules",
    question: "How are fees and schedules confirmed?",
    answer:
      "Fees and schedules can differ by programme, format and intake. Aisha will share the current details before you decide whether to enrol.",
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
    id: "live-or-recorded",
    question: "Are classes live, recorded, or both?",
    answer:
      "Both — you attend live on Zoom, and every current programme includes a recording so you can rewatch it afterwards.",
    published: true,
  },
  {
    id: "missed-class",
    question: "What if I miss a class?",
    answer:
      "No problem — watch the recording whenever it suits you, then bring your questions to the next session.",
    published: true,
  },
  {
    id: "new-batches",
    question: "How often do new batches start?",
    answer:
      "New groups open regularly. Ask about the next confirmed intake, or check current availability on the batches page.",
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
    id: "mock-exams",
    question: "Do you offer mock exams?",
    answer:
      "Regular tests and full-length mock exams are included in the IELTS, PTE, TOEFL and O & A Level courses. Spoken English and Writing focus on ongoing practice, marked work and feedback instead.",
    published: true,
  },
  {
    id: "one-to-one-help",
    question: "Do you offer one-on-one help?",
    answer:
      "Most programmes include a 1-on-1 consultation or individual practice option, and full one-to-one coaching is available for O & A Level English. Ask about the option for your specific programme.",
    published: true,
  },
  {
    id: "platform",
    question: "Which platform are classes on?",
    answer: "All classes run live on Zoom.",
    published: true,
  },
  {
    id: "ielts-formats",
    question: "Do you teach both Academic and General Training IELTS?",
    answer: "Yes — both Academic and General Training IELTS are covered.",
    published: true,
  },
  {
    id: "personal-feedback",
    question: "Do I get personal feedback?",
    answer: "Yes — Aisha reviews your writing and speaking and gives specific, actionable feedback.",
    published: true,
  },
];

/** Every FAQ eligible to render anywhere on the public site. */
export const publishedFaqs: FAQ[] = faqs.filter((faq) => faq.published);

/** The full FAQ page's list — every published question, homepage subset included. */
export const generalFaqs: FAQ[] = publishedFaqs;

/** The homepage's six-question closing FAQ (components/HomeFAQ.tsx), in source order. */
export const homepageFaqs: FAQ[] = publishedFaqs.filter((faq) => faq.homepage);
