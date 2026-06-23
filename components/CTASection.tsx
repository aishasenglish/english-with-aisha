import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function CTASection({
  title = "Ready to take English seriously?",
  subtitle = "Start with a free diagnostic test, or message me directly on WhatsApp — I'll help you choose the right course.",
}: Props) {
  return (
    <section className="bg-ink py-20 px-4 relative overflow-hidden">
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-80px",
          left: "-60px",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(156,48,72,0.35), transparent 70%)",
          animation: "floatA 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-60px",
          right: "-40px",
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(199,162,78,0.18), transparent 70%)",
          animation: "floatB 11s ease-in-out infinite",
        }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/70 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/free-diagnostic-test" variant="coral" size="lg">
            Take the Free Diagnostic Test
          </Button>
          <Button
            href={whatsappLink()}
            variant="outline"
            size="lg"
            external
            className="border-white/40 text-white hover:bg-white/10 hover:border-white"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
