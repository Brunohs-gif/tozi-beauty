import { ChatCircle } from '@phosphor-icons/react'
import { siteConfig } from '../../config/site'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function FinalCTA() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage,
  )}`

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <div aria-hidden="true" className="grain-overlay" />
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Talvez você não precise mudar.
            <br />
            Talvez precise se olhar com mais cuidado.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <p className="mx-auto mt-7 max-w-lg text-[15px] leading-relaxed text-cream/70">
            Agende uma avaliação e descubra quais possibilidades fazem sentido para você.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#agendar"
              className="rounded-full bg-gold px-8 py-3.5 text-[13px] uppercase tracking-widest text-ink transition-all duration-300 ease-premium hover:bg-cream active:scale-[0.97]"
            >
              Agendar avaliação
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-cream/40 pl-8 pr-2 py-2 text-[13px] uppercase tracking-widest text-cream transition-all duration-300 ease-premium hover:border-cream hover:bg-cream/10 active:scale-[0.97]"
            >
              Falar no WhatsApp
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-transform duration-300 ease-premium group-hover:scale-105">
                <ChatCircle className="h-4 w-4" weight="light" aria-hidden="true" />
              </span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
