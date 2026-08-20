import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hoodsupcoin.vercel.app";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const description = "The onchain signal of the Midnight Guild. Hood up, lock in, and follow $HOODSUP toward its STONKBONKER launch.";

  return {
    metadataBase: base,
    title: "$HOODSUP — Hoods Up. Bags Out.",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      title: "$HOODSUP — Hoods Up. Bags Out.",
      description,
      images: [{ url: new URL("/og.png", base).toString(), width: 1733, height: 908, alt: "$HOODSUP — Hoods Up. Bags Out." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "$HOODSUP — Hoods Up. Bags Out.",
      description,
      images: [new URL("/og.png", base).toString()],
      creator: "@hoodsupcoin",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
