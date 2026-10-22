// Sumber: src/index.css (@theme inline, type scale). Kalau token berubah, update di sini juga.
export type TypeScaleStep = {
  label: string
  className: string
  specimen: string
  spec: string
}

const SPECIMEN = 'Design tokens in motion'

export const typeScale: TypeScaleStep[] = [
  {
    label: 'display',
    className: 'text-display display-tight',
    specimen: SPECIMEN,
    spec: 'clamp(2.75rem, 1.5rem + 5vw, 6rem) · 800 · 0.95 · -0.04em',
  },
  {
    label: 'title',
    className: 'text-title',
    specimen: SPECIMEN,
    spec: 'clamp(2rem, 1.3rem + 2.8vw, 3.25rem) · 700 · 1.05 · -0.03em',
  },
  {
    label: 'heading',
    className: 'text-heading',
    specimen: SPECIMEN,
    spec: 'clamp(1.5rem, 1.2rem + 1.4vw, 2rem) · 700 · 1.15 · -0.02em',
  },
  {
    label: 'subheading',
    className: 'text-subheading',
    specimen: SPECIMEN,
    spec: '1.25rem · 600 · 1.3 · -0.01em',
  },
  { label: 'body', className: 'text-body', specimen: SPECIMEN, spec: '1rem · 400 · 1.6' },
  { label: 'small', className: 'text-small', specimen: SPECIMEN, spec: '0.875rem · 1.5' },
  {
    label: 'label',
    className: 'text-label uppercase text-accent-text',
    specimen: SPECIMEN,
    spec: '0.75rem · 600 · 1.2 · +0.08em',
  },
]
