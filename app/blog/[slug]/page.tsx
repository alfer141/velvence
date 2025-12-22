import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/lib/sanity.image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Query para obtener un post específico con todos sus datos
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  body,
  "author": author->{name, image},
  "categories": categories[]->title
}`

// Componente personalizado para renderizar el contenido (PortableText)
const components = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-3xl font-medium text-primary mt-12 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-medium text-primary mt-8 mb-4">{children}</h3>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
        {children}
      </a>
    ),
  },
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await client.fetch(query, { slug })

  // Si no existe el post, mostramos mensaje
  if (!post) {
    return (
      <>
        <Header variant="static" />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-light text-primary mb-4">Post no encontrado</h1>
            <Link href="/blog" className="text-accent hover:underline flex items-center gap-2 justify-center">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      {/* Nav con variante static */}
      <Header variant="static" />

      <main className="min-h-screen bg-white">
        {/* Link para volver */}
        <div className="container mx-auto px-6 pt-8 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
        </div>

        {/* Header del artículo */}
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Categorías */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category: string) => (
                <span key={category} className="text-xs font-medium text-accent uppercase tracking-wide">
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 leading-tight">{post.title}</h1>

          {/* Meta información (fecha y autor) */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-10 pb-10 border-b border-gray-200">
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt} className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Por {post.author.name}</span>
              </div>
            )}
          </div>

          {/* Imagen principal */}
          {post.mainImage && (
            <div className="mb-12 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url() || "/placeholder.svg"}
                alt={post.mainImage.alt || post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Contenido del artículo usando PortableText */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        </article>

        {/* CTA al final del artículo */}
        <section className="container mx-auto px-6 pb-24 max-w-4xl">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl font-medium text-primary mb-4">¿Listo para mejorar tu sonrisa?</h2>
            <p className="text-gray-600 mb-6">Agenda tu cita con nosotros y descubre cómo podemos ayudarte.</p>
            <Link
              href="/agendar-cita"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Agendar cita
            </Link>
          </div>
        </section>
      </main>

      {/* Footer reutilizado */}
      <Footer />
    </>
  )
}
