import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="about-story-heading">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[29rem] overflow-hidden rounded-2xl bg-surface-tint">
          <Image src="/images/aisha-about.jpg" alt="Aisha seated in a warm studio setting" fill sizes="(max-width: 767px) calc(100vw - 2rem), 464px" className="object-cover object-center" />
        </div>
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            My approach<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h2 id="about-story-heading" className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">
            Clear guidance changes how you prepare.
          </h2>
          <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Many learners are not short of effort. They are short of a clear plan. They practise repeatedly without knowing why their score is not improving.</p>
            <p>My role is to make that process easier to understand. I identify what needs attention, explain it in plain language and give you practice that connects directly to your goal.</p>
            <p>For IELTS, that means understanding the test, strengthening all four skills and receiving useful feedback on your writing and speaking.</p>
            <p>I teach with structure, patience and honesty. You should always know what to work on, why it matters and what to do next.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
