"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-footer-gray rounded-3xl p-12"
      >
        {/* Three columns section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Menú */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-primary-dark font-semibold text-lg mb-6">Menú</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#tecnologia" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="/precios" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Precios
                </a>
              </li>
              <li>
                <a href="/agendar-cita" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Agendar cita
                </a>
              </li>
              <li>
                <a href="/acerca-de-nosotros" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a href="/#casos-clinicos" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Casos clínicos
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Tratamientos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-primary-dark font-semibold text-lg mb-6">Tratamientos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Profilaxis limpieza dental
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Blanqueamiento dental
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Limpieza y blanqueamiento dental
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Enlaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-primary-dark font-semibold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Conoce la marca
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section with logo, social, and description */}
        <div className="border-t border-gray-300 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/images/global/velvence_dark_logo.svg"
              alt="Velvence Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            <a href="#" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-right"
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
