import { RevealOnScroll } from '../ui/RevealOnScroll'

const items = [
  'Naturalidade acima do exagero',
  'Planejamento antes do procedimento',
  'Escuta antes da indicação',
  'Técnica com sensibilidade',
  'Resultados construídos com tempo',
  'Cuidado em cada detalhe',
]

export function Differentiators() {
  return (
    <section className="relative bg-coffee py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-14 max-w-xl">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-gold">Diferenciais</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            O que guia cada decisão técnica.
          </h2>
        </RevealOnScroll>

        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <RevealOnScroll key={item} as="li" delay={index * 70}>
              <p className="border-t border-cream/20 pt-5 font-serif text-xl leading-snug sm:text-2xl">
                {item}
              </p>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  )
}
