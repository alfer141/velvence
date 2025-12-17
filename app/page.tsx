"use client"
import { Hero } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { BeforeAfterGallery } from "@/components/sections/before-after-gallery"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { AboutProcess } from "@/components/sections/about-process"
import { TechnologySection } from "@/components/sections/technology-section"
import { CTABanner } from "@/components/sections/cta-banner"
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
      {/* CTA Banner added before the footer */}
      <CTABanner />
      <Footer />
    </div>
  )
}
