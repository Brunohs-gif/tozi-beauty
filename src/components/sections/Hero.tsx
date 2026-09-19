import { ArrowUpRight } from '@phosphor-icons/react'
import { heroImage } from '../../config/images'
import { Eyebrow } from '../ui/Eyebrow'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div aria-hidden="true" className="grain-overlay" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-6">
        {/* Texto */}
        <div className="animate-fadeUp opacity-0 [animation-delay:120ms] lg:col-span-6 lg:pt-16">
          <Eyebrow>Estética biomédica</Eyebrow>
          <h1 className="mt-6 max-w-lg font-serif text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-[4rem]">
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
              className="group inline-flex items-center gap-3 rounded-full bg-ink pl-7 pr-2 py-2 text-[13px] uppercase tracking-widest text-cream transition-all duration-300 ease-premium hover:bg-coffee active:scale-[0.97]"
            >
              Quero conhecer a TOZI
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/15 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" weight="light" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#agendar"
              className="rounded-full border border-ink/70 px-7 py-3.5 text-[13px] uppercase tracking-widest text-ink transition-all duration-300 ease-premium hover:bg-ink hover:text-cream active:scale-[0.97]"
            >
              Agendar avaliação
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative animate-fadeIn opacity-0 [animation-delay:280ms] lg:col-span-6">
          <div className="relative ml-auto w-full max-w-lg rounded-[2rem] bg-sand/60 p-2 ring-1 ring-coffee/10">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-sand sm:aspect-[3/4]">
              <img
                src={heroImage}
                alt="Andressa Tozi, biomédica esteta da TOZI Beauty"
                className="h-full w-full object-cover"
              />
            </div>
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
