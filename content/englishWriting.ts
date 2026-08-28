import { site } from "@/content/site";

/**
 * English Writing-page-specific copy (English Writing Step 1). Canonical programme identity --
 * slug, public name, route -- stays in content/courses.ts; this file only holds the sales/
 * positioning copy that doesn't belong on the generic Course object. Aisha's qualification and
 * professional role are NOT duplicated here -- components read those directly from
 * content/site.ts.
 *
 * The legacy content/courses.ts english-writing record ("English Writing Mastery", "write
 * clearly, correctly, confidently", "Live Zoom classes (recorded)", "PKR 10,000", etc.) is not
 * publication-authoritative for /courses/english-writing -- see
 * docs/english-writing-offer-verification.md for the full list of unverified operational facts.
 *
 * Later English Writing steps add more sections (full curriculum, teaching/feedback process,
 * evidence, learning format, pricing, dedicated availability, FAQ) once their content is
 * verified against an owner confirmation -- do not pre-fill those with placeholder content.
 */

/** One of the four "who this coaching may suit" context cards
 *  (components/english-writing/EnglishWritingFit.tsx). */
export type EnglishWritingContextCard = {
  id: string;
  title: string;
  relevantWhen: string;
  usefulDetail: string;
  /** Optional short redirect cue -- e.g. the study card's note that named exam-writing
   *  preparation follows its own dedicated route below. */
  note?: string;
};

/** One temporary "writing priorities we can discuss" theme
 *  (components/english-writing/EnglishWritingPrioritiesPreview.tsx) -- a possible discussion area,
 *  never a guaranteed module or curriculum sequence. */
export type EnglishWritingPriorityItem = {
  id: string;
  label: string;
  body: string;
};

/** One internal route-selection link (IELTS/PTE/TOEFL/O-A Level) in
 *  components/english-writing/EnglishWritingRouteGuidance.tsx. */
export type EnglishWritingRouteLink = {
  id: string;
  label: string;
  href: string;
  description: string;
};

