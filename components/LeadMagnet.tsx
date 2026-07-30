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
    <section className="bg-ink text-white py-16 px-4" id="lead-magnet">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
          Free Resource
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Get the free IELTS Band 7 Checklist.
        </h2>
        <p className="text-white/70 text-lg mb-8">
          The exact things examiners look for — in one simple PDF. Enter your
          email and it&apos;s yours.
        </p>

        {status === "success" ? (
          <div className="bg-white/10 rounded-2xl px-8 py-6">
            <p className="text-gold font-semibold text-lg">You&apos;re in!</p>
            <p className="text-white/80 mt-1">
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
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-coral hover:bg-amber-dark disabled:opacity-60 text-ink hover:text-white font-semibold rounded-full text-sm transition-colors"
            >
              {status === "loading" ? "Sending…" : "Send me the checklist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-300 text-sm mt-3">
            Something went wrong. Please try again or message on WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
