import { useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface PhotoZoomProps {
  src: string
  alt: string
  scale?: number
}

/**
 * Zoom suave e editorial: a foto inteira se aproxima e acompanha o cursor ao
 * passar o mouse, sem lente circular sobreposta — pensado para fotos de
 * rosto de frente, onde uma lente cobriria partes do rosto. Ativa só em
 * dispositivos com mouse real (hover). Com prefers-reduced-motion, o efeito
 * continua ativo (é uma reação a uma ação do usuário, não um movimento
 * automático), mas a transição suave é removida globalmente pelo CSS em
 * index.css — o zoom aparece na hora, sem animação.
 */
export function PhotoZoom({ src, alt, scale = 1.18 }: PhotoZoomProps) {
  const hasHover = useMediaQuery('(hover: hover) and (pointer: fine)')
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')

  const active = hasHover

  const handleMouseMove = (event: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand sm:aspect-[3/4]"
      onMouseMove={active ? handleMouseMove : undefined}
      onMouseEnter={active ? () => setHovering(true) : undefined}
      onMouseLeave={active ? () => setHovering(false) : undefined}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-out"
        style={{
          transformOrigin: origin,
          transform: hovering ? `scale(${scale})` : 'scale(1)',
        }}
        draggable={false}
      />

      {active && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 ${
            hovering ? 'ring-gold/40' : ''
          }`}
        />
      )}
    </div>
  )
}
