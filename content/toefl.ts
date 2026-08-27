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

/** One score-profile observation card (components/toefl/TOEFLScoreProfile.tsx). */
type ToeflScoreObservation = {
  id: string;
  title: string;
  body: string;
};

/** One of the four communicative-skill curriculum cards (components/toefl/TOEFLTaskCurriculum.tsx).
 *  See docs/toefl-content-sources.md for the official ETS basis of each skill's task families. */
type ToeflSkillArea = {
  id: "reading" | "listening" | "writing" | "speaking";
  title: string;
  introduction: string;
  focusItems: readonly string[];
  taskFamilies: readonly string[];
};

/** One stage in the four-stage coaching cycle (components/toefl/TOEFLCoachingProcess.tsx). */
type TOEFLProcessStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  result: string;
};

/** One of the three feedback-by-task-type blocks (Reading/Listening, Writing, Speaking). */
type TOEFLFeedbackArea = {
  id: "reading-listening" | "writing" | "speaking";
  title: string;
  body: string;
};

/** One tutor-diagnosis point in the illustrative feedback demonstration
 *  (components/toefl/TOEFLFeedbackDemo.tsx). */
type ToeflFeedbackPoint = {
  id: string;
  label: string;
  body: string;
};

/** One "what changed" point in the illustrative feedback demonstration. */
type ToeflImprovementPoint = {
  id: string;
  body: string;
};

/** One stable learning-experience item (components/toefl/TOEFLLearningFormat.tsx) -- an
 *  already-approved teaching-method element from Steps 2-4, never an unconfirmed operational
 *  quantity, frequency or platform. */
type ToeflLearningSupport = {
  id: string;
  title: string;
  body: string;
};

/** One neutral pre-enrolment question to confirm (components/toefl/TOEFLLearningFormat.tsx) --
 *  a question to ask Aisha, never presented as an included benefit. */
