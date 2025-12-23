import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://velvence.com"
const ogImageUrl = `${baseUrl}/og-image.png`

/**
 * Función helper para crear metadata consistente en todas las páginas
 * Recibe overrides para personalizar title, description y otros campos
 */
export function createPageMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: "Velvence® | Clínica de Blanqueamiento Dental",
    description:
      "Clínica líder en blanqueamiento dental profesional en México. Resultados visibles desde la primera sesión con tecnología avanzada.",
    openGraph: {
      title: "Velvence® | Clínica de Blanqueamiento Dental",
      description:
        "Clínica líder en blanqueamiento dental profesional en México. Resultados visibles desde la primera sesión.",
      url: baseUrl,
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
