export type EnglishWritingEnquiryField = {
  id: string;
  label: string;
};

/**
 * Canonical English Writing enquiry facts (Step 9), mirroring content/ieltsEnquiry.ts's,
 * content/pteEnquiry.ts's, content/toeflEnquiry.ts's and content/spokenEnglishEnquiry.ts's
 * pattern. The hero, profile, learning-format, pricing and availability sections each keep their
 * own section-specific eyebrow/heading/CTA label in content/englishWriting.ts, but the underlying
 * set of facts requested for the final enquiry is centralised here as
 * `englishWritingEnquiryFields` so it can't quietly drift out of sync between sections.
 * `englishWritingFinalEnquiry` holds the exact shared message text for the final CTA's WhatsApp,
 * form-submission-fallback and email actions specifically (the other sections' messages are each a
 * shorter, context-focused variant, not a duplicate template). Matches the implementing prompt's
 * own required-information list exactly -- five items, not padded to appear more thorough.
 */
export const englishWritingEnquiryFields: EnglishWritingEnquiryField[] = [
  { id: "writing-need", label: "What you need to write" },
  { id: "reader-purpose", label: "Who will read it, and what it should achieve" },
  { id: "current-difficulty", label: "What currently feels difficult" },
  { id: "deadline", label: "Any relevant deadline" },
  { id: "location-availability", label: "Country/timezone and usual days/times" },
];

export const englishWritingFinalEnquiry = {
  whatsappMessage:
    "Hi Aisha! I'm interested in online English writing coaching. I mainly need to write for [study/work/everyday communication]. The type of writing is [details], the reader/purpose is [details], and I currently find [details] difficult. My relevant deadline, if any, is [details]. My country/timezone is [details], and my usual days/times are [details]. Please confirm whether a suitable current option exists and share its format, schedule and fee.",
  emailSubject: "English writing coaching enquiry",
  emailBody: `Hello Aisha,

I would like to ask about online English writing coaching.

Writing context and type:
Reader/purpose:
Current difficulty:
Relevant deadline, if any:
Country/timezone:
Usual days/times:

Please confirm whether a suitable current option exists and share its format, schedule and fee.`,
};

/**
 * English-Writing-specific behaviour for the shared components/DiagnosticForm.tsx and
 * app/free-diagnostic-test/page.tsx when reached via the allowlisted
 * `?programme=english-writing&source=english-writing-page` link from EnglishWritingFinalCTA -- see
 * lib/enquiryQuery.ts for how that query value is resolved safely. Reuses
 * englishWritingFinalEnquiry.whatsappMessage as the fallback offered on submission failure or when
 * the form endpoint isn't configured, rather than a second near-duplicate message.
 *
 * The shared form's three free-text fields (situation, goal/timeline, location) are relabelled
 * here to capture the required English Writing enquiry context (writing situation/difficulty;
 * type of writing, reader/purpose and deadline; country/timezone/availability) without adding a
 * bespoke field set -- extending the existing shared form architecture rather than cloning it, per
 * the implementing prompt's own instruction.
 *
 * `whatHappensNext` exists because the shared `leadCapture.requestPage.whatHappensNext` list's
 * third line ("...she may ask for an exam code, current score or short work sample") is
 * appropriate for the exam-preparation variants but would misleadingly imply a document/work-sample
 * review for English Writing -- see app/free-diagnostic-test/page.tsx's per-variant
 * `WHAT_HAPPENS_NEXT` map and the implementing prompt's Part F.
 */
export const englishWritingFormVariant = {
  programmeName: "English Writing",
  situationLabel: "Writing situation and current difficulty",
  situationPlaceholder:
    "e.g. I need to write workplace emails and reports; sentence structure and organisation currently feel difficult",
  goalLabel: "Type of writing, reader/purpose and deadline, if any",
  goalPlaceholder: "e.g. a report for my manager explaining project delays; needed by Friday",
  locationLabel: "Country, time zone and usual availability",
  locationPlaceholder: "e.g. Lahore, Pakistan (PKT); weekday evenings",
  submissionSubject: "English Writing Coaching Enquiry",
  success: {
    heading: "Your English Writing enquiry has been sent.",
    body: "Aisha will review the writing situation, goal and availability you shared, then respond using the contact details provided. This does not confirm enrolment or reserve a place.",
  },
  unconfiguredFallback: {
    heading: "Send your English Writing details on WhatsApp",
    body: "Include your writing situation, current difficulty, type of writing, deadline, time zone and usual availability so Aisha can confirm whether a current option may fit.",
    button: "Discuss English Writing Coaching on WhatsApp",
  },
  pageHeading: "Send a detailed English Writing enquiry.",
  pageSubtitle:
    "Share your writing situation, current difficulty, type of writing and availability so Aisha can confirm whether a current coaching option may fit.",
  whatHappensNext: [
    "Aisha reviews the writing situation, goal and availability you shared.",
    "She replies using the contact method provided.",
    "If a detail is missing, she may ask one short follow-up question before confirming the current option.",
  ],
};
