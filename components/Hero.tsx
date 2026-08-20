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
    <section className="bg-white text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-7 lg:gap-12 items-center py-10 sm:py-12 lg:py-16">
          <div className="w-full text-left order-2 md:order-1">
            <p className="text-[0.7rem] sm:text-xs font-medium uppercase tracking-[0.08em] text-ink-faint mb-4 sm:mb-5 leading-relaxed">
              {site.credentials}
            </p>
            <h1 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.08] tracking-[-0.025em] text-ink mb-5 sm:mb-6">
              Develop the English skills to speak confidently,<br className="hidden lg:block" /> write professionally, and communicate effectively.
            </h1>
            <p className="text-base sm:text-[1.0625rem] font-normal leading-relaxed text-ink-soft mb-7 sm:mb-9">
              Personalised live online training for IELTS, PTE, O/A Levels, spoken and written
              English, and corporate communication. Learn from a university lecturer and
              IDP-trained expert through Cambridge-aligned mentoring, personalised feedback, and
              continuous progress tracking.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-9">
              <a
                href="/free-diagnostic-test"
                className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border border-sea px-5 sm:px-[1.625rem] py-3
                           text-[0.8125rem] font-medium tracking-[0.04em] text-sea text-center
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
                className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border border-line-strong px-5 sm:px-[1.625rem] py-3
                           text-[0.8125rem] font-medium tracking-[0.04em] text-ink text-center
                           transition-colors duration-[250ms] ease-out
                           hover:border-ink hover:bg-ink hover:text-white
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="grid gap-3 pt-6 border-t border-line xl:grid-cols-3 xl:gap-5">
              {FACTS.map((f) => (
                <span key={f} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <TickIcon />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center order-1 md:order-2 min-h-[240px] sm:min-h-[340px] px-4 py-2 sm:px-6 sm:py-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%] -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80" />
            <Image
              src="/images/aisha-cutout-placeholder.png"
              alt="Aisha, online English teacher and English Literature lecturer"
              width={896}
              height={1195}
              priority
              sizes="(max-width: 767px) 82vw, (max-width: 1279px) 45vw, 520px"
              className="relative z-10 w-auto max-w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[500px] object-contain drop-shadow-xl saturate-[.85] contrast-[.92] brightness-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
