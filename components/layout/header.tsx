"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  variant?: "floating" | "static"
}

export function Header({ variant = "static" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const containerClasses =
    variant === "floating"
      ? "absolute top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
      : "sticky top-0 z-50 flex justify-center px-4 sm:px-6 py-4 bg-white shadow-sm"

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={containerClasses}>
      <div className="w-full max-w-screen-lg bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 flex-1 px-4">
            <a
              href="/#resultados"
              className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
            >
              Resultados
            </a>
            <a
              href="/#proceso"
              className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
            >
              Proceso
            </a>
            <Link
              href="/precios"
              className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
            >
              Protocolos y precios
            </Link>
            <a
              href="/#tratamientos"
              className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
            >
              Tratamientos
            </a>
            <Link
              href="/acerca-de-nosotros"
              className="text-xs text-primary-dark hover:text-accent-lime transition font-medium whitespace-nowrap"
            >
              Nosotros
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/agendar-cita">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition flex-shrink-0 text-xs"
            >
              Agendar cita
            </motion.button>
          </Link>

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
                href="/#resultados"
                className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Resultados
              </a>
              <a
                href="/#proceso"
                className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Proceso y tecnología
              </a>
              <Link
                href="/precios"
                className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Protocolos y precios
              </Link>
              <a
                href="/#tratamientos"
                className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Tratamientos
              </a>
              <Link
                href="/acerca-de-nosotros"
                className="text-sm text-primary-dark hover:text-accent-lime transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link href="/agendar-cita">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition mt-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Agendar cita
                </motion.button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
