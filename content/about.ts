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
 * Step 1 was a positioning and information-architecture step. Step 2 added a typed, fail-closed
 * public-credential model (`PublicCredential`/`publicCredentials`/`isPublishableCredential`) so the
 * academic-qualification/professional-role/additional-training hierarchy is enforced in code, not
 * just in prose -- an incomplete or unapproved additional-training record can never render, no
 * matter what gets added to the array later.
 *
 * Step 3 replaces Step 1's temporary three-item `teachingPrinciples` preview with a concrete,
 * five-part adaptable method (`teachingApproach.principles`) plus three goal-specific application
 * examples (`teachingApproach.goalApplications`) -- derived from stable patterns already
 * established across the reviewed programme pages (starting-point clarification, priority
 * selection, purposeful practice, focused review), never invented personal beliefs or
 * autobiographical claims. See docs/about-teaching-approach-verification.md for the evidence basis
 * and philosophy-versus-operational-inclusion classification behind every principle below.
 *
 * Step 4 replaces Step 1's brief `introduction` with `professionalStory`: a concise current-context
 * narrative plus up to three professional-context blocks and an (currently empty) evidenced-
 * milestone timeline. No teaching-start date, institution name, brand-launch date, learner count
 * or personal-motivation quote is invented -- see docs/about-professional-experience-verification.md
 * for the initial status of every such claim and docs/about-professional-story-intake.md for what
 * Aisha would need to supply before any of them could be published.
 *
 * Social proof, enquiry-design, SEO, and accessibility/performance hardening remain later
 * About-page steps.
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

// --- Professional story model (About Step 4) ------------------------------------------------
//
// `links` is optional and only used by the "different-goals" context, as a short linked summary
// rather than a repeat of Step 1's full route cards. `VerifiedMilestone` exists so a future,
// genuinely evidenced timeline has somewhere typed to live -- `professionalStory.milestones`
// stays an empty array until at least two qualify (see the Step 4 prompt's "Timeline decision"),
// and components/about/AboutProfessionalStory.tsx renders no timeline container at all while it
// is empty.
export type ProfessionalContext = {
  id: "college-teaching" | "online-tutoring" | "different-goals";
  title: string;
  description: string;
  links?: readonly { label: string; href: string }[];
};

export type VerifiedMilestone = {
  id: string;
  date: string;
  label: string;
  description: string;
};

// --- Teaching approach model (About Step 3) -------------------------------------------------
//
// `boundary` is optional: only principles whose source guidance names an explicit limit (see
// docs/about-teaching-approach-verification.md) carry one. Philosophy/pedagogy statements never
// promise an operational inclusion (live delivery, recordings, feedback frequency, homework,
// number of attempts) -- those remain programme-page-specific per the About Step 3 prompt's
// "Teaching principles versus course inclusions" distinction.
export type TeachingPrinciple = {
  id: string;
  step: string;
  title: string;
  explanation: string;
  boundary?: string;
};

