import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/site'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <div
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ease-premium ${
          scrolled
            ? 'bg-cream/85 shadow-soft ring-1 ring-coffee/10 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-8">
          <a href="#inicio" className="font-serif leading-none text-ink">
            <span className="block text-xl tracking-[0.12em] sm:text-2xl">{siteConfig.brandName}</span>
            <span className="block text-[9px] uppercase tracking-widest2 text-terracotta">
              {siteConfig.brandSuffix}
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-widest text-coffee/80 transition-colors duration-300 hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#agendar"
            className="hidden rounded-full border border-ink/80 px-6 py-2.5 text-[13px] uppercase tracking-widest text-ink transition-all duration-300 ease-premium hover:bg-ink hover:text-cream active:scale-[0.97] lg:inline-block"
          >
            Agendar avaliação
          </a>

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center text-ink lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-300 ease-premium ${
                menuOpen ? 'rotate-45' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-300 ease-premium ${
                menuOpen ? '-rotate-45' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-8 pb-10 pt-28 transition-all duration-500 ease-premium lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${80 + index * 60}ms` : '0ms' }}
              className={`font-serif text-3xl text-ink transition-all duration-500 ease-premium hover:text-terracotta ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#agendar"
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: menuOpen ? `${80 + navLinks.length * 60}ms` : '0ms' }}
          className={`mt-10 inline-block w-fit rounded-full border border-ink/80 px-7 py-3 text-[13px] uppercase tracking-widest text-ink transition-all duration-500 ease-premium ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  )
}
