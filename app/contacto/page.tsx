import ContactoClientPage from "./contacto-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Velvence® | Contacto",
  description:
    "Contacta con Velvence. Teléfono, email, ubicaciones en Querétaro y formulario de contacto. ¡Estamos listos para atenderte!",
  openGraph: {
    title: "Velvence® | Contacto",
    description:
      "Ponte en contacto con nuestra clínica por teléfono, email o redes sociales. Dos sucursales en Querétaro.",
  },
})

export default function ContactoPage() {
  return <ContactoClientPage />
}
