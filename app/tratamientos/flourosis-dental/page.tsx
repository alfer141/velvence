import FlourosisPage from "./flourosis-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Tratamiento de Flourosis Dental | Velvence®",
  description:
    "Dile adios a las manchas blancas en los dientes con nuestro tratamiento de resina infiltrativa en Velvence  la solución definitiva para recuperar un tono uniforme en tus dientes. ",
  openGraph: {
    title: "Tratamiento de Flourosis Dental | Velvence®",
    description:
      "Dile adios a las manchas blancas en los dientes con nuestro tratamiento de resina infiltrativa en Velvence  la solución definitiva para recuperar un tono uniforme en tus dientes. ",
  },
})

export default function FlourosisLanding() {
  return <FlourosisPage />
}
