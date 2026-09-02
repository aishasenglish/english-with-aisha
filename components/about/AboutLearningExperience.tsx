import { aboutBenefits } from "@/content/aboutPage";

export default function AboutLearningExperience() {
  return (
    <section className="border-y border-line bg-surface-tint px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-learning-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            What you can expect<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h2 id="about-learning-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">
            Serious preparation without unnecessary confusion.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 border-t border-line sm:grid-cols-3 sm:gap-0">
          {aboutBenefits.map((benefit, index) => (
            <article key={benefit.title} className={`pt-7 sm:px-7 lg:px-10 ${index > 0 ? "sm:border-l sm:border-line" : ""}`}>
              <span className="text-sm font-semibold text-teal" aria-hidden="true">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink">{benefit.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
