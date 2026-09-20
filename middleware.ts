import { NextRequest, NextResponse } from 'next/server'

// Simple HTTP Basic Auth gate — free on Vercel Hobby plan (no paid
// "Deployment Protection" needed). Username can be anything; only the
// password (set via the HUB_PASS environment variable in Vercel) is checked.
export function middleware(req: NextRequest) {
  const expected = process.env.HUB_PASS

  const auth = req.headers.get('authorization')

  if (expected && auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
        const separatorIndex = decoded.indexOf(':')
        const password = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : ''
        if (password === expected) {
          return NextResponse.next()
        }
      } catch {
        // fall through to 401
      }
    }
  }

  return new NextResponse('Авторизация қажет / Требуется авторизация', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Maktaaral", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
