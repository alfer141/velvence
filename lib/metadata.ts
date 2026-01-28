import type { Metadata } from "next"

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://velvence.com"
const ogImageUrl = `${baseUrl}/og-image.png`

interface PageMetadataOptions extends Partial<Metadata> {
  /** Ruta relativa de la página (ej: "/contacto", "/blog") para generar canonical URL */
  path?: string
}

/**
 * Función helper para crear metadata consistente en todas las páginas
 * Recibe overrides para personalizar title, description y otros campos
 * @param options - Incluye `path` para canonical URL y otros overrides de Metadata
 */
export function createPageMetadata(options?: PageMetadataOptions): Metadata {
  const { path, ...overrides } = options || {}
  
  // Generar canonical URL si se proporciona path
  const canonicalUrl = path ? `${baseUrl}${path}` : baseUrl

  return {
    title: "Velvence® | Clínica de Blanqueamiento Dental",
    description:
      "Clínica líder en blanqueamiento dental profesional en México. Resultados visibles desde la primera sesión con tecnología avanzada.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Velvence® | Clínica de Blanqueamiento Dental",
      description:
        "Clínica líder en blanqueamiento dental profesional en México. Resultados visibles desde la primera sesión.",
      url: canonicalUrl,
      siteName: "Velvence",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Velvence - Clínica de Blanqueamiento Dental",
        },
      ],
      locale: "es_MX",
      type: "website",
    },
    ...overrides,
  }
}
