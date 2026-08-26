import type { Metadata } from "next";
import DiagnosticForm from "@/components/DiagnosticForm";
import { leadCapture } from "@/content/leadCapture";
import { ieltsFormVariant } from "@/content/ieltsEnquiry";
import { pteFormVariant } from "@/content/pteEnquiry";
import { resolveProgrammeQuery, resolveEnquirySource } from "@/lib/enquiryQuery";
import type { EnquiryVariant } from "@/lib/enquiryQuery";

/** Page heading/subtitle per form variant — extend here (never with a new inline ternary) when a
 *  new programme variant is added. See components/DiagnosticForm.tsx's VARIANT_CONFIG for the
 *  same pattern applied to the form fields themselves. */
const PAGE_CONTENT: Record<EnquiryVariant, { heading: string; subtitle: string }> = {
  general: { heading: leadCapture.requestPage.heading, subtitle: leadCapture.requestPage.subtitle },
  ielts: { heading: ieltsFormVariant.pageHeading, subtitle: ieltsFormVariant.pageSubtitle },
  pte: { heading: pteFormVariant.pageHeading, subtitle: pteFormVariant.pageSubtitle },
};

export const metadata: Metadata = {
  title: leadCapture.requestPage.metaTitle,
  description: leadCapture.requestPage.description,
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type Props = {
  searchParams: Promise<{ programme?: string | string[]; source?: string | string[] }>;
};

// Reading searchParams opts this page into dynamic rendering — necessary here since the
// programme/source query values decide which variant of the shared DiagnosticForm renders
// (IELTS Step 9). Both are resolved through lib/enquiryQuery.ts's fixed allowlist rather than
// trusted directly: an unrecognised or missing value always falls back to the original generic
// "pick a programme" behaviour, never a raw query string passed into form values or markup.
export default async function FreeDiagnosticPage({ searchParams }: Props) {
  const params = await searchParams;
  const { initialProgramme, variant } = resolveProgrammeQuery(params.programme);
  const source = resolveEnquirySource(params.source);
  const { heading, subtitle } = PAGE_CONTENT[variant];

  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{heading}</h1>
          <p className="text-ink-soft text-lg">{subtitle}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-md border border-stone p-6 sm:p-8 mb-6">
            <h2 className="font-serif text-lg font-medium text-ink mb-4">What happens next</h2>
            <ul className="space-y-3">
              {leadCapture.requestPage.whatHappensNext.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-md p-6 sm:p-8 border border-stone">
            <DiagnosticForm initialProgramme={initialProgramme} source={source} variant={variant} />
          </div>
        </div>
      </section>
    </>
  );
}
