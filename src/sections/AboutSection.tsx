'use client'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { ABOUT_POINTS, EDUCATION, TIMELINE_ITEMS } from '@/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="01. About"
          title={<><span className="text-grad">Who</span> I Am</>}
          subtitle="A dedicated backend developer who thrives on architecting systems that scale and perform under pressure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <GlassCard className="p-8">
                <h3 className="font-display font-bold text-lg mb-5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-md flex items-center justify-center text-sm" style={{ background: 'rgba(59,130,246,0.1)' }} aria-hidden>
                    💡
                  </span>{' '}
                  What I Do
                </h3>
                <ul className="flex flex-col gap-3">
                  {ABOUT_POINTS.map((point, i) => (
                    <li key={point} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: point.replace(/(Node\.js|NestJS|REST APIs?|WebSocket|System Architecture|Business Requirements|Technical Solutions|Financial Data Systems|Real-Time Architecture|Agile\/Scrum)/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div
                className="rounded-2xl border p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
                  borderColor: 'rgba(59,130,246,0.2)',
                }}
              >
                <span
                  className="inline-block font-mono text-xs px-3 py-1 rounded-full border mb-5"
                  style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)', color: '#3b82f6' }}
                >
                  🎓 Education
                </span>
                <p className="font-display font-bold text-lg mb-2">{EDUCATION.degree}</p>
                <p className="text-muted text-sm mb-6">
                  {EDUCATION.school}<br />{EDUCATION.campus} · {EDUCATION.period}
                </p>
                <div
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))',
                    borderColor: 'rgba(6,182,212,0.3)',
                  }}
                >
                  <span className="font-display text-3xl font-extrabold text-grad">{EDUCATION.gpa}</span>
                  <div>
                    <div className="text-sm text-muted">Grade Point Average</div>
                    <div className="text-xs text-subtle">First Class Honors</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div>
            <motion.p
              custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-muted leading-loose mb-10 text-sm"
            >
              I specialize in backend engineering with a focus on building scalable, reliable infrastructure. My experience spans from financial analytics platforms to decision-support systems, always prioritizing clean code and thoughtful architecture.
            </motion.p>

            <div className="relative pl-8" style={{ borderLeft: '1px solid var(--border)' }}>
              {TIMELINE_ITEMS.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="relative pb-8 last:pb-0"
                >
                  <div
                    className="absolute left-[-2.35rem] top-1 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: ['#3b82f6', '#8b5cf6', '#06b6d4', 'linear-gradient(#3b82f6,#8b5cf6)'][i] ?? '#3b82f6',
                      boxShadow: `0 0 12px ${['rgba(59,130,246,0.5)', 'rgba(139,92,246,0.5)', 'rgba(6,182,212,0.5)', 'rgba(59,130,246,0.4)'][i]}`,
                    }}
                  />
                  <p className="font-mono text-xs text-blue-400 mb-1">{item.year}</p>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-subtle">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
