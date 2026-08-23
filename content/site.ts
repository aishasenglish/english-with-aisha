export const site = {
  brandName: "Aisha's English",
  domain: "aishasenglish.com",
  tagline: "Master English. Open the world.",
  founder: "Aisha",
  credentials: "MPhil in English Literature • IDP-Certified IELTS Trainer • Corporate Trainer",
  /** Same credentials as `credentials`, split for layouts that render them as compact wrapping items. */
  credentialsList: ["MPhil in English Literature", "IDP-Certified IELTS Trainer", "Corporate Trainer"],
  city: "Lahore, Pakistan",
  timezone: "PKT (GMT+5)",
  whatsapp: {
    display: "0311-2233671",
    intl: "923112233671",
    defaultMessage:
      "Hi Aisha! I'm interested in your English coaching. Could you share the batch and fee details?",
  },
  email: "hello@englishwithaisha.com",
  showPrices: true,
  currency: "PKR",
  batchCadenceDays: 15,
  formspreeEndpoint: "https://formspree.io/f/PLACEHOLDER",
  socials: {
    youtube: "#",
    instagram: "#",
    tiktok: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;
