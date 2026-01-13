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
      : "sticky top-0 z-50 flex justify-center px-4 sm:px-6 py-4 bg-white "

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={containerClasses}>
      <div className="w-full max-w-screen-lg bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
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

            <a
              href="https://wa.me/5215521819153"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-primary-dark hover:bg-gray-100 transition font-medium px-3 py-2 rounded-full ml-4"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="text-sm">52 55 2181 9153</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              <a
                href="/#resultados"
                className="text-xs text-primary-dark hover:bg-gray-100 transition font-medium whitespace-nowrap px-3 py-2 rounded-full"
              >
                Resultados
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
                        href="/tratamientos/limpieza-dental"
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
                      <Link
                        href="/proximamente"
                        className="block px-4 py-2.5 text-sm text-primary-dark hover:bg-gray-100 transition rounded-lg mx-2"
                      >
                        Tratamiento de flourosis dental
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
                className="ml-2 px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition flex-shrink-0 text-xs"
              >
                Agendar cita
              </motion.button>
            </Link>
          </div>

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
                href="https://wa.me/5215521819153"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-dark hover:bg-gray-100 transition font-medium py-2 mb-2 border-b border-gray-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-sm">52 55 2181 9153</span>
              </a>

              <a
                href="/#resultados"
                className="text-sm text-primary-dark hover:bg-gray-100 transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Resultados
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
