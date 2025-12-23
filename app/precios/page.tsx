import { createPageMetadata } from "@/lib/metadata"
import { PreciosClientPage } from "@/app/precios/PreciosClientPage"

export const metadata = createPageMetadata({
  title: "Velvence® | Precios y Paquetes",
  description:
    "Descubre nuestros paquetes de blanqueamiento dental. Profilaxis con tecnología EMS Airflow y sesiones de blanqueamiento con Philips Zoom®.",
  openGraph: {
    title: "Velvence® | Precios y Paquetes",
    description:
      "Consulta nuestros servicios de limpieza dental y blanqueamiento con precios competitivos en Querétaro.",
  },
})

export default function PreciosPage() {
  return <PreciosClientPage />
}
