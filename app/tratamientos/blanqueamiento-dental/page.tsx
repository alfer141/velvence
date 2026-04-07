import BlanqueamientoPage from "./blanqueamiento-dental-client"
import { createPageMetadata, baseUrl } from "@/lib/metadata"
import { localBusinessMarques, localBusinessAifa } from "@/lib/schema"

export const metadata = createPageMetadata({
  path: "/tratamientos/blanqueamiento-dental",
  title: "Blanqueamiento Dental Profesional | Velvence®",
  description:
    "Transforma tu sonrisa de 5 a 8 tonos más blanca en 45 minutos. Blanqueamiento dental seguro y eficaz con tecnología única y experiencia relajante. Agenda hoy.",
  openGraph: {
    title: "Blanqueamiento Dental Profesional | Velvence®",
    description:
      "Transforma tu sonrisa de 5 a 8 tonos más blanca en 45 minutos. Blanqueamiento dental seguro y eficaz con tecnología única y experiencia relajante. Agenda hoy.",
  },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Blanqueamiento dental clínico",
  alternateName: [
    "Blanqueamiento dental profesional",
    "Aclaramiento dental profesional",
    "Aclarado dental en consultorio",
  ],
  description:
    "Tratamiento de blanqueamiento dental profesional en consultorio que aclara de 5 a 8 tonos en una sola sesión de 45 a 90 minutos. Utiliza tecnología Philips Zoom y limpieza previa con EMS Airflow para resultados seguros, efectivos y sin dolor.",
  url: `${baseUrl}/tratamientos/blanqueamiento-dental`,
  image: `${baseUrl}/images/about/about_history.webp`,
  bodyLocation: "Dientes y cavidad bucal",
  howPerformed:
    "El procedimiento consta de 4 etapas: (1) Examen dental previo para evaluar el estado de dientes y encías; (2) Limpieza dental profesional con tecnología EMS Airflow para eliminar placa, biofilm y manchas superficiales; (3) Protocolo de confort con ondas binaurales, goggles inteligentes con masaje y Theraboots; (4) Aplicación del gel blanqueador profesional activado con tecnología Philips Zoom bajo supervisión especializada en consultorio.",
  preparation:
    "Se requiere una revisión dental previa para confirmar que el paciente es candidato al tratamiento. Se realiza una limpieza dental profesional con EMS Airflow antes del blanqueamiento para retirar placa, biofilm y manchas superficiales, lo que permite que el gel actúe de forma más uniforme y los resultados sean mejores.",
  followup:
    "Evitar alimentos y bebidas que manchen los dientes (café, té, vino tinto, tabaco) durante las primeras 48 horas. Evitar temperaturas extremas en alimentos el mismo día del tratamiento. Mantener una buena higiene dental diaria y realizar limpiezas profesionales periódicas para prolongar los resultados.",
  status: "EventScheduled",
  procedureType: {
    "@type": "MedicalTherapy",
    name: "CosmeticProcedure",
  },
  indication: {
    "@type": "MedicalIndication",
    name: "Pacientes que desean aclarar el tono de sus dientes, reducir manchas externas causadas por café, té, vino, tabaco y el amarillamiento natural. No apto para mujeres embarazadas o en período de lactancia. Manchas internas por ciertos medicamentos, traumatismos o endodoncia pueden tener resultados limitados; se realiza valoración previa para establecer expectativas realistas.",
  },
  recognizingAuthority: {
    "@id": `${baseUrl}/#organization`,
  },
  performer: [
    { "@id": localBusinessMarques["@id"] },
    { "@id": localBusinessAifa["@id"] },
  ],
  offers: {
    "@type": "Offer",
    price: "5499",
    priceCurrency: "MXN",
    url: `${baseUrl}/agendar-cita`,
    availability: "https://schema.org/InStock",
  },
}

export default function BlanqueamientoLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, localBusinessMarques, localBusinessAifa]),
        }}
      />
      <BlanqueamientoPage />
    </>
  )
}
