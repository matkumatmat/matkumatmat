export type PaletteEntry = {
  name: string
  token: string
  hex: string
}

export const palette: PaletteEntry[] = [
  { name: 'Brand', token: '--brand', hex: '#054082' },
  { name: 'Accent', token: '--accent', hex: '#B8D600' },
  { name: 'Ink', token: '--fg', hex: '#0C0A09' },
  { name: 'Paper', token: '--canvas', hex: '#F4F4F0' },
]
