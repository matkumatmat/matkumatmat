/**
 * Isi halaman About di sini — About.tsx cuma nge-render datanya.
 * Ganti semua "TODO:" dengan konten aslimu.
 */

export type AboutBlock = {
  title: string
  paragraphs: string[]
}

export type AboutLink = {
  label: string
  href: string
}

export type About = {
  heading: string
  lede: string
  blocks: AboutBlock[]
  skills: string[]
  contact: {
    email: string
    links: AboutLink[]
  }
}

export const about: About = {
  heading: 'TODO: judul halaman',
  lede: 'TODO: satu kalimat ringkas yang menjelaskan siapa kamu dan fokus kerjamu.',

  blocks: [
    {
      title: 'TODO: judul blok pertama',
      paragraphs: [
        'TODO: paragraf pembuka.',
        'TODO: paragraf lanjutan yang menjelaskan konteks, pendekatan, atau motivation.',
      ],
    },
    {
      title: 'TODO: judul blok kedua',
      paragraphs: ['TODO: paragraf pembuka.', 'TODO: paragraf penutup.'],
    },
  ],

  skills: [
    'TODO: TypeScript',
    'TODO: React',
    'TODO: Skill lain',
  ],

  contact: {
    email: 'TODO: email@kamu.dev',
    links: [
      { label: 'TODO: GitHub', href: 'https://github.com/' },
      { label: 'TODO: LinkedIn', href: 'https://linkedin.com/' },
    ],
  },
}

export type ResumeDoc = {
  id: 'creative' | 'ats'
  label: string
  blurb: string
  variant: 'creative' | 'ats'
  href: string | null
}

export const resumes: ResumeDoc[] = [
  {
    id: 'creative',
    label: 'CV Creative',
    blurb: '',
    variant: 'creative',
    href: null,
  },
  {
    id: 'ats',
    label: 'CV ATS',
    blurb: '',
    variant: 'ats',
    href: null,
  },
]

export type Milestone = {
  year: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    year: 'TODO: 2021',
    title: 'TODO: judul milestone pertama',
    description:
      'TODO: deskripsi singkat — apa yang terjadi, peranmu, dan hasil yang dicapai.',
  },
  {
    year: 'TODO: 2022',
    title: 'TODO: judul milestone kedua',
    description:
      'TODO: deskripsi singkat — proyek, pivot, atau pencapaian yang menandai babak baru.',
  },
  {
    year: 'TODO: 2023',
    title: 'TODO: judul milestone ketiga',
    description:
      'TODO: deskripsi singkat — dampak nyata: angka, pengguna, atau perubahan yang kamu bawa.',
  },
  {
    year: 'TODO: 2024',
    title: 'TODO: judul milestone keempat',
    description:
      'TODO: deskripsi singkat — posisi kamu sekarang dan arah yang sedang dibangun.',
  },
]
