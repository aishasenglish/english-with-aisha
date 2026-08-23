// Owner-confirmed canonical facts — the only public qualification and role. Every credential
// string elsewhere in the site is built from these two, not repeated as a separate literal.
// Do not append "Government" to professionalRole unless the owner separately confirms that
// distinction should be public everywhere.
const qualification = "MPhil in English Literature";
const professionalRole = "College Lecturer";

export const site = {
  brandName: "Aisha's English",
  domain: "aishasenglish.com",
  tagline: "Master English. Open the world.",
  founder: "Aisha",
  qualification,
  professionalRole,
  credentials: `${qualification} • ${professionalRole} • IDP-Certified IELTS Trainer • Corporate Trainer`,
  /** Same credentials as `credentials`, split for layouts that render them as compact wrapping items. */
  credentialsList: [qualification, professionalRole, "IDP-Certified IELTS Trainer", "Corporate Trainer"],
  city: "Lahore, Pakistan",
  timezone: "PKT (GMT+5)",
  /** Canonical business timezone for batch-date comparison/formatting — see lib/batches.ts. */
  ianaTimezone: "Asia/Karachi",
  whatsapp: {
    display: "0311-2233671",
    intl: "923112233671",
    defaultMessage:
      "Hi Aisha! I'm interested in your English coaching. Could you share the batch and fee details?",
  },
  // Owner-confirmed canonical public address (Step 12) — build every rendered email link
  // and mailto: from this value rather than repeating the address in components.
  email: "aishasenglish@gmail.com",
  showPrices: true,
  currency: "PKR",
  /**
   * Read from NEXT_PUBLIC_FORMSPREE_ENDPOINT (see .env.example) rather than a literal
   * placeholder — see lib/forms.ts for the validation every form checks before it will
   * render. This must stay a direct `process.env.NEXT_PUBLIC_...` reference (not routed
   * through a variable) so Next.js can inline it into the client bundle at build time.
   */
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "",
  // Leave empty until a real, owner-supplied profile URL exists — never a "#" placeholder.
  // See lib/social.ts for the validation every rendered icon is checked against.
  socials: {
    youtube: "",
    instagram: "",
    tiktok: "",
    facebook: "",
    linkedin: "",
  },
} as const;
