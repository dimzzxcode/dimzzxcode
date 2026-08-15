import type { Bilingual } from './types'

export interface ExperienceItem {
  title: Bilingual
  year: string
  role: string
  description: Bilingual
  tech: string[]
  date: string
}

export const experienceItems: ExperienceItem[] = [
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
  },
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
  },
  {
    title: { id: 'Sistem Buku Tamu Digital', en: 'Digital Guest Book System' },
    year: '2022',
    role: 'Full Stack Web',
    description: {
      id: 'Sistem buku tamu digital untuk berbagai instansi dan tempat. Pengunjung dapat check-in secara mandiri, dilengkapi statistik kunjungan dan laporan harian.',
      en: 'A digital guest book system for various institutions and venues. Visitors can check in independently, complete with visit statistics and daily reports.',
    },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    date: '2022-01-01',
  },
  {
    title: { id: 'SI Pondok Pesantren', en: 'Islamic Boarding School IS' },
    year: '2021–2022',
    role: 'Full Stack Web',
    description: {
      id: 'Sistem informasi komprehensif untuk manajemen pesantren. Pengelolaan santri, keuangan, jadwal kegiatan, dan absensi dalam satu platform.',
      en: 'A comprehensive information system for Islamic boarding school management. Handling students, finances, activity schedules, and attendance in one platform.',
    },
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    date: '2021-01-01',
  },
  {
    title: { id: 'Sistem Inventaris Barang', en: 'Inventory System' },
    year: '2021–2022',
    role: 'Full Stack Web',
    description: {
      id: 'Pencatatan stok barang masuk dan keluar dengan laporan otomatis. Memudahkan monitoring ketersediaan barang secara akurat dan ringkas.',
      en: 'Tracking of incoming and outgoing stock with automated reports. Makes monitoring item availability accurate and concise.',
    },
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    date: '2021-01-01',
  },
]