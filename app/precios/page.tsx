"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, CircleCheckBig } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"

export default function PreciosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const pricingCards = [
    {
      label: "[Protocolo]",
      title: "Biofilm",
      description: "Limpieza profunda (Profilaxis) con tecnología avanzada, de EMS y Biofilm Guide",
      price: "$1900",
      currency: "MXN",
      icon: "/images/pricing/airfllow.png",
      includes: ["Profilaxis profesional con tecnología suiza EMS Airflow® (GBT Lounge)", "Protocolo de confort"],
    },
    {
      label: "[Protocolo de]",
      title: "Aclaramiento dental clínico",
      description:
        "Todo el poder y frescura de la profilaxis dental avanzada con tecnología SUIZA EMS Airflow + Sesiones de aclaramiento dental clínico con tecnología de Philips Zoom",
      price: "$5,800",
      currency: "MXN",
      icon: "/images/pricing/full_protocol.webp",
      includes: [
        "Profilaxis profesional con tecnología suiza EMS Airflow® (GBT Lounge)",
        "Sesión de Blanqueamiento dental clínico con tecnología Philips Zoom®",
        "Protocolo de confort",
      ],
    },
  ]

  const faqs = [
    {
      question: "¿Cuánto duran los resultados?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "¿Cuánto duran los resultados?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "¿Cuánto duran los resultados?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "¿Cuánto duran los resultados?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "¿Cuánto duran los resultados?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main
        className="relative min-h-screen"
        style={{
          backgroundImage: "url('/images/pricing/pricing_main_bg_op.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6 mb-12">
          <Header variant="floating" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-[#F1F5F7] rounded-3xl p-8 relative"
            >
              {/* Icon in top right */}
              <div className="absolute top-8 right-8">
                <Image
                  src={pricingCards[0].icon || "/placeholder.svg"}
                  alt={pricingCards[0].title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Label */}
              <p className="text-xs text-gray-500 mb-2">{pricingCards[0].label}</p>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">{pricingCards[0].title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-8 leading-relaxed pr-12">{pricingCards[0].description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary-dark">{pricingCards[0].price}</span>
                <span className="text-base text-gray-500 ml-2">{pricingCards[0].currency}</span>
              </div>

              <Link href="/agendar-cita">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#E6EDF1] border border-[#C2D2D9] text-primary-dark font-medium py-3 rounded-lg hover:bg-[#d9e3e8] transition mb-8"
                >
                  RESERVAR AHORA
                </motion.button>
              </Link>

              <div>
                <p className="text-xs text-gray-500 mb-4">Incluye:</p>
                <ul className="space-y-3">
                  {pricingCards[0].includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-7 bg-[#F1F5F7] rounded-3xl p-8 relative"
            >
              {/* Icon in top right */}
              <div className="absolute top-8 right-8">
                <Image
                  src={pricingCards[1].icon || "/placeholder.svg"}
                  alt={pricingCards[1].title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Label */}
              <p className="text-xs text-gray-500 mb-2">{pricingCards[1].label}</p>

              {/* Title */}
              <h3 className="text-3xl font-semibold text-primary-dark mb-4">{pricingCards[1].title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-8 leading-relaxed pr-20">{pricingCards[1].description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary-dark">{pricingCards[1].price}</span>
                <span className="text-lg text-gray-500 ml-2">{pricingCards[1].currency}</span>
              </div>

              <Link href="/agendar-cita">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#E6EDF1] border border-[#C2D2D9] text-primary-dark font-medium px-8 py-3 rounded-lg hover:bg-[#d9e3e8] transition mb-8 inline-block"
                >
                  RESERVAR AHORA
                </motion.button>
              </Link>

              <div>
                <p className="text-xs text-gray-500 mb-4">Incluye:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pricingCards[1].includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Headers and description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-start"
            >
              <p className="text-sm text-gray-500 mb-4">[Preguntas frecuentes]</p>

              <h3 className="text-4xl lg:text-5xl font-light text-primary-dark mb-8 leading-tight">
                Todo lo que necesitas saber antes de tu tratamiento
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Right side - FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className={`w-full px-6 py-5 flex items-center justify-between transition ${
                      openFaq === index ? "bg-primary-dark text-white" : "bg-white text-primary-dark hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-medium text-left">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 bg-primary-dark text-white">
                          <p className="text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
