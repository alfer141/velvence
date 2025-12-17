"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/images/home/banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-xl px-12 py-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-accent-lime text-sm font-medium mb-4"
          >
            [Reserva]
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Tu sonrisa es el reflejo de ser imparable
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-base leading-relaxed mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-dark px-8 py-4 rounded-lg font-medium hover:bg-sand-light transition-colors flex items-center gap-2"
          >
            Solicitar cita
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
