import Link from "next/link";
import { ieltsPage } from "@/content/ielts";

export default function IELTSFit() {
  const { fit } = ieltsPage;

  return (
    <section id={fit.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="ielts-fit-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {fit.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="ielts-fit-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {fit.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{fit.body}</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {fit.items.map((item) => (
            <li key={item.title} className="bg-white border border-stone rounded-md p-5">
              <p className="font-serif text-base font-medium text-ink mb-2">{item.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="bg-white border border-stone rounded-md p-5 sm:p-6">
          <p className="text-sm text-ink-soft leading-relaxed mb-3">{fit.alternativeNote}</p>
          <Link
            href={fit.compareLink.href}
            className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-ink underline underline-offset-2"
          >
            {fit.compareLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
