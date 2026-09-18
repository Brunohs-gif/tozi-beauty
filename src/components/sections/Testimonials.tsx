import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-16 max-w-xl">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
            Relatos
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Experiências, na voz de quem viveu.
          </h2>
          <p className="mt-3 text-xs text-coffee/50">
            Depoimentos ilustrativos, editáveis em src/data/testimonials.ts.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.initials} delay={index * 100}>
              <figure className="h-full rounded-sm border border-coffee/15 p-8">
                <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                <blockquote className="mt-5 font-serif text-lg leading-relaxed text-ink">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-6 text-[13px] uppercase tracking-widest text-coffee/50">
                  {testimonial.initials}
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
