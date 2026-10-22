import { about } from '../data'

export default function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="relative w-full overflow-hidden rounded-xl bg-brand md:rounded-2xl"
    >
      <img
        src="/meta-muse-image-generated.webp"
        alt="Potret di lorong gudang"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover [object-position:50%_25%] md:scale-[1.12] md:-translate-x-[6%]"
      />

      {/* Kaca pembaur: pekat di belakang kartu, memudar ke arah foto */}
      <div
        aria-hidden="true"
        className="intro-glass absolute inset-0 backdrop-blur-sm md:backdrop-blur-md"
      />

      <div className="relative flex min-h-[620px] items-end justify-center p-4 sm:p-6 md:min-h-[600px] md:items-center md:justify-end md:p-10">
        <div className="w-full md:max-w-md lg:max-w-lg">
          <h2 id="intro-heading" className="text-title mb-4 text-fg md:mb-5">
            4. <span className="bg-accent px-2 text-accent-fg">About</span> Me
          </h2>

          <div className="flex w-full flex-col rounded-lg border border-white/25 bg-surface/70 p-6 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-8 md:min-h-[440px] md:p-10">
            <p className="text-heading">{about.heading}</p>
            <div className="mt-10 md:mt-auto md:pt-6">
              <div aria-hidden="true" className="bg-fg/10 mb-6 h-px w-full" />
              <p className="text-label flex items-center gap-2 uppercase text-brand-text">
                <span aria-hidden="true" className="bg-accent inline-block h-2 w-2" />
                {about.kicker}
              </p>
              <div className="mt-3 flex flex-col gap-4">
                {about.lede.map((paragraph) => (
                  <p key={paragraph} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