export type GoalApplication = {
  id: "test-preparation" | "spoken-communication" | "written-english";
  title: string;
  description: string;
  href: string;
  linkLabel: string;
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

  // About Step 4: deepens (does not duplicate) Step 1's brief introduction into a proper
  // professional-story section -- current confirmed context first, never an invented chronology.
  // No teaching-start date, college name, brand-launch date, learner count or personal-motivation
  // quote is stated anywhere below -- none is verified (see
  // docs/about-professional-experience-verification.md's initial-status table and
  // docs/about-professional-story-intake.md for exactly what Aisha would need to supply before any
  // of those could ever be published).
  professionalStory: {
    id: "about-professional-story",
    eyebrow: "Professional context",
    heading: "Teaching English across different learner goals",
    narrative: `Aisha's current professional work includes teaching as a ${site.professionalRole} and offering online English tutoring through ${site.brandName}. Her ${site.qualification} provides an academic foundation for close reading, interpretation and language-focused explanation. On this website, learners can explore separate routes for recognised English tests, spoken communication and written English, because each goal requires different priorities.`,
    contexts: [
      {
        id: "college-teaching",
        title: "College teaching",
        // No institution name, department, tenure or duration -- none is approved for public use.
        description: `College teaching keeps Aisha engaged with learners in an academic environment while she also supports online enquiries through ${site.brandName}.`,
      },
      {
        id: "online-tutoring",
        title: "Online English tutoring",
        // Deliberately does not say sessions are live, name a platform, claim recordings, or
        // promise a response time -- none of that is verified at the site-wide level.
        description: `${site.brandName} provides an online starting point for learners to explore goal-specific English support and confirm the current option directly.`,
      },
      {
        id: "different-goals",
        title: "Different English goals",
        // Describes the routes as current service breadth, never as proof of experience duration
        // -- see docs/about-professional-experience-verification.md's "Biography versus service
        // scope" note. A short linked summary, not a repeat of Step 1's full route cards.
        description:
          "The website separates test preparation, spoken communication and writing because the task, learner profile and useful practice differ across those goals.",
        links: [
          { label: "Test preparation", href: "/courses#language-tests" },
          { label: "Spoken English", href: "/courses/spoken-english" },
          { label: "English Writing", href: "/courses/english-writing" },
        ],
      },
    ] as ProfessionalContext[],
    // Empty until at least two milestones have verified dates, approved exact public wording, and
    // genuine relevance to a learner's decision -- see the Step 4 prompt's "Timeline decision".
    // components/about/AboutProfessionalStory.tsx renders no timeline container at all while this
    // stays empty -- never a "Present" card, an estimated date, or a single-item timeline.
    milestones: [] as VerifiedMilestone[],
  },

  expertiseRoutes: {
    id: "about-expertise-routes",
    eyebrow: "Where to start",
    heading: "What you can explore with Aisha",
    intro:
      `${site.brandName} covers three broad routes. Each programme page below remains the current, authoritative source for its own format, fee and availability -- this page only helps you find the right one.`,
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

  // About Step 3: replaces the temporary three-item `teachingPrinciples` preview with a concrete,
  // adaptable five-part method plus three goal-specific application examples. No branded/
  // proprietary method name, no personal first-person belief statement without approval (see
  // docs/about-teaching-approach-verification.md), and no principle promises an operational
  // inclusion -- every `boundary` field exists precisely to keep philosophy separate from what
  // only a programme page can verify.
  teachingApproach: {
    id: "about-teaching-approach",
    eyebrow: "How Aisha teaches",
    heading: "A teaching approach built around the learner's real goal",
    intro:
      "Different goals require different priorities. An exam candidate, a learner preparing for a workplace conversation and someone developing written English should not all receive the same plan. The approach begins by clarifying the real requirement, then selecting manageable priorities and practice appropriate to that context.",
    principles: [
      {
        id: "clarify-requirement",
        step: "1",
        title: "Clarify the real requirement",
        explanation:
          "Begin with the situation the learner is preparing for, not a generic promise to “improve English” -- the exam, communication situation or writing need, and the intended reader, listener, task and timeline where relevant.",
        boundary:
          "This is not a formal diagnostic, certified placement or guaranteed recommendation, and does not involve assessing medical, speech-language or learning conditions.",
      },
      {
        id: "manageable-priorities",
        step: "2",
        title: "Identify manageable priorities",
        explanation:
          "Focus on the areas most relevant to the learner's current goal and starting point, rather than presenting every possible weakness at once.",
        boundary:
          "A personalised plan is described here as a pedagogical principle, not a promised inclusion -- programme pages confirm what a specific option actually includes.",
      },
      {
        id: "explain-reason",
        step: "3",
        title: "Explain the reason, not only the rule",
        explanation:
          "Explanations connect the language choice or task strategy to its purpose, so the learner understands why it works and what to notice next time -- not a claim that grammar or rules are unimportant.",
      },
      {
        id: "purposeful-practice",
        step: "4",
        title: "Use purposeful practice",
        explanation:
          "Practice should have a clear purpose -- such as applying a task strategy, developing a response or revising a piece of language -- not simply completing more exercises.",
        boundary:
          "The number, duration and format of tasks aren't promised here -- homework, mock tests, recordings and live practice remain programme-specific inclusions confirmed on each programme page.",
      },
      {
        id: "review-next-priority",
        step: "5",
        title: "Review, revise and choose the next priority",
        explanation:
          "When review is part of the current option, it helps the learner understand one manageable next change -- not just receive a list of corrections.",
        boundary:
          "Feedback availability, method, frequency and turnaround are confirmed per programme -- not every task receives detailed personal feedback, and no result or score improvement is guaranteed.",
      },
    ] as TeachingPrinciple[],
    // Conceptual only -- not a promise that every lesson follows five identical stages. Rendered
    // as a decorative, aria-hidden connector on wider screens; the semantic <ol> above already
    // carries the real sequence for assistive technology.
    flow: ["Goal/context", "Priorities", "Explanation", "Purposeful attempt", "Review/next step"],
    flowBoundary:
      "This describes the teaching logic, not a fixed package. The exact activities, delivery format, practice and feedback arrangement depend on the current programme option and should be confirmed before enrolment.",
    goalApplicationsHeading: "Different goals, different priorities",
    goalApplications: [
      {
        id: "test-preparation",
        title: "Test preparation",
        description:
          "Confirm the exact test and requirement, understand the relevant task demands, identify current performance priorities and use appropriate practice.",
        href: "/courses#language-tests",
        linkLabel: "Explore test-preparation programmes",
      },
      {
        id: "spoken-communication",
        title: "Spoken communication",
        description:
          "Start with the real speaking situation, listener and communication task, then identify priorities such as response development, intelligibility or interaction where relevant.",
        href: "/courses/spoken-english",
        linkLabel: "Explore Spoken English Coaching",
      },
      {
        id: "written-english",
        title: "Written English",
        description:
          "Clarify the type of writing, reader and purpose, then focus on relevant areas such as sentence clarity, organisation, tone or revision.",
        href: "/courses/english-writing",
        linkLabel: "Explore English Writing",
      },
    ] as GoalApplication[],
    // About Step 3 corrected app/how-it-works/page.tsx's misleading "Everything that comes with
    // each course" heading and two standing-offer/universal-delivery items (live sessions,
    // consultations) -- see that file's own comments -- so this link is now safe to feature.
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

  // About Step 5: section copy only -- the actual eligible-entry data lives in
  // content/testimonials.ts's `aboutTestimonials` (consent-confirmed AND explicitly
  // `aboutFeatured`). components/about/AboutVerifiedEvidence.tsx renders none of this at all
  // (no heading, no intro, no divider) while that array is empty -- see
  // docs/about-evidence-verification.md for the current eligible count.
  verifiedEvidence: {
    id: "about-verified-evidence",
    eyebrow: "Shared experiences",
    heading: "Experiences shared with permission",
    intro:
      "These comments are shown in the wording and identity format approved for publication. Individual experiences do not guarantee the same result for another learner.",
    successStoriesLink: { label: "Read more learner and parent experiences", href: "/success-stories" },
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
