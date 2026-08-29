import { site } from "@/content/site";

/**
 * About-page-specific copy (About Step 1, extended in About Step 2). Canonical qualification,
 * professional role, brand name, city and email are NOT duplicated here as literals -- every
 * string below reads them directly from content/site.ts so this file can never silently drift
 * from the one owner-confirmed source. See docs/about-credentials-verification.md for the
 * verification status of every authority claim shown on this page, including the specific claims
 * still NOT published (IDP-Certified IELTS Trainer, Corporate Trainer, any years-of-experience
 * figure, learner counts, ratings, awards, examiner status), and
 * docs/about-credential-evidence-intake.md for the template a future credential must fully satisfy
 * before it can ever appear in `publicCredentials` below.
 *
 * Step 1 was a positioning and information-architecture step. Step 2 adds a typed, fail-closed
 * public-credential model (`PublicCredential`/`publicCredentials`/`isPublishableCredential`) so the
 * academic-qualification/professional-role/additional-training hierarchy is enforced in code, not
 * just in prose -- an incomplete or unapproved additional-training record can never render, no
 * matter what gets added to the array later. Full credential-evidence documents, teaching-
 * philosophy depth, social proof, enquiry-design, SEO, accessibility/performance hardening and
 * measurement remain later About-page steps.
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

// --- Public credential model (About Step 2) ------------------------------------------------
//
// Four conceptual categories exist (see docs/about-credentials-verification.md and the About
// Step 2 prompt's "Credential hierarchy" section): academic qualification, current professional
// role, additional training/certification (e.g. a future genuinely-evidenced IELTS credential),
// and professional training/client work (e.g. "Corporate Trainer"). Only the first two currently
// have a complete, owner-confirmed, publishable record -- this file models all of them as one
// `PublicCredentialCategory` union so a future verified record slots into the same fail-closed
// pipeline rather than getting its own bespoke array and its own bespoke gating logic.
export type PublicCredentialCategory = "academic-qualification" | "professional-role" | "additional-training";

export type PublicCredential = {
  id: string;
  category: PublicCredentialCategory;
  /** The claim itself, e.g. "MPhil in English Literature" -- never the category name. */
  label: string;
  /** Short, learner-relevant interpretation -- never a bare, unexplained badge. */
  context: string;
  /**
   * "owner-confirmed" (Aisha's own word, no document) or "evidence-confirmed" (a reviewed source
   * document exists -- see docs/about-credential-evidence-intake.md). Deliberately never rendered
   * as a public checkmark/badge -- a checkmark can imply independent, third-party verification
   * that neither status actually represents. This field exists for internal documentation and
   * future filtering only.
   */
  evidenceStatus: "owner-confirmed" | "evidence-confirmed";
  /** Which programme(s) this credential may be described alongside -- e.g. an IELTS-specific
   *  credential must never be presented as evidence for PTE/TOEFL/Spoken English/English Writing. */
  programmeScope?: readonly string[];
  verificationUrl?: string;
  issuedBy?: string;
  issuedAt?: string;
  expiresAt?: string;
};

/** Neutral category labels shown publicly -- never "Verified" or a checkmark. */
export const CREDENTIAL_CATEGORY_LABEL: Record<PublicCredentialCategory, string> = {
  "academic-qualification": "Academic qualification",
  "professional-role": "Current professional role",
  "additional-training": "Additional verified training",
};

/**
 * A verification URL is only ever safe to render when it's genuinely HTTPS. This does not (and
 * cannot) confirm the link is stable, issuer-authorised or free of unnecessary personal data --
 * those still require the manual review recorded in docs/about-credential-evidence-intake.md
 * before a URL is ever added to a record below in the first place. This function is a final
 * mechanical guard against a malformed or non-HTTPS value slipping through, not a substitute for
 * that review.
 */
