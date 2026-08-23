export type FAQItem = {
  /** Stable, meaningful — used as the React key. Never an array index. */
  id: string;
  question: string;
  answer: string;
};

export type FAQGroup = {
  label: string;
  faqs: FAQItem[];
};

type Props = {
  groups: FAQGroup[];
};

// Native <details>/<summary> — same accessible, JS-free pattern as FAQAccordion. This
// component stays separate because its groups (page-specific, e.g. "For parents" /
// "For students") aren't part of the canonical content/faqs.ts collection.
export default function GroupedFAQAccordion({ groups }: Props) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-xs font-medium uppercase tracking-[0.10em] text-ink-faint mb-4">
            {group.label}
          </p>
          <div className="space-y-3">
            {group.faqs.map((faq) => (
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
        </div>
      ))}
    </div>
  );
}
