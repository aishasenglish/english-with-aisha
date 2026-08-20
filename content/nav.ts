export type MegaLink = { label: string; href: string; note?: string };
export type MegaColumn = { heading: string; links: MegaLink[] };
export type MegaFeature = {
  tag: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  style: "button" | "arrow";
};
export type NavItem = {
  label: string;
  href?: string;
  columns?: MegaColumn[];
  feature?: MegaFeature;
};

export const NAV: NavItem[] = [
  {
    label: "Courses",
    columns: [
      {
        heading: "Exam preparation",
        links: [
          { label: "IELTS Preparation", href: "/courses/ielts", note: "Academic & General · Band 7+" },
          { label: "PTE Academic", href: "/courses/pte", note: "Template-driven scoring strategy" },
          { label: "TOEFL iBT", href: "/courses/toefl", note: "For university applications" },
        ],
      },
      {
        heading: "Skills & levels",
        links: [
          { label: "English Writing Mastery", href: "/courses/english-writing", note: "Academic, professional, everyday" },
          { label: "Spoken English & Fluency", href: "/courses/spoken-english", note: "Interviews, work, daily confidence" },
          { label: "O & A Level English", href: "/courses/o-a-level-english", note: "Cambridge & Edexcel, examiner-marked" },
        ],
      },
    ],
    feature: {
      tag: "Start here",
      title: "Not sure which course?",
      body: "Take the free diagnostic. You get an honest read on your level and a recommended course.",
      cta: { label: "Take the free test", href: "/free-diagnostic-test" },
      style: "button",
    },
  },
  {
    label: "How you learn",
    columns: [
      {
        heading: "Formats",
        links: [
          { label: "Live online batch", href: "/#formats", note: "Zoom, small groups, every class recorded" },
          { label: "One-to-one coaching", href: "/#formats", note: "Personal sessions built around your dates" },
          { label: "Batch calendar", href: "/batches", note: "See every upcoming start date" },
        ],
      },
      {
        heading: "What's included",
        links: [
          { label: "How the coaching works", href: "/how-it-works" },
          { label: "Weekly tests & full mocks", href: "/how-it-works" },
          { label: "Personal writing & speaking feedback", href: "/how-it-works" },
        ],
      },
    ],
    feature: {
      tag: "New batch every 15 days",
      title: "Learn from anywhere",
      body: "Attend live one week and catch up on the recording the next. Same trainer, same class, same material.",
      cta: { label: "See dates", href: "/batches" },
      style: "arrow",
    },
  },
  {
    label: "Results",
    columns: [
      {
        heading: "Proof",
        links: [
          { label: "Success stories", href: "/success-stories", note: "Real students, real progress" },
          { label: "How it works", href: "/how-it-works" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        heading: "Get started",
        links: [
          { label: "Free diagnostic test", href: "/free-diagnostic-test" },
          { label: "Upcoming batches", href: "/batches" },
          { label: "Contact Aisha", href: "/contact" },
        ],
      },
    ],
    feature: {
      tag: "Student progress",
      title: "Evidence, shared with permission",
      body: "Verified student results and feedback are published only after consent.",
      cta: { label: "View results", href: "/success-stories" },
      style: "arrow",
    },
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Free resources",
        links: [
          { label: "Free IELTS Band 7 checklist", href: "/#lead-magnet", note: "The exact things examiners look for" },
          { label: "Free diagnostic test", href: "/free-diagnostic-test", note: "Marked personally, not by a machine" },
        ],
      },
      {
        heading: "Learn more",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "How it works", href: "/how-it-works" },
          { label: "Upcoming batches", href: "/batches" },
        ],
      },
    ],
    feature: {
      tag: "Free",
      title: "Diagnostic test",
      body: "Grammar, reading, and a short writing task. Marked by Aisha, not a machine.",
      cta: { label: "Start the test", href: "/free-diagnostic-test" },
      style: "button",
    },
  },
  { label: "About", href: "/about" },
];
