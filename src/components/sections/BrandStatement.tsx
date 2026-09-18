const phrase = 'Não transformamos rostos. Refinamos escolhas.'
const repeated = Array.from({ length: 6 }, () => phrase)

export function BrandStatement() {
  return (
    <section
      aria-label="Posicionamento da marca"
      className="overflow-hidden border-y border-coffee/15 bg-sand py-6"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...repeated, ...repeated].map((text, index) => (
          <span
            key={index}
            className="mx-8 shrink-0 font-serif text-2xl italic text-coffee/70 sm:text-3xl"
          >
            {text}
            <span aria-hidden="true" className="ml-8 text-gold">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
