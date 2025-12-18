"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ReviewsSection } from "@/components/sections/home/reviews-section"

export default function BlanqueamientoDentalPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const features = [
    {
      icon: "gleam_acent.svg",
      title: "Prevenir y mejora salud de la boca",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: "gleam_black.svg",
      title: "Elimina manchas superficiales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: "health.svg",
      title: "Preserva y mejora tu sonrisa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ]

  const includes = [
    "Eliminación de placa y sarro (GBT protocol)",
    "Sesión de EMS Airflow",
    "Revisión de la salud de tus encías",
    "Tratamiento por horas ácido de las manchas",
  ]

  const carouselImages = [
    "Airflow EMS Blanqueamiento dental Profesional.webp",
    "Clinica de Blanqueamiento dental.webp",
    "aclarado-dental-en clinica.webp",
    "biofilm.webp",
    "blanqueamiento dental consultorio.webp",
    "blanqueamiento dental queretaro.webp",
    "blanqueamiento dental zoom.webp",
    "blanquear dientes amarillos.webp",
    "ems-limpieza.webp",
    "philips-blanqueamiento.webp",
  ]

  const faqs = [
    {
      question: "If you don't see your question here send a massage directly to our team",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can you help me meet sustainable foodie bloggers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How is your approach different from traditional consulting firms?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Do you have speakers for global summits?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do we get started with Lifecycle?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Nav */}
      <section className="relative min-h-screen bg-primary-dark text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/treatments/bg_treatment.webp"
            alt="Treatment background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-20">
          <Header variant="floating" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/treatments/main_image.webp"
              alt="Blanqueamiento dental"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-accent text-sm font-medium">[Tratamientos]</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">Limpieza dental profesional</h1>
            <p className="text-lg text-secondary-light leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-secondary-light line-through">$2,500mxn</span>
                <span className="text-3xl font-medium text-accent">$1,900mxn</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-sm">
                <p className="text-secondary-light">Duración de la cita:</p>
                <p className="font-medium">45 - 60 minutos</p>
              </div>
            </div>
            <Link
              href="/agendar-cita"
              className="inline-block px-8 py-4 bg-accent text-primary-dark font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Solicitar cita
            </Link>
            {/* Features with LED Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Image src="/images/led-icons/gleam_acent.svg" alt="Icon" width={24} height={24} />
                <div className="text-sm">
                  <p className="font-medium">Limpieza suave y sin dolor</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Image src="/images/led-icons/health.svg" alt="Icon" width={24} height={24} />
                <div className="text-sm">
                  <p className="font-medium">Atención y protocolos personalizados</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Image src="/images/led-icons/gleam_black.svg" alt="Icon" width={24} height={24} />
                <div className="text-sm">
                  <p className="font-medium">Experiencia única y relajante tipo SPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-accent text-sm font-medium">[Beneficios]</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-primary-dark">
              Un tratamiento ideal para renovar tu sonrisa
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat
            </p>
            <Link
              href="/precios"
              className="inline-block text-primary-dark font-medium hover:text-accent transition-colors"
            >
              Ver más →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
          >
            <Image src="/images/home/aboutUs_image_1.webp" alt="Dental treatment" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-32 bg-arena">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <p className="text-accent text-sm font-medium">[Acerca de]</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-primary-dark">
              Una limpieza dental con nosotros incluye
            </h2>

            <ul className="space-y-4">
              {includes.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg text-primary-dark">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Velvence es la única clínica de blanqueamiento y odontología de alta tecnología en Querétaro certificada
              en el protocolo GBT (Guided Biofilm Therapy) por EMS de Suiza. Nuestro objetivo es que vivas una
              experiencia en armonía a través de ciencia, tecnología y confort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/20 to-accent/10 rounded-2xl" />
              <Image
                src="/images/treatments/main_image.webp"
                alt="Treatment product"
                fill
                className="object-contain p-8"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-secondary-light/90 backdrop-blur-sm rounded-xl p-6 text-primary-dark">
              <p className="text-sm font-medium mb-1">Biofilm</p>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Cards with LED Icons */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <Image
                    src={`/images/led-icons/${feature.icon}`}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium text-primary-dark">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Infinite Carousel Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2 {...fadeInUp} className="text-3xl lg:text-4xl font-light text-primary-dark text-center">
            Un vistazo a nuestra clínica
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...carouselImages, ...carouselImages].map((image, index) => (
              <div key={index} className="relative flex-shrink-0 w-[250px] aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={`/images/carrusel/${image}`}
                  alt={`Clinic view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-arena">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-accent text-sm font-medium">[Ask us about]</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-primary-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you don't see your question here send a message directly to our team. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-primary-dark">{faq.question}</span>
                  <span className="text-xl text-gray-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
