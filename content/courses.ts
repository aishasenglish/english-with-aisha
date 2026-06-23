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
  },
];
