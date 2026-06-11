'use client'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { CustomCursor } from '@/components/ui/CustomCursor'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
