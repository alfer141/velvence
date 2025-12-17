"use client"
import { Hero } from "@/components/sections/home/hero"
import { FeaturesSection } from "@/components/sections/home/features-section"
import { BeforeAfterGallery } from "@/components/sections/home/before-after-gallery"
import { ReviewsSection } from "@/components/sections/home/reviews-section"
import { AboutProcess } from "@/components/sections/home/about-process"
import { TechnologySection } from "@/components/sections/home/technology-section"
import { CTABanner } from "@/components/sections/home/cta-banner"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header integrated in Hero */}
      <Hero />
      <FeaturesSection />
      <BeforeAfterGallery />
      <AboutProcess />
      <ReviewsSection />
      <TechnologySection />
      <CTABanner />
      <Footer />
    </div>
  )
}
