"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-md border border-stone overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full min-h-14 flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-ink pr-4">{faq.question}</span>
            <span className={`shrink-0 text-teal transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-4 sm:px-6 pb-5">
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
