import Button from "@/components/Button";
import { whatsappLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="bg-white text-ink py-24 sm:py-32 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-medium mb-3">
          That page has moved, or never existed.
        </h1>
        <p className="text-ink-soft text-base sm:text-lg mb-10">
          Here&apos;s where most people are heading.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3">
          <Button href="/courses" variant="coral" size="lg" className="w-full sm:w-auto">
            Courses
          </Button>
          <Button href="/free-diagnostic-test" variant="outline" size="lg" className="w-full sm:w-auto">
            Free diagnostic
          </Button>
          <Button href="/batches" variant="outline" size="lg" className="w-full sm:w-auto">
            Upcoming batches
          </Button>
          <Button href={whatsappLink()} external variant="ghost" size="lg" className="w-full sm:w-auto">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
