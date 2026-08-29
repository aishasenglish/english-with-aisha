import Link from "next/link";
import { aboutContent } from "@/content/about";

// Connects personal authority to real service pathways without duplicating course pages -- one
// problem/context cue per route group, descriptive links to existing canonical programme pages
// (never "Learn more"), and one shared boundary note that the linked page confirms format, fee
// and availability. No curriculum detail, price, schedule or O/A Level subdomain URL invented
// here -- see content/about.ts.
export default function AboutExpertiseRoutes() {
  const { expertiseRoutes } = aboutContent;

  return (
    <section
      id={expertiseRoutes.id}
      className="py-10 sm:py-16 px-4 bg-white"
      aria-labelledby="about-expertise-routes-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {expertiseRoutes.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="about-expertise-routes-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {expertiseRoutes.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{expertiseRoutes.intro}</p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {expertiseRoutes.groups.map((group) => (
            <div key={group.id} className="border border-stone rounded-md p-5 sm:p-6 bg-ivory">
              <h3 className="font-serif text-lg font-medium text-ink mb-1.5">{group.label}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{group.cue}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.id} className="bg-white border border-stone rounded-md p-4">
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
          ))}
        </div>

        <p className="text-ink-soft text-sm leading-relaxed mt-6">{expertiseRoutes.boundary}</p>
      </div>
    </section>
  );
}
