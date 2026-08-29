import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { formsAreConfigured } from "@/lib/forms";
import { site } from "@/content/site";
import { aboutContent } from "@/content/about";

// About Step 7: replaces AboutFitBoundary's short "what this page can and can't confirm" note
// with scenario-led route guidance -- "given my situation, where should I go next?" -- distinct
// from AboutExpertiseRoutes' broad "what areas does Aisha support?" overview earlier on the page.
// Same section, same position (after teaching approach, before verified evidence and the final
// CTA) as the note it replaces; no second, near-identical section was added.
//
// Ordinary semantic content only -- no client state, no quiz, no accordion, no carousel. Every
// link is a real, already-live internal destination (the same ones AboutExpertiseRoutes and
// AboutTeachingApproach already link to). School/O Level English has no route card here: no
// verified O/A Level subdomain URL exists, and About did not show this route before this step
// either -- see docs/about-fit-route-guidance.md.
export default function AboutLearnerFit() {
  const { learnerFit } = aboutContent;
  const formConfigured = formsAreConfigured();

  return (
    <section
      id={learnerFit.id}
      className="py-10 sm:py-16 px-4 bg-white"
      aria-labelledby="about-learner-fit-heading"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {learnerFit.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-learner-fit-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
          {learnerFit.heading}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-8 sm:mb-10">{learnerFit.intro}</p>

        {/* One route per row on phones; two columns from md: -- the test-preparation card spans
            both columns there since it carries three links, per this step's own tablet guidance.
            Never a fixed equal-height grid that clips a longer card. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {learnerFit.routes.map((route) => {
            const isTestRoute = route.id === "recognised-test";
            const isUnsure = route.id === "not-sure-yet";
            return (
              <div
                key={route.id}
                className={`border border-stone rounded-md p-5 sm:p-6 bg-ivory ${isTestRoute ? "md:col-span-2" : ""}`}
              >
                <h3 className="font-serif text-base font-medium text-ink mb-1.5">{route.title}</h3>
                <p className="text-sm text-ink-faint leading-relaxed mb-2">{route.signal}</p>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">{route.guidance}</p>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                  {route.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Human-enquiry action lives specifically with the "not sure yet" scenario --
                    conditional on formsAreConfigured() (a server-side check, not content), so
                    kept in the component rather than content/about.ts's static `links`. Mirrors
                    AboutFinalCTA.tsx's own established form-or-email fallback pattern exactly. */}
                {isUnsure && (
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    {formConfigured && (
                      <Link
                        href={learnerFit.humanEnquiry.formHref}
                        className="inline-flex w-full sm:w-auto min-h-11 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-5 py-2.5 transition-colors"
                      >
                        {learnerFit.humanEnquiry.formLabel}
                      </Link>
                    )}
                    <a
                      href={
                        formConfigured
                          ? whatsappLink(learnerFit.humanEnquiry.whatsappMessage)
                          : emailLink(learnerFit.humanEnquiry.emailSubject, learnerFit.humanEnquiry.emailBody, site.email)
                      }
                      target={formConfigured ? "_blank" : undefined}
                      rel={formConfigured ? "noopener noreferrer" : undefined}
                      className="inline-flex w-full sm:w-auto min-h-11 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-5 py-2.5 transition-colors"
                    >
                      {formConfigured ? learnerFit.humanEnquiry.whatsappLabel : learnerFit.humanEnquiry.emailLabel}
                    </a>
                  </div>
                )}

                {route.boundary && (
                  <p className="text-sm text-ink-faint leading-relaxed">{route.boundary}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mb-8 sm:mb-10">
          <h3 className="font-serif text-sm font-medium uppercase tracking-wide text-amber-dark mb-3">
            {learnerFit.firstEnquiryHeading}
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            {learnerFit.firstEnquiryItems.map((item, i) => (
              <li key={i} className="text-sm text-ink-soft leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-stone">
          <h3 className="font-serif text-base font-medium text-ink mb-3">{learnerFit.outOfScopeHeading}</h3>
          <ul className="space-y-1.5">
            {learnerFit.outOfScopeItems.map((item, i) => (
              <li key={i} className="text-sm text-ink-faint leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
