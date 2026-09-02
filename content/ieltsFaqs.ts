export type IeltsFaq = {
  id: string;
  question: string;
  answer: string;
};

export const ieltsFaqs: IeltsFaq[] = [
  {
    id: "academic-general-training",
    question: "Do you teach Academic and General Training IELTS?",
    answer: "Yes. Preparation can be matched to Academic or General Training. Listening and Speaking are shared across both versions, while Reading and Writing preparation will match the version you are taking.",
  },
  {
    id: "preparation-time",
    question: "How long will I need to prepare?",
    answer: "It depends on your current level, target scores, deadline and available study time. Share those details so Aisha can discuss a realistic preparation plan with you.",
  },
  {
    id: "feedback",
    question: "How does Writing and Speaking feedback work?",
    answer: "Feedback identifies the strongest parts of your response, the weaknesses affecting it most and a clear priority to apply in your next attempt. The amount and delivery method are confirmed with the available coaching option.",
  },
  {
    id: "formats-schedules",
    question: "What coaching formats and schedules are available?",
    answer: "IELTS coaching is online. Current group or one-to-one options, schedule, duration, feedback arrangements and fee are confirmed before you enrol.",
  },
  {
    id: "score-guarantee",
    question: "Can you guarantee a particular IELTS band score?",
    answer: "No teacher can guarantee an official IELTS result. Your progress depends on your starting point, preparation time, participation and how consistently you apply feedback. Aisha provides structured teaching, focused practice and honest guidance.",
  },
];
