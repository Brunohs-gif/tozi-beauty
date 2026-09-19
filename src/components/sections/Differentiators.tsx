import { Eyebrow } from '../ui/Eyebrow'
import { RevealOnScroll } from '../ui/RevealOnScroll'

const items = [
  { text: 'Naturalidade acima do exagero', big: true },
  { text: 'Planejamento antes do procedimento' },
  { text: 'Escuta antes da indicação' },
  { text: 'Técnica com sensibilidade', big: true },
  { text: 'Resultados construídos com tempo' },
  { text: 'Cuidado em cada detalhe' },
]

export function Differentiators() {
  return (
    <section className="relative bg-coffee py-24 text-cream sm:py-32">
      <div aria-hidden="true" className="grain-overlay" />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-14 max-w-xl">
          <Eyebrow tone="inverted">Diferenciais</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            O que guia cada decisão técnica.
          </h2>
        </RevealOnScroll>

        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <RevealOnScroll
              key={item.text}
              as="li"
              delay={index * 70}
              className={item.big ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <p
                className={`border-t border-cream/20 pt-5 font-serif leading-snug ${
                  item.big ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl text-cream/85'
                }`}
              >
                {item.text}
              </p>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  )
}
