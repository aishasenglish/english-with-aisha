export type ToeflEnquiryField = {
  id: string;
  label: string;
};

/**
 * Canonical TOEFL enquiry facts (TOEFL Step 9), mirroring content/ieltsEnquiry.ts's and
 * content/pteEnquiry.ts's pattern. The hero, score-profile contextual link, learning-format CTA,
 * pricing CTA and availability enquiry each keep their own section-specific eyebrow/heading/CTA
 * label in content/toefl.ts, but the underlying set of facts requested is the same everywhere —
 * centralised here as `toeflEnquiryFields` so it can't quietly drift out of sync between sections.
 * `toeflFinalEnquiry` holds the exact shared message text for the final CTA's WhatsApp,
 * form-submission-fallback and email actions specifically (the other sections' messages are each
 * a shorter, context-focused variant, not a duplicate template).
 */
export const toeflEnquiryFields: ToeflEnquiryField[] = [
  { id: "institution-requirement", label: "Institution or programme and exact TOEFL iBT requirement" },
  { id: "scores-scale", label: "Required overall and section scores, including the score scale" },
  { id: "starting-point", label: "Previous TOEFL result or current starting point" },
  { id: "deadline", label: "Planned test date and application deadline" },
  { id: "test-centre-home-edition", label: "Test-centre or Home Edition plan, if known" },
  { id: "location-availability", label: "Country, time zone and usual availability" },
];

export const toeflFinalEnquiry = {
  whatsappMessage:
    "Hi Aisha! I would like to discuss TOEFL iBT coaching. My institution/programme is [name], its required overall and section scores are [details] on the [1–6 or 0–120] scale, my previous TOEFL result or current starting point is [details], my planned test date and application deadline are [dates], my test-centre or Home Edition plan is [if known], my country/time zone is [details], and my usual availability or preferred format is [details]. Please let me know whether a current option may suit this requirement and share the confirmed format, schedule and fee.",
  emailSubject: "TOEFL iBT coaching enquiry",
  emailBody: `Hello Aisha,

I would like to ask about TOEFL iBT coaching.

Institution or programme:
Required overall and section scores:
Required score scale (1–6 or 0–120):
Previous TOEFL result or current starting point:
Planned test date and application deadline:
Test-centre or Home Edition plan, if known:
Country and time zone:
Usual availability or preferred format:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
};

/**
 * TOEFL-specific behaviour for the shared components/DiagnosticForm.tsx and
 * app/free-diagnostic-test/page.tsx when reached via the allowlisted
 * `?programme=toefl&source=toefl-page` link from TOEFLFinalCTA — see lib/enquiryQuery.ts for how
 * that query value is resolved safely. Reuses toeflFinalEnquiry.whatsappMessage as the fallback
 * offered on submission failure or when the form endpoint isn't configured, rather than a second
 * near-duplicate message.
 */
export const toeflFormVariant = {
  programmeName: "TOEFL iBT Preparation",
  situationLabel: "Institution, score scale and previous result",
  situationPlaceholder:
    'e.g. University/programme name; requirement uses 1–6; previous TOEFL result, or "first attempt" if you have not tested yet; test-centre/Home Edition if known.',
  goalLabel: "Required scores and deadline",
  goalPlaceholder: "e.g. required overall and section scores, planned test date and application deadline",
  locationLabel: "Country, time zone and usual availability",
  locationPlaceholder: "e.g. Lahore, Pakistan (PKT); weekday evenings",
  submissionSubject: "TOEFL iBT Coaching Enquiry",
  success: {
    heading: "Your TOEFL enquiry has been sent.",
    body: "Aisha will review the institution requirement, current context and deadline you shared, then respond using the contact details provided.",
  },
  unconfiguredFallback: {
    heading: "Send your TOEFL details on WhatsApp",
    body: "Include your institution, required overall and section scores, scale, previous result or starting point, deadlines, time zone and usual availability so Aisha can confirm whether a current option may fit.",
    button: "Discuss TOEFL iBT Coaching on WhatsApp",
  },
  pageHeading: "Send a detailed TOEFL iBT enquiry.",
  pageSubtitle:
    "Share your institution's score requirement, starting point and deadline so Aisha can confirm whether a current coaching option may fit.",
};
