import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'hub_session'

// Custom-page password gate. The password itself never reaches the
// browser's JS (checked server-side in /api/login), and the cookie that
// proves a successful login is httpOnly, so it can't be read or copied by
// client-side script either.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Always allow the login page itself and its API route through.
  if (pathname === '/login' || pathname === '/api/login') {
    return NextResponse.next()
  }

  const expected = process.env.HUB_PASS
  const cookie = req.cookies.get(COOKIE_NAME)?.value

  if (expected && cookie === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', req.url)
  loginUrl.searchParams.set('next', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
