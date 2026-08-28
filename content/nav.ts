import { whatsappLink } from "@/lib/whatsapp";

export type MegaLink = { label: string; href: string; note?: string; external?: boolean };
export type MegaColumn = { heading: string; links: MegaLink[] };
export type MegaFeature = {
  eyebrow: string;
  body: string;
  cta: { label: string; href: string };
};
export type NavItem = {
  label: string;
  href?: string;
  columns?: MegaColumn[];
  feature?: MegaFeature;
};

/** Used by every "WhatsApp Aisha" control in the header (desktop, tablet and mobile drawer). */
export const headerWhatsappMessage =
  "Hi Aisha! I'd like help choosing the right English programme. My goal is:";

export const NAV: NavItem[] = [
  {
    label: "Courses",
    columns: [
      {
        heading: "School English",
        links: [
          {
            label: "O/A Level & IGCSE English",
            href: "/courses/o-a-level-english",
            note: "Cambridge and Edexcel preparation",
          },
        ],
      },
      {
        heading: "English examinations",
        links: [
          { label: "IELTS Preparation", href: "/courses/ielts" },
          { label: "PTE Academic", href: "/courses/pte" },
          { label: "TOEFL iBT", href: "/courses/toefl" },
        ],
      },
      {
        heading: "Fluency and professional communication",
        links: [
          // Spoken English Step 10: aligned to the page's own absolute title/H1 intent, breadcrumb
          // and locked form-variant label ("Spoken English Coaching") rather than "& Fluency",
          // which reads as a promised outcome.
          { label: "Spoken English Coaching", href: "/courses/spoken-english" },
          // English Writing Step 1: "Mastery" read as a promised end state the dedicated page no
          // longer claims -- aligned to the shorter nav label the implementing prompt recommends.
          { label: "English Writing", href: "/courses/english-writing" },
          {
            label: "Corporate English enquiry",
            href: whatsappLink(
              "Hi Aisha! I'm interested in professional or corporate English training. Could you tell me about the available options?"
            ),
            external: true,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Not sure where to start?",
      body: "Tell Aisha your goal and receive a personal course recommendation.",
      cta: { label: "Find Your Programme", href: "/#choose-your-path" },
    },
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Aisha", href: "/about" },
  { label: "FAQ", href: "/faq" },
];
