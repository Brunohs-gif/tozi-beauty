import { useState } from 'react'
import { faqItems } from '../../data/faq'
import { siteConfig } from '../../config/site'
import { AccordionItem } from '../ui/AccordionItem'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="duvidas" className="relative bg-sand/50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <RevealOnScroll className="mb-14">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
            Dúvidas
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Perguntas frequentes.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
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