type ToeflEnrolmentDetail = {
  id: string;
  label: string;
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

  // TOEFL Step 2: score-requirement guidance -- see docs/toefl-content-sources.md for the official
  // ETS basis (no universal passing score; institution sets the requirement; current 1-6 scale;
  // transitional comparable overall 0-120 score during the two-year transition after January
  // 2026). Deliberately does not imply the comparable 0-120 figure supplies converted section
  // scores -- the official source checked for this step describes it only as an overall estimate.
  scoreProfile: {
    id: "toefl-score-profile",
    eyebrow: "Your TOEFL requirement",
    heading: "Begin with the score requirement supplied by your institution.",
    body: "ETS does not set one passing TOEFL iBT score. Each institution or programme decides the overall and any Reading, Listening, Writing or Speaking scores it accepts.",
    detailsHeading: "Bring these details",
    requiredDetails: [
      "Exact test: TOEFL iBT",
      "Institution and programme receiving the result",
      "Test date and application deadline",
      "Required score scale: 1–6 or a still-published 0–120 requirement",
      "Required overall score",
      "Any minimum Reading, Listening, Writing or Speaking scores",
      "Previous TOEFL score report or current starting point",
      "Country or time zone and usual availability",
    ],
    observations: [
      {
        id: "no-universal-passing-score",
        title: "There is no single TOEFL passing score",
        body: "ETS does not set a universal pass or fail mark. Use the current requirement published or confirmed by the institution receiving your result.",
      },
      {
        id: "overall-not-whole-story",
        title: "An overall target may not tell the whole story",
        body: "An institution may also require minimum scores in one or more sections. A previous report can show whether Reading, Listening, Writing or Speaking should become the first preparation priority.",
      },
      {
        id: "do-not-convert-yourself",
        title: "Do not convert the requirement yourself",
        body: "During the score transition, current official reports include the 1–6 scores and a comparable overall 0–120 figure. If an institution's guidance is unclear, confirm it directly rather than relying on an unofficial calculator.",
      },
    ] as ToeflScoreObservation[],
    contextualLink: {
      label: "Share Your TOEFL Requirement with Aisha",
      message:
        "Hi Aisha! I am preparing for TOEFL iBT. My institution/programme is [name], its required overall and section scores are [details] on the [1–6 or 0–120] scale, my test/application deadline is [date], and my previous TOEFL result or current starting point is [details]. Which preparation priorities should I begin with?",
    },
  },

  // TOEFL Step 2: current four-skill/task curriculum, verified against official ETS pages on
  // 27 August 2026 -- see docs/toefl-content-sources.md for the full URL/claim mapping. Reflects
  // the task families introduced for tests taken on or after 21 January 2026, replacing the old
  // independent/integrated Writing and Speaking structure entirely. No task-weight percentages,
  // exact item counts, section timing or adaptive-routing mechanics are published here.
  curriculum: {
    id: "toefl-task-curriculum",
    eyebrow: "Current four-skill preparation",
    heading: "Prepare for the task demands introduced in January 2026.",
    body: "The current TOEFL iBT measures Reading, Listening, Writing and Speaking through updated task families. Preparation should connect task familiarity with the underlying English skills identified in the candidate's score requirement and starting point.",
    skills: [
      {
        id: "reading",
        title: "Reading",
        introduction:
          "Develop vocabulary-in-context and comprehension across concise everyday and academic texts while working accurately in an adaptive section.",
        focusItems: [
          "Understanding meaning from context",
          "Vocabulary and word-form knowledge",
          "Main ideas and important details",
          "Implied meaning and purpose",
          "Reading notices, messages and informational text",
          "Reading focused academic passages",
          "Maintaining accuracy and pace across changing text demands",
        ],
        taskFamilies: ["Complete the Words", "Read in Daily Life", "Read an Academic Passage"],
      },
      {
        id: "listening",
        title: "Listening",
        introduction:
          "Build accurate understanding of short exchanges, conversations, announcements and academic talks while recognising purpose, detail and implied meaning.",
        focusItems: [
          "Understanding an appropriate response to a spoken prompt",
          "Identifying main ideas and important details",
          "Recognising speaker purpose, attitude and implied meaning",
          "Following campus conversations and announcements",
          "Following academic talks",
          "Selective note-taking where useful",
          "Sustaining attention through an adaptive section",
          "Distinguishing genuine meaning from repeated keywords",
        ],
        taskFamilies: [
          "Listen and Choose a Response",
          "Listen to a Conversation",
          "Listen to an Announcement",
          "Listen to an Academic Talk",
        ],
      },
      {
        id: "writing",
        title: "Writing",
        introduction:
          "Develop accurate sentence construction and purposeful written responses for current academic and campus communication tasks.",
        focusItems: [
          "Word order and grammatical sentence construction",
          "Sentence boundaries and control",
          "Writing for a clear purpose and reader",
          "Appropriate email register and organisation",
          "Selecting relevant information",
          "Developing a concise position in an academic discussion",
          "Coherence, grammar and vocabulary",
          "Planning and checking within the available time",
          "Original, prompt-specific responses",
        ],
        taskFamilies: ["Build a Sentence", "Write an Email", "Write for an Academic Discussion"],
      },
      {
        id: "speaking",
        title: "Speaking",
        introduction:
          "Develop clear spoken repetition and relevant spontaneous responses for the current speaking tasks.",
        focusItems: [
          "Accurate listening and short-term retention",
          "Intelligible pronunciation rather than accent imitation",
          "Clear phrasing, pace and oral fluency",
          "Repeating meaningfully without adding or omitting content",
          "Understanding interview questions",
          "Producing relevant, developed answers",
          "Organising a response quickly",
          "Maintaining clarity under recording conditions",
        ],
        taskFamilies: ["Listen and Repeat", "Take an Interview"],
      },
    ] as ToeflSkillArea[],
    // Part H: "multistage" is deliberately not asserted -- ETS's current task-format pages
    // confirm only that "the test adapts" (timing and items may vary), not the specific
    // "multistage" mechanism, and the 2026 technical specification PDF could not be reliably
    // read for this step (see docs/toefl-content-sources.md's "facts deliberately omitted"
    // section). The optional "Writing and Speaking follow linear task sequences" sentence is
    // omitted for the same reason -- Part H makes it conditional on official-source support.
    adaptiveNote: {
      heading: "Adaptive sections still require broad, consistent skill.",
      body: "Reading and Listening use an adaptive design, so the exact experience can vary. Preparation should build accuracy, comprehension, attention and time management across the published task families rather than trying to predict or manipulate the route.",
    },
    integrityNote: {
      heading: "Prepare from published task guidance—not a scoring shortcut.",
      body: "The programme uses current public ETS task and score information to develop relevant language, task response and computer-test routines. It does not claim access to ETS's proprietary scoring system or guarantee that a particular response will receive a particular score.",
      feedbackNote:
        "Tutor feedback supports preparation; it is not an official TOEFL score, score report or admission decision.",
    },
    // "YYYY-MM-DD" -- when the task list and scoring facts above were last checked against
    // ETS's official current-format pages. See docs/toefl-content-sources.md for the full
    // per-claim URL mapping and the recheck-after-format-update requirement.
    sourceVerifiedAt: "2026-08-27",
  },

  // TOEFL Step 3: the coaching-process section -- shows how a confirmed score requirement
  // (Step 2) becomes task-focused teaching, appropriate computer-based practice and
  // response-specific review. Never claims a guaranteed score, a reproduction of ETS's scoring
  // system, or an unconfirmed inclusion (formal diagnostic, mock quantity, feedback turnaround,
  // platform) -- see docs/toefl-offer-verification.md and Part G of the implementing prompt for
  // the durable-teaching-action vs. operational-inclusion distinction every sentence here follows.
  process: {
    id: "toefl-coaching-process",
    eyebrow: "How the coaching works",
    heading: "Turn each TOEFL practice attempt into a clearer next action.",
    introduction:
      "TOEFL practice is more useful when the candidate can identify what affected an answer or response and what to change next. Coaching connects the institutional requirement, current task understanding, English-language development, computer-based practice and focused review.",
    steps: [
      {
        id: "requirement",
        number: "01",
        title: "Define the requirement and starting point",
        body: "Begin with the institution and programme, exact TOEFL iBT requirement, score scale, any section minimums, test or application deadline, and a previous report or current performance where available. This keeps the first priority tied to the candidate's real next step.",
        result: "Result: a defined score profile and first preparation priority.",
      },
      {
        id: "method",
        number: "02",
        title: "Learn what the current task requires",
        body: "Focus on the language skill and response process that matter for the task: understanding context or evidence, selecting an answer, building a grammatical sentence, writing for a purpose, repeating accurately or developing a relevant spoken response.",
        result: "Result: a method the candidate understands instead of a script to memorise.",
      },
      {
        id: "practice",
        number: "03",
        title: "Practise in the correct response mode",
        body: "Apply the method through the response mode the task uses—selected or arranged answers, typed writing or recorded speech—then introduce realistic timing and computer-based conditions where appropriate. Practice should show whether the skill remains usable under test pressure.",
        result: "Result: an answer or response pattern that can be reviewed.",
      },
      {
        id: "apply-feedback",
        number: "04",
        title: "Apply feedback to the next attempt",
        body: "Review what worked, identify the error or limitation with the greatest effect, and carry one or two priorities into another attempt. The next response shows whether the change is becoming more accurate, clear and repeatable.",
        result: "Result: a specific next action rather than a vague instruction to practise more.",
      },
    ] as TOEFLProcessStep[],
    feedbackHeading: "Feedback changes with the task—not just the section.",
    feedbackIntroduction:
      "Useful review depends on whether the candidate selected an answer, arranged language, produced a written response or recorded speech. The purpose is to identify the cause of the problem and the next manageable change.",
    feedbackAreas: [
      {
        id: "reading-listening",
        title: "For Reading and Listening answers",
        body: "Review should go beyond the answer key. Candidates examine whether an error came from vocabulary or word form, missing evidence, misunderstanding purpose or implied meaning, following a distractor, losing attention, weak note selection or time management.",
      },
      {
        id: "writing",
        title: "For sentence, email and discussion writing",
        body: "Feedback can identify whether the sentence is grammatically complete, whether an email achieves its purpose with suitable organisation and social conventions, or whether an academic-discussion response states and supports a relevant position. Language review may address clarity, cohesion, grammar, vocabulary, spelling and punctuation where relevant.",
      },
      {
        id: "speaking",
        title: "For repeated and interview responses",
        body: "For Listen and Repeat, review can consider how accurately the candidate processed and reproduced the sentence and whether the speech remained intelligible. For Take an Interview, review can consider relevance, development, natural pace, intelligibility and appropriate vocabulary and grammar.",
      },
    ] as TOEFLFeedbackArea[],
    scoringNote:
      "Tutor feedback supports preparation; it is not an official TOEFL score, score report or admission decision.",
    expectation:
      "Progress depends on the candidate's starting point, confirmed requirement, preparation time and consistent application of feedback; no TOEFL score can be guaranteed.",
  },

  // TOEFL Step 4: an original, explicitly-illustrative example created for this website — never a
  // testimonial, never attributed to a real learner, and never given a score estimate (a single
  // transcript can't responsibly demonstrate pronunciation, intelligibility, pace or phrasing,
  // which require audio). Task terminology ("Write an Email") verified against ETS's current
  // Writing task page -- see docs/toefl-content-sources.md.
  feedbackDemo: {
    id: "toefl-feedback-example",
    eyebrow: "An illustrative TOEFL feedback example",
    heading: "See how focused feedback can make a written response clearer.",
    introduction:
      "Useful feedback identifies what is unclear, explains why it matters and gives the candidate a manageable next action to apply.",
    disclosure:
      "This website-created example is for illustration only. It is not learner work, an official ETS question, a complete scored response, an official rating or a TOEFL score prediction.",
    taskLabel: "Illustrative Write an Email practice",
    situationHeading: "Situation",
    situation:
      "You registered for a Tuesday academic-writing workshop, but a required laboratory class has been moved to the same time. Write to the workshop coordinator, explain the conflict and ask whether you can attend Thursday's session instead.",
    firstAttemptLabel: "First attempt",
    firstAttempt: "Hello, I cannot come to the workshop because I have a lab. Change my time and tell me soon. Thanks.",
    diagnosisHeading: "Tutor diagnosis",
    feedbackPoints: [
      {
        id: "context",
        label: "Context",
        body: "The message mentions a workshop and lab, but it does not identify the registered Tuesday session or explain that the required lab was moved to the same time.",
      },
      {
        id: "request",
        label: "Request",
        body: "“Change my time” is ambiguous. The coordinator needs to know that the writer is requesting Thursday's session and what to do if it is unavailable.",
      },
      {
        id: "tone-clarity",
        label: "Tone and clarity",
        body: "The purpose is understandable, but the command can become a clear, appropriately polite request with enough information for the reader to respond.",
      },
    ] as ToeflFeedbackPoint[],
    nextActionLabel: "Next revision priority",
    nextAction:
      "Identify the current booking, explain the exact conflict and make one specific, appropriately polite request for an alternative.",
    revisionLabel: "Revised attempt",
    revisedAttemptSubject: "Subject: Request to change workshop session",
    revisedAttemptParagraphs: [
      "Dear Workshop Coordinator,",
      "I am registered for Tuesday's academic-writing workshop, but a required laboratory class has been moved to the same time. Could I attend Thursday's session instead? If that session is full, please let me know whether another time is available.",
      "Thank you for your help.",
      "Best,",
      "[Name]",
    ],
    improvementHeading: "What changed",
    improvements: [
      { id: "specific-conflict", body: "The current registration and scheduling conflict are specific." },
      { id: "explicit-alternative", body: "The requested Thursday alternative is explicit." },
      { id: "appropriate-tone", body: "The tone gives the coordinator enough context to respond appropriately." },
    ] as ToeflImprovementPoint[],
    scoringBoundary:
      "This comparison demonstrates a revision decision, not official TOEFL scoring. Tutor feedback cannot guarantee that a response will receive a particular score.",
    speakingBoundary:
      "This text example does not demonstrate Speaking feedback. Reviewing pronunciation, intelligibility, pace and phrasing requires an actual audio response.",
  },

  // TOEFL Step 4: heading copy for components/toefl/TOEFLVerifiedEvidence.tsx -- only ever
  // rendered when at least one TOEFL-tagged, consent-confirmed content/testimonials.ts entry
  // exists.
  verifiedEvidence: {
    eyebrow: "TOEFL learner experiences",
    heading: "Preparation described by learners who completed the work.",
    contextNote:
      "Experiences are individual. Progress depends on the candidate's starting point, confirmed requirement, preparation time and consistent application of feedback.",
  },

  // TOEFL Step 5: replaces the removed shared IncludedList/LearningFormats renders on this page.
  // Describes only the stable teaching method already approved in Steps 2-4, plus a checklist of
  // operational questions a candidate should confirm before paying -- never presents an
  // unconfirmed detail (format, platform, group size, recordings, feedback frequency, mock count,
  // official materials, fee) as an inclusion. See docs/toefl-offer-verification.md for the
  // confirmation status behind every claim here, and content/courses.ts's toefl entry for why its
  // `includes` field is no longer this page's source.
  delivery: {
    id: "toefl-learning-format",
    eyebrow: "Programme delivery",
    heading: "Know how the current TOEFL option works before you enrol.",
    body: "TOEFL iBT coaching is delivered online. The exact format, schedule, feedback, practice access, current-format coverage and fee should be confirmed for the available option before payment.",
    supportHeading: "The learning experience",
    supportItems: [
      {
        id: "requirement-led-instruction",
        title: "Requirement-led instruction",
        body: "Connect the candidate's confirmed TOEFL iBT requirement and starting point to the language and task priorities addressed through online instruction.",
      },
      {
        id: "current-task-practice",
        title: "Current-task practice",
        body: "Apply the lesson through selected-answer, typed or spoken practice suited to the current TOEFL iBT task family being developed.",
      },
      {
        id: "focused-response-review",
        title: "Focused response review",
        body: "Identify what affected an answer or response and carry one manageable priority into the next attempt.",
      },
      {
        id: "computer-test-routines",
        title: "Computer-test routines",
        body: "Develop attention, note-taking, timing and response-handling routines where they support the relevant computer-based task.",
      },
    ] as ToeflLearningSupport[],
    confirmHeading: "Confirm these details for the current option",
    confirmBody: "Ask Aisha to confirm the complete offer that applies to the current intake or coaching arrangement.",
    detailsToConfirm: [
      { id: "format-coverage", label: "Coverage of the TOEFL iBT format used on your planned test date" },
      { id: "test-centre-home-edition", label: "Test-centre or Home Edition preparation needs, where relevant" },
      { id: "delivery-mode", label: "Live, asynchronous or mixed delivery" },
      { id: "format", label: "Group or one-to-one availability" },
      { id: "platform-schedule", label: "Class platform, days, time and time zone" },
      { id: "frequency-duration", label: "Lesson frequency and complete programme duration" },
      { id: "group-size", label: "Current group-size limit, if a group option exists" },
      { id: "recordings", label: "Recording availability and access period" },
      { id: "speaking-writing-feedback", label: "Speaking and Writing submission, feedback frequency and turnaround" },
      { id: "reading-listening-review", label: "Reading and Listening review approach" },
      { id: "practice-mocks", label: "Timed-practice and full-mock inclusions" },
      { id: "practice-platform", label: "Practice platform, estimated-score source and access period, if applicable" },
      { id: "materials", label: "Official ETS-licensed or teacher-created materials" },
      { id: "between-session-support", label: "Support between sessions, if any" },
      { id: "fee-policy", label: "Current fee, billing basis and relevant policies" },
    ] as ToeflEnrolmentDetail[],
    cta: {
      label: "Ask About the Current TOEFL Option",
      message:
        "Hi Aisha! I am interested in TOEFL iBT coaching. Please confirm whether the current option covers the format used on my planned test date, plus the delivery type, group or one-to-one availability, platform, schedule and time zone, duration, recordings, feedback, timed-practice and mock inclusions, learning materials, and current fee and policies. My institution/programme, required overall and section scores, score scale, previous result or starting point, test/application deadline, and country/time zone are: [details].",
    },
  },

  // TOEFL Step 6: copy for components/toefl/TOEFLPricing.tsx. The `enquire` branch is the only
  // one currently used -- see content/toeflPricing.ts's `toeflPricing` for the gate that decides
  // which branch actually renders. Do not add a placeholder amount to the `published` branch; it
  // exists so a future genuinely approved record has copy ready to attach to.
  pricing: {
    id: "toefl-pricing",
    enquire: {
      eyebrow: "Fees and enrolment",
      heading: "Review the complete TOEFL fee before you decide.",
      body: "Confirm the current fee together with the TOEFL iBT format covered, learning arrangement, schedule, duration and included feedback, practice or platform access. No payment is required to ask.",
      note: "You can review the confirmed details before deciding whether to enrol.",
      ctaLabel: "Ask for the Current TOEFL Fee",
      ctaMessage:
        "Hi Aisha! I am interested in TOEFL iBT coaching. Please share the current fee, currency, billing basis, test-format coverage, learning arrangement, schedule and time zone, duration, included feedback, timed practice and mock-test support, learning materials or platform access, and payment, rescheduling or cancellation terms. My institution/programme, required overall and section scores, score scale, previous result or starting point, test/application deadline, and country/time zone are: [details].",
    },
    published: {
      eyebrow: "Current TOEFL fee",
      heading: "See the complete cost and what it covers.",
      inclusionsHeading: "What this fee includes",
      lastVerifiedLabel: "Last verified",
      validUntilLabel: "Valid until",
      ctaLabel: "Ask About Enrolling",
    },
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
