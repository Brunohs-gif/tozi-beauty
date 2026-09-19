import { useState } from 'react'
import { faqItems } from '../../data/faq'
import { siteConfig } from '../../config/site'
import { AccordionItem } from '../ui/AccordionItem'
import { Eyebrow } from '../ui/Eyebrow'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="duvidas" className="relative bg-sand/50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <RevealOnScroll className="mb-14">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Perguntas frequentes.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                number={String(index + 1).padStart(2, '0')}
                title={item.question}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
              >
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </RevealOnScroll>

        <p className="mt-10 text-xs leading-relaxed text-coffee/55">
          {siteConfig.legal.educationalNotice}
        </p>
      </div>
    </section>
  )
}
