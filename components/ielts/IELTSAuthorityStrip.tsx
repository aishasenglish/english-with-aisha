import { site } from "@/content/site";

// About Step 2 audit: "IDP-Certified IELTS Trainer" (content/ielts.ts's `ieltsCredential`) was
// removed from this strip -- no credential asset, issuer or evidence record exists for it (see
// docs/about-credentials-verification.md), and existing repeated use across the codebase was not
// itself evidence. Read directly from canonical site data rather than a second copy of these
// strings.
const facts: string[] = [site.qualification, site.professionalRole];

// Plain semantic list, not styled as interactive buttons — credentials, not actions.
export default function IELTSAuthorityStrip() {
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
