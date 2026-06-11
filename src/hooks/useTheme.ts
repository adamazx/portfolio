'use client'
import { useSyncExternalStore } from 'react'

type Theme = 'dark' | 'light'

// Module-level store so the theme is shared across every component that reads it
// and stays in sync without a setState-in-effect cascade.
let currentTheme: Theme | null = null
const listeners = new Set<() => void>()

function resolveInitial(): Theme {
  const saved = localStorage.getItem('theme') as Theme | null
  if (saved) return saved
  return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyToDocument(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

function getSnapshot(): Theme {
  // Pure, stable read — resolveInitial returns the same value on repeat calls.
  currentTheme ??= resolveInitial()
  return currentTheme
}

// SSR matches the `className="dark"` hardcoded on <html> in the root layout.
function getServerSnapshot(): Theme {
  return 'dark'
}

function subscribe(callback: () => void) {
  // Reflect the resolved theme on the document as soon as a component subscribes.
  applyToDocument(getSnapshot())
  listeners.add(callback)

  const onStorage = (e: StorageEvent) => {
    if (e.key !== 'theme') return
    currentTheme = (e.newValue as Theme | null) ?? resolveInitial()
    applyToDocument(currentTheme)
    callback()
  }
  window.addEventListener('storage', onStorage)

  return () => {
    listeners.delete(callback)
    window.removeEventListener('storage', onStorage)
  }
}

function setTheme(next: Theme) {
  currentTheme = next
  localStorage.setItem('theme', next)
  applyToDocument(next)
  listeners.forEach(listener => listener())
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}
