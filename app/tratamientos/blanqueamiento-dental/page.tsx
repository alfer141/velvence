"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CircleCheckBig } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"

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

export default function BlanqueamientoDentalPage() {
  const [activeTab, setActiveTab] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const features = [
    {
      icon: "gleam_acent.svg",
      title: "Previene y repara caries en etapa temprana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      icon: "gleam_black.svg",
      title: "Elimina manchas superficiales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      icon: "health.svg",
      title: "Preserva y repara el esmalte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ]

  const tabItems = [
    {
      icon: "shield-check",
      title: "Eliminación de placa y Sarro (GBT protocol)",
      description:
        "Fieldwork is an architecture firm defined by a minimal yet human-centered philosophy. Guided by decades of collective expertise, our team approaches every project with rigor, precision, and creativity. We believe architecture should not chase trends but instead embody clarity, restraint, and long-lasting value.",
    },
    {
      icon: "book-open",
      title: "Examen dental",
      description:
        "Durante el examen dental realizamos una evaluación completa de tu salud bucal, identificando cualquier problema potencial antes de que se convierta en algo más serio.",
    },
    {
      icon: "search",
      title: "Revisión de la salud de las encías",
      description:
        "Evaluamos cuidadosamente el estado de tus encías para detectar signos tempranos de enfermedad periodontal y asegurar la salud integral de tu boca.",
    },
    {
      icon: "droplet",
      title: "Tratamiento con flúor (sólo si es necesario)",
      description:
        "Aplicamos tratamiento de flúor cuando es necesario para fortalecer el esmalte dental y prevenir la formación de caries.",
    },
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

  const technologies = [
    {
      title: "Previene y repara caries en etapa temprana ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stat: "20%",
      logo: "/images/global/ems_logo.svg",
      logoAlt: "EMS AirFlow Logo",
      icon: "gleam_black.svg",
    },
    {
      title: "Elimina manchas superficiales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stat: "5X",
      logo: "/images/global/philips_zoom_logo.svg",
      logoAlt: "Philips Zoom Logo",
      icon: "gleam_black.svg",
    },
    {
      title: "Preserva y repara el esmalte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stat: "5X",
      logo: "/images/global/therabody_logo.svg",
      logoAlt: "Therabody Logo",
      icon: "gleam_black.svg",
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
            whileInView={{ opacity: 1, x: 0 }}
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

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-sm font-medium text-primary opacity-70">[Acerca de]</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-primary-dark">
                Un tratamiento ideal para renovar tu sonrisa
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed">
                Fieldwork is an architecture firm defined by a minimal yet human-centered philosophy. Guided by decades
                of collective expertise, our team approaches every project with rigor, precision, and creativity. We
                believe architecture should not chase trends but instead embody clarity, restraint, and long-lasting
                value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our practice spans across scales and disciplines. From residential and commercial architecture to
                cultural institutions and urban design. By blending technical expertise with cultural awareness, we
                create environments that respect context, enhance functionality, and inspire those who experience them.
              </p>
              <Link
                href="/acerca-de-nosotros"
                className="inline-block text-primary-dark font-medium hover:text-accent transition-colors"
              >
                Conocenos →
              </Link>
            </motion.div>
          </div>

          {/* Full-Width Image with EMS Logo Overlay and Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: "467px" }}
          >
            <Image
              src="/images/home/velvence_main_bg.webp"
              alt="Dental treatment"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
              <div className="relative z-10 max-w-2xl p-12 text-white space-y-8">
                <Image src="/images/global/ems-white.svg" alt="EMS Logo" width={120} height={60} className="mb-6" />
                <p className="text-xl font-medium mb-6">
                  Tu limpieza dental
                  <br />
                  se trabaja con tecnología
                  <br />
                  EMS AirFlow
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Eliminación efectiva del Biofilm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Método mucho más suave y menos abrasivo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Mejora de la salud de encías</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-[#EEECE8] opacity-85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Tab Interface */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <p className="text-sm font-medium mb-4 text-primary opacity-75">[Beneficios]</p>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-primary-dark mb-8">
                  Una limpieza dental con nosotros incluye:
                </h3>
              </div>

              {/* Tab Items with Dashed Borders */}
              <div className="space-y-0 border-t border-dashed border-gray-300">
                {tabItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left py-6 border-b border-dashed border-gray-300 transition-colors ${
                      activeTab === index ? "bg-white/50" : "hover:bg-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeTab === index ? "bg-accent" : "bg-gray-200"
                        }`}
                      >
                        {item.icon === "shield-check" && (
                          <svg
                            className={`w-5 h-5 text-foreground ${activeTab === index ? "text-white" : "text-gray-600"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="text-foreground"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        )}
                        {item.icon === "book-open" && (
                          <svg
                            className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-gray-600"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="text-foreground"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                        {item.icon === "search" && (
                          <svg
                            className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-gray-600"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="text-primary"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        )}
                        {item.icon === "droplet" && (
                          <svg
                            className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-gray-600"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="text-primary"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        )}
                      </div>
                      <span className={`font-medium ${activeTab === index ? "text-primary-dark" : "text-gray-600"}`}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <p className="text-gray-600 leading-relaxed">{tabItems[activeTab].description}</p>
              </motion.div>
            </motion.div>

            {/* Right: Static Image with Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image src="/images/treatments/main_image.webp" alt="Treatment product" fill className="object-cover" />
              </div>
              {/* Backdrop Blur Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-xl p-8 border-t border-white/30">
                <Image src="/images/global/ems-white.svg" alt="EMS Logo" width={100} height={50} className="mb-3" />
                <p className="text-white font-medium text-lg">
                  Tu limpieza dental
                  <br />
                  se trabaja con tecnología EMS Airflow
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full border-t-2 border-dashed border-gray-400 my-16" />

          <div className="mb-12">
            <p className="text-sm md:text-base text-primary-dark mb-4 text-center">[Beneficios]</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F7F6F4] p-6 md:p-8 rounded-lg border-b-[3px] border-accent flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <Image
                    src={`/images/led-icons/${tech.icon}`}
                    alt={tech.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <h3 className="text-xl md:text-2xl font-normal text-primary-dark mb-4 leading-tight">{tech.title}</h3>
                  <p className="text-sm md:text-base text-primary-dark/70 leading-relaxed mb-8">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Cards with LED Icons */}

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
            <p className="text-sm font-medium text-primary opacity-75">[Ask us about]</p>
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
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-lg overflow-hidden border transition-all duration-300 ${
        isOpen ? "border-primary-dark bg-primary-dark" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-opacity-90 ${
          isOpen ? "bg-primary-dark" : "hover:bg-gray-50"
        }`}
      >
        <span className={`font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-primary-dark"}`}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-xl transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-400"}`}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`overflow-hidden border-t transition-colors duration-300 ${
              isOpen ? "border-white/20 bg-primary-dark" : ""
            }`}
          >
            <div className={`px-6 py-6 transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-600"}`}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
