"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { InfiniteCarousel } from "./infinite-carousel"

export function FeaturesSection() {
  return (
    <section id="servicios" className="relative bg-sand-50 py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 space-y-16 md:space-y-24">
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
        <div className="border-t border-dashed border-sand-30" />

        {/* Content with text and image */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Right side text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-2"
          >
            <p className="text-lg md:text-xl leading-relaxed text-primary-dark max-w-xl">
              We specialize in crafting intuitive digital experiences and immersive 3D visuals that tell your story in a
              compelling way that sticks. We're here to make the complicated feel simple and the simple feel remarkable.
              Let's get to work.
            </p>
          </motion.div>

          {/* Left side image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-start-1 lg:row-start-1"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/home/aboutUs_image_1.webp"
                alt="Tratamiento dental"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
          <div className="relative w-full aspect-video">
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
