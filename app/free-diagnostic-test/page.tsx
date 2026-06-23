import type { Metadata } from "next";
import DiagnosticForm from "@/components/DiagnosticForm";

export const metadata: Metadata = {
  title: "Free Diagnostic Test",
  description:
    "Find out exactly where your English stands — free. Fill in this quick form and get a personal course recommendation from Aisha.",
};

export default function FreeDiagnosticPage() {
  return (
    <>
      <section className="bg-ink text-white pt-28 pb-16 lg:pt-36 lg:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Find out exactly where your English stands — free.
          </h1>
          <p className="text-white/70 text-lg">
            Fill in this quick form and I&apos;ll personally review where you are and recommend the
            right course and level for your goal. No cost, no obligation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone">
            <DiagnosticForm />
          </div>
        </div>
      </section>
    </>
  );
}
