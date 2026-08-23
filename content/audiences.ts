import { whatsappLink } from "@/lib/whatsapp";

export type PathwayLink = {
  label: string;
  href: string;
  /** True for links that leave the site (e.g. WhatsApp) — opens in a new tab. */
  external?: boolean;
};

export type AudiencePathway = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  /** Optional secondary links to specific courses within this pathway. */
  links?: PathwayLink[];
};

export const audiencesIntro = {
  eyebrow: "Choose your goal",
  heading: "What do you need English for?",
  body: "Choose the path closest to your goal. You can explore the programmes or ask Aisha for a personal recommendation.",
};

export const audiencePathways: AudiencePathway[] = [
  {
    eyebrow: "For students and parents",
    title: "O/A Level & IGCSE English",
    description:
      "Cambridge and Edexcel preparation with marked written work, past-paper practice and clear progress feedback.",
    primaryCta: { label: "Explore School English", href: "/courses/o-a-level-english" },
  },
  {
    eyebrow: "For study, migration and work",
    title: "IELTS, PTE & TOEFL Preparation",
    description:
      "Focused test preparation for the score you need, with live strategy lessons, practice tests and personal feedback.",
    primaryCta: { label: "Compare Test Preparation", href: "/courses" },
    links: [
      { label: "IELTS", href: "/courses/ielts" },
      { label: "PTE", href: "/courses/pte" },
      { label: "TOEFL", href: "/courses/toefl" },
    ],
  },
  {
    eyebrow: "For adults and professionals",
    title: "Spoken, Written & Workplace English",
    description:
      "Develop clearer speaking, stronger writing and confident communication for interviews, meetings, study and everyday life.",
    primaryCta: { label: "Explore Communication Courses", href: "/courses" },
    links: [
      { label: "Spoken English", href: "/courses/spoken-english" },
      { label: "Writing Mastery", href: "/courses/english-writing" },
      {
        label: "Corporate Training",
        href: whatsappLink(
          "Hi Aisha! I'm interested in professional or corporate English training. Could you tell me about the available options?"
        ),
        external: true,
      },
    ],
  },
];
