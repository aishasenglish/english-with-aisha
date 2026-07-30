"use client";

import { useState } from "react";
import type { FAQ } from "@/content/faqs";

export type FAQGroup = {
  label: string;
  faqs: FAQ[];
};

type Props = {
  groups: FAQGroup[];
};

export default function GroupedFAQAccordion({ groups }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-xs font-medium uppercase tracking-[0.10em] text-ink-faint mb-4">
            {group.label}
          </p>
          <div className="space-y-3">
            {group.faqs.map((faq, i) => {
              const key = `${group.label}-${i}`;
              const isOpen = open === key;
              return (
                <div
                  key={key}
                  className="bg-white rounded-md border border-stone overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-ink pr-4">{faq.question}</span>
                    <span
                      className={`shrink-0 text-teal transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
