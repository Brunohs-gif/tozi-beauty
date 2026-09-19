import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { procedures } from '../../data/procedures'
import { Eyebrow } from '../ui/Eyebrow'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { ProcedureDetail } from './ProcedureDetail'

export function ProceduresSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [openId, setOpenId] = useState<string | null>(null)

  const activeProcedure = procedures[activeIndex]
  const openProcedure = procedures.find((p) => p.id === openId) ?? null

  return (
    <section id="procedimentos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-16 max-w-xl">
          <Eyebrow>Procedimentos</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Cada indicação parte de uma escuta, não de um catálogo.
          </h2>
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Lista editorial */}
          <ul className="lg:col-span-7">
            {procedures.map((procedure, index) => (
              <li key={procedure.id} className="border-b border-coffee/15 first:border-t">
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setOpenId(procedure.id)}
                  className={`group flex w-full items-center gap-6 py-7 text-left transition-colors ${
                    activeIndex === index ? 'text-ink' : 'text-coffee/55'
                  }`}
                  aria-haspopup="dialog"
                >
                  <span className="font-serif text-sm text-terracotta">{procedure.number}</span>
                  <span className="flex-1">
                    <span className="block font-serif text-2xl leading-snug transition-colors group-hover:text-ink sm:text-3xl">
                      {procedure.title}
                    </span>
                    <span className="mt-1.5 block max-w-md text-sm leading-relaxed text-coffee/60">
                      {procedure.summary}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    weight="light"
                    className={`h-5 w-5 shrink-0 text-terracotta transition-transform duration-300 ease-premium ${
                      activeIndex === index ? 'translate-x-0.5 -translate-y-0.5' : ''
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Imagem que acompanha o item ativo */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 rounded-[1.75rem] bg-sand/60 p-2 ring-1 ring-coffee/10">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.35rem] bg-sand">
                {procedures.map((procedure, index) => (
                  <img
                    key={procedure.id}
                    src={procedure.image}
                    alt={`Referência visual para ${procedure.title} — imagem ilustrativa temporária`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                      activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-6">
                  <p className="font-serif text-lg text-cream">{activeProcedure.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openProcedure && (
        <ProcedureDetail procedure={openProcedure} onClose={() => setOpenId(null)} />
      )}
    </section>
  )
}
