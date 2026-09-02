import { IELTS_RECOMMENDATION_MESSAGE } from "@/content/homeCtas";

export const homeLearningFormats = {
  eyebrow: "How you learn",
  heading: "Learn together. Or focus entirely on you.",
  body: "Choose the structure of a small group or the individual attention of private coaching.",
  availabilityNote:
    "Format availability varies by programme. Aisha will confirm which current option is available for your chosen programme before you decide.",
  formats: [
    {
      id: "small-group",
      title: "Small-Group Classes",
      description:
        "Learn alongside others through scheduled live lessons, shared practice and guided discussion.",
      benefits: [
        "A consistent class schedule",
        "Opportunities to practise with other learners",
        "Feedback to guide your progress",
      ],
      ctaLabel: "Check Group Availability",
      whatsappMessage:
        "Hi Aisha! I'm interested in small-group classes. My chosen programme, goal, deadline and availability are: [details]. Please confirm whether a group option is currently available.",
    },
    {
      id: "one-to-one",
      title: "One-to-One Coaching",
      description:
        "Work directly with Aisha on your priorities, at a pace shaped around your learning needs.",
      benefits: [
        "Lessons focused on your weak areas",
        "Individual speaking and writing practice",
        "Scheduling agreed directly with Aisha",
      ],
      ctaLabel: "Ask About Private Coaching",
      whatsappMessage:
        "Hi Aisha! I'm interested in one-to-one coaching. My chosen programme, goal, deadline and availability are: [details]. Please confirm whether a private-coaching option is currently available.",
    },
  ],
  recommendation: {
    heading: "Not sure which format suits you?",
    body: "Tell Aisha your goal, deadline and availability.",
    ctaLabel: "Get My Free Recommendation",
    whatsappMessage: IELTS_RECOMMENDATION_MESSAGE,
  },
} as const;
