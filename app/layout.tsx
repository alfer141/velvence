import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Velvence® | Clínica de Blanqueamiento Dental",
  description:
    "Clínica líder en blanqueamiento y aclaramiento dental en México. Limpieza dental profesional con tecnología avanzada. Resultados visibles desde la primera sesión",
  generator: "v0.app",
  openGraph: {
    title: "Velvence® | Clínica de Blanqueamiento Dental",
    description:
      "Clínica líder en blanqueamiento y aclaramiento dental en México. Limpieza dental profesional con tecnología avanzada.",
    url: "https://velvence.com",
    siteName: "Velvence",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velvence - Clínica de Blanqueamiento Dental",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/velvence-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/velvence-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/velvence-icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
