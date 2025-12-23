"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Zap, Target } from "lucide-react"

const TIMER_DURATION = 5000 // 5 seconds per tab

const processSteps = [
  {
    id: "preparacion",
    title: "Preparación",
    icon: Sparkles,
    description:
      "Antes de iniciar el blanqueamiento dental, realizamos una valoración previa y un examen dental para asegurarnos de que tus dientes estén listos para el tratamiento y brindarte una experiencia cómoda desde el inicio.",
    image: "/images/home/pre_blanqueamiento.webp?height=500&width=400",
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento",
    icon: Zap,
    description:
      "Aplicamos la tecnología Philips Zoom para aclarar tus dientes hasta 8 tonos en una sola sesión de aproximadamente 45 minutos, sin comprometer ni dañar tu esmalte, ya que en el consultorio utilizamos tecnología de vanguardia.",
    image: "/images/home/kit_philips_zoom.webp?height=500&width=400",
  },
  {
    id: "resultados",
    title: "Resultados",
    icon: Target,
    description:
      " Tus dientes estarán visiblemente más blancos al finalizar la sesión. Además, te entregamos un kit de mantenimiento para ayudar a prolongar los resultados de tu blanqueamiento en casa.",
    image: "/images/home/Zoom.webp?height=500&width=400",
  },
]

export function AboutProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToStep = useCallback((index: number) => {
    setActiveStep(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next step
          setActiveStep((current) => (current + 1) % processSteps.length)
          return 0
        }
        return prev + 100 / (TIMER_DURATION / 50)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, activeStep])

  return (
    <section className="py-20 bg-secondary-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Static Header */}
            <div className="space-y-4">
              <h2 className="text-primary-dark/70 text-sm font-medium">[Proceso del blanqueamiento]</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight text-balance">
                El paso a paso de una experiencia cómoda para dientes más blancos
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                El proceso de aclarado dental está diseñado para que te sientas 
                tranquilo, cómodo y acompañado en todo momento. Desde el inicio 
                y hasta después de rtu sesión, ponemos atención en cómo te sientes durante 
                el tratamiento, resolviendo dudas frecuentes como la sensibilidad dental y 
                el cuidado posterior, para que al final te vayas con una sonrisa reluciente y una sensación 
                de bienestar incomparable. 🍃
              </p>
            </div>

            {/* Tab Steps */}
            <div className="space-y-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index

                return (
                  <div key={step.id} onClick={() => goToStep(index)} className="cursor-pointer group">
                    <div className="flex items-start gap-3 py-4">
                      <Icon
                        className={`w-5 h-5 mt-0.5 transition-colors ${
                          isActive ? "text-primary-dark" : "text-gray-400"
                        }`}
                      />
                      <div className="flex-1 space-y-2">
                        <h3
                          className={`font-semibold transition-colors ${
                            isActive ? "text-primary-dark" : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description - Only visible when active */}
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-gray-500 text-sm leading-relaxed"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-lime rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width: isActive ? `${progress}%` : index < activeStep ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.05, ease: "linear" }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Image with Blurred Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Blurred Background - Placeholder for user image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backgroundColor: "#E0EBF1" }}>
              <div className="absolute inset-0 backdrop-blur-sm bg-secondary-light/50" />
              <p className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Proceso del blanqueamiento dental
              </p>
            </div>

            {/* Main Image - Changes with Tab */}
            <div className="absolute inset-6 lg:inset-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: "#18273A" }}
                >
                  <img
                    src={processSteps[activeStep].image || "/placeholder.svg"}
                    alt={processSteps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutProcess
