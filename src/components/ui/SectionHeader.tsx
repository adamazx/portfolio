'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  subtitle?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <motion.p
        custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="font-mono text-xs text-cyan-400 tracking-[0.12em] uppercase flex items-center gap-2 mb-3"
      >
        <span className="block w-6 h-px bg-cyan-400" />
        {tag}
      </motion.p>
      <motion.h2
        custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-muted text-lg max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
