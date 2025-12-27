"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Clock, Sparkles, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProximamenteClientPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-5">
      {/* Hero Section con Nav */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pricing/pricing_main_bg_op.webp"
            alt="Próximamente en Velvence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/40 to-sand-5" />
        </div>

        {/* Header flotante sin fondo */}
        <Header variant="floating" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-accent-lime" />
                </div>
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance">Próximamente</h1>
                <p className="text-xl md:text-2xl text-white/90 text-pretty max-w-2xl mx-auto">
                  Estamos preparando nuevos tratamientos excepcionales para cuidar tu sonrisa
                </p>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-3 gap-6 mt-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-accent-lime mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">En desarrollo</h3>
                  <p className="text-white/80 text-sm">Trabajando en nuevos protocolos y tecnologías</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Sparkles className="w-8 h-8 text-accent-lime mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Tecnología avanzada</h3>
                  <p className="text-white/80 text-sm">Equipos de última generación para mejores resultados</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Calendar className="w-8 h-8 text-accent-lime mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Disponible pronto</h3>
                  <p className="text-white/80 text-sm">Te notificaremos cuando esté listo</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              >
                <Link href="/tratamientos/blanqueamiento-dental">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent-lime text-primary-dark font-bold rounded-xl hover:shadow-2xl transition text-lg"
                  >
                    Ver tratamientos disponibles
                  </motion.button>
                </Link>

                <Link href="/agendar-cita">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition border border-white/40 text-lg"
                  >
                    Agendar consulta
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
