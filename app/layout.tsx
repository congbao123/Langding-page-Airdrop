import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://landing-page-airdrop.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "WikaEX – 1B Fixed Supply Blockchain | Transparent Tokenomics",
    template: "%s | WikaEX",
  },

  description:
    "WikaEX is a fixed 1B supply blockchain asset with transparent emission, predictable tokenomics, and long-term scarcity design. Claim your $WIKA airdrop today.",

  keywords: [
    "WikaEX",
    "WIKA token",
    "blockchain project",
    "crypto fixed supply",
    "PoW blockchain",
    "crypto airdrop",
    "claim airdrop",
    "crypto airdrop 2026",
    "WIKA airdrop",
    "free crypto tokens",
    "blockchain airdrop 2026",
  ],

  authors: [{ name: "WikaEX Team", url: BASE_URL }],
  creator: "WikaEX",
  publisher: "WikaEX",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "WikaEX – 1B Fixed Supply Blockchain | Claim $WIKA Airdrop",
    description:
      "WikaEX is a fixed 1B supply blockchain asset with transparent emission, predictable tokenomics, and long-term scarcity design. Claim your $WIKA airdrop today.",
    url: BASE_URL,
    siteName: "WikaEX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-Better.png",
        width: 1200,
        height: 630,
        alt: "WikaEX – 1B Fixed Supply Blockchain",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WikaEX – 1B Fixed Supply Blockchain | Claim $WIKA Airdrop",
    description:
      "WikaEX is a fixed 1B supply blockchain asset with transparent emission, predictable tokenomics, and long-term scarcity design. Claim your $WIKA airdrop today.",
    images: ["/og-Better.png"],
    creator: "@wikaex",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}