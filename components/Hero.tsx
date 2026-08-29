import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/content/site";

const TRUST_POINTS = [
  "Live online classes on Zoom",
  "Recordings available after every class",
  "Regular practice with personal feedback",
];

const HERO_WHATSAPP_MESSAGE =
  "Hi Aisha! I'd like help choosing the right English programme. My goal is:";

function TickIcon() {
  return (
    <svg className="w-5 h-5 text-coral shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white text-ink" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Plain document order (no CSS `order` overrides) so the value proposition and
            CTAs precede the portrait in both the DOM and on screen for phones — the grid
            simply lays the same two blocks side by side once there's room for it. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 lg:gap-14 items-center py-7 sm:py-9 lg:py-12">
          <div className="w-full text-left">
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-medium text-ink-soft mb-4 sm:mb-5">
              {site.credentialsList.map((credential, i) => (
                <li key={credential} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span className="text-line-strong" aria-hidden="true">
                      •
                    </span>
                  )}
                  {credential}
                </li>
              ))}
            </ul>

            <h1
              id="hero-heading"
              className="font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.015em] text-ink mb-4 sm:mb-6"
            >
              Expert English Coaching for Exams, School and Confident Communication.
            </h1>

            <p className="text-base sm:text-[1.0625rem] font-normal leading-relaxed text-ink-soft mb-6 sm:mb-8">
              Prepare for IELTS, PTE, TOEFL and O/A Level English, or improve your spoken,
              written and professional communication through personalised live online teaching.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7 sm:mb-9">
              <Link
                href="/#choose-your-path"
                className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral px-6 py-3
                           text-sm font-medium tracking-[0.02em] text-white text-center whitespace-nowrap
                           transition-colors duration-[250ms] ease-out
                           hover:bg-amber-dark
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                Find My Programme
              </Link>
              <a
                href={whatsappLink(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink px-6 py-3
                           text-sm font-medium tracking-[0.02em] text-ink text-center whitespace-nowrap
                           transition-colors duration-[250ms] ease-out
                           hover:bg-ink hover:text-white
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                WhatsApp Aisha
              </a>
            </div>

            <ul className="flex flex-col gap-2.5 pt-5 border-t border-line">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <TickIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex w-full items-center justify-center">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] w-[85%] -z-10 rounded-full bg-sea-wash"
              aria-hidden="true"
            />
            {/* aisha-prof.jpeg is a real photo with its own natural background (not the
                transparent-cutout PNG this used to be), so it's framed as a proper photo card --
                fixed aspect-ratio box, object-cover so it fills the frame without distorting, and
                rounded-xl + overflow-hidden for a soft, polished edge -- rather than floating
                directly over the circular colour wash via object-contain. Heights match the
                original max-h-[230px]/420px/460px footprint exactly so the rest of the hero layout
                doesn't shift; width is derived from aspect-[3/4], matching the source's own
                1083x1452 (~3:4) ratio, so nothing is stretched or cropped beyond a light trim. */}
            <div className="relative z-10 h-[230px] md:h-[420px] lg:h-[460px] max-w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              {/* About Step 6: alt text previously said "English Literature lecturer", which is
                  not the canonical professional role -- "College Lecturer" is (see
                  content/site.ts's professionalRole). "English Literature" describes the
                  qualification's subject, not the job title; conflating the two here implied an
                  unverified role. Corrected to the canonical role. */}
              <Image
                src="/images/aisha-prof.jpeg"
                alt="Aisha, online English teacher and College Lecturer"
                fill
                priority
                sizes="(max-width: 767px) 170px, (max-width: 1023px) 320px, 350px"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
