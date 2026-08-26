export type IeltsEnquiryField = {
  id: string;
  label: string;
};

/**
 * Canonical IELTS enquiry facts (IELTS Step 9). The hero, score-profile contextual link,
 * learning-format CTA, pricing CTA, availability enquiry and final CTA each keep their own
 * section-specific eyebrow/heading/CTA label in content/ielts.ts, but the underlying set of facts
 * requested is the same everywhere — centralised here as `ieltsEnquiryFields` so it can't quietly
 * drift out of sync between sections. `ieltsFinalEnquiry` holds the exact shared message text for
 * the final CTA's WhatsApp, form-submission-fallback and email actions specifically (the other
 * sections' messages are each a shorter, context-focused variant, not a duplicate template).
 */
export const ieltsEnquiryFields: IeltsEnquiryField[] = [
  { id: "test-version", label: "Academic or General Training" },
  { id: "scores", label: "Required overall and component scores" },
  { id: "starting-point", label: "Previous section scores or current starting point" },
  { id: "deadline", label: "Test or application deadline" },
  { id: "location-availability", label: "Country, time zone and usual availability" },
];

export const ieltsFinalEnquiry = {
  whatsappMessage:
    "Hi Aisha! I would like to discuss IELTS coaching. I need [Academic or General Training], my required overall and component scores are [scores], my previous section scores or current starting point are [details], my test or application deadline is [date], my country/time zone is [details], and my usual availability or preferred format is [details]. Please let me know whether a current option may suit this requirement and share the confirmed format, schedule and fee.",
  emailSubject: "IELTS coaching enquiry",
  emailBody: `Hello Aisha,

I would like to ask about IELTS coaching.

Test version:
Required overall and component scores:
Previous section scores or current starting point:
Test or application deadline:
Country and time zone:
Usual availability or preferred format:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
};

/**
 * IELTS-specific behaviour for the shared components/DiagnosticForm.tsx and
 * app/free-diagnostic-test/page.tsx when reached via the allowlisted
 * `?programme=ielts&source=ielts-page` link from IELTSFinalCTA — see lib/enquiryQuery.ts for how
 * that query value is resolved safely. Reuses ieltsFinalEnquiry.whatsappMessage as the fallback
 * offered on submission failure or when the form endpoint isn't configured, rather than a second
 * near-duplicate message.
 */
export const ieltsFormVariant = {
  programmeName: "IELTS Preparation",
  situationLabel: "Test version and previous scores",
  situationPlaceholder:
    "e.g. Academic IELTS; previous score Overall 6.0 (L6.5 R6.0 W5.5 S6.0), or \"first attempt\" if you haven't tested yet.",
  goalLabel: "Required score and deadline",
  goalPlaceholder: "e.g. Overall 7.0 with no band below 6.5, needed by 15 November 2026",
  locationLabel: "Country, time zone and usual availability",
  locationPlaceholder: "e.g. Lahore, Pakistan (PKT); weekday evenings",
  submissionSubject: "IELTS Coaching Enquiry",
  success: {
    heading: "Your IELTS enquiry has been sent.",
    body: "Aisha will review the score requirement, current context and deadline you shared, then respond using the contact details provided.",
  },
  unconfiguredFallback: {
    heading: "Send your IELTS details on WhatsApp",
    body: "Include your test version, required scores, deadline, time zone and usual availability so Aisha can confirm whether a current option fits.",
    button: "Discuss IELTS Coaching on WhatsApp",
  },
  pageHeading: "Send a detailed IELTS enquiry.",
  pageSubtitle:
    "Share your score requirement, current starting point and deadline so Aisha can confirm whether the current coaching option fits.",
};
