import imageUrlBuilder from "@sanity/image-url"
import { client } from "./sanity.client"

// Builder para generar URLs optimizadas de imágenes de Sanity
const builder = imageUrlBuilder(client)

// Función helper para construir URLs de imágenes
// Ejemplo: urlFor(post.mainImage).width(800).height(600).url()
export function urlFor(source: any) {
  return builder.image(source)
}
