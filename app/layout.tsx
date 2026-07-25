import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apexdot — Legal search, New York & San Francisco",
  description:
    "A boutique legal search firm placing partners, counsel and senior associates at the firms and companies that set the market.",
  openGraph: {
    title: "Apexdot — Legal search, New York & San Francisco",
    description:
      "A boutique legal search firm placing partners, counsel and senior associates at the firms and companies that set the market.",
    url: "https://apexdot.io",
    siteName: "Apexdot",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
