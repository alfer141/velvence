"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Evaluación Inicial",
    description: "Diagnóstico completo y plan personalizado",
  },
  {
    number: "02",
    title: "Preparación",
    description: "Preparamos todo para garantizar comodidad",
  },
  {
    number: "03",
    title: "Procedimiento",
    description: "Intervención con protocolos avanzados",
  },
  {
    number: "04",
    title: "Recuperación",
    description: "Seguimiento y cuidados post-tratamiento",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-20 bg-footer-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Un proceso pensado en tu experiencia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Conoce cada paso del camino hacia tu sonrisa ideal</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Conectores */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-accent-lime transform translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 bg-white rounded-xl p-6 border border-sand h-full hover:shadow-lg transition">
                <div className="text-5xl font-bold text-accent-lime mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
