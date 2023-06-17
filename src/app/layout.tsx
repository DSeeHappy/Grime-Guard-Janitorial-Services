import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grime Guard Janitorial Services',
  description: 'Lakewood\'s Local Choice for Superior Janitorial Services Across Colorado\'s Vibrant Front Range Communities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <title>
        Grime Guard Janitorial Services LLC
      </title>

      <meta property="og:url" content="https://grimeguardjanitorialservices.com" />
      <meta property="og:type" content="website" />
      <meta
          property="og:title"
          content="Grime Guard Janitorial Services"
      />
      <meta name="twitter:card" content="Lakewood's Local Choice for Superior Janitorial Services Across Colorado's Vibrant Front Range Communities" />
      <meta name="twitter:image" content="/Grime Guard Logo.png" />
      <meta
          property="og:description"
          content="Lakewood's Local Choice for Superior Janitorial Services Across Colorado's Vibrant Front Range Communities"
      />
      <meta property="og:image" content="/Grime Guard Logo.png" />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
