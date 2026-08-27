/**
 * Spoken English-page-specific copy (Spoken English Step 1, extended in Step 2). Canonical
 * programme identity -- slug, public name, route -- stays in content/courses.ts; this file only
 * holds the sales/positioning copy that doesn't belong on the generic Course object. Aisha's
 * qualification and professional role are NOT duplicated here -- components read those directly
 * from content/site.ts.
 *
 * The legacy content/courses.ts spoken-english record (`speak without hesitation`, `Thinking in
 * English`, `live Zoom classes (recorded)`, `PKR 10,000`, etc.) is not publication-authoritative
 * for /courses/spoken-english -- see docs/spoken-english-offer-verification.md for the full list
 * of unverified operational facts and docs/spoken-english-content-sources.md for the boundary
 * decisions behind this file's wording.
 *
 * Step 2 replaces the Step 1 temporary priorities preview with a needs-led speaking profile and a
 * six-area communication curriculum. No CEFR level, descriptor or terminology appears anywhere in
 * this file -- the five official Council of Europe CEFR source pages named in the implementing
 * prompt all returned HTTP 403 Forbidden when checked for this step (see
 * docs/spoken-english-content-sources.md's "CEFR source access" note), so nothing requiring a
 * specific CEFR citation is published; every curriculum concept below is expressed in plain
 * English instead, consistent with the prompt's own "if no CEFR level or descriptor is necessary
 * in visible copy, keep it out" instruction.
 *
 * Step 3 adds a five-stage teaching/practice/feedback process (`process`) describing a durable
 * instructional approach in plain learner language -- an internal coaching model, not an official
 * CEFR method, and not a confirmed operational inclusion (feedback mode, quantity, turnaround,
 * role-play frequency, homework and platform all remain unresolved -- see
 * docs/spoken-english-offer-verification.md).
 *
 * Step 4 adds `feedbackDemo`: one original, website-created illustrative scenario (a workplace
 * status update, first attempt -> diagnosis -> revision -> changed follow-up) proving only the
 * quality of the instructional thinking -- never presented as learner work, a testimonial, a
 * formal assessment, a CEFR result or evidence of a spoken/audio outcome. The companion
 * components/spoken-english/SpokenEnglishVerifiedEvidence.tsx renders genuine, consent-confirmed
 * Spoken English testimonials from content/testimonials.ts and returns null (no heading, no
 * section) while none exist -- see docs/spoken-english-offer-verification.md's evidence-status
 * section and docs/testimonial-content-intake.md for the intake process.
 *
 * Step 5 adds `delivery`: confirms the one currently owner-confirmed operational fact (coaching is
 * online), summarises only the needs-led positioning already public in Steps 1-2, and separates
 * both from a grouped, neutral pre-enrolment checklist of everything still `Needs owner
 * confirmation` per docs/spoken-english-offer-verification.md. The Step 3 coaching-process and
 * Step 4 feedback-demonstration summary items the implementing prompt offered as optional are
 * deliberately NOT included here -- that prompt's own Part D permits them only once Step 3 is
 * "complete, public and documented as an approved teaching approach", and
 * docs/spoken-english-offer-verification.md still records that content as "proposed public
 * wording... requiring Aisha's review before publication is treated as final", not owner-approved.
 * Revisit this note (and add those two items) only once that document's Step 3 status changes.
 *
 * Step 6 adds `pricing`: copy for the fail-closed, discriminated-union pricing pattern in
 * content/spokenEnglishPricing.ts (mirroring content/toeflPricing.ts and content/ptePricing.ts) --
 * the `enquire` branch is the only one currently reachable, since no owner-approved fee record
 * exists.
 *
 * Step 7 replaces the Step 1 permanently-enquiry-only `availability` object with the same
 * two-state (enquiry/scheduled) specialist-availability pattern IELTS/PTE/TOEFL Step 7
 * established, reading real data from content/batches.ts via
 * components/spoken-english/SpokenEnglishAvailability.tsx's own completeness guard. Availability
 * and pricing remain separate business states -- a future intake never verifies a fee, and a
 * verified fee never verifies availability.
 *
 * Later Spoken English steps add more sections (FAQ, final enquiry-handoff form) once their
 * content is verified against an owner confirmation -- do not pre-fill those with placeholder
 * content.
 */

/** One fit pathway card (components/spoken-english/SpokenEnglishFit.tsx). */
export type SpokenEnglishFitItem = {
  id: string;
  title: string;
  description: string;
};

/** One "if your real need is different" alternative-route note in the fit section -- some link
 *  to another real page, some are a boundary statement with no link at all. */
export type SpokenEnglishAlternativeRoute = {
  id: string;
  body: string;
  link?: { label: string; href: string };
};

/** One of the six starting-profile questions (components/spoken-english/
 *  SpokenEnglishSpeakingProfile.tsx) -- helps a learner describe the communication task rather
 *  than reach for a single vague "fluency" request or a self-awarded level label. */
export type SpeakingProfilePrompt = {
  id: string;
  label: string;
  guidance: string;
};

/** One possible starting-priority area the profile discussion may surface. `observation` is a
 *  one-line, descriptive elaboration -- never a score, percentage or coloured severity label. */
export type SpeakingProfileArea = {
  id: string;
  title: string;
  observation: string;
};

