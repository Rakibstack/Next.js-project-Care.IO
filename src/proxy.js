import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const privateRoute = [
  "/my-bookings",
  "/dashboard",
  "/booking-service",
]

export async function proxy(req) {
  const token = await getToken({ req })

  const reqPath = req.nextUrl?.pathname
  const isAuthenticated = Boolean(token)
  // const isuser = token?.role === "user"

  // Safety guard
  if (typeof reqPath !== "string") {
    return NextResponse.next()
  }

  const isPrivateRoute = privateRoute.some(route =>
    reqPath.startsWith(route)
  )

  if (isPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(
      new URL("/api/auth/signin", req.url)
    )
  }

  return NextResponse.next()
}

// matcher same as before
export const config = {
  matcher: [
    "/my-bookings/:path*",
    "/dashboard/:path*",
    "/booking-service/:path*",
  ],
}
