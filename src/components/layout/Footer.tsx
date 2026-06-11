export function Footer() {
  return (
    <footer className="border-t px-6 py-8" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle">
          © 2025 <span className="text-muted">Chayangkoon Tachao</span>. All rights reserved.
        </p>
        <p className="font-mono text-xs text-subtle">
          Built with <span className="text-blue-400">Next.js</span> & <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
