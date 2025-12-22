import Link from 'next/link'
import {client} from '@/lib/sanity.client'
import {groq} from 'next-sanity'

const query = groq`*[_type == "post"]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt
}`

export default async function BlogPage() {
  const posts = await client.fetch(query)

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-6">Blog</h1>

      <ul className="space-y-3">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link className="underline" href={`/blog/${post.slug?.current}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}