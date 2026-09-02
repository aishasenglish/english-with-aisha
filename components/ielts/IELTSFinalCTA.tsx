import { whatsappLink } from "@/lib/whatsapp";
import { ieltsEnquiryFields, ieltsFinalEnquiry } from "@/content/ieltsEnquiry";
import { ieltsProgrammePage } from "@/content/ielts";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";

export default function IELTSFinalCTA() {
  const { finalCta } = ieltsProgrammePage;

  return (
    <section id={finalCta.id} className="bg-sea-deep px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="ielts-final-heading">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{finalCta.eyebrow}<span className="h-px w-10 bg-white/60" aria-hidden="true" /></p>
          <h2 id="ielts-final-heading" className="max-w-2xl text-[clamp(2rem,4vw,3.75rem)] font-semibold tracking-[-0.04em] text-white">{finalCta.heading}</h2>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-white/85 sm:text-lg">{finalCta.body}</p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-section="final_enquiry" data-analytics-intent="discuss_goal" className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-sea-deep transition-colors hover:bg-sea-wash active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto">{finalCta.primaryLabel}</a>
            <a href={whatsappLink(ieltsFinalEnquiry.whatsappMessage)} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-section="final_enquiry" data-analytics-intent="ask_availability" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-white">{finalCta.secondaryLabel}</a>
          </div>
          <p className="mt-5 text-sm text-white/75">{finalCta.supportingText}</p>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/5 p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-white">Share these details</h3>
          <ul className="mt-5 space-y-3">
            {ieltsEnquiryFields.map((field) => (
              <li key={field.id} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                {field.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