/** One of the six communication-curriculum areas (components/spoken-english/
 *  SpokenEnglishCurriculum.tsx). `boundary` is present wherever a claim is easy to misuse
 *  (accent-shaming, a universal template, an exhaustive grammar list, promised vocabulary volume,
 *  monologue-only speaking, or hesitation-free fluency). */
export type SpokenEnglishCurriculumArea = {
  id: string;
  title: string;
  purpose: string;
  focusAreas: readonly string[];
  practiceExamples: readonly string[];
  boundary?: string;
};

/** One real-situation mapping in the compact context-application section
 *  (components/spoken-english/SpokenEnglishContextApplication.tsx) -- shows that curriculum
 *  emphasis changes by context without creating a separate mini-course, price or guarantee for
 *  each one. */
export type SpeakingContextApplication = {
  id: string;
  context: string;
  examples: readonly string[];
};

/** One stage of the five-stage coaching cycle (components/spoken-english/
 *  SpokenEnglishCoachingProcess.tsx). Describes a teaching action, never a guaranteed inclusion,
 *  quantity, sequence-per-lesson or turnaround. */
export type SpokenEnglishProcessStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  focus: string;
};

/** One of the four feedback lenses within the same component. `boundary` is present only where a
 *  lens is easy to misread as a native-accent promise (delivery/intelligibility). */
export type SpokenEnglishFeedbackFocus = {
  id: string;
  title: string;
  reviewQuestions: readonly string[];
  nextAction: string;
  boundary?: string;
};

/** One line of the "what already works" / diagnosis lists in the illustrative feedback
 *  demonstration (components/spoken-english/SpokenEnglishFeedbackDemo.tsx). */
export type SpokenEnglishFeedbackPoint = {
  id: string;
  label: string;
  body: string;
};

/** One line of the "what changed" list in the same demonstration. */
export type SpokenEnglishImprovementPoint = {
  id: string;
  body: string;
};

/** One "include these details" prompt in the no-intake availability enquiry state
 *  (components/spoken-english/SpokenEnglishAvailability.tsx). */
export type SpokenEnglishAvailabilityDetail = {
  id: string;
  label: string;
};

/** One item in the "what the learning approach is designed around" summary
 *  (components/spoken-english/SpokenEnglishLearningFormat.tsx) -- a description of the teaching
 *  approach, never a promise about frequency, quantity or a package. */
export type SpokenEnglishLearningPrinciple = {
  id: string;
  title: string;
  body: string;
};

/** One question a visitor should verify before enrolling -- a question to confirm, never an
 *  included feature. */
export type SpokenEnglishDetailToConfirm = {
  id: string;
  label: string;
};

/** One scannable group of pre-enrolment questions (Delivery and people, Timing, Speaking practice
 *  and feedback, Access and support, Commercial details). */
export type SpokenEnglishDetailGroup = {
  id: string;
  heading: string;
  items: readonly SpokenEnglishDetailToConfirm[];
};

