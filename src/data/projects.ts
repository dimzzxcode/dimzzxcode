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
  previewUrl?: string
  githubUrl?: string
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
    previewUrl: '/portfolio/spiritual-care',
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
    previewUrl: '/portfolio/poling',
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
    previewUrl: '/portfolio/stokbengkel',
    date: '2023-07-01',
  },
  {
    title: { id: 'Sistem Buku Tamu Digital', en: 'Digital Guest Book System' },
    description: {
      id: 'Sistem buku tamu digital untuk berbagai instansi dan tempat. Pengunjung dapat check-in secara mandiri, dilengkapi statistik kunjungan dan laporan harian.',
      en: 'A digital guest book system for various institutions and venues. Visitors can check in independently, complete with visit statistics and daily reports.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    icon: 'book',
    type: 'personal',
    date: '2022-01-01',
    gradient: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
    iconGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.25))',
    iconColor: '#06b6d4',
    previewUrl: '',
  },
  {
    title: { id: 'SI Pondok Pesantren', en: 'Islamic Boarding School IS' },
    description: {
      id: 'Sistem informasi komprehensif untuk manajemen pesantren. Pengelolaan santri, keuangan, jadwal kegiatan, dan absensi dalam satu platform.',
      en: 'A comprehensive information system for Islamic boarding school management. Handling students, finances, activity schedules, and attendance in one platform.',
    },
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    icon: 'school',
    type: 'freelance',
    date: '2021-01-01',
    gradient: 'linear-gradient(90deg, #22c55e, #2f578a)',
    iconGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(47, 87, 138, 0.25))',
    iconColor: '#22c55e',
    previewUrl: '',
  },
  {
    title: { id: 'Sistem Inventaris Barang', en: 'Inventory System' },
    description: {
      id: 'Pencatatan stok barang masuk dan keluar dengan laporan otomatis. Memudahkan monitoring ketersediaan barang secara akurat dan ringkas.',
      en: 'Tracking of incoming and outgoing stock with automated reports. Makes monitoring item availability accurate and concise.',
    },
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    icon: 'package',
    type: 'freelance',
    date: '2021-01-01',
    gradient: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
    iconGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(139, 92, 246, 0.25))',
    iconColor: '#ec4899',
    previewUrl: '',
  },
]