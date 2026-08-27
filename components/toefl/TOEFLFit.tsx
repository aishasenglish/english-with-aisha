import Link from "next/link";
import { toeflPage } from "@/content/toefl";

// Server component. The current-format note and product-distinction note are both restrained
// information panels, not admissions or visa advice — see content/toefl.ts's comments for the
// official ETS sourcing behind each claim (docs/toefl-content-sources.md has the full mapping).
export default function TOEFLFit() {
  const { fit } = toeflPage;

  return (
    <section id={fit.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="toefl-fit-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {fit.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-fit-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {fit.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{fit.body}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {fit.items.map((item) => (
            <li key={item.title} className="bg-white border border-stone rounded-md p-5">
              <p className="font-serif text-base font-medium text-ink mb-2">{item.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        {/* Current-format note -- 21 January 2026 score-scale change. Never a tooltip; always
            plain, readable text with a link to the official ETS source. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6 mb-5">
          <p className="text-sm text-ink-soft leading-relaxed mb-3">{fit.currentFormatNote}</p>
          <a
            href={fit.currentFormatSourceLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            {fit.currentFormatSourceLink.label}
          </a>
        </div>

        {/* Product-distinction note -- TOEFL iBT is never presented as interchangeable with
            TOEFL Essentials or TOEFL ITP. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6">
          <p className="text-sm text-ink-soft leading-relaxed mb-3">{fit.productNote}</p>
          <Link
            href={fit.compareLink.href}
            className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            {fit.compareLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
