import { site } from "@/content/site";

/**
 * About Step 8: the one canonical content source for `/about`'s final enquiry-handoff section
 * (`components/about/AboutFinalCTA.tsx`). Migrated out of `content/about.ts`'s old `finalCta`
 * block, which held the previous, weaker three-equal-button version -- this file replaces it
 * entirely, not alongside it. No email address or WhatsApp number is duplicated here; both are
 * built from `site.email`/`site.whatsapp` via the canonical `emailLink()`/`whatsappLink()`
 * helpers in the component itself.
 *
 * This is an enquiry handoff, not an enrolment, payment, reservation, appointment-booking,
 * diagnostic or guaranteed-placement system -- every string below was written to avoid implying
 * otherwise. See docs/about-enquiry-handoff.md for the full hierarchy rationale and safety record.
 */
export const aboutEnquiry = {
  id: "about-final-cta",
  eyebrow: "Next step",
  heading: "Tell Aisha what you are working towards",
  body: "Share your English goal, current situation, time zone and any relevant deadline. Aisha can then point you to the most relevant programme information and confirm the current format, fee and availability.",
  // Deliberately short and calm -- no fixed response time, free call/consultation, assessment,
  // immediate-availability claim, batch-place promise, or pre-review personalised plan.
  reassurance: [
    "Asking a question does not require payment.",
    "Sending an enquiry does not reserve a place.",
    "No course or schedule is confirmed until Aisha replies.",
    "No result is guaranteed.",
  ],
  // Primary action (About Step 8's three-level hierarchy: WhatsApp > form-or-email > compare).
  // The message deliberately never prefills a score the visitor hasn't supplied, identity/visa/
  // payment information, a school/employer/client name, or a claim that the visitor wants to
  // enrol, book, or has already been accepted.
  primaryWhatsapp: {
    label: "Ask Aisha About the Right Programme",
    message:
      "Hi Aisha! I am enquiring about online English support. My goal is [goal or exact test], my current situation is [brief context], my country or time zone is [location], and I hope to begin by [date]. Please confirm the most relevant programme and the current format, fee and availability.",
  },
  // Secondary action, form branch -- shown only when formsAreConfigured() is true. The route
  // stays the existing /free-diagnostic-test technical path (opening the generic, unlocked
  // variant via ?source=about-page, never a programme-locked one), but visible copy never calls
  // it a "diagnostic test".
  configuredForm: {
    label: "Send a Detailed Enquiry",
    href: "/free-diagnostic-test?source=about-page",
  },
  // Secondary action, email fallback -- shown instead of a silently broken form link when
  // Formspree is absent or invalid. Built with lib/contact.ts's emailLink() (safe encoding of
  // spaces/newlines/ampersands/question marks), never a manually concatenated mailto: string.
  emailFallback: {
    label: "Email Aisha",
    subject: `English programme enquiry — ${site.brandName}`,
    body: "Hello Aisha,\n\nI am enquiring about online English support.\n\nGoal or exact test:\nCurrent situation:\nCountry or time zone:\nRelevant deadline:\n\nPlease confirm the most relevant programme and the current format, fee and availability.",
  },
  // Tertiary action -- a quiet text link for visitors still in research mode. Never competes
  // visually with the primary WhatsApp action, and never links to the unverified O/A Level
  // subdomain (see docs/about-fit-route-guidance.md's Step 7 dependency record, unchanged here).
  tertiary: { label: "Compare All English Programmes", href: "/courses" },
} as const;
