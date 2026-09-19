import { heroImage } from '../../config/images'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div aria-hidden="true" className="grain-overlay" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-6">
        {/* Texto */}
        <div className="animate-fadeUp opacity-0 [animation-delay:120ms] lg:col-span-6 lg:pt-16">
          <p className="mb-6 text-[13px] uppercase tracking-widest text-terracotta">
            Estética biomédica
          </p>
          <h1 className="max-w-lg font-serif text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-[4rem]">
            Pequenos detalhes.
            <br />
            Uma nova percepção de você.
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-coffee/75">
            Estética biomédica com naturalidade, precisão e cuidado em cada etapa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sobre"
              className="rounded-full bg-ink px-7 py-3.5 text-[13px] uppercase tracking-widest text-cream transition-colors hover:bg-coffee"
            >
              Quero conhecer a TOZI
            </a>
            <a
              href="#agendar"
              className="rounded-full border border-ink/70 px-7 py-3.5 text-[13px] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Agendar avaliação
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative animate-fadeIn opacity-0 [animation-delay:280ms] lg:col-span-6">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm bg-sand sm:aspect-[3/4]">
            <img
              src={heroImage}
              alt="Andressa Tozi, biomédica esteta da TOZI Beauty"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Elemento vertical rotacionado */}
          <div className="absolute -left-2 top-1/2 hidden -translate-y-1/2 sm:block lg:-left-8">
            <span className="vertical-rl select-none text-[11px] uppercase tracking-widest2 text-coffee/50">
              Beauty / Science / Care
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
