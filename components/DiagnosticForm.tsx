"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { courses } from "@/content/courses";

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

export default function DiagnosticForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "Free Diagnostic Test Request" }),
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-ink mb-2">Thank you!</h3>
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
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm"
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
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm"
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
          required
          value={form.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm"
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
            className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm"
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
            className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm"
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
          className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-sm resize-none"
          placeholder="Tell me what you're hoping to achieve (e.g. IELTS Band 7 for Canada visa, speak confidently at work…)"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or reach me on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-coral hover:bg-[#D85B3D] disabled:opacity-60 text-white font-semibold rounded-full text-base transition-colors"
      >
        {status === "loading" ? "Sending…" : "Submit — it's free"}
      </button>
    </form>
  );
}
