import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./(components)/TopNav";
import MidNav from "./(components)/MidNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Generated by me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <MidNav />
        {children}
      </body>
    </html>
  );
}
