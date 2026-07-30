import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DevClickToComponent from "@/components/DevClickToComponent";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
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
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-screen flex flex-col">
        <DevClickToComponent />
        <UtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
