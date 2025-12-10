"use client"

import { motion } from "framer-motion"

export function ResultsGallery() {
  return (
    <section className="py-20 bg-footer-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Descubre el color de una sonrisa más limpia, nueva y brillante
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-square md:aspect-auto md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: "#E0EBF1" }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400 text-lg">Galería de resultados</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
