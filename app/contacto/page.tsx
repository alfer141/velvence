import ContactoClientPage from "./contacto-client"
import { createPageMetadata } from "@/lib/metadata"
import { localBusinessSchema } from "@/lib/schema"

export const metadata = createPageMetadata({
  path: "/contacto",
  title: "Resuelve tus dudas y consultas | Contacto Velvence®",
  description:
    "Ponte en contacto con nuestra clínica por teléfono, email o redes sociales.Ubica la sucursal más cerca de ti y envíanos tus consultas y dudas a través de nuestros medios de contacto.",
  openGraph: {
    title: "Resuelve tus dudas y consultas | Contacto Velvence®",
    description:
      "Ponte en contacto con nuestra clínica por teléfono, email o redes sociales.Ubica la sucursal más cerca de ti y envíanos tus consultas y dudas a través de nuestros medios de contacto.",
  },
})

export default function ContactoPage() {
  return (
    <>
      {localBusinessSchema.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ContactoClientPage />
    </>
  )
}
