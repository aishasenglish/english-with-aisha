import type { Metadata } from "next";
import BatchTable from "@/components/BatchTable";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Upcoming Batches",
  description:
    "New English coaching batches start every 15 days. IELTS, PTE, TOEFL, Writing, Spoken English — enroll on WhatsApp.",
};

const enrollSteps = [
  { step: "1", text: "Message Aisha on WhatsApp with your preferred course and batch." },
  { step: "2", text: "Get fee details and confirm your seat — it's quick and personal." },
  { step: "3", text: "Receive your Zoom link and join the live class on day one." },
];

export default function BatchesPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Upcoming batches.
          </h1>
          <p className="text-ink-soft text-lg max-w-xl mx-auto">
            A new batch begins every 15 days, so you&apos;re never far from a fresh start. Seats are
            limited to keep each batch focused.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <BatchTable />
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-10 text-center">
              How to enroll
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {enrollSteps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-xl font-medium text-coral">{s.step}</span>
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center">
            <Button href={whatsappLink()} variant="coral" size="lg" external>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
