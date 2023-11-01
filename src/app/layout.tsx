"use client";
import { Figtree } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
