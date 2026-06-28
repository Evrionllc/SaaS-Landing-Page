import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://klok-landing.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klok — Time tracking built for freelance designers",
    template: "%s · Klok",
  },
  description:
    "Track billable hours without breaking your flow, then turn them into invoices in one click. Klok is the time tracker made for freelance designers and small studios.",
  keywords: [
    "time tracking",
    "freelance designers",
    "billable hours",
    "invoicing",
    "time tracker",
  ],
  authors: [{ name: "Portfolio project" }],
  openGraph: {
    title: "Klok — Time tracking built for freelance designers",
    description:
      "Track billable hours without breaking your flow, then turn them into invoices in one click.",
    url: SITE_URL,
    siteName: "Klok",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klok — Time tracking built for freelance designers",
    description:
      "Track billable hours without breaking your flow, then turn them into invoices in one click.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        {/* Mark JS as available so the scroll-reveal styles activate.
            Without JS the content stays fully visible (graceful fallback). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
