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
