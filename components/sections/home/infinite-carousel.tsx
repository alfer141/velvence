"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface LogoItem {
  src: string
  alt: string
  width: number
  height: number
}

const logos: LogoItem[] = [
  { src: "/images/global/ems_logo.svg", alt: "EMS", width: 213, height: 128 },
  { src: "/images/global/philips_zoom_logo.svg", alt: "Philips Zoom", width: 213, height: 128 },
  { src: "/images/global/beyond_logo.svg", alt: "Beyond", width: 213, height: 128 },
  { src: "/images/global/therabody_logo.svg", alt: "Therabody", width: 213, height: 128 },
  { src: "/images/global/gbt_logo.svg", alt: "GBT", width: 213, height: 128 },
]

export function InfiniteCarousel() {
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sand-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sand-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 md:gap-16"
        animate={{ x: [0, -1152] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center justify-center">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-32 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
