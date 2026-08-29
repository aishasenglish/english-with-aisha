import Link from "next/link";
import { aboutContent } from "@/content/about";

// Shows how Aisha thinks without an unverified service-inclusion checklist -- three teaching
// principles, phrased as approach rather than universal contractual promises (no personal
// feedback on every task, unlimited support, recorded lessons, weekly tests, one-to-one
// attention, score movement, or confidence/hesitation-removal claim).
export default function AboutTeachingPrinciples() {
  const { teachingPrinciples } = aboutContent;

  return (
    <section
      id={teachingPrinciples.id}
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="about-teaching-principles-heading"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {teachingPrinciples.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-teaching-principles-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-6 sm:mb-8">
          {teachingPrinciples.heading}
        </h2>

        <ul className="space-y-5 mb-8">
          {teachingPrinciples.principles.map((principle) => (
            <li key={principle.id} className="bg-white border border-stone rounded-md p-5">
              <p className="font-serif text-base font-medium text-ink mb-1.5">{principle.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{principle.body}</p>
            </li>
          ))}
        </ul>

        <Link
          href={teachingPrinciples.closingLink.href}
          className="inline-flex min-h-11 items-center font-serif text-base font-medium text-ink hover:text-teal underline underline-offset-2"
        >
          {teachingPrinciples.closingLink.label}
        </Link>
      </div>
    </section>
  );
}
