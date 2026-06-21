import type {
  NavItem, HeroData, Education, TimelineItem,
  SkillCategory, Project, ExperienceItem, Achievement,
  Counter, ContactItem, SocialLink,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_DATA: HeroData = {
  name: 'Chayangkoon Tachao',
  role: '// Software Developer',
  tagline:
    'Passionate Developer specializing in scalable systems, API architecture, and real-time applications. Building tomorrow\'s infrastructure today.',
  badge: 'Available for opportunities',
  techStack: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  stats: [
    { value: '3.79', label: 'GPA' },
    { value: '3', label: 'Projects' },
  ],
}

export const EDUCATION: Education = {
  degree: 'B.Sc. Digital Business Technology',
  school: 'Rajamangala University of Technology Isan',
  campus: 'Khon Kaen Campus',
  period: '2022 – 2025',
  gpa: '3.79',
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  { year: '2022', title: 'Started Digital Business Technology', subtitle: 'Rajamangala University of Technology Isan' },
  { year: '2023', title: 'Discovered Software Development', subtitle: 'Deep dive into Node.js, APIs, and databases' },
  { year: '2024', title: 'Built Production Systems', subtitle: 'Stock Analyzer and Health Checkup platforms' },
  { year: '2025', title: 'Graduation & Beyond', subtitle: 'Ready for the next big challenge' },
]

export const ABOUT_POINTS: string[] = [
  'Expert in Node.js and NestJS backend development',
  'Analyze requirements and design robust System Architecture',
  'Design REST APIs and Real-Time Systems with WebSocket',
  'Translate Business Requirements into Technical Solutions',
  'Passionate about Financial Data Systems and Real-Time Architecture',
  'Collaborate effectively in Agile/Scrum environments',
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'blue',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST API', 'Microservices', 'WebSocket'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'purple',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    color: 'cyan',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Redis'],
  },
  {
    name: 'DevOps & Tools',
    icon: '🐳',
    color: 'green',
    skills: ['Docker', 'Nginx', 'APISIX', 'GitHub', 'GitLab', 'Postman', 'Swagger', 'SonarQube'],
  },
  {
    name: 'Languages',
    icon: '💻',
    color: 'orange',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    name: 'Other Skills',
    icon: '🧠',
    color: 'pink',
    skills: ['System Analysis', 'ER Diagram', 'API Design', 'Agile/Scrum', 'AI Integration'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'stock-analyzer',
    number: '01',
    icon: '📈',
    name: 'Stock Analyzer System',
    description:
      'Financial data platform with real-time analytics, REST API architecture, and performance-optimized data pipelines built for production environments.',
    highlight:
      'Successfully deployed production-ready system using Docker with Redis-powered performance optimization.',
    techStack: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
    liveUrl: '#',
    githubNote: 'This is a company project from an internship period, so the source code is private.',
  },
  {
    id: 'health-checkup',
    number: '02',
    icon: '🏥',
    iconGradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
    name: 'Health Checkup System',
    description:
      'Comprehensive health management backend with optimized database queries, clean API structure, and business logic for medical workflows.',
    techStack: ['Node.js', 'Express', 'Prisma', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/adamazx/health-checkin',
  },
  {
    id: 'motorcycle-assistant',
    number: '03',
    icon: '🏍️',
    iconGradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    name: 'Intelligent Motorcycle Selection Assistant',
    description:
      'Decision-support system using AHP and TOPSIS algorithms to help users find their ideal motorcycle through data-driven analytical recommendations.',
    techStack: ['Node.js', 'Express', 'Prisma', 'MySQL', 'Python', 'AHP', 'TOPSIS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/adamazx/MotorcycleDecision',
  },
]

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    year: '2022 – Present',
    title: 'Developer (Academic & Personal)',
    subtitle: 'Self-directed development journey',
    description:
      'Built production-grade systems from scratch, mastering the full stack from API design to Docker deployment.',
  },
  {
    year: '2024 – 2025',
    title: 'Algorithm Engineer — Intelligent Motorcycle Selection Assistant System',
    subtitle: 'AHP & TOPSIS implementation',
    description:
      'Implemented multi-criteria decision-making algorithms for intelligent product recommendation systems.',
  },
  {
    year: '2025',
    title: 'Full Stack Developer — Health Checkup System',
    subtitle: 'Healthcare management platform',
    description:
      'Designed REST APIs and database schemas using Node.js, Express, Prisma, and MySQL. Optimized query performance and collaborated with frontend developers to deliver efficient healthcare workflows.',
  },
  {
    year: '2025 – 2026',
    title: 'System Architect — Stock Analyzer System',
    subtitle: 'Financial data platform design',
    description:
      'Designed and deployed a real-time financial analytics system with Redis caching and WebSocket data feeds.',
  },
  {
    year: '2026',
    title: 'Graduate — Digital Business Technology',
    subtitle: 'GPA: 3.79 / 4.00',
    description:
      'Completed degree with distinction, specializing in backend systems and digital infrastructure.',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: '🚀',
    iconBg: 'rgba(59,130,246,0.1)',
    title: 'Production Deployment',
    description: 'Successfully deployed scalable backend system to production using Docker and Nginx',
  },
  {
    icon: '🧮',
    iconBg: 'rgba(139,92,246,0.1)',
    title: 'Algorithm Implementation',
    description: 'Built decision support system using AHP & TOPSIS multi-criteria analysis algorithms',
  },
  {
    icon: '⚡',
    iconBg: 'rgba(6,182,212,0.1)',
    title: 'Real-Time Architecture',
    description: 'Designed WebSocket-based real-time data flow systems for financial applications',
  },
  {
    icon: '📊',
    iconBg: 'rgba(34,197,94,0.1)',
    title: 'System Analysis Excellence',
    description: 'Strong analytical skills in ER diagrams, sequence diagrams, and API design documentation',
  },
  {
    icon: '🏆',
    iconBg: 'rgba(249,115,22,0.1)',
    title: 'Academic Excellence',
    description: 'Graduated with GPA 3.79 from Digital Business Technology program',
  },
]

export const COUNTERS: Counter[] = [
  { value: 3, display: '3', label: 'Projects Shipped' },
  { value: 3, display: '3', label: 'Years Coding' },
  { value: 3.79, display: '3.79', label: 'GPA Score', isDecimal: true },
]

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📧', label: 'Email', value: 'chayangkoon.ta@rmuti.ac.th' },
  { icon: '📱', label: 'Phone', value: '081-351-4964' },
  { icon: '📍', label: 'Location', value: 'Khon Kaen, Thailand' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', icon: '⎔', href: 'https://github.com/adamazx' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/chayangkoon-tachao-7a6392393/' },
  { label: 'Facebook', icon: 'f', href: 'https://www.facebook.com/Diamond.tachao' },
]
