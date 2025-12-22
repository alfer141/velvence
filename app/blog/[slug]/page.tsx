import {client} from '@/lib/sanity.client'
import {groq} from 'next-sanity'
import {PortableText} from '@portabletext/react'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body
}`

export default async function PostPage({params}: {params: {slug: string}}) {
  const post = await client.fetch(query, {slug: params.slug})

  if (!post) return <main className="p-8">Post no encontrado</main>

  return (
    <main className="p-8 prose max-w-3xl">
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
    </main>
  )
}