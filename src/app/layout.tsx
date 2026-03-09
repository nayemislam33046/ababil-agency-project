import type { Metadata } from "next";
import { Anton, Outfit } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ababil",
    default: "Ababil | We Build High Performance Web & Mobile Apps",
  },
  description: "Ababil is a premier digital agency building high-performance web and mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${outfit.variable} antialiased bg-background text-foreground font-outfit`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}