export function isSafeCredentialVerificationUrl(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Fail-closed gate every entry in `publicCredentials` is filtered through before rendering.
 * Academic qualification and professional role are always publishable -- they're the two
 * owner-confirmed canonical facts read from content/site.ts. Any additional-training record must
 * independently satisfy every required field from the About Step 2 prompt's "Required fields"
 * list (title, issuer, scope, learner-relevant context) or it is silently omitted -- never
 * rendered as an incomplete card, a "verification pending" placeholder, or an empty section.
 */
export function isPublishableCredential(credential: PublicCredential): boolean {
  if (credential.category !== "additional-training") return true;
  if (!credential.label.trim() || !credential.context.trim() || !credential.issuedBy?.trim()) return false;
  if (!credential.programmeScope || credential.programmeScope.length === 0) return false;
  return true;
}

/**
 * The only two publishable records at this step. IDP-Certified IELTS Trainer and Corporate
 * Trainer are deliberately NOT included here -- per docs/about-credentials-verification.md,
 * neither has a complete evidence record (exact issued title, issuer, owner-approved public
 * wording, scope), and `isPublishableCredential()` would reject either even if someone appended
 * them without that evidence. Adding a genuinely verified record later means appending one
 * complete `additional-training` entry here -- never editing the gating logic to let an
 * incomplete one through.
 */
export const publicCredentials: PublicCredential[] = [
  {
    id: "academic-qualification",
    category: "academic-qualification",
    label: site.qualification,
    context:
      "Reflects advanced academic study of texts, language and interpretation, and informs how Aisha explains language, reading and writing to learners.",
    evidenceStatus: "owner-confirmed",
  },
  {
    id: "professional-role",
    category: "professional-role",
    label: site.professionalRole,
    context:
      "Aisha currently teaches in a college setting, which keeps her connected to classroom teaching and academic standards alongside her online coaching.",
    evidenceStatus: "owner-confirmed",
  },
];

export const aboutContent = {
  hero: {
    id: "about-hero",
    eyebrow: "About Aisha",
    heading: "Meet Aisha, your online English teacher",
    // Deliberately avoids "for years", "every kind of background", or any invented duration --
    // see the "Current-page audit" section of the About Step 1 prompt this replaces.
    body: `Aisha holds an ${site.qualification} and works as a ${site.professionalRole}. Through ${site.brandName}, she helps learners explore focused online support for recognised English tests, spoken communication and written English.`,
    portrait: {
      // Swapped to the newer supplied portrait (About hero image update). Actual file measures
      // 490x468 (near-square, ~1.05:1) -- verified directly with sharp before implementation.
      // components/about/AboutHero.tsx's container uses `aspect-square` (not the original
      // aspect-[3/4], which forced a ~1.3x crop/zoom against this near-square source and read as
      // an over-zoomed close-up) -- see that component's own comment for the fix. See
      // public/images/README.md for the recorded dimensions and
      // docs/about-credentials-verification.md's portrait section for the full history.
      src: "/images/about-aisha.jpeg",
      alt: `${site.founder}, English teacher and ${site.professionalRole}`,
      width: 490,
      height: 468,
    },
    primaryCta: { label: "Explore English Programmes", href: "/courses" },
    secondaryCta: {
      label: "Ask Aisha a Question",
      message:
        "Hi Aisha! I have a question about your teaching and which English programme may suit me. My question is:",
    },
  },

  // About Step 2: replaces Step 1's flat authorityFacts pill row with a proper category
  // hierarchy -- see `publicCredentials` above for the actual data and
  // components/about/AboutCredentials.tsx for the rendering. "Online English tutoring" and
  // site.city are operational/location facts, not credentials, so they're kept as plain prose
  // (`otherConfirmedFacts` below) rather than a third card -- avoids the Step 2 prompt's explicit
  // "do not flatten [credential categories] into one badge row" concern by never mixing an
  // operational fact into the credential grid in the first place.
  credentialsSection: {
    id: "about-credentials",
    eyebrow: "Verified facts",
    heading: "Academic background and professional role",
    otherConfirmedFacts: `Aisha also teaches online and is currently based in ${site.city}.`,
    // Restrained trust explanation from the About Step 2 prompt -- not a bureaucratic disclaimer
    // wall, and never implies independent/third-party verification.
    trustNote:
      "These are the qualification and professional-role details currently confirmed for public use. Programme pages explain the specific support offered for each goal.",
  },

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
