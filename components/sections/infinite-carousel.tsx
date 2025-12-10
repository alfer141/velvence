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
  { src: "/images/global/ems_logo.svg", alt: "EMS", width: 100, height: 60 },
  { src: "/images/global/philips_zoom_logo.svg", alt: "Philips Zoom", width: 100, height: 60 },
  { src: "/images/global/beyond_logo.svg", alt: "Beyond", width: 100, height: 60 },
  { src: "/images/global/therabody_logo.svg", alt: "Therabody", width: 100, height: 60 },
  { src: "/images/global/gbt_logo.svg", alt: "GBT", width: 100, height: 60 },
]

export function InfiniteCarousel() {
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12">
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sand-50 to-transparent z-10 pointer-events-none" />
      {/* Right gradient fade */}
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
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
