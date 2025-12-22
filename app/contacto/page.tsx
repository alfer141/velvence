"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export default function ContactoPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      description: "Llámanos de lunes a sábado",
      info: "+52 (442) 123 4567",
      action: "tel:+524421234567",
      color: "bg-accent/10",
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      description: "Escríbenos en cualquier momento",
      info: "contacto@velvence.com",
      action: "mailto:contacto@velvence.com",
      color: "bg-secondary-light/50",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Síguenos y manda mensaje",
      info: "@velvence.mx",
      action: "https://instagram.com/velvence.mx",
      color: "bg-accent/10",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Envíanos un mensaje",
      info: "Velvence",
      action: "https://facebook.com/velvence",
      color: "bg-secondary-light/50",
    },
  ]

  const locations = [
    {
      name: "Sucursal Marqués",
      address: "Blv. De la Luz, Adolfo López Mateos",
      city: "Querétaro, Qro. México",
      phone: "+52 (442) 123 4567",
      schedule: "Lun - Vie: 9:00 AM - 7:00 PM\nSáb: 10:00 AM - 2:00 PM",
    },
    {
      name: "Sucursal AIFA",
      address: "Blv. De la Luz, Adolfo López Mateos",
      city: "Querétaro, Qro. México",
      phone: "+52 (442) 765 4321",
      schedule: "Lun - Vie: 9:00 AM - 7:00 PM\nSáb: 10:00 AM - 2:00 PM",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Nav */}
      <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pricing/pricing_main_bg_op.webp"
            alt="Velvence Contacto Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-light/70 to-secondary-light/50" />
        </div>

        {/* Nav inside hero without background */}
        <div className="relative z-10">
          <Header variant="floating" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 lg:pt-48 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary-dark mb-4"
          >
            [Contacto]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark mb-6"
          >
            Estamos aquí para ti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-dark/80 leading-relaxed max-w-2xl mx-auto"
          >
            Comunícate con nosotros por el medio que prefieras. Nuestro equipo está listo para atenderte y resolver
            todas tus dudas sobre nuestros tratamientos.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary-dark/60 mb-4">[Medios de contacto]</p>
            <h2 className="text-3xl lg:text-4xl font-light text-primary-dark">Elige cómo comunicarte</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${method.color} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="w-7 h-7 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-medium text-primary-dark">{method.title}</h3>
                  <p className="text-sm text-primary-dark/70">{method.description}</p>
                  <p className="text-base font-medium text-primary-dark">{method.info}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-secondary-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary-dark/60 mb-4">[Nuestras ubicaciones]</p>
            <h2 className="text-3xl lg:text-4xl font-light text-primary-dark mb-6">Visítanos</h2>
            <p className="text-primary-dark/70 max-w-2xl mx-auto">
              Contamos con dos sucursales para atenderte. Agenda tu cita en la más cercana a ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-medium text-primary-dark mb-6">{location.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary-dark/60 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-dark">{location.address}</p>
                      <p className="text-primary-dark/70 text-sm">{location.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary-dark/60 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-primary-dark hover:text-primary-dark/70">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary-dark/60 flex-shrink-0 mt-1" />
                    <div className="text-primary-dark whitespace-pre-line text-sm">{location.schedule}</div>
                  </div>
                </div>

                <Link href="/agendar-cita">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-8 bg-primary-dark text-white font-medium py-3 rounded-lg hover:bg-primary-dark/90 transition"
                  >
                    Agendar cita
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-primary-dark/60 mb-4">[Envíanos un mensaje]</p>
            <h2 className="text-3xl lg:text-4xl font-light text-primary-dark mb-4">¿Tienes alguna pregunta?</h2>
            <p className="text-primary-dark/70">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-primary-dark mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-primary-dark mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                  placeholder="(442) 123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-primary-dark mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-primary-dark mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark/20 resize-none"
                placeholder="Cuéntanos más sobre tu consulta..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-dark text-white font-medium py-4 rounded-lg hover:bg-primary-dark/90 transition"
            >
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
