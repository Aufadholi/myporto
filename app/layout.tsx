import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aufa Fadholi",
  description: "Creative Developer, Digital Architect, Innovation Enthusiast",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/images/circleiconku.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16', 
      url: '/images/circleiconku.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/images/circleiconku.png',
    },
    {
      rel: 'shortcut icon',
      url: '/images/circleiconku.png',
    },
  ],
  openGraph: {
    title: "Aufa Fadholi",
    description: "Creative Developer, Digital Architect, Innovation Enthusiast",
    url: "https://aufafadholi.me",
    siteName: "Aufa Fadholi",
    images: [
      {
        url: "/images/circleiconku.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/circleiconku.png" type="image/png" />
        <link rel="shortcut icon" href="/images/circleiconku.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/circleiconku.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
