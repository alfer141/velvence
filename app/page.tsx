"use client"
import { Hero } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { BeforeAfterGallery } from "@/components/sections/before-after-gallery"
import { ProcessSection } from "@/components/sections/process-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ResultsGallery } from "@/components/sections/results-gallery"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { AboutProcess } from "@/components/sections/about-process"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header removed here - now integrated in Hero */}
      <Hero />
      <FeaturesSection />
      <BeforeAfterGallery />
      <AboutProcess />
      <ProcessSection />
      <BenefitsSection />
      <ResultsGallery />
      <TestimonialSection />
      <Footer />
    </div>
  )
}
