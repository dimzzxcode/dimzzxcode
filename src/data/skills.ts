import type { Bilingual } from './types'

export type LevelColor = 'teal' | 'sky' | 'purple' | 'amber'

export interface SkillItem {
  name: string
  subtitle: Bilingual
  icon: string
  level: 'oftenUsed' | 'fairlyUsed' | 'planToLearn'
  levelColor: LevelColor
  tag?: string
  plan?: boolean
}

export const skills: SkillItem[] = [
  {
    name: 'AI-Assisted Dev',
    subtitle: { id: 'Alur Kerja AI', en: 'AI Workflow' },
    icon: 'openai',
    level: 'oftenUsed',
    levelColor: 'purple',
    tag: 'Code Review & Debugging',
  },
  {
    name: 'Laravel',
    subtitle: { id: 'Framework PHP', en: 'PHP Framework' },
    icon: 'laravel',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'MVC / API',
  },
  {
    name: 'React',
    subtitle: { id: 'Library Frontend', en: 'Frontend Library' },
    icon: 'react',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'SPA / Hooks',
  },
  {
    name: 'Tailwind CSS',
    subtitle: { id: 'Framework CSS', en: 'CSS Framework' },
    icon: 'tailwindcss',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'Responsive Design',
  },
  {
    name: 'CodeIgniter',
    subtitle: { id: 'Framework PHP', en: 'PHP Framework' },
    icon: 'codeigniter',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'MVC',
  },
  {
    name: 'Bootstrap',
    subtitle: { id: 'Framework CSS', en: 'CSS Framework' },
    icon: 'bootstrap5',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'Responsive Design',
  },
  {
    name: 'Vue',
    subtitle: { id: 'Framework Frontend', en: 'Frontend Framework' },
    icon: 'vuejs',
    level: 'fairlyUsed',
    levelColor: 'teal',
    tag: 'SPA / Options API',
  },
  {
    name: 'Expo React',
    subtitle: { id: 'Framework Mobile', en: 'Mobile Framework' },
    icon: 'expo',
    level: 'fairlyUsed',
    levelColor: 'sky',
    tag: 'Cross-Platform',
  },
  {
    name: 'MySQL',
    subtitle: { id: 'Basis Data', en: 'Database' },
    icon: 'mysql',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'Query Optimization',
  },
  {
    name: 'REST API',
    subtitle: { id: 'Desain API', en: 'API Design' },
    icon: 'json',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'Architecture',
  },
  {
    name: 'Git & GitHub',
    subtitle: { id: 'Kontrol Versi', en: 'Version Control' },
    icon: 'github',
    level: 'oftenUsed',
    levelColor: 'teal',
    tag: 'Collaboration',
  },
  {
    name: 'Golang',
    subtitle: { id: 'Bahasa Backend', en: 'Backend Language' },
    icon: 'go',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'Docker',
    subtitle: { id: 'DevOps & Kontainer', en: 'DevOps & Container' },
    icon: 'docker',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'Next',
    subtitle: { id: 'Framework Fullstack', en: 'Fullstack Framework' },
    icon: 'nextjs',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'CI/CD',
    subtitle: { id: 'Alur Kerja Otomatis', en: 'Automation Workflow' },
    icon: 'circleci',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'PostgreSQL',
    subtitle: { id: 'Basis Data Relasional', en: 'Relational Database' },
    icon: 'postgresql',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'MongoDB',
    subtitle: { id: 'Basis Data NoSQL', en: 'NoSQL Database' },
    icon: 'mongodb',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
  {
    name: 'Redis',
    subtitle: { id: 'Cache & In-Memory', en: 'Cache & In-Memory' },
    icon: 'redis',
    level: 'planToLearn',
    levelColor: 'amber',
    plan: true,
  },
]