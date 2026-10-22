import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FloatingOrnaments from '../../components/ui/FloatingOrnaments'

gsap.registerPlugin(useGSAP)

type Core = {
  label: string
  desc: string
  className: string
}

const CORES: Core[] = [
  {
    label: 'Warehouse',
    desc: 'Cold chain and vaccine stock operations at PT Bio Farma. Shift discipline, accurate records, and no room for counting errors.',
    className: 'font-sans font-extrabold tracking-tight',
  },
  {
    label: 'AI',
    desc: 'Applied AI for daily work: automating repetitive tasks, drafting, and analysis. A workflow stays only when it proves useful every day.',
    className: 'font-mono font-bold tracking-[0.18em] text-accent',
  },
  {
    label: 'Freelance',
    desc: 'Client projects outside my main role. Small in scale, delivered finished, documented, and ready to use.',
    className: 'font-sans font-semibold italic',
  },
  {
    label: 'Programming',
    desc: 'Building the tools I need through code. I learn by releasing real projects, not by waiting until I feel ready.',
    className: 'font-mono font-medium',
  },
]

const HOLD = 2.4

function Chars({ label, withCaret }: { label: string; withCaret?: boolean }) {
  return (
    <>
      {label.split('').map((ch, i) => (
        <span key={i} className="hero-char inline-block will-change-transform">
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
      {withCaret ? (
        <span aria-hidden="true" className="hero-caret ml-1 inline-block animate-pulse">
          ▌
        </span>
      ) : null}
    </>
  )
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // --- Entrance ---
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
        intro
          .from('.hero-eyebrow-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.7 })
          .from('.hero-eyebrow-text', { autoAlpha: 0, x: -12, duration: 0.5 }, '<0.1')
          .from(
            '.hero-line-inner',
            { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.12 },
            '<0.15',
          )
          .from('.hero-sub', { autoAlpha: 0, y: 18, duration: 0.6 }, '-=0.45')
          .from('.hero-core-label', { autoAlpha: 0, y: 10, duration: 0.5 }, '-=0.35')
          .from('.hero-photo', { autoAlpha: 0, y: 70, duration: 1, ease: 'power3.out' }, 0.25)
          .from('.hero-panel', { autoAlpha: 0, x: 32, duration: 0.7 }, 0.4)

        // --- Rotasi 4 core, tiap kata animasinya beda ---
        const words = gsap.utils.toArray<HTMLElement>('.hero-core-word')
        const descs = gsap.utils.toArray<HTMLElement>('.hero-core-desc')
        const segs = gsap.utils.toArray<HTMLElement>('.hero-seg-fill')

        gsap.set(words, { autoAlpha: 0 })
        gsap.set(descs, { autoAlpha: 0, y: 14 })
        gsap.set(segs, { scaleX: 0, transformOrigin: 'left center' })

        const cycle = gsap.timeline({ repeat: -1, delay: 1.1 })

        CORES.forEach((_, i) => {
          const word = words[i]
          const chars = word.querySelectorAll('.hero-char')
          const desc = descs[i]
          const seg = segs[i]

          cycle.call(() => {
            if (counterRef.current) {
              counterRef.current.textContent = String(i + 1).padStart(2, '0')
            }
          })

          // Masuk: gaya per core
          if (i === 0) {
            // Warehouse: huruf naik dari mask, berat & tegas
            cycle
              .set(word, { autoAlpha: 1, y: 0 })
              .fromTo(
                chars,
                { yPercent: 115 },
                { yPercent: 0, duration: 0.65, ease: 'power4.out', stagger: 0.035 },
              )
          } else if (i === 1) {
            // AI: meledak masuk dari tengah, scale + putar sumbu X
            cycle
              .set(word, { autoAlpha: 1, y: 0 })
              .fromTo(
                chars,
                { autoAlpha: 0, scale: 1.9, rotationX: 80, transformOrigin: '50% 100%' },
                {
                  autoAlpha: 1,
                  scale: 1,
                  rotationX: 0,
                  duration: 0.6,
                  ease: 'expo.out',
                  stagger: { each: 0.07, from: 'center' },
                },
              )
          } else if (i === 2) {
            // Freelance: gelombang huruf, santai
            cycle
              .set(word, { autoAlpha: 1, y: 0 })
              .fromTo(
                chars,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.05 },
              )
              .to(chars, {
                keyframes: [
                  { y: -16, duration: 0.28, ease: 'sine.out' },
                  { y: 0, duration: 0.45, ease: 'bounce.out' },
                ],
                stagger: 0.05,
              })
          } else {
            // Programming: ketik per huruf, ala terminal
            cycle
              .set(word, { autoAlpha: 1, y: 0 })
              .fromTo(
                chars,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.01, ease: 'none', stagger: 0.055 },
              )
          }

          cycle
            .fromTo(
              desc,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
              '<0.15',
            )
            .fromTo(
              seg,
              { scaleX: 0 },
              { scaleX: 1, duration: HOLD, ease: 'none' },
              '<',
            )
            // Keluar bareng
            .to([word, desc], { autoAlpha: 0, y: -16, duration: 0.45, ease: 'power2.in' }, '+=0.2')
            .set(seg, { scaleX: 0 })
        })

        return () => {
          intro.kill()
          cycle.kill()
        }
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const words = gsap.utils.toArray<HTMLElement>('.hero-core-word')
        const descs = gsap.utils.toArray<HTMLElement>('.hero-core-desc')
        const segs = gsap.utils.toArray<HTMLElement>('.hero-seg-fill')
        gsap.set([words[0], descs[0]], { autoAlpha: 1, y: 0 })
        gsap.set(segs[0], { scaleX: 1 })
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative isolate w-full h-[500px] overflow-hidden rounded-xl md:rounded-2xl bg-brand mb-2"
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-transparent"></div>

      <div className="absolute inset-y-0 right-0 w-[38%] bg-accent"></div>

      <FloatingOrnaments />

      <div className="absolute left-8 top-1/2 w-[32%] -translate-y-1/2">
        <p className="flex items-center gap-3">
          <span aria-hidden="true" className="hero-eyebrow-line block h-px w-10 bg-accent" />
          <span className="hero-eyebrow-text text-label uppercase text-accent-text">Portfolio</span>
        </p>

        <h1 className="text-display display-tight mt-4 text-white">
          <span className="block overflow-hidden">
            <span className="hero-line-inner block">From warehouse,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line-inner block">
              to <span className="text-accent">code.</span>
            </span>
          </span>
        </h1>

        <p className="hero-sub text-body mt-6 text-white/70">
          Cold chain stock lead at PT Bio Farma, freelance developer between shifts, and a
          programming and applied AI practitioner building practical tools for operational
          work. Not a frontend specialist; this page documents what I build.
        </p>

        <div className="mt-8">
          <p className="hero-core-label text-label uppercase text-white/50">
            Core <span aria-hidden="true" className="text-accent">·</span>
          </p>
          <div className="relative mt-2 h-12 sm:h-14" aria-live="off">
            {CORES.map((core, i) => (
              <span
                key={core.label}
                className={`hero-core-word text-title absolute inset-0 overflow-hidden whitespace-nowrap text-white opacity-0 ${core.className}`}
              >
                <Chars label={core.label} withCaret={i === 3} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-panel absolute right-24 top-1/2 w-[20%] -translate-y-1/2">
        <p className="text-display display-tight text-accent-fg">
          <span ref={counterRef}>01</span>
          <span className="text-title">/04</span>
        </p>

        <div className="relative mt-4 min-h-24">
          {CORES.map((core) => (
            <p key={core.label} className="hero-core-desc text-small absolute inset-0 text-accent-fg/80 opacity-0">
              {core.desc}
            </p>
          ))}
        </div>

        <div aria-hidden="true" className="mt-5 flex gap-1.5">
          {CORES.map((core) => (
            <span key={core.label} className="h-1 flex-1 overflow-hidden rounded-full bg-black/20">
              <span className="hero-seg-fill block h-full w-full bg-accent-fg" />
            </span>
          ))}
        </div>

        <a
          href="#intro-heading"
          className="text-label uppercase mt-6 inline-block underline underline-offset-4"
        >
          Full profile
        </a>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}me-facing-clean.webp`}
        alt="Portrait photo"
        className="hero-photo absolute -bottom-30 left-[calc(50%-194px)] h-[110%] w-auto object-contain object-bottom"
      />
    </section>
  )
}
