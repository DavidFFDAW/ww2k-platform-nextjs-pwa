import '@/css/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/css/media.queries.css';
import AuthSession from './auth.provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WWE 2K NextJs App',
  description: 'Your thrusted source for WWE 2K news and updates about all universe related content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthSession>
          <main className='app-page-wrapper'>
            {children}
          </main>
        </AuthSession>
      </body>
    </html>
  )
}
