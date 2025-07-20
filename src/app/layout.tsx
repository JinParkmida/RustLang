import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RustMaster - Learn Rust Programming',
  description: 'Master Rust programming with interactive tutorials, hands-on exercises, and real-time code execution. From beginner to advanced concepts.',
  keywords: 'Rust, programming, tutorial, learn, interactive, coding, systems programming',
  authors: [{ name: 'RustMaster Team' }],
  openGraph: {
    title: 'RustMaster - Learn Rust Programming',
    description: 'Master Rust programming with interactive tutorials and hands-on exercises',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RustMaster - Learn Rust Programming',
    description: 'Master Rust programming with interactive tutorials and hands-on exercises',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider>
              {children}
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-color)',
                  },
                }}
              />
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}