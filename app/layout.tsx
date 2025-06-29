// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vista Legal",
  description:
    "A professional law firm specializing in various practice areas including family law, corporate law, and criminal defense.",
  icons: {
    icon: "/images/favicon.jpg",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const allHeaders = await headers()
  const pathname =
    allHeaders.get("x-invoke-path") ||
    allHeaders.get("x-pathname") ||
    ""

  const isDisclaimerPage = pathname === "/disclaimer"

  return (
    <html lang="en">
      <body className={inter.className}>
        {isDisclaimerPage ? (
          <>{children}</>
        ) : (
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </body>
    </html>
  )
}
