import { aboutMetrics } from "@/content/aboutPage";

export default function AboutExperience() {
  return (
    <section className="relative overflow-hidden bg-sea-wash px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-experience-heading">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[56px] border-white/35" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Experience<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h2 id="about-experience-heading" className="max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">
            Teaching English by the numbers.
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            More than a decade of teaching, supported by advanced study in English Literature and experience with learners working towards different goals.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-7 gap-y-8 max-[420px]:grid-cols-1 sm:gap-x-10 sm:gap-y-10">
          {aboutMetrics.map((metric) => (
            <div key={metric.value} className="border-t border-sea-edge pt-5">
              <dt className={`font-semibold leading-tight tracking-[-0.035em] text-sea-deep ${"credential" in metric ? "text-[clamp(1.55rem,3vw,2.35rem)]" : "text-[clamp(2rem,4vw,3.5rem)]"}`}>
                {metric.value}
              </dt>
              {"label" in metric && <dd className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{metric.label}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
