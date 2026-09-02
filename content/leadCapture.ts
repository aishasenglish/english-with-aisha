/**
 * Copy and option labels for the lead-capture journey: the homepage
 * LeadCaptureSection, the /free-diagnostic-test request page, and the
 * fail-safe WhatsApp fallback shown by DiagnosticForm/ContactForm when
 * Formspree isn't configured. See lib/forms.ts for the configuration check
 * and docs referenced from README.md for how to set up Formspree.
 */
export const leadCapture = {
  homepage: {
    eyebrow: "Free starting point",
    heading: "Not sure which programme or level fits?",
    body: "Share the learner's goal, current situation and deadline. Aisha will use those details to recommend the most relevant programme or suggest a better next step.",
    steps: [
      {
        title: "Share the goal",
        body: "Tell Aisha what the learner is preparing for and when support is needed.",
      },
      {
        title: "Add the current context",
        body: "Include the school level, exam, current score or main communication challenge.",
      },
      {
        title: "Receive a suitable next step",
        body: "Aisha recommends the most relevant programme, format or assessment route.",
      },
    ],
    primaryCta: "Request a Free Course Recommendation",
    primaryHref: "/contact",
    secondaryCta: "Ask Aisha on WhatsApp",
    whatsappMessage:
      "Hi Aisha! I would like help choosing an English programme. The learner is preparing for [goal/exam], their current level or situation is [details], and they hope to begin by [date].",
    reassurance: "No payment is required to ask. You can decide after you receive the recommendation.",
  },

  requestPage: {
    metaTitle: "Free English Course Recommendation",
    description:
      "Share the learner's English goal, current situation and preferred timeline to request a suitable online programme recommendation from Aisha.",
    heading: "Request a free course recommendation.",
    subtitle:
      "Share the learner's goal, current situation and preferred timeline so Aisha can understand the enquiry and respond with the most relevant next step.",
    whatHappensNext: [
      "Aisha reviews the submitted context.",
      "She replies using the contact method provided.",
      "If more evidence is needed, she may ask for an exam code, current score or short work sample.",
    ],
  },

  enquiringForOptions: ["Myself", "My child", "A student I support", "A team or organisation"],
  programmeOtherOptions: ["Not sure yet", "Another English goal"],

  privacyNote:
    "Aisha will use these details only to respond to this enquiry. They will not be added to a marketing list.",

  success: {
    heading: "Your request has been sent.",
    body: "Thank you. Aisha will use the contact details you provided to respond to your enquiry.",
    whatsappMessage: "Hi Aisha! I just requested a free course recommendation online. Following up here:",
  },

  error: {
    body: "Your request could not be sent. Your details are still in the form. Please try again or send the same information on WhatsApp.",
  },

  /** Shown instead of the recommendation form when Formspree isn't configured. */
  recommendationFallback: {
    heading: "Send your details on WhatsApp",
    body: "Include the learner's goal, current level or exam, country and preferred starting time so Aisha can recommend the most relevant next step.",
    button: "Request a Recommendation on WhatsApp",
    whatsappMessage:
      "Hi Aisha! I would like a course recommendation. The learner is preparing for [goal/exam], their current level or situation is [details], and their country or time zone is [location].",
  },

  /** Shown instead of the general contact form when Formspree isn't configured. */
  contactFallback: {
    heading: "Send your message on WhatsApp",
    body: "Share what you'd like to ask or discuss, and Aisha will reply directly.",
    button: "Message Aisha on WhatsApp",
  },
} as const;
