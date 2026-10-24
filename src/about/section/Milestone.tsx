import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { milestones, type Milestone, type MilestoneCore } from '../data'
import { asset, iconHref } from '../../lib/asset'

const cores: { id: MilestoneCore; label: string; icon: string }[] = [
  { id: 'warehouse', label: 'Warehouse', icon: 'ms-warehouse-icon' },
  { id: 'freelance', label: 'Freelance', icon: 'ms-package_2-icon' },
  { id: 'programming', label: 'Programming', icon: 'ms-code-icon' },
  { id: 'AI', label: 'AI', icon: 'ms-bolt-icon' },
]

type Segment = { x1: number; y1: number; x2: number; y2: number }

function useGridColumns(): number {
  const getColumns = (): number => {
    if (window.matchMedia('(min-width: 1024px)').matches) return 4
    if (window.matchMedia('(min-width: 640px)').matches) return 2
    return 1
  }
  const [columns, setColumns] = useState<number>(getColumns)
  useEffect(() => {
    const onResize = (): void => setColumns(getColumns())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return columns
}

function snakeOrder<T>(items: T[], columns: number): T[] {
  if (columns <= 1) return items
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns))
  }
  return rows.flatMap((row, index) => (index % 2 === 1 ? [...row].reverse() : row))
}

/** Unique stable key: year alone is not unique (two programming items share 2023). */
function itemKey(item: Milestone): string {
  return `${item.core}-${item.year}-${milestones.indexOf(item)}`
}

function MilestoneCard({
  item,
  itemKey,
  innerRef,
}: {
  item: Milestone
  itemKey: string
  innerRef: (key: string, el: HTMLElement | null) => void
}) {
  const pills = [item.core, ...item.tags].slice(0, 2)
  return (
    <article
      ref={(el) => innerRef(itemKey, el)}
      tabIndex={0}
      className="group relative z-10 rounded-2xl border border-line bg-surface p-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={asset(item.image)}
          alt={`${item.year} ${item.core} milestone`}
          loading="lazy"
          className="h-52 w-full object-cover transition-[height] duration-300 ease-out group-hover:h-32 group-focus-within:h-32 motion-reduce:transition-none"
        />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          <div className="flex gap-1.5">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/80 px-2.5 py-1 text-label uppercase text-accent-fg backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-small font-semibold text-white backdrop-blur-sm">
            {item.year}
          </p>
        </div>
      </div>
      <p className="max-h-[4.5rem] overflow-hidden px-1 pb-1 pt-3 text-small text-fg transition-[max-height] duration-300 ease-out line-clamp-3 group-hover:max-h-[10rem] group-hover:line-clamp-none group-focus-within:max-h-[10rem] group-focus-within:line-clamp-none motion-reduce:transition-none">
        {item.description}
      </p>
    </article>
  )
}

