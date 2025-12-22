import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { client } from "./sanity.client"

// Builder para generar URLs optimizadas de imágenes de Sanity
const builder = imageUrlBuilder(client)

// Función helper para construir URLs de imágenes
// Ejemplo: urlFor(post.mainImage).width(800).height(600).url()
function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

// Export explícito de la función
export { urlForImage as urlFor }
