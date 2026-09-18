import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/80 shadow-[0_1px_0_0_rgba(52,41,36,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#inicio" className="font-serif leading-none text-ink">
          <span className="block text-2xl tracking-[0.12em]">{siteConfig.brandName}</span>
          <span className="block text-[10px] uppercase tracking-widest2 text-terracotta">
            {siteConfig.brandSuffix}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-widest text-coffee/80 transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#agendar"
          className="hidden rounded-full border border-ink/80 px-6 py-2.5 text-[13px] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-cream lg:inline-block"
        >
          Agendar avaliação
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[64px] z-40 flex flex-col bg-cream px-8 py-10 transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-ink transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#agendar"
          onClick={() => setMenuOpen(false)}
          className="mt-10 inline-block w-fit rounded-full border border-ink/80 px-7 py-3 text-[13px] uppercase tracking-widest text-ink"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  )
}
