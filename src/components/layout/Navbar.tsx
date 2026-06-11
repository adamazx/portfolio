'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { NAV_ITEMS } from '@/data'
import { cn } from '@/utils/cn'

const SPY_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const activeId = useScrollSpy(SPY_IDS)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 w-full z-50 px-6 md:px-8 h-[72px] flex items-center justify-between transition-all duration-300',
          scrolled && 'backdrop-blur-xl border-b'
        )}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-display text-xl font-extrabold text-grad tracking-tight"
          aria-label="Back to top"
        >
          CT
        </button>

        <ul className="hidden md:flex gap-8 list-none">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-main' : 'text-muted hover:text-main'
                  )}
                >
                  {label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-blue-500"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-lg border bg-surface text-muted hover:text-blue-400 transition-all duration-200"
            style={{ borderColor: 'var(--border)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-muted"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] left-0 w-full z-40 px-6 py-4 flex flex-col gap-2 border-b"
            style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-left py-3 text-base text-muted border-b last:border-0 hover:text-main transition-colors"
                style={{ borderColor: 'var(--border)' }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
