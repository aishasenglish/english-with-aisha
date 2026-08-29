const STEPS = [
  {
    number: "01",
    title: "Share your goal and current level",
    description:
      "Use the programme matcher or tell Aisha what you need English for, where you are currently struggling and whether you have a deadline.",
    label: "Start with your real requirement—not a generic course list.",
  },
  {
    number: "02",
    title: "Confirm the programme and format",
    description:
      "Review the most suitable course, group or one-to-one format, available schedule and what the programme will require from you.",
    label: "Know what you are joining before you enrol.",
  },
  {
    number: "03",
    // About Step 3: was "Learn live and practise between lessons" / "Attend live online
    // teaching, revisit class recordings..." -- asserted live delivery and recording access as
    // universal, which isn't verified for every current programme. Reworded to confirmation
    // language, matching the conditional items further down this same page.
    title: "Attend your confirmed sessions and practise between lessons",
    description:
      "Attend teaching through the delivery format confirmed for your programme, and apply the lesson through relevant speaking, writing, syllabus or test-practice tasks. Recording access, where available, is confirmed for your current option.",
    label: "Explanation followed by purposeful practice.",
  },
  {
    number: "04",
    title: "Apply feedback and review your next priority",
    description:
      "Use specific feedback to understand what is improving, what still needs attention and what to practise next.",
    label: "Progress becomes clearer when the next action is specific.",
  },
];

export default function HowItWorks() {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9 sm:gap-8">
      {STEPS.map((step, i) => (
        <li key={step.number} className="relative flex flex-row sm:flex-col gap-4 sm:gap-0">
          {i > 0 && (
            <span
              className="sm:hidden absolute left-6 -top-9 w-px h-9 bg-stone"
              aria-hidden="true"
            />
          )}
          <span className="shrink-0 sm:mb-4 w-12 h-12 rounded-md border border-teal/30 bg-white flex items-center justify-center font-serif text-lg font-medium text-teal">
            {step.number}
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-lg font-medium text-ink mb-1.5">{step.title}</h3>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-2">
              {step.description}
            </p>
            <p className="text-ink-faint text-xs italic leading-relaxed">{step.label}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
