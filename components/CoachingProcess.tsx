import Link from "next/link";
import HowItWorks from "./HowItWorks";

export default function CoachingProcess() {
  return (
    <section id="coaching-process" className="py-14 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
            How coaching works
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4">
            From your first question to focused progress.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            A clear process helps you choose the right programme, understand what happens
            during coaching and know what to work on next.
          </p>
        </div>

        <HowItWorks />

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          <Link
            href="/#finder"
            className="w-full sm:w-auto min-h-12 inline-flex items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-sm px-6 py-3 transition-colors"
          >
            Find My Programme
          </Link>
          <Link
            href="/how-it-works"
            className="font-serif text-sm font-medium uppercase tracking-wide border-b-2 border-coral min-h-11 hover:text-amber-dark inline-flex items-center"
          >
            Read the Full Coaching Process
          </Link>
        </div>
      </div>
    </section>
  );
}
