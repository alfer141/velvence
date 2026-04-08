import { createPageMetadata } from "@/lib/metadata"
import { AboutUsClientPage } from "./page.client"
import { organizationSchema, localBusinessMarques, localBusinessAifa } from "@/lib/schema"

export const metadata = createPageMetadata({
  path: "/acerca-de-nosotros",
  title: "Velvence® | Acerca de Nosotros",
  description:
    "Conoce la historia de Velvence, una clínica especializada en blanqueamiento dental con tecnología de vanguardia. Ubicaciones en Querétaro.",
  openGraph: {
    title: "Velvence® | Acerca de Nosotros",
    description: "Conoce la historia de Velvence y nuestra mission de elevar la experiencia del cuidado bucal.",
  },
})

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessMarques, localBusinessAifa]),
        }}
      />
      <AboutUsClientPage />
    </>
  )
}
