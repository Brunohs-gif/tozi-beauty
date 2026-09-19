import { HeartHandshake, Microscope, ShieldCheck, Sparkles } from 'lucide-react'
import { aboutSecondaryImage, clinicianImage } from '../../config/images'
import { RevealOnScroll } from '../ui/RevealOnScroll'

const highlights = [
  { icon: HeartHandshake, label: 'Atendimento individualizado' },
  { icon: Microscope, label: 'Protocolos personalizados' },
  { icon: Sparkles, label: 'Naturalidade como princípio' },
  { icon: ShieldCheck, label: 'Segurança em cada etapa' },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Composição visual */}
          <RevealOnScroll className="relative lg:col-span-5">
            <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-sm bg-sand">
              <img
                src={clinicianImage}
                alt="Andressa Tozi, biomédica esteta da TOZI Beauty"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-2 aspect-[4/5] w-2/5 overflow-hidden rounded-sm border-4 border-cream bg-sand shadow-lg sm:-right-6">
              <img
                src={aboutSecondaryImage}
                alt="Detalhe de pele com aparência saudável e luminosa — imagem temporária de banco de imagens"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-2 top-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-gold/50 bg-cream text-center sm:-left-6">
              <span className="font-serif text-2xl text-terracotta">+5</span>
              <span className="text-[9px] uppercase tracking-widest text-coffee/60">anos</span>
            </div>
          </RevealOnScroll>

          {/* Texto */}
          <div className="lg:col-span-7 lg:pl-8">
            <RevealOnScroll>
              <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
                Sobre a TOZI
              </p>
              <h2 className="max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                A sua beleza não precisa parecer outra.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-coffee/80">
                Na TOZI Beauty, cada procedimento começa antes da aplicação. Começa na
                escuta, na análise e na compreensão daquilo que torna cada pessoa única.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-coffee/80">
                Nosso trabalho combina conhecimento biomédico, planejamento individualizado
                e um olhar cuidadoso para alcançar resultados equilibrados, naturais e
                coerentes com cada rosto.
              </p>
            </RevealOnScroll>

            <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <RevealOnScroll key={item.label} as="li" delay={150 + index * 60}>
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                    <span className="text-sm text-coffee/85">{item.label}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
