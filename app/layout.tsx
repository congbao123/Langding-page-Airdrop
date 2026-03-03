
import "./globals.css";



export const metadata = {
  title: "WikaEX – Controlled Fixed-Supply Blockchain",
  description:
    "WikaEX is a native blockchain asset with fixed 1B supply, transparent emission and predictable token economics.",
  keywords: [
    "WikaEX",
    "WikaEX token",
    "blockchain project",
    "crypto fixed supply",
    "PoW blockchain",
    "Aridrop airdrop",
    "claim Aridrop",
    "crypto airdrop 2026",
    "Aridrop token"
  ],
  openGraph: {
    title: "WikaEX Blockchain",
    description: "Fixed 1B supply crypto asset with transparent economics.",
    url: "https://yourdomain.com",
    siteName: "WikaEX",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
      <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      <body
      >
        {children}
      </body>
    </html>
  );
}
