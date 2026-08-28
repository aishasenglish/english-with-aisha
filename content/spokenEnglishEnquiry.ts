export type SpokenEnglishEnquiryField = {
  id: string;
  label: string;
};

/**
 * Canonical Spoken English enquiry facts (Step 9), mirroring content/ieltsEnquiry.ts's,
 * content/pteEnquiry.ts's and content/toeflEnquiry.ts's pattern. The hero, speaking-profile,
 * learning-format, pricing and availability sections each keep their own section-specific
 * eyebrow/heading/CTA label in content/spokenEnglish.ts, but the underlying set of facts requested
 * is the same everywhere it matters most -- centralised here as `spokenEnglishEnquiryFields` so it
 * can't quietly drift out of sync between sections. `spokenEnglishFinalEnquiry` holds the exact
 * shared message text for the final CTA's WhatsApp, form-submission-fallback and email actions
 * specifically (the other sections' messages are each a shorter, context-focused variant, not a
 * duplicate template). Kept to six compact bullets per the implementing prompt's own "no more than
 * six" requirement -- covering situation/listener/task/difficulty/experience/timeline as one item,
 * and location/availability/format-preference as another, rather than nine separate lines.
 */
export const spokenEnglishEnquiryFields: SpokenEnglishEnquiryField[] = [
  { id: "situation-listener", label: "Main speaking situation, listener or audience" },
  { id: "communication-task", label: "What you need to communicate or achieve" },
  { id: "current-difficulty", label: "What currently becomes difficult" },
  { id: "current-experience", label: "What you can already manage, in your own words" },
  { id: "timeline", label: "Any important interview, presentation, study, travel or work timeline" },
  { id: "location-format", label: "Country, time zone, usual availability and any format preference" },
];

export const spokenEnglishFinalEnquiry = {
  whatsappMessage:
    "Hello Aisha, I would like to discuss Spoken English coaching. My main speaking situation is [details]. I need to communicate with [details] and need to [details]. What currently becomes difficult is [details]. I can already manage [details]. My important timeline, if any, is [details]. My country and time zone are [details], the days and times that usually suit me are [details], and my preferred group or one-to-one format, if available, is [details]. Please let me know whether a current option may suit this requirement and share the confirmed format, schedule and fee.",
  emailSubject: "Spoken English coaching enquiry",
  emailBody: `Hello Aisha,

I would like to ask about Spoken English coaching.

Main speaking situation:
Listener or audience:
What I need to communicate or achieve:
What currently becomes difficult:
What I can already manage, in my own words:
Important timeline, if any:
Country and time zone:
Usual days and times:
Preferred group or one-to-one format, if available:

Please confirm whether a current option may suit this requirement and share the format, schedule and fee.`,
};

/**
 * Spoken-English-specific behaviour for the shared components/DiagnosticForm.tsx and
 * app/free-diagnostic-test/page.tsx when reached via the allowlisted
 * `?programme=spoken-english&source=spoken-english-page` link from SpokenEnglishFinalCTA -- see
 * lib/enquiryQuery.ts for how that query value is resolved safely. Reuses
 * spokenEnglishFinalEnquiry.whatsappMessage as the fallback offered on submission failure or when
 * the form endpoint isn't configured, rather than a second near-duplicate message.
 *
 * `whatHappensNext` exists because the shared `leadCapture.requestPage.whatHappensNext` list's
 * third line ("...she may ask for an exam code, current score or short work sample") is
 * appropriate for the exam-preparation variants but would misleadingly imply an audio/work-sample
 * review for Spoken English -- see app/free-diagnostic-test/page.tsx's per-variant
 * `WHAT_HAPPENS_NEXT` map and the implementing prompt's Part F.
 */
export const spokenEnglishFormVariant = {
  programmeName: "Spoken English Coaching",
  situationLabel: "Current speaking situation and difficulty",
  situationPlaceholder:
    "e.g. I speak with clients in meetings; I can explain familiar points, but follow-up questions and pronunciation become difficult",
  goalLabel: "Communication goal and important timeline",
  goalPlaceholder: "e.g. handle a job interview and explain my experience clearly by November",
  locationLabel: "Country, time zone and usual availability",
  locationPlaceholder: "e.g. Lahore, Pakistan (PKT); weekday evenings",
  submissionSubject: "Spoken English Coaching Enquiry",
  success: {
    heading: "Your Spoken English enquiry has been sent.",
    body: "Aisha will review the speaking context, goal and availability you shared, then respond using the contact details provided.",
  },
  unconfiguredFallback: {
    heading: "Send your Spoken English details on WhatsApp",
    body: "Include your main speaking situation, current difficulty, communication goal, timeline, time zone and usual availability so Aisha can confirm whether a current option may fit.",
    button: "Discuss Spoken English Coaching on WhatsApp",
  },
  pageHeading: "Send a detailed Spoken English enquiry.",
  pageSubtitle:
    "Share your speaking situation, current difficulty, communication goal and availability so Aisha can confirm whether a current coaching option may fit.",
  whatHappensNext: [
    "Aisha reviews the speaking situation, goal and availability you shared.",
    "She replies using the contact method provided.",
    "If a detail is missing, she may ask one short follow-up question before confirming the current option.",
  ],
};