export default function Milestone() {
  const columns = useGridColumns()
  const [activeCore, setActiveCore] = useState<MilestoneCore | null>('warehouse')
  const [autoPaused, setAutoPaused] = useState(false)
  const [segments, setSegments] = useState<Segment[]>([])
  const gridRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef(new Map<string, HTMLElement>())

  const visible = useMemo(
    () => (activeCore ? milestones.filter((item) => item.core === activeCore) : milestones),
    [activeCore],
  )
  const ordered = useMemo(() => snakeOrder(visible, columns), [visible, columns])

  useEffect(() => {
    if (autoPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setActiveCore((current) => {
        const index = cores.findIndex((core) => core.id === current)
        return cores[(index + 1) % cores.length].id
      })
    }, 4000)
    return () => window.clearInterval(id)
  }, [autoPaused])

  useLayoutEffect(() => {
    const compute = (): void => {
      const grid = gridRef.current
      if (!grid) return
      const rect = grid.getBoundingClientRect()
      const boxes = visible
        .map((item) => itemRefs.current.get(itemKey(item))?.getBoundingClientRect())
        .filter((box): box is DOMRect => !!box)
      const next: Segment[] = []
      for (let i = 0; i + 1 < boxes.length; i++) {
        const a = boxes[i]
        const b = boxes[i + 1]
        const aCy = a.top - rect.top + a.height / 2
        const bCy = b.top - rect.top + b.height / 2
        if (Math.abs(aCy - bCy) < 8) {
          const [left, right] =
            a.left < b.left ? [a, b] : [b, a]
          next.push({
            x1: left.right - rect.left,
            y1: left.top - rect.top + left.height / 2,
            x2: right.left - rect.left,
            y2: right.top - rect.top + right.height / 2,
          })
        } else {
          const [top, bottom] = aCy < bCy ? [a, b] : [b, a]
          next.push({
            x1: top.left - rect.left + top.width / 2,
            y1: top.bottom - rect.top,
            x2: bottom.left - rect.left + bottom.width / 2,
            y2: bottom.top - rect.top,
          })
        }
      }
      setSegments(next)
    }
    compute()
    const observer = new ResizeObserver(compute)
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [ordered, visible])

  return (
    <section>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 className="text-title text-fg">
          3. Milest<span className="bg-accent text-accent-fg">ones</span>
        </h2>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-3">
          <span aria-hidden="true" className="hidden h-px w-8 shrink-0 bg-line min-[420px]:block" />
          <div className="flex shrink-0 gap-2" role="group" aria-label="Filter milestones by core">
            {cores.map((core) => {
              const isActive = activeCore === core.id
              return (
                <button
                  key={core.id}
                  type="button"
                  title={core.label}
                  aria-label={`Filter ${core.label}`}
                  aria-pressed={isActive}
                  onClick={() => {
                    setAutoPaused(true)
                    setActiveCore(isActive ? null : core.id)
                  }}
                  className="relative h-11 w-11 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <span
                    aria-hidden="true"
                    className={
                      isActive
                        ? 'absolute inset-0 flex items-center justify-center bg-accent text-accent-fg transition-colors [clip-path:polygon(50.0%_0.0%,57.8%_21.0%,75.0%_6.7%,71.2%_28.8%,93.3%_25.0%,79.0%_42.2%,100.0%_50.0%,79.0%_57.8%,93.3%_75.0%,71.2%_71.2%,75.0%_93.3%,57.8%_79.0%,50.0%_100.0%,42.2%_79.0%,25.0%_93.3%,28.8%_71.2%,6.7%_75.0%,21.0%_57.8%,0.0%_50.0%,21.0%_42.2%,6.7%_25.0%,28.8%_28.8%,25.0%_6.7%,42.2%_21.0%)]'
                        : 'absolute inset-0 flex items-center justify-center rounded-full bg-brand text-brand-fg transition-colors hover:opacity-90 motion-reduce:transition-none'
                    }
                  >
                    <svg fill="currentColor" className={isActive ? 'h-4 w-4' : 'h-5 w-5'}>
                      <use href={iconHref(core.icon)} />
                    </svg>
                  </span>
                </button>
              )
            })}
          </div>
          <span aria-hidden="true" className="hidden h-px w-8 shrink-0 bg-line min-[420px]:block" />
          <p
            aria-live="polite"
            className="min-w-0 font-mono text-heading uppercase text-fg-muted"
          >
            {cores.find((core) => core.id === activeCore)?.label ?? 'All'}
          </p>
          <span aria-hidden="true" className="hidden h-px min-w-8 flex-1 bg-line sm:block" />
        </div>
      </div>

      <div
        ref={gridRef}
        onMouseOver={() => setAutoPaused(true)}
        onFocus={() => setAutoPaused(true)}
        className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          {segments.map((segment, index) => (
            <line
              key={index}
              x1={segment.x1}
              y1={segment.y1}
              x2={segment.x2}
              y2={segment.y2}
              strokeWidth={5}
              strokeLinecap="round"
              className="stroke-accent"
            />
          ))}
        </svg>
        {ordered.map((item) => {
          const key = itemKey(item)
          return (
            <MilestoneCard
              key={key}
              item={item}
              itemKey={key}
              innerRef={(key, el) => {
                if (el) itemRefs.current.set(key, el)
                else itemRefs.current.delete(key)
              }}
            />
          )
        })}
      </div>
    </section>
  )
}
