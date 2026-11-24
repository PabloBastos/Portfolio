import { projects } from '../data'
import Tags from './Tags'

function ProjectLinks({ project }) {
  if (project.privacy === 'private') {
    return (
      <div className="project-meta">
        <span className="private">Projeto privado</span>
        <span className="kind">{project.kind}</span>
      </div>
    )
  }

  return (
    <div className="project-links">
      {project.github && (
        <a className="link" href={project.github} target="_blank" rel="noopener noreferrer">
          Ver no GitHub ↗
        </a>
      )}
      {project.demo && (
        <a className="link" href={project.demo} target="_blank" rel="noopener noreferrer">
          Ver projeto ↗
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <h2>Projetos</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <div className="project-head">
                <h3>{project.title}</h3>
                <ProjectLinks project={project} />
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