export const englishWritingContent = {
  slug: "english-writing",
  label: "English Writing",

  hero: {
    eyebrow: "Online English tutoring",
    heading: "Online English Writing Coaching",
    body: "For learners who want to strengthen sentence clarity, organisation and purposeful written English for study, work or everyday communication.",
    primaryCta: {
      label: "Discuss your writing goals",
      message:
        "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. The part I find difficult is [sentences/grammar/organisation/another issue].",
    },
    secondaryCta: {
      label: "See who it may suit",
      href: "#english-writing-fit",
    },
    reassurance:
      "Share what you need to write and what feels difficult. Aisha can confirm whether the current offer is a suitable fit.",
  },

  // Only the three owner-confirmed facts the implementing prompt permits -- no years of
  // experience, learner counts, institutions, ratings, publications or writing-specific
  // certification. site.qualification/site.professionalRole are read directly by the component,
  // never duplicated here.
  authority: {
    thirdFact: "Online English tutoring",
  },

  fit: {
    id: "english-writing-fit",
    eyebrow: "Find your starting point",
    heading: "Who this coaching may suit",
    body: "Start with the situation in which you need to write. The examples below help you describe your goal; the exact coaching scope and format should be confirmed before enrolment.",
    cards: [
      {
        id: "study",
        title: "Writing for study",
        relevantWhen:
          "You are working on essays, reports or extended written responses for a course or programme and want clearer sentences, structure and organisation.",
        usefulDetail: "The subject or assignment type, and where your writing currently feels weakest.",
        note: "If you need IELTS, PTE or TOEFL Writing preparation specifically, that follows its own dedicated route below.",
      },
      {
        id: "work",
        title: "Writing for work",
        relevantWhen:
          "You write emails, reports or other routine documents at work and want to communicate more clearly and confidently.",
        usefulDetail: "The kind of document you write most often and what currently feels difficult about it.",
      },
      {
        id: "everyday",
        title: "Everyday written English",
        relevantWhen:
          "You want more control and confidence in everyday written communication -- messages, forms or other practical writing.",
        usefulDetail: "A recent example of writing that felt difficult to get right.",
      },
      {
        id: "foundations",
        title: "Stronger writing foundations",
        relevantWhen:
          "You notice recurring grammar, sentence or organisation difficulties but are not yet sure how to describe or fix them.",
        usefulDetail: "One or two examples of mistakes or patterns you keep noticing.",
      },
    ] as EnglishWritingContextCard[],
  },

  // Step 1: a deliberately limited preview -- not the final curriculum. A later step replaces or
  // expands this once the offer is verified. No lesson-by-lesson modules, assignment counts, test
  // frequency, marking rubrics, feedback turnaround, citation-style training, dissertation/
  // publication support or AI/plagiarism service appears anywhere below.
  prioritiesPreview: {
    id: "english-writing-priorities",
    eyebrow: "A starting point, not a fixed curriculum",
    heading: "Writing priorities we can discuss",
    intro:
      "This is not the final curriculum. The relevant priorities depend on what you need to write and the difficulties you currently face.",
    items: [
      {
        id: "sentence-clarity",
        label: "Sentence clarity and control",
        body: "Building sentences that say what you mean, without unnecessary complexity.",
      },
      {
        id: "grammar-punctuation",
        label: "Grammar and punctuation in context",
        body: "Working on the specific patterns that affect your own writing, not a generic drill list.",
      },
      {
        id: "paragraph-organisation",
        label: "Paragraph organisation and progression",
        body: "Structuring ideas so a reader can follow your point from sentence to sentence.",
      },
      {
        id: "purpose-audience-tone",
        label: "Purpose, audience and tone",
        body: "Matching how you write to who is reading it and why.",
      },
      {
        id: "reviewing-recurring-problems",
        label: "Reviewing recurring writing problems",
        body: "Identifying the mistakes or habits that keep appearing across different pieces of writing.",
      },
    ] as EnglishWritingPriorityItem[],
  },

  routeGuidance: {
    id: "english-writing-route-guidance",
    eyebrow: "Choose the right route",
    heading: "Looking for exam-specific writing support?",
    intro:
      "General English Writing coaching is for broader writing development. IELTS, PTE and TOEFL have separate test-preparation routes because their tasks and scoring requirements differ, and O/A Level English is a separate subject/exam offer.",
    links: [
      {
        id: "ielts",
        label: "IELTS preparation",
        href: "/courses/ielts",
        description: "For the IELTS Writing task types and band-score requirements specifically.",
      },
      {
        id: "pte",
        label: "PTE Academic preparation",
        href: "/courses/pte",
        description: "For PTE Academic's computer-based writing tasks and scoring.",
      },
      {
        id: "toefl",
        label: "TOEFL iBT preparation",
        href: "/courses/toefl",
        description: "For TOEFL iBT's writing tasks and score requirements.",
      },
      {
        id: "o-a-level",
        label: "O/A Level English",
        href: "/courses/o-a-level-english",
        description: "For Cambridge or Edexcel syllabus-based English papers.",
      },
    ] as EnglishWritingRouteLink[],
  },

  // No owner-verified, future, published English Writing intake exists in content/batches.ts, so
  // this fails closed to a truthful enquiry-only state -- never a continuous-enrolment, immediate-
  // availability, waiting-list, limited-places, response-time, private/group-format or free-
  // consultation claim. A dedicated date-aware availability component (mirroring the Spoken
  // English Step 7 pattern) is a later step.
  availability: {
    id: "english-writing-availability",
    eyebrow: "Current availability",
    heading: "Confirm the current English Writing option.",
    body: "Current English Writing availability is confirmed individually. Share your writing goal and preferred timing, and Aisha can let you know what option, if any, is currently available.",
    ctaLabel: "Ask About English Writing Availability",
    message:
      "Hi Aisha! I'd like to ask about current English Writing availability. What I need to write is [details], and what I find difficult is [details]. My preferred timing is [details]. Please let me know what option, if any, is currently available.",
  },

  finalCta: {
    id: "english-writing-enquiry",
    eyebrow: "Your next step",
    heading: "Tell Aisha what you need to write",
    body: "Share the writing situation, your current difficulty and any relevant deadline. Aisha can review the enquiry and confirm whether the current coaching offer is a suitable fit.",
    helperNote: "You do not need to send a full document in the first message.",
    primaryLabel: "Discuss my writing goals",
    message:
      "Hi Aisha! I'm interested in online English writing coaching. What I need to write is [details]. What I find difficult is [details]. My relevant deadline, if any, is [details].",
    emailCtaLabel: "Email Aisha",
    emailAccessibleLabel: "Email Aisha about English writing coaching",
    emailSubject: "English writing coaching enquiry",
    emailBody: `Hello Aisha,

I would like to ask about English writing coaching.

What I need to write:
What I find difficult:
Any relevant deadline:

Please confirm whether a current option may suit this requirement.`,
  },

  // Read directly from the canonical site record rather than a second literal, so this can never
  // drift out of sync with content/site.ts's own email field.
  contact: {
    email: site.email,
  },
} as const;
