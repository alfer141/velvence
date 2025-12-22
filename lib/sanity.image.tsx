"use client"

import { createImageUrlBuilder } from "@sanity/image-url"
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
import { client } from "@/lib/sanity.client"

const builder = createImageUrlBuilder(client)

/** Función helper para generar URLs de imágenes */
export function urlFor(source: any): ImageUrlBuilder {
  return builder.image(source)
}
