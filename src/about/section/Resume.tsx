import { useEffect, useRef, useState } from 'react'
import CvPaper from '../components/CvPaper'
import { resumes } from '../data'

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" strokeLinecap="round" />
    </svg>
  )
}

export default function Resume() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = resumes[activeIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  return (
    <section>
      {/*<p className="text-label uppercase text-fg-muted">Resume</p>*/}

      <div className="relative mt-6 min-h-[420px] rounded-2xl border border-line md:min-h-[520px]">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />

        <h2 className="absolute left-5 top-0 -translate-y-1/2 whitespace-nowrap bg-canvas px-2 text-title text-fg">
          2. My <span className="bg-accent px-2 text-accent-fg">Resume</span>
        </h2>
        <p className="absolute right-5 top-4 text-label uppercase text-fg-muted">2 Files</p>

        <div className="relative flex flex-col items-center gap-8 px-6 py-12 md:gap-10 md:py-14">
          <div className="relative aspect-[210/297] w-[clamp(180px,54vw,220px)] md:w-[280px] lg:w-[300px]">
            {resumes.map((doc, i) => {
              const isFront = i === activeIndex

              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => (isFront ? setOpen(true) : setActiveIndex(i))}
                  aria-label={isFront ? `Buka ${doc.label}` : `Tampilkan ${doc.label} di depan`}
                  aria-haspopup={isFront ? 'dialog' : undefined}
                  aria-expanded={isFront ? open : undefined}
                  className={[
                    'group absolute inset-0 cursor-pointer rounded-[4px]',
                    'transition-[transform,translate,rotate,scale,box-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                    'motion-reduce:transition-none',
                    isFront
                      ? 'z-20 -translate-x-[19%] hover:-translate-y-[4px] focus-visible:-translate-y-[4px]'
                      : 'z-10 translate-x-[19%] -translate-y-[12px] rotate-[6deg] scale-[0.94] hover:translate-x-[23%] hover:scale-[0.955] focus-visible:translate-x-[23%]',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'absolute inset-0 block overflow-hidden rounded-[4px] bg-white',
                      'transition-shadow duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                      isFront
                        ? 'shadow-[0_18px_44px_-12px_rgba(12,10,9,0.32)] ring-1 ring-line group-hover:shadow-[0_26px_56px_-12px_rgba(12,10,9,0.4)] group-focus-visible:shadow-[0_26px_56px_-12px_rgba(12,10,9,0.4)]'
                        : 'shadow-[0_10px_26px_-12px_rgba(12,10,9,0.25)] ring-1 ring-line',
                    ].join(' ')}
                    style={{ containerType: 'inline-size' }}
                  >
                    <CvPaper variant={doc.variant} density="card" />
                    {!isFront && (
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-canvas/25" />
                    )}
                  </span>

                  <span
                    className={[
                      'absolute -top-3 left-4 z-10 rounded-full px-2.5 py-1 text-label shadow-sm',
                      isFront ? 'bg-brand text-brand-fg' : 'border border-line bg-surface text-fg',
                    ].join(' ')}
                  >
                    {doc.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-small font-medium shadow-md',
                      'scale-95 opacity-0 transition duration-300 ease-out motion-reduce:transition-none',
                      'group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100',
                      isFront ? 'bg-brand text-brand-fg' : 'border border-line bg-surface text-fg',
                    ].join(' ')}
                  >
                    {isFront ? 'Buka CV' : 'Tampilkan'}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-small font-semibold text-fg">{active.label}</p>
            <p className="max-w-xs text-small text-fg-muted md:max-w-sm">{active.blurb}</p>
            <div className="mt-1 flex gap-1.5" aria-hidden="true">
              {resumes.map((doc, i) => (
                <span
                  key={doc.id}
                  className={`h-1.5 w-1.5 rounded-full ${i === activeIndex ? 'bg-brand' : 'bg-line'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
        aria-labelledby="cv-modal-title"
        className="cv-modal-paper relative m-auto w-[min(92vw,44rem)] max-h-[88svh] rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Tutup pratinjau CV"
          className="absolute right-3 top-3 z-10 rounded-full p-2 text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg motion-reduce:transition-none"
        >
          <CloseIcon />
        </button>

        <div className="flex max-h-[88svh] flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 px-5 pb-4 pr-12 pt-5 sm:px-6 sm:pr-14">
            <h3 id="cv-modal-title" className="text-subheading text-fg">
              {active.label}
            </h3>
            <div className="flex items-center gap-2">
              {resumes.map((doc, i) => {
                const isActive = i === activeIndex
                return (
                  <button
                    key={doc.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={[
                      'rounded-full px-3.5 py-1.5 text-small transition-colors motion-reduce:transition-none',
                      isActive
                        ? 'bg-brand text-brand-fg'
                        : 'border border-line text-fg-muted hover:text-fg',
                    ].join(' ')}
                  >
                    {doc.id === 'creative' ? 'Creative' : 'ATS'}
                  </button>
                )
              })}
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-surface-2 px-5 pb-5 sm:px-6 sm:pb-6">
            <div
              className="mx-auto aspect-[210/297] w-full max-w-[min(92vw,calc(88svh*0.707))] overflow-y-auto rounded-md bg-white shadow-lg"
              style={{ containerType: 'inline-size' }}
            >
              <CvPaper variant={active.variant} density="full" />
            </div>
          </div>

          <div className="flex justify-center px-5 pb-5 sm:px-6 sm:pb-6">
            {active.href ? (
              <a
                href={active.href}
                download
                className="rounded-full bg-brand px-4 py-2 text-small font-medium text-brand-fg transition hover:opacity-90 motion-reduce:transition-none"
              >
                Unduh PDF
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="cursor-not-allowed rounded-full border border-line px-4 py-2 text-small text-fg-muted opacity-60"
              >
                PDF belum tersedia
              </span>
            )}
          </div>
        </div>
      </dialog>
    </section>
  )
}
