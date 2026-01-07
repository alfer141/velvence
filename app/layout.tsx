import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
        url: "/og-image.png",
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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1421247669695549');fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1421247669695549&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
