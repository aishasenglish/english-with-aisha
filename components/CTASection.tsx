import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
};

export default function CTASection({
  title = "Ready to take English seriously?",
  subtitle = "Start with a free diagnostic test, or message me directly on WhatsApp — I'll help you choose the right course.",
  whatsappMessage,
}: Props) {
  return (
    <section className="bg-surface-tint py-20 px-4 relative overflow-hidden">
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-80px",
          left: "-60px",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(42,127,143,0.16), transparent 70%)",
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
          background: "radial-gradient(circle, rgba(42,127,143,0.1), transparent 70%)",
          animation: "floatB 11s ease-in-out infinite",
        }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-4">
          {title}
        </h2>
        <p className="text-ink-soft text-lg mb-8">{subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/free-diagnostic-test" variant="coral" size="lg">
            Take the Free Diagnostic Test
          </Button>
          <Button
            href={whatsappLink(whatsappMessage)}
            variant="outline"
            size="lg"
            external
            className="border-ink text-ink hover:bg-ink hover:text-white"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
