import { useId, type ReactNode } from 'react'
import { Plus } from 'lucide-react'

interface AccordionItemProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

export function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  const id = useId()

  return (
    <div className="border-b border-coffee/15">
      <h3>
        <button
          type="button"
          id={`accordion-trigger-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl text-ink transition-colors hover:text-terracotta sm:text-2xl"
        >
          <span>{title}</span>
          <Plus
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-terracotta transition-transform duration-300 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          />
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-w-2xl font-sans text-[15px] leading-relaxed text-coffee/80">{children}</div>
        </div>
      </div>
    </div>
  )
}
