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

/** One stage in the four-stage coaching cycle (components/pte/PTECoachingProcess.tsx). */
type PTEProcessStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  result: string;
};

/** One of the three feedback-by-response-type blocks (constructed / selected-entered /
 *  integrated). */
type PTEFeedbackArea = {
  id: string;
  title: string;
  body: string;
};

/** One tutor-diagnosis point in the illustrative feedback demonstration
 *  (components/pte/PTEFeedbackDemo.tsx). */
type PTEFeedbackPoint = {
  id: string;
  label: string;
  body: string;
};

/** One "what changed" point in the illustrative feedback demonstration. */
type PTEImprovementPoint = {
  id: string;
  body: string;
};

/** One stable, already-approved (Steps 2-4) learning-experience item — never an unverified
 *  frequency or quantity claim (components/pte/PTELearningFormat.tsx). */
type PTELearningSupport = {
  id: string;
  title: string;
  body: string;
};

/** One operational detail a candidate should confirm before paying. This is a question to ask,
 *  never an inclusion — see docs/pte-offer-verification.md for why each one is still unconfirmed
 *  (components/pte/PTELearningFormat.tsx). */
type PTEEnrolmentDetail = {
  id: string;
  label: string;
};

/** One score-profile observation card (components/pte/PTEScoreProfile.tsx). */
type PteScoreObservation = {
  id: string;
  title: string;
  body: string;
};

/** One "bring these details" checklist item in the no-intake availability state
 *  (components/pte/PTEAvailability.tsx). */
type PTEAvailabilityDetail = {
  id: string;
  label: string;
};

/** One of the four communicative-skill curriculum cards (components/pte/PTETaskCurriculum.tsx).
 *  `integratedNote` is optional but every skill currently has one — see docs/pte-content-sources.md
 *  for the official basis of each. */
type PteSkillArea = {
  id: "speaking" | "writing" | "reading" | "listening";
  title: string;
  introduction: string;
  focusItems: readonly string[];
  taskFamilies: readonly string[];
  integratedNote?: string;
};

