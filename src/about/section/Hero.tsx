export default function Hero() {
  return (
    <section className="relative isolate w-full h-[500px] overflow-hidden rounded-xl md:rounded-2xl bg-brand mb-2">
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-transparent"></div>

      <div className="absolute inset-y-0 right-0 w-[38%] bg-accent">
      </div>

      <div className="absolute left-8 top-1/2 w-[30%] -translate-y-1/2">
        <p className="text-label uppercase text-accent-text">Portfolio</p>
        <h1 className="text-display display-tight mt-4 text-white">
          Building things that feel fast.
        </h1>
        <p className="text-body mt-6 text-white/70">
          Frontend engineer. Fokus pada performa, aksesibilitas, dan sistem desain yang
          konsisten.
        </p>
      </div>

      <div className="absolute right-24 top-1/2 w-[20%] -translate-y-1/2">
        <p className="text-display display-tight text-accent-fg">
          01<span className="text-title">/04</span>
        </p>
        <p className="text-small mt-4 text-accent-fg/80">
          Frontend yang terasa cepat, aksesibel, dan konsisten di setiap layar.
        </p>
        <a
          href="#"
          className="text-label uppercase mt-6 inline-block underline underline-offset-4"
        >
          Learn more
        </a>
      </div>

      {/*<img
        src="/me-facing.webp"
        alt="Foto profil"
        className="absolute -bottom-30 left-1/2 h-[110%] w-auto -translate-x-1/2 object-contain object-bottom"
      />*/}
      {/*<img
        src="/me-facing.webp"
        alt="Foto profil"
        className="absolute -bottom-30 left-1/2 h-[110%] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[2px_0_0_#fff,-2px_0_0_#fff,0_2px_0_#fff,0_-2px_0_#fff]"
      />*/}

      <svg aria-hidden focusable="false" className="absolute h-0 w-0 overflow-hidden">
        <defs>
          <filter id="portrait-outline" x="-10%" y="-10%" width="120%" height="120%"
                  color-interpolation-filters="sRGB">
            <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="spread" />
            <feFlood floodColor="#fff" floodOpacity="1" result="color" />
            <feComposite in="color" in2="spread" operator="in" result="ring" />
            <feMerge>
              <feMergeNode in="ring" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <img
        src="/me-facing.webp"
        alt="Foto profil"
        style={{ filter: 'url(#portrait-outline)' }}
        className="absolute -bottom-30 left-1/2 h-[110%] w-auto -translate-x-1/2 object-contain object-bottom"
      />
    </section>
  )
}
