import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'hub_session'

export async function POST(req: NextRequest) {
  const expected = process.env.HUB_PASS

  let password = ''
  try {
    const body = await req.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }

  if (!expected || password !== expected) {
    return NextResponse.json({ ok: false, error: 'wrong_password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, expected, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
  return res
}
