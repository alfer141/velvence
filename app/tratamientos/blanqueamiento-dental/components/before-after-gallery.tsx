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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sand-20 rounded-full text-primary-dark px-4 py-1 text-sm">Sin filtros ni trucos</span>
          <h2 className="text-3xl md:text-4xl font-regular my-4 text-primary-dark">
            Resultados del blanqueamiento dental.
          </h2>
        </motion.div>

        

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

       
      </div>
    </section>
  )
}
