"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function RegistroRecibidoClient() {
  const whatsappNumber = "5215534716803"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una cita en Velvence")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('/images/pricing/pricing_main_bg_op.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/40 backdrop-blur-md border border-white/70 rounded-3xl shadow-xl p-8 sm:p-12 max-w-2xl w-full text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/led-icons/mail_check.svg"
            alt="Registro recibido"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6">Hemos recibido tu registro</h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-10 leading-relaxed max-w-lg mx-auto">
          Nuestro equipo te contactará en un máximo de 2 horas para confirmar tu cita o y aclarar dudas siempre y cuando
          nos hallas contactado en horario de atención.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-primary-dark text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-dark/90 transition"
            >
              Ir al inicio del sitio
            </motion.button>
          </Link>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white border-2 border-primary-dark text-primary-dark font-medium px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Escribir por WhatsApp
            </motion.button>
          </a>
        </div>

        {/* Business Hours */}
        <div className="text-gray-600 text-sm">
          <p className="font-medium mb-1">Horario de atención</p>
          <p>De lunes a sábado de:</p>
          <p className="font-medium">9:00 am a 19:00hrs</p>
        </div>
      </motion.div>
    </div>
  )
}
