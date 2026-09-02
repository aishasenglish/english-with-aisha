export default function AboutTestimonial() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-testimonial-heading">
      <div className="mx-auto max-w-4xl border-l-2 border-teal pl-6 sm:pl-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">A student&apos;s experience</p>
        <h2 id="about-testimonial-heading" className="sr-only">A student&apos;s experience with Aisha</h2>
        <blockquote className="mt-5 text-[clamp(1.45rem,3vw,2.25rem)] font-medium leading-snug tracking-[-0.025em] text-ink">
          “Aisha is a brilliant teacher who delivers a 5-star IELTS coaching experience. Her mastery of the IELTS format is excellent, and she is a remarkably helpful and cooperative mentor who genuinely invests in her students’ success.”
        </blockquote>
        <div className="mt-6 flex gap-1 text-teal" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="m12 2.75 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 16.94l-5.56 2.93 1.06-6.2L3 9.28l6.22-.9L12 2.75Z" />
            </svg>
          ))}
        </div>
        <footer className="mt-5">
          <p className="font-semibold text-ink">Abdul Basit</p>
          <p className="mt-1 text-sm text-ink-soft">IELTS Batch student</p>
        </footer>
      </div>
    </section>
  );
}
