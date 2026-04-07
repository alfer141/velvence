import { createPageMetadata } from "@/lib/metadata"
import { localBusinessSchema } from "@/lib/schema"
import { Hero } from "@/components/sections/home/hero"
import { FeaturesSection } from "@/components/sections/home/features-section"
import { BeforeAfterGallery } from "@/components/sections/home/before-after-gallery"
import { ReviewsSection } from "@/components/sections/home/reviews-section"
import { AboutProcess } from "@/components/sections/home/about-process"
import { TechnologySection } from "@/components/sections/home/technology-section"
import { CTABanner } from "@/components/sections/home/cta-banner"
import { Footer } from "@/components/layout/footer"

export const metadata = createPageMetadata({
  path: "/",
  title: "Velvence® | Blanqueamiento Dental Profesional",
  description:
    "Descubre la experiencia de blanqueamiento dental más avanzada. Resultados visibles desde la primera sesión con tecnología EMS Airflow.",
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {localBusinessSchema.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
