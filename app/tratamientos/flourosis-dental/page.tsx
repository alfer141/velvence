import FlourosisPage from "./flourosis-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Tratamiento de Flourosis Dental | Velvence®",
  description:
    "Limpieza dental profunda con EMS Airflow: suave, sin dolor y altamente efectiva para eliminar biofilm y manchas. Sonrisa fresca. Agenda hoy.",
  openGraph: {
    title: "Tratamiento de Flourosis Dental | Velvence®",
    description:
      "Limpieza dental profunda con EMS Airflow: suave, sin dolor y altamente efectiva para eliminar biofilm y manchas. Sonrisa fresca. Agenda hoy.",
  },
})

export default function FlourosisLanding() {
  return <FlourosisPage />
}
