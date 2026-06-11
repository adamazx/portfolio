import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Chayangkoon Tachao — Backend Software Developer',
  description:
    'Backend Software Developer specializing in scalable systems, API architecture, and real-time applications built with Node.js and NestJS.',
  keywords: ['Backend Developer', 'Node.js', 'NestJS', 'TypeScript', 'API Architecture', 'Chayangkoon Tachao'],
  authors: [{ name: 'Chayangkoon Tachao' }],
  openGraph: {
    title: 'Chayangkoon Tachao — Backend Software Developer',
    description: 'Passionate Backend Developer specializing in scalable systems, API architecture, and real-time applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
