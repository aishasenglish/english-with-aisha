import type { Metadata } from "next";
import GroupedFAQAccordion, { type FAQGroup } from "@/components/GroupedFAQAccordion";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import { selectPublishedFaqs } from "@/content/faqs";

const title = "IELTS Coaching FAQs | Aisha’s English";
const description =
  "Answers about IELTS preparation, online lesson formats, schedules, fees, enrolment and Aisha’s other English programmes.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq" },
  twitter: { title, description },
};

const faqGroups: FAQGroup[] = [
  {
    label: "IELTS preparation",
    faqs: selectPublishedFaqs([
      "ielts-level-unknown",
      "ielts-preparation-duration",
      "grade-guarantee",
      "ielts-formats",
      "personal-feedback",
      "mock-exams",
    ]),
  },
  {
    label: "Formats and schedules",
    faqs: selectPublishedFaqs([
      "international-students",
      "live-or-recorded",
      "missed-class",
      "new-batches",
      "one-to-one-help",
      "platform",
      "programme-format-schedule",
    ]),
  },
  {
    label: "Fees and enrolment",
    faqs: selectPublishedFaqs(["fees-and-schedules", "fees-payment", "enquiry-details"]),
  },
  {
    label: "Other programmes",
    faqs: selectPublishedFaqs(["programmes-taught", "choosing-programme", "choosing-language-test"]),
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-line bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Before you begin</p>
          <h1 className="mb-4 text-[2.2rem] font-semibold tracking-[-0.03em] text-ink sm:text-5xl">Frequently asked questions.</h1>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">Clear answers about IELTS coaching, current options and other English programmes.</p>
        </div>
      </section>

      <section className="bg-surface-tint px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <GroupedFAQAccordion groups={faqGroups} />
        </div>
      </section>

      <HomeFinalCTA />
    </>
  );
}
