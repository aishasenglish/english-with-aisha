"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const ENDPOINT_READY = Boolean(site.formspreeEndpoint) && !site.formspreeEndpoint.includes("PLACEHOLDER");

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const gotchaRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!ENDPOINT_READY) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "LeadMagnet: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — skipping submit. See .env.example."
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
          email,
          _subject: "IELTS Band 7 Checklist Request",
          _replyto: email,
          _gotcha: gotchaRef.current?.value ?? "",
        }),
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
        <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium mb-4 leading-tight">
          Get the free IELTS Band 7 Checklist.
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">
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
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 min-h-12 px-5 py-3 rounded-sm bg-white border border-line text-ink placeholder-ink-faint focus:outline-none focus:ring-2 focus:ring-sea text-base sm:text-sm"
            />
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
            <button
              type="submit"
              disabled={status === "loading"}
              className="min-h-12 px-6 py-3 bg-coral hover:bg-amber-dark disabled:opacity-60 text-white font-medium rounded-sm text-sm transition-colors"
            >
              {status === "loading" ? "Sending…" : "Send me the checklist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <div className="rounded-md border border-red-200 bg-red-50 px-6 py-4 mt-3 max-w-md mx-auto text-sm text-left">
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
      </div>
    </section>
  );
}
