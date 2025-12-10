"use client"

import { motion } from "framer-motion"

const cases = [
  { id: 1, title: "Caso 1" },
  { id: 2, title: "Caso 2" },
  { id: 3, title: "Caso 3" },
  { id: 4, title: "Caso 4" },
]

export function BeforeAfterGallery() {
  return (
    <section id="antes-despues" className="py-20 bg-footer-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Sin filtros, ni trucos, resultados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Galería de casos reales transformados por nuestros especialistas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              style={{ backgroundColor: "#E0EBF1" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 font-semibold">{case_.title}</p>
                  <p className="text-sm text-gray-300">Antes y Después</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
