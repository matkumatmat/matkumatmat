/**
 * Isi halaman About di sini — About.tsx cuma nge-render datanya.
 * Ganti semua "TODO:" dengan konten aslimu.
 */

export type AboutBlock = {
  title: string
  paragraphs: string[]
}

export type SocialLink = {
  label: string
  handle: string
  href: string
  icon: string
}

export type SkillType = 'hard' | 'soft' | 'meta' | 'cognitive' | 'life'

export type SkillGroup = {
  id: SkillType
  label: string
  icon: string
  items: string[]
}

export type About = {
  heading: string
  kicker: string
  lede: string[]
  blocks: AboutBlock[]
  skills: SkillGroup[]
  contact: {
    emails: string[]
    socials: SocialLink[]
  }
}

export const about: About = {
  heading: 'Lorem ipsum dolor sit amet',
  kicker: 'Lorem ipsum dolor',
  lede: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  ],

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

  // CONTOH FILLER buat prototipe, ganti dengan skills aslimu.
  skills: [
    {
      id: 'hard',
      label: 'Hard Skills',
      icon: 'ms-code-icon',
      items: [
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Node.js',
        'PostgreSQL',
        'REST API',
        'Git & GitHub',
        'Docker',
        'Vite',
        'Playwright',
        'Figma',
        'Linux CLI',
      ],
    },
    {
      id: 'soft',
      label: 'Soft Skills',
      icon: 'chat-icon',
      items: [
        'Communication',
        'Teamwork',
        'Leadership',
        'Empathy',
        'Adaptability',
        'Time Management',
        'Mentoring',
        'Reliability',
        'Collaboration',
        'Work Ethic',
      ],
    },
    {
      id: 'meta',
      label: 'Meta Skills',
      icon: 'layers-icon',
      items: [
        'Learning to Learn',
        'Systems Thinking',
        'Prioritization',
        'Deep Work',
        'Feedback Loops',
        'Documentation Habit',
        'Goal Setting',
        'Self Review',
        'Knowledge Sharing',
        'Process Improvement',
      ],
    },
    {
      id: 'cognitive',
      label: 'Cognitive Skills',
      icon: 'bulb-icon',
      items: [
        'Critical Thinking',
        'Analytical Reasoning',
        'Pattern Recognition',
        'Decision Making',
        'Attention to Detail',
        'Logical Thinking',
        'Research',
        'Estimation',
        'Troubleshooting',
        'Memory Techniques',
      ],
    },
    {
      id: 'life',
      label: 'Life Skills',
      icon: 'home-icon',
      items: [
        'Cooking',
        'Personal Finance',
        'First Aid',
        'Driving',
        'Fitness',
        'Gardening',
        'Photography',
        'Home Repair',
      ],
    },
  ],

  contact: {
    emails: ['mamattewahyu@gmail.com', 'rahmat.oz.es@gmail.com'],
    socials: [
      {
        label: 'GitHub',
        handle: '@matkumatmat',
        href: 'https://github.com/matkumatmat',
        icon: 'github-icon',
      },
      {
        label: 'LinkedIn',
        handle: 'in/rahmatwahyuillahi',
        href: 'https://www.linkedin.com/in/rahmatwahyuillahi/',
        icon: 'linkedin-icon',
      },
      {
        label: 'Instagram',
        handle: '@kayeeeey',
        href: 'https://www.instagram.com/kayeeeey/',
        icon: 'instagram-icon',
      },
      {
        label: 'TikTok',
        handle: '@kaayeeyyy',
        href: 'https://www.tiktok.com/@kaayeeyyy',
        icon: 'tiktok-icon',
      },
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

export type ExperienceItem = {
  icon: string
  year: string
  name: string
}

/** Order: newest to oldest. Icon = image path (/logos/...) or symbol id in public/icons.svg */
export const education: ExperienceItem[] = [
  { icon: '/logos/smkn7.png', year: '2019–2022', name: 'Chemical Analysis · SMKN 7 Bandung' },
]

/** Order: newest to oldest. Icon = image path (/logos/...) or symbol id in public/icons.svg */
export const workExperience: ExperienceItem[] = [
  {
    icon: '/logos/biofarma.png',
    year: 'Dec 2024–Present',
    name: 'Cold Chain Stock Field Lead · PT Bio Farma',
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Oct–Nov 2024',
    name: 'Cold Chain Product Stock Staff · PT Bio Farma',
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Sep 2023–Sep 2024',
    name: 'Cold Chain Product Stock Operator · PT Bio Farma',
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Jan–Aug 2023',
    name: 'Packaging Support Operator · PT Bio Farma',
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Aug–Dec 2022',
    name: 'Vaccine Packing Operator · PT Bio Farma',
  },
  { icon: '/logos/b4t.png', year: 'Aug–Dec 2021', name: 'Intern · B4T' },
]

export type Certification = {
  title: string
  issuer: string
  /** Image path (/logos/...), sprite id, atau '' untuk monogram inisial */
  logo: string
  issued: string
  credentialId: string
  /** Link verifikasi, null kalau belum ada */
  url: string | null
  skills: string[]
}

/** Order: newest to oldest. */
export const certifications: Certification[] = [
  {
    title: 'Certificate of completion: Claude 101',
    issuer: 'Anthropic',
    logo: '',
    issued: 'Mar 2026',
    credentialId: 'pzskvs6i49ep',
    url: null,
    skills: ['AI Automation', 'Artificial Intelligence'],
  },
]
