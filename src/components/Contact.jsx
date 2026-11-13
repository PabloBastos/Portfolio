import { profile } from '../data'

const links = [
  { n: '01', label: 'GitHub', desc: 'Código, projetos e experimentos', href: profile.github },
  { n: '02', label: 'LinkedIn', desc: 'Trajetória e conexões profissionais', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="wrap">
        <p className="kicker">Contato</p>
        <h2 className="contact-title">Vamos construir algo interessante?</h2>
        <div className="contact-intro">
          <p className="lead">
            Estou aberto a oportunidades, projetos e conexões. Se você tem uma ideia, um desafio ou simplesmente quer trocar experiências sobre tecnologia, vamos conversar.
          </p>
          <div className="contact-cta">
            <a className="btn btn-cta" href={`mailto:${profile.email}`}>Enviar um e-mail ↗</a>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <ul className="link-rows">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <span className="row-n">{l.n}</span>
                <span className="row-label">{l.label}</span>
                <span className="row-desc">{l.desc}</span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
