import { site } from "@/content/site";

/**
 * About-page-specific copy (About Step 1). Canonical qualification, professional role, brand
 * name, city and email are NOT duplicated here as literals -- every string below reads them
 * directly from content/site.ts so this file can never silently drift from the one owner-
 * confirmed source. See docs/about-credentials-verification.md for the verification status of
 * every authority claim shown on this page, including the specific claims this step deliberately
 * does NOT publish yet (IDP-Certified IELTS Trainer, Corporate Trainer, any years-of-experience
 * figure, learner counts, ratings, awards, examiner status).
 *
 * This is a positioning and information-architecture step, not a full credential-evidence,
 * teaching-philosophy, social-proof, enquiry-design, SEO, accessibility/performance or
 * measurement step -- those are later About-page steps.
 */

export type AboutRouteLink = {
  id: string;
  label: string;
  href: string;
  description: string;
};

export type AboutRouteGroup = {
  id: string;
  label: string;
  cue: string;
  links: AboutRouteLink[];
};

export type AboutPrinciple = {
  id: string;
  title: string;
  body: string;
};

export const aboutContent = {
  hero: {
    id: "about-hero",
    eyebrow: "About Aisha",
    heading: "Meet Aisha, your online English teacher",
    // Deliberately avoids "for years", "every kind of background", or any invented duration --
    // see the "Current-page audit" section of the About Step 1 prompt this replaces.
    body: `Aisha holds an ${site.qualification} and works as a ${site.professionalRole}. Through ${site.brandName}, she helps learners explore focused online support for recognised English tests, spoken communication and written English.`,
    portrait: {
      // Documented in public/images/README.md as 800x1000 (4:5); the actual file measures
      // 1086x1448 (3:4) -- verified directly with sharp before implementation, and the README
      // entry has been corrected to match rather than trusting the stale documented ratio.
      src: "/images/aisha-about.jpg",
      alt: `${site.founder}, English teacher and ${site.professionalRole}`,
      width: 1086,
      height: 1448,
    },
    primaryCta: { label: "Explore English Programmes", href: "/courses" },
    secondaryCta: {
      label: "Ask Aisha a Question",
      message:
        "Hi Aisha! I have a question about your teaching and which English programme may suit me. My question is:",
    },
  },

  // Only owner-confirmed facts -- no years-teaching, learner-count, pass-rate, score-improvement,
  // country-reached, rating or certification-logo claim. `site.city` is included because it is
  // already a canonical public fact, per the Step 1 prompt's explicit allowance -- not treated as
  // the page's main value proposition.
  authorityFacts: [site.qualification, site.professionalRole, "Online English tutoring", site.city] as string[],

  introduction: {
    id: "about-introduction",
    eyebrow: "About Aisha",
    heading: "A little about my background",
    // First person, no invented institution, precise year or personal-hardship narrative.
    paragraphs: [
      `I teach English in a college setting and online through ${site.brandName}. My academic background in English Literature shapes how I explain language, reading and writing, while each learner's actual goal determines which programme or starting point may be relevant.`,
      "I work with exam candidates and learners strengthening everyday or professional communication, always starting from what a learner actually needs rather than a fixed lesson script -- and every programme's own page confirms its current format before you decide.",
    ],
  },

  expertiseRoutes: {
    id: "about-expertise-routes",
    eyebrow: "Where to start",
    heading: "What you can explore with Aisha",
    intro:
      "Aisha's English covers three broad routes. Each programme page below remains the current, authoritative source for its own format, fee and availability -- this page only helps you find the right one.",
    groups: [
      {
        id: "tests",
        label: "English tests",
        cue: "Preparing for a recognised English test with its own task types and scoring requirements.",
        links: [
          {
            id: "ielts",
            label: "IELTS Preparation",
            href: "/courses/ielts",
            description: "Focused preparation for IELTS task types and band-score requirements.",
          },
          {
            id: "pte",
            label: "PTE Academic",
            href: "/courses/pte",
            description: "Preparation for PTE Academic's computer-based test format.",
          },
          {
            id: "toefl",
            label: "TOEFL iBT Preparation",
            href: "/courses/toefl",
            description: "Preparation for TOEFL iBT's task types and score requirements.",
          },
        ],
      },
      {
        id: "communication",
        label: "Everyday and professional communication",
        cue: "Building spoken confidence for work, study or everyday situations.",
        links: [
          {
            id: "spoken-english",
            label: "Spoken English Coaching",
            href: "/courses/spoken-english",
            description: "Speaking practice built around real work, study and everyday situations.",
          },
        ],
      },
      {
        id: "writing",
        label: "Written English",
        cue: "Strengthening writing for study, work or everyday communication.",
        links: [
          {
            id: "english-writing",
            label: "English Writing",
            href: "/courses/english-writing",
            description: "Writing coaching for clearer sentences, structure and revision.",
          },
        ],
      },
    ] as AboutRouteGroup[],
    boundary:
      "Programme pages remain authoritative for their specific curriculum, format, price, availability and evidence -- this page introduces the routes, not the operational details.",
  },

  teachingPrinciples: {
    id: "about-teaching-principles",
    eyebrow: "How Aisha teaches",
    heading: "Principles that guide the teaching",
    principles: [
      {
        id: "goal",
        title: "Start with the learner's actual goal",
        body: "Clarify the exam, communication situation or writing need before recommending a route.",
      },
      {
        id: "manageable",
        title: "Make complex language manageable",
        body: "Explain patterns and priorities in clear steps appropriate to the context.",
      },
      {
        id: "practice",
        title: "Use purposeful practice",
        body: "Connect practice to the skill or task being developed, while confirming the exact current format separately.",
      },
    ] as AboutPrinciple[],
    closingLink: { label: "See how coaching decisions are made", href: "/how-it-works" },
  },

  fitBoundary: {
    id: "about-fit-boundary",
    heading: "What this page can and can't confirm",
    body: [
      "Aisha teaches online. Whether a particular route suits you depends on your actual goal and the current programme option.",
      "Programme pages -- or a direct enquiry -- confirm the current format, schedule, fee and availability.",
      "No result can be guaranteed, and sending an enquiry does not reserve a place.",
    ],
  },

  finalCta: {
    id: "about-final-cta",
    eyebrow: "Next step",
    heading: "Find the English support that fits your goal",
    body: "Explore the programme pages for current, goal-specific information. If you are unsure where to begin, share the learner's goal and current situation so Aisha can suggest the most relevant page or next step.",
    primaryCta: { label: "Compare English Programmes", href: "/courses" },
    secondaryCta: {
      label: "Ask Aisha on WhatsApp",
      message: "Hi Aisha! I'd like help choosing the right English programme. My goal is:",
    },
    // Only shown when formsAreConfigured() -- the general (unlocked) enquiry variant, never
    // labelled a diagnostic or assessment in visible copy.
    tertiaryLink: { label: "Send a Detailed Enquiry", href: "/free-diagnostic-test" },
  },
} as const;
