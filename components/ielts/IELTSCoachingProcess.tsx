import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSCoachingProcess() {
  const { process } = ieltsProgrammePage;

  return (
    <section id={process.id} className="border-y border-line bg-surface-tint px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="ielts-process-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{process.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
          <h2 id="ielts-process-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{process.heading}</h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">{process.introduction}</p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {process.steps.map((step, index) => (
            <li key={step.number} className={`relative border-t border-line pt-5 lg:px-7 ${index === 0 ? "lg:pl-0" : "lg:border-l"}`}>
              <span className="text-sm font-semibold text-teal">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
