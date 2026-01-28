import { createPageMetadata } from "@/lib/metadata"
import { ProximamenteClientPage } from "./proximamente-client"

export const metadata = createPageMetadata({
  path: "/proximamente",
  title: "Velvence® | Próximamente",
  description:
    "Estamos preparando nuevos tratamientos dentales para ti. Pronto dispondremos de más servicios para cuidar tu sonrisa.",
  openGraph: {
    title: "Velvence® | Próximamente",
    description: "Nuevos tratamientos dentales próximamente disponibles en Velvence®.",
  },
  robots: "noindex, nofollow",
})

export default function ProximamentePage() {
  return <ProximamenteClientPage />
}
