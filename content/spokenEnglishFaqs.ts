export type SpokenEnglishFaq = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
  /**
   * Optional "jump to" links appended after the answer — e.g. the current-offer answer below
   * points to the verified Step 5-7 sections it references instead of duplicating their changing
   * details (fee, dates, schedule, format) in the FAQ text itself, where they could drift out of
   * date. Never raw HTML inside `answer` — see components/spoken-english/SpokenEnglishFAQ.tsx /
   * components/FAQAccordion.tsx.
   */
  links?: { label: string; href: string }[];
};

/**
 * Spoken English Step 8: a dedicated, Spoken-English-specific FAQ source — deliberately
 * independent of content/faqs.ts's `generalFaqs`, following the same pattern as
 * content/ieltsFaqs.ts, content/pteFaqs.ts and content/toeflFaqs.ts (their respective Step 8s).
 * A programme-specific answer needs an explicit source rather than inheriting unrelated or unsafe
 * global entries automatically. See docs/spoken-english-offer-verification.md's "Specialist FAQ
 * (Step 8)" section for the verification/boundary record behind every answer below and the global
 * FAQ audit (no `content/faqs.ts` entry needed correction this step -- all had already been made
 * programme-neutral by earlier IELTS/PTE/TOEFL Step 8 work).
 *
 * Kept to exactly eight questions -- the highest-value Spoken English objections, not the complete
 * generic FAQ set or a restatement of the full curriculum/process sections above. No CEFR level,
 * clinical/speech-language claim, accent-removal promise, fixed improvement timeline, or duplicated
 * fee/date/schedule appears anywhere below -- changing operational facts are linked to their
 * verified Step 5-7 sections instead of being copied here.
 */
export const spokenEnglishFaqs: SpokenEnglishFaq[] = [
  {
    id: "learner-suitability",
    question: "Is Spoken English coaching suitable for my current level?",
    answer:
      "Suitability is confirmed from your current speaking experience, communication needs and the option presently available. Describe what you can already manage, what becomes difficult, where you need to use English and any important timeline; do not rely on a beginner, intermediate or advanced label alone.",
  },
  {
    id: "communication-goals",
    question: "Can coaching focus on work, interviews, presentations, study or everyday English?",
    answer:
      "These are relevant communication situations to discuss when identifying your priorities. Share the listener, purpose and task you need to handle so Aisha can confirm whether the current coaching option suits it; naming a situation on this page does not mean that a separate specialist course, rehearsal service or guaranteed outcome is included.",
  },
  {
    id: "starting-point-discussion",
    question: "Will I take a formal speaking or CEFR assessment before starting?",
    answer:
      "A formal placement test or certified CEFR assessment is not currently confirmed as an included service. The page describes a practical discussion of your speaking situations, current experience and possible priorities; ask Aisha to confirm how the starting point is reviewed for the current option.",
    links: [{ label: "Speaking profile", href: "#spoken-english-speaking-profile" }],
  },
  {
    id: "pronunciation-and-accent",
    question: "Will the course remove my accent or make me sound like a native speaker?",
    answer:
      "No native accent or accent-removal outcome is promised. Pronunciation work on this page is framed around intelligibility—helping a listener follow the message more easily—while respecting that accent variation is normal; this is language coaching, not speech-language therapy or a clinical service.",
  },
  {
    id: "practice-and-feedback",
    question: "How do speaking practice and feedback work?",
    answer:
      "The page explains a coaching approach built around a real communication task, guided language choices, a speaking attempt, interaction or variation, and a focused next priority. The exact practice method, feedback format, frequency, turnaround, homework, audio requirements and between-session support must be confirmed for the current option before enrolment.",
    links: [
      { label: "Coaching process", href: "#spoken-english-coaching-process" },
      { label: "Learning format", href: "#spoken-english-learning-format" },
    ],
  },
  {
    id: "progress-timeline",
    question: "How long will it take to improve my spoken English?",
    answer:
      "There is no responsible universal improvement timeline. Progress depends on your starting point, communication goal, available practice time, participation, feedback application and the current coaching arrangement; share any real deadline so Aisha can discuss a suitable next step without guaranteeing fluency or confidence by a particular date.",
  },
  {
    id: "current-offer",
    question: "What format, fee and availability are currently offered?",
    answer:
      "Review the learning-format, fees and availability sections, then ask Aisha to confirm the complete current option before payment. Confirm delivery type, platform, group or one-to-one availability, learner suitability, schedule and time zone, duration and frequency, practice and feedback, homework, recordings, materials, support, fee, billing basis and relevant policies.",
    links: [
      { label: "Learning format", href: "#spoken-english-learning-format" },
      { label: "Fees and enrolment", href: "#spoken-english-pricing" },
      { label: "Current availability", href: "#spoken-english-availability" },
    ],
  },
  {
    id: "international-learners",
    question: "Can I enquire from outside Pakistan?",
    answer:
      "Yes. Spoken English coaching is online, but suitability depends on the current delivery arrangement and schedule. Include your country and time zone so Aisha can confirm whether the timing works and provide the relevant fee, currency, billing and payment information.",
  },
];
