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

/** One curriculum skill (components/ielts/IELTSSkillsCurriculum.tsx). Only Writing has a
 *  version-distinction breakdown and a weighting note; only Reading has a version note — declared
 *  as a shared, explicitly-optional shape rather than letting `as const` below infer four
 *  differently-shaped literal types, which would make a single `.map()` over them a type error. */
type IeltsSkill = {
  id: "listening" | "reading" | "writing" | "speaking";
  heading: string;
  intro: string;
  points: string[];
  note?: string;
  versionDistinction?: { label: string; body: string }[];
  assessmentNote?: string;
  weightingNote?: string;
};

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

  scoreProfile: {
    eyebrow: "Know the complete requirement",
    heading: "Your overall target may include minimum scores in each skill.",
    body: "IELTS reports Listening, Reading, Writing and Speaking separately alongside the overall band. Preparation should begin with the exact score combination required by the organisation receiving the result.",
    detailsHeading: "Bring these four details",
    requiredDetails: [
      "Academic or General Training",
      "Required overall and component scores",
      "Previous section scores or current starting point",
      "Test, application or submission deadline",
    ],
    observations: [
      {
        id: "hidden-gaps",
        title: "One overall score can hide different skill gaps",
        body: "A candidate may need different preparation priorities in Listening, Reading, Writing and Speaking.",
      },
      {
        id: "criterion-feedback",
        title: "Writing and Speaking need criterion-based feedback",
        body: "Practice is more useful when feedback identifies the specific assessment area limiting the response.",
      },
      {
        id: "review-not-repetition",
        title: "Test practice needs review, not repetition alone",
        body: "Timed work should be followed by error analysis so the next practice task targets a known problem.",
      },
    ],
    contextualLinkLabel: "Share your IELTS score profile with Aisha",
  },

  curriculum: {
    eyebrow: "Programme focus",
    heading: "Prepare each skill for the way it is tested and assessed.",
    body: "The preparation plan combines language development, task strategy, timed practice and review. The emphasis changes according to the candidate's test version, score profile and deadline.",
    versionNote: {
      heading: "Academic and General Training share two skills and differ in two.",
      body: "Listening and Speaking are the same in both versions. Reading and Writing differ, so those materials and tasks must match the test the candidate has been asked to take.",
    },
    skills: [
      {
        id: "listening",
        heading: "Listening",
        intro: "Build accurate listening under test conditions rather than relying on repeated practice alone.",
        points: [
          "Understanding what each question is asking",
          "Following main ideas, detail and changes in speaker direction",
          "Anticipating the type of information needed without guessing the answer",
          "Maintaining attention and recording answers accurately",
          "Reviewing incorrect answers to identify recurring listening or task-handling problems",
          "Moving from guided practice to timed sets",
        ],
      },
      {
        id: "reading",
        heading: "Reading",
        intro: "Develop efficient reading and evidence-based answer selection for the candidate's Academic or General Training version.",
        points: [
          "Recognising the demand of common question types",
          "Locating specific information without losing the wider meaning",
          "Identifying main ideas, argument and writer position where relevant",
          "Distinguishing evidence in the text from assumptions",
          "Managing time across the section",
          "Analysing wrong answers and repeated question-type weaknesses",
        ],
        note: "Academic and General Training Reading use different texts, so practice is matched to the candidate's test version.",
      },
      {
        id: "writing",
        heading: "Writing",
        intro: "Learn to respond fully, organise ideas clearly and improve language control through written practice and feedback.",
        points: [
          "Analysing the task before planning",
          "Selecting relevant information or ideas",
          "Building a clear purpose, overview or position as the task requires",
          "Organising paragraphs and progression",
          "Using vocabulary accurately and appropriately",
          "Improving grammatical range, accuracy and editing",
          "Completing and reviewing timed responses",
        ],
        versionDistinction: [
          {
            label: "Academic Task 1",
            body: "Describing and summarising visual information such as graphs, tables, charts or diagrams.",
          },
          {
            label: "General Training Task 1",
            body: "Writing an appropriate letter in response to a situation.",
          },
          {
            label: "Task 2",
            body: "Developing a relevant essay response to a point of view, argument or problem.",
          },
        ],
        assessmentNote:
          "Writing feedback is organised around task achievement or response, coherence and cohesion, lexical resource, and grammatical range and accuracy.",
        weightingNote:
          "Task 2 carries more weight than Task 1 in the Writing score, so preparation and timed practice should reflect that.",
      },
      {
        id: "speaking",
        heading: "Speaking",
        intro: "Develop relevant, extended and understandable responses across the three parts of the Speaking test.",
        points: [
          "Responding directly and developing answers naturally",
          "Organising longer responses without memorised speeches",
          "Improving fluency while maintaining coherence",
          "Expanding vocabulary with attention to accuracy and appropriacy",
          "Using a wider range of grammatical structures with control",
          "Improving pronunciation, stress and intonation for intelligibility",
          "Practising follow-up discussion under realistic timing",
        ],
        assessmentNote:
          "Speaking feedback is organised around fluency and coherence, lexical resource, grammatical range and accuracy, and pronunciation.",
      },
    ] as IeltsSkill[],
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
