import type { Metadata } from "next";
import { IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";

const display = Spectral({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "A football data experiment",
  description: "Weekly picks & research notes — free newsletter.",
  openGraph: {
    title: "A football data experiment",
    description: "Weekly picks & research notes — free newsletter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div className="grid" />
        <div className="grain" />
        <div className="wrap">{children}</div>
        <style>{`
          h1,h2,h3{
            font-family: var(--font-display), ui-serif, Georgia, serif;
            letter-spacing: -0.01em;
          }
        `}</style>
      </body>
    </html>
  );
}
