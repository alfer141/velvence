"use client"
import { useState } from "react"
import type React from "react"
import Link from "next/link"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Script from "next/script";

<Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  async
  defer
/>

export default function AgendarCita() {
  const [formData, setFormData] = useState({
    clinica: "",
    nombre: "",
    telefono: "",
    email: "",
    aceptaOfertas: false,
  })

  const handleSubmit = (_e: React.FormEvent) => {
    // Allow native form submit to Formspree.
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header variant="static" />

      <main className="max-w-screen-xl  mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl lg:text-5xl font-light text-primary-dark mb-8">Agendar cita</h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://formspree.io/f/xjgvlggo"
              method="POST"
            >
            <input type="hidden" name="_redirect" value="https://velvence.mx/agendar-cita/registro-recibido" />
            <input type="hidden" name="clinica" value={formData.clinica} />
            <input type="hidden" name="nombre" value={formData.nombre} />
            <input type="hidden" name="aceptaOfertas" value={formData.aceptaOfertas ? "si" : "no"} />
              {/* Clinic Selection */}
              <div className="space-y-2">
                <Label htmlFor="clinica" className="text-sm text-gray-600 font-normal">
                  Selecciona tu clínica
                </Label>
                <Select
                  value={formData.clinica}
                  onValueChange={(value) => setFormData({ ...formData, clinica: value })}
                >
                  <SelectTrigger
                    id="clinica"
                    className="w-full h-12 bg-secondary-light/30 border-0 rounded-md text-primary-dark"
                  >
                    <SelectValue placeholder="Selecciona clínica" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="qro-constituyentes">Querétaro - Prol. Constituyentes</SelectItem>
                    <SelectItem value="edomex-ODA">Edo. Mex - Ojo de Agua</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-sm text-gray-600 font-normal">
                  Nombre completo
                </Label>
                <Input
                  name="nombre"
                  id="nombre"
                  type="text"
                  placeholder="Nombre completo*"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="h-12 bg-secondary-light/30 border-0 rounded-md text-primary-dark placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-sm text-gray-600 font-normal">
                  Número de contacto
                </Label>
                <Input
                  name="telefono"
                  id="telefono"
                  type="tel"
                  placeholder="Número de contacto*"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="h-12 bg-secondary-light/30 border-0 rounded-md text-primary-dark placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-600 font-normal">
                  Correo electrónico
                </Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Correo electrónico*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-secondary-light/30 border-0 rounded-md text-primary-dark placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                    name="ofertas"
                  id="ofertas"
                  checked={formData.aceptaOfertas}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      aceptaOfertas: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <Label htmlFor="ofertas" className="text-sm text-gray-600 font-normal leading-relaxed cursor-pointer">
                  Me gustaría recibir ofertas y novedades de Velvence
                </Label>
              </div>
              <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAAACJpgfmlcis0Dngh"
                    />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary-dark hover:bg-primary-dark/90 text-white rounded-md font-normal"
              >
                Solicitar cita
              </Button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 leading-relaxed">
                Al enviar este formulario, aceptas nuestros <Link href="/terminos-y-condiciones">Términos y Condiciones</Link> y el Aviso de Privacidad, y autorizas el contacto por parte de Velvence para dar seguimiento a tu solicitud.
              </p>
            </form>
          </motion.div>

          {/* Right Column - Image with Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/citas/agendar-cita-main.webp"
                alt="Sonrisa Velvence"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white text-2xl lg:text-3xl font-light leading-relaxed text-balance"
                  >
                    Tu sonrisa es el reflejo <br /> de ser imparable
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-white/80 text-sm mt-4"
                  >
                    [velvence]
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
