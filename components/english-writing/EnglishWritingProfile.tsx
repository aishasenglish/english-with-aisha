import { whatsappLink } from "@/lib/whatsapp";
import { englishWritingContent } from "@/content/englishWriting";

// Static reflection content, not form controls or a scored diagnostic. Keeping this as a Server
// Component makes the whole profile available in the initial HTML without adding client JavaScript.
export default function EnglishWritingProfile() {
  const { writingProfile } = englishWritingContent;

  return (
    <section
      id={writingProfile.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-profile-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {writingProfile.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-profile-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {writingProfile.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{writingProfile.introduction}</p>
        </div>

        <h3 className="font-serif text-lg font-medium text-ink mb-4">{writingProfile.promptsHeading}</h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {writingProfile.prompts.map((prompt, index) => (
            <li key={prompt.id} className="border border-stone rounded-md bg-ivory p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white text-xs font-semibold"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-serif text-base font-medium text-ink mb-1">{prompt.question}</h4>
                  <p className="text-sm text-ink-soft leading-relaxed">{prompt.helper}</p>
                </div>
              </div>
              <ul className="space-y-1.5 pl-10">
                {prompt.examples.map((example) => (
                  <li key={example} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2">
                    <span className="text-teal shrink-0" aria-hidden="true">
                      •
                    </span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="text-sm text-ink-soft bg-white border-2 border-teal/30 rounded-md p-4 sm:p-5 mb-7 leading-relaxed">
          {writingProfile.boundaryNote}
        </p>

        <a
          href={whatsappLink(writingProfile.cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          {writingProfile.cta.label}
        </a>
      </div>
    </section>
  );
}
