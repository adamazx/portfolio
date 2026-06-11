'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isMobile = window.matchMedia('(max-width:768px)').matches
    if (isMobile) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
      frame = requestAnimationFrame(animRing)
    }
    animRing()

    const expand = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '56px'
        ringRef.current.style.height = '56px'
        ringRef.current.style.opacity = '0.6'
      }
    }
    const contract = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.opacity = '1'
      }
    }

    // Delegate so dynamically-rendered links/buttons (mobile menu, back-to-top)
    // are covered without per-element listeners that leak on unmount.
    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && target.closest('a,button')

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) expand()
    }
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) contract()
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ background: '#3b82f6', transition: 'transform 0.1s' }}
      />
      <div
        ref={ringRef}
        className="fixed rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: '36px',
          height: '36px',
          border: '1px solid rgba(59,130,246,0.5)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  )
}
