import { almabot, projects } from '../data'
import Tags from './Tags'

function Almabot() {
  return (
    <li className="project featured" key={almabot.title}>
      <div className="featured-head">
        <p className="kicker">{almabot.kicker}</p>
        <div className="project-head">
          <h3>{almabot.title}</h3>
          <span className="badge">{almabot.badge}</span>
        </div>
        <p className="featured-note">{almabot.note}</p>
      </div>

      <div className="featured-grid">
        <div className="fblock">
          <h4><span>01</span> Contexto e problema</h4>
          <p>{almabot.context}</p>
        </div>
        <div className="fblock">
          <h4><span>02</span> Solução desenvolvida</h4>
          {almabot.solution.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="fblock">
        <h4><span>03</span> Tecnologias utilizadas</h4>
        <Tags items={almabot.tags} />
      </div>

      <div className="fblock">
        <h4><span>04</span> Arquitetura simplificada</h4>
        <ol className="flow" aria-label={`Fluxo: ${almabot.flow.join(', ')}`}>
          {almabot.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="fblock">
        <h4><span>05</span> Resultados e impactos</h4>
        <ul className="bullets">
          {almabot.impacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <h2>Projetos</h2>
        <ul className="projects">
          <Almabot />
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <div className="project-head">
                <h3>{project.title}</h3>
                {project.badge && (
                  <span className={project.badge.soft ? 'badge badge-soft' : 'badge'}>
                    {project.badge.text}
                  </span>
                )}
                {project.link && (
                  <a className="link" href={project.link.href} target="_blank" rel="noopener noreferrer">
                    {project.link.text} ↗
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <Tags items={project.tags} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
