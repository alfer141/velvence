"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    title: "Protocolo EMS AirFlow Biofilm Guide",
    description:
      "Elimina las manchas de tus dientes con tecnología EMS AirFlow para una limpieza dental profunda y precisa, enfocada en eliminar biofilm de forma eficaz y cómoda, respetando el esmalte y la salud bucal.",
    stat: "20%",
    logo: "/images/global/ems_logo.svg",
    logoAlt: "EMS AirFlow Logo",
  },
  {
    title: "Sistema de blanqueamiento Philips Zoom!",
    description:
      "Trabajamos con Philips Zoom, un sistema de blanqueamiento dental profesional que permite aclarar hasta 8 tonos en una sola sesión, con protocolos seguros, sin dolor y resultados visibles desde el primer momento.",
    stat: "5X",
    logo: "/images/global/philips_zoom_logo.svg",
    logoAlt: "Philips Zoom Logo",
  },
  {
    title: "Protocolo de confort y relajación velvence",
    description:
      "Integramos un protocolo de confort diseñado para reducir tensión e inducir a una relajación profunda (tipo spa) durante el tratamiento, transformando el blanqueamiento dental en una experiencia única y sensorial.",
    stat: "5X",
    logo: "/images/global/therabody_logo.svg",
    logoAlt: "Therabody Logo",
  },
]

export function TechnologySection() {
  return (
    <section className="relative py-16 md:py-24 bg-sand">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm md:text-base text-primary-dark mb-4">[Tecnología]</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark leading-tight">
              Priorizamos un enfoque avanzado basado en resultados, confort y ciencia
            </h2>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base md:text-lg text-primary-dark/80 leading-relaxed">
              Somos el primer centro especializado en blanqueamiento dental en México, 
              con sede principal en Querétaro que integra tecnología avanzada, protocolos 
              clínicos confort para ofrecer resultados precisos y una experiencia única en 
              cada tratamiento de limpieza y blanqueamiento dental.
            </p>
          </motion.div>
        </div>

        {/* Technology Cards */}
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
              {/* Card Header */}
              <div>
                <h3 className="text-xl md:text-2xl font-normal text-primary-dark mb-4 leading-tight">{tech.title}</h3>
                <p className="text-sm md:text-base text-primary-dark/70 leading-relaxed mb-8">{tech.description}</p>
              </div>

              {/* Card Footer */}
              <div className="flex items-end justify-between">
                <div className="text-5xl md:text-6xl font-light text-primary-dark">{tech.stat}</div>
                <div className="flex items-center justify-center w-20 h-12 md:w-24 md:h-14">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.logoAlt}
                    width={96}
                    height={56}
                    className="w-full h-auto object-contain opacity-60"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
          {/* Video Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-light text-primary-dark text-center mb-8">
            Limpieza dental profunda con tecnología EMS Airflow VS Limpieza tradicional
          </h3>
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://customer-o3u27h8xl72n98rq.cloudflarestream.com/70fb4ea16794b54aa85508e5ac3de73d/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-o3u27h8xl72n98rq.cloudflarestream.com%2F70fb4ea16794b54aa85508e5ac3de73d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-none rounded-2xl"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
