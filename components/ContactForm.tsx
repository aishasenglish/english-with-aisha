"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { formsAreConfigured, getFormEndpoint } from "@/lib/forms";
import { leadCapture } from "@/content/leadCapture";

type FormData = {
  name: string;
  email: string;
  message: string;
  /** Formspree honeypot — must stay empty; see the visually-hidden field below. */
  _gotcha: string;
};

const initialData: FormData = { name: "", email: "", message: "", _gotcha: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submittingRef = useRef(false);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "error") {
      errorRef.current?.focus();
    }
  }, [status]);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submittingRef.current) return;

    const endpoint = getFormEndpoint();
    if (!endpoint) {
      // The unconfigured fallback below renders instead of this form, so this
      // shouldn't be reachable — but fail closed rather than fetching "".
      setStatus("error");
      return;
    }

    submittingRef.current = true;
    setStatus("loading");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "Contact Form Message" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (!formsAreConfigured()) {
    const fallback = leadCapture.contactFallback;
    return (
      <div className="text-center">
        <h3 className="font-serif text-2xl font-medium text-ink mb-2">{fallback.heading}</h3>
        <p className="text-muted mb-6">{fallback.body}</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-coral hover:bg-amber-dark text-white font-medium rounded-sm px-6 py-3.5 text-base transition-colors"
        >
          {fallback.button}
        </a>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
        <p className="font-serif text-xl font-medium text-ink mb-2">Message sent!</p>
        <p className="text-muted">I&apos;ll get back to you shortly on WhatsApp or email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === "loading"} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name <span className="text-ink-faint font-normal text-xs">(required)</span>
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
          Email <span className="text-ink-faint font-normal text-xs">(required)</span>
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
          Message <span className="text-ink-faint font-normal text-xs">(required)</span>
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

      {/* Formspree honeypot — kept off-screen (not display:none) and out of the tab
          order so it stays invisible and unannounced to real visitors, but is still
          present in the DOM for spam bots that fill in every field. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input
          id="contact-gotcha"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={form._gotcha}
          onChange={(e) => update("_gotcha", e.target.value)}
        />
      </div>

      {status === "error" && (
        <div ref={errorRef} role="alert" tabIndex={-1} className="text-red-700 bg-red-50 border border-red-200 rounded-md p-4 text-sm">
          {leadCapture.error.body}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-12 py-3.5 bg-coral hover:bg-amber-dark disabled:opacity-60 text-white font-medium rounded-sm text-base transition-colors"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-ink-soft">
          Or{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            message on WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
