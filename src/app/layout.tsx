import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fontMedium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mesran App Website",
  description: "We provide the best service for you for handling an event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontMedium.variable} p-[16px] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
