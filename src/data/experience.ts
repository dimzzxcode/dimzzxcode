import type { Bilingual } from './types'

export interface Employment {
  role: string
  organization: Bilingual
  period: Bilingual
  description: Bilingual
  type: 'fulltime' | 'freelance' | 'personal'
}

export interface ExperienceItem {
  title: Bilingual
  year: string
  role: string
  description: Bilingual
  tech: string[]
  date: string
  organization?: Bilingual
  type: 'fulltime' | 'freelance' | 'personal'
}

export const employment: Employment = {
  role: 'Full Stack Developer',
  organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
  period: { id: 'Des 2022 – Jun 2026', en: 'Dec 2022 – Jun 2026' },
  description: {
    id: 'Mengembangkan dan memelihara sistem informasi internal sekolah sebagai Full Stack Developer — presensi digital, jurnal asesmen belajar, manajemen aset, administrasi perpustakaan, hingga sistem ePKL.',
    en: "Developed and maintained the school's internal information systems as a Full Stack Developer — digital attendance, learning assessment journal, asset management, library administration, up to the ePKL system.",
  },
  type: 'fulltime',
}

export const experienceItems: ExperienceItem[] = [
  {
    title: { id: 'Sistem Pengunjung Perpustakaan', en: 'Library Visitor System' },
    year: '2023–2024',
    role: 'Web & Mobile',
    description: {
      id: 'Sistem pencatatan dan manajemen pengunjung perpustakaan. Pendaftaran digital, badge cetak otomatis, dan rekap kunjungan yang terintegrasi.',
      en: 'A library visitor recording and management system. Digital registration, automatic badge printing, and integrated visit summaries.',
    },
    tech: ['Laravel', 'MySQL', 'REST API', 'Expo React', 'Bootstrap'],
    date: '2023-01-01',
    organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
    type: 'fulltime',
  },
  {
    title: { id: 'Sistem Manajemen Aset', en: 'Asset Management System' },
    year: '2023–2025',
    role: 'Full Stack Web',
    description: {
      id: 'Pengelolaan aset secara menyeluruh. Pencatatan asal usul barang, penyusutan nilai, peminjaman, penghapusan, hingga perawatan dalam satu platform terpadu.',
      en: 'Comprehensive asset management. Tracking item origins, depreciation, lending, disposal, and maintenance in one integrated platform.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    date: '2023-01-01',
    organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
    type: 'fulltime',
  },
  {
    title: { id: 'JUARA – Jurnal Asesmen Belajar', en: 'JUARA – Learning Assessment Journal' },
    year: '2023–2025',
    role: 'Full Stack Web',
    description: {
      id: 'Platform digital untuk pencatatan dan pengelolaan jurnal asesmen belajar siswa. Memudahkan guru dalam mendokumentasikan perkembangan peserta didik.',
      en: 'A digital platform for recording and managing student learning assessment journals. Makes it easy for teachers to document students\' progress.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    date: '2023-01-01',
    organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
    type: 'fulltime',
  },
  {
    title: { id: 'Sistem ePresensi', en: 'ePresence System' },
    year: '2024–2025',
    role: 'Full Stack Web',
    description: {
      id: 'Sistem presensi digital berbasis web untuk manajemen kehadiran yang terintegrasi, dilengkapi fitur laporan otomatis.',
      en: 'A web-based digital attendance system for integrated presence management, complete with automated reporting features.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    date: '2024-01-01',
    organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
    type: 'fulltime',
  },
  {
    title: { id: 'Sistem ePKL', en: 'ePKL System' },
    year: '2025–2026',
    role: 'Full Stack Web',
    description: {
      id: 'Sistem manajemen Praktik Kerja Lapangan digital. Pengelolaan data siswa PKL, monitoring, dan pelaporan secara terpusat dan efisien.',
      en: 'A digital on-the-job training (PKL) management system. Centralized and efficient management of student data, monitoring, and reporting.',
    },
    tech: ['Laravel', 'Vue', 'Tailwind', 'MySQL'],
    date: '2025-01-01',
    organization: { id: 'SMK Telkom Purwokerto', en: 'SMK Telkom Purwokerto' },
    type: 'fulltime',
  },
]