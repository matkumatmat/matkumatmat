import type { CSSProperties } from 'react'

type Tone = 'white' | 'dark'

type Slot = {
  symbol: string
  x: number
  y: number
  tone: Tone
  min: number
  max: number
  hideOnMobile?: boolean
}

/**
 * Slot posisi fix (hand-tuned) supaya ornaments tidak menabrak teks,
 * blok "01/04", atau foto profil. Yang di-random cuma parameternya.
 */
const SLOTS: Slot[] = [
  { symbol: 'bolt', x: 4, y: 8, tone: 'white', min: 14, max: 22 },
  { symbol: 'code', x: 2, y: 32, tone: 'white', min: 16, max: 26 },
  { symbol: 'database', x: 6, y: 62, tone: 'white', min: 18, max: 28 },
  { symbol: 'terminal', x: 18, y: 4, tone: 'white', min: 16, max: 24 },
  { symbol: 'package_2', x: 24, y: 86, tone: 'white', min: 14, max: 22, hideOnMobile: true },
  { symbol: 'dns', x: 56, y: 6, tone: 'white', min: 16, max: 26 },
  { symbol: 'data_object', x: 28, y: 20, tone: 'white', min: 14, max: 22 },
  { symbol: 'route', x: 12, y: 88, tone: 'white', min: 16, max: 26, hideOnMobile: true },
  { symbol: 'warehouse', x: 80, y: 8, tone: 'dark', min: 18, max: 30 },
  { symbol: 'local_shipping', x: 95, y: 28, tone: 'dark', min: 12, max: 18 },
  { symbol: 'inventory_2', x: 70, y: 86, tone: 'dark', min: 16, max: 24, hideOnMobile: true },
  { symbol: 'pallet', x: 92, y: 92, tone: 'dark', min: 14, max: 22, hideOnMobile: true },
]

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

/**
 * Dihitung sekali saat module di-load: acak per kunjungan, tapi stabil
 * selama session (nggak ada layout shift pas re-render).
 */
const ORNAMENTS = SLOTS.map((slot) => ({
  ...slot,
  size: Math.round(randomBetween(slot.min, slot.max)),
  opacity: randomBetween(
    slot.tone === 'dark' ? 0.18 : 0.08,
    slot.tone === 'dark' ? 0.34 : 0.16,
  ),
  duration: randomBetween(6, 13),
  delay: randomBetween(0, 7),
  rotation: Math.round(randomBetween(-25, 25)),
  spin: Math.round(randomBetween(-18, 18)),
  driftX: Math.round(randomBetween(-14, 14)),
  driftY: Math.round(randomBetween(-18, 18)),
}))

export default function FloatingOrnaments() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {ORNAMENTS.map((ornament) => (
        <svg
          key={ornament.symbol}
          className={[
            'ornament fill-current',
            ornament.tone === 'dark' ? 'text-black' : 'text-white',
            ornament.hideOnMobile ? 'hidden sm:block' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={
            {
              left: `${ornament.x}%`,
              top: `${ornament.y}%`,
              width: ornament.size,
              height: ornament.size,
              opacity: ornament.opacity,
              animation: `ornament-float ${ornament.duration}s ease-in-out ${ornament.delay}s infinite`,
              '--ornament-rot': `${ornament.rotation}deg`,
              '--ornament-spin': `${ornament.spin}deg`,
              '--ornament-drift-x': `${ornament.driftX}px`,
              '--ornament-drift-y': `${ornament.driftY}px`,
            } as CSSProperties
          }
        >
          <use href={`/icons.svg#ms-${ornament.symbol}-icon`} />
        </svg>
      ))}
    </div>
  )
}
