import { whatsappLink } from "@/lib/whatsapp";

type FinalCtaContent = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  detailsHeading: string;
  primaryLabel: string;
  responseExpectation: string;
};

type EnquiryField = { id: string; label: string };

type Props = {
  content: FinalCtaContent;
  fields: readonly EnquiryField[];
  whatsappMessage: string;
  analytics?: boolean;
};

export default function ProgrammeFinalCTA({ content, fields, whatsappMessage, analytics = false }: Props) {
  return (
    <section id={content.id} className="border-t border-line bg-surface-tint px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby={`${content.id}-heading`}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.10em] text-ink-faint">
          {content.eyebrow}<span className="h-0.5 w-9 bg-teal" aria-hidden="true" />
        </p>
        <h2 id={`${content.id}-heading`} className="mb-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">{content.heading}</h2>
        <p className="mb-7 text-base text-ink-soft sm:mb-8 sm:text-lg">{content.body}</p>

        <div className="mb-7 rounded-xl border border-line bg-white p-5 text-left sm:mb-8 sm:p-6">
          <p className="mb-3 text-base font-semibold text-ink">{content.detailsHeading}</p>
          <ul className="space-y-2">
            {fields.map((field) => (
              <li key={field.id} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                {field.label}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          {...(analytics
            ? {
                "data-analytics-event": "whatsapp_click",
                "data-analytics-section": "final_enquiry",
                "data-analytics-intent": "discuss_goal",
              }
            : {})}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:w-auto"
        >
          {content.primaryLabel}
        </a>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-soft">{content.responseExpectation}</p>
      </div>
    </section>
  );
}
