import type { MetadataRoute } from "next"
import { client } from "@/lib/sanity.client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://velvence.mx"

  // Rutas estáticas públicas del sitio
  const staticRoutes = [
    "",
    "/acerca-de-nosotros",
    "/agendar-cita",
    "/contacto",
    "/precios",
    "/tratamientos/blanqueamiento-dental",
    "/tratamientos/limpieza-dental",
    "/tratamientos/flourosis-dental",
  ]

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/tratamientos") ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap

  try {
    const posts = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(
      `*[_type == "post" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }`,
    )

    const blogSitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7, // Prioridad recomendada por Google para contenido editorial
    }))

    // Agregar página índice del blog
    const blogIndexSitemap = {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }

    return [...staticSitemap, blogIndexSitemap, ...blogSitemap]
  } catch (error) {
    console.error("[v0] Error fetching blog posts for sitemap:", error)
    return staticSitemap
  }
}
