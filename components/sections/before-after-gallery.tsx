"use client"

import { motion } from "framer-motion"
import { ComparisonSlider } from "./comparison-slider"

const cases = [
  { id: 1, title: "Caso 1" },
  { id: 2, title: "Caso 2" },
  { id: 3, title: "Caso 3" },
  { id: 4, title: "Caso 4" },
]

const comparisonImages = [
  {
    name: "William",
    before: "/images/patients/px_william_blanqueamiento_antes.webp",
    after: "/images/patients/px_william_blanqueamiento_desp.webp",
  },
  {
    name: "Pao",
    before: "/images/patients/px_pao_blanqueamiento_antes.webp",
    after: "/images/patients/px_pao_blanqueamiento_despues.webp",
  },
  {
    name: "Georgina",
    before: "/images/patients/px_georgina_blanqueamiento_antes.webp",
    after: "/images/patients/px_georgina_blanqueamiento_despues.webp",
  },
  {
    name: "Denisse",
    before: "/images/patients/px_denisse_blanqueamiento_antes.webp",
    after: "/images/patients/px_denisse_blanqueamiento_despues.webp",
  },
]

export function BeforeAfterGallery() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sand-20 rounded-full text-primary-dark px-4 py-1 text-sm">[Resultados]</span>
          <h2 className="text-3xl md:text-4xl font-bold my-4 text-primary-dark">
            Sin filtros ni trucos, resultados reales de pacientes reales
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            En Velvence, nos dedicamos a transformar sonrisas y vidas. Nuestro enfoque personalizado garantiza que
            cada tratamiento se adapte perfectamente a tus necesidades y deseos. Utilizamos tecnología de vanguardia y
            técnicas innovadoras para ofrecerte resultados excepcionales con la máxima comodidad.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            Nuestro equipo de profesionales altamente capacitados está comprometido con tu bienestar y satisfacción. Te
            acompañamos en cada paso del camino, asegurándonos de que te sientas cómodo y confiado durante todo el
            proceso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8" id="resultados">
          {comparisonImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ComparisonSlider
                beforeImage={image.before}
                afterImage={image.after}
                beforeAlt={`Antes del tratamiento de ${image.name}`}
                afterAlt={`Después del tratamiento de ${image.name}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {[
            {
              title: "Resultados excepcionales",
              description:
                "Obtén resultados visibles de blanqueamiento dental en tan solo una sesión de 45 minutos. Aclara hasta 8 tonos en la escala VITA con tecnología profesional aprobada.",
            },
            {
              title: "Protege y respeta tu esmalte.",
              description:
                "Nuestro tratamiento de blanqueamiento dental es seguro, no invasivo y preserva el esmalte, cuidando la salud bucal mientras mejora la estética de tu sonrisa.",
            },
            {
              title: "Sensibilidad mínima o nula.",
              description:
                "Cada sonrisa es única, por eso diseñamos planes de tratamiento adaptados a tus necesidades específicas y objetivos estéticos.",
            },
            {
              title: "Experiencia confortable",
              description:
                "Priorizamos tu comodidad en cada visita, creando un ambiente relajante y utilizando técnicas que minimizan las molestias durante los tratamientos.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl mb-2 font-semibold text-primary-dark">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
