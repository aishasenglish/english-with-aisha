import Link from "next/link";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const programmeLinks = [
  { label: "IELTS Preparation", href: "/courses/ielts" },
  { label: "O/A Level & IGCSE English", href: "/courses/o-a-level-english" },
  { label: "PTE Academic", href: "/courses/pte" },
  { label: "TOEFL iBT", href: "/courses/toefl" },
  { label: "Spoken English", href: "/courses/spoken-english" },
  { label: "English Writing", href: "/courses/english-writing" },
] as const;

const exploreLinks = [
  { label: "All Programmes", href: "/courses" },
  { label: "About Aisha", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

const linkClass = "inline-flex min-h-11 items-center text-sm text-ink-soft transition-colors hover:text-sea-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-tint text-ink">
      <div className="mx-auto max-w-[1200px] px-4 pb-[max(5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-12 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8">
        <div className="grid gap-10 border-b border-line pb-10 md:grid-cols-3 md:gap-12">
          <nav aria-labelledby="footer-programmes-heading">
            <p id="footer-programmes-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Programmes</p>
            <ul className="space-y-1">
              {programmeLinks.map((item) => <li key={item.href}><Link href={item.href} className={linkClass}>{item.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-explore-heading">
            <p id="footer-explore-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Explore</p>
            <ul className="space-y-1">
              {exploreLinks.map((item) => <li key={item.href}><Link href={item.href} className={linkClass}>{item.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-start-heading">
            <p id="footer-start-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Start here</p>
            <ul className="space-y-1">
              <li><a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-semibold text-teal`}>Get My Free Recommendation</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp: {site.whatsapp.display}</a></li>
              <li><a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>{site.email}</a></li>
              <li className="flex min-h-11 items-center text-sm text-ink-soft">{site.city}</li>
              <li className="flex min-h-11 items-center text-sm text-ink-soft">PKT / GMT+5</li>
            </ul>
          </nav>
        </div>
        <p className="pt-6 text-xs text-ink-faint">© {new Date().getFullYear()} {site.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
