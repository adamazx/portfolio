'use client'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SKILL_CATEGORIES } from '@/data'
import type { SkillColorVariant } from '@/types'
//import { cn } from '@/utils/cn'

const colorMap: Record<SkillColorVariant, string> = {
  blue:   'rgba(59,130,246,0.12)',
  purple: 'rgba(139,92,246,0.12)',
  cyan:   'rgba(6,182,212,0.12)',
  green:  'rgba(34,197,94,0.12)',
  orange: 'rgba(249,115,22,0.12)',
  pink:   'rgba(236,72,153,0.12)',
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="02. Skills"
          title={<>Technical <span className="text-grad">Arsenal</span></>}
          subtitle="Technologies and tools I use to bring ideas to life at production scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-2xl border p-7 overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)' }}
              />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: colorMap[cat.color] }}
                >
                  {cat.icon}
                </div>
                <span className="font-display font-bold text-sm">{cat.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 hover:text-blue-400 cursor-default"
                    style={{
                      background: 'var(--bg3)',
                      borderColor: 'var(--border)',
                      color: 'var(--text2)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
