import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { appearanceScript } from "@/components/appearance";

const geistSans = Geist({
  variable: "--font-text",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const title = "Will Hawks: frontend engineer, React and Next.js";
const description =
  "Portfolio of Will Hawks, a frontend engineer with 9 years of web work in React, Next.js, Vue and WordPress, open to remote roles.";

// The live domain, set on the host (SITE_URL=https://example.com). Share cards need absolute URLs,
// so the canonical link and og:image are only written once it is known.
const site = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: site ? new URL(site) : undefined,
  alternates: site ? { canonical: "/" } : undefined,
  title,
  description,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    title: "Will Hawks, frontend engineer",
    description:
      "Selected work: the Mississippi Department of Human Services site, Move to Learn TV and Skwahdle.",
    images: site ? ["/share.jpg"] : undefined,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script adds "light" or "dark" to <html> before React hydrates, so React is
    // told to accept that class rather than flag it as a mismatch.
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: appearanceScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink transition-colors font-text w-[350px] md:w-[704px] max-w-full mx-auto">
        {children}
      </body>
    </html>
  );
}
