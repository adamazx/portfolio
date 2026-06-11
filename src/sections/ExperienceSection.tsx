'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { EXPERIENCE_ITEMS, ACHIEVEMENTS, COUNTERS } from '@/data'

function AnimatedCounter({ target, isDecimal = false }: Readonly<{ target: number; isDecimal?: boolean }>) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = target / 60
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target)
          setVal(cur)
          if (cur >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-display font-extrabold text-grad text-4xl" style={{ lineHeight: 1 }}>
      {isDecimal ? Math.min(val, target).toFixed(2) : Math.floor(Math.min(val, target))}
    </span>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="04. Experience"
          title={<>Journey & <span className="text-grad">Achievements</span></>}
          subtitle="The path that shaped my expertise in software engineering and system design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: counters + timeline */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {COUNTERS.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border p-5 text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))',
                    borderColor: 'rgba(59,130,246,0.15)',
                  }}
                >
                  <AnimatedCounter target={c.value} isDecimal={c.isDecimal} />
                  <p className="font-mono text-[11px] text-subtle mt-2">{c.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2.5rem' }}>
              {EXPERIENCE_ITEMS.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title.replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pb-10 last:pb-0"
                >
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      left: '-2.75rem',
                      top: '4px',
                      background: '#3b82f6',
                      border: '2px solid var(--bg)',
                      boxShadow: '0 0 12px rgba(59,130,246,0.5)',
                    }}
                  />
                  <p className="font-mono text-xs text-blue-400 mb-1">{item.year}</p>
                  <p className="font-display font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted mb-2">{item.subtitle}</p>
                  <p className="text-xs text-subtle leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: achievements */}
          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <GlassCard className="p-5 flex gap-4 items-start hover:translate-x-1 hover:translate-y-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: ach.iconBg }}
                  >
                    {ach.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{ach.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{ach.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
