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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El blanqueamiento dental duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos, el blanqueamiento dental con luz no duele. Lo que algunas personas sienten es una sensación temporal (como cosquilleo o leve sensibilidad), especialmente si ya tenían sensibilidad previa. En Velvence hacemos una valoración previa de encías y esmalte, y ajustamos el protocolo para que el tratamiento sea cómodo y seguro.",
      },
    },
    {
      "@type": "Question",
      name: "¿El blanqueamiento dental deja los dientes sensibles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede haber sensibilidad dental leve y temporal, pero no le ocurre a todos. Cuando aparece, suele durar de unas horas hasta 24–48 horas. Por eso la clave es hacerlo de forma profesional: evaluamos tu caso y te damos recomendaciones de cuidado para minimizarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo veo resultados y cuántos tonos aclara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los resultados son inmediatos: sales de tu cita con una sonrisa visiblemente más blanca. En Velvence el objetivo del protocolo es lograr de 5 a 8 tonos en una sola cita según diagnóstico y tipo de mancha.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto duran los resultados del aclarado dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La duración depende de hábitos y del tipo de mancha, pero en promedio el resultado puede mantenerse meses e incluso más tiempo con buenos cuidados. La mejor forma de prolongarlo es mantener una buena higiene, realizar limpiezas profesionales periódicas y seguir las recomendaciones posteriores a tu sesión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué manchas sí se quitan y cuáles no?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El blanqueamiento dental funciona muy bien para manchas externas (por café, té, vino, tabaco y pigmentos) y para el amarillamiento natural con el tiempo. Hay manchas más complejas que pueden responder menos, como algunas manchas internas (por ciertos medicamentos, traumatismos o dientes con endodoncia).",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito limpieza dental antes del blanqueamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en la mayoría de los casos se recomienda una limpieza dental profesional antes del blanqueamiento. Remover placa, biofilm y manchas superficiales ayuda a que el gel actúe de forma más uniforme y los resultados sean mejores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre la tecnología de blanqueamiento dental de Velvence y el blanqueamiento tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tecnología Philips Zoom utiliza una luz LED avanzada que activa el gel blanqueador de forma más rápida y uniforme, logrando dientes hasta varios tonos más blancos en menos tiempo y con menor sensibilidad. El blanqueamiento tradicional no cuenta con esta activación controlada, por lo que los resultados suelen ser más lentos y menos uniformes.",
      },
    },
  ],
}

export default function BlanqueamientoLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, faqSchema, localBusinessMarques, localBusinessAifa]),
        }}
      />
      <BlanqueamientoPage />
    </>
  )
}
