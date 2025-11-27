import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that don't require authentication
const publicRoutes = ['/login', '/']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if route is public
  const isPublicRoute = publicRoutes.includes(pathname)
  
  // Get token from cookies or localStorage (stored in headers)
  const token = request.cookies.get('gymvision_token')?.value
  
  // If route is protected and no token, redirect to login
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // If on login page with token, redirect to dashboard
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
