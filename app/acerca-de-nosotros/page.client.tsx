"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ReviewsSection } from "@/components/sections/home/reviews-section"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

const carouselImages = [
  "/images/carrusel/Airflow EMS Blanqueamiento dental Profesional.webp",
  "/images/carrusel/Clinica de Blanqueamiento dental.webp",
  "/images/carrusel/aclarado-dental-en clinica.webp",
  "/images/carrusel/biofilm.webp",
  "/images/carrusel/blanqueamiento dental consultorio.webp",
  "/images/carrusel/blanqueamiento dental queretaro.webp",
  "/images/carrusel/blanqueamiento dental zoom.webp",
  "/images/carrusel/blanquear dientes amarillos.webp",
  "/images/carrusel/ems-limpieza.webp",
  "/images/carrusel/philips-blanqueamiento.webp",
]

const visionElements = [
  {
    icon: "/images/about/icon_tech.svg",
    title: "Tecnología de vanguardia",
    description:
      "Equipamiento de última generación que garantiza tratamientos de primera clase con los más altos estándares.",
  },
  {
    icon: "/images/about/icon_exp.svg",
    title: "Eficiencia excepcional",
    description:
      "Procesos optimizados y atención enfocada en obtener los mejores resultados en el menor tiempo posible.",
  },
  {
    icon: "/images/about/icon_health.svg",
    title: "Salud prioritaria",
    description:
      "Protocolos de higiene y seguridad que protegen tu bienestar en cada visita, cumpliendo con las normas más estrictas.",
  },
]

const branches = [
  {
    id: 1,
    name: "Sucursal Marqués",
    address: "Blv. De la Luz, Adolfo López Mateos, Qro. Mex",
    image: "/placeholder.svg?height=444&width=826",
  },
  {
    id: 2,
    name: "Sucursal AIFA",
    address: "Blv. De la Luz, Adolfo López Mateos, Qro. Mex",
    image: "/placeholder.svg?height=444&width=826",
  },
]

export function AboutUsClientPage() {
  const [totalWidth, setTotalWidth] = useState(0)
  const repeatedImages = [...carouselImages, ...carouselImages]

  useEffect(() => {
    // Calculate total width: (image width + margin) * number of images
    const imageWidth = 384 // w-96 = 24rem = 384px
    const margin = 16 // mx-2 = 0.5rem * 2 = 16px
    setTotalWidth((imageWidth + margin) * carouselImages.length)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Nav */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-secondary-light overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/aboutUs_main.webp"
            alt="Velvence About Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-light/80 to-secondary-light/60" />
        </div>

        {/* Nav inside hero */}
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
            [Acerca de Nosotros]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark mb-6"
          >
            Elevamos la experiencia del cuidado bucal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-dark/80 leading-relaxed max-w-3xl mx-auto"
          >
            El bienestar, la apariencia y la salud están estrechamente relacionados, creemos profundamente que cada
            persona debe tener acceso a una <span className="font-medium">guía de una vida saludable</span>, brindamos
            servicios de limpieza y blanqueamiento dental de vanguardia, con un enfoque inmediato en la salud bucal
            acompañada de un resultado visible en la sonrisa.
          </motion.p>
        </div>
      </section>

      {/* 4-Image Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {carouselImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Velvence clínica imagen ${index + 1}`}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Así nace Velvence Section with Gradient Background */}
      <section className="relative py-20 lg:py-32">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 mx-auto"
          style={{
            width: "90.35%",
            height: "83.45%",
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.00) 5%, #FFFFFF 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Así nace Velvence */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
            {/* Left: Image Placeholder (1:1 ratio) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-lg overflow-hidden bg-secondary-light/30"
            >
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Origen de Velvence"
                fill
                className="object-cover"
              />
              {/* Yellow Badge */}
              <div className="absolute bottom-8 left-8 bg-accent text-primary-dark px-6 py-3 rounded-full font-medium">
                Descúbrenos
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm font-medium text-primary-dark/60">[Historia]</p>
              <h2 className="text-3xl lg:text-4xl font-light text-primary-dark">Así nace Velvence</h2>
              <div className="space-y-4 text-primary-dark/70 leading-relaxed">
                <p>
                  Velvence nace de la unión de dos grandes motivaciones: la pasión de la Dra. Ofelia por el autocuidado,
                  el bienestar y la salud bucal, y el entusiasmo de Alex., su esposo, por la experiencia, el diseño y la
                  innovación.
                </p>
                <p>
                  Juntos, como equipo, conceptualizamos Velvence como el primer centro en México verdaderamente
                  especializado en transformar el cuidado bucal, poniendo en el centro tratamientos fundamentales como
                  la profilaxis y el blanqueamiento dental, entendidos no solo como procedimientos estéticos, sino como
                  parte de una experiencia integral de salud y confianza
                </p>
              </div>
            </motion.div>
          </div>

          {/* Nuestra visión innovadora */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-light text-primary-dark max-w-3xl mx-auto">
              Nuestra visión innovadora se manifiesta en distintos elementos:
            </h2>
          </motion.div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {visionElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={element.icon || "/placeholder.svg"}
                    alt={element.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-medium text-primary-dark">{element.title}</h3>
                <p className="text-primary-dark/70 leading-relaxed">{element.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section with Sticky Left Column */}
      <section className="py-20 lg:py-32 bg-secondary-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-32 space-y-6">
                <p className="text-sm font-medium text-primary-dark/60">[Ubicaciones]</p>
                <h2 className="text-3xl lg:text-4xl font-light text-primary-dark">
                  Varias ubicaciones, misma experiencia
                </h2>
                <p className="text-primary-dark/70 leading-relaxed">
                  Donde sea que nos visites, recibirás el mismo nivel de excelencia, atención personalizada y resultados
                  excepcionales que definen a nuestra marca.
                </p>
              </div>
            </div>

            {/* Right Column - Branch Cards */}
            <div className="lg:col-span-7 space-y-8">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #F2F7F9 0%, #E0EBF1 49%)",
                    maxWidth: "826px",
                    minHeight: "444px",
                  }}
                >
                  <div className="p-8 lg:p-12 flex flex-col justify-between h-full min-h-[444px]">
                    {/* Top Content */}
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-primary-dark/60">[Ubicación]</p>
                      <h3 className="text-2xl lg:text-3xl font-medium text-primary-dark">{branch.name}</h3>
                      <p className="flex items-start gap-2 text-primary-dark/70">
                        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                        {branch.address}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="mt-8 aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={branch.image || "/placeholder.svg"}
                        alt={branch.name}
                        width={826}
                        height={464}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6 px-6 py-3 bg-white/50 hover:bg-white/70 text-primary-dark rounded-lg font-medium transition-colors w-fit">
                      Solicitar cita
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-light text-primary-dark text-center"
          >
            Un vistazo a nuestra clínica
          </motion.h2>
        </div>

        <div className="overflow-hidden w-full" role="region" aria-label="Galería de servicios de Velvence">
          <motion.div
            className="flex"
            style={{ width: totalWidth * 2 }}
            animate={{ x: [-0, -totalWidth] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              duration: 78,
            }}
          >
            {repeatedImages.map((src, idx) => (
              <img
                key={idx}
                src={src || "/placeholder.svg"}
                alt={`Clínica Velvence imagen ${idx + 1}`}
                className="rounded-lg object-cover mx-2 shadow transition-transform duration-300"
                style={{ width: "250px", aspectRatio: "4/5" }}
                loading="lazy"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section - Reused from Home */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
