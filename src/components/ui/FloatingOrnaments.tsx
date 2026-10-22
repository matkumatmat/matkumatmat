import { useRef, type CSSProperties } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

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
  { symbol: 'bolt', x: 4, y: 8, tone: 'white', min: 26, max: 40 },
  { symbol: 'code', x: 2, y: 32, tone: 'white', min: 30, max: 46 },
  { symbol: 'database', x: 6, y: 62, tone: 'white', min: 32, max: 50 },
  { symbol: 'terminal', x: 18, y: 4, tone: 'white', min: 28, max: 42 },
  { symbol: 'package_2', x: 24, y: 86, tone: 'white', min: 24, max: 38, hideOnMobile: true },
  { symbol: 'dns', x: 56, y: 6, tone: 'white', min: 28, max: 44 },
  { symbol: 'data_object', x: 28, y: 20, tone: 'white', min: 24, max: 38 },
  { symbol: 'route', x: 12, y: 88, tone: 'white', min: 28, max: 44, hideOnMobile: true },
  { symbol: 'warehouse', x: 80, y: 8, tone: 'dark', min: 34, max: 54 },
  { symbol: 'local_shipping', x: 95, y: 28, tone: 'dark', min: 22, max: 34 },
  { symbol: 'inventory_2', x: 70, y: 86, tone: 'dark', min: 28, max: 42, hideOnMobile: true },
  { symbol: 'pallet', x: 92, y: 92, tone: 'dark', min: 26, max: 40, hideOnMobile: true },
  // Slot tambahan: isi sudut & tepi yang kosong
  { symbol: 'terminal', x: 38, y: 5, tone: 'white', min: 22, max: 34 },
  { symbol: 'inventory_2', x: 2, y: 80, tone: 'white', min: 24, max: 36, hideOnMobile: true },
  { symbol: 'database', x: 66, y: 46, tone: 'dark', min: 22, max: 34, hideOnMobile: true },
  { symbol: 'code', x: 97, y: 56, tone: 'dark', min: 24, max: 36 },
  { symbol: 'dns', x: 88, y: 68, tone: 'dark', min: 22, max: 32, hideOnMobile: true },
  { symbol: 'route', x: 60, y: 90, tone: 'dark', min: 20, max: 30, hideOnMobile: true },
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
    slot.tone === 'dark' ? 0.22 : 0.14,
    slot.tone === 'dark' ? 0.4 : 0.26,
  ),
  duration: randomBetween(5, 10),
  delay: randomBetween(0, 6),
  rotation: Math.round(randomBetween(-25, 25)),
  spin: Math.round(randomBetween(-24, 24)),
  driftX: Math.round(randomBetween(-24, 24)),
  driftY: Math.round(randomBetween(-30, 30)),
}))

export default function FloatingOrnaments() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.ornament').forEach((el) => {
          const base = Number(el.dataset.rot ?? 0)
          gsap.set(el, { rotation: base })
          gsap.to(el, {
            x: Number(el.dataset.driftX ?? 0),
            y: Number(el.dataset.driftY ?? 0),
            rotation: base + Number(el.dataset.spin ?? 0),
            duration: Number(el.dataset.duration ?? 7),
            delay: Number(el.dataset.delay ?? 0),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          })
        })
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {ORNAMENTS.map((ornament, i) => (
        <svg
          key={`${ornament.symbol}-${i}`}
          data-rot={ornament.rotation}
          data-spin={ornament.spin}
          data-drift-x={ornament.driftX}
          data-drift-y={ornament.driftY}
          data-duration={ornament.duration}
          data-delay={ornament.delay}
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
            } as CSSProperties
          }
        >
          <use href={`/icons.svg#ms-${ornament.symbol}-icon`} />
        </svg>
      ))}
    </div>
  )
}
