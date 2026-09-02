import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  /** Not shown unless a caller opts in — this stays a homepage-specific touch, not a sitewide default. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  whatsappMessage?: string;
  supportingNote?: string;
};

export default function CTASection({
  eyebrow,
  title = "Ready to choose the right English support?",
  subtitle = "Share the learner's goal, current situation and preferred timeline. Aisha will recommend a suitable programme and confirm the current format, schedule and fee before you decide.",
  primaryLabel = "Request a Free Course Recommendation",
  primaryHref = "/courses/ielts",
  secondaryLabel = "Ask Aisha on WhatsApp",
  whatsappMessage = "Hi Aisha! I would like help choosing an English programme. The learner's goal is [goal], their current situation is [level/exam/details], and they hope to begin by [date].",
  supportingNote = "No payment is required to ask. Review the current details before deciding.",
}: Props) {
  return (
    <section className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {eyebrow && (
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
            {eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
        )}
        <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
          <Button href={primaryHref} variant="coral" size="lg" className="w-full sm:w-auto">
            {primaryLabel}
          </Button>
          <Button
            href={whatsappLink(whatsappMessage)}
            variant="outline"
            size="lg"
            external
            className="border-ink text-ink hover:bg-ink hover:text-white w-full sm:w-auto"
          >
            {secondaryLabel}
          </Button>
        </div>
        {supportingNote && (
          // Extra horizontal inset on phones only: keeps this line clear of the fixed WhatsApp
          // float's bottom-right column, which can otherwise land over centred full-width text
          // depending on scroll position (the buttons above stay full-width and unaffected).
          <p className="text-ink-faint text-sm mt-5 px-14 sm:px-0">{supportingNote}</p>
        )}
      </div>
    </section>
  );
}
