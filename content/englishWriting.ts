/**
 * English Writing-page-specific copy (English Writing Step 1). Canonical programme identity --
 * slug, public name, route -- stays in content/courses.ts; this file only holds the sales/
 * positioning copy that doesn't belong on the generic Course object. Aisha's qualification and
 * professional role are NOT duplicated here -- components read those directly from
 * content/site.ts.
 *
 * The legacy content/courses.ts english-writing record ("English Writing Mastery", "write
 * clearly, correctly, confidently", "Live Zoom classes (recorded)", "PKR 10,000", etc.) is not
 * publication-authoritative for /courses/english-writing -- see
 * docs/english-writing-offer-verification.md for the full list of unverified operational facts.
 *
 * Step 2 adds a needs-led writing profile and a public development framework framed as possible
 * priorities, not a fixed syllabus. Step 3 adds an adaptable five-stage coaching cycle and a
 * four-lens feedback framework -- pedagogical guidance, never a verified promise that every
 * lesson follows the sequence or that assignments, a fixed number of drafts, or a specific
 * feedback method/frequency/turnaround are included. Step 4 adds one original, website-created
 * illustrative feedback demonstration (never a real learner's work) that makes the Step-3 process
 * concrete, plus a fail-closed verified-evidence path that renders nothing until a genuine,
 * consent-approved English-Writing-tagged testimonial exists. Step 5 adds a learning-format section
 * that publishes the one verified delivery fact (online English tutoring), summarises the stable
 * educational approach from Steps 1-4, and translates every unresolved operational detail into a
 * pre-enrolment confirmation checklist rather than answering it. Step 6 adds pricing copy only --
 * the actual fee record, its fail-closed validation and its "enquire"/"published" gate live in the
 * dedicated content/englishWritingPricing.ts, never here. Step 7 upgrades `availability` to a
 * date-aware two-state (enquire/scheduled) shape, mirroring Spoken English Step 7 exactly -- the
 * actual batch records and their completeness validation live in content/batches.ts, lib/batches.ts
 * and components/english-writing/EnglishWritingAvailability.tsx, never duplicated here. Step 8 adds
 * `faq` heading copy only -- the eight question/answer pairs live in the dedicated
 * content/englishWritingFaqs.ts, independent of content/faqs.ts's generalFaqs. Step 9 reduces
 * `finalCta` to page-facing copy only -- the actual WhatsApp/email message text and the shared
 * enquiry-fields list live in the dedicated content/englishWritingEnquiry.ts, which also extends
 * the site's shared allowlisted specialist-form-variant architecture (lib/enquiryQuery.ts,
 * components/DiagnosticForm.tsx, app/free-diagnostic-test/page.tsx).
 */

/** One of the four "who this coaching may suit" context cards
 *  (components/english-writing/EnglishWritingFit.tsx). */
export type EnglishWritingContextCard = {
  id: string;
  title: string;
  relevantWhen: string;
  usefulDetail: string;
  /** Optional short redirect cue -- e.g. the study card's note that named exam-writing
   *  preparation follows its own dedicated route below. */
  note?: string;
};

/** One explanatory prompt in the Step-2 writing profile. These are static reflection prompts,
 *  not form controls, a scored diagnostic or a formal placement assessment. */
export type EnglishWritingProfilePrompt = {
  id: string;
  question: string;
  helper: string;
  examples: readonly string[];
};

/** One connected area in the Step-2 writing-development framework. The areas describe possible
 *  priorities; they do not promise a fixed module sequence or equal coverage for every learner. */
export type EnglishWritingDevelopmentArea = {
  id: string;
  title: string;
  purpose: string;
  possiblePriorities: readonly string[];
  reflectionPrompt: string;
};

/** One context-to-priority mapping. Examples help learner recognition without becoming a public
 *  inclusion list for every document type. */
export type EnglishWritingContextApplication = {
  id: string;
  title: string;
  description: string;
  possiblePriorities: readonly string[];
  boundary: string;
};

/** One internal route-selection link (IELTS/PTE/TOEFL/O-A Level) in
 *  components/english-writing/EnglishWritingRouteGuidance.tsx. */
export type EnglishWritingRouteLink = {
  id: string;
  label: string;
  href: string;
  description: string;
};

/** One of the five stages in the Step-3 writing-coaching cycle
 *  (components/english-writing/EnglishWritingCoachingProcess.tsx). An adaptable pedagogical
 *  sequence, not a verified universal lesson format. */
export type EnglishWritingProcessStage = {
  id: string;
  number: string;
  title: string;
  purpose: string;
  learnerAction: string;
  boundary?: string;
};

