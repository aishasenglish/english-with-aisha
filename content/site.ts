export const site = {
  brandName: "Aishas English",
  domain: "aishasenglish.com",
  tagline: "Master English. Open the world.",
  founder: "Aisha",
  credentials: "MPhil in English Literature • Cambridge Certified • Corporate Trainer",
  city: "Lahore, Pakistan",
  timezone: "PKT (GMT+5)",
  whatsapp: {
    display: "0311-2233671",
    intl: "923112233671",
    defaultMessage:
      "Hi Aisha! I'm interested in your English coaching. Could you share the batch and fee details?",
  },
  // TODO(aisha): create this mailbox on the aishasenglish.com domain.
  email: "hello@aishasenglish.com",
  showPrices: true,
  currency: "PKR",
  batchCadenceDays: 15,
  // TODO(aisha): create a Formspree form and set NEXT_PUBLIC_FORMSPREE_ENDPOINT
  // (see .env.example) — every form on the site silently fails without it.
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
  // Add real profile URLs here as they go live; omit a platform entirely
  // rather than leaving a "#" placeholder — Footer/SocialBar already skip
  // any platform not present in this object.
  socials: {},
} as const;
