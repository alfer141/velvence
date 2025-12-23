import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

const useCdn = (() => {
  const env = process.env.NEXT_PUBLIC_SANITY_USE_CDN
  if (env === "true") return true
  if (env === "false") return false
  return process.env.NODE_ENV === "production"
})()

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})
