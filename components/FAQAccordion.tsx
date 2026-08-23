import { generalFaqs, type FAQ } from "@/content/faqs";

type Props = {
  /** Defaults to every published FAQ (the full /faq page's list) when omitted. */
  items?: FAQ[];
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
          </div>
        </details>
      ))}
    </div>
  );
}
