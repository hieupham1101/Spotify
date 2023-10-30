import type { Metadata } from "next";
import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: [
    {
      path: "./assets/fonts/CircularSp-Book.woff2",
      weight: "400",
    },
    {
      path: "./assets/fonts/CircularSp-Bold.woff2",
      weight: "700",
    },
    {
      path: "./assets/fonts/spoticon_regular.woff2",
    },
  ],
  variable: "--font-surt-bold",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>{children}</body>
    </html>
  );
}
