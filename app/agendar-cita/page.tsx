import { createPageMetadata } from "@/lib/metadata"
import AgendarCitaClient from "./agendar-cita-client"

export const metadata = createPageMetadata({
  path: "/agendar-cita",
  title: "Velvence® | Agendar Cita",
  description:
    "Agenda tu cita de blanqueamiento dental o limpieza profesional en Velvence. Clínicas en Querétaro y Estado de México.",
  openGraph: {
    title: "Velvence® | Agendar Cita",
    description: "Reserva tu cita para blanqueamiento o limpieza dental profesional en cualquiera de nuestras clínicas.",
  },
})

export default function AgendarCitaPage() {
  return <AgendarCitaClient />
}
