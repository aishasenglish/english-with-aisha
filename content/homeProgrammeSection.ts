import { corporateEnquiry } from "@/content/courseGuidance";
import { ieltsPage } from "@/content/ielts";

export type ProgrammeLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const homeProgrammeSection = {
  eyebrow: "Choose your programme",
  heading: "Start with the support you need.",
  featured: {
    eyebrow: "Main focus",
    title: "IELTS Coaching",
    description:
      "Prepare for Academic or General Training IELTS with live lessons, focused practice and personal feedback.",
    benefits: [
      "Listening, Reading, Writing and Speaking",
      "Timed practice and exam strategies",
      "Structured and continuous feedback on your writing and speaking",
    ],
    primaryLink: {
      label: "View IELTS Programme",
      href: "/courses/ielts",
    },
    enquiryLink: {
      label: "Ask about fees and availability",
      message: ieltsPage.pricing.enquire.ctaMessage,
    },
    // Format, duration, next start and fee remain intentionally absent until complete,
    // current values have passed their respective publication checks.
    confirmedDetails: [] as { label: string; value: string }[],
  },
  otherHeading: "Other Programmes",
  otherProgrammes: [
    {
      title: "O/A Level & IGCSE English",
      description: "Strengthen written answers, analysis and exam technique.",
      links: [
        {
          label: "Explore School English",
          href: "/courses/o-a-level-english",
        },
      ],
    },
    {
      title: "PTE & TOEFL Preparation",
      description: "Focused preparation for your chosen English test.",
      links: [
        { label: "PTE", href: "/courses/pte" },
        { label: "TOEFL", href: "/courses/toefl" },
      ],
    },
    {
      title: "Spoken & Written English",
      description: "Communicate more clearly in everyday life, study and work.",
      links: [
        { label: "Spoken English", href: "/courses/spoken-english" },
        { label: "English Writing", href: "/courses/english-writing" },
      ],
    },
    {
      title: "Professional English",
      description: "Build confidence in interviews, meetings and workplace communication.",
      links: [
        {
          label: "Discuss Your Goals",
          href: corporateEnquiry.whatsappMessage,
          external: true,
        },
      ],
    },
  ] as { title: string; description: string; links: ProgrammeLink[] }[],
} as const;
