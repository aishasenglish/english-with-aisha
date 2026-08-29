import Link from "next/link";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. A route-selection aid, not a second course catalogue -- distinguishes general
// English Writing coaching from IELTS/PTE/TOEFL Writing preparation and O/A Level English, each
// with a real internal link and a descriptive accessible name (never a repeated "Learn more").
// The O/A Level link uses the existing internal route -- no subdomain is invented here.
export default function EnglishWritingRouteGuidance() {
  const { routeGuidance } = englishWritingContent;

  return (
    <section
      id={routeGuidance.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a redirect/informational section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="english-writing-route-guidance-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {routeGuidance.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-route-guidance-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {routeGuidance.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{routeGuidance.intro}</p>
        </div>

        <ul className="space-y-3">
          {routeGuidance.links.map((link) => (
            <li key={link.id} className="bg-white border border-stone rounded-md p-4 sm:p-5">
              <Link
                href={link.href}
                aria-label={`${link.label} — ${link.description}`}
                className="inline-flex min-h-11 items-center font-serif text-base font-medium text-ink hover:text-teal underline underline-offset-2 mb-1"
              >
                {link.label}
              </Link>
              <p className="text-sm text-ink-soft leading-relaxed">{link.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
