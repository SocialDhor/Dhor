import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
 

export const metadata: Metadata = {
  title: "DHOR",
  description: "Our site is currently undergoing maintenance. We'll be back soon!",
}
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you need
  variable: '--font-montserrat',        // Optional: CSS variable
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