/** One of the four review lenses used to explain what useful feedback can focus on. Each lens is a
 *  question, not a scoring rubric or a promise of comprehensive correction. */
export type EnglishWritingFeedbackLens = {
  id: string;
  title: string;
  question: string;
  examples: readonly string[];
  boundary?: string;
};

/** One focused revision priority in the Step-4 illustrative demonstration -- an observation about
 *  the illustrative first attempt plus the question that guides the possible revision. */
export type EnglishWritingDemonstrationPriority = {
  id: string;
  title: string;
  observation: string;
  revisionQuestion: string;
};

/** One "what changed" item comparing the illustrative first attempt with the possible revision. */
export type EnglishWritingDemonstrationChange = {
  id: string;
  title: string;
  explanation: string;
};

/** One item in the Step-5 stable-approach summary -- an educational principle established across
 *  Steps 1-4, never a package inclusion. */
export type EnglishWritingApproachItem = {
  id: string;
  title: string;
  description: string;
};

/** One group of pre-enrolment confirmation questions (components/english-writing/
 *  EnglishWritingLearningFormat.tsx). Every question here is unresolved and must remain a
 *  question -- the checklist never answers what it groups. */
export type EnglishWritingConfirmationGroup = {
  id: string;
  title: string;
  questions: readonly string[];
};

/** One "include these details" prompt in the Step-7 no-intake availability enquiry state
 *  (components/english-writing/EnglishWritingAvailability.tsx). */
export type EnglishWritingAvailabilityDetail = {
  id: string;
  label: string;
};

