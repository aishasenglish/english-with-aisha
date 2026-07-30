import Image from "next/image";
import Button from "./Button";
import { site } from "@/content/site";

const FACTS = [
  `New batch every ${site.batchCadenceDays} days`,
  "100% live on Zoom, all classes recorded",
  "Weekly tests and full mock exams",
];

function TickIcon() {
  return (
    <svg className="w-5 h-5 text-coral shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white text-ink overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/aisha-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_22%] opacity-25"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.92) 38%, rgba(255,255,255,.55) 72%, rgba(255,255,255,.25) 100%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-32 sm:pb-40">
        <div className="max-w-2xl">
          <p className="font-serif text-xs font-bold uppercase tracking-widest text-ink-faint flex items-center gap-3 mb-5">
            {site.credentials}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
            Speak and write English
            <br />
            like it belongs to you.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mb-9 max-w-lg">
            Expert live online training for IELTS, PTE, and spoken fluency. Master English
            communication with a Cambridge-certified lecturer and corporate trainer who evaluates
            your progress personally. Every class recorded, every batch capped, every student
            tracked.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button href="/free-diagnostic-test" variant="coral" size="lg">
              Take the free diagnostic
            </Button>
            <Button
              href="#courses"
              variant="outline"
              size="lg"
              className="border-ink text-ink hover:bg-ink hover:text-white"
            >
              Browse courses
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-9 gap-y-3 pt-7 border-t border-line">
            {FACTS.map((f) => (
              <span key={f} className="flex items-center gap-2.5 text-sm text-ink-soft">
                <TickIcon />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
