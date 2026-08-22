"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ENDPOINT_READY = Boolean(site.formspreeEndpoint) && !site.formspreeEndpoint.includes("PLACEHOLDER");

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const gotchaRef = useRef<HTMLInputElement>(null);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!ENDPOINT_READY) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "ContactForm: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — skipping submit. See .env.example."
        );
      }
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "Contact Form Message",
          _replyto: form.email,
          _gotcha: gotchaRef.current?.value ?? "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
        <p className="font-serif text-xl font-medium text-ink mb-2">Message sent!</p>
        <p className="text-muted">I&apos;ll get back to you shortly on WhatsApp or email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name <span className="text-coral">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email <span className="text-coral">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm resize-y"
          placeholder="What would you like to know?"
        />
      </div>
      {/* Honeypot — real visitors never see or fill this; Formspree drops submissions where it's filled */}
      <input
        ref={gotchaRef}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />
      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm">
          <p className="text-red-700 mb-2">
            Something went wrong sending that. Message me on WhatsApp instead — I&apos;ll reply either way.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-red-700 underline underline-offset-2 hover:text-red-800"
          >
            Message Aisha on WhatsApp
          </a>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-12 py-3.5 bg-coral hover:bg-amber-dark disabled:opacity-60 text-white font-medium rounded-sm text-base transition-colors"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