export const englishWritingContent = {
  slug: "english-writing",
  label: "English Writing",

  // Step 10: single canonical source for both the visible breadcrumb
  // (components/english-writing/EnglishWritingBreadcrumb.tsx) and the matching BreadcrumbList
  // JSON-LD (app/courses/english-writing/page.tsx) -- built from the exact same array so the
  // visible path and structured data can never disagree. Mirrors content/spokenEnglish.ts's,
  // content/toefl.ts's and content/pte.ts's `breadcrumb` field exactly. The final label "English
  // Writing" aligns with the page's absolute title, H1 intent and the Step 9 locked-form
  // programme label -- not the legacy course-record label "English Writing Mastery".
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "English Writing" },
  ],

  hero: {
    eyebrow: "Online English tutoring",
    heading: "Online English Writing Coaching",
    body: "For learners who want to strengthen sentence clarity, organisation and purposeful written English for study, work or everyday communication.",
    primaryCta: {
      label: "Discuss your writing goals",
      message:
        "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. The part I find difficult is [sentences/grammar/organisation/another issue].",
    },
    secondaryCta: {
      label: "See who it may suit",
      href: "#english-writing-fit",
    },
    reassurance:
      "Share what you need to write and what feels difficult. Aisha can confirm whether the current offer is a suitable fit.",
  },

  // Only the three owner-confirmed facts the implementing prompt permits -- no years of
  // experience, learner counts, institutions, ratings, publications or writing-specific
  // certification. site.qualification/site.professionalRole are read directly by the component,
  // never duplicated here.
  authority: {
    thirdFact: "Online English tutoring",
  },

  fit: {
    id: "english-writing-fit",
    eyebrow: "Find your starting point",
    heading: "Who this coaching may suit",
    body: "Start with the situation in which you need to write. The examples below help you describe your goal; the exact coaching scope and format should be confirmed before enrolment.",
    cards: [
      {
        id: "study",
        title: "Writing for study",
        relevantWhen:
          "You are working on essays, reports or extended written responses for a course or programme and want clearer sentences, structure and organisation.",
        usefulDetail: "The subject or assignment type, and where your writing currently feels weakest.",
        note: "If you need IELTS, PTE or TOEFL Writing preparation specifically, that follows its own dedicated route below.",
      },
      {
        id: "work",
        title: "Writing for work",
        relevantWhen:
          "You write emails, reports or other routine documents at work and want to communicate more clearly and confidently.",
        usefulDetail: "The kind of document you write most often and what currently feels difficult about it.",
      },
      {
        id: "everyday",
        title: "Everyday written English",
        relevantWhen:
          "You want more control and confidence in everyday written communication -- messages, forms or other practical writing.",
        usefulDetail: "A recent example of writing that felt difficult to get right.",
      },
      {
        id: "foundations",
        title: "Stronger writing foundations",
        relevantWhen:
          "You notice recurring grammar, sentence or organisation difficulties but are not yet sure how to describe or fix them.",
        usefulDetail: "One or two examples of mistakes or patterns you keep noticing.",
      },
    ] as EnglishWritingContextCard[],
  },

  // Step 2: a static starting-point guide, not an assessment, form, level test or scored
  // diagnostic. It helps a visitor send a useful enquiry without collecting a document.
  writingProfile: {
    id: "english-writing-profile",
    eyebrow: "Your writing starting point",
    heading: "Start with your writing profile",
    introduction:
      "A useful starting point is not simply whether your English is strong or weak. It is what you need to write, who will read it and what becomes difficult when you try.",
    promptsHeading: "Four details that make an enquiry more useful",
    prompts: [
      {
        id: "writing-type",
        question: "What do you need to write?",
        helper: "Name the situation before trying to name your level.",
        examples: [
          "Study-related responses",
          "Workplace messages or documents",
          "Practical everyday communication",
          "Another writing situation you can describe",
        ],
      },
      {
        id: "reader-purpose",
        question: "Who will read it, and why?",
        helper: "Consider what the reader needs to understand or do.",
        examples: ["Explain or inform", "Request or respond", "Describe or compare", "Present a position"],
      },
      {
        id: "current-difficulty",
        question: "What currently feels difficult?",
        helper: "A specific recurring problem is more useful than a broad label.",
        examples: [
          "Building complete sentences",
          "Controlling grammar or punctuation",
          "Connecting and developing ideas",
          "Choosing suitable words or tone",
          "Knowing what to revise",
        ],
      },
      {
        id: "right-route",
        question: "Is it general writing or a named exam need?",
        helper: "Test and syllabus writing follow their own task-specific routes.",
        examples: ["General written English", "IELTS, PTE or TOEFL", "O/A Level English", "Not sure yet"],
      },
    ] as EnglishWritingProfilePrompt[],
    boundaryNote:
      "This is a starting-point guide, not a formal writing assessment, certified level placement or guarantee of progress.",
    cta: {
      label: "Share my writing profile",
      message:
        "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. The type of writing is [describe it], the reader or purpose is [details], and I currently find [sentence control/organisation/tone/revision/another issue] difficult.",
    },
  },

  // Step 2: six connected areas that explain how writing can be developed. They are possible
  // priorities selected from the learner's context, never a fixed lesson sequence, inclusion list
  // or promise that every area receives equal time.
  framework: {
    id: "english-writing-framework",
    eyebrow: "Writing development framework",
    heading: "The areas that shape effective writing",
    introduction:
      "Writing difficulties rarely sit in only one place. The relevant priorities may involve meaning, sentence control, organisation, reader awareness and revision, depending on the writing situation.",
    areas: [
      {
        id: "purpose-reader-task",
        title: "Purpose, reader and task",
        purpose: "Make writing choices from what the text needs to achieve and what the reader needs to understand.",
        possiblePriorities: [
          "Clarifying the purpose of the text",
          "Identifying the intended reader",
          "Selecting relevant information",
          "Recognising the form and constraints of the task",
        ],
        reflectionPrompt: "Can you state what the reader should understand or do after reading?",
      },
      {
        id: "sentence-control",
        title: "Sentence control",
        purpose: "Construct sentences that express the intended meaning without unnecessary complexity.",
        possiblePriorities: [
          "Complete sentence construction",
          "Clause and verb relationships",
          "Sentence boundaries",
          "Grammar and punctuation that support meaning",
        ],
        reflectionPrompt: "Do your sentences express the idea clearly, or do they become incomplete, crowded or difficult to follow?",
      },
      {
        id: "paragraph-development",
        title: "Paragraph focus and development",
        purpose: "Build paragraphs around a clear point and develop it with relevant supporting information.",
        possiblePriorities: [
          "Establishing a clear paragraph focus",
          "Selecting supporting details",
          "Developing rather than listing ideas",
          "Maintaining unity from sentence to sentence",
        ],
        reflectionPrompt: "Can a reader identify the main point of each paragraph and see how the details support it?",
      },
      {
        id: "organisation-cohesion",
        title: "Overall organisation and cohesion",
        purpose: "Order and connect ideas so the reader can follow how the whole text develops.",
        possiblePriorities: [
          "Sequencing ideas for the task and reader",
          "Creating an appropriate opening, development and ending",
          "Using transitions deliberately",
          "Avoiding repetition and abrupt jumps",
        ],
        reflectionPrompt: "Does the reader know why each section comes next?",
      },
      {
        id: "vocabulary-tone",
        title: "Vocabulary, tone and precision",
        purpose: "Choose language that communicates the intended meaning and fits the reader and situation.",
        possiblePriorities: [
          "Choosing precise rather than vague wording",
          "Using an appropriate level of formality",
          "Avoiding unnecessary complexity",
          "Maintaining a consistent, suitable tone",
        ],
        reflectionPrompt: "Do your word choices fit the reader and purpose, or are they sometimes vague, repetitive or too formal or informal?",
      },
      {
        id: "revision-self-review",
        title: "Revision and self-review",
        purpose: "Develop a manageable way to review purpose, organisation and recurring problems in your own draft.",
        possiblePriorities: [
          "Checking whether the text fulfils its purpose",
          "Reviewing organisation before surface errors",
          "Noticing recurring personal patterns",
          "Making deliberate changes for clarity and precision",
        ],
        reflectionPrompt: "When you reread a draft, do you know what to check first and which changes matter most?",
      },
    ] as EnglishWritingDevelopmentArea[],
  },

  contextMap: {
    id: "english-writing-context-map",
    eyebrow: "Applying the framework",
    heading: "The emphasis changes with the writing situation",
    introduction:
      "The same development areas can matter in different ways. Priorities should be selected from what the learner needs to write, not from a promise that every topic is always covered.",
    contexts: [
      {
        id: "study",
        title: "Study-related writing",
        description: "For learners developing their own structured written responses outside a named test-preparation promise.",
        possiblePriorities: [
          "Communicating ideas in a clear structure",
          "Developing and connecting relevant points",
          "Using a suitable study context and tone",
          "Strengthening the learner's own revision process",
        ],
        boundary:
          "Coaching supports the learner's own skill development; it is not a service for completing assessed work on the learner's behalf.",
      },
      {
        id: "workplace",
        title: "Workplace writing",
        description: "For professionals describing recurring difficulties in common written communication at work.",
        possiblePriorities: [
          "Clarifying the purpose and required response",
          "Organising information for the reader",
          "Using an appropriate and consistent tone",
          "Making routine communication concise and usable",
        ],
        boundary:
          "The exact document types and any confidentiality requirements must be confirmed before materials are shared.",
      },
      {
        id: "everyday",
        title: "Everyday written communication",
        description: "For learners who want more control in practical written English used in daily situations.",
        possiblePriorities: [
          "Writing complete, understandable messages",
          "Using practical sentence and paragraph control",
          "Matching tone to the relationship and purpose",
          "Building deliberate self-checking habits",
        ],
        boundary:
          "Everyday writing takes many forms; the relevant examples and priorities should be confirmed from the learner's situation.",
      },
    ] as EnglishWritingContextApplication[],
    integrityNote:
      "Coaching is intended to help learners develop and revise their own writing. It does not include completing assessed work, disguising plagiarism or helping someone misrepresent authorship.",
  },

  // Step 3: an adaptable five-stage writing-coaching cycle plus a four-lens feedback framework.
  // This is pedagogical guidance -- it never asserts that every lesson, learner or package follows
  // an identical sequence, includes assignments, or receives feedback of a specific method,
  // frequency or turnaround. See docs/english-writing-offer-verification.md for every unresolved
  // operational fact this section deliberately avoids asserting.
  coachingProcess: {
    id: "english-writing-coaching-process",
    eyebrow: "From a real writing need to a revised attempt",
    heading: "From a writing need to a more deliberate revision",
    introduction:
      "A useful writing-coaching cycle connects the real task with a focused attempt, review and learner revision. The exact activity and feedback arrangement should be confirmed for the current offer.",
    stages: [
      {
        id: "clarify-task",
        number: "01",
        title: "Clarify the task, reader and purpose",
        purpose: "Identify what needs to be written, who will read it and what the writing should achieve.",
        learnerAction: "Describe the situation, required form, reader and any relevant constraint in plain language.",
      },
      {
        id: "plan-message",
        number: "02",
        title: "Plan the message and reader path",
        purpose: "Decide the main point, select relevant information and arrange it in an order the reader can follow.",
        learnerAction: "Create a short plan using the central message, key points and intended progression.",
      },
      {
        id: "focused-attempt",
        number: "03",
        title: "Write a manageable first attempt",
        purpose: "Turn the plan into enough writing to reveal how meaning, sentences and organisation are working together.",
        learnerAction: "Draft a relevant section or short response rather than trying to perfect every sentence immediately.",
        boundary: "The size, format and method of any writing practice must be confirmed; this page does not request or store a document.",
      },
      {
        id: "review-priorities",
        number: "04",
        title: "Identify the most useful revision priorities",
        purpose: "Review the attempt through a small number of lenses so the next action is clear rather than overwhelming.",
        learnerAction:
          "Notice what already communicates successfully and select a manageable set of changes involving purpose, organisation, sentence control, language or tone.",
      },
      {
        id: "revise-transfer",
        number: "05",
        title: "Revise, reflect and use the learning again",
        purpose: "Make deliberate changes, compare the revised version with the purpose and carry one or two priorities into another writing situation.",
        learnerAction: "Explain what changed, why it changed and what should be checked first next time.",
        boundary: "Revision remains the learner's own work; coaching must not replace authorship.",
      },
    ] as EnglishWritingProcessStage[],

    feedbackHeading: "What useful review can focus on",
    feedbackIntroduction:
      "Useful feedback is easier to act on when it is organised around the writing purpose rather than presented as an unexplained list of corrections.",
    feedbackLenses: [
      {
        id: "purpose-response",
        title: "Purpose and response",
        question: "Does the writing do what the task and reader require?",
        examples: [
          "Relevance to the purpose",
          "Clarity of the central message",
          "Sufficient and appropriate information",
          "Reader understanding or required response",
        ],
        boundary: "This is a review focus, not formal task scoring.",
      },
      {
        id: "organisation-development",
        title: "Organisation and development",
        question: "Can the reader follow how the ideas are selected, developed and connected?",
        examples: [
          "Overall sequence",
          "Paragraph focus",
          "Relevant development",
          "Cohesion without mechanical linking words",
          "Avoiding repetition or abrupt jumps",
        ],
      },
      {
        id: "sentences-language",
        title: "Sentences and language choices",
        question: "Do sentence structure, grammar, punctuation and vocabulary support the intended meaning?",
        examples: [
          "Complete and manageable sentences",
          "Recurring patterns that obscure meaning",
          "Punctuation supporting sentence boundaries",
          "Precise vocabulary",
          "Suitable tone and formality",
        ],
        boundary: "This does not promise perfect grammar or correction of every surface error.",
      },
      {
        id: "revision-independence",
        title: "Revision and independence",
        question: "Can the learner identify what to change and what to check in future writing?",
        examples: [
          "Choosing priorities rather than changing everything at once",
          "Explaining the reason for a revision",
          "Noticing recurring personal patterns",
          "Building a manageable self-review sequence",
          "Transferring one priority to another writing situation",
        ],
      },
    ] as EnglishWritingFeedbackLens[],

    feedbackPrinciple:
      "Feedback should give the learner something specific to understand, revise and try again — not silently replace the learner's writing with the teacher's version.",

    boundaryNote:
      "The exact practice format, amount of writing, feedback method, number of revisions and turnaround must be confirmed before enrolment. This page does not provide document upload or promise proofreading, rewriting or completion of assessed work.",

    cta: {
      label: "Discuss my writing situation",
      message:
        "Hi Aisha! I'm interested in online English writing coaching. I need to write [type of writing] for [reader/purpose]. What currently feels difficult is [details]. I would like to ask what practice and feedback option, if any, is currently available.",
    },
  },

  // Step 4: one original, website-created illustrative example -- not a real learner, assignment,
  // grade, client, document or testimonial. It demonstrates teaching judgement (how purpose,
  // reader and a few focused priorities can guide revision), never a promised feedback format,
  // full-document review, line editing, a number of revisions, or a learner outcome. See
  // docs/english-writing-offer-verification.md's demonstration rows and
  // docs/testimonial-content-intake.md's "English Writing-specific intake fields" section, which
  // records this example as "teaching demonstration -- not learner evidence" so it can never be
  // mistaken for a consented outcome record.
  demonstration: {
    id: "english-writing-demonstration",
    eyebrow: "Illustrative teaching example",
    heading: "See how focused revision decisions can improve a message",
    introduction:
      "This short example shows how purpose, reader and a few focused priorities can guide revision. It demonstrates teaching judgement, not a promised feedback format or learner outcome.",
    disclosure:
      "This example was created for this website. It is not a real learner's work, testimonial, graded response or evidence of a result.",

    situationLabel: "Situation: asking a colleague for missing information needed to complete a report",
    goalLabel:
      "Goal: explain what is missing, state the relevant deadline and make a clear, respectful request.",
    scopeQualifier:
      "The scenario is illustrative; exact writing contexts covered by the current offer must be confirmed.",

    firstAttemptLabel: "Illustrative first attempt",
    firstAttempt:
      "Hi, I am writing because report not complete and I need data. Send me soon because tomorrow deadline. I told before but no reply. Kindly do needful.",

    whatAlreadyWorksHeading: "What already communicates",
    whatAlreadyWorks: [
      "The writer's need is broadly visible",
      "Urgency is communicated",
      "The message attempts a direct request",
    ] as readonly string[],

    prioritiesHeading: "Focused revision priorities",
    priorities: [
      {
        id: "context",
        title: "Give the reader enough context",
        observation: "The reader does not yet know which report or which information is missing.",
        revisionQuestion: "What specific figures or details are needed, and what task depends on them?",
      },
      {
        id: "timing",
        title: "Make the request and timing precise",
        observation: "“Soon” does not tell the reader when the information is needed.",
        revisionQuestion: "What exact time would allow the writer to meet the deadline?",
      },
      {
        id: "tone",
        title: "Adjust tone without hiding the urgency",
        observation: "The message can state the urgency while giving the reader a clear, respectful next action.",
        revisionQuestion:
          "How can the writer ask directly and also invite the colleague to say if the timing is not possible?",
      },
    ] as EnglishWritingDemonstrationPriority[],

    revisionLabel: "One possible learner revision",
    revision:
      "Hello [Name], I'm completing the monthly report, but I still need the sales figures for April. Could you send them by 3 p.m. today so I can meet tomorrow's deadline? If that timing is not possible, please let me know when the figures will be available. Thank you.",
    revisionAuthorshipNote:
      "This is one possible revision, not the single perfect answer. In the teaching model, the learner remains the author of their own revision -- Aisha does not rewrite the learner's document for them.",

    whatChangedHeading: "What changed",
    whatChanged: [
      { id: "context", title: "Context", explanation: "The report and missing information are identified." },
      { id: "action", title: "Action", explanation: "The reader knows exactly what to send." },
      { id: "timing", title: "Timing", explanation: "A precise request replaces a vague deadline." },
      {
        id: "tone",
        title: "Tone",
        explanation: "Urgency remains clear while the reader has a respectful way to respond.",
      },
      {
        id: "sentence-clarity",
        title: "Sentence clarity",
        explanation: "Complete sentences make the request easier to follow.",
      },
    ] as EnglishWritingDemonstrationChange[],

    formatBoundary:
      "This illustration explains a feedback principle. It does not promise that the current offer includes full-document review, line-by-line editing, a particular number of revisions or this exact written-feedback format.",
    outcomeBoundary:
      "The example demonstrates a revision process, not a learner result, grade improvement, workplace outcome or guaranteed level of progress.",
  },

  // Step 5: the one verified delivery fact, a summary of the stable educational approach already
  // established in Steps 1-4, and a pre-enrolment confirmation checklist that turns every
  // unresolved operational detail into a question rather than an answer. See
  // docs/english-writing-offer-verification.md for the evidence behind the one verified fact and
  // the complete list of items this section deliberately leaves unanswered.
  learningFormat: {
    id: "english-writing-learning-format",
    eyebrow: "Learning format",
    heading: "Confirm the current format before you enrol",
    introduction:
      "English Writing support is offered online. The exact session format, timing, writing practice, feedback arrangement and commercial terms should be confirmed for the current option before enrolment or payment.",

    confirmedHeading: "What's confirmed",
    confirmedFact: {
      label: "Confirmed delivery category",
      value: "Online English tutoring",
      explanation:
        "The page does not yet publish a specific platform, live/asynchronous arrangement or group/private format.",
    },

    approachHeading: "What the learning approach is built around",
    approachItems: [
      {
        id: "real-situation",
        title: "The learner's real writing situation",
        description: "Start with what the learner needs to write, who will read it and what currently feels difficult.",
      },
      {
        id: "connected-priorities",
        title: "Connected writing priorities",
        description:
          "Consider purpose, sentence control, paragraph development, organisation, vocabulary, tone and revision as connected areas rather than isolated grammar exercises.",
      },
      {
        id: "focused-attempts",
        title: "Focused attempts and revision decisions",
        description:
          "Use manageable writing practice to identify a small number of useful priorities and support deliberate learner revision.",
      },
      {
        id: "learner-authorship",
        title: "Learner authorship",
        description: "Help the learner understand and revise their own writing rather than replacing it with done-for-you work.",
      },
    ] as EnglishWritingApproachItem[],
    approachDistinctionNote:
      "These points describe the educational approach presented on this page. They do not confirm lesson frequency, assignments, document review, feedback method or package inclusions.",

    confirmHeading: "What to confirm for the current option",
    confirmIntroduction: "Ask these questions before making a payment so the format and expectations are clear.",
    confirmationGroups: [
      {
        id: "delivery-participants",
        title: "Delivery and participants",
        questions: [
          "Is the current option live, asynchronous or mixed?",
          "Which platform is used?",
          "Is it group, one-to-one or another arrangement?",
          "Which learner ages and starting levels can it support?",
          "If group-based, what is the expected group size?",
        ],
      },
      {
        id: "timing-duration",
        title: "Timing and duration",
        questions: [
          "How long is each session or activity?",
          "How often does it take place?",
          "Is there a fixed programme duration?",
          "Which days, times and timezone apply?",
          "Is there a confirmed start date or rolling arrangement?",
        ],
      },
      {
        id: "practice-feedback",
        title: "Writing practice and feedback",
        questions: [
          "What kind and amount of writing practice is used?",
          "Are full documents, short sections or in-session tasks involved?",
          "How is feedback delivered?",
          "How often is feedback provided?",
          "Is a turnaround time stated?",
          "How many drafts or revisions, if any, are included?",
          "Are tests, rubrics or progress checks used?",
        ],
      },
      {
        id: "access-privacy-support",
        title: "Access, privacy and support",
        questions: [
          "Are recordings, materials or worksheets provided?",
          "Is homework expected?",
          "Is between-session support included?",
          "Are learner drafts uploaded, stored or retained?",
          "What privacy/confidentiality expectations apply before a document is shared?",
          "What happens after a missed session?",
        ],
      },
      {
        id: "commercial-details",
        title: "Commercial details",
        questions: [
          "What is the current fee and currency?",
          "What period or number of sessions does the fee cover?",
          "Is payment one-time, instalment-based or recurring?",
          "What payment method is used?",
          "What are the rescheduling, cancellation and refund terms?",
        ],
      },
    ] as EnglishWritingConfirmationGroup[],

    confirmCta: {
      label: "Confirm the current writing format",
      message:
        "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. Before enrolling, could you please confirm the current format, timing, writing practice, feedback arrangement, fee and relevant policies?",
    },
    paymentHelperNote: "Confirm the current details directly before making a payment.",
  },

  // Step 6: page-facing pricing copy only. The actual fee record (status "enquire"/"published",
  // amount, currency, dates, validation) lives in the dedicated, fail-closed
  // content/englishWritingPricing.ts -- never here and never in content/courses.ts's legacy
  // `price: 10000`. See docs/english-writing-offer-verification.md's pricing section for the full
  // confirmation checklist still needed from Aisha before a "published" record can exist.
  pricing: {
    id: "english-writing-pricing",
    enquire: {
      eyebrow: "Current fee",
      heading: "Confirm the fee for the current writing option",
      body: "A complete current English Writing price has not been verified for publication on this page. Ask Aisha to confirm the exact amount, currency, billing basis, what the fee covers and the relevant payment and cancellation terms before paying.",
      note: "Confirm the complete current details directly before making a payment.",
      ctaLabel: "Ask for the current fee",
      ctaMessage:
        "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. Could you please confirm the current option, exact fee and currency, billing basis, what it covers, timing, payment method and relevant cancellation/refund terms?",
    },
    published: {
      eyebrow: "Current English Writing fee",
      heading: "See the complete cost and what it covers.",
      inclusionsHeading: "What this fee includes",
      lastVerifiedLabel: "Last verified",
      validUntilLabel: "Valid until",
      ctaLabel: "Ask About Enrolling",
    },
  },

  routeGuidance: {
    id: "english-writing-route-guidance",
    eyebrow: "Choose the right route",
    heading: "Looking for exam-specific writing support?",
    intro:
      "General English Writing coaching is for broader writing development. IELTS, PTE and TOEFL have separate test-preparation routes because their tasks and scoring requirements differ, and O/A Level English is a separate subject/exam offer.",
    links: [
      {
        id: "ielts",
        label: "IELTS preparation",
        href: "/courses/ielts",
        description: "For the IELTS Writing task types and band-score requirements specifically.",
      },
      {
        id: "pte",
        label: "PTE Academic preparation",
        href: "/courses/pte",
        description: "For PTE Academic's computer-based writing tasks and scoring.",
      },
      {
        id: "toefl",
        label: "TOEFL iBT preparation",
        href: "/courses/toefl",
        description: "For TOEFL iBT's writing tasks and score requirements.",
      },
      {
        id: "o-a-level",
        label: "O/A Level English",
        href: "/courses/o-a-level-english",
        description: "For Cambridge or Edexcel syllabus-based English papers.",
      },
    ] as EnglishWritingRouteLink[],
  },

  // No owner-verified, future, published English Writing intake exists in content/batches.ts, so
  // this fails closed to a truthful enquiry-only state -- never a continuous-enrolment, immediate-
  // availability, waiting-list, limited-places, response-time, private/group-format or free-
  // consultation claim. A dedicated date-aware availability component (mirroring the Spoken
  // English Step 7 pattern) is a later step.
  // Step 7: date-aware availability, mirroring the exact enquiry/scheduled two-state pattern
  // established by Spoken English Step 7 (components/spoken-english/SpokenEnglishAvailability.tsx)
  // and IELTS/PTE/TOEFL before it. content/batches.ts currently has no complete, published,
  // non-past english-writing-tagged record (its two english-writing-tagged entries are historical:
  // past dates, "Closed", unpublished, and missing `schedule`), so production renders the enquiry
  // state below. See components/english-writing/EnglishWritingAvailability.tsx's
  // isCompleteEnglishWritingIntake() for the completeness guard and
  // docs/english-writing-offer-verification.md for the current verification record.
  availability: {
    id: "english-writing-availability",
    eyebrow: "Current availability",

    // No-intake enquiry state (the one currently shown).
    enquiryHeading: "Ask about the current English Writing option",
    enquiryBody:
      "No future English Writing start date is currently confirmed on this page. Share what you need to write, what feels difficult and when you are usually available. Aisha can confirm whether a suitable current option exists.",
    detailsHeading: "Include these details in your enquiry",
    enquiryDetails: [
      { id: "writing-need", label: "What you need to write" },
      { id: "context", label: "Whether it's for study, work or everyday communication" },
      { id: "difficulty", label: "The main writing difficulty" },
      { id: "location", label: "Country and timezone" },
      { id: "schedule-fit", label: "Usual days/times" },
      { id: "deadline", label: "Any relevant deadline" },
    ] as EnglishWritingAvailabilityDetail[],
    enquiryCtaLabel: "Ask about current availability",
    enquiryMessage:
      "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. The type of writing is [details], and I currently find [details] difficult. My country/timezone is [details], my usual days/times are [details], and my relevant deadline, if any, is [details]. Please confirm whether a suitable current option is available and share its format, schedule and fee.",
    reservationNote:
      "Sending an enquiry does not reserve a place. Wait for confirmation of availability, format, schedule and fee before making a payment. No payment is required simply to ask about availability.",

    // Verified scheduled state (renders only once getPublishedUpcomingBatches("english-writing")
    // returns at least one complete record -- see components/english-writing/
    // EnglishWritingAvailability.tsx's isCompleteEnglishWritingIntake()).
    scheduledHeading: "Review the confirmed English Writing option.",
    scheduledBody: "Check the start date, schedule, format and duration before asking whether this option suits your writing goals.",
    timezoneLabel: "Pakistan Standard Time (PKT, UTC+5)",
    intakeCtaLabel: "Ask about this writing option",
    intakeReservationNote: "Availability is confirmed by Aisha; sending an enquiry does not reserve a place.",
    moreAvailabilityLabel: "View all English Writing availability",
  },

  // Step 8: heading copy for components/english-writing/EnglishWritingFAQ.tsx. The eight
  // question/answer pairs themselves live in the dedicated content/englishWritingFaqs.ts,
  // independent of content/faqs.ts's generalFaqs.
  faq: {
    id: "english-writing-faq",
    eyebrow: "English Writing questions",
    heading: "Questions to clarify before you enrol",
    introduction:
      "These answers explain the programme boundaries and point to the current format, pricing and availability information. Confirm changing details directly before payment.",
  },

  // Step 9: page-facing final-CTA copy only. The actual WhatsApp/email message text and the
  // shared five-item enquiry-fields list live in the dedicated content/englishWritingEnquiry.ts,
  // never duplicated here -- see components/english-writing/EnglishWritingFinalCTA.tsx.
  finalCta: {
    id: "english-writing-enquiry",
    eyebrow: "Your next step",
    heading: "Tell Aisha what you need to write",
    body: "Share the writing situation, reader or purpose, current difficulty and timing. Aisha can review the enquiry and confirm whether a current option may suit the requirement.",
    detailsHeading: "Include these details",
    primaryLabel: "Discuss my writing goals on WhatsApp",
    formCtaLabel: "Send a Detailed Enquiry",
    emailCtaLabel: "Email Aisha",
    emailAccessibleLabel: "Email Aisha about English writing coaching",
    responseExpectation:
      "Aisha will use these details to respond about fit and the current offer. You do not need to send a full document in the first message, sending an enquiry does not reserve a place or confirm enrolment, and format/schedule/fee should be confirmed before payment.",
  },
} as const;
