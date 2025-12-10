"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-sand"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="w-40 h-auto" whileHover={{ scale: 1.05 }}>
          <Image src="/velvence-dark-logo.svg" alt="Velvence" width={160} height={40} className="w-full h-auto" />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#resultados" className="text-primary-dark hover:text-accent-lime transition">
            Resultados
          </a>
          <a href="#proceso" className="text-primary-dark hover:text-accent-lime transition">
            Proceso y tecnología
          </a>
          <a href="#protocolos" className="text-primary-dark hover:text-accent-lime transition">
            Protocolos y precios
          </a>
          <a href="#tratamientos" className="text-primary-dark hover:text-accent-lime transition">
            Tratamientos
          </a>
          <a href="#nosotros" className="text-primary-dark hover:text-accent-lime transition">
            Nosotros
          </a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition"
        >
          Agendar cita
        </motion.button>

        <button className="md:hidden text-primary-dark" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  )
}
