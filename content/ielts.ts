/**
 * IELTS-page-specific copy (IELTS Step 1). Canonical programme identity — slug, public name,
 * route — stays in content/courses.ts; this file only holds the sales/positioning copy that
 * doesn't belong on the generic Course object. Aisha's qualification and professional role are
 * NOT duplicated here — components read those directly from content/site.ts.
 *
 * Later IELTS steps add more sections (four-skill curriculum, evidence, pricing, FAQ) once their
 * content is verified against an authoritative source or approved by Aisha — do not pre-fill
 * those with placeholder content.
 */
export const ieltsPage = {
  hero: {
    eyebrow: "Live online IELTS preparation",
    heading: "Prepare for the IELTS score your next step requires.",
    body: "Structured preparation for Academic and General Training candidates who need clearer test strategy, timed practice and specific feedback on writing and speaking.",
    contextLine:
      "For study, migration or professional requirements—after confirming the test and score accepted by the receiving organisation.",
    primaryCta: {
      label: "Ask About IELTS Coaching",
      message:
        "Hi Aisha! I am preparing for IELTS. I need [Academic or General Training], my required overall and component scores are [scores], my previous score or current level is [details], and my test or application deadline is [date]. Could you advise me about the suitable preparation option?",
    },
    secondaryCta: {
      label: "See What the Programme Covers",
      href: "#ielts-fit",
    },
    reassurance:
      "No score guarantee. The preparation plan depends on the candidate's starting point, target and available time.",
  },

  fit: {
    id: "ielts-fit",
    eyebrow: "Is this the right starting point?",
    heading: "IELTS preparation should begin with the exact requirement.",
    body: "Before choosing a course, confirm the test type, required overall and component scores, and deadline set by the organisation receiving your result.",
    items: [
      {
        title: "Academic IELTS candidates",
        body: "For candidates whose university, professional body or other receiving organisation specifically requires Academic IELTS.",
      },
      {
        title: "General Training candidates",
        body: "For candidates whose confirmed migration, work or other route requires General Training IELTS.",
      },
      {
        title: "Retakers with a score report",
        body: "Bring the previous overall and component scores so preparation can focus on the skills limiting the result.",
      },
      {
        title: "First-time candidates",
        body: "Share the required score, current English experience and available preparation time so Aisha can recommend the next assessment or study step.",
      },
    ],
    alternativeNote:
      "Not certain that IELTS is required? Confirm the accepted tests with the receiving organisation before paying for preparation.",
    compareLink: {
      label: "Compare all test-preparation programmes",
      href: "/courses#language-tests",
    },
  },

  finalCta: {
    eyebrow: "Your IELTS next step",
    heading: "Share your target score and deadline.",
    body: "Include the test type, required overall and component scores, previous result or current level, and the time available for preparation.",
    primaryLabel: "Ask About IELTS Coaching",
    secondaryLabel: "View Current IELTS Availability",
    secondaryHref: "#ielts-availability",
  },
} as const;

/** Owner-confirmed IELTS-specific credential shown in the authority strip, alongside the
 *  canonical qualification/role from content/site.ts. Set to null and omit from the strip if
 *  this ever becomes unverifiable rather than replacing it with an unsupported claim. */
export const ieltsCredential = "IDP-Certified IELTS Trainer" as const;
