import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const TRUST_POINTS = [
  "Live online lessons",
  "Personal feedback",
  "All four IELTS skills",
];

const HERO_WHATSAPP_MESSAGE =
  "Hi Aisha! I'd like a free personalised IELTS recommendation. My current level, target band and test date are:";

function TickIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.25}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white text-ink" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-9 py-9 sm:py-11 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-12">
          <div className="w-full max-w-2xl text-left">
            <h1
              id="hero-heading"
              className="mb-5 text-[2.55rem] font-semibold leading-[1.03] tracking-[-0.035em] text-ink sm:mb-6 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              <span className="block">Your IELTS goal.</span>
              <span className="block text-teal">A clear plan to get there.</span>
            </h1>

            <p className="mb-6 max-w-xl text-base font-normal leading-relaxed text-ink-soft sm:mb-7 sm:text-lg">
              Live online coaching with Aisha. Focused practice, personal feedback, and support
              across all four skills.
            </p>

            <div className="mb-2.5 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 whitespace-nowrap rounded-md bg-teal px-6 py-3 text-center text-sm font-medium tracking-[0.01em] text-white transition-colors duration-[250ms] ease-out hover:bg-sea-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:w-auto"
              >
                Get My Free Recommendation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </a>
              <Link
                href="/#courses"
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-md border-2 border-teal px-6 py-3 text-center text-sm font-medium tracking-[0.01em] text-teal transition-colors duration-[250ms] ease-out hover:bg-sea-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:w-auto"
              >
                View Programmes
              </Link>
            </div>

            <p className="mb-6 text-xs text-ink-faint sm:mb-7">No payment required to ask.</p>

            <div className="mb-4 h-px w-16 bg-line-strong" aria-hidden="true" />
            <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink-soft">
                  <TickIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex h-[390px] w-full items-end justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sea-wash to-surface-tint sm:h-[460px] md:h-[500px] lg:h-[530px]">
            <div className="relative h-[94%] w-[88%] max-w-[430px]">
              <Image
                src="/images/aisha-home-hero.png"
                alt="Aisha, online English teacher"
                fill
                preload
                sizes="(max-width: 767px) 88vw, (max-width: 1023px) 42vw, 430px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
