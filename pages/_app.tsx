import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import '../styles/globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-geist-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
} 