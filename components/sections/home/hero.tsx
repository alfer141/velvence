"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Header } from "@/components/layout/header"

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

      <Header variant="floating" />

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
