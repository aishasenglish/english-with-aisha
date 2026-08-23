import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { generalFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about English coaching with Aisha — programmes, fees, schedules, and how enquiries work.",
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Frequently asked questions.
          </h1>
          <p className="text-ink-soft text-lg">
            Everything you need to know before getting started.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <FAQAccordion />
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
