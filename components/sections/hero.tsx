"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

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
          backgroundImage: "url('/images/home/velvence_main_bg.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <motion.div className="flex-shrink-0 h-8 w-32" whileHover={{ scale: 1.05 }}>
              <Image
                src="/images/global/velvence_dark_logo.svg"
                alt="Velvence"
                width={128}
                height={32}
                className="h-full w-auto"
                priority
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 flex-1 px-4">
              <a
                href="#resultados"
                className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
              >
                Resultados
              </a>
              <a
                href="#proceso"
                className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
              >
                Proceso
              </a>
              <a
                href="#protocolos"
                className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
              >
                Protocolos
              </a>
              <a
                href="#tratamientos"
                className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
              >
                Tratamientos
              </a>
              <a
                href="#nosotros"
                className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
              >
                Nosotros
              </a>
            </nav>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition flex-shrink-0 text-xs"
            >
              Agendar cita
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-primary-dark flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-sand-10 px-4 sm:px-6 py-4 bg-white rounded-b-2xl"
            >
              <nav className="flex flex-col gap-2">
                <a
                  href="#resultados"
                  className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Resultados
                </a>
                <a
                  href="#proceso"
                  className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Proceso y tecnología
                </a>
                <a
                  href="#protocolos"
                  className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Protocolos y precios
                </a>
                <a
                  href="#tratamientos"
                  className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Tratamientos
                </a>
                <a
                  href="#nosotros"
                  className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition mt-2 text-sm"
                >
                  Agendar cita
                </motion.button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Content */}
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
            Transforma tu sonrisa más sana, limpia y brillante en una sesión con nuestra clínica de blanqueamiento
            dental.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(224, 235, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-3 text-primary-dark font-semibold rounded-lg transition bg-secondary-light hover:bg-secondary-light/90"
          >
            Precios y tratamientos
          </motion.button>

          {/* Highlight card */}
          <motion.div variants={itemVariants} className="mt-6 p-4 rounded-xl flex items-start gap-3 bg-white">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent">
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
