
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
const privateRoute = ["/my-bookings","/dashboard","/admin"]

export async function proxy(req) {

    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
    const reqPath = req.nextUrl.pathname
    const isAuthenticateed = Boolean(token)
    const isUser = token?.role === "user"

    console.log({isAuthenticateed,isUser,reqPath}); 

    const isPrivateRoute = privateRoute.some(route => reqPath.startsWith(route))
    if(isPrivateRoute && !isAuthenticateed) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }
    
    console.log({isAuthenticateed,isUser,reqPath,isPrivateRoute}); 
    
    return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/my-bookings/:path*',
}