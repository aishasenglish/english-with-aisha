import Image from "next/image";
import Button from "./Button";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      {/* Animated blobs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-120px",
          left: "-100px",
          width: "460px",
          height: "460px",
          background: "radial-gradient(circle, rgba(156,48,72,0.45), transparent 70%)",
          animation: "floatA 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-160px",
          right: "-80px",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(199,162,78,0.22), transparent 70%)",
          animation: "floatB 13s ease-in-out infinite",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <p className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              {site.credentials}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Speak and write English{" "}
              <span className="text-gold">with confidence</span> — guided by a
              Master&apos;s scholar.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Live online coaching for IELTS, PTE, TOEFL, English Writing, and
              Spoken English. Every class is recorded so you never fall behind —
              backed by regular mock exams and personal feedback from Aisha.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button href="/free-diagnostic-test" variant="coral" size="lg" className="w-full sm:w-auto justify-center">
                Take the Free Diagnostic Test
              </Button>
              <Button
                href={whatsappLink()}
                variant="outline"
                size="lg"
                external
                className="w-full sm:w-auto justify-center border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right: photo in white card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/aisha-hero.jpg"
                  alt="Aisha — English Coach, MA English Literature"
                  width={480}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-ink border border-white/20 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-white font-semibold text-sm">MA English Literature</p>
                <p className="text-white/60 text-xs">College Lecturer · {site.city}</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-coral rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-ink font-bold text-sm">New batch</p>
                <p className="text-ink/70 text-xs">every 15 days</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
