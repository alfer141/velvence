import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
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

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/tratamientos") ? 0.9 : 0.8,
  }))
}
