import { createPageMetadata } from "@/lib/metadata"
import { AboutUsClientPage } from "./page.client"

export const metadata = createPageMetadata({
  title: "Velvence® | Acerca de Nosotros",
  description:
    "Conoce la historia de Velvence, una clínica especializada en blanqueamiento dental con tecnología de vanguardia. Ubicaciones en Querétaro.",
  openGraph: {
    title: "Velvence® | Acerca de Nosotros",
    description: "Conoce la historia de Velvence y nuestra mission de elevar la experiencia del cuidado bucal.",
  },
})

export default function AboutUsPage() {
  return <AboutUsClientPage />
}
