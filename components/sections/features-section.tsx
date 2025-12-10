"use client"

import { motion } from "framer-motion"

const features = [
  { icon: "✓", title: "Especialistas Calificados", description: "Equipo de dentistas con experiencia" },
  { icon: "⚡", title: "Procedimientos Avanzados", description: "Tecnología de última generación" },
  { icon: "💎", title: "Resultados Garantizados", description: "Sonrisas que trasforman" },
  { icon: "🛡️", title: "100% Confiable", description: "Protocolos de seguridad garantizados" },
]

export function FeaturesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 max-w-2xl">
            Somos especialistas en crafting indicative digital experiences and immersive 3D visuals que te hagan brillar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="p-6 rounded-xl border border-sand bg-white hover:bg-footer-gray transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
