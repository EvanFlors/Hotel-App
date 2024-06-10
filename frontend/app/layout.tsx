import type { Metadata } from "next";
import { Marcellus, Urbanist } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({ 
  subsets: ["latin"], 
  weight: ["400"], 
  variable: "--font-marcellus"
});

const urbanist = Urbanist({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: "Hotel App",
  description: "Hotel App Vertigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
