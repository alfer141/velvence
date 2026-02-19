import { createPageMetadata } from "@/lib/metadata"
import AgendarCitaClient from "./agendar-cita-client"

export const metadata = createPageMetadata({
  path: "/agendar-cita",
  title: "Agendar una cita | Velvence®",
  description:
    "Encuentra una clínica cerca de ti y reserva tu cita: Blanqueamiento dental, Limpieza dental profunda, desvanecer manchas blancas o una consulta de valoración. ",
  openGraph: {
    title: "Agendar una cita | Velvence®",
    description: "Encuentra una clínica cerca de ti y reserva tu cita: Blanqueamiento dental, Limpieza dental profunda, desvanecer manchas blancas o una consulta de valoración.",
  },
})

export default function AgendarCitaPage() {
  return <AgendarCitaClient />
}
