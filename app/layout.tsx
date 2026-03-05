
import "./globals.css";



export const metadata = {
  title: "WikaEX – 1B Fixed Supply Blockchain | Transparent Tokenomics",
  description:
    "WikaEX is a fixed 1B supply blockchain asset with transparent emission, predictable tokenomics and long-term scarcity design. Discover the ecosystem today.",
  metadataBase: new URL("https://langding-page-airdrop.vercel.app/"),
   keywords: [ 
    "WikaEX", 
    "WikaEX token",
    "blockchain project", 
    "crypto fixed supply",
    "PoW blockchain", 
    "Aridrop airdrop", 
    "claim Aridrop", 
    "crypto airdrop 2026", 
    "Aridrop token" ],
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "WikaEX – 1B Fixed Supply Blockchain",
    description:
      "Fixed supply blockchain with transparent emission and long-term scarcity.",
    url: "https://langding-page-airdrop.vercel.app/",
    siteName: "WikaEX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WikaEX Blockchain 1B Fixed Supply",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WikaEX – Fixed Supply Blockchain",
    description:
      "1B fixed supply blockchain with transparent tokenomics.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body
      >
        {children}
      </body>
    </html>
  );
}
