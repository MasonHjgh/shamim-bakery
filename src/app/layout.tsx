import type { Metadata } from "next"

import "./globals.css"
import Header from "@/features/header/Header"


export const metadata: Metadata = {
  title: "Shamim Sweets & Cake Shop",
  description: "Custom made cakes and sweets for all occasions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="h-full">

        {children}
        </main>
      </body>
    </html>
  )
}
