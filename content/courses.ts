export type Course = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  whoFor: string[];
  modules: string[];
  includes: string[];
  price: number;
  badge?: string;
  /** Complete Tailwind class strings, stored literally so the purge scanner can see them. */
  cardTint: string;
  badgeBorder: string;
  badgeText: string;
};

export const courses: Course[] = [
  {
    slug: "ielts",
    name: "IELTS Preparation",
    tagline: "IELTS Preparation — target Band 7 and beyond.",
    summary:
      "Target Band 7+ for study, work, or migration abroad. Academic and General Training both covered.",
    whoFor: [
      "Students and professionals preparing for study abroad",
      "Those applying for work visas or skilled migration",
      "Anyone who needs Academic or General Training IELTS",
    ],
    modules: [
      "Listening strategies",
      "Reading speed & accuracy",
      "Writing Task 1 & Task 2 (with model answers)",
      "Speaking fluency & confidence",
      "Understanding the band descriptors",
      "Time management under pressure",
    ],
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    price: 10000,
    badge: "Most Popular",
    cardTint: "bg-yellow-50",
    badgeBorder: "border-yellow-200",
    badgeText: "text-yellow-800",
  },
  {
    slug: "pte",
    name: "PTE Academic",
    tagline: "PTE Academic — score high with smart strategies.",
    summary:
      "Score high with smart, template-driven strategies for the computer-based PTE Academic exam.",
    whoFor: [
      "Anyone needing PTE Academic for university or migration",
      "Those who want a faster, computer-based alternative to IELTS",
      "Professionals seeking a quicker pathway to results",
    ],
    modules: [
      "How PTE's AI scoring really works",
      "Templates for Speaking & Writing tasks",
      "All question types across Speaking, Writing, Reading, Listening",
      "Pronunciation & fluency for the mic",
      "Pacing and exam-day strategy",
    ],
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    price: 10000,
    cardTint: "bg-green-50",
    badgeBorder: "border-green-200",
    badgeText: "text-green-800",
  },
  {
    slug: "toefl",
    name: "TOEFL iBT",
    tagline: "TOEFL iBT — get ready for universities worldwide.",
    summary:
      "Comprehensive TOEFL iBT prep for students applying to universities that require the test.",
    whoFor: [
      "Students applying to universities in the US and worldwide",
      "Those whose universities require TOEFL iBT specifically",
      "Anyone preparing for graduate or undergraduate admissions",
    ],
    modules: [
      "Reading & Listening for academic content",
      "Integrated and independent Writing tasks",
      "Speaking responses that score",
      "Note-taking systems",
      "Academic vocabulary",
    ],
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    price: 10000,
    cardTint: "bg-pink-50",
    badgeBorder: "border-pink-200",
    badgeText: "text-pink-800",
  },
  {
    slug: "english-writing",
    name: "English Writing Mastery",
    tagline: "English Writing Mastery — write clearly, correctly, confidently.",
    summary:
      "Write polished English for academics, work, or everyday life with expert guidance and feedback.",
    whoFor: [
      "Students writing essays and academic assignments",
      "Professionals who write emails and reports in English",
      "Anyone who wants to write with clarity and confidence",
    ],
    modules: [
      "Grammar that actually matters",
      "Sentence structure & punctuation",
      "Building strong paragraphs",
      "Essays, emails & professional writing",
      "Editing your own work",
      "Style and clarity",
    ],
    includes: [
      "Live Zoom classes (recorded)",
      "Writing assignments with detailed feedback",
      "Regular tests",
      "1-on-1 review option",
    ],
    price: 10000,
    badge: "New",
    cardTint: "bg-blue-50",
    badgeBorder: "border-blue-200",
    badgeText: "text-blue-800",
  },
  {
    slug: "o-a-level-english",
    name: "O & A Level English",
    tagline: "O & A Level English — taught the way examiners actually mark it.",
    summary:
      "Specialist Cambridge & Edexcel English coaching, from O Level and IGCSE through to AS and A2.",
    whoFor: [
      "O Level, IGCSE, AS and A Level students sitting Cambridge or Edexcel English",
      "Bright students who speak English well but keep landing on a B",
      "Parents who want an honest, evidenced picture of where their child actually stands",
      "Retakers who need a genuinely different approach this session",
    ],
    modules: [
      "Directed Writing & composition",
      "Comprehension and summary technique",
      "Literature set texts & essay structure",
      "Unseen text analysis",
      "Language analysis (9093) & General Paper (8021)",
      "Comparative and directed response",
    ],
    includes: [
      "Live small-group classes on Zoom",
      "Maximum 8 students per batch, so every script gets read",
      "Every class recorded and available to rewatch",
      "Complete syllabus coverage for the chosen paper and board",
      "Weekly written work, marked with examiner-style annotations",
      "Past-paper practice — by question type first, then full papers",
      "Two full mock exams per session, graded and returned with feedback",
      "A written progress report to parents each cycle",
      "WhatsApp access for questions between classes",
      "Guidance on the university applications where the English grade matters",
    ],
    price: 0,
    badge: "New",
    cardTint: "bg-purple-50",
    badgeBorder: "border-purple-200",
    badgeText: "text-purple-800",
  },
  {
    slug: "spoken-english",
    name: "Spoken English & Fluency",
    tagline: "Spoken English & Fluency — speak without hesitation.",
    summary:
      "Build real speaking fluency for interviews, work, study, or daily confidence.",
    whoFor: [
      "Anyone who understands English but freezes when speaking",
      "Professionals preparing for interviews or presentations",
      "Students who need confidence in academic settings",
    ],
    modules: [
      "Pronunciation & clarity",
      "Building fluency and reducing hesitation",
      "Everyday and professional conversation",
      "Thinking in English",
      "Confidence for interviews & presentations",
    ],
    includes: [
      "Live Zoom classes (recorded)",
      "Regular speaking practice sessions",
      "Personal feedback",
      "Individual practice session option",
    ],
    price: 10000,
    cardTint: "bg-orange-50",
    badgeBorder: "border-orange-200",
    badgeText: "text-orange-800",
  },
];
