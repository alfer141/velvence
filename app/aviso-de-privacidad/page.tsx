import { createPageMetadata } from "@/lib/metadata"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = createPageMetadata({
  path: "/aviso-de-privacidad",
  title: "Velvence® | Aviso de Privacidad",
  description:
    "Conoce el aviso de privacidad de Velvence. Información sobre el tratamiento y protección de tus datos personales.",
  openGraph: {
    title: "Velvence® | Aviso de Privacidad",
    description:
      "Aviso de privacidad de Velvence. Información sobre el tratamiento y protección de tus datos personales.",
  },
})

export default function AvisoDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="static" />

      {/* Contenido - Insertar aqui */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-primary-dark mb-8 text-balance">
            Aviso de Privacidad
          </h1>
          {/* Agrega tu contenido aqui */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
