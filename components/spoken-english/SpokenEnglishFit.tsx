import Link from "next/link";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Four fit pathways plus an explicit "if your requirement is different" panel
// so test-preparation, writing, school-English and clinical-communication visitors are redirected
// or boundary-set rather than left to assume this page covers their need -- mirrors
// components/toefl/TOEFLFit.tsx's product-distinction pattern.
export default function SpokenEnglishFit() {
  const { fit } = spokenEnglishPage;

  return (
    <section id={fit.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="spoken-english-fit-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {fit.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-fit-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {fit.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{fit.body}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {fit.pathways.map((item) => (
            <li key={item.id} className="bg-white border border-stone rounded-md p-5">
              <p className="font-serif text-base font-medium text-ink mb-2">{item.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>

        {/* Alternative-route panel -- redirects a mismatched visitor rather than implying this
            page covers test preparation, writing, school English or clinical communication needs. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6">
          <p className="font-serif text-base font-medium text-ink mb-3">{fit.alternativeRoutesHeading}</p>
          <ul className="space-y-3">
            {fit.alternativeRoutes.map((route) => (
              <li key={route.id} className="text-sm text-ink-soft leading-relaxed">
                {route.body}
                {route.link && (
                  <>
                    {" "}
                    <Link
                      href={route.link.href}
                      className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
                    >
                      {route.link.label}
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
