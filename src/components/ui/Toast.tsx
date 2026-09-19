import { CheckCircle } from '@phosphor-icons/react'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-full border border-gold/40 bg-ink px-6 py-3 text-sm text-cream shadow-lift transition-all duration-500 ease-premium ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <CheckCircle className="h-4 w-4 shrink-0 text-gold" weight="light" aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
}
