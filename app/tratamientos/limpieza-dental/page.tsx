import LimpiezaPage from "./limpieza-dental-client"
import { createPageMetadata, baseUrl } from "@/lib/metadata"
import { localBusinessMarques, localBusinessAifa } from "@/lib/schema"

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Limpieza Dental Profesional EMS Airflow",
  alternateName: [
    "Limpieza dental profunda",
    "Profilaxis dental",
    "GBT Guided Biofilm Therapy",
  ],
  description:
    "Limpieza dental profesional con tecnología EMS Airflow (GBT) que elimina placa, biofilm y manchas superficiales de forma suave, sin dolor y altamente efectiva. Procedimiento de 30 a 45 minutos con valoración profesional incluida.",
  url: `${baseUrl}/tratamientos/limpieza-dental`,
  image: `${baseUrl}/og-image.png`,
  bodyLocation: "Dientes y encías",
  howPerformed:
    "El procedimiento utiliza tecnología EMS Airflow (Guided Biofilm Therapy) que combina aire, agua y polvo fino de eritritol para eliminar biofilm, placa y manchas superficiales de forma suave y precisa, sin la fricción del instrumental tradicional.",
  preparation:
    "No requiere preparación especial. Se realiza una valoración inicial del estado de dientes y encías antes de comenzar el procedimiento.",
  followup:
    "Mantener una buena higiene dental diaria con cepillado y uso de hilo dental. Se recomienda realizar limpiezas profesionales cada 6 meses o según indicación del especialista.",
  status: "EventScheduled",
  procedureType: {
    "@type": "MedicalTherapy",
    name: "PreventiveProcedure",
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
    price: "1599",
    priceCurrency: "MXN",
    url: `${baseUrl}/agendar-cita`,
    availability: "https://schema.org/InStock",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el precio de una limpieza dental profesional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de la limpieza dental profesional en Velvence, centro de blanqueamiento y limpieza dental profesional, es de $1,900 pesos mexicanos. Este costo incluye una limpieza completa realizada en consultorio con tecnología avanzada y valoración profesional.",
      },
    },
    {
      "@type": "Question",
      name: "¿La limpieza dental desgasta o daña los dientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Cuando se realiza de forma profesional, la limpieza dental no desgasta el esmalte. Al contrario, elimina placa y sarro sin afectar la estructura del diente, ayudando a preservar tu salud dental a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿La limpieza dental duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una limpieza dental profesional no debería ser dolorosa. En Velvence realizamos limpieza dental con EMS Airflow (GBT), un método suave y sin dolor que elimina biofilm y placa con mayor comodidad y en menos tiempo, ideal incluso para personas con sensibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cada cuánto tiempo se recomienda hacer una limpieza dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De forma general, se recomienda realizar una limpieza dental profesional cada 6 meses. Sin embargo, la frecuencia puede variar según tus hábitos, tu salud de encías y la evaluación clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿La limpieza dental puede blanquear los dientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La limpieza dental no es un tratamiento de blanqueamiento, pero sí puede hacer que tus dientes se vean más claros y luminosos. Al eliminar placa, biofilm y manchas superficiales, los dientes recuperan su color natural.",
      },
    },
  ],
}

export default function LimpiezaLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, localBusinessMarques, localBusinessAifa]),
        }}
      />
      <LimpiezaPage />
    </>
  )
}
