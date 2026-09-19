import { ChatCircle } from '@phosphor-icons/react'
import { siteConfig } from '../../config/site'
import { InstagramIcon } from '../ui/InstagramIcon'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function Footer() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage,
  )}`

  return (
    <footer className="border-t border-coffee/15 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em]">{siteConfig.brandName}</p>
          <p className="mb-6 text-[10px] uppercase tracking-widest2 text-gold">
            {siteConfig.brandSuffix}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            Estética biomédica com naturalidade, precisão e cuidado em cada etapa.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-gold">Navegação</p>
          <ul className="space-y-2.5 text-sm text-cream/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-300 hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-gold">Contato</p>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cream"
              >
                <ChatCircle className="h-4 w-4 text-gold" weight="light" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cream"
              >
                <InstagramIcon className="h-4 w-4 text-gold" />
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li className="pt-1 text-cream/60">{siteConfig.address}</li>
            <li className="text-cream/60">
              {siteConfig.hours.map((h) => `${h.label}: ${h.value}`).join(' · ')}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
          <p className="mb-4 max-w-3xl text-xs leading-relaxed text-cream/50">
            {siteConfig.legal.professionalNotice}
          </p>
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} TOZI Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
