"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  variant?: "floating" | "static"
}

export function Header({ variant = "static" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isTratamientosOpen, setIsTratamientosOpen] = useState(false)

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
          <nav className="hidden lg:flex items-center gap-1 flex-1 px-4">
            <a
              href="/#resultados"
              className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap px-3 py-2 rounded-full"
            >
              Resultados
            </a>
            <a
              href="/#proceso"
              className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap px-3 py-2 rounded-full"
            >
              Proceso
            </a>
            <Link
              href="/precios"
              className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap px-3 py-2 rounded-full"
            >
              Protocolos y precios
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsTratamientosOpen(true)}
              onMouseLeave={() => setIsTratamientosOpen(false)}
            >
              <button className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap flex items-center gap-1 px-3 py-2 rounded-full">
                Tratamientos
                <ChevronDown className={`w-3 h-3 transition-transform ${isTratamientosOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isTratamientosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
                  >
                    <Link
                      href="/tratamientos/blanqueamiento-dental"
                      className="block px-4 py-2.5 text-sm text-primary-dark hover:bg-gray-100 transition rounded-lg mx-2"
                    >
                      Blanqueamiento dental
                    </Link>
                    <Link
                      href="/proximamente"
                      className="block px-4 py-2.5 text-sm text-primary-dark hover:bg-gray-100 transition rounded-lg mx-2"
                    >
                      Limpieza / Profilaxis dental
                    </Link>
                    <Link
                      href="/proximamente"
                      className="block px-4 py-2.5 text-sm text-primary-dark hover:bg-gray-100 transition rounded-lg mx-2"
                    >
                      Blanqueamiento y limpieza dental
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/acerca-de-nosotros"
              className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap px-3 py-2 rounded-full"
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
                className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Resultados
              </a>
              <a
                href="/#proceso"
                className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Proceso y tecnología
              </a>
              <Link
                href="/precios"
                className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Protocolos y precios
              </Link>
              <div className="flex flex-col">
                <button
                  onClick={() => setIsTratamientosOpen(!isTratamientosOpen)}
                  className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2 flex items-center justify-between"
                >
                  Tratamientos
                  <ChevronDown className={`w-4 h-4 transition-transform ${isTratamientosOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isTratamientosOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-1"
                    >
                      <Link
                        href="/tratamientos/blanqueamiento-dental"
                        className="text-sm text-primary-dark/70 hover:bg-gray-100 transition py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Blanqueamiento dental
                      </Link>
                      <Link
                        href="/proximamente"
                        className="text-sm text-primary-dark/70 hover:bg-gray-100 transition py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Limpieza / Profilaxis dental
                      </Link>
                      <Link
                        href="/proximamente"
                        className="text-sm text-primary-dark/70 hover:bg-gray-100 transition py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Blanqueamiento y limpieza dental
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/acerca-de-nosotros"
                className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2"
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
