import { nav, profile } from '../data'

export default function Header() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#inicio">{profile.shortName}</a>
        <nav className="nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="btn btn-small" href="#contato">Contato</a>
      </div>
    </header>
  )
}
