"use client";
import { Figtree } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import 'bootstrap/dist/css/bootstrap.min.css';


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
