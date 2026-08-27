/**
 * Spoken English-page-specific copy (Spoken English Step 1). Canonical programme identity --
 * slug, public name, route -- stays in content/courses.ts; this file only holds the
 * sales/positioning copy that doesn't belong on the generic Course object. Aisha's qualification
 * and professional role are NOT duplicated here -- components read those directly from
 * content/site.ts.
 *
 * The legacy content/courses.ts spoken-english record (`speak without hesitation`, `Thinking in
 * English`, `live Zoom classes (recorded)`, `PKR 10,000`, etc.) is not publication-authoritative
 * for /courses/spoken-english -- see docs/spoken-english-offer-verification.md for the full list
 * of unverified operational facts and docs/spoken-english-content-sources.md for the boundary
 * decisions behind this file's wording.
 *
 * Later Spoken English steps add more sections (full communication-needs curriculum, coaching
 * process, feedback demonstration, evidence, learning format, pricing, dedicated availability,
 * FAQ) once their content is verified against an owner confirmation -- do not pre-fill those with
 * placeholder content.
 */

/** One temporary preview priority area (components/spoken-english/SpokenEnglishPrioritiesPreview.tsx).
 *  Step 2 will expand this into the final learner-profile and communication curriculum -- these
 *  are examples to discuss, not a promise that every current option covers the same syllabus. */
export type SpokenEnglishPriority = {
  id: string;
  title: string;
  description: string;
};

/** One fit pathway card (components/spoken-english/SpokenEnglishFit.tsx). */
export type SpokenEnglishFitItem = {
  id: string;
  title: string;
  description: string;
};

/** One "if your real need is different" alternative-route note in the fit section -- some link
 *  to another real page, some are a boundary statement with no link at all. */
export type SpokenEnglishAlternativeRoute = {
  id: string;
  body: string;
  link?: { label: string; href: string };
};

