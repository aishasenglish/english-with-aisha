import { site } from "@/content/site";

export function whatsappLink(message?: string): string {
  const msg = message ?? site.whatsapp.defaultMessage;
  return `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent(msg)}`;
}

export function courseEnrollLink(courseName: string): string {
  const message = `Hi Aisha! I'm interested in enrolling in ${courseName}. Could you share the batch dates, fee details, and how to join?`;
  return whatsappLink(message);
}
