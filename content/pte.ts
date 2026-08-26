/**
 * PTE-page-specific copy (PTE Step 1). Canonical programme identity — slug, public name, route —
 * stays in content/courses.ts; this file only holds the sales/positioning copy that doesn't
 * belong on the generic Course object. Aisha's qualification and professional role are NOT
 * duplicated here — components read those directly from content/site.ts.
 *
 * Later PTE steps add more sections (task curriculum, evidence, learning format, pricing,
 * availability design, FAQ) once their content is verified against an official Pearson source or
 * approved by Aisha — do not pre-fill those with placeholder content.
 */

type PteFitItem = {
  title: string;
  body: string;
};

export const ptePage = {
  hero: {
    eyebrow: "Online PTE Academic preparation",
    heading: "Prepare for the PTE Academic score your next step requires.",
    body: "Build familiarity with the current task types, practise under timed computer-based conditions and strengthen the speaking, writing, reading and listening skills behind your required score.",
    contextLine:
      "For study, professional or migration requirements—after confirming the exact PTE test and score accepted by the receiving organisation.",
    primaryCta: {
      label: "Ask About PTE Academic Coaching",
      message:
        "Hi Aisha! I am preparing for PTE Academic. I have confirmed that my receiving organisation accepts [exact PTE test], my required score is [overall and any skill requirements], my previous PTE score or current level is [details], my test or application deadline is [date], and my country/time zone is [details]. Could you advise me about the suitable preparation option and confirm the current format, fee and availability?",
    },
    secondaryCta: {
      label: "Check Whether This Programme Fits",
      href: "#pte-fit",
    },
    reassurance:
      "No score, admission or visa guarantee. The preparation plan depends on the candidate's starting point, required score and available time.",
  },

  fit: {
    id: "pte-fit",
    eyebrow: "Start with the exact requirement",
    heading: "Confirm the PTE test your organisation accepts before choosing preparation.",
    body: "Pearson offers different PTE tests for different purposes. Check the exact test name, required score and deadline with the university, visa route, employer or professional body receiving your result.",
    items: [
      {
        title: "Study applicants",
        body: "For candidates whose university or education provider has confirmed that it accepts PTE Academic and has supplied the required score.",
      },
      {
        title: "Professional or migration applicants",
        body: "For candidates whose specific professional body or migration route has confirmed PTE Academic or PTE Academic UKVI as the required test.",
      },
      {
        title: "Retakers with a score report",
        body: "Bring the previous overall and skill scores so preparation can focus on the language and task areas limiting the result.",
      },
      {
        title: "First-time PTE Academic candidates",
        body: "Share the confirmed score requirement, current English experience and preparation time so Aisha can recommend the next assessment or study step.",
      },
    ] as PteFitItem[],
    versionNote:
      "PTE Core and PTE Home are different tests. If your requirement is for Canadian immigration, a UK visa or another specific route, confirm the exact test name before paying for preparation.",
    // Only rendered if /courses#language-tests currently exists and works — see PTEFit.tsx.
    compareLink: {
      label: "Compare IELTS, PTE and TOEFL preparation",
      href: "/courses#language-tests",
    },
  },

  // PTE Step 1: no confirmed PTE intake exists yet (content/batches.ts). The shared BatchTable's
  // own generic fallback message doesn't request the exact test/score/deadline this programme
  // needs, so this overrides it — see components/BatchTable.tsx's optional `fallbackMessage` prop.
  availability: {
    id: "pte-availability",
    heading: "Current PTE Academic availability",
    fallbackMessage:
      "Hi Aisha! I'd like to ask about current PTE Academic availability. My exact PTE test, required score, test or application deadline, country/time zone and usual availability are: [details].",
  },

  // PTE Step 1: a single strong WhatsApp action only — the configured-form/email dual-path
  // DiagnosticForm.tsx supports for IELTS (Step 9) needs its own dedicated PTE enquiry-handoff
  // step (its own field labels, success copy and submission subject), not a Step-1 addition.
  finalCta: {
    id: "pte-enquiry",
    eyebrow: "Your PTE next step",
    heading: "Share your exact PTE requirement and deadline.",
    body: "Include the test name, required score, previous result or current level, test or application deadline, country or time zone and usual availability.",
    primaryLabel: "Discuss PTE Academic Coaching on WhatsApp",
  },
} as const;
