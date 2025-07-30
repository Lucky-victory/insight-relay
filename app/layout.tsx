import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InsightRelay - Transform Data Into Actionable Insights",
  description:
    "Real-time business insights, automated alerts, scheduled reports, and engagement analytics for SMBs and growth-stage companies.",
  keywords: [
    "business analytics",
    "real-time insights",
    "automated alerts",
    "scheduled reports",
    "engagement analytics",
  ],
  authors: [{ name: "InsightRelay Team" }],
  creator: "InsightRelay",
  publisher: "InsightRelay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
