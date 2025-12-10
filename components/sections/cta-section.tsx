"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Espacio para imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundColor: "#E0EBF1" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400">Imagen CTA</p>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary-dark">Un proceso pensado en tu experiencia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde la primera consulta hasta el resultado final, cuidamos cada detalle de tu experiencia.
              Procedimientos seguros, resultados visibles.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center text-primary-dark font-bold text-sm">
                  ✓
                </span>
                <span className="text-gray-700">Consulta inicial sin costo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center text-primary-dark font-bold text-sm">
                  ✓
                </span>
                <span className="text-gray-700">Plan personalizado</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center text-primary-dark font-bold text-sm">
                  ✓
                </span>
                <span className="text-gray-700">Seguimiento post-tratamiento</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
