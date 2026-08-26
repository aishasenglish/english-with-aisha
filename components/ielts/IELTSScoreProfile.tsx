import { whatsappLink } from "@/lib/whatsapp";
import { ieltsPage } from "@/content/ielts";

// Server component. The four-detail panel is informational reference material, not a form or a
// sequence — plain checkmark bullets rather than numbered circles, since order doesn't matter.
export default function IELTSScoreProfile() {
  const { scoreProfile, hero } = ieltsPage;

  return (
    <section className="py-14 sm:py-16 px-4 bg-white" aria-labelledby="ielts-score-profile-heading">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {scoreProfile.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="ielts-score-profile-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {scoreProfile.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{scoreProfile.body}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-10">
          <div className="bg-ivory border border-stone rounded-md p-5 sm:p-6">
            <p className="font-serif text-base font-medium text-ink mb-3">{scoreProfile.detailsHeading}</p>
            <ul className="space-y-2.5">
              {scoreProfile.requiredDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-5">
            {scoreProfile.observations.map((obs) => (
              <li key={obs.id}>
                <p className="text-sm font-medium text-ink mb-1">{obs.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{obs.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={whatsappLink(hero.primaryCta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
        >
          {scoreProfile.contextualLinkLabel}
        </a>
      </div>
    </section>
  );
}
