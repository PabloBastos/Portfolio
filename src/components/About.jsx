import { about, skills } from '../data'
import Tags from './Tags'

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="wrap">
        <h2>Sobre mim</h2>
        <div className="about-grid">
          <div className="prose">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="skills">
            <h3>Tecnologias</h3>
            <dl>
              {skills.map((skill) => (
                <div key={skill.group}>
                  <dt>{skill.group}</dt>
                  <dd><Tags items={skill.items} /></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
