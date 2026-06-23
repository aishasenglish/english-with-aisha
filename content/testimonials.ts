export type Testimonial = {
  name: string;
  result: string;
  course: string;
  quote: string;
  image: string; // filename in /public/images/testimonials/
};

// Replace these placeholders with real testimonials, screenshots, and student photos.
export const testimonials: Testimonial[] = [
  {
    name: "Sara Ahmed",
    result: "IELTS Band 7.5",
    course: "IELTS Preparation",
    quote:
      "I had tried twice before and was stuck at Band 6. Aisha's structured approach to writing tasks made all the difference. I finally got 7.5.",
    image: "testimonial-sara.jpg",
  },
  {
    name: "Usman Tariq",
    result: "PTE Score 79",
    course: "PTE Academic",
    quote:
      "The templates for Speaking and Writing tasks saved so much time in the exam. I scored 79 and got my Australian visa approved.",
    image: "testimonial-usman.jpg",
  },
  {
    name: "Hira Malik",
    result: "IELTS Band 7.0",
    course: "IELTS Preparation",
    quote:
      "Aisha's feedback on my Speaking recordings was incredibly specific. I knew exactly what to fix, and it showed in my final score.",
    image: "testimonial-hira.jpg",
  },
  {
    name: "Bilal Khan",
    result: "TOEFL 104",
    course: "TOEFL iBT",
    quote:
      "The note-taking strategies for Listening changed everything. I used to panic; now I stay calm and get it right.",
    image: "testimonial-bilal.jpg",
  },
  {
    name: "Zara Siddiqui",
    result: "Confident speaker",
    course: "Spoken English & Fluency",
    quote:
      "I understood English perfectly but froze every time I had to speak. After 6 weeks with Aisha, I gave a presentation at work — in English, without notes.",
    image: "testimonial-zara.jpg",
  },
  {
    name: "Ali Raza",
    result: "IELTS Band 8.0",
    course: "IELTS Preparation",
    quote:
      "Mock exams every week meant exam day felt like just another practice. Ended up with Band 8 — more than I hoped for.",
    image: "testimonial-ali.jpg",
  },
];
