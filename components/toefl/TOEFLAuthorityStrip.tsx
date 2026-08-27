import { site } from "@/content/site";

// Read directly from canonical site data rather than a second copy of these strings. Only two
// facts — no ETS-certified-trainer, TOEFL-examiner/rater or partner claim, and the IELTS-specific
// IDP credential is deliberately not shown here (it's IELTS certification, not TOEFL authority).
const facts: string[] = [site.qualification, site.professionalRole];

// Plain semantic list, not styled as interactive buttons — credentials, not actions.
export default function TOEFLAuthorityStrip() {
  return (
    <section className="bg-white border-b border-stone" aria-label="Aisha's credentials">
      <div className="max-w-4xl mx-auto px-4 py-5">
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
