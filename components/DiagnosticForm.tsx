"use client";

import { useEffect, useRef, useState } from "react";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/lib/whatsapp";
import { formsAreConfigured, getFormEndpoint } from "@/lib/forms";
import { leadCapture } from "@/content/leadCapture";
import { ieltsFinalEnquiry, ieltsFormVariant } from "@/content/ieltsEnquiry";
import { pteFinalEnquiry, pteFormVariant } from "@/content/pteEnquiry";
import type { EnquirySource, EnquiryVariant } from "@/lib/enquiryQuery";
import { track } from "@/lib/analytics/track";
import type { AnalyticsErrorType, AnalyticsSource } from "@/lib/analytics/events";

/**
 * PTE Step 9: a small typed configuration map replaces the growing `isIelts ? X : Y` ternary
 * pattern — adding a third ("pte") variant to every one of those ternaries would have made the
 * component fragile and hard to scan. Each variant's full set of labels, placeholders and
 * fallback/success/error WhatsApp messages lives in exactly one place here; the JSX below reads
 * only from `config`. The "general" entry preserves the original hardcoded/leadCapture-derived
 * behaviour byte-for-byte, and "ielts" preserves its exact prior behaviour too — neither changed
 * as part of adding "pte".
 */
type VariantConfig = {
  /** Locks the programme <select> to a single preselected value instead of letting the visitor choose. */
  locked: boolean;
  locationLabel: string;
  locationPlaceholder: string;
  situationLabel: string;
  situationPlaceholder: string;
  goalLabel: string;
  goalPlaceholder: string;
  submissionSubject: string;
  submitButtonLabel: string;
  success: { heading: string; body: string };
  fallback: { heading: string; body: string; button: string };
  /** WhatsApp message offered when Formspree isn't configured at all. */
  unconfiguredMessage: string;
  /** WhatsApp message offered on the post-submit success screen's "Continue on WhatsApp" link. */
  successContinueMessage: string;
  /** WhatsApp message offered as the fallback link after a submission error. */
  errorFallbackMessage: string;
};

const VARIANT_CONFIG: Record<EnquiryVariant, VariantConfig> = {
  general: {
    locked: false,
    locationLabel: "Country or time zone",
    locationPlaceholder: "e.g. Lahore, Pakistan (PKT)",
    situationLabel: "Current situation",
    situationPlaceholder:
      "School level, board, syllabus or exam session; current IELTS/PTE/TOEFL score if known; or a speaking, writing or workplace challenge.",
    goalLabel: "Goal and preferred timeline",
    goalPlaceholder: "e.g. Band 7 for a visa application by December",
    submissionSubject: "Free Course Recommendation Request",
    submitButtonLabel: "Request My Recommendation",
    success: leadCapture.success,
    fallback: leadCapture.recommendationFallback,
    unconfiguredMessage: leadCapture.recommendationFallback.whatsappMessage,
    successContinueMessage: leadCapture.success.whatsappMessage,
    errorFallbackMessage: leadCapture.recommendationFallback.whatsappMessage,
  },
  ielts: {
    locked: true,
    locationLabel: ieltsFormVariant.locationLabel,
    locationPlaceholder: ieltsFormVariant.locationPlaceholder,
    situationLabel: ieltsFormVariant.situationLabel,
    situationPlaceholder: ieltsFormVariant.situationPlaceholder,
    goalLabel: ieltsFormVariant.goalLabel,
    goalPlaceholder: ieltsFormVariant.goalPlaceholder,
    submissionSubject: ieltsFormVariant.submissionSubject,
    submitButtonLabel: "Send My IELTS Enquiry",
    success: ieltsFormVariant.success,
    fallback: ieltsFormVariant.unconfiguredFallback,
    unconfiguredMessage: ieltsFinalEnquiry.whatsappMessage,
    successContinueMessage: ieltsFinalEnquiry.whatsappMessage,
    errorFallbackMessage: ieltsFinalEnquiry.whatsappMessage,
  },
  pte: {
    locked: true,
    locationLabel: pteFormVariant.locationLabel,
    locationPlaceholder: pteFormVariant.locationPlaceholder,
    situationLabel: pteFormVariant.situationLabel,
    situationPlaceholder: pteFormVariant.situationPlaceholder,
    goalLabel: pteFormVariant.goalLabel,
    goalPlaceholder: pteFormVariant.goalPlaceholder,
    submissionSubject: pteFormVariant.submissionSubject,
    submitButtonLabel: "Send My PTE Enquiry",
    success: pteFormVariant.success,
    fallback: pteFormVariant.unconfiguredFallback,
    unconfiguredMessage: pteFinalEnquiry.whatsappMessage,
    successContinueMessage: pteFinalEnquiry.whatsappMessage,
    errorFallbackMessage: pteFinalEnquiry.whatsappMessage,
  },
};

