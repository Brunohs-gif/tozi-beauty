import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  caseLabel: string
  /** CSS object-position por imagem (ex. "22% 48%") — alinha o rosto quando antes/depois têm enquadramento diferente */
  beforeFocal?: string
  afterFocal?: string
}

/**
 * Comparador antes/depois com linha divisória vertical arrastável.
 * Suporta mouse (drag), toque (touch) e teclado (setas ← → / Home / End),
 * seguindo o padrão ARIA de slider.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  caseLabel,
  beforeFocal = '50% 50%',
  afterFocal = '50% 50%',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const handlePointerDown = (event: React.PointerEvent) => {
    draggingRef.current = true
    ;(event.target as HTMLElement).setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(event.clientX)
  }

  const handlePointerUp = () => {
    draggingRef.current = false
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 10 : 4
    if (event.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - step))
      event.preventDefault()
    } else if (event.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + step))
      event.preventDefault()
    } else if (event.key === 'Home') {
      setPosition(0)
      event.preventDefault()
    } else if (event.key === 'End') {
      setPosition(100)
      event.preventDefault()
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-sm bg-sand sm:aspect-[3/4]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Depois — imagem base, ocupa todo o container */}
      <img
        src={afterSrc}
        alt={`Depois — ${caseLabel} (imagem ilustrativa)`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: afterFocal }}
        draggable={false}
      />

      {/* Antes — mesma imagem em tamanho real, recortada via clip-path (evita distorção) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={`Antes — ${caseLabel} (imagem ilustrativa)`}
          className="h-full w-full object-cover"
          style={{ objectPosition: beforeFocal }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] uppercase tracking-widest text-cream backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] uppercase tracking-widest text-cream backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Linha divisória + botão de arrastar */}
      <div
        className="absolute inset-y-0 z-10 w-px bg-cream/90"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Posição do comparador antes e depois para ${caseLabel}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% da imagem de "antes" revelada`}
          onKeyDown={handleKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-gold/60 bg-cream text-coffee shadow-md transition-transform hover:scale-105 focus-visible:scale-105"
        >
          <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
