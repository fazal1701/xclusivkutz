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
  title: "XclusivKutz - GTA Finest Barber",
  description:
    "Experience precision cuts and modern style at XclusivKutz Barbershop in Brampton. Expert fades, beard trims, and luxury grooming services. Book online today.",
  keywords:
    "Brampton barber, fade haircut, beard trim, mens haircut, barbershop Brampton, skin fade, taper fade, hot towel shave, XclusivKutz",
  applicationName: "XclusivKutz",
  openGraph: {
    title: "XclusivKutz - GTA Finest Barber",
    description:
      "Experience precision cuts and modern style at XclusivKutz Barbershop in Brampton. Expert fades, beard trims, and luxury grooming services.",
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
