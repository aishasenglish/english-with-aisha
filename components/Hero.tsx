import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(5rem,10vw,8rem)]">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-6">
            {site.credentials}
          </p>
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal leading-[1.15] tracking-[0.02em] text-ink mb-7">
            Speak and write English
            <br />
            like it belongs to you.
          </h1>
          <p className="text-[1.0625rem] font-normal leading-[1.7] tracking-[0.01em] text-ink-soft max-w-[46ch] mb-11">
            Expert live online training for IELTS, PTE, and spoken fluency. Master English
            communication with a Cambridge-certified lecturer and corporate trainer who evaluates
            your progress personally. Every class recorded, every batch capped, every student
            tracked.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-10">
            <a
              href="/free-diagnostic-test"
              className="inline-block rounded-sm border border-sea px-[1.625rem] py-3.5
                         text-[0.8125rem] font-medium tracking-[0.06em] text-sea
                         transition-colors duration-[250ms] ease-out
                         hover:bg-sea hover:text-white
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
            >
              Take the free diagnostic test
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-line-strong px-[1.625rem] py-3.5
                         text-[0.8125rem] font-medium tracking-[0.06em] text-ink
                         transition-colors duration-[250ms] ease-out
                         hover:border-ink hover:bg-ink hover:text-white
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Chat on WhatsApp
            </a>
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
