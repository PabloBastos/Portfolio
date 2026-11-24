import { about, skills } from '../data'
import { skillIcons } from './skillIcons'

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

          <div className="skills" id="tecnologias">
            <h3>Tecnologias</h3>
            <div className="skill-grid">
              {skills.map((group) => (
                <div className="skill-card" key={group.group}>
                  <h4>{group.group}</h4>
                  <ul className="skill-list">
                    {group.items.map((item) => {
                      const Icon = skillIcons[item]
                      return (
                        <li key={item}>
                          {Icon && <Icon aria-hidden="true" />}
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
