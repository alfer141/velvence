"use client"
import { Hero } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { BeforeAfterGallery } from "@/components/sections/before-after-gallery"
import { ProcessSection } from "@/components/sections/process-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ResultsGallery } from "@/components/sections/results-gallery"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { AboutProcess } from "@/components/sections/about-process"
import { TechnologySection } from "@/components/sections/technology-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header removed here - now integrated in Hero */}
      <Hero />
      <FeaturesSection />
      <BeforeAfterGallery />
      <AboutProcess />
      <ReviewsSection />
      <TechnologySection />
      <ProcessSection />
      <BenefitsSection />
      <ResultsGallery />
      <Footer />
    </div>
  )
}
