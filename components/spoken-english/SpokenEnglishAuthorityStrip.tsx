import { site } from "@/content/site";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Read directly from canonical site data rather than a second copy of these strings. Only two
// facts -- no native-speaker, pronunciation-certification, speech-therapy or guaranteed-results
// claim. The IELTS-specific IDP credential is deliberately not shown here (it's IELTS
// certification, not general Spoken English accreditation) -- mirrors
// components/toefl/TOEFLAuthorityStrip.tsx.
const facts: string[] = [site.qualification, site.professionalRole];

// Plain semantic list, not styled as interactive buttons -- credentials, not actions. The two
// short interpretation lines below are restrained context, never a claim of certification or
// specialist accreditation.
export default function SpokenEnglishAuthorityStrip() {
  const { interpretations } = spokenEnglishPage.authority;

  return (
    <section className="bg-white border-b border-stone" aria-label="Aisha's credentials">
      <div className="max-w-2xl mx-auto px-4 py-5 text-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-charcoal mb-3">
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
        {/* Step 11: bumped from text-xs to text-sm -- these two lines explain what the
            qualification/role actually mean for coaching quality (decision-relevant context, not
            a decorative label), so they belong at a readable minimum size. Contrast unaffected:
            text-ink-faint measures 5.10:1 on white, comfortably above the 4.5:1 AA minimum at any
            size. */}
        <ul className="text-sm text-ink-faint leading-relaxed space-y-0.5">
          {interpretations.map((item) => (
            <li key={item.id}>{item.body}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
