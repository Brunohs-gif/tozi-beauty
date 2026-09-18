import { RevealOnScroll } from '../ui/RevealOnScroll'

const steps = [
  {
    number: '01',
    title: 'Conversa inicial',
    description: 'Entendemos seus objetivos, rotina e expectativas.',
  },
  {
    number: '02',
    title: 'Avaliação individual',
    description: 'Analisamos proporções, características e possibilidades.',
  },
  {
    number: '03',
    title: 'Plano personalizado',
    description: 'Definimos o protocolo mais adequado para o seu momento.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Cuidamos do processo antes, durante e depois do procedimento.',
  },
]

export function HowItWorks() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-16 max-w-xl">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
            Como funciona
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Um processo pensado em etapas, não em pressa.
          </h2>
        </RevealOnScroll>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 100}>
              <div className="border-t border-coffee/20 pt-6">
                <span className="font-serif text-5xl text-gold">{step.number}</span>
                <h3 className="mt-5 font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-coffee/70">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
