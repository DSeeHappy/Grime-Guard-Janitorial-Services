import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
