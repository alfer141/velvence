"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { InfiniteCarousel } from "./infinite-carousel"

export function FeaturesSection() {
  return (
    <section id="servicios" className="relative bg-sand-50 pt-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm md:text-base text-primary-dark/70 font-medium tracking-wide">
            Tecnología y marcas que para garantizar resultados asombrosos
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <InfiniteCarousel />

        {/* Divider */}
        <div className="border-t border-dashed border-black/30" />

        {/* Content with text and image */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mt-24">
          {/* Right side text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-2"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-primary-dark max-w-xl">
              Trabajamos con tecnología avanzada y marcas líderes en blanqueamiento y limpieza dental para resultados efectivos, seguros y que amarás. Cada protocolo está pensado para proteger la salud de tus dientes mientras les devuelve su brillo natural. Aquí, nuestra técnica se une con una experiencia diseñada para sentirse cómoda y extraordinaria.
            </p>
          </motion.div>
        </div>

        {/* Full width image section - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl overflow-hidden mt-12 md:mt-16"
        >
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/images/home/aboutUs_image_1.webp"
              alt="Sección de tratamiento"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
