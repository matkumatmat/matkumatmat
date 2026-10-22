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

export type MilestoneCore = 'warehouse' | 'freelance' | 'programming' | 'AI'

export type Milestone = {
  image: string
  year: string
  core: MilestoneCore
  tags: string[]
  description: string
}

function placeholderImage(label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="100%" height="100%" fill="#a8a29e"/><text x="50%" y="50%" fill="#1c1917" font-family="monospace" font-size="30" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const milestones: Milestone[] = [
  {
    image: placeholderImage('TODO gambar 1'),
    year: 'TODO: 2016',
    core: 'warehouse',
    tags: ['TODO: stok opname'],
    description:
      'TODO: peran pertamamu di gudang: tanggung jawab harian, sistem yang dipakai, dan apa yang dipelajari soal ketelitian. Tulis satu momen yang paling membentuk caramu bekerja sampai sekarang.',
  },
  {
    image: placeholderImage('TODO gambar 2'),
    year: 'TODO: 2017',
    core: 'warehouse',
    tags: ['TODO: lead shift'],
    description:
      'TODO: tanggung jawab yang bertambah: memimpin shift, mengatur stok, atau menekan angka selisih. Ceritakan target konkret yang berhasil dicapai dan bagaimana caranya.',
  },
  {
    image: placeholderImage('TODO gambar 3'),
    year: 'TODO: 2018',
    core: 'warehouse',
    tags: ['TODO: layout rak'],
    description:
      'TODO: perbaikan proses yang kamu usulkan: alur picking, layout rak, atau pencatatan. Jelaskan kondisi sebelum dan sesudahnya, plus dampaknya ke tim.',
  },
  {
    image: placeholderImage('TODO gambar 4'),
    year: 'TODO: 2019',
    core: 'freelance',
    tags: ['TODO: klien pertama'],
    description:
      'TODO: proyek freelance pertama: dari mana kliennya datang dan apa yang dikerjakan. Jujur soal tarif awal dan pelajaran paling mahal dari proyek ini.',
  },
  {
    image: placeholderImage('TODO gambar 5'),
    year: 'TODO: 2020',
    core: 'freelance',
    tags: ['TODO: retainer'],
    description:
      'TODO: titik ketika freelance jadi serius: klien berulang, kontrak lebih besar, atau niche yang dipilih. Tulis apa yang berubah dari caramu menangani klien.',
  },
  {
    image: placeholderImage('TODO gambar 6'),
    year: 'TODO: 2021',
    core: 'freelance',
    tags: ['TODO: proyek besar'],
    description:
      'TODO: proyek freelance paling berkesan: masalah kliennya, solusimu, dan hasilnya. Kalau ada angka (omzet klien naik, waktu hemat), taruh di sini.',
  },
  {
    image: placeholderImage('TODO gambar 7'),
    year: 'TODO: 2022',
    core: 'programming',
    tags: ['TODO: bahasa pertama'],
    description:
      'TODO: awal masuk programming: bahasa pertama, alasan pindah jalur, dan proyek pertama yang selesai. Ceritakan fase paling frustasi dan cara melewatinya.',
  },
  {
    image: placeholderImage('TODO gambar 8'),
    year: 'TODO: 2023',
    core: 'programming',
    tags: ['TODO: rilis perdana'],
    description:
      'TODO: aplikasi atau web pertama yang dipakai orang lain: stack yang dipakai dan fitur utamanya. Tulis feedback pengguna yang paling mengubah arah pengembangan.',
  },
  {
    image: placeholderImage('TODO gambar 9'),
    year: 'TODO: 2024',
    core: 'AI',
    tags: ['TODO: workflow AI'],
    description:
      'TODO: pertama kali memakai AI untuk kerja nyata: use case-nya, tool yang dipakai, dan apa yang berubah dari outputmu. Sebutkan satu workflow yang sekarang tidak bisa dilepas.',
  },
  {
    image: placeholderImage('TODO gambar 10'),
    year: 'TODO: 2025',
    core: 'AI',
    tags: ['TODO: arah baru'],
    description:
      'TODO: posisimu sekarang: bagaimana warehouse, freelance, programming, dan AI bertemu di kerjaanmu hari ini. Tutup dengan arah yang sedang dibangun ke depan.',
  },
]
