import Link from "next/link";
import { homeProgrammeSection, type ProgrammeLink } from "@/content/homeProgrammeSection";
import { whatsappLink } from "@/lib/whatsapp";

function TickIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

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

function ProgrammeTextLink({ link }: { link: ProgrammeLink }) {
  const className =
    "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 transition-colors hover:text-sea-deep";

  if (link.external) {
    return (
      <a
        href={whatsappLink(link.href)}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <ArrowIcon />
    </Link>
  );
}

export default function CourseExplorer() {
  const { featured } = homeProgrammeSection;

  return (
    <section
      id="courses"
      className="scroll-mt-28 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {homeProgrammeSection.eyebrow}
          </p>
          <h2
            id="courses-heading"
            className="text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl"
          >
            {homeProgrammeSection.heading}
          </h2>
        </div>

        <article className="mb-12 overflow-hidden rounded-2xl border border-sea-edge bg-sea-wash p-6 sm:p-8 lg:p-10">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                {featured.eyebrow}
              </p>
              <h3 className="mb-4 text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
                {featured.title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {featured.description}
              </p>

              {featured.confirmedDetails.length > 0 && (
                <dl className="mt-6 grid gap-4 border-t border-sea-edge pt-6 sm:grid-cols-2">
                  {featured.confirmedDetails.map((detail) => (
                    <div key={detail.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>

            <div className="min-w-0 rounded-xl border border-white/80 bg-white/75 p-5 sm:p-6">
              <ul className="mb-6 space-y-3">
                {featured.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-ink sm:text-base">
                    <TickIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                <Link
                  href={featured.primaryLink.href}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sea-deep sm:w-auto"
                >
                  {featured.primaryLink.label}
                  <ArrowIcon />
                </Link>
                <a
                  href={whatsappLink(featured.enquiryLink.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 transition-colors hover:text-sea-deep"
                >
                  {featured.enquiryLink.label}
                </a>
              </div>
            </div>
          </div>
        </article>

        <div>
          <h3 className="mb-5 text-xl font-semibold tracking-[-0.015em] text-ink sm:text-2xl">
            {homeProgrammeSection.otherHeading}
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeProgrammeSection.otherProgrammes.map((programme) => (
              <article
                key={programme.title}
                className="flex min-w-0 flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-sea-edge"
              >
                <h4 className="mb-3 text-xl font-semibold tracking-[-0.015em] text-ink">
                  {programme.title}
                </h4>
                <p className="mb-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {programme.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1">
                  {programme.links.map((link) => (
                    <ProgrammeTextLink key={link.label} link={link} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
