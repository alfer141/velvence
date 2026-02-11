import { createPageMetadata } from "@/lib/metadata"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = createPageMetadata({
  path: "/terminos-y-condiciones",
  title: "Velvence® | Términos y Condiciones",
  description:
    "Consulta los términos y condiciones de uso de los servicios de Velvence, clínica de blanqueamiento dental en Querétaro.",
  openGraph: {
    title: "Velvence® | Términos y Condiciones",
    description:
      "Términos y condiciones de uso de los servicios de Velvence, clínica de blanqueamiento dental en Querétaro.",
  },
})

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="static" />

      {/* Contenido - Insertar aqui */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-primary-dark mb-8 text-balance">
            Términos y Condiciones
          </h1>
          {/* Agrega tu contenido aqui */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
