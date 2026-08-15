# DimzzXCode – Portfolio

Website portfolio pribadi untuk **Dimas Cahyo Nur Aditya (DimzzXCode)** — Software Developer & Backend Engineer. Dibangun dengan React, TypeScript, Vite, dan Tailwind CSS.

## Teknologi

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **lucide-react** (ikon UI)
- **Vercel** (deployment)

## Fitur

- Bilingual **Indonesia / English** (toggle bahasa, tersimpan di `localStorage`)
- Satu halaman dengan section: Hero, About, Services, Experience, Skills, Projects, Contact, Footer
- Scroll-reveal animation (IntersectionObserver)
- Navbar aktif mengikuti section yang sedang dilihat
- Tombol back-to-top
- Download CV (ID/EN)
- Responsive (mobile-first)
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD structured data, `robots.txt`, `sitemap.xml`, dan `og-image.png`

## Struktur Proyek

```
src/
├── components/   # Komponen UI per section
├── data/         # Data proyek, pengalaman, skill
├── hooks/        # Custom hooks (reveal, scrolled, active section, dll)
├── i18n/         # Provider & terjemahan ID/EN
└── assets/icons/ # Ikon tech stack (SVG)
public/
├── favicon_io/   # Favicon & manifest
├── resume/       # File CV (PDF)
├── robots.txt
├── sitemap.xml
└── og-image.png  # Thumbnail social sharing (1200x630)
```

## Menjalankan Lokal

```bash
npm install
npm run dev        # development server (http://localhost:5173)
```

## Build & Lint

```bash
npm run build      # tsc + vite build → folder dist/
npm run lint       # oxlint
npm run preview    # preview hasil build
```

## Deploy ke Vercel

Proyek sudah disiapkan untuk Vercel (`vercel.json` sudah mengatur rewrites & headers untuk SPA).

1. Push repo ke GitHub
2. Import di [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite** (build `npm run build`, output `dist`)

### Setelah Deploy

- Daftarkan domain di [Google Search Console](https://search.google.com/search-console) dan submit `sitemap.xml`
- Jika memakai domain kustom, update `canonical`, `og:url`, `robots.txt`, `sitemap.xml`, dan URL `dimzzxcode.vercel.app` di `index.html`

## Scripts

| Perintah            | Fungsi                                  |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Menjalankan development server           |
| `npm run build`     | Type-check + production build            |
| `npm run lint`      | Menjalankan oxlint                       |
| `npm run preview`   | Preview hasil build secara lokal         |
