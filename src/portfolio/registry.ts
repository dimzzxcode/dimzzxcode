import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import { Heart, Vote, Wrench, type LucideIcon } from 'lucide-react'

export interface DemoRegistryItem {
  path: string
  slug: string
  name: string
  tech: string[]
  description: string
  icon: LucideIcon
  component: LazyExoticComponent<ComponentType>
}

export const demoRegistry: DemoRegistryItem[] = [
  {
    path: '/portfolio/poling',
    slug: 'poling',
    name: 'Poling',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    description:
      'Platform pemungutan suara dan polling online. Fitur pembuatan polling dinamis, voting, dan rekapitulasi hasil yang mudah dipahami.',
    icon: Vote,
    component: lazy(() => import('./demos/poling/PolingDemo')),
  },
  {
    path: '/portfolio/spiritual-care',
    slug: 'spiritual-care',
    name: 'Spiritual Care',
    tech: ['Expo React', 'Laravel API', 'MySQL'],
    description:
      'Aplikasi mobile untuk pendampingan spiritual dan kesehatan mental. Fitur jurnal harian, meditasi terpandu, dan tracking mood dengan antarmuka yang calming.',
    icon: Heart,
    component: lazy(() => import('./demos/spiritual-care/SpiritualCareDemo')),
  },
  {
    path: '/portfolio/stokbengkel',
    slug: 'stok-bengkel',
    name: 'Stok Bengkel',
    tech: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    description:
      'Aplikasi manajemen stok dan inventaris khusus untuk bengkel. Fitur pencatatan barang masuk/keluar, laporan penggunaan, dan alert stok minimum.',
    icon: Wrench,
    component: lazy(() => import('./demos/stok-bengkel/StokBengkelDemo')),
  },
]