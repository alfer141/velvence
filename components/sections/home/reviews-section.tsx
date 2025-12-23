"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Review {
  id: number
  text: string
  author: string
  avatar?: string
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Excelente servicio y atención por parte de la doctora, antes, durante y al finalizar el procedimiento. 100% confiable",
    author: "Frida Sofia Gomez Huesca",
    avatar: "/images/avatars/frida.jpg",
  },
  {
    id: 2,
    text: "El blanqueamiento superó mis expectativas. El equipo es muy profesional y el resultado es impresionante. Totalmente recomendado",
    author: "Carlos Alberto Mendoza",
    avatar: "/images/avatars/carlos.jpg",
  },
  {
    id: 3,
    text: "Una experiencia increíble desde el primer momento. La doctora me explicó todo el proceso y los resultados son maravillosos",
    author: "Ana María Torres",
    avatar: "/images/avatars/ana.jpg",
  },
  {
    id: 4,
    text: "Nunca pensé que mi sonrisa pudiera verse tan bien. El servicio es de primera calidad y el ambiente muy profesional",
    author: "Roberto Sánchez López",
    avatar: "/images/avatars/roberto.jpg",
  },
  {
    id: 5,
    text: "Me encantó el trato personalizado y los resultados son evidentes desde la primera sesión. Sin duda volveré",
    author: "Laura Fernández",
    avatar: "/images/avatars/laura.jpg",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 lg:py-32 bg-primary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-medium mb-12"
        >
          La experiencia Velvence, contada por nuestros pacientes
        </motion.p>

        <div className="relative min-h-[400px] md:min-h-[300px]">
          {/* Testimonial Slider */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-8"
            >
              {/* Review Text */}
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl">
                "{reviews[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary-light/20 flex items-center justify-center overflow-hidden">
                  {reviews[currentIndex].avatar ? (
                    <Image
                      src={reviews[currentIndex].avatar || "/placeholder.svg"}
                      alt={reviews[currentIndex].author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-semibold text-secondary-light">
                      {reviews[currentIndex].author.charAt(0)}
                    </span>
                  )}
                </div>
                <cite className="not-italic text-lg font-light text-secondary-light">
                  {reviews[currentIndex].author}
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 gap-3">
            <button
              onClick={handlePrevious}
              aria-label="Reseña anterior"
              className="w-12 h-12 rounded-lg bg-secondary-light/20 hover:bg-secondary-light/30 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente reseña"
              className="w-12 h-12 rounded-lg bg-secondary-light/20 hover:bg-secondary-light/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mt-12">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir a reseña ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-16 bg-accent" : "w-8 bg-secondary-light/30 hover:bg-secondary-light/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Mobile */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button
            onClick={handlePrevious}
            aria-label="Reseña anterior"
            className="w-12 h-12 rounded-lg bg-secondary-light/20 hover:bg-secondary-light/30 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente reseña"
            className="w-12 h-12 rounded-lg bg-secondary-light/20 hover:bg-secondary-light/30 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
