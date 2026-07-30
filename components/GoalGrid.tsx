import FadeUp from "./FadeUp";

const goals = [
  { n: "01", title: "Study abroad", body: "Meet the English requirement for a university offer or a student visa." },
  { n: "02", title: "Work migration", body: "Hit the band or score your immigration stream asks for, first attempt." },
  { n: "03", title: "Job interviews", body: "Answer confidently in English without rehearsing every sentence in your head." },
  { n: "04", title: "Professional writing", body: "Emails, reports, and applications that read as competent, not translated." },
  { n: "05", title: "Academic English", body: "Essays, structure, and the formal register your coursework expects." },
  { n: "06", title: "Everyday confidence", body: "Speak up at work, at the counter, on the phone — without the pause first." },
];

export default function GoalGrid() {
  return (
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-serif text-xs font-bold uppercase tracking-widest text-coral flex items-center gap-3 mb-3">
            Whatever the goal
            <span className="h-0.5 w-9 bg-coral" aria-hidden />
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-10 max-w-2xl">
            Six reasons students come to me.
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {goals.map((g, i) => (
            <FadeUp key={g.n} delay={(i % 3) * 80}>
              <div className="bg-white border border-stone p-6 h-full">
                <span className="font-serif font-extrabold text-2xl text-line-strong">{g.n}</span>
                <h3 className="font-serif text-lg font-bold text-ink mt-3 mb-2">{g.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{g.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
