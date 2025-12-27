"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
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
                <Link href="/" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#tecnologia" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Tecnología
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/agendar-cita" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Agendar cita
                </Link>
              </li>
              <li>
                <a href="/acerca-de-nosotros" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <Link href="/#casos-clinicos" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Casos clínicos
                </Link>
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
                <Link   href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-dark transition text-sm">
                  Blog Consejos y novedades
                </Link>
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
            <a href="https://www.instagram.com/velvence.mx/" target="_blank" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/velvence" target="_blank" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@velvence.mx" className="text-primary-dark hover:text-accent-lime transition-colors" aria-label="Tiktok">
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
              En Velvence creemos en el cuidado personal como parte del bienestar integral.
                A través de odontología preventiva con tratamientos como  limpieza y blanqueamiento dental, 
                ayudamos a mantener una sonrisa más saludable y luminosa, fortaleciendo 
                la confianza al sonreír y promoviendo una buena salud bucal a largo 
                plazo con resultados seguros, sin dolor y altamente efectivos.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
