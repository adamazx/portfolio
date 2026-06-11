// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export interface HeroData {
  name: string
  role: string
  tagline: string
  badge: string
  techStack: string[]
  stats: { value: string; label: string }[]
}

// ─── About ────────────────────────────────────────────────────────────────────
export interface Education {
  degree: string
  school: string
  campus: string
  period: string
  gpa: string
}

export interface TimelineItem {
  year: string
  title: string
  subtitle: string
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillColorVariant = 'blue' | 'purple' | 'cyan' | 'green' | 'orange' | 'pink'

export interface SkillCategory {
  name: string
  icon: string
  color: SkillColorVariant
  skills: string[]
}

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  id: string
  number: string
  icon: string
  iconGradient?: string
  name: string
  description: string
  highlight?: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  /** When set, the GitHub button shows this note instead of linking (e.g. private/company repo). */
  githubNote?: string
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  year: string
  title: string
  subtitle: string
  description: string
}

export interface Achievement {
  icon: string
  iconBg: string
  title: string
  description: string
}

export interface Counter {
  value: number
  display: string
  label: string
  isDecimal?: boolean
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export interface ContactItem {
  icon: string
  label: string
  value: string
}

export interface SocialLink {
  label: string
  icon: string
  href: string
}

// ─── Form ─────────────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string
  email: string
  message: string
}
