import { aboutContent } from "@/content/about";

// Fast trust cues without a boastful statistics bar -- no counters, years-teaching, students-
// taught, pass-rate, score-improvement, countries-reached, rating or unverified certification
// logo. Semantic text list, not icon-only badges. Mirrors the same pattern already used by
// components/english-writing/EnglishWritingAuthorityStrip.tsx and its sibling programmes.
export default function AboutAuthorityStrip() {
  return (
    <section className="bg-white border-b border-stone" aria-label="Aisha's verified facts">
      <div className="max-w-2xl mx-auto px-4 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-charcoal">
          {aboutContent.authorityFacts.map((fact, i) => (
            <li key={fact} className="flex items-center gap-2.5">
              {i > 0 && (
                <span className="text-line-strong" aria-hidden="true">
                  •
                </span>
              )}
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
