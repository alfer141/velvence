"use client"

import { motion } from "framer-motion"
import { ComparisonSlider } from "./comparison-slider"

const cases = [
  { id: 1, title: "Caso 1" },
  { id: 2, title: "Caso 2" },
  { id: 3, title: "Caso 3" },
  { id: 4, title: "Caso 4" },
]

const comparisonImages = [
  {
    name: "William",
    before: "/images/patients/px_william_blanqueamiento_antes.webp",
    after: "/images/patients/px_william_blanqueamiento_desp.webp",
  },
  {
    name: "Pao",
    before: "/images/patients/px_pao_blanqueamiento_antes.webp",
    after: "/images/patients/px_pao_blanqueamiento_despues.webp",
  },
  {
    name: "Georgina",
    before: "/images/patients/px_georgina_blanqueamiento_antes.webp",
    after: "/images/patients/px_georgina_blanqueamiento_despues.webp",
  },
  {
    name: "Denisse",
    before: "/images/patients/px_denisse_blanqueamiento_antes.webp",
    after: "/images/patients/px_denisse_blanqueamiento_despues.webp",
  },
]

export function BeforeAfterGallery() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block bg-sand-20 rounded-full text-primary-dark px-4 py-1 text-sm">[Resultados reales de limpieza y blanqueamiento dental]</h2>
          <h3 className="text-3xl md:text-4xl font-bold my-4 text-primary-dark">
            Sin filtros ni trucos, resultados reales de pacientes reales
        </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Cada imagen muestra el resultado de un 
            tratamiento profesional de limpieza y blanqueamiento dental 
            realizado en consultorio. En Velvence trabajamos con protocolos personalizados que cuidan 
            la salud de tus dientes y convierten cada sesión en una experiencia cómoda, relajada y sensorial, 
            con resultados visibles y naturales desde el primer momento.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            Nuestro equipo te acompaña en cada etapa del tratamiento, desde la valoración inicial hasta el resultado final, priorizando tu comodidad, seguridad y tranquilidad durante todo el proceso. Por eso todos los antes y después que ves aquí corresponden a pacientes reales que confiaron en Velvence para mejorar su sonrisa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8" id="resultados">
          {comparisonImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ComparisonSlider
                beforeImage={image.before}
                afterImage={image.after}
                beforeAlt={`Antes del tratamiento de ${image.name}`}
                afterAlt={`Después del tratamiento de ${image.name}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {[
            {
              title: "Resultados excepcionales",
              description:
                "Trabajamos con protocolos de limpieza y blanqueamiento dental que permiten obtener resultados visibles desde la primera sesión logrando un aclarado dental de varios tonos medidos en la escala VITA, siempre bajo supervisión clínica y con tecnología especializada.",
            },
            {
              title: "Protege y respeta tu esmalte.",
              description:
                "Nuestros tratamientos dentales están diseñados para respetar la estructura natural de tus dientes, priorizando la salud del esmalte y el equilibrio de tu sonrisa mienttas se mejora su apariencia.",
            },
            {
              title: "Sensibilidad mínima o nula.",
              description:
                "En Velvence utilizamos protocolos profesionales y técnicas cuidadas que permiten minimizar la sensibilidad durante y después del tratamiento, priorizando siempre tu comodidad y bienestar.",
            },
            {
              title: "Una experiencia pensada para tu comodidad",
              description:
                "Priorizamos una experiencia dental confortable, en un entorno relajado y con técnicas que reducen molestias, para que cada visita se sienta como una experiencia tranquila, sregura y muy agradable",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl mb-2 font-semibold text-primary-dark">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
