import "./globals.css";
import React from "react";
import { MouseProvider } from "@/app/costoumHook/MouseContext/MouseContext";
import { CelectorProviver } from "@/app/costoumHook/CelectPageContext/PageCelector";
import Head from "next/head";

export const metadata = {
  title: "AriPortfolio",
  description: "Built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Built with Next.js + Tailwind CSS" />
        <meta name="author" content="Your Name or Company" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="AriPortfolio" />
        <meta
          property="og:description"
          content="Built with Next.js + Tailwind CSS"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path/to/image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AriPortfolio" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AriPortfolio" />
        <meta
          name="twitter:description"
          content="Built with Next.js + Tailwind CSS"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/path/to/image.jpg"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
        {/* Language and Theme */}
        <meta name="language" content="English" />
        <meta name="theme-color" content="#000000" />
        {/* Canonical */}
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      <body className="bg-mainBorder overflow-hidden cursor-none">
        <MouseProvider>
          <CelectorProviver>{children}</CelectorProviver>
        </MouseProvider>
      </body>
    </html>
  );
}
