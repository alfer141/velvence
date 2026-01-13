import BlanqueamientoPage from "./blanqueamiento-dental-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Blanqueamiento Dental Profesional | Velvence®",
  description:
    "Transforma tu sonrisa de 5 a 8 tonos más blanca en 45 minutos. Blanqueamiento dental seguro y eficaz con tecnología única y experiencia relajante. Agenda hoy.",
  openGraph: {
    title: "Blanqueamiento Dental Profesional | Velvence®",
    description:
      "Transforma tu sonrisa de 5 a 8 tonos más blanca en 45 minutos. Blanqueamiento dental seguro y eficaz con tecnología única y experiencia relajante. Agenda hoy.",
  },
})

export default function BlanqueamientoLanding() {
  return <BlanqueamientoPage />
}
