import Link from "next/link";
import { audiencesIntro, audiencePathways } from "@/content/audiences";

const linkClass =
  "inline-flex min-h-9 items-center px-3 py-1.5 rounded-sm border border-line text-sm font-medium text-ink hover:border-teal hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export default function AudiencePathways() {
  return (
    <section
      id="choose-your-path"
      className="bg-ivory py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="audience-pathways-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
            {audiencesIntro.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden />
          </p>
          <h2
            id="audience-pathways-heading"
            className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4"
          >
            {audiencesIntro.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">{audiencesIntro.body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiencePathways.map((pathway) => (
            <article
              key={pathway.title}
              className="flex flex-col h-full bg-white border border-stone rounded-md p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-3">
                {pathway.eyebrow}
              </p>
              <h3 className="font-serif text-xl font-medium text-ink mb-3">{pathway.title}</h3>
              <p className="text-base text-ink-soft leading-relaxed mb-5">{pathway.description}</p>

              {pathway.links && pathway.links.length > 0 && (
                <ul className="flex flex-wrap gap-2 mb-6">
                  {pathway.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${link.label} — chat on WhatsApp`}
                          className={linkClass}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          aria-label={`${link.label} course details`}
                          className={linkClass}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={pathway.primaryCta.href}
                className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide text-center px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {pathway.primaryCta.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
