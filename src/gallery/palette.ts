// Sumber: src/index.css (:root dan .dark). Kalau token berubah, update di sini juga.
export type PaletteEntry = {
  name: string
  token: string
  light: string
  dark: string
  className: string
}

export const palette: PaletteEntry[] = [
  { name: 'Canvas', token: '--canvas', light: '#f4f4f0', dark: '#0c0a09', className: 'bg-canvas' },
  { name: 'Surface', token: '--surface', light: '#ffffff', dark: '#1a1817', className: 'bg-surface' },
  { name: 'Surface 2', token: '--surface-2', light: '#fafaf7', dark: '#232120', className: 'bg-surface-2' },
  { name: 'Ink', token: '--fg', light: '#0c0a09', dark: '#f4f4f0', className: 'text-fg' },
  { name: 'Muted', token: '--fg-muted', light: '#6b675e', dark: '#9b978e', className: 'text-fg-muted' },
  { name: 'Line', token: '--line', light: '#e3e0d6', dark: '#2f2c29', className: 'border-line' },
  { name: 'Brand', token: '--brand', light: '#054082', dark: '#0a4a99', className: 'bg-brand' },
  { name: 'Brand text', token: '--brand-text', light: '#054082', dark: '#7fa8e6', className: 'text-brand-text' },
  { name: 'Brand fg', token: '--brand-fg', light: '#f4f4f0', dark: '#f4f4f0', className: 'text-brand-fg' },
  { name: 'Accent', token: '--accent', light: '#b8d600', dark: '#b8d600', className: 'bg-accent' },
  { name: 'Accent text', token: '--accent-text', light: '#566b00', dark: '#b8d600', className: 'text-accent-text' },
  { name: 'Accent fg', token: '--accent-fg', light: '#0c0a09', dark: '#0c0a09', className: 'text-accent-fg' },
]

// Radius yang dipakai di situs (Tailwind default scale, bukan token custom).
export const radii: { label: string; className: string; usage: string }[] = [
  { label: 'rounded-full', className: 'rounded-full', usage: 'Buttons, pills, badges' },
  { label: 'rounded-2xl', className: 'rounded-2xl', usage: 'Cards, hero' },
  { label: 'rounded-xl', className: 'rounded-xl', usage: 'Nested panels' },
  { label: 'rounded-md', className: 'rounded-md', usage: 'Small controls' },
]
