import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { ieltsFaqs } from "@/content/ieltsFaqs";
import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSFAQ() {
  const { faq } = ieltsProgrammePage;

  return (
    <section id={faq.id} className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="ielts-faq-heading">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{faq.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
        <h2 id="ielts-faq-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{faq.heading}</h2>
        <div className="mt-9"><FAQAccordion items={ieltsFaqs} /></div>
        <Link href={faq.allFaqHref} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 hover:text-sea-deep hover:decoration-teal">{faq.allFaqLabel}</Link>
      </div>
    </section>
  );
}