type FormData = {
  name: string;
  enquiringFor: string;
  whatsapp: string;
  email: string;
  programme: string;
  situation: string;
  goalTimeline: string;
  location: string;
  /** Formspree honeypot — must stay empty; see the visually-hidden field below. */
  _gotcha: string;
};

const baseInitialData: Omit<FormData, "programme"> = {
  name: "",
  enquiringFor: "",
  whatsapp: "",
  email: "",
  situation: "",
  goalTimeline: "",
  location: "",
  _gotcha: "",
};

const inputClasses =
  "w-full min-h-12 px-4 py-3 rounded-md border border-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-teal text-base sm:text-sm";
const labelClasses = "block text-sm font-medium text-charcoal mb-1.5";
const statusTextClasses = "text-ink-faint font-normal text-xs";

type Props = {
  /** Preselects (and, for the "ielts" variant, locks) the programme field — an allowlisted
   *  public programme name resolved server-side by lib/enquiryQuery.ts, never a raw query
   *  string. Omit for the generic "pick a programme" behaviour. */
  initialProgramme?: string;
  /** Non-sensitive label included in the Formspree payload so a submission's origin is known
   *  without needing to log request headers or referrers. */
  source?: EnquirySource;
  /** "ielts" locks the programme field and swaps field guidance/success copy to IELTS-specific
   *  wording (IELTS Step 9). Defaults to the original generic behaviour. */
  variant?: EnquiryVariant;
};

