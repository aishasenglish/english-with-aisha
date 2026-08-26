import { generalFaqs } from "@/content/faqs";

/**
 * The minimal shape this component actually needs — deliberately narrower than `FAQ` so a
 * programme-specific source with its own type (e.g. content/ieltsFaqs.ts's `IeltsFaq`, IELTS
 * Step 8) can be passed as `items` too, without needing FAQ's `published`/`homepage` fields.
 * `links` is optional "jump to" references appended after the answer — e.g. IELTS Step 8's
 * current-offer answer linking to the verified Learning format / Fee / Availability sections it
 * describes, instead of duplicating those changing details in the FAQ text itself.
 */
type FAQAccordionItem = {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

type Props = {
  /** Defaults to every published FAQ (the full /faq page's list) when omitted. */
  items?: FAQAccordionItem[];
};

// Native <details>/<summary> — answers are present in the initial HTML, keyboard-operable
// and toggleable without JavaScript. No client component needed for this interaction.
export default function FAQAccordion({ items = generalFaqs }: Props) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details key={faq.id} className="group bg-white rounded-md border border-stone overflow-hidden">
          <summary
            className="min-h-12 flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
          >
            <span className="font-medium text-ink">{faq.question}</span>
            <span
              className="shrink-0 text-teal transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>
          <div className="px-4 sm:px-6 pb-5">
            <p className="text-muted leading-relaxed">{faq.answer}</p>
            {faq.links && faq.links.length > 0 && (
              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                {faq.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-teal hover:text-ink underline underline-offset-2 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
