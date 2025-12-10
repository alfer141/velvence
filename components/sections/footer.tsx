"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer id="contacto" className="bg-footer-gray border-t border-sand py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-primary-dark mb-4">Velvence</h3>
            <p className="text-gray-600 text-sm">
              Especialistas en odontología estética y procedimientos dentales avanzados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-primary-dark mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-accent-lime transition">
                  Blanqueamiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-lime transition">
                  Coronas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-lime transition">
                  Implantes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-lime transition">
                  Ortodoncias
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-primary-dark mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 hola@velvence.com</li>
              <li>📍 Dirección de la clínica</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-primary-dark mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center hover:bg-accent-lime hover:text-primary-dark transition text-xs"
              >
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center hover:bg-accent-lime hover:text-primary-dark transition text-xs"
              >
                📷
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center hover:bg-accent-lime hover:text-primary-dark transition text-xs"
              >
                𝕏
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-sand pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Velvence. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
