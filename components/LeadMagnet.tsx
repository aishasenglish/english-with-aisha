"use client";

import { useState } from "react";
import { site } from "@/content/site";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "IELTS Band 7 Checklist Request" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-surface-tint text-ink py-16 px-4" id="lead-magnet">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-ink-faint font-medium text-xs uppercase tracking-[0.10em] mb-3">
          Free Resource
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
          Get the free IELTS Band 7 Checklist.
        </h2>
        <p className="text-ink-soft text-lg mb-8">
          The exact things examiners look for — in one simple PDF. Enter your
          email and it&apos;s yours.
        </p>

        {status === "success" ? (
          <div className="bg-white border border-line rounded-md px-8 py-6">
            <p className="text-sea-deep font-medium text-lg">You&apos;re in!</p>
            <p className="text-ink-soft mt-1">
              The checklist is on its way to your inbox. Check your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="checklist-email" className="sr-only">
              Email address
            </label>
            <input
              id="checklist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-sm bg-white border border-line text-ink placeholder-ink-faint focus:outline-none focus:ring-2 focus:ring-sea text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-coral hover:bg-amber-dark disabled:opacity-60 text-white font-medium rounded-sm text-sm transition-colors"
            >
              {status === "loading" ? "Sending…" : "Send me the checklist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm mt-3">
            Something went wrong. Please try again or message on WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
