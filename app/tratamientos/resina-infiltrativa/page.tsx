import FlourosisPage from "./resina-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Aplicación de Resina Infiltraitiva ICON | Velvence®",
  description:
    "Reduce manchas blancas con resina infiltrativa ICON. Tratamiento para Fluorosis, desmineralización y caries blancas con valoración personalizada. Agenda y recupera seguridad al sonreír.",
  openGraph: {
    title: "Aplicación de Resina Infiltraitiva ICON | Velvence®",
    description:
      "Reduce manchas blancas con resina infiltrativa ICON. Tratamiento para Fluorosis, desmineralización y caries blancas con valoración personalizada. Agenda y recupera seguridad al sonreír.",
  },
})

export default function FlourosisLanding() {
  return <FlourosisPage />
}
