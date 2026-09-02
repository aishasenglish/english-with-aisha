import { corporateEnquiry } from "@/content/courseGuidance";
import { IELTS_RECOMMENDATION_MESSAGE } from "@/content/homeCtas";
import { whatsappLink } from "@/lib/whatsapp";

export type NavigationLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const IELTS_RECOMMENDATION_HREF = whatsappLink(IELTS_RECOMMENDATION_MESSAGE);
export const PROFESSIONAL_ENQUIRY_HREF = whatsappLink(corporateEnquiry.whatsappMessage);

export const OTHER_PROGRAMMES: readonly NavigationLink[] = [
  { label: "View All Programmes", href: "/courses" },
  { label: "O/A Level & IGCSE English", href: "/courses/o-a-level-english" },
  { label: "PTE Academic", href: "/courses/pte" },
  { label: "TOEFL iBT", href: "/courses/toefl" },
  { label: "Spoken English", href: "/courses/spoken-english" },
  { label: "English Writing", href: "/courses/english-writing" },
  { label: "Professional English Enquiry", href: PROFESSIONAL_ENQUIRY_HREF, external: true },
] as const;

export const DESKTOP_NAV: readonly NavigationLink[] = [
  { label: "IELTS Coaching", href: "/courses/ielts" },
  { label: "About Aisha", href: "/about" },
  { label: "FAQs", href: "/faq" },
] as const;
