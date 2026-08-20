import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  description:
    "Live online English coaching for IELTS, PTE, TOEFL, English Writing, and Spoken English. Expert-led by Aisha — MA English Literature, College Lecturer. Classes recorded. New batch every 15 days.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${site.domain}`,
    siteName: site.brandName,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: site.brandName }],
  },
  twitter: {
    card: "summary_large_image",
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
      </body>
    </html>
  );
}
