import type { Metadata } from "next";
import { Anton, Outfit, Inter, Damion, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/Footer";
import AddressGrid from "@/components/sections/AddressGrid";

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400", // Damion only supports 400
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ababil",
    default: "Ababil | We Build High Performance Web & Mobile Apps",
  },
  description:
    "Ababil is a premier digital agency building high-performance web and mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${outfit.variable} ${inter.variable} ${damion.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                  0 1 0 0 0  
                  0 0 1 0 0  
                  0 0 0 20 -5"
              />
            </filter>
          </defs>
        </svg>
        <AddressGrid/>
        <Footer/>
      </body>
    </html>
  );
}
