import { Montserrat } from "next/font/google";
import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/content/site";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

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
        <div className="grid grid-cols-12 gap-8 items-center py-10 md:py-16">
          <div className="col-span-12 lg:col-span-8 w-full text-left">
            <p className="text-xs font-medium tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-6">
              {site.credentials}
            </p>
            <h1
              className={`${montserrat.className} w-full max-w-none pr-0 text-2xl lg:text-3xl font-medium leading-tight tracking-wide text-ink mb-7`}
            >
              Develop the English skills to speak confidently,<br className="hidden lg:block" /> write professionally, and communicate effectively.
            </h1>
            <p
              className={`${montserrat.className} text-[1.0625rem] font-normal leading-relaxed tracking-[0.01em] text-gray-600 mb-11`}
            >
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

          <div className="col-span-12 lg:col-span-4 relative flex h-full w-full items-end justify-center min-h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70" />
            <img
              src="/images/aisha-placeholder.png"
              alt=""
              className="relative z-10 w-full max-w-lg object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
