import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://xclusivkutz.com"),
  title: "XclusivKutz — GTA Finest Barber | Book Online",
  description:
    "Premium men's grooming in Brampton. Expert fades, lineups, and beard work by master barber Waleed Adnan. Book your appointment at XclusivKutz today.",
  keywords:
    "Brampton barber, GTA barber, fade haircut, beard trim, mens haircut, skin fade, XclusivKutz, Waleed Adnan, Bowsfield Dr barber",
  applicationName: "XclusivKutz",
  openGraph: {
    title: "XclusivKutz — GTA Finest Barber",
    description:
      "Premium men's grooming in Brampton. Expert fades, lineups, and beard work. Book online today.",
    url: "https://xclusivkutz.com",
    siteName: "XclusivKutz",
    locale: "en_CA",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
