import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // Obtener el secret del query param
  const secret = request.nextUrl.searchParams.get("secret")

  // Validar el secret token
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    console.log("[Revalidate] Invalid secret token")
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }

  try {
    // Parsear el body del webhook de Sanity (contiene info del documento)
    const body = await request.json().catch(() => null)

    console.log("[Revalidate] Webhook received:", body?._type)

    // Revalidar las rutas del blog
    revalidatePath("/blog")
    revalidatePath("/blog/[slug]", "page")

    // Si Sanity envía el slug específico, revalidar esa ruta también
    if (body?.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`)
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: "/blog",
    })
  } catch (err) {
    console.error("[Revalidate] Error:", err)
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 })
  }
}

// También soportar GET para testing manual
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }

  try {
    revalidatePath("/blog")
    revalidatePath("/blog/[slug]", "page")

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Blog pages revalidated successfully",
    })
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 })
  }
}
