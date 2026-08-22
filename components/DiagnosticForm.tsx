"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/lib/whatsapp";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  course: string;
  level: string;
  goal: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  course: "",
  level: "",
  goal: "",
};

const ENDPOINT_READY = Boolean(site.formspreeEndpoint) && !site.formspreeEndpoint.includes("PLACEHOLDER");

export default function DiagnosticForm() {
  const [form, setForm] = useState<FormData>(initialData);
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
          "DiagnosticForm: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — skipping submit. See .env.example."
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
          _subject: "Free Diagnostic Test Request",
          _replyto: form.email,
          _gotcha: gotchaRef.current?.value ?? "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialData);
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
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-medium text-ink mb-2">Thank you!</h3>
        <p className="text-muted">
          I&apos;ll review your details and get back to you on WhatsApp with your
          recommended path.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-name" className="block text-sm font-medium text-charcoal mb-1.5">
            Full name <span className="text-coral">*</span>
          </label>
          <input
            id="diag-name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="diag-email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email address <span className="text-coral">*</span>
          </label>
          <input
            id="diag-email"
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
      </div>

      <div>
        <label htmlFor="diag-wa" className="block text-sm font-medium text-charcoal mb-1.5">
          WhatsApp number <span className="text-coral">*</span>
        </label>
        <input
          id="diag-wa"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          value={form.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
          placeholder="e.g. 0311-2233671"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-course" className="block text-sm font-medium text-charcoal mb-1.5">
            Target course <span className="text-coral">*</span>
          </label>
          <select
            id="diag-course"
            required
            value={form.course}
            onChange={(e) => update("course", e.target.value)}
            className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
          >
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="diag-level" className="block text-sm font-medium text-charcoal mb-1.5">
            Current English level <span className="text-coral">*</span>
          </label>
          <select
            id="diag-level"
            required
            value={form.level}
            onChange={(e) => update("level", e.target.value)}
            className="w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm"
          >
            <option value="">Select your level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="diag-goal" className="block text-sm font-medium text-charcoal mb-1.5">
          Your goal <span className="text-coral">*</span>
        </label>
        <textarea
          id="diag-goal"
          required
          rows={4}
          value={form.goal}
          onChange={(e) => update("goal", e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm resize-y"
          placeholder="Tell me what you're hoping to achieve (e.g. IELTS Band 7 for Canada visa, speak confidently at work…)"
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
        {status === "loading" ? "Sending…" : "Submit — it's free"}
      </button>
    </form>
  );
}