export const spokenEnglishPage = {
  hero: {
    eyebrow: "Online Spoken English Coaching",
    // Prefers the non-emotional-outcome version per the implementing prompt's own guidance.
    heading: "Build clearer English for the conversations that matter.",
    body: "Focus on the pronunciation, response-building, vocabulary and interaction skills you need for work, interviews, presentations, study or everyday communication.",
    primaryCta: {
      label: "Discuss Your Speaking Goal",
      message:
        "Hi Aisha! I am interested in Spoken English coaching. I need English for [work/interviews/presentations/study/everyday communication]. The situations I find difficult are [details], my current experience is [details], my important timeline is [if any], and my country/time zone and usual availability are [details]. Please let me know what current coaching option may fit and confirm the format, schedule and fee.",
    },
    secondaryCta: {
      label: "See Possible Speaking Priorities",
      href: "#spoken-english-priorities",
    },
    reassurance:
      "No promise of instant fluency or a native accent. Progress depends on the learner's starting point, practice and available time.",
  },

  // TOEFL/PTE/IELTS-pattern authority strip -- only the two owner-confirmed facts, read directly
  // from content/site.ts by the component (never duplicated here). The two short interpretations
  // below are optional context, not a claim of certification or specialist accreditation. The
  // IELTS-specific IDP credential is deliberately not shown near this section -- see
  // components/spoken-english/SpokenEnglishAuthorityStrip.tsx.
  authority: {
    interpretations: [
      { id: "literature", body: "Advanced study of English literature, analysis and expression." },
      { id: "teaching", body: "Teaching experience grounded in explanation, guided practice and academic standards." },
    ],
  },

  fit: {
    id: "spoken-english-fit",
    eyebrow: "Your speaking situations",
    heading: "Start with where you need to speak.",
    body: "Spoken English goals are most useful when they are tied to real people, situations and tasks. Identify where communication becomes difficult before deciding what to practise.",
    pathways: [
      {
        id: "work",
        title: "Work and professional communication",
        description: "Meetings, workplace conversations, explanations and professional interactions.",
      },
      {
        id: "interviews-presentations",
        title: "Interviews and presentations",
        description: "Organising spoken responses, explaining experience, responding to questions and delivering ideas clearly.",
      },
      {
        id: "study",
        title: "Study and academic participation",
        description: "Classroom discussion, asking questions, explaining ideas and participating in academic settings.",
      },
      {
        id: "everyday",
        title: "Everyday communication",
        description: "Starting, maintaining and closing conversations; asking for clarification; handling common practical interactions.",
      },
    ] as SpokenEnglishFitItem[],
    alternativeRoutesHeading: "If your main requirement is different",
    alternativeRoutes: [
      {
        id: "test-preparation",
        body: "If the primary requirement is an IELTS, PTE or TOEFL score, the dedicated test-preparation programmes are the relevant option.",
        link: { label: "Compare IELTS, PTE and TOEFL preparation", href: "/courses#language-tests" },
      },
      {
        id: "writing",
        body: "If the primary requirement is formal writing, English Writing is the relevant option.",
        link: { label: "View English Writing", href: "/courses/english-writing" },
      },
      {
        id: "school-english",
        body: "If the requirement is school examination English, that follows its own separate O/A Level pathway.",
      },
      {
        id: "clinical-concern",
        body: "If the concern may involve a speech, language or hearing difficulty, ordinary English coaching is not a substitute for an appropriately qualified professional.",
      },
    ] as SpokenEnglishAlternativeRoute[],
  },

  // Step 1: a deliberately temporary preview -- Step 2 will replace this with the final
  // learner-profile and communication curriculum. Framed throughout as possible priorities to
  // discuss, never as confirmed modules or an inclusion list.
  prioritiesPreview: {
    id: "spoken-english-priorities",
    eyebrow: "Possible priorities",
    heading: "Possible priorities for your speaking goal.",
    body: "The right priorities depend on the situations you face and what currently makes them difficult. These are examples to discuss, not a promise that every current option includes the same syllabus.",
    priorities: [
      {
        id: "pronunciation-intelligibility",
        title: "Pronunciation and intelligibility",
        description: "Making speech easier for the intended listener to understand.",
      },
      {
        id: "building-responses",
        title: "Building spoken responses",
        description: "Forming complete, relevant responses instead of relying on memorised lines.",
      },
      {
        id: "grammar-in-speech",
        title: "Grammar and sentence control in speech",
        description: "Applying useful grammar while communicating, without treating error-free speech as the only goal.",
      },
      {
        id: "functional-vocabulary",
        title: "Functional vocabulary and word choice",
        description: "Selecting language appropriate to the situation rather than memorising disconnected word lists.",
      },
      {
        id: "listening-turn-taking",
        title: "Listening, turn-taking and clarification",
        description: "Following the other speaker, responding, checking meaning and keeping interaction moving.",
      },
      {
        id: "fluency-pacing",
        title: "Fluency, pacing and preparation",
        description: "Managing pauses, organising ideas and rehearsing relevant situations.",
      },
    ] as SpokenEnglishPriority[],
  },

  // Step 1: no confirmed Spoken English intake exists yet (content/batches.ts). Fails closed --
  // never infers a cadence, group/private availability or a date from historical records. A
  // dedicated SpokenEnglishAvailability component with verified intake states is a later step.
  availability: {
    id: "spoken-english-availability",
    eyebrow: "Current availability",
    heading: "Ask about the current Spoken English option.",
    body: "No future Spoken English intake is currently published. Share your country or time zone, usual availability and main speaking situations so Aisha can confirm whether a current option may fit.",
    note: "Format, schedule, duration, support and fee are confirmed before enrolment.",
    ctaLabel: "Ask About Spoken English Availability",
    message:
      "Hi Aisha! I would like to ask about current Spoken English availability. My main speaking goal and situations are [details], my current experience is [details], my country/time zone is [details], and the days or times that usually suit me are [details]. Please confirm whether a suitable current option is available.",
  },

  // Step 1: a single strong WhatsApp action plus a plain email fallback -- a dedicated Spoken
  // English form variant (mirroring IELTS/PTE/TOEFL Step 9) is a later step, not a Step 1 addition.
  finalCta: {
    id: "spoken-english-enquiry",
    eyebrow: "Your next step",
    heading: "Tell Aisha where speaking English matters most.",
    body: "Share the situations, listeners and responses you need to handle, what currently feels difficult, and any important timeline. Aisha can then confirm whether a current Spoken English option may suit that requirement.",
    detailsHeading: "Include these details",
    details: [
      { id: "goal-situations", label: "Main speaking goal and real situations" },
      { id: "audience", label: "Who you need to communicate with" },
      { id: "difficulty", label: "What currently becomes difficult" },
      { id: "experience", label: "Current English experience or level, in your own words" },
      { id: "timeline", label: "Any important interview, presentation, travel, study or work timeline" },
      { id: "location-availability", label: "Country/time zone and usual availability" },
      { id: "format-preference", label: "Preferred group or one-to-one format, to confirm" },
    ],
    primaryLabel: "Discuss Spoken English Coaching",
    emailCtaLabel: "Email Aisha",
    emailAccessibleLabel: "Email Aisha about Spoken English coaching",
    emailSubject: "Spoken English coaching enquiry",
    emailBody: `Hello Aisha,

I would like to ask about Spoken English coaching.

Main speaking goal and real situations:
Who I need to communicate with:
What currently becomes difficult:
Current English experience or level, in my own words:
Any important timeline:
Country/time zone and usual availability:
Preferred group or one-to-one format, if any:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
    supportingNote: "Ask first; current format, schedule and fee are confirmed before any enrolment decision.",
  },
} as const;
