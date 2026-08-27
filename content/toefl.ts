/**
 * TOEFL-page-specific copy (TOEFL Step 1). Canonical programme identity — slug, public name,
 * route — stays in content/courses.ts; this file only holds the sales/positioning copy that
 * doesn't belong on the generic Course object. Aisha's qualification and professional role are
 * NOT duplicated here — components read those directly from content/site.ts.
 *
 * Facts about the current TOEFL iBT test (format, task families, score scale) are verified
 * against official ETS sources — see docs/toefl-content-sources.md for the full URL/claim mapping
 * and the recheck-after-format-update requirement. Do not add a format, scoring or task claim here
 * without adding its source to that document first.
 *
 * Later TOEFL steps add more sections (detailed score profile, full four-skill curriculum,
 * coaching process, evidence, learning format, pricing, dedicated availability, FAQ) once their
 * content is verified against an official ETS source or approved by Aisha — do not pre-fill those
 * with placeholder content.
 */

type ToeflFitItem = {
  title: string;
  body: string;
};

export const toeflPage = {
  // "YYYY-MM-DD" -- when the format/scoring facts below were last checked against ETS's official
  // current-format pages. See docs/toefl-content-sources.md for the full per-claim URL mapping and
  // the recheck-after-format-update requirement.
  sourceVerifiedAt: "2026-08-27",

  hero: {
    eyebrow: "Online TOEFL iBT preparation",
    heading: "Prepare for the TOEFL iBT score your next step requires.",
    body: "Strengthen the reading, listening, writing and speaking skills used in the current test, understand the updated task demands and build reliable computer-test routines around your confirmed score requirement.",
    contextLine:
      "For candidates whose institution or programme has confirmed TOEFL iBT and supplied the required overall and any section scores.",
    primaryCta: {
      label: "Ask About TOEFL iBT Coaching",
      message:
        "Hi Aisha! I am preparing for TOEFL iBT. My institution or programme is [name], it requires [overall and any section scores] on the [1–6 or 0–120] scale, my test date or application deadline is [date], my previous TOEFL result or current starting point is [details], and my country/time zone is [details]. Could you advise me about the suitable preparation option and confirm the current format, fee and availability?",
    },
    secondaryCta: {
      label: "Check Whether This Programme Fits",
      href: "#toefl-fit",
    },
    reassurance:
      "No score or admission guarantee. Preparation depends on the candidate's starting point, confirmed requirement and available time.",
  },

  fit: {
    id: "toefl-fit",
    eyebrow: "Start with the written requirement",
    heading: "Confirm the TOEFL test and score scale your institution accepts.",
    body: "Check the exact test product, overall score, any section minimums and deadline with the institution or programme receiving your result. Bring that written requirement when asking about preparation.",
    items: [
      {
        title: "Applicants with a confirmed TOEFL iBT requirement",
        body: "For candidates whose institution or programme has explicitly confirmed TOEFL iBT and supplied the required overall and any section scores.",
      },
      {
        title: "Candidates using the current 1–6 scale",
        body: "Share the institution's exact requirement in the current scale, including any separate Reading, Listening, Writing or Speaking minimums.",
      },
      {
        title: "Candidates whose guidance still mentions 0–120",
        body: "Ask the institution how its published requirement applies to tests taken on or after 21 January 2026 rather than relying on an unofficial conversion.",
      },
      {
        title: "Retakers and first-time candidates",
        body: "Retakers should share their previous report; first-time candidates should share their current English experience, test date and preparation time.",
      },
    ] as ToeflFitItem[],
    // Verified against docs/toefl-content-sources.md's score-scale-update record -- see that file
    // for the exact ETS pages and quoted sentences this note is built from.
    currentFormatNote:
      "TOEFL iBT changed on 21 January 2026. Current score reports use the 1–6 scale, while ETS also provides a comparable overall 0–120 score during a two-year transition. Follow the exact requirement supplied by your institution.",
    currentFormatSourceLink: {
      label: "Read ETS's current TOEFL iBT score guidance",
      href: "https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html",
    },
    productNote:
      "TOEFL Essentials and TOEFL ITP are different assessments. Confirm that your requirement is specifically TOEFL iBT before paying for preparation.",
    // Only rendered if /courses#language-tests currently exists and works — see TOEFLFit.tsx.
    compareLink: {
      label: "Compare IELTS, PTE and TOEFL preparation",
      href: "/courses#language-tests",
    },
  },

  // TOEFL Step 1: a temporary current-format preview only -- corrects the pre-2026 module labels
  // that previously rendered on this page. Deliberately omits exact item counts, timing, adaptive
  // mechanics and score weights, none of which are published here without a later step's fuller
  // sourcing. See docs/toefl-content-sources.md for the official basis of each task family named
  // below (ETS's current TOEFL iBT content-and-structure pages, checked 27 August 2026).
  curriculumPreview: {
    eyebrow: "Current TOEFL iBT preparation",
    heading: "Prepare for the current four-skill task families.",
    body: "TOEFL iBT changed on 21 January 2026. This preview reflects the current task families rather than the older independent/integrated Writing and Speaking structure.",
    items: [
      "Reading across current academic and everyday text tasks",
      "Listening across responses, conversations, announcements and academic talks",
      "Writing through sentence building, email and academic-discussion tasks",
      "Speaking through listen-and-repeat and interview-style tasks",
      "Timing, attention and computer-test routines",
    ],
    footnote:
      "This preview reflects the current TOEFL iBT task families, verified against official ETS pages on 27 August 2026. A full task-by-task curriculum with complete sourcing is a later step.",
  },

  // TOEFL Step 1: no confirmed TOEFL intake exists yet (content/batches.ts). The shared
  // BatchTable's own generic fallback message doesn't request the exact institution/score/scale
  // this programme needs, so this overrides it — see components/BatchTable.tsx's optional
  // `fallbackMessage` prop. A dedicated TOEFLAvailability component (mirroring IELTS/PTE Step 7)
  // is a later step.
  availability: {
    id: "toefl-availability",
    sectionHeading: "Current TOEFL availability",
    enquiryHeading: "Ask about the next suitable TOEFL start.",
    enquiryBody:
      "Share your confirmed TOEFL iBT requirement, test or application deadline, country/time zone and usual availability so Aisha can confirm whether a suitable option is currently available.",
    fallbackMessage:
      "Hi Aisha! I would like to ask about current TOEFL iBT availability. My institution/programme is [name], the required overall and section scores are [details] on the [1–6 or 0–120] scale, my test/application deadline is [date], my country/time zone is [details], and the days or times that usually suit me are [details].",
  },

  // TOEFL Step 1: a single strong WhatsApp action only — the configured-form/email dual-path
  // DiagnosticForm.tsx supports for IELTS and PTE needs its own dedicated TOEFL enquiry-handoff
  // step (its own field labels, success copy and submission subject, plus a safe fixed
  // lib/enquiryQuery.ts allowlist entry), not a Step-1 addition.
  finalCta: {
    id: "toefl-enquiry",
    eyebrow: "Your TOEFL next step",
    heading: "Share your exact TOEFL iBT requirement and deadline.",
    body: "Include the institution or programme, required overall and section scores, score scale, previous result or current starting point, test/application deadline and country or time zone.",
    primaryLabel: "Discuss TOEFL iBT Coaching on WhatsApp",
  },
} as const;
