import { homeGettingStarted } from "@/content/homeGettingStarted";
import { whatsappLink } from "@/lib/whatsapp";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function HomeGettingStarted() {
  return (
    <section id="getting-started" className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18" aria-labelledby="getting-started-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {homeGettingStarted.eyebrow}
          </p>
          <h2
            id="getting-started-heading"
            className="text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl"
          >
            {homeGettingStarted.heading}
          </h2>
        </div>

        <div className="relative mb-10 sm:mb-12">
          <span
            className="absolute top-6 right-[16.67%] left-[16.67%] hidden h-px bg-sea-edge md:block"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
            {homeGettingStarted.steps.map((step) => (
              <li key={step.number} className="relative min-w-0 text-center">
                <span className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-sea-edge bg-white text-sm font-semibold text-teal shadow-[0_0_0_7px_#fff]">
                  {step.number}
                </span>
                <h3 className="mb-2 text-xl font-semibold tracking-[-0.015em] text-ink">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-ink-soft sm:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <a
            href={whatsappLink(homeGettingStarted.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sea-deep sm:w-auto"
          >
            {homeGettingStarted.ctaLabel}
            <ArrowIcon />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-ink-faint sm:text-sm">
            {homeGettingStarted.supportingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
