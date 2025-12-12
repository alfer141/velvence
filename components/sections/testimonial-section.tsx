"use client"

import { motion } from "framer-motion"

export function TestimonialSection() {
  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-2xl font-semibold leading-relaxed">
              "Exacto servicio y atención por parte de la clínica. La doctora es muy profesional y el resultado es muy
              satisfactorio recomiendo 👌 procedimiento 100% confiable."
            </p>
            <div>
              <p className="font-bold text-lg">María Rodríguez</p>
              <p className="text-gray-300">Paciente verificada</p>
            </div>
          </motion.div>

          {/* Imagen testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundColor: "#E0EBF1" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400">Foto testimonial</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
