import { CheckCircle2 } from 'lucide-react'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-full border border-gold/40 bg-ink px-6 py-3 text-sm text-cream shadow-lg transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
}
