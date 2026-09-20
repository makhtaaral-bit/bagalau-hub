import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Мақтаарал — қызметтер порталы',
  description: 'Мақтаарал ауданының электронды нысандар порталы',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  )
}
