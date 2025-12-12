"use client"
import { Hero } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { BeforeAfterGallery } from "@/components/sections/before-after-gallery"
import { ProcessSection } from "@/components/sections/process-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ResultsGallery } from "@/components/sections/results-gallery"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"
import { ComparisonSlider } from "@/components/sections/comparison-slider"
import { motion } from "framer-motion"

const comparisonImages = [
  {
    before: "/images/pacientes/px_georgina_blanqueamiento_antes.webp",
    after: "/images/pacientes/px_georgina_blanqueamiento_despues.webp",
    name: "Georgina",
  },
  {
    before: "/images/pacientes/px_william_blanqueamiento_antes.webp",
    after: "/images/pacientes/px_william_blanqueamiento_desp.webp",
    name: "William",
  },
  {
    before: "/images/pacientes/px_denisse_blanqueamiento_antes.webp",
    after: "/images/pacientes/px_denisse_blanqueamiento_despues.webp",
    name: "Denisse",
  },
  {
    before: "/images/pacientes/px_mujer1_blanqueamientot_antes.webp",
    after: "/images/pacientes/px_mujer1_blanqueamientot_desspues.webp",
    name: "Paciente",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header removed here - now integrated in Hero */}
      <Hero />
      <FeaturesSection />

      

      <BeforeAfterGallery />
      <CTASection />
      <ProcessSection />
      <BenefitsSection />
      <ResultsGallery />
      <TestimonialSection />
      <Footer />
    </div>
  )
}
