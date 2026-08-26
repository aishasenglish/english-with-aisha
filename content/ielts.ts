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

/** One stage in the four-stage coaching cycle (components/ielts/IELTSCoachingProcess.tsx). */
type IeltsProcessStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  result: string;
};

/** One of the two skill-group feedback blocks (productive vs. receptive skills). */
type IeltsFeedbackArea = {
  id: string;
  title: string;
  body: string;
};

/** One tutor-diagnosis point in the illustrative feedback demonstration
 *  (components/ielts/IELTSFeedbackDemo.tsx). */
type IeltsFeedbackPoint = {
  id: string;
  label: string;
  body: string;
};

/** One stable, already-approved (Steps 2-4) learning-experience item — never an unverified
 *  frequency or quantity claim (components/ielts/IELTSLearningFormat.tsx). */
type IeltsLearningSupport = {
  id: string;
  title: string;
  body: string;
};

/** One operational detail a candidate should confirm before paying. This is a question to ask,
 *  never an inclusion — see docs/ielts-offer-verification.md for why each one is still unconfirmed
 *  (components/ielts/IELTSLearningFormat.tsx). */
type IeltsEnrolmentDetail = {
  id: string;
  label: string;
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

  process: {
    id: "ielts-coaching-process",
    eyebrow: "How the coaching works",
    heading: "Turn practice into a clear next improvement.",
    introduction:
      "Practice is most useful when you know what went wrong, why it affected the response and what to change next. Coaching follows a focused cycle rather than repeating complete tests without analysis.",
    steps: [
      {
        id: "requirement",
        number: "01",
        title: "Establish the requirement and starting point",
        body: "Begin with the test type, required overall and component scores, previous results or current performance, and the available preparation time. This keeps the plan connected to the candidate's actual requirement.",
        result: "Result: a defined score profile and first priority.",
      },
      {
        id: "method",
        number: "02",
        title: "Learn the decision behind the task",
        body: "A lesson focuses on a specific demand: how to interpret a question, select information, organise a response, manage attention or use time more deliberately. The method is explained before the candidate is asked to repeat it independently.",
        result: "Result: a method the candidate can explain and apply.",
      },
      {
        id: "practice",
        number: "03",
        title: "Practise with a clear purpose",
        body: "Apply the lesson through a focused task, then introduce realistic timing when the skill is ready. Practice should reveal whether the method holds under test conditions—not simply add another completed paper.",
        result: "Result: observable performance to review.",
      },
      {
        id: "apply-feedback",
        number: "04",
        title: "Use feedback in the next attempt",
        body: "Review what is working, identify the error or weakness with the greatest impact, and apply one or two priorities to the next response. The next attempt shows whether the change is becoming repeatable.",
        result: "Result: a specific next action rather than a vague instruction to practise more.",
      },
    ] as IeltsProcessStep[],
    feedbackHeading: "Feedback changes by skill.",
    feedbackIntroduction:
      "Writing and Speaking need qualitative feedback on the response. Listening and Reading need careful review of the decisions and error patterns behind incorrect answers.",
    feedbackAreas: [
      {
        id: "productive",
        title: "For productive skills",
        body: "Writing and Speaking feedback should identify strengths, the most important limitations and a manageable next priority. It can be connected to the relevant assessment criteria without presenting a tutor's judgement as an official IELTS result.",
      },
      {
        id: "receptive",
        title: "For receptive skills",
        body: "Listening and Reading review should go beyond the answer key. Candidates examine whether an error came from vocabulary, misunderstanding the question, missing evidence, losing attention, transferring an answer incorrectly or using time poorly.",
      },
    ] as IeltsFeedbackArea[],
    expectation:
      "Progress depends on your starting point, target, preparation time and consistent use of feedback; no band score can be guaranteed.",
  },

  // An original, explicitly-illustrative example created for this website — never a testimonial,
  // never attributed to a real learner, and never given a band estimate (a single sentence can't
  // responsibly demonstrate an official Writing band). See IELTS Step 4 for the full rationale.
  feedbackDemo: {
    id: "ielts-feedback-example",
    eyebrow: "An illustrative feedback example",
    heading: "See how one vague sentence becomes a clearer argument.",
    introduction:
      "Useful feedback identifies the problem, explains its effect and gives the learner a manageable next action.",
    disclosure:
      "This short example was created for this website. It is not student work, a complete IELTS response, an official IELTS task or a band-score prediction.",
    contextLabel: "Illustrative Task 2 opening sentence",
    firstAttemptLabel: "First attempt",
    firstAttempt: "Nowadays cars are a big problem and governments should do something about it.",
    diagnosisHeading: "Tutor diagnosis",
    feedbackPoints: [
      {
        id: "position",
        label: "Position",
        body: "“Do something” does not show what response the writer supports.",
      },
      {
        id: "precision",
        label: "Precision",
        body: "“A big problem” does not identify the specific effects of private-car use.",
      },
      {
        id: "development",
        label: "Development",
        body: "The relationship between the problem and the proposed action is not yet clear.",
      },
    ] as IeltsFeedbackPoint[],
    nextActionLabel: "Next revision priority",
    nextAction: "Name the specific urban problems and state the action the argument will support.",
    revisionLabel: "Revised attempt",
    revisedAttempt:
      "Heavy reliance on private cars increases urban congestion and air pollution; governments should therefore improve public transport and reduce unnecessary car journeys.",
    improvementHeading: "What changed",
    improvements: [
      "The problem is specific: congestion and air pollution.",
      "The proposed response is explicit: improve public transport and reduce unnecessary journeys.",
      "The cause, effect and position now form one connected argument.",
    ],
  },

  // Heading copy for components/ielts/IELTSVerifiedEvidence.tsx — only ever rendered when at
  // least one IELTS-tagged, consent-confirmed content/testimonials.ts entry exists.
  verifiedEvidence: {
    eyebrow: "IELTS learner experiences",
    heading: "Preparation described by learners who did the work.",
    contextNote:
      "Experiences are individual. Progress depends on the learner's starting point, preparation time, attendance and consistent practice.",
  },

  // IELTS Step 5: replaces the removed generic IncludedList render on this page. Describes only
  // the stable teaching method already approved in Steps 2-4, plus a checklist of operational
  // questions a candidate should confirm before paying -- never presents an unconfirmed detail
  // (format, platform, group size, recordings, feedback frequency, mock count, fee) as an
  // inclusion. See docs/ielts-offer-verification.md for the confirmation status behind every
  // claim here, and content/courses.ts's ielts entry for why its `includes` field is no longer
  // this page's source.
  delivery: {
    id: "ielts-learning-format",
    eyebrow: "Programme delivery",
    heading: "Know how the support works before you enrol.",
    body: "IELTS coaching is delivered online. The exact format, schedule and included practice should be confirmed for the currently available option before payment.",
    supportHeading: "The learning experience",
    supportItems: [
      {
        id: "explanation",
        // "Teacher-led online" rather than "Live online" -- synchronous delivery is not yet
        // confirmed as standard to every current IELTS option (see docs/ielts-offer-verification.md).
        title: "Teacher-led online explanation",
        body: "Learn the task demand and the decision behind it through teacher-led online instruction, with opportunities to ask questions and clarify misunderstandings.",
      },
      {
        id: "practice",
        title: "Focused IELTS practice",
        body: "Apply each lesson through relevant Listening, Reading, Writing or Speaking work before moving to broader timed practice.",
      },
      {
        id: "writing-speaking-review",
        title: "Writing and Speaking review",
        body: "Use specific feedback to understand the most important limitation in a response and what to change in the next attempt.",
      },
      {
        id: "listening-reading-analysis",
        title: "Listening and Reading error analysis",
        body: "Review why an answer was missed so future practice targets vocabulary, evidence, attention, answer handling or time-management problems.",
      },
    ] as IeltsLearningSupport[],
    confirmHeading: "Confirm these details for the current option",
    confirmBody: "Ask Aisha to confirm the complete offer that applies to your intake or private-coaching arrangement.",
    detailsToConfirm: [
      { id: "format", label: "Group or one-to-one availability" },
      { id: "platform-schedule", label: "Class platform, days, time and time zone" },
      { id: "duration", label: "Lesson and programme duration" },
      { id: "group-size", label: "Current group-size limit, if applicable" },
      { id: "recordings", label: "Recording availability and access period" },
      { id: "feedback-frequency", label: "Writing and Speaking feedback frequency" },
      { id: "practice-mocks", label: "Practice-test and full-mock inclusions" },
      { id: "fee-policy", label: "Current fee, payment basis and relevant policy" },
    ] as IeltsEnrolmentDetail[],
    cta: {
      label: "Ask About the Current IELTS Format",
      message:
        "Hi Aisha! I am interested in IELTS coaching. Please confirm the current group or one-to-one options, schedule and time zone, duration, recordings, feedback and mock-test inclusions, and fee. My test type, required score and deadline are: [details].",
    },
  },

  // IELTS Step 6: copy for components/ielts/IELTSPricing.tsx. The `enquire` branch is the only
  // one currently used -- see content/ieltsPricing.ts's `ieltsPricing` for the gate that decides
  // which branch actually renders. Do not add a placeholder amount to the `published` branch;
  // it exists so a future genuinely approved record has copy ready to attach to.
  pricing: {
    id: "ielts-pricing",
    enquire: {
      eyebrow: "Fees and enrolment",
      heading: "Review the complete fee before you decide.",
      body: "Confirm the current IELTS fee together with the learning format, schedule, duration and included feedback or practice. No payment is required to ask.",
      note: "You can review the confirmed details before deciding whether to enrol.",
      ctaLabel: "Ask for the Current IELTS Fee",
      ctaMessage:
        "Hi Aisha! I am interested in IELTS coaching. Please share the current fee, currency, billing basis, learning format, schedule, duration, included feedback and practice, and payment terms. My test type, target score and deadline are: [details].",
    },
    published: {
      eyebrow: "Current IELTS fee",
      heading: "See the complete cost and what it covers.",
      inclusionsHeading: "What this fee includes",
      lastVerifiedLabel: "Last verified",
      validUntilLabel: "Valid until",
      ctaLabel: "Ask About Enrolling",
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
