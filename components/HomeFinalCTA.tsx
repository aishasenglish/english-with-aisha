import { homeFinalCta } from "@/content/homeFinalCta";
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

export default function HomeFinalCTA() {
  return (
    <section className="bg-sea-deep px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
          {homeFinalCta.eyebrow}
        </p>
        <h2 className="mb-4 text-[1.9rem] font-semibold tracking-[-0.025em] text-white sm:text-4xl">
          {homeFinalCta.heading}
        </h2>
        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {homeFinalCta.body}
        </p>
        <a
          href={whatsappLink(homeFinalCta.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-teal transition-colors hover:bg-sea-wash sm:w-auto"
        >
          {homeFinalCta.ctaLabel}
          <ArrowIcon />
        </a>
        <p className="mt-4 text-xs leading-relaxed text-white/70 sm:text-sm">
          {homeFinalCta.supportingLine}
        </p>
      </div>
    </section>
  );
}
