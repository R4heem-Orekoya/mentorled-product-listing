import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const openSans = DM_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentor Led Product List Challenge - Challenge 2",
  description: "This is the solution to mentor led product list challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${openSans.variable} antialiased`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
