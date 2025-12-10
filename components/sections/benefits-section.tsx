"use client"

import { motion } from "framer-motion"

const benefits = [
  { label: "20% menos", detail: "de procedimientos invasivos" },
  { label: "5X", detail: "más rápido" },
  { label: "5X", detail: "más seguro" },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Promesamos un enfoque avanzado basado en tecnología y ciencia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-xl bg-footer-gray"
            >
              <div className="text-5xl font-bold text-accent-lime mb-2">{benefit.label}</div>
              <p className="text-gray-600">{benefit.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
