import { createClient } from "@sanity/client"

// Cliente de Sanity para hacer queries desde el frontend
// Este cliente se usa en las páginas del blog para obtener datos
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true, // Usa CDN para mejor performance
})
