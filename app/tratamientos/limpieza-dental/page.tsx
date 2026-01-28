import LimpiezaPage from "./limpieza-dental-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  path: "/tratamientos/limpieza-dental",
  title: "Limpieza Dental Profunda EMS Airflow | Velvence®",
  description:
    "Limpieza dental profunda con EMS Airflow: suave, sin dolor y altamente efectiva para eliminar biofilm y manchas. Sonrisa fresca. Agenda hoy.",
  openGraph: {
    title: "Limpieza Dental Profunda EMS Airflow | Velvence®",
    description:
      "Limpieza dental profunda con EMS Airflow: suave, sin dolor y altamente efectiva para eliminar biofilm y manchas. Sonrisa fresca. Agenda hoy.",
  },
})

export default function LimpiezaLanding() {
  return <LimpiezaPage />
}
