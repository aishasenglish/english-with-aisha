import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    title: "Take the free diagnostic",
    description:
      "A quick assessment so we know exactly where you stand and which course suits your goal.",
  },
  {
    number: "02",
    title: "Join a live batch",
    description:
      "New batches start every 15 days. Pick the one that suits your schedule.",
  },
  {
    number: "03",
    title: "Learn live, rewatch anytime",
    description:
      "Attend on Zoom; every class is recorded for you to rewatch whenever you like.",
  },
  {
    number: "04",
    title: "Practise & improve",
    description:
      "Regular tests, full mock exams, and personal feedback until you're ready.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mobile-card-rail flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6" aria-label="Four-step learning process">
      {steps.map((step, i) => (
        <FadeUp key={step.number} delay={i * 100} className="w-[82vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none">
          <div className="relative bg-surface-tint sm:bg-transparent border border-line sm:border-0 p-5 sm:p-0 h-full">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-stone z-0 -translate-x-6" />
            )}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <span className="font-serif text-2xl font-medium text-teal">{step.number}</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
