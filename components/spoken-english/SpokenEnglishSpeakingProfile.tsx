import { whatsappLink } from "@/lib/whatsapp";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. The six profile prompts are explanatory content, not form controls -- a
// visitor answers them over WhatsApp/email, not on this page (Step 2, Part O: "Do not present a
// non-interactive profile as form controls"). The profile-areas list uses plain descriptive text,
// never a score, percentage or coloured severity label, and the boundary note explicitly rules out
// a certified CEFR placement or clinical assessment.
export default function SpokenEnglishSpeakingProfile() {
  const { speakingProfile } = spokenEnglishPage;

  return (
    <section
      id={speakingProfile.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-speaking-profile-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {speakingProfile.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-speaking-profile-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {speakingProfile.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{speakingProfile.introduction}</p>
        </div>

        <h3 className="font-serif text-lg font-medium text-ink mb-4">{speakingProfile.promptsHeading}</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {speakingProfile.prompts.map((prompt) => (
            <li key={prompt.id} className="border border-stone rounded-md bg-ivory p-5">
              <p className="font-serif text-base font-medium text-ink mb-1.5">{prompt.label}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{prompt.guidance}</p>
            </li>
          ))}
        </ul>

        <div className="bg-ivory border border-stone rounded-md p-5 sm:p-6 mb-6">
          <p className="font-serif text-base font-medium text-ink mb-3">{speakingProfile.profileAreasHeading}</p>
          <ul className="space-y-3">
            {speakingProfile.profileAreas.map((area) => (
              <li key={area.id} className="text-sm text-ink-soft leading-relaxed">
                <span className="font-medium text-ink">{area.title}.</span> {area.observation}
              </li>
            ))}
          </ul>
        </div>

        {/* Boundary note -- explicit and readable, never a tooltip. */}
        <p className="text-sm text-ink-soft bg-white border-2 border-teal/30 rounded-md p-4 sm:p-5 mb-8 leading-relaxed">
          {speakingProfile.boundaryNote}
        </p>

        <a
          href={whatsappLink(speakingProfile.cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          {speakingProfile.cta.label}
        </a>
      </div>
    </section>
  );
}
