import { createImageUrlBuilder } from "@sanity/image-url"
import { client } from "./sanity.client"

const builder = createImageUrlBuilder(client)

function urlForSource(source: any) {
  return builder.image(source)
}

export const urlFor = urlForSource
