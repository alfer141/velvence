import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { RegistroRecibidoClient } from "./registro-recibido-client"

export const metadata: Metadata = createPageMetadata({
  title: "Registro Recibido",
  description: "Tu registro ha sido recibido exitosamente. Nuestro equipo te contactará pronto.",
  path: "/agendar-cita/registro-recibido",
  robots: "noindex, nofollow",
})

export default function RegistroRecibidoPage() {
  return <RegistroRecibidoClient />
}
