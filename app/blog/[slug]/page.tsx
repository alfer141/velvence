import { createPageMetadata, baseUrl } from "@/lib/metadata"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/lib/sanity.image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Calendar, User, ArrowLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import { organizationSchema } from "@/lib/schema"

// Query para obtener un post específico
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  body,
  seo,
  faq,
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
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-[#a2b71c] hover:underline">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url() || "/placeholder.svg"}
            alt={value.alt || "Imagen del artículo"}
            className="w-full rounded-lg"
          />
          {value.alt && <figcaption className="text-sm text-gray-600 text-center mt-2 italic">{value.alt}</figcaption>}
        </figure>
      )
    },
    simpleTable: ({ value }: any) => {
      const rows: { cells?: string[] }[] = value?.rows ?? []
      if (!rows.length) return null
      const hasHeader = value?.hasHeader !== false
      const headerRow = hasHeader ? rows[0] : null
      const bodyRows = hasHeader ? rows.slice(1) : rows

      return (
        <figure className="my-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            {value?.caption && (
              <caption className="caption-bottom pt-3 text-sm italic text-gray-600">
                {value.caption}
              </caption>
            )}
            {headerRow?.cells?.length ? (
              <thead>
                <tr className="border-b-2 border-gray-300">
                  {headerRow.cells.map((cell, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-medium text-primary">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-gray-200 last:border-b-0">
                  {row.cells?.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-gray-700 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      )
    },
  },
}

// Convierte Portable Text de una respuesta FAQ a texto plano para JSON-LD
function portableTextToPlain(blocks: any[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return ""
      return block.children.map((child: any) => child.text).join("")
    })
    .filter(Boolean)
    .join("\n\n")
    .trim()
}

// Componentes minimos para renderizar la respuesta del FAQ
const faqAnswerComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-3 last:mb-0 text-gray-700 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-[#a2b71c] hover:underline">
        {children}
      </a>
    ),
  },
}

export const revalidate = 60 // Revalida cada 60 segundos como fallback

export async function generateMetadata({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const slug = resolvedParams?.slug

  if (!slug || typeof slug !== "string") {
    return createPageMetadata({
      title: "Velvence® | Post no encontrado",
      description: "El post que buscas no existe.",
    })
  }

  const post = await client.fetch(query, { slug })

  if (!post) {
    return createPageMetadata({
      title: "Velvence® | Post no encontrado",
      description: "El post que buscas no existe.",
    })
  }

  const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  // Usar campos SEO de Sanity si existen, con fallback al comportamiento anterior
  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription =
    post.seo?.metaDescription ||
    post.body?.[0]?.children?.[0]?.text?.substring(0, 160) ||
    post.title

  return createPageMetadata({
    path: `/blog/${slug}`,
    title: `${metaTitle}`,
    description: metaDescription,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/blog/${slug}`,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : undefined,
      type: "article",
      publishedTime: post.publishedAt,
    },
  })
}

export default async function PostPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>
}) {
  // En algunos setups de Next, `params` puede venir como Promise.
  // Además, si `slug` viene undefined, Sanity lanza: "param $slug referenced, but not provided".
  const resolvedParams = await Promise.resolve(params)
  const slug = resolvedParams?.slug

  // Si no hay slug válido, mostramos "Post no encontrado" sin intentar ejecutar la query.
  if (!slug || typeof slug !== "string") {
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

  // Normaliza FAQ y prepara Schema FAQPage si hay items
  const faqItems: { question: string; answer: any[] }[] = Array.isArray(post?.faq?.items)
    ? post.faq.items.filter((i: any) => i?.question && Array.isArray(i?.answer) && i.answer.length > 0)
    : []
  const faqTitle: string = post?.faq?.title || "Preguntas frecuentes"

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: portableTextToPlain(item.answer),
            },
          })),
        }
      : null

  // Schema Article/BlogPosting para SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.body?.[0]?.children?.[0]?.text?.substring(0, 160) || post.title,
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : `${baseUrl}/og-image.png`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `${baseUrl}/blog/${slug}`,
    author: post.author ? {
      "@type": "Person",
      name: post.author.name,
    } : {
      "@type": "Organization",
      name: "Velvence",
    },
    publisher: {
      "@type": "Organization",
      name: "Velvence",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/velvence-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    isPartOf: {
      "@id": organizationSchema["@id"],
    },
  }

  return (
    <>
      {/* Schema BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Schema FAQPage (solo si hay FAQs) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Nav con variante static */}
      <Header variant="static" />

      {/* MailerLite (solo blog post) */}
      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};l=d.createElement(e);l.async=1;l.src=u;
            n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '2101624');
          `,
        }}
      />

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

          {/* FAQ (debajo del articulo) */}
          {faqItems.length > 0 && (
            <section className="mt-16" aria-labelledby="faq-title">
              <h2 id="faq-title" className="text-3xl font-medium text-primary mb-6">
                {faqTitle}
              </h2>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {faqItems.map((item, idx) => (
                  <details key={idx} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <h3 className="text-lg font-medium text-primary leading-snug">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="mt-3 pr-8">
                      <PortableText value={item.answer} components={faqAnswerComponents} />
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter (segmento blog) */}
          <section className="mt-16">
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 text-center">
              <h2 className="text-2xl font-medium text-primary mb-3">Suscríbete y mantente al día</h2>
              <p className="text-gray-600 mb-6">
                Te compartiremos novedades, tecnología y tips prácticos para cuidar tu salud y bienestar bucal.
              </p>
              <div className="ml-embedded" data-form="4uYx4v"></div>
            </div>
          </section>
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
