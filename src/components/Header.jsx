import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Header() {
  // Mais transparente no topo da página; mais sólido depois que a pessoa rola.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'topbar is-scrolled' : 'topbar'}>
      <a className="brand" href="#inicio">{profile.shortName}</a>
      <nav className="nav" aria-label="Navegação principal">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="btn btn-small" href="#contato">Contato</a>
    </header>
  )
}
