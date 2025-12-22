import { createClient, type SanityClient } from "@sanity/client"

// Cliente de Sanity para hacer queries desde el frontend
// Este cliente se usa en las páginas del blog para obtener datos
const sanityClient: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true, // Usa CDN para mejor performance
})

// Export explícito del cliente
export { sanityClient as client }
