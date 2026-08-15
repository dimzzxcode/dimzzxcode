import type { Bilingual } from './types'

export interface ProjectItem {
  title: Bilingual
  description: Bilingual
  tech: string[]
  icon: string
  type: 'freelance' | 'personal'
  gradient: string
  iconGradient: string
  iconColor: string
  previewUrl: string
  githubUrl: string
  date: string
}

export const projects: ProjectItem[] = [
  {
    title: { id: 'Aplikasi Spiritual Care', en: 'Spiritual Care App' },
    description: {
      id: 'Aplikasi mobile untuk pendampingan spiritual dan kesehatan mental. Fitur jurnal harian, meditasi terpandu, dan tracking mood dengan antarmuka yang calming.',
      en: 'A mobile app for spiritual and mental health support. Features a daily journal, guided meditation, and mood tracking with a calming interface.',
    },
    tech: ['Expo React', 'Laravel API', 'MySQL'],
    icon: 'heart',
    type: 'freelance',
    gradient: 'linear-gradient(90deg, #a855f7, #36ada3)',
    iconGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(54, 173, 163, 0.25))',
    iconColor: '#a855f7',
    previewUrl: '#',
    githubUrl: '#',
    date: '2024-09-01',
  },
  {
    title: { id: 'Aplikasi Poling', en: 'Polling App' },
    description: {
      id: 'Platform pemungutan suara dan polling online. Fitur pembuatan polling dinamis, voting, dan rekapitulasi hasil yang mudah dipahami.',
      en: 'An online voting and polling platform. Features dynamic poll creation, voting, and easy-to-understand result summaries.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    icon: 'vote',
    type: 'freelance',
    gradient: 'linear-gradient(90deg, #f59e0b, #36ada3)',
    iconGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(54, 173, 163, 0.25))',
    iconColor: '#f59e0b',
    previewUrl: '#',
    githubUrl: '#',
    date: '2024-02-01',
  },
  {
    title: { id: 'Aplikasi Stok Barang Bengkel', en: 'Workshop Stock App' },
    description: {
      id: 'Aplikasi manajemen stok dan inventaris khusus untuk bengkel. Fitur pencatatan barang masuk/keluar, laporan penggunaan, dan alert stok minimum.',
      en: 'A stock and inventory management app built specifically for workshops. Features in/out item tracking, usage reports, and minimum stock alerts.',
    },
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    icon: 'wrench',
    type: 'freelance',
    gradient: 'linear-gradient(90deg, #36ada3, #2f578a)',
    iconGradient: 'linear-gradient(135deg, rgba(54, 173, 163, 0.25), rgba(47, 87, 138, 0.25))',
    iconColor: '#36ADA3',
    previewUrl: '#',
    githubUrl: '#',
    date: '2023-07-01',
  },
]