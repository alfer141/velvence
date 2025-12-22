import Link from "next/link"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { urlFor } from "@/lib/sanity.image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Calendar } from "lucide-react"

// Query para obtener todos los posts con sus datos
const query = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "author": author->name,
  "categories": categories[]->title
}`

export default async function BlogPage() {
  // Obtenemos los posts de Sanity
  const posts = await client.fetch(query)

  return (
    <>
      {/* Nav con variante static para páginas internas */}
      <Header variant="static" />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Simple y minimalista */}
        <section className="container mx-auto px-6 py-20 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Descubre las últimas novedades en salud bucal, tecnología dental y consejos para mantener tu sonrisa
            saludable.
          </p>
        </section>

        {/* Grid de posts - Layout minimalista tipo OpenAI */}
        <section className="container mx-auto px-6 pb-24 max-w-6xl">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No hay posts disponibles aún.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link key={post._id} href={`/blog/${post.slug?.current}`} className="group block">
                  <article className="h-full flex flex-col">
                    {/* Imagen del post */}
                    {post.mainImage && (
                      <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img
                          src={urlFor(post.mainImage).width(600).height(400).url() || "/placeholder.svg"}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Categorías */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category: string) => (
                          <span key={category} className="text-xs font-medium text-accent uppercase tracking-wide">
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Título */}
                    <h2 className="text-xl font-medium text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Fecha y Autor */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                      {post.publishedAt && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      )}
                      {post.author && <span className="font-light">Por {post.author}</span>}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer reutilizado */}
      <Footer />
    </>
  )
}
