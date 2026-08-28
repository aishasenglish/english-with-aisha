import { site } from "@/content/site";
import { englishWritingContent } from "@/content/englishWriting";

// Read directly from canonical site data rather than a second copy of these strings. Only three
// facts -- no writing-specific certification, journal-editor, published-author, proofreader or
// guaranteed-grade claim. Mirrors components/spoken-english/SpokenEnglishAuthorityStrip.tsx and
// components/toefl/TOEFLAuthorityStrip.tsx.
export default function EnglishWritingAuthorityStrip() {
  const facts: string[] = [site.qualification, site.professionalRole, englishWritingContent.authority.thirdFact];

  return (
    <section className="bg-white border-b border-stone" aria-label="Aisha's credentials">
      <div className="max-w-2xl mx-auto px-4 py-5 text-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-charcoal">
          {facts.map((fact, i) => (
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
