import { clinicianImage } from '../../config/images'
import { siteConfig } from '../../config/site'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function ClinicianSection() {
  const { clinician } = siteConfig

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand">
              {/*
                IMAGEM DE PLACEHOLDER — troque `clinicianImage` em
                src/config/images.ts pela foto real da biomédica (mesma
                constante usada na seção "Sobre").
              */}
              <img
                src={clinicianImage}
                alt={`Retrato de ${clinician.name} — imagem temporária de banco de imagens`}
                className="h-full w-full object-cover"
              />
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-7 lg:pl-6">
            <RevealOnScroll>
              <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
                Quem cuida de você
              </p>
              <h2 className="max-w-lg font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Cuidado técnico também pode ser delicado.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <p className="mt-8 font-serif text-2xl text-ink">{clinician.name}</p>
              <p className="mt-1 text-sm text-terracotta">{clinician.credentials}</p>
              <p className="mt-1 text-sm text-coffee/60">{clinician.specialties}</p>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-coffee/80">
                {clinician.bio}
              </p>

              <p className="mt-8 max-w-xl border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-coffee">
                "{clinician.signaturePhrase}"
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