export const spokenEnglishPage = {
  hero: {
    eyebrow: "Online Spoken English Coaching",
    // Prefers the non-emotional-outcome version per the implementing prompt's own guidance.
    heading: "Build clearer English for the conversations that matter.",
    body: "Focus on the pronunciation, response-building, vocabulary and interaction skills you need for work, interviews, presentations, study or everyday communication.",
    primaryCta: {
      label: "Discuss Your Speaking Goal",
      // Step 2, Part L: shortened to a brief invitation (goal + current difficulty) now that the
      // dedicated speaking-profile section below carries the full structured message, and the
      // final CTA carries its own complete programme-enquiry message -- see `speakingProfile.cta`
      // and `finalCta.message`.
      message:
        "Hi Aisha! I am interested in Spoken English coaching. My main speaking goal is [details], and what currently becomes difficult is [details]. Could you tell me more about the current coaching option?",
    },
    // Step 2, Part K: retargeted from the removed temporary priorities preview to the new
    // speaking-profile section -- the most useful next destination for a visitor who wants to
    // understand the programme further before enquiring.
    secondaryCta: {
      label: "Build Your Speaking Profile",
      href: "#spoken-english-speaking-profile",
    },
    reassurance:
      "No promise of instant fluency or a native accent. Progress depends on the learner's starting point, practice and available time.",
  },

  // TOEFL/PTE/IELTS-pattern authority strip -- only the two owner-confirmed facts, read directly
  // from content/site.ts by the component (never duplicated here). The two short interpretations
  // below are optional context, not a claim of certification or specialist accreditation. The
  // IELTS-specific IDP credential is deliberately not shown near this section -- see
  // components/spoken-english/SpokenEnglishAuthorityStrip.tsx.
  authority: {
    interpretations: [
      { id: "literature", body: "Advanced study of English literature, analysis and expression." },
      { id: "teaching", body: "Teaching experience grounded in explanation, guided practice and academic standards." },
    ],
  },

  fit: {
    id: "spoken-english-fit",
    eyebrow: "Your speaking situations",
    heading: "Start with where you need to speak.",
    body: "Spoken English goals are most useful when they are tied to real people, situations and tasks. Identify where communication becomes difficult before deciding what to practise.",
    pathways: [
      {
        id: "work",
        title: "Work and professional communication",
        description: "Meetings, workplace conversations, explanations and professional interactions.",
      },
      {
        id: "interviews-presentations",
        title: "Interviews and presentations",
        description: "Organising spoken responses, explaining experience, responding to questions and delivering ideas clearly.",
      },
      {
        id: "study",
        title: "Study and academic participation",
        description: "Classroom discussion, asking questions, explaining ideas and participating in academic settings.",
      },
      {
        id: "everyday",
        title: "Everyday communication",
        description: "Starting, maintaining and closing conversations; asking for clarification; handling common practical interactions.",
      },
    ] as SpokenEnglishFitItem[],
    alternativeRoutesHeading: "If your main requirement is different",
    alternativeRoutes: [
      {
        id: "test-preparation",
        body: "If the primary requirement is an IELTS, PTE or TOEFL score, the dedicated test-preparation programmes are the relevant option.",
        link: { label: "Compare IELTS, PTE and TOEFL preparation", href: "/courses#language-tests" },
      },
      {
        id: "writing",
        body: "If the primary requirement is formal writing, English Writing is the relevant option.",
        link: { label: "View English Writing", href: "/courses/english-writing" },
      },
      {
        id: "school-english",
        body: "If the requirement is school examination English, that follows its own separate O/A Level pathway.",
      },
      {
        id: "clinical-concern",
        body: "If the concern may involve a speech, language or hearing difficulty, ordinary English coaching is not a substitute for an appropriately qualified professional.",
      },
    ] as SpokenEnglishAlternativeRoute[],
  },

  // Step 2: replaces the Step 1 temporary priorities preview. Helps a learner describe a real
  // communication task rather than a vague "fluency" request, and explicitly rules out a formal
  // CEFR placement, clinical assessment or guaranteed-progress claim. See
  // docs/spoken-english-content-sources.md for the boundary decisions behind every sentence here.
  speakingProfile: {
    id: "spoken-english-speaking-profile",
    eyebrow: "Your starting profile",
    heading: "Describe the communication task—not only the level.",
    introduction:
      "A useful starting profile connects the situation, listener and purpose with what currently becomes difficult. It does not reduce every speaking need to one label.",
    promptsHeading: "What a useful profile includes",
    prompts: [
      {
        id: "situation",
        label: "Situation",
        guidance: "Where does the learner need English: meeting, interview, presentation, class, service interaction or everyday conversation?",
      },
      {
        id: "listener",
        label: "Listener",
        guidance: "Who needs to understand or respond: colleague, interviewer, client, teacher, classmate or another everyday conversation partner?",
      },
      {
        id: "communication-task",
        label: "Communication task",
        guidance: "What must the learner do: explain, answer, ask, clarify, present, discuss, negotiate a simple need or maintain a conversation?",
      },
      {
        id: "current-difficulty",
        label: "Current difficulty",
        guidance: "What happens now: difficulty finding words, building a response, following questions, pronouncing key words, organising ideas or responding spontaneously?",
      },
      {
        id: "current-experience",
        label: "Current experience",
        guidance: "What kinds of English interaction can the learner already manage? Use a description rather than a self-awarded CEFR label.",
      },
      {
        id: "timeline-context",
        label: "Timeline and practical context",
        guidance: "Is there an interview, presentation, study start, work change or other relevant date? Include country/time zone and usual availability.",
      },
    ] as SpeakingProfilePrompt[],
    profileAreasHeading: "Aisha may use this discussion to identify initial priorities across:",
    profileAreas: [
      {
        id: "pronunciation-intelligibility",
        title: "Pronunciation and intelligibility",
        observation: "Whether pronunciation currently affects how easily the listener follows you.",
      },
      {
        id: "response-organisation",
        title: "Response organisation and relevance",
        observation: "Whether responses stay organised and relevant under real conditions.",
      },
      {
        id: "spoken-grammar",
        title: "Spoken grammar and sentence control",
        observation: "Whether grammar holds up reliably once you're speaking, not just writing.",
      },
      {
        id: "functional-vocabulary",
        title: "Functional vocabulary and appropriacy",
        observation: "Whether the right words are available when you need them.",
      },
      {
        id: "listening-interaction",
        title: "Listening and interaction",
        observation: "Whether you can follow, respond to and repair a real exchange.",
      },
      {
        id: "fluency-pacing",
        title: "Fluency, pacing and repair",
        observation: "Whether pacing, pausing and recovery support or interrupt communication.",
      },
    ] as SpeakingProfileArea[],
    boundaryNote:
      "This is a coaching needs profile, not a certified CEFR placement, clinical speech assessment or guarantee of progress.",
    cta: {
      label: "Share Your Speaking Profile",
      message:
        "Hi Aisha! I am interested in Spoken English coaching. I need to speak English in [situation] with [listener/audience]. I need to [communication task]. What currently becomes difficult is [details]. I can currently manage [details], my important timeline is [if any], and my country/time zone and usual availability are [details]. Please let me know which starting priorities may be relevant and confirm the current format, schedule and fee.",
    },
  },

  // Step 2: a learner-readable communication curriculum -- six areas that work together, each
  // framed as possible coaching emphasis (not a fixed, identical syllabus for every learner) and
  // each carrying a boundary statement wherever the area is easy to overstate or misuse.
  curriculum: {
    id: "spoken-english-communication-curriculum",
    eyebrow: "Communication curriculum",
    heading: "Develop the skills behind clearer spoken communication.",
    introduction:
      "The areas below work together. The emphasis should depend on the learner's real speaking situations and starting profile, not a one-size-fits-all promise.",
    areas: [
      {
        id: "pronunciation-intelligibility",
        title: "Pronunciation and intelligibility",
        purpose: "Make important words, phrases and ideas easier for the intended listener to follow.",
        focusAreas: [
          "Relevant individual sounds where they affect understanding",
          "Word stress",
          "Sentence stress and emphasis",
          "Rhythm, phrasing and chunking",
          "Intonation used to support meaning",
          "Recognising when repetition or clarification is needed",
        ],
        practiceExamples: [
          "Introducing yourself and key names/terms clearly",
          "Explaining one work or study idea in short meaningful chunks",
          "Repeating or rephrasing a misunderstood point",
        ],
        boundary:
          "The aim is intelligible, effective communication—not removal of the learner's identity or imitation of a native accent.",
      },
      {
        id: "response-building",
        title: "Building relevant spoken responses",
        purpose: "Move from fragments or memorised lines to responses that address the listener's question or purpose.",
        focusAreas: [
          "Answering the actual question",
          "Giving a clear main point",
          "Adding relevant detail, reason or example",
          "Sequencing information",
          "Opening and closing an explanation",
          "Summarising or redirecting when needed",
        ],
        practiceExamples: [
          "A concise interview response",
          "A short meeting update",
          "Explaining a process or opinion",
          "Responding to a follow-up question",
        ],
      },
      {
        id: "spoken-grammar",
        title: "Grammar and sentence control in speech",
        purpose: "Build manageable spoken sentences that communicate time, relationships and meaning accurately enough for the situation.",
        focusAreas: [
          "Constructing complete but realistic spoken sentences",
          "Using time reference clearly",
          "Forming questions and follow-up questions",
          "Linking ideas",
          "Using modal language for requests, possibility and politeness",
          "Noticing and repairing errors that change meaning",
        ],
        practiceExamples: [
          "Describing past experience",
          "Explaining a current responsibility",
          "Making a request",
          "Comparing options",
          "Clarifying a future plan",
        ],
        boundary:
          "Effective speech can include natural pauses and self-correction. Error-free performance is not promised.",
      },
      {
        id: "functional-vocabulary",
        title: "Functional vocabulary and word choice",
        purpose: "Build language the learner can retrieve and use appropriately in relevant situations.",
        focusAreas: [
          "High-use words and phrases for the learner's contexts",
          "Collocations and useful chunks",
          "Paraphrasing when the exact word is unavailable",
          "Formality and politeness",
          "Avoiding vague or overgeneral words where precision matters",
          "Checking meaning rather than memorising unsupported synonyms",
        ],
        practiceExamples: [
          "Describing responsibilities",
          "Giving an opinion and reason",
          "Asking for clarification",
          "Disagreeing appropriately",
          "Explaining a practical problem",
        ],
      },
      {
        id: "listening-interaction",
        title: "Listening, responding and interaction",
        purpose: "Follow the other speaker, respond to what was actually said and keep communication moving.",
        focusAreas: [
          "Identifying the main point and important detail",
          "Recognising questions and response expectations",
          "Turn-taking",
          "Follow-up questions",
          "Checking and confirming meaning",
          "Asking for repetition or rephrasing",
          "Repairing a misunderstanding",
        ],
        practiceExamples: [
          "Responding to a colleague's question",
          "Handling an interview follow-up",
          "Contributing to a class or meeting discussion",
          "Confirming details in an everyday interaction",
        ],
        boundary:
          "Spoken communication is interactive. The curriculum should not treat speaking as isolated monologues only.",
      },
      {
        id: "fluency-pacing-repair",
        title: "Fluency, pacing and communication repair",
        purpose: "Organise speech into manageable stretches, use pauses purposefully and recover when communication breaks down.",
        focusAreas: [
          "Planning a short response",
          "Grouping speech into meaningful chunks",
          "Reducing avoidable filler dependence without banning natural discourse markers",
          "Balancing speed with clarity",
          "Rephrasing when a word is unavailable",
          "Self-correcting without abandoning the response",
          "Moving from rehearsed practice toward flexible use",
        ],
        practiceExamples: [
          "A timed but realistic explanation",
          "An unplanned follow-up response",
          "Restating an idea more simply",
          "Recovering after misunderstanding a question",
        ],
        boundary: "Fluency does not mean speaking nonstop, never pausing or speaking as fast as possible.",
      },
    ] as SpokenEnglishCurriculumArea[],
  },

  // Step 2, Part J: a compact mapping showing that curriculum emphasis changes by context --
  // included because it adds a genuine curriculum-to-situation link the Step 1 fit section
  // doesn't provide (fit describes situations; this maps each situation back to the specific
  // curriculum emphasis relevant to it). No separate mini-course, price or guarantee per context.
  contextApplication: {
    id: "spoken-english-context-application",
    eyebrow: "Applying the curriculum",
    heading: "Apply the same skills to the situations you face.",
    introduction: "The same curriculum areas apply differently depending on where you need to speak.",
    contexts: [
      {
        id: "work-meetings",
        context: "Work and meetings",
        examples: [
          "Clear updates and explanations",
          "Polite questions and clarification",
          "Responding to follow-up questions",
          "Appropriate professional language",
        ],
      },
      {
        id: "interviews",
        context: "Interviews",
        examples: [
          "Relevant responses",
          "Explaining experience with examples",
          "Handling clarification and follow-up",
          "Intelligibility under time pressure",
        ],
      },
      {
        id: "presentations",
        context: "Presentations",
        examples: [
          "Organising and signposting ideas",
          "Emphasis, phrasing and pacing",
          "Explaining visuals or key points",
          "Handling audience questions",
        ],
      },
      {
        id: "study",
        context: "Study",
        examples: [
          "Asking and answering questions",
          "Participating in discussion",
          "Explaining an idea",
          "Responding to another viewpoint",
        ],
      },
      {
        id: "everyday",
        context: "Everyday communication",
        examples: [
          "Starting and maintaining interaction",
          "Practical requests",
          "Checking information",
          "Repairing misunderstanding",
        ],
      },
    ] as SpeakingContextApplication[],
  },

  // Step 3: a five-stage coaching cycle showing how one real speaking situation becomes a
  // focused next attempt, plus a separate four-lens feedback explanation. This is proposed public
  // wording describing a durable instructional approach, not a confirmed operational inclusion --
  // see docs/spoken-english-offer-verification.md's "Teaching approach that can be described" vs.
  // "Operational inclusions still unresolved" split. No formal assessment, feedback quantity or
  // turnaround, homework, platform, recording, role-play frequency or outcome guarantee appears
  // anywhere below.
  process: {
    id: "spoken-english-coaching-process",
    eyebrow: "How coaching works",
    heading: "Turn one speaking situation into a focused next attempt.",
    introduction:
      "Effective speaking practice connects the message, language, delivery and interaction. The process begins with a real communication task and uses each attempt to identify what to practise next.",
    steps: [
      {
        id: "define-situation",
        number: "01",
        title: "Define the listener, purpose and task.",
        body: "Start with one real situation: who the learner needs to speak with, what they need to communicate and what a useful response must achieve.",
        focus: "A specific communication target instead of a vague request for fluency.",
      },
      {
        id: "build-language",
        number: "02",
        title: "Build the language and response shape.",
        body: "Select a manageable response structure, useful vocabulary, spoken grammar and pronunciation priorities that support the listener's needs.",
        focus: "Language chosen for the task rather than disconnected rules or memorised impressive phrases.",
      },
      {
        id: "rehearse",
        number: "03",
        title: "Rehearse a manageable first attempt.",
        body: "Practise the response in smaller parts where useful, then connect them into a complete spoken attempt with attention to meaning, phrasing and listener understanding.",
        focus: "Applying the selected language in speech—not only recognising it on a page.",
      },
      {
        id: "adapt",
        number: "04",
        title: "Respond when the conversation changes.",
        body: "Vary the question, follow-up, listener need or available preparation so the learner practises listening, responding, clarifying and rephrasing rather than repeating one fixed script.",
        focus: "Flexible communication and repair when the interaction does not follow the rehearsal exactly.",
      },
      {
        id: "review-retry",
        number: "05",
        title: "Review the attempt and apply the next priority.",
        body: "Identify what already supported communication, what most affected the attempt and which small number of changes should be applied to another response or related situation.",
        focus: "A clearer next action rather than general advice to be more confident.",
      },
    ] as SpokenEnglishProcessStep[],
    feedbackHeading: "Useful feedback answers four different questions.",
    feedbackIntroduction:
      "Feedback should identify what helped the listener, what interfered with the message and what the learner can try next. It should not reduce every speaking attempt to pronunciation correction.",
    feedbackFocuses: [
      {
        id: "message-response",
        title: "Did the response address the purpose?",
        reviewQuestions: [
          "Was the main point clear?",
          "Was the answer relevant to the question or situation?",
          "Was supporting detail organised and sufficient?",
          "Did the response have an understandable beginning, development and close where needed?",
        ],
        nextAction: "Strengthen the main point, sequence or supporting example.",
      },
      {
        id: "language-choices",
        title: "Did the language express the intended meaning?",
        reviewQuestions: [
          "Did grammar make time and relationships clear?",
          "Was vocabulary accurate and appropriate for the listener?",
          "Could the learner paraphrase when a word was unavailable?",
          "Did formality and politeness fit the situation?",
        ],
        nextAction: "Replace one vague or inaccurate pattern with a more useful alternative.",
      },
      {
        id: "delivery-intelligibility",
        title: "Could the listener follow the speech?",
        reviewQuestions: [
          "Were key words intelligible?",
          "Did word/sentence stress support meaning?",
          "Were phrasing, pausing and pace manageable?",
          "Did intonation help signal the intended meaning?",
        ],
        nextAction: "Rehearse one phrase, stress pattern or pacing change that affects listener understanding.",
        boundary: "Accent features may remain. Feedback should focus on intelligibility and meaning, not native imitation.",
      },
      {
        id: "interaction-repair",
        title: "Did the learner respond to the other speaker?",
        reviewQuestions: [
          "Was the question or main point understood?",
          "Did the response connect to what was said?",
          "Could the learner ask for clarification?",
          "Could the learner rephrase, confirm or recover from misunderstanding?",
          "Was turn-taking appropriate for the context?",
        ],
        nextAction: "Practise one clarification, follow-up or repair strategy in a changed interaction.",
      },
    ] as SpokenEnglishFeedbackFocus[],
    feedbackPrinciple:
      "Focused feedback should make the next attempt more manageable. It can recognise what is already working, identify the highest-impact issue and give the learner a specific change to test.",
    expectation:
      "Coaching can provide structured practice and specific next priorities. Progress also depends on the learner's starting point, relevant practice, available time and continued application; no communication outcome can be guaranteed.",
  },

  // Step 4: one original, website-created illustrative example proving only the quality of the
  // instructional thinking -- not learner work, a testimonial, a formal assessment, a CEFR result
  // or evidence that any response was ever spoken aloud. Every sentence in `situation`,
  // `firstAttempt`, `revisedAttempt`, `followUpQuestion` and `followUpResponse` is original website
  // copy (see docs/spoken-english-content-sources.md's "Step 4 -- illustrative example provenance"
  // note). The two boundary strings (`transcriptBoundary`, `outcomeBoundary`) are rendered in
  // normal readable text, never a tooltip/footnote/text-xs treatment.
  feedbackDemo: {
    id: "spoken-english-feedback-example",
    eyebrow: "An illustrative feedback example",
    heading: "See how focused feedback can strengthen a spoken response.",
    introduction:
      "Useful feedback identifies what already communicates successfully, what most limits the listener and which specific change the learner can apply to another attempt.",
    disclosure:
      "This website-created example is for illustration only. It is not learner work, a testimonial, a formal assessment, a CEFR result or evidence of a guaranteed outcome.",
    contextLabel: "Illustrative workplace communication practice",
    situation:
      "In a team meeting, explain why a report is not yet complete, state what you have already done and propose a realistic next action.",
    firstAttemptLabel: "First illustrative attempt",
    firstAttempt:
      "The report not complete because some data missing. I already ask but no answer. Maybe we can submit tomorrow.",
    whatWorksHeading: "What already works",
    whatWorks: [
      {
        id: "purpose",
        label: "Purpose",
        body: "The response identifies the report and explains that missing data is causing the delay.",
      },
      {
        id: "action",
        label: "Action",
        body: "The speaker indicates that they have already contacted someone and suggests a possible next date.",
      },
    ] as SpokenEnglishFeedbackPoint[],
    diagnosisHeading: "Focused tutor diagnosis",
    feedbackPoints: [
      {
        id: "message-responsibility",
        label: "Message and responsibility",
        body: "The listener needs a clearer status: which information is missing, who has been contacted and what can be completed while waiting.",
      },
      {
        id: "sentence-control",
        label: "Sentence control",
        body: "The meaning is understandable, but the response needs complete verb forms such as “is not complete” and “I have already asked” so the timing and current status are clear.",
      },
      {
        id: "specific-next-action",
        label: "Specific next action",
        body: "“Maybe we can submit tomorrow” is uncertain. State what makes tomorrow possible and what alternative action will happen if the data does not arrive.",
      },
      {
        id: "delivery-question",
        label: "Delivery question",
        body: "The transcript shows wording only. An actual spoken attempt would be needed to review intelligibility, stress, phrasing, pace, pausing and listener effort.",
      },
    ] as SpokenEnglishFeedbackPoint[],
    nextPriorityLabel: "Next revision priority",
    nextPriority:
      "State the current status, explain the missing information, give one condition for the proposed date and name the fallback action.",
    revisedAttemptLabel: "Clearer revised response",
    revisedAttempt:
      "The report is not complete because two data points are still missing. I have already asked the relevant team for them. If they arrive today, I can submit the final report tomorrow; if not, I will send the completed sections and confirm the revised deadline.",
    followUpHeading: "Now change the interaction",
    followUpQuestion: "What can you complete today?",
    followUpResponse:
      "I can complete the analysis and send the draft today. I will add the final figures as soon as the missing data arrives.",
    followUpPurposeNote:
      "The changed question tests whether the learner can keep the main message while adapting the response instead of repeating one fixed script.",
    improvementHeading: "What changed",
    improvements: [
      { id: "status-cause", body: "The status and cause are more specific." },
      { id: "verb-forms", body: "The verb forms make the timeline clearer." },
      { id: "proposed-date-condition", body: "The proposed date has a stated condition." },
      { id: "fallback-action", body: "The speaker offers a useful fallback action." },
      { id: "relevant-followup", body: "The follow-up response remains relevant without copying the first answer." },
    ] as SpokenEnglishImprovementPoint[],
    transcriptBoundary:
      "A written transcript cannot show how the response sounded. Pronunciation, intelligibility, stress, rhythm, intonation, pace, pausing, listening and turn-taking require an actual spoken interaction. No audio has been assessed in this example.",
    outcomeBoundary:
      "The revision demonstrates one feedback process. It does not prove a learner result, formal level increase, interview outcome or guaranteed progress.",
  },

  // Step 5: confirms the one owner-confirmed operational fact (online), summarises only the
  // Step 1-2 needs-led positioning, and separates both from a grouped, neutral pre-enrolment
  // checklist -- see docs/spoken-english-offer-verification.md for the field-specific evidence
  // behind every "Owner confirmed" vs. "Needs owner confirmation" line this content reflects.
  delivery: {
    id: "spoken-english-learning-format",
    eyebrow: "Programme delivery",
    heading: "Know how the current Spoken English option works before you enrol.",
    body: "Spoken English coaching is provided online. The exact delivery type, schedule, practice, feedback, support and fee should be confirmed for the current option before you decide.",
    confirmedHeading: "What is confirmed",
    confirmedOnline: {
      title: "Online coaching",
      body: "The service is provided online. Include your country or time zone and usual availability when asking about the current arrangement.",
    },
    approachHeading: "What the learning approach is designed around",
    approachItems: [
      {
        id: "real-communication-situations",
        title: "Real communication situations",
        body: "Priorities begin with where the learner needs English, who they need to speak with and what the communication must achieve.",
      },
      {
        id: "connected-communication-skills",
        title: "Connected communication skills",
        body: "The learner's emphasis may draw from response building, spoken grammar, useful vocabulary, intelligibility, listening, interaction and pacing.",
      },
    ] as SpokenEnglishLearningPrinciple[],
    distinctionNote:
      "These are descriptions of the learning approach, not promises about lesson frequency, feedback quantity, group or one-to-one delivery, or a fixed package. They do not establish that every current option includes every method in the same way.",
    confirmHeading: "Confirm these details for the current option",
    confirmBody: "Ask Aisha to confirm the complete arrangement that applies now. A detail listed here is a question to verify, not an included feature.",
    detailsToConfirm: [
      {
        id: "delivery-and-people",
        heading: "Delivery and people",
        items: [
          { id: "live-or-async", label: "Whether teaching is live, asynchronous or mixed" },
          { id: "platform", label: "Platform" },
          { id: "group-or-one-to-one", label: "Group or one-to-one availability" },
          { id: "age-level-suitability", label: "Learner age/level suitability" },
          { id: "group-size", label: "Group size, if relevant" },
        ],
      },
      {
        id: "timing",
        heading: "Timing",
        items: [
          { id: "schedule-timezone", label: "Schedule and time zone" },
          { id: "session-length-frequency", label: "Session length and frequency" },
          { id: "programme-duration", label: "Complete programme duration" },
          { id: "start-date", label: "Current start date or arrangement" },
        ],
      },
      {
        id: "practice-and-feedback",
        heading: "Speaking practice and feedback",
        items: [
          { id: "practice-structure", label: "How speaking practice is structured" },
          { id: "rehearsal-availability", label: "Whether interview/presentation rehearsal is available" },
          { id: "audio-requested", label: "Whether learner audio is requested or stored" },
          { id: "feedback-method", label: "Feedback method, frequency and turnaround" },
          { id: "homework", label: "Homework or self-practice expectations" },
        ],
      },
      {
        id: "access-and-support",
        heading: "Access and support",
        items: [
          { id: "recordings", label: "Recording availability/access period" },
          { id: "materials", label: "Materials or resource access" },
          { id: "between-session-support", label: "Between-session support" },
          { id: "missed-class-policy", label: "Missed-class/rescheduling/cancellation policy" },
        ],
      },
      {
        id: "commercial-details",
        heading: "Commercial details",
        items: [
          { id: "fee-currency", label: "Current fee and currency" },
          { id: "billing-basis", label: "Billing basis" },
          { id: "payment-refund-terms", label: "Payment/refund terms" },
        ],
      },
    ] as SpokenEnglishDetailGroup[],
    cta: {
      label: "Confirm the Current Spoken English Format",
      message:
        "Hi Aisha! I am interested in Spoken English coaching. Please confirm the current delivery type, platform, group or one-to-one availability, learner-level suitability, schedule and time zone, session frequency and duration, speaking-practice method, interview/presentation rehearsal availability, learner-audio requirements, feedback method and frequency, homework, recordings, materials, between-session support, missed-class/rescheduling policy, fee and billing basis. My main speaking situation is [details], my current experience is [details], my important timeline is [if any], and my country/time zone and usual availability are [details].",
    },
  },

  // Step 6: copy for components/spoken-english/SpokenEnglishPricing.tsx. The `enquire` branch is
  // the only one currently used -- see content/spokenEnglishPricing.ts's `spokenEnglishPricing`
  // for the gate that decides which branch actually renders. Do not add a placeholder amount to
  // the `published` branch; it exists so a future genuinely approved record has copy ready to
  // attach to. Mirrors content/toefl.ts's and content/pte.ts's `pricing` objects exactly.
  pricing: {
    id: "spoken-english-pricing",
    enquire: {
      eyebrow: "Fees and enrolment",
      heading: "Review the complete Spoken English fee before you decide.",
      body: "Ask for the current fee together with the lesson arrangement, duration, session coverage and confirmed inclusions. You can review the complete details before deciding whether the course suits your goals.",
      note: "No payment is needed to ask about the course.",
      ctaLabel: "Ask for the Current Spoken English Fee",
      ctaMessage:
        "Hello Aisha, I would like the current Spoken English course details. Please share the fee, currency, billing basis, lesson arrangement, course or package duration, session coverage, schedule options, practice activities, feedback, homework, recordings or materials, support between lessons, and relevant payment, cancellation, rescheduling and missed-class policies. My current speaking level is [details]. I mainly need English for [details]. My time zone and preferred schedule are [details].",
    },
    published: {
      eyebrow: "Current Spoken English fee",
      heading: "See the complete cost and what it covers.",
      inclusionsHeading: "What this fee includes",
      lastVerifiedLabel: "Last verified",
      validUntilLabel: "Valid until",
      ctaLabel: "Ask About Enrolling",
    },
  },

  // Step 7: replaces the Step 1 permanently-enquiry-only placeholder with the same two-state
  // (enquiry / scheduled) specialist-availability pattern IELTS/PTE/TOEFL Step 7 established.
  // content/batches.ts currently has no published, non-past, complete Spoken-English-tagged
  // record (its two spoken-english-tagged entries are historical: past dates, "Closed",
  // unpublished), so production renders the enquiry state below. See
  // components/spoken-english/SpokenEnglishAvailability.tsx's isCompleteSpokenEnglishIntake() for
  // the completeness guard and docs/spoken-english-offer-verification.md for the current
  // verification record.
  availability: {
    id: "spoken-english-availability",
    eyebrow: "Current availability",

    // No-intake enquiry state (the one currently shown).
    enquiryHeading: "Ask about a suitable Spoken English start.",
    enquiryBody:
      "No future Spoken English start date is currently confirmed on this page. Share what you need English for, your current speaking experience, time zone, usual availability and any important deadline so Aisha can confirm whether a suitable option is currently available.",
    detailsHeading: "Include these details",
    enquiryDetails: [
      { id: "goal-situation", label: "Main speaking goal or real-life situation" },
      { id: "experience-difficulty", label: "Current speaking experience and main difficulty" },
      { id: "who-with", label: "Where and with whom you need to communicate" },
      { id: "deadline", label: "Any interview, presentation, study, travel or work deadline" },
      { id: "location", label: "Country and time zone" },
      { id: "schedule-fit", label: "Days and times that usually suit you" },
    ] as SpokenEnglishAvailabilityDetail[],
    enquiryCtaLabel: "Check Spoken English Availability",
    enquiryMessage:
      "Hello Aisha, I would like to check current Spoken English availability. My main speaking goal or situation is [details]. My current speaking experience and main difficulty are [details]. I need to communicate with/for [details]. My relevant deadline, if any, is [details]. I am in [details] time zone, and the days and times that usually suit me are [details]. Please let me know whether a suitable current option is available and share its confirmed start, schedule, format and duration.",
    reservationNote: "Sending an enquiry does not reserve a place, and no payment is required to ask.",

    // Verified scheduled state (renders only once getPublishedUpcomingBatches("spoken-english")
    // returns at least one complete record -- see components/spoken-english/
    // SpokenEnglishAvailability.tsx's isCompleteSpokenEnglishIntake()).
    scheduledHeading: "Review the confirmed Spoken English option.",
    scheduledBody: "Check the start date, schedule, format, duration and Pakistan time before asking whether this option suits your speaking goals.",
    timezoneLabel: "Pakistan Standard Time (PKT, UTC+5)",
    intakeCtaLabel: "Ask About This Spoken English Option",
    moreAvailabilityLabel: "View all Spoken English availability",
  },

  // Step 1: a single strong WhatsApp action plus a plain email fallback -- a dedicated Spoken
  // English form variant (mirroring IELTS/PTE/TOEFL Step 9) is a later step, not a Step 1 addition.
  // Step 2, Part L: now carries its own complete programme-enquiry message (previously reused the
  // hero's message, which Step 2 shortened) -- the same eight-field information model as the
  // speaking-profile CTA, ending with an explicit request to confirm format, schedule and fee.
  finalCta: {
    id: "spoken-english-enquiry",
    eyebrow: "Your next step",
    heading: "Tell Aisha where speaking English matters most.",
    body: "Share the situations, listeners and responses you need to handle, what currently feels difficult, and any important timeline. Aisha can then confirm whether a current Spoken English option may suit that requirement.",
    detailsHeading: "Include these details",
    details: [
      { id: "goal-situations", label: "Main speaking goal and real situations" },
      { id: "audience", label: "Who you need to communicate with" },
      { id: "difficulty", label: "What currently becomes difficult" },
      { id: "experience", label: "Current English experience or level, in your own words" },
      { id: "timeline", label: "Any important interview, presentation, travel, study or work timeline" },
      { id: "location-availability", label: "Country/time zone and usual availability" },
      { id: "format-preference", label: "Preferred group or one-to-one format, to confirm" },
    ],
    primaryLabel: "Discuss Spoken English Coaching",
    message:
      "Hi Aisha! I would like to arrange Spoken English coaching. I need to speak English in [situation] with [listener/audience] to [communication task]. What currently becomes difficult is [details], and I can currently manage [details]. My important timeline is [if any], and my country/time zone and usual availability are [details]. Please confirm whether a current coaching option may suit this requirement, and share the format, schedule and fee.",
    emailCtaLabel: "Email Aisha",
    emailAccessibleLabel: "Email Aisha about Spoken English coaching",
    emailSubject: "Spoken English coaching enquiry",
    emailBody: `Hello Aisha,

I would like to ask about Spoken English coaching.

Main speaking goal and real situations:
Who I need to communicate with:
What currently becomes difficult:
Current English experience or level, in my own words:
Any important timeline:
Country/time zone and usual availability:
Preferred group or one-to-one format, if any:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
    supportingNote: "Ask first; current format, schedule and fee are confirmed before any enrolment decision.",
  },
} as const;