export default function DiagnosticForm({ initialProgramme, source = "general", variant = "general" }: Props) {
  const [form, setForm] = useState<FormData>({ ...baseInitialData, programme: initialProgramme ?? "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submittingRef = useRef(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const config = VARIANT_CONFIG[variant];
  // Analytics stay scoped to "ielts" specifically (never "pte") -- AnalyticsProgramme only has
  // one allowed value, and PTE Step 9 deliberately doesn't add PTE analytics (that's Step 12).
  const isIelts = variant === "ielts";
  // IELTS Step 12: fires assessment_form_start at most once per mount, on the first meaningful
  // edit -- never on load, on the preselected/locked programme field's initial render, or on
  // every keystroke thereafter. Analytics events only ever fire for the "ielts" variant, since
  // AnalyticsProgramme only has one allowed value.
  const formStartTrackedRef = useRef(false);
  // Only "ielts-page" or "general" reach analytics -- the broader EnquirySource values
  // ("homepage", "courses-hub") collapse to "general" for this narrower, allowlisted field.
  const analyticsSource: AnalyticsSource = source === "ielts-page" ? "ielts-page" : "general";

  useEffect(() => {
    if (status === "error") {
      errorRef.current?.focus();
    }
  }, [status]);

  function update(field: keyof FormData, value: string) {
    if (isIelts && !formStartTrackedRef.current) {
      formStartTrackedRef.current = true;
      track("assessment_form_start", {
        programme: "ielts",
        page_path: "/free-diagnostic-test",
        source: analyticsSource,
      });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function trackFormError(errorType: AnalyticsErrorType) {
    if (!isIelts) return;
    track("assessment_form_error", {
      programme: "ielts",
      page_path: "/free-diagnostic-test",
      source: analyticsSource,
      error_type: errorType,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submittingRef.current) return;

    const endpoint = getFormEndpoint();
    if (!endpoint) {
      // The unconfigured fallback below renders instead of this form, so this
      // shouldn't be reachable — but fail closed rather than fetching "".
      trackFormError("configuration");
      setStatus("error");
      return;
    }

    submittingRef.current = true;
    setStatus("loading");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: config.submissionSubject,
          source,
          // Only sent when the visitor actually provided one — an empty _replyto would leave
          // Formspree with nothing usable to reply to.
          ...(form.email ? { _replyto: form.email } : {}),
        }),
      });
      if (res.ok) {
        setStatus("success");
        if (isIelts) {
          track("assessment_form_submit", {
            programme: "ielts",
            page_path: "/free-diagnostic-test",
            source: analyticsSource,
          });
        }
      } else {
        trackFormError("provider");
        setStatus("error");
      }
    } catch {
      trackFormError("network");
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (!formsAreConfigured()) {
    return (
      <div className="text-center">
        <h3 className="font-serif text-2xl font-medium text-ink mb-2">{config.fallback.heading}</h3>
        <p className="text-muted mb-6">{config.fallback.body}</p>
        <a
          href={whatsappLink(config.unconfiguredMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-coral hover:bg-amber-dark text-white font-medium rounded-sm px-6 py-3.5 text-base transition-colors"
        >
          {config.fallback.button}
        </a>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-medium text-ink mb-2">{config.success.heading}</h3>
        <p className="text-muted mb-6">{config.success.body}</p>
        <a
          href={whatsappLink(config.successContinueMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-white font-medium rounded-sm px-6 py-3 text-sm transition-colors"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === "loading"} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-name" className={labelClasses}>
            Full name <span className={statusTextClasses}>(required)</span>
          </label>
          <input
            id="diag-name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="diag-for" className={labelClasses}>
            I am enquiring for <span className={statusTextClasses}>(required)</span>
          </label>
          <select
            id="diag-for"
            required
            value={form.enquiringFor}
            onChange={(e) => update("enquiringFor", e.target.value)}
            className={inputClasses}
          >
            <option value="">Select one</option>
            {leadCapture.enquiringForOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-wa" className={labelClasses}>
            WhatsApp number <span className={statusTextClasses}>(required)</span>
          </label>
          <input
            id="diag-wa"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className={inputClasses}
            placeholder="e.g. +92 311 2233671"
          />
        </div>
        <div>
          <label htmlFor="diag-email" className={labelClasses}>
            Email address <span className={statusTextClasses}>(optional)</span>
          </label>
          <input
            id="diag-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-programme" className={labelClasses}>
            Programme or goal <span className={statusTextClasses}>(required)</span>
          </label>
          {config.locked ? (
            // Locked, not just preselected — the candidate arrived here specifically to discuss
            // this one programme and shouldn't be asked to choose a programme again. Still a real
            // form control (disabled <select>, not just styled text) so its state stays visibly
            // consistent with every other field, and form.programme is already set from
            // initialProgramme.
            <select id="diag-programme" disabled value={form.programme} className={`${inputClasses} disabled:opacity-100 disabled:bg-ivory`}>
              <option value={form.programme}>{form.programme}</option>
            </select>
          ) : (
            <select
              id="diag-programme"
              required
              value={form.programme}
              onChange={(e) => update("programme", e.target.value)}
              className={inputClasses}
            >
              <option value="">Select a programme</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
              {leadCapture.programmeOtherOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <label htmlFor="diag-location" className={labelClasses}>
            {config.locationLabel} <span className={statusTextClasses}>(optional)</span>
          </label>
          <input
            id="diag-location"
            type="text"
            autoComplete="country-name"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className={inputClasses}
            placeholder={config.locationPlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="diag-situation" className={labelClasses}>
          {config.situationLabel} <span className={statusTextClasses}>(required)</span>
        </label>
        <textarea
          id="diag-situation"
          required
          rows={4}
          value={form.situation}
          onChange={(e) => update("situation", e.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder={config.situationPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="diag-goal" className={labelClasses}>
          {config.goalLabel} <span className={statusTextClasses}>(required)</span>
        </label>
        <input
          id="diag-goal"
          type="text"
          required
          value={form.goalTimeline}
          onChange={(e) => update("goalTimeline", e.target.value)}
          className={inputClasses}
          placeholder={config.goalPlaceholder}
        />
      </div>

      {/* Formspree honeypot — kept off-screen (not display:none) and out of the tab
          order so it stays invisible and unannounced to real visitors, but is still
          present in the DOM for spam bots that fill in every field. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="diag-gotcha">Leave this field empty</label>
        <input
          id="diag-gotcha"
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

      <p className="text-ink-faint text-xs leading-relaxed">{leadCapture.privacyNote}</p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-12 py-3.5 bg-coral hover:bg-amber-dark disabled:opacity-60 text-white font-medium rounded-sm text-base transition-colors"
      >
        {status === "loading" ? "Sending…" : config.submitButtonLabel}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-ink-soft">
          Or{" "}
          <a
            href={whatsappLink(config.errorFallbackMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            send the same details on WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
