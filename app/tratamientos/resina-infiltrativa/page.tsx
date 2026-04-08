import FlourosisPage from "./resina-client"
import { createPageMetadata, baseUrl } from "@/lib/metadata"
import { localBusinessMarques, localBusinessAifa } from "@/lib/schema"

export const metadata = createPageMetadata({
  path: "/tratamientos/resina-infiltrativa",
  title: "Aplicación de Resina Infiltrativa ICON | Velvence®",
  description:
    "Reduce manchas blancas con resina infiltrativa ICON. Tratamiento para Fluorosis, desmineralización y caries blancas con valoración personalizada. Agenda y recupera seguridad al sonreír.",
  openGraph: {
    title: "Aplicación de Resina Infiltrativa ICON | Velvence®",
    description:
      "Reduce manchas blancas con resina infiltrativa ICON. Tratamiento para Fluorosis, desmineralización y caries blancas con valoración personalizada. Agenda y recupera seguridad al sonreír.",
  },
})

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Resina Infiltrativa ICON",
  alternateName: [
    "Tratamiento ICON",
    "Infiltración de resina",
    "Tratamiento para fluorosis dental",
    "Tratamiento para manchas blancas",
  ],
  description:
    "Tratamiento mínimamente invasivo con resina infiltrativa ICON para reducir manchas blancas causadas por fluorosis, desmineralización o caries incipientes. Procedimiento de 60 a 80 minutos que infiltra y sella las porosidades del esmalte para mejorar la apariencia de los dientes.",
  url: `${baseUrl}/tratamientos/resina-infiltrativa`,
  image: `${baseUrl}/og-image.png`,
  bodyLocation: "Esmalte dental",
  howPerformed:
    "El tratamiento ICON utiliza una resina de baja viscosidad que se infiltra en las porosidades del esmalte dental afectado por manchas blancas. El proceso incluye acondicionamiento del esmalte, secado, aplicación de la resina infiltrante y fotopolimerización para sellar y estabilizar el resultado.",
  preparation:
    "Se realiza una valoración previa para determinar si el caso es apto para el tratamiento. Se recomienda una limpieza dental profesional antes del procedimiento para mejores resultados.",
  followup:
    "Mantener buena higiene dental diaria y realizar limpiezas profesionales cada 6 meses. Los resultados pueden durar hasta 24 meses con los cuidados adecuados.",
  status: "EventScheduled",
  procedureType: {
    "@type": "MedicalTherapy",
    name: "CosmeticProcedure",
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
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "4800",
      priceCurrency: "MXN",
      minPrice: "4800",
    },
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
      name: "¿Cuánto tiempo duran los resultados de la Resina infiltrativa ICON?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se ha demostrado que los resultados estéticos de la resina infiltrativa ICON pueden durar sin cambios significativos hasta 24 meses. Pasado este tiempo, es recomendable realizar un mantenimiento periódico. Además, ayuda muchísimo acompañarlo con limpiezas dentales cada 6 meses y una buena higiene diaria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo combinarlo con un blanqueamiento dental para aclarar mis dientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, de hecho, el tratamiento puede potenciar mucho sus resultados cuando se combina con un blanqueamiento dental en consultorio (según tu caso). Es importante esperar al menos 2 semanas entre cada tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Aseguran eliminar al 100% las manchas blancas de mis dientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La aplicación de resina ICON puede ser muy efectiva y disimular notablemente las manchas blancas en los dientes, pero el resultado depende de factores como la condición (desmineralización, fluorosis dental, caries blanca, etc.) y el grado de la misma. Durante la valoración podemos darte una expectativa realista para tu caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿La resina infiltrante sirve para todos los tipos de manchas blancas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La resina infiltrativa sirve principalmente para tratar manchas blancas ocasionadas por fluorosis, desmineralización, manchas posteriores al uso de ortodoncia o brackets y algunas lesiones. Aunque no todas tienen el mismo origen, muchas comparten porosidad en el esmalte.",
      },
    },
    {
      "@type": "Question",
      name: "¿El tratamiento de aplicación de resina infiltrativa ICON duele o requiere anestesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalmente es un tratamiento cómodo y mínimamente invasivo, y en la mayoría de los casos no requiere anestesia. Si presentas sensibilidad previa, lo consideramos en tu plan para que la experiencia sea tranquila.",
      },
    },
    {
      "@type": "Question",
      name: "¿ICON sirve para fluorosis dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede ayudar en fluorosis dental leve a moderada, cuando la mancha está relacionada con porosidad del esmalte y el caso es adecuado para infiltración. En fluorosis más severa o con defectos marcados, es posible que se recomienden otras alternativas o combinaciones.",
      },
    },
  ],
}

export default function FlourosisLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, localBusinessMarques, localBusinessAifa]),
        }}
      />
      <FlourosisPage />
    </>
  )
}