/** One officially-verified integrated-skills example shown under the four skill cards. */
type PteIntegratedExample = {
  id: string;
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

  // PTE Step 2: score-requirement guidance -- see docs/pte-content-sources.md for the official
  // Pearson basis (score scale, overall + four communicative-skill scores). Deliberately does not
  // claim the overall score "is not a simple arithmetic average" of the four skill scores -- the
  // official score-guide pages checked for this step did not confirm that specific claim, so it's
  // omitted rather than asserted from memory.
  scoreProfile: {
    id: "pte-score-profile",
    eyebrow: "Your score requirement",
    heading: "An overall target may still include minimum scores in each skill.",
    body: "PTE Academic reports an overall score and scores for Listening, Reading, Speaking and Writing. Preparation should begin with the exact combination required by the organisation receiving your result.",
    detailsHeading: "Bring these details",
    requiredDetails: [
      "Exact test: PTE Academic or PTE Academic UKVI",
      "Required overall score",
      "Any minimum Listening, Reading, Speaking or Writing scores",
      "Previous score report or current starting point",
      "Test, application or registration deadline",
      "Country or time zone and usual availability",
    ],
    observations: [
      {
        id: "different-priorities",
        title: "The same overall target can hide different priorities",
        body: "One candidate may need stronger speaking and listening performance, while another needs writing or reading improvement. The previous skill scores help identify the first priority.",
      },
      {
        id: "integrated-tasks",
        title: "Integrated tasks connect more than one skill",
        body: "Some tasks use one skill to produce another—for example, listening before speaking or writing. Preparation should account for those connections instead of treating every skill in isolation.",
      },
      {
        id: "receiving-organisation",
        title: "The receiving organisation sets the requirement",
        body: "Use the current score requirement supplied by the university, visa route, employer or professional body. Generic “good PTE score” tables are not a substitute for that requirement.",
      },
    ] as PteScoreObservation[],
    contextualLink: {
      label: "Share Your PTE Score Requirement with Aisha",
      message:
        "Hi Aisha! I am preparing for [PTE Academic or PTE Academic UKVI]. My required overall score is [score], my minimum skill requirements are [details or none specified], my previous overall and skill scores or current starting point are [details], and my deadline is [date]. Which preparation priorities should I begin with?",
    },
  },

  // PTE Step 2: current four-skill/task curriculum, verified against official Pearson pages on
  // 27 August 2026 -- see docs/pte-content-sources.md for the full URL/claim mapping. Includes
  // the newer Summarize Group Discussion and Respond to a Situation speaking tasks (added to the
  // enhanced PTE Academic format from August 2025). No task-weight percentages, score-conversion
  // table or exact timing/count claims are published here.
  curriculum: {
    id: "pte-task-curriculum",
    eyebrow: "Four-skill preparation",
    heading: "Prepare the language skills and current task demands together.",
    body: "PTE Academic combines computer-based task familiarity with speaking, writing, reading and listening performance. The emphasis should change according to the candidate's score profile rather than treating every task as equally weak.",
    skills: [
      {
        id: "speaking",
        title: "Speaking",
        introduction:
          "Develop clear, relevant spoken responses while managing preparation time, microphone timing and the one-attempt test environment.",
        focusItems: [
          "Intelligible pronunciation rather than accent imitation",
          "Natural oral fluency, phrasing and pace",
          "Accurate listening and short-term recall where the prompt is heard",
          "Selecting and organising relevant content",
          "Concise answers where the task requires them",
          "Paraphrasing and connected speech for extended responses",
          "Starting and finishing within the recording window",
        ],
        taskFamilies: [
          "Read Aloud",
          "Repeat Sentence",
          "Describe Image",
          "Retell Lecture",
          "Answer Short Question",
          "Summarize Group Discussion",
          "Respond to a Situation",
        ],
        integratedNote:
          "Read Aloud connects reading input with spoken delivery, and several other speaking tasks depend on listening to a prompt first.",
      },
      {
        id: "writing",
        title: "Writing",
        introduction:
          "Build concise, relevant and well-organised written responses under the current task instructions and time limits.",
        focusItems: [
          "Identifying the main point and essential supporting information",
          "Response development and coherence",
          "Sentence control and grammar",
          "Appropriate vocabulary and consistent spelling",
          "Task-specific form and word-limit control",
          "Planning, drafting and checking within the available time",
          "Using original language rather than memorised paragraphs",
        ],
        taskFamilies: [
          "Summarize Written Text",
          "Write Essay",
          "Summarize Spoken Text (integrated Listening/Writing)",
          "Write from Dictation (integrated Listening/Writing)",
        ],
        integratedNote:
          "Summarize Spoken Text and Write from Dictation are assessed through Writing but depend on accurate listening first.",
      },
      {
        id: "reading",
        title: "Reading",
        introduction:
          "Strengthen comprehension, vocabulary-in-context and text organisation while learning how current reading tasks award and deduct credit.",
        focusItems: [
          "Main idea, detail, purpose and inference",
          "Vocabulary, collocation and grammar in context",
          "Paragraph cohesion and logical order",
          "Efficient reading under time pressure",
          "Careful selection where incorrect choices can lose credit",
          "Integrated reading-and-writing demands",
        ],
        taskFamilies: [
          "Fill in the Blanks (Dropdown)",
          "Multiple Choice, Multiple Answers",
          "Reorder Paragraph",
          "Fill in the Blanks (Drag and Drop)",
          "Multiple Choice, Single Answer",
        ],
        integratedNote:
          "Multiple Choice, Multiple Answers can lose points for incorrect selections, so careful, evidence-based choices matter more than quick guessing.",
      },
      {
        id: "listening",
        title: "Listening",
        introduction:
          "Practise understanding recordings played once, taking useful notes and transferring what you hear into accurate spoken, written or selected responses.",
        focusItems: [
          "Main ideas, detail, purpose, attitude and inference",
          "Selective note-taking",
          "Following academic discussions and lectures",
          "Spelling and accurate transcription",
          "Distinguishing meaning from repeated keywords",
          "Predicting from context",
          "Managing single-play audio and on-screen response time",
        ],
        taskFamilies: [
          "Summarize Spoken Text",
          "Multiple Choice, Multiple Answers",
          "Fill in the Blanks (Type In)",
          "Highlight Correct Summary",
          "Multiple Choice, Single Answer",
          "Select Missing Word",
          "Highlight Incorrect Words",
          "Write from Dictation",
        ],
        integratedNote:
          "Listening also underpins several speaking tasks, such as Retell Lecture and Answer Short Question, and the extended discussion-based speaking tasks.",
      },
    ] as PteSkillArea[],
    integratedHeading: "One task can draw on more than one skill.",
    integratedBody:
      "PTE Academic includes integrated tasks—for example, listening before speaking or writing, and reading before speaking or writing. A weak result may therefore reflect both understanding the input and producing the response.",
    integratedExamples: [
      { id: "read-aloud", body: "Read Aloud connects reading input with spoken delivery." },
      { id: "summarize-spoken-text", body: "Summarize Spoken Text connects listening comprehension with written response." },
      { id: "write-from-dictation", body: "Write from Dictation connects listening accuracy, memory and written form." },
    ] as PteIntegratedExample[],
    integrityHeading: "Prepare for the published task criteria—not an algorithm shortcut.",
    integrityBody:
      "The programme uses current public Pearson task information to practise relevant content, language control, timing and computer-test routines. It does not claim access to Pearson's proprietary scoring system or promise that memorised responses will produce a particular score.",
    integritySecondSentence:
      "Pearson currently describes automated scoring and human expert review for some response aspects, so preparation should remain relevant, original and aligned with the published task requirements.",
    // "YYYY-MM-DD" -- when the task list and scoring facts above were last checked against
    // Pearson's official current-format pages. See docs/pte-content-sources.md for the full
    // per-claim URL mapping and the recheck-after-format-update requirement.
    sourceVerifiedAt: "2026-08-27",
  },

  // PTE Step 3: the coaching-process section -- shows how a confirmed score requirement (Step 2)
  // becomes task-focused teaching, appropriate computer-based practice and response-specific
  // review. Never claims a guaranteed score, a reproduction of Pearson's scoring engine, or an
  // unconfirmed inclusion (quantity, platform, turnaround) -- see docs/pte-offer-verification.md.
  process: {
    id: "pte-coaching-process",
    eyebrow: "How the coaching works",
    heading: "Turn each practice attempt into a clearer next action.",
    introduction:
      "PTE practice is most useful when you can identify what affected the response and what to change next. Coaching connects task understanding, English-language development, computer-based practice and focused review.",
    steps: [
      {
        id: "requirement",
        number: "01",
        title: "Define the requirement and starting point",
        body: "Begin with the exact PTE test, required overall and skill scores, previous score report or current performance, and the available preparation time. This keeps the first priority connected to the candidate's real requirement.",
        result: "Result: a defined score profile and first preparation priority.",
      },
      {
        id: "method",
        number: "02",
        title: "Learn what the task requires",
        body: "Focus on the language skill, response process and published task conditions that matter: selecting relevant content, organising an answer, speaking clearly, managing attention or completing the response within the required form and time.",
        result: "Result: a method the candidate understands instead of a script to memorise.",
      },
      {
        id: "practice",
        number: "03",
        title: "Practise in the right response mode",
        body: "Apply the method through a focused spoken, typed or selected-answer task, then introduce realistic timing and computer-based conditions when appropriate. Practice should reveal whether the skill remains usable under test pressure.",
        result: "Result: a response or decision pattern that can be reviewed.",
      },
      {
        id: "apply-feedback",
        number: "04",
        title: "Apply feedback to the next attempt",
        body: "Review what worked, identify the error or limitation with the greatest effect, and carry one or two priorities into a new response. The next attempt shows whether the change is becoming more accurate, clear and repeatable.",
        result: "Result: a specific next action rather than a vague instruction to practise more.",
      },
    ] as PTEProcessStep[],
    feedbackHeading: "Feedback follows the response—not a generic template.",
    feedbackIntroduction:
      "The useful feedback depends on whether the task requires a spoken or written response, an objectively correct answer, or more than one communicative skill.",
    feedbackAreas: [
      {
        id: "constructed",
        title: "For constructed responses",
        body: "Feedback can identify whether the response addresses the task, follows the required form, communicates ideas clearly and uses language effectively. For relevant speaking tasks, it may also address intelligibility, pronunciation and oral fluency; for relevant writing tasks, it may address organisation, grammar, vocabulary and spelling.",
      },
      {
        id: "selected-entered",
        title: "For selected or entered answers",
        body: "Review should go beyond the answer key. Candidates examine whether an error came from vocabulary, missing evidence, misunderstanding the prompt, losing the thread of an audio passage, spelling, answer transfer, attention or time management.",
      },
      {
        id: "integrated",
        title: "For integrated tasks",
        body: "When a task draws on more than one communicative skill, review both sides of the response: how accurately the candidate understood the source and how effectively that information was spoken, written or entered.",
      },
    ] as PTEFeedbackArea[],
    scoringNote:
      "Tutor feedback supports preparation but is not an official PTE score or a reproduction of Pearson's scoring system.",
    expectation:
      "Progress depends on the candidate's starting point, required score, preparation time and consistent application of feedback; no PTE score can be guaranteed.",
  },

  // PTE Step 4: an original, explicitly-illustrative example created for this website — never a
  // testimonial, never attributed to a real learner, and never given a score estimate (a single
  // transcript can't responsibly demonstrate pronunciation or oral fluency, which require audio).
  // Task and scoring-trait terminology (Content, Pronunciation, Oral Fluency) verified against
  // Pearson's current Respond to a Situation format -- see docs/pte-content-sources.md.
  feedbackDemo: {
    id: "pte-feedback-example",
    eyebrow: "An illustrative PTE feedback example",
    heading: "See how a vague spoken response becomes more complete and precise.",
    introduction:
      "Useful feedback identifies what the response missed, explains why it matters and gives the candidate a manageable next action.",
    disclosure:
      "This example was created for this website. It is not learner work, an official Pearson task, a complete scored response or a PTE score prediction.",
    taskLabel: "Illustrative Respond to a Situation practice",
    situationHeading: "Situation",
    situation:
      "You are attending a college course. Your lecturer has asked you to lead Friday's group discussion, but the presentation slides have not been shared. Contact the lecturer, explain why you need the slides and ask for them by Thursday evening.",
    firstAttemptLabel: "First-attempt transcript",
    firstAttempt: "Hello, I need the slides. Please send them tomorrow because I have the discussion. Thank you.",
    transcriptLimitation:
      "The transcript shows wording and task coverage only; it does not show pronunciation, pace, phrasing or hesitation.",
    diagnosisHeading: "Tutor diagnosis",
    feedbackPoints: [
      {
        id: "purpose",
        label: "Purpose",
        body: "The response does not explain clearly that the speaker is leading Friday's group discussion and needs time to prepare.",
      },
      {
        id: "accuracy",
        label: "Accuracy",
        body: "“Tomorrow” replaces the specific Thursday-evening deadline with an ambiguous time reference.",
      },
      {
        id: "register",
        label: "Register",
        body: "The request is brief, but it needs a clearer, appropriately polite approach for communication with a lecturer.",
      },
    ] as PTEFeedbackPoint[],
    nextActionLabel: "Next revision priority",
    nextAction: "State the responsibility, give the exact deadline and make one clear, appropriately polite request.",
    revisionLabel: "Revised transcript",
    revisedAttempt:
      "Hello Dr Khan. I'm leading Friday's group discussion, but I haven't received the presentation slides yet. Could you please send them by Thursday evening so I have enough time to prepare? Thank you.",
    improvementHeading: "What changed",
    improvements: [
      { id: "explicit-responsibility", body: "The speaker's responsibility and reason for requesting the slides are explicit." },
      { id: "accurate-deadline", body: "The required Thursday-evening deadline is accurate." },
      { id: "polite-register", body: "The request uses a clear and suitably polite register for the listener." },
    ] as PTEImprovementPoint[],
    audioBoundary:
      "A recording would still be needed to review intelligibility, pronunciation, oral fluency, phrasing, pace and hesitation. A written transcript cannot demonstrate those spoken features.",
  },

  // PTE Step 4: heading copy for components/pte/PTEVerifiedEvidence.tsx -- only ever rendered
  // when at least one PTE-tagged, consent-confirmed content/testimonials.ts entry exists.
  verifiedEvidence: {
    eyebrow: "PTE learner experiences",
    heading: "Preparation described by learners who completed the work.",
    contextNote:
      "Experiences are individual. Progress depends on the candidate's starting point, required score, preparation time and consistent practice.",
  },

  // PTE Step 5: replaces the removed shared IncludedList/LearningFormats renders on this page.
  // Describes only the stable teaching method already approved in Steps 2-4, plus a checklist of
  // operational questions a candidate should confirm before paying -- never presents an
  // unconfirmed detail (format, platform, group size, recordings, feedback frequency, mock count,
  // fee) as an inclusion. See docs/pte-offer-verification.md for the confirmation status behind
  // every claim here, and content/courses.ts's pte entry for why its `includes` field is no
  // longer this page's source.
  delivery: {
    id: "pte-learning-format",
    eyebrow: "Programme delivery",
    heading: "Know how the current PTE option works before you enrol.",
    body: "PTE Academic coaching is delivered online. The exact format, schedule, feedback, practice access and fee should be confirmed for the currently available option before payment.",
    supportHeading: "The learning experience",
    supportItems: [
      {
        id: "explanation",
        // "Teacher-led online" rather than "Live online" -- synchronous delivery is not yet
        // confirmed as standard to every current PTE option (see docs/pte-offer-verification.md).
        title: "Teacher-led explanation",
        body: "Understand the task demand, response process and relevant language skill through online instruction, with space to clarify misunderstandings.",
      },
      {
        id: "practice",
        title: "Focused PTE practice",
        body: "Apply the lesson through relevant spoken, typed or selected-answer work before broader timed practice is introduced.",
      },
      {
        id: "response-review",
        title: "Response review",
        body: "Identify what affected a response or answer and carry one manageable priority into the next attempt.",
      },
      {
        id: "computer-test-routines",
        title: "Computer-test routines",
        body: "Develop the timing, attention, note-taking and response-handling routines needed for computer-based tasks where appropriate.",
      },
    ] as PTELearningSupport[],
    confirmHeading: "Confirm these details for the current option",
    confirmBody: "Ask Aisha to confirm the complete offer that applies to the current intake or private-coaching arrangement.",
    detailsToConfirm: [
      { id: "test-support", label: "PTE Academic or PTE Academic UKVI support" },
      { id: "format", label: "Group or one-to-one availability" },
      { id: "platform-schedule", label: "Class platform, days, time and time zone" },
      { id: "frequency-duration", label: "Lesson frequency and programme duration" },
      { id: "group-size", label: "Current group-size limit, if applicable" },
      { id: "recordings", label: "Recording availability and access period" },
      { id: "speaking-writing-feedback", label: "Speaking and Writing feedback method, frequency and turnaround" },
      { id: "reading-listening-review", label: "Reading and Listening review approach" },
      { id: "practice-mocks", label: "Timed-practice and full-mock inclusions" },
      { id: "practice-platform", label: "Practice platform, estimated-score source and access period, if applicable" },
      { id: "materials", label: "Official Pearson-licensed or teacher-created material" },
      { id: "fee-policy", label: "Current fee, billing basis and relevant policies" },
    ] as PTEEnrolmentDetail[],
    cta: {
      label: "Ask About the Current PTE Format",
      message:
        "Hi Aisha! I am interested in PTE coaching. Please confirm the current PTE Academic or PTE Academic UKVI options, group or one-to-one availability, platform, schedule and time zone, duration, recordings, feedback, practice and mock inclusions, any practice-platform access, and the current fee. My exact test, required overall and skill scores, previous result and deadline are: [details].",
    },
  },

  // PTE Step 6: copy for components/pte/PTEPricing.tsx. The `enquire` branch is the only one
  // currently used -- see content/ptePricing.ts's `ptePricing` for the gate that decides which
  // branch actually renders. Do not add a placeholder amount to the `published` branch; it exists
  // so a future genuinely approved record has copy ready to attach to.
  pricing: {
    id: "pte-pricing",
    enquire: {
      eyebrow: "Fees and enrolment",
      heading: "Review the complete PTE fee before you decide.",
      body: "Confirm the current fee together with the exact PTE option, learning format, schedule, duration and included feedback, practice or platform access. No payment is required to ask.",
      note: "You can review the confirmed details before deciding whether to enrol.",
      ctaLabel: "Ask for the Current PTE Fee",
      ctaMessage:
        "Hi Aisha! I am interested in PTE coaching. Please share the current fee, currency, billing basis, exact PTE option, learning format, schedule, duration, included feedback, practice and mock-test support, any platform access, and payment or cancellation terms. My exact test, required overall and skill scores, previous result and deadline are: [details].",
    },
    published: {
      eyebrow: "Current PTE fee",
      heading: "See the complete cost and what it covers.",
      inclusionsHeading: "What this fee includes",
      lastVerifiedLabel: "Last verified",
      validUntilLabel: "Valid until",
      ctaLabel: "Ask About Enrolling",
    },
  },

  // PTE Step 7: copy for components/pte/PTEAvailability.tsx, replacing the PTE Step 1 page-level
  // <BatchTable> wrapper. Keep `id` stable -- other CTAs/links may target "#pte-availability".
  // Both the no-intake enquiry state and the verified scheduled state share the section id and
  // eyebrow; only one H2 renders per state. As of this step, content/batches.ts has no published
  // future PTE record, so production renders the no-intake enquiry state below.
  availability: {
    id: "pte-availability",
    eyebrow: "Current availability",

    // No-intake enquiry state (the one currently shown -- see content/batches.ts, whose three PTE
    // records are all historical: past dates, "Closed", and unpublished).
    enquiryHeading: "Ask about the next suitable PTE start.",
    enquiryBody:
      "No future PTE start date is currently confirmed on this page. Share your exact test, required overall and skill scores, deadline, time zone and usual availability so Aisha can confirm whether a suitable option is currently available.",
    detailsHeading: "Include these details",
    enquiryDetails: [
      { id: "test", label: "PTE Academic or PTE Academic UKVI" },
      { id: "scores", label: "Required overall and skill scores" },
      { id: "starting-point", label: "Previous overall and skill scores or current starting point" },
      { id: "deadline", label: "Test, application or registration deadline" },
      { id: "location", label: "Country and time zone" },
      { id: "schedule-fit", label: "Days and times that usually suit you" },
    ] as PTEAvailabilityDetail[],
    enquiryCtaLabel: "Check PTE Availability",
    enquiryMessage:
      "Hi Aisha! I would like to ask about current PTE availability. I need [PTE Academic or PTE Academic UKVI], my required overall and skill scores are [scores], my previous overall and skill scores or current starting point are [details], my test, application or registration deadline is [date], my country/time zone is [details], and the days or times that usually suit me are [details].",
    reservationNote: "Sending an enquiry does not reserve a place, and no payment is required to ask.",

    // Verified scheduled state (renders only once getPublishedUpcomingBatches("pte") returns at
    // least one complete record -- see components/pte/PTEAvailability.tsx's isCompletePteIntake).
    scheduledHeading: "Review the confirmed PTE intake details.",
    scheduledBody: "Check the start date, schedule, format and time zone before asking about this intake.",
    timezoneLabel: "Pakistan Standard Time (PKT, UTC+5)",
    intakeCtaLabel: "Ask About This PTE Intake",
    moreAvailabilityLabel: "View all PTE availability",
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
