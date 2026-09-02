import FAQAccordion from "@/components/FAQAccordion";
import { homepageFaqs } from "@/content/faqs";
import { whatsappLink } from "@/lib/whatsapp";

const FAQ_WHATSAPP_MESSAGE =
  "Hi Aisha! I still have a question about your IELTS coaching. My question is:";

export default function HomeFAQ() {
  return (
    <section
      id="faqs"
      className="bg-surface-tint px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Before you begin
            <span className="h-px w-11 bg-teal" aria-hidden="true" />
          </p>
          <h2
            id="home-faq-heading"
            className="text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl"
          >
            A few questions, answered.
          </h2>
        </div>

        <FAQAccordion items={homepageFaqs} />

        <div className="mt-7 border-t border-line pt-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="text-base font-semibold text-ink">Still have a question?</p>
          <a
            href={whatsappLink(FAQ_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 transition-colors hover:text-sea-deep sm:mt-0"
          >
            Ask Aisha on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
