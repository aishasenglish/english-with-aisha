import {
  aboutContent,
  publicCredentials,
  isPublishableCredential,
  isSafeCredentialVerificationUrl,
  CREDENTIAL_CATEGORY_LABEL,
} from "@/content/about";

// About Step 2: replaces Step 1's flat authorityFacts pill row with a proper academic/role/
// additional-training hierarchy -- two primary cards (never flattened into one badge row), a
// separately-rendered (currently empty) optional third area for additional verified training, and
// learner-relevant interpretation text for each, rather than unexplained decorative badges.
//
// No green checkmark or icon implies independent/third-party verification anywhere here -- the
// neutral category labels ("Academic qualification", "Current professional role") carry the
// meaning entirely through text. `publicCredentials` is filtered through `isPublishableCredential`
// before rendering, so an incomplete future additional-training record fails closed silently
// (never a "verification pending" placeholder or an empty card) -- see content/about.ts and
// docs/about-credential-evidence-intake.md.
export default function AboutCredentials() {
  const { credentialsSection } = aboutContent;
  const publishable = publicCredentials.filter(isPublishableCredential);
  const primary = publishable.filter((c) => c.category !== "additional-training");
  const additional = publishable.filter((c) => c.category === "additional-training");

  return (
    <section id={credentialsSection.id} className="bg-white border-b border-stone py-10 sm:py-16 px-4" aria-labelledby="about-credentials-heading">
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {credentialsSection.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-credentials-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-6 sm:mb-8">
          {credentialsSection.heading}
        </h2>

        {/* Two-column only from sm: up -- a real fact each, so no empty third grid slot ever
            appears (the optional additional-training area below is a separate list, never sharing
            this grid). Single column below sm: keeps 320-430px cards stacked and readable. */}
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {primary.map((credential) => (
            <li key={credential.id} className="border border-stone rounded-md p-5 bg-ivory">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark mb-2">
                {CREDENTIAL_CATEGORY_LABEL[credential.category]}
              </p>
              <p className="font-serif text-lg font-medium text-ink mb-2">{credential.label}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{credential.context}</p>
            </li>
          ))}
        </ul>

        {additional.length > 0 && (
          <ul className="space-y-4 mt-4 sm:mt-5">
            {additional.map((credential) => (
              <li key={credential.id} className="border border-stone rounded-md p-5 bg-ivory">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark mb-2">
                  {CREDENTIAL_CATEGORY_LABEL[credential.category]}
                </p>
                <p className="font-serif text-lg font-medium text-ink mb-1">{credential.label}</p>
                {credential.issuedBy && (
                  <p className="text-sm text-ink-soft mb-2">Issued by {credential.issuedBy}</p>
                )}
                <p className="text-sm text-ink-soft leading-relaxed">{credential.context}</p>
                {credential.verificationUrl && isSafeCredentialVerificationUrl(credential.verificationUrl) && (
                  <a
                    href={credential.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex min-h-11 items-center text-sm font-medium text-ink hover:text-teal underline underline-offset-2 mt-3"
                  >
                    Verify {credential.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <p className="text-ink-soft text-sm leading-relaxed mt-6">{credentialsSection.otherConfirmedFacts}</p>
        <p className="text-ink-faint text-sm leading-relaxed mt-3">{credentialsSection.trustNote}</p>
      </div>
    </section>
  );
}
