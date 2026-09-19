import { Quotes } from '@phosphor-icons/react'
import { testimonials } from '../../data/testimonials'
import { Eyebrow } from '../ui/Eyebrow'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealOnScroll className="mb-16 max-w-xl">
          <Eyebrow>Relatos</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Experiências, na voz de quem viveu.
          </h2>
          <p className="mt-3 text-xs text-coffee/50">
            Depoimentos ilustrativos, editáveis em src/data/testimonials.ts.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <figure className="flex h-full flex-col justify-center rounded-[1.75rem] bg-sand/50 p-10 sm:p-12">
              <Quotes className="h-8 w-8 text-gold" weight="light" aria-hidden="true" />
              <blockquote className="mt-6 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
                "{featured.quote}"
              </blockquote>
              <figcaption className="mt-7 text-[13px] uppercase tracking-widest text-coffee/50">
                {featured.initials}
              </figcaption>
            </figure>
          </RevealOnScroll>

          <div className="flex flex-col gap-8 lg:col-span-5">
            {rest.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.initials} delay={(index + 1) * 100}>
                <figure className="border-t border-coffee/15 pt-6">
                  <blockquote className="font-serif text-lg leading-relaxed text-ink">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-4 text-[13px] uppercase tracking-widest text-coffee/50">
                    {testimonial.initials}
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
