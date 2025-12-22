"use client"

/**
 * Configuración de Sanity Studio montado en `/app/studio/[[...tool]]/page.tsx`
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"

// Configuración de Sanity
const sanityConfig = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})

// Export por defecto
export default sanityConfig
