import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
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
  weight: ["300", "400", "500", "600"],
});

const homeTitle = "Online IELTS Coaching | Aisha’s English";
const homeDescription =
  "Live online IELTS coaching for Academic and General Training candidates, with focused practice, personal feedback and support across all four skills.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: homeTitle,
    template: `%s | ${site.brandName}`,
  },
  description: homeDescription,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${site.domain}`,
    siteName: site.brandName,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 960,
        height: 1280,
        alt: `Portrait of ${site.founder}, the teacher behind ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: homeDescription,
    images: ["/images/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {process.env.NODE_ENV === "development" && <DevClickToComponent />}
        <Header />
        <main id="main-content" className="flex-1 pt-[70px] xl:pt-[92px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <AnalyticsListener />
      </body>
    </html>
  );
}
