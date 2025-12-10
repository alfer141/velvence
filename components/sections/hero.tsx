"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/velvence-main-bg.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 z-50"
      >
        <div className="max-w-screen-lg mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div className="w-32 h-auto" whileHover={{ scale: 1.05 }}>
            <svg viewBox="0 0 200 50" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Placeholder para logo - reemplazar con imagen real */}
              <text x="10" y="35" fontSize="24" fontWeight="bold" className="fill-white">
                Velvence
              </text>
            </svg>
          </motion.div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#resultados" className="text-white hover:text-accent-lime transition text-sm">
              Resultados
            </a>
            <a href="#proceso" className="text-white hover:text-accent-lime transition text-sm">
              Proceso y tecnología
            </a>
            <a href="#protocolos" className="text-white hover:text-accent-lime transition text-sm">
              Protocolos y precios
            </a>
            <a href="#tratamientos" className="text-white hover:text-accent-lime transition text-sm">
              Tratamientos
            </a>
            <a href="#nosotros" className="text-white hover:text-accent-lime transition text-sm">
              Nosotros
            </a>
          </nav>

          {/* CTA Header */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Agendar cita
          </motion.button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>

      <div className="relative z-10 max-w-screen-lg w-full px-6 flex items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md space-y-6 backdrop-blur-md bg-sand-20 p-8 md:p-12 rounded-2xl border border-sand-30"
        >
          {/* Etiqueta */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="text-sm text-white font-medium tracking-wide">[Clínica de blanqueamiento dental]</span>
          </motion.div>

          {/* Título */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Transforma tu sonrisa más sana, limpia y brillante en una sesión
          </motion.h1>

          {/* Descripción */}
          <motion.p variants={itemVariants} className="text-white/90 leading-relaxed text-base">
            At Lifecycle, we help organizations future-proof operations through smart planning, efficient systems, and
            sustainable execution.
          </motion.p>

          {/* CTA Principal */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-3 bg-white text-primary-dark font-semibold rounded-lg transition"
          >
            Precios y tratamientos
          </motion.button>

          <motion.div variants={itemVariants} className="mt-6 p-4 bg-accent-lime rounded-xl flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-dark/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary-dark text-sm">
                Aclara hasta 8 tonos en una sesión de 45 minutos
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
