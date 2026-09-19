interface EyebrowProps {
  children: string
  tone?: 'default' | 'inverted'
  className?: string
}

export function Eyebrow({ children, tone = 'default', className = '' }: EyebrowProps) {
  const toneClasses =
    tone === 'inverted'
      ? 'border-gold/40 text-gold'
      : 'border-terracotta/35 text-terracotta'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] ${toneClasses} ${className}`}
    >
      {children}
    </span>
  )
}
