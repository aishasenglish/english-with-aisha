import FadeUp from "./FadeUp";

const formats = [
  {
    title: "Live online batch",
    body: "Small groups on Zoom, at a fixed weekly time. New batch every 15 days.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "One-to-one coaching",
    body: "Private sessions built around your schedule, for focused, individual attention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Every class recorded",
    body: "Miss a session or want to revisit it? Every class is recorded and shared with the batch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2.867a1 1 0 00-.447-.832L15 14" />
      </svg>
    ),
  },
  {
    title: "Feedback & mock exams",
    body: "Weekly tests and full mock exams, plus personal feedback on your writing and speaking.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Formats() {
  return (
    <section className="py-12 sm:py-14 px-4 bg-ivory" id="formats">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            How you learn
            <span className="h-0.5 w-9 bg-coral" aria-hidden />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-6 max-w-2xl">
            Learn from anywhere.
          </h2>
        </FadeUp>
        <p className="sm:hidden text-xs text-ink-faint mb-3">Swipe to see every learning option</p>
        <div className="mobile-card-rail flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5" aria-label="Learning formats">
          {formats.map((f, i) => (
            <FadeUp key={f.title} delay={i * 80} className="w-[82vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <div className="relative bg-white border border-stone p-5 h-full flex flex-col gap-2 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 group">
                <span className="absolute top-0 left-0 right-0 h-1 bg-coral scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-amber-tint text-amber-dark">
                  {f.icon}
                </div>
                <h3 className="font-serif text-base font-medium text-ink">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
