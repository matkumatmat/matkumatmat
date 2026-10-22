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
  heading: 'Operator by profession, builder by habit.',
  kicker: 'Cold Chain Lead · Developer · AI Practitioner',
  lede: [
    'I lead cold chain stock operations at PT Bio Farma, with 4 years across warehouse and supply chain roles. I started as a packing operator in 2022 and worked up to field lead, through WHO audit preparation and distributor audits as a warehouse auditor.',
    'Along the way I started building the tools I needed instead of waiting for them: stock recording systems in Excel, a warehouse management system with GS1 barcode integration backed by a database, dashboards, and ticketing apps, using Python, TypeScript, Go, and AppSheet. Between shifts I work as a freelance data analyst, from web scraping to thesis datasets.',
    'Since 2024 I have folded AI into everything: research workflows with verifiable citations, coding agents, a voice-driven stock opname bot, and a multi-division AI workspace. Years of operations work trained my logical thinking, and that is what my decision making runs on.',
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

  // Diisi dari hasil interview pemilik.
  skills: [
    {
      id: 'hard',
      label: 'Hard Skills',
      icon: 'ms-code-icon',
      items: [
        'Python',
        'TypeScript',
        'Go',
        'React',
        'Excel & VBA',
        'AppSheet',
        'Apps Script',
        'Data Analysis',
        'Web Scraping',
        'ML Fundamentals',
        'AI Agents & Skills',
        'Cold Chain Operations',
        'Warehouse Auditing',
        'GS1 Barcoding',
        'Linux',
        'Databases',
        'Git & GitHub',
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
        'Adaptability',
        'Time Management',
        'Reliability',
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
        'Process Improvement',
        'Documentation Habit',
        'Deep Work',
        'Prioritization',
        'Self Review',
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
        'Troubleshooting',
      ],
    },
    {
      id: 'life',
      label: 'Life Skills',
      icon: 'home-icon',
      items: ['Side Projects', 'Creative Outlets', 'Continuous Learning', 'Tinkering with Tools', 'Chess'],
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
    blurb: 'One-page visual resume with photo and highlights.',
    variant: 'creative',
    href: null,
  },
  {
    id: 'ats',
    label: 'CV ATS',
    blurb: 'Two-page ATS-friendly resume with full history.',
    variant: 'ats',
    href: null,
  },
]

export const owner = {
  name: 'Rahmat Wahyu Illahi',
  role: 'Cold Chain Stock Field Lead',
  phone: '+62 812 2113 5988',
  location: 'Bandung, Indonesia',
  profile:
    'Field Lead for cold chain stock at PT Bio Farma with 4 years across warehouse and supply chain roles. Builds operational tools with Python, TypeScript, and Go, from warehouse management systems to AI-assisted workflows.',
}

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

/**
 * Urutan kronologis per core. Tahun bertanda approx adalah perkiraan yang
 * disetujui pemilik (lihat milestones.interview.md); gambar diisi pemilik.
 */
export const milestones: Milestone[] = [
  {
    image: placeholderImage('warehouse 2022'),
    year: '2022',
    core: 'warehouse',
    tags: ['packing workflow'],
    description:
      'Started as a Vaccine Packing Operator at PT Bio Farma. Proposed a preparation flow change to my supervisor: staging all packing preparation 30 minutes before the process starts. The proposal was accepted and the packing line finished faster.',
  },
  {
    image: placeholderImage('warehouse Dec 2022'),
    year: 'Dec 2022',
    core: 'warehouse',
    tags: ['WHO audit prep'],
    description:
      'Assigned to the core hygiene team preparing for the WHO audit. Learned cleanliness standards and audit readiness inside out, from daily discipline to inspection-day preparation.',
  },
  {
    image: placeholderImage('warehouse Jul 2025'),
    year: 'Jul 2025',
    core: 'warehouse',
    tags: ['distributor audit'],
    description:
      'Audited the MUP Jakarta distributor warehouse and assessed its readiness.',
  },
  {
    image: placeholderImage('warehouse Aug 2025'),
    year: 'Aug 2025',
    core: 'warehouse',
    tags: ['distributor audit'],
    description: 'Audited the Elo Karsa and Itama Ranoraya distributor warehouses.',
  },
  {
    image: placeholderImage('warehouse Sep 2025'),
    year: 'Sep 2025',
    core: 'warehouse',
    tags: ['distributor audit'],
    description:
      'Audited the PPI Padang distributor warehouse before its opening. Found 3 major issues that stopped the distributor from proceeding.',
  },
  {
    image: placeholderImage('programming 2023'),
    year: '2023',
    core: 'programming',
    tags: ['stock records'],
    description:
      'Built a packaging support stock recording system with Excel, Visual Basic, and spreadsheets, synced so every worker updates the same records.',
  },
  {
    image: placeholderImage('programming Nov 2023'),
    year: 'Nov 2023',
    core: 'programming',
    tags: ['data analysis'],
    description:
      'Learned Python for data analysis to forecast embalage needs and produced the report from it.',
  },
  {
    image: placeholderImage('programming 2024'),
    year: '2024',
    core: 'programming',
    tags: ['stock management'],
    description:
      'Built an Excel sheet system to manage cold chain product stock as a stock operator.',
  },
  {
    image: placeholderImage('programming Jan 2025'),
    year: 'Jan 2025',
    core: 'programming',
    tags: ['label printing'],
    description: 'Developed shipping label printing software with Python for Zebra printers.',
  },
  {
    image: placeholderImage('programming Feb 2025'),
    year: 'Feb 2025',
    core: 'programming',
    tags: ['WMS'],
    description:
      'Developed a warehouse management system covering the process flow plus a dashboard, built with Python and TypeScript.',
  },
  {
    image: placeholderImage('programming Mar 2025'),
    year: 'Mar 2025',
    core: 'programming',
    tags: ['WMS v2'],
    description:
      'As Cold Chain Stock Field Lead, developed WMS version 2 with GS1 barcode integration and Zebra printers, unifying warehouse management and shipping. Built with Python, Go, and TypeScript.',
  },
  {
    image: placeholderImage('programming Apr 2025'),
    year: 'Apr 2025',
    core: 'programming',
    tags: ['AppSheet'],
    description: 'Developed an AppSheet app for the warehouse management system.',
  },
  {
    image: placeholderImage('programming May 2025'),
    year: 'May 2025',
    core: 'programming',
    tags: ['security report'],
    description: 'Found a company security gap and reported it to the SOC team.',
  },
  {
    image: placeholderImage('programming Jun 2025'),
    year: 'Jun 2025',
    core: 'programming',
    tags: ['stock dashboard'],
    description:
      'Developed an external stock dashboard with Apps Script and spreadsheets.',
  },
  {
    image: placeholderImage('programming Jul 2025'),
    year: 'Jul 2025',
    core: 'programming',
    tags: ['sample ticketing'],
    description:
      'Developed sample request ticketing software with Apps Script and React.',
  },
  {
    image: placeholderImage('programming Aug 2025'),
    year: 'Aug 2025',
    core: 'programming',
    tags: ['temperature logger'],
    description: 'Developed an app for bulk temperature logger configuration.',
  },
  {
    image: placeholderImage('programming Sep 2025'),
    year: 'Sep 2025',
    core: 'programming',
    tags: ['stock opname'],
    description: 'Developed an AppSheet app for the company stock opname process.',
  },
  {
    image: placeholderImage('freelance Nov 2024'),
    year: 'Nov 2024',
    core: 'freelance',
    tags: ['web scraping'],
    description:
      'First freelance project: a Python script scraping X for a thesis on political quantitative analysis. The client came from Fastwork.',
  },
  {
    image: placeholderImage('freelance Jan 2025'),
    year: 'Early 2025',
    core: 'freelance',
    tags: ['data analysis'],
    description:
      'Freelance data analysis and cleaning for a medical student thesis on ECG data. This project taught me machine learning fundamentals and sparked my interest in AI.',
  },
  {
    image: placeholderImage('freelance Jan 2025 data'),
    year: 'Jan 2025',
    core: 'freelance',
    tags: ['thesis data'],
    description:
      'Full thesis data work for a banking accounting student on stock issuer topics. Learned data gathering, cleaning, processing, and research methodology from scratch, without studying it in college.',
  },
  {
    image: placeholderImage('freelance Mar 2025'),
    year: 'Mar 2025',
    core: 'freelance',
    tags: ['linux setup'],
    description:
      'Daily computer installation freelance using Ubuntu Linux. The client came from Facebook.',
  },
  {
    image: placeholderImage('freelance Jul 2026'),
    year: 'Jul 2026',
    core: 'freelance',
    tags: ['thesis data'],
    description:
      'Full thesis data work on global economy accounting topics. Learned macro and micro economics deeply along the way.',
  },
  {
    image: placeholderImage('AI late 2024'),
    year: 'Late 2024',
    core: 'AI',
    tags: ['first contact'],
    description:
      'First got interested in AI through ChatGPT while it boomed. Only used it for asking questions, not for real work yet.',
  },
  {
    image: placeholderImage('AI early 2025'),
    year: 'Early 2025',
    core: 'AI',
    tags: ['learning'],
    description:
      'Started using Gemini to push my learning. Joined NotebookLM while it was still waitlisted, took notes there, and learned fast from it.',
  },
  {
    image: placeholderImage('AI mid 2025'),
    year: 'Mid 2025',
    core: 'AI',
    tags: ['research workflow'],
    description:
      'Built an analysis workflow and learned to write AI skills. Created a custom skill so AI scrapes real sources with verifiable, accessible citations. It gets used.',
  },
  {
    image: placeholderImage('AI Aug 2025'),
    year: 'Aug 2025',
    core: 'AI',
    tags: ['coding workflow'],
    description:
      'Discovered the OpenCode AI harness and built an AI coding workflow around it, learning to create custom skills, MCPs, plugins, and agents.',
  },
  {
    image: placeholderImage('AI Sep 2025'),
    year: 'Sep 2025',
    core: 'AI',
    tags: ['voice agent'],
    description:
      'Built a dedicated agent for stock opname input: I speak the item, location, and quantity, and the agent enters it into the Apps Script API. Basically a bot.',
  },
  {
    image: placeholderImage('AI Sep 2026'),
    year: 'Sep 2026',
    core: 'AI',
    tags: ['AI workspace'],
    description:
      'Built an AI workspace with several divisions. The most interesting one is the creative division, which automates content, running on the Hermess harness.',
  },
]

export type ExperienceItem = {
  icon: string
  year: string
  name: string
  /** CV bullets, dipakai CvPaper. Opsional karena education tidak memakainya. */
  bullets?: string[]
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
    bullets: [
      'Developed WMS v2 with GS1 barcode integration and Zebra printers using Python, Go, and TypeScript, unifying warehouse and shipping.',
      'Audited distributor warehouses; 3 major findings stopped PPI Padang from opening.',
      'Built a voice-driven stock opname agent that enters spoken counts into the Apps Script API.',
      'Reported a company security gap to the SOC team.',
    ],
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Oct–Nov 2024',
    name: 'Cold Chain Product Stock Staff · PT Bio Farma',
    bullets: ['Promoted from operator after one year of cold chain stock operations.'],
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Sep 2023–Sep 2024',
    name: 'Cold Chain Product Stock Operator · PT Bio Farma',
    bullets: [
      'Built an Excel sheet system to manage cold chain product stock.',
      'Handled daily stock recording for cold chain products.',
    ],
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Jan–Aug 2023',
    name: 'Packaging Support Operator · PT Bio Farma',
    bullets: [
      'Built an embalage stock recording system with Excel, VBA, and spreadsheets synced across workers.',
      'Forecast embalage needs with Python data analysis and produced the report.',
    ],
  },
  {
    icon: '/logos/biofarma.png',
    year: 'Aug–Dec 2022',
    name: 'Vaccine Packing Operator · PT Bio Farma',
    bullets: [
      'Proposed staging packing preparation 30 minutes early; accepted, and the line finished faster.',
      'Joined the core hygiene team preparing for the WHO audit.',
    ],
  },
  {
    icon: '/logos/b4t.png',
    year: 'Aug–Dec 2021',
    name: 'Intern · B4T',
    bullets: ['Completed a 5-month internship.'],
  },
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
