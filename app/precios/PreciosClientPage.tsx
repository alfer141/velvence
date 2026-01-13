"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, CircleCheckBig } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"

export function PreciosClientPage() {
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
    question: "¿Qué incluye exactamente  el costo del blanqueamiento dental?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          Nuestro protocolo de: Aclaramiento Dental Clínico con un costo de
          $5,800 mxn incluye:
        </p>

        <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
          <li>
            Examen dental para evaluar la salud general de tus dientes y encías.
          </li>
          <li>
            Profilaxis (limpieza dental profunda) debajo de la línea de las
            encías para eliminar la acumulación de bacterias (biofilm) con
            tecnología EMS Dental (Airflow).
          </li>
          <li>
            Sesión de blanqueamiento de 30 a 45 minutos con tecnología Philips
            Zoom.
          </li>
          <li>
            Extras de confort como: SmartGoggles, Theragun y audífonos relajantes
            para una experiencia placentera.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "¿El blanqueamiento dental duele o causa sensibilidad?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          No el blanqueamiento dental no causa dolor.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Nuestro protocolo de blanqueamiento dental profesional está diseñado
          para que el tratamiento sea cómodo y, en la gran mayoría de los casos,
          indoloro, minimizando al máximo la sensibilidad.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Antes de iniciar, realizamos una valoración clínica para confirmar que
          eres candidato y ajustar el procedimiento a tu caso. Durante la sesión
          cuidamos cada variable que influye en la sensibilidad y en los
          resultados: sellado gingival para proteger encías, tiempo de exposición
          controlado, concentración del gel adecuada y un protocolo de aplicación
          supervisado.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Si llegara a presentarse sensibilidad, suele ser leve y temporal, y
          contamos con medidas específicas para controlarla sin comprometer el
          resultado.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Cuánto duran los resultados del blanqueamiento dental y como alargo los resultados?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          Los resultados suelen durar hasta un año o incluso más siempre y cuando
          tengas los cuidados adecuados como:
        </p>

        <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
          <li>Una adecuada higiene regular.</li>
          <li>Recomendamos Limpiezas periódicas cada 6 u 8 Meses.</li>
        </ul>

        <p className="text-sm leading-relaxed mt-3">
          En consulta te orientamos a detalle sobre como cuidar tus resultados.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Qué diferencia hay entre el  protocolo Biofilm  y el Blanqueamiento Dental clínico en Velvence?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          En Velvence ofrecemos tratamientos preventivos y estéticos con un
          impacto directo e inmediato tanto en la salud bucal como en la
          confianza de nuestros pacientes.
        </p>

        <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
          <li>
            Protocolo Biofilm Control: Es una limpieza dental profunda enfocada
            en eliminar el biofilm y mejorar la salud de encías y dientes.
          </li>
          <li>
            Protocolo de Aclaramiento Dental Clínico: Incluye el Protocolo
            Biofilm + la sesión de blanqueamiento con tecnología Philips Zoom
            para lograr un tono más claro de forma segura y controlada.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Cuántos tonos puedo aclarar y de que depende el resultado?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          Con nuestro protocolo de Blanqueamiento dental hemos registrado hasta 8
          tonos con una única sesión en la escala VITA. Siendo 5, o 6 tonos el
          resultado más común entre nuestros pacientes y esto depende de los
          siguientes factores:
        </p>

        <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
          <li>
            El color inicial: Los dientes que inician e protocolo en tonos más
            obscuros suelen mostrar un cambio mucho más notorio.
          </li>
          <li>
            El tipo de manchas, si las manchas son extrínsecas como: (Café, té,
            tabaco, o pigmentos alimenticios) suelen responder mejor al
            tratamiento.
          </li>
          <li>
            Estructura del diente como: El esmalte, color de la dentina y la
            translucidez del diente estos factores varían en como se muestra el
            resultado final.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "¿El blanqueamiento dental daña  el esmalte?",
    answer: (
      <p className="text-sm leading-relaxed">
        No. Cuando el blanqueamiento se realiza de forma clínica y supervisada,
        no daña el esmalte. En Velvence hacemos una valoración previa y
        ajustamos concentración del gel y tiempos de exposición para cuidar tu
        salud bucal y minimizar la sensibilidad.
      </p>
    ),
  },
  {
    question: "¿Quién NO es candidato ideal para blanqueamiento? ",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          El blanqueamiento dental no se realiza en pacientes en embarazo o
          lactancia.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Además, si tienes restauraciones en los dientes frontales (como
          carillas, resinas o amalgamas), es importante saber que no cambian de
          color con el blanqueamiento, por lo que primero evaluamos tu caso para
          evitar diferencias de tono.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Por último, el tratamiento no se recomienda cuando el cambio de color
          se debe principalmente a manchas por tetraciclinas o hipomineralización,
          ya que los resultados pueden ser limitados o poco predecibles.
        </p>
      </>
    ),
  },
  {
    question: "¿Cuáles son los cuidados posteriores al aclarado dental?",
    answer: (
      <p className="text-sm leading-relaxed">
        No se requiere ningún cuidado en especial más allá de tu cepillado
        regular. Únicamente, el día de la aplicación, para evitar cualquier
        posible incomodidad, deberás evitar bebidas muy calientes o muy frías,
        ya que puede presentarse sensibilidad temporal (Un día como máximo)
        después del blanqueamiento.
      </p>
    ),
  },
  {
    question: "¿Qué formas de pago aceptan? ¿Ofrecen meses sin intereses?",
    answer: (
      <>
        <p className="text-sm leading-relaxed">
          Aceptamos múltiples formas de pago para tu comodidad: efectivo,
          transferencia y todas las tarjetas de débito o crédito.
        </p>

        <p className="text-sm leading-relaxed mt-3">
          Si quieres saber si hay alguna promoción activa de meses sin intereses,
          te recomendamos preguntar directamente en nuestros canales de contacto
          principales: Instagram o WhatsApp.
        </p>
      </>
    ),
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
            <motion.h1 className="text-4xl font-bold text-center text-primary-dark mt-12 mb-2">
              Protocolos y precios
            </motion.h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Descubre los distintos servicios que ofrecemos en Velvence para fomentar tu salud
             bucal e impulsar  tu confianza con una nueva experiencia. 
            </p>
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
                Aquí encontrarás todo lo que necesitas saber antes de iniciar: costos, pasos del protocolo,
                cuidados posteriores y criterios de elegibilidad. Nuestro objetivo es que tengas expectativas 
                realistas y una experiencia cómoda, con resultados medibles y un plan claro de mantenimiento.

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
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer">
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
                          {faq.answer}
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
