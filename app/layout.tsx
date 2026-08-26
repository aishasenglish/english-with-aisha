import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AnalyticsListener from "@/components/analytics/AnalyticsListener";
import DevClickToComponent from "@/components/DevClickToComponent";
import { site } from "@/content/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.brandName} — ${site.tagline}`,
    template: `%s | ${site.brandName}`,
  },
  // IELTS Step 10: "Classes recorded." removed -- recording access is not an owner-confirmed
  // universal fact across every programme (see docs/ielts-offer-verification.md, where it's
  // explicitly still "Needs owner confirmation" for IELTS specifically). Do not reintroduce a
  // live/recorded/group/one-to-one claim here unless it's genuinely true for every programme.
  description:
    `Online English coaching for IELTS, PTE, TOEFL, English Writing and Spoken English, led by Aisha — ${site.qualification} and ${site.professionalRole}.`,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${site.domain}`,
    siteName: site.brandName,
    // Actual file dimensions (960x1280, portrait) -- the previous 1200x630 declaration didn't
    // match the real asset. See app/courses/ielts/page.tsx for a properly composed 1200x630
    // asset built specifically for pages that want a true landscape social card.
    images: [{ url: "/images/og-image.jpg", width: 960, height: 1280, alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}` }],
  },
  twitter: {
    // "summary" rather than "summary_large_image": the shared default asset is portrait, and
    // large-image cards are designed around a landscape crop that would cut off Aisha's face or
    // body on this image. Pages with their own true landscape asset (e.g. the IELTS page) declare
    // "summary_large_image" explicitly in their own metadata instead.
    card: "summary",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-white focus:px-4 focus:py-3 focus:rounded-sm"
        >
          Skip to content
        </a>
        {process.env.NODE_ENV === "development" && <DevClickToComponent />}
        <UtilityBar />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        {/* IELTS Step 12: the one delegated click listener for the whole site — see its own
            comment for why this stays inert (a no-op) until analytics is explicitly approved. */}
        <AnalyticsListener />
      </body>
    </html>
  );
}
