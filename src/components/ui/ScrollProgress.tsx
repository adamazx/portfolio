'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div
      className="fixed top-0 left-0 h-0.5 z-[1000] transition-all duration-100"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
      }}
    />
  )
}
