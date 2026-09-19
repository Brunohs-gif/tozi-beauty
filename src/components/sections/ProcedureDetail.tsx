import { useEffect, useRef } from 'react'
import { X } from '@phosphor-icons/react'
import type { Procedure } from '../../data/procedures'

interface ProcedureDetailProps {
  procedure: Procedure
  onClose: () => void
}

export function ProcedureDetail({ procedure, onClose }: ProcedureDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Fechar detalhes do procedimento"
        onClick={onClose}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="procedure-detail-title"
        className="relative z-10 max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-[1.75rem] bg-cream p-8 shadow-lift sm:rounded-[1.75rem] sm:p-12"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 rounded-full p-2 text-coffee/60 transition-all duration-300 ease-premium hover:bg-sand hover:text-ink active:scale-90"
        >
          <X className="h-5 w-5" weight="light" aria-hidden="true" />
        </button>

        <p className="text-[13px] uppercase tracking-widest text-terracotta">
          {procedure.number}
        </p>
        <h3 id="procedure-detail-title" className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
          {procedure.title}
        </h3>

        <div className="mt-8 space-y-7">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-coffee/50">
              Para quem é indicado
            </p>
            <p className="text-[15px] leading-relaxed text-coffee/85">{procedure.indication}</p>
          </div>

          <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-coffee/50">
              Benefícios esperados
            </p>
            <ul className="space-y-1.5">
              {procedure.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-[15px] leading-relaxed text-coffee/85">
                  <span aria-hidden="true" className="text-terracotta">
                    —
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-coffee/50">
              Como funciona a avaliação
            </p>
            <p className="text-[15px] leading-relaxed text-coffee/85">{procedure.evaluation}</p>
          </div>

          <p className="rounded-sm border border-gold/30 bg-sand/60 p-4 text-xs leading-relaxed text-coffee/70">
            A indicação final deste procedimento depende sempre de avaliação profissional
            individual. As informações acima têm caráter educativo.
          </p>
        </div>

        <a
          href="#agendar"
          onClick={onClose}
          className="mt-9 inline-block rounded-full bg-ink px-7 py-3.5 text-[13px] uppercase tracking-widest text-cream transition-all duration-300 ease-premium hover:bg-coffee active:scale-[0.97]"
        >
          Agendar avaliação
        </a>
      </div>
    </div>
  )
}
