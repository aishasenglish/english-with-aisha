export type PTEEnquiryField = {
  id: string;
  label: string;
};

/**
 * Canonical PTE enquiry facts (PTE Step 9), mirroring content/ieltsEnquiry.ts's pattern. The
 * hero, score-profile contextual link, learning-format CTA, pricing CTA, availability enquiry and
 * final CTA each keep their own section-specific eyebrow/heading/CTA label in content/pte.ts, but
 * the underlying set of facts requested is the same everywhere — centralised here as
 * `pteEnquiryFields` so it can't quietly drift out of sync between sections. `pteFinalEnquiry`
 * holds the exact shared message text for the final CTA's WhatsApp, form-submission-fallback and
 * email actions specifically (the other sections' messages are each a shorter, context-focused
 * variant, not a duplicate template).
 */
export const pteEnquiryFields: PTEEnquiryField[] = [
  { id: "exact-test", label: "PTE Academic or PTE Academic UKVI" },
  { id: "scores", label: "Required overall and skill scores" },
  { id: "starting-point", label: "Previous overall and skill scores or current starting point" },
  { id: "deadline", label: "Test, application or registration deadline" },
  { id: "location-availability", label: "Country, time zone and usual availability" },
];

export const pteFinalEnquiry = {
  whatsappMessage:
    "Hi Aisha! I would like to discuss PTE coaching. I need [PTE Academic or PTE Academic UKVI], my required overall and skill scores are [scores], my previous overall and skill scores or current starting point are [details], my test, application or registration deadline is [date], my country/time zone is [details], and my usual availability or preferred format is [details]. Please let me know whether a current option may suit this requirement and share the confirmed format, schedule and fee.",
  emailSubject: "PTE coaching enquiry",
  emailBody: `Hello Aisha,

I would like to ask about PTE coaching.

Exact PTE test:
Required overall and skill scores:
Previous overall and skill scores or current starting point:
Test, application or registration deadline:
Country and time zone:
Usual availability or preferred format:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
};

/**
 * PTE-specific behaviour for the shared components/DiagnosticForm.tsx and
 * app/free-diagnostic-test/page.tsx when reached via the allowlisted
 * `?programme=pte&source=pte-page` link from PTEFinalCTA — see lib/enquiryQuery.ts for how that
 * query value is resolved safely. Reuses pteFinalEnquiry.whatsappMessage as the fallback offered
 * on submission failure or when the form endpoint isn't configured, rather than a second
 * near-duplicate message.
 */
export const pteFormVariant = {
  programmeName: "PTE Academic Preparation",
  situationLabel: "Exact PTE test and previous scores",
  situationPlaceholder:
    'e.g. PTE Academic; previous score Overall 58 (L55 R60 S54 W57), or "first attempt" if you have not tested yet.',
  goalLabel: "Required scores and deadline",
  goalPlaceholder: "e.g. Overall 65 with at least 58 in each skill, needed by 15 November 2026",
  locationLabel: "Country, time zone and usual availability",
  locationPlaceholder: "e.g. Lahore, Pakistan (PKT); weekday evenings",
  submissionSubject: "PTE Coaching Enquiry",
  success: {
    heading: "Your PTE enquiry has been sent.",
    body: "Aisha will review the test requirement, current context and deadline you shared, then respond using the contact details provided.",
  },
  unconfiguredFallback: {
    heading: "Send your PTE details on WhatsApp",
    body: "Include your exact test, required scores, previous result or starting point, deadline, time zone and usual availability so Aisha can confirm whether a current option fits.",
    button: "Discuss PTE Coaching on WhatsApp",
  },
  pageHeading: "Send a detailed PTE enquiry.",
  pageSubtitle:
    "Share your exact test, score requirement, starting point and deadline so Aisha can confirm whether the current coaching option fits.",
};
