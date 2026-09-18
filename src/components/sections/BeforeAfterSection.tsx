import { useState } from 'react'
import { beforeAfterCases } from '../../data/beforeAfterCases'
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider'
import { PhotoZoom } from '../ui/PhotoZoom'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function BeforeAfterSection() {
  const [activeCase, setActiveCase] = useState(0)
  const current = beforeAfterCases[activeCase]

  return (
    <section id="resultados" className="relative bg-sand/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-14 max-w-xl">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
            Resultados
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Veja o detalhe.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-coffee/75">
            Resultados reais devem ser observados com contexto, cuidado e transparência.
          </p>
        </RevealOnScroll>

        {/* Seletor de casos */}
        <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Selecionar caso ilustrativo">
          {beforeAfterCases.map((c, index) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeCase === index}
              onClick={() => setActiveCase(index)}
              className={`rounded-full border px-5 py-2 text-[13px] transition-colors ${
                activeCase === index
                  ? 'border-ink bg-ink text-cream'
                  : 'border-coffee/25 text-coffee/70 hover:border-coffee/50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealOnScroll>
            <p className="mb-3 text-[11px] uppercase tracking-widest text-coffee/50">
              Comparador — arraste a linha
            </p>
            <BeforeAfterSlider
              beforeSrc={current.before}
              afterSrc={current.after}
              caseLabel={current.label}
              beforeFocal={current.beforeFocal}
              afterFocal={current.afterFocal}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <p className="mb-3 text-[11px] uppercase tracking-widest text-coffee/50">
              Detalhe em foco — passe o mouse para ampliar
            </p>
            <PhotoZoom
              src={current.zoom}
              alt={`Detalhe ampliado — ${current.label} (imagem ilustrativa)`}
            />
          </RevealOnScroll>
        </div>

        <div className="mt-10 max-w-3xl space-y-3">
          <p className="text-xs leading-relaxed text-coffee/60">
            Imagem ilustrativa. Resultados variam conforme avaliação, organismo e protocolo
            indicado.
          </p>
          <p className="text-xs leading-relaxed text-coffee/60">
            Imagens de pacientes reais só são publicadas mediante autorização expressa e por
            escrito. Os casos exibidos acima usam fotos temporárias de banco de imagens.
          </p>
        </div>
      </div>
    </section>
  )
}
