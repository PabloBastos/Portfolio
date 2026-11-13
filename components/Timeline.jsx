import { education } from '../data'

export function Education() {
  return (
    <section className="section" id="formacao">
      <div className="wrap">
        <h2>Formação</h2>
        <ul className="timeline">
          {education.map((item) => (
            <li className="entry" key={item.title}>
              <p className="when">{item.when}</p>
              <div className="what">
                <h3>{item.title}</h3>
                <p className="issuer">{item.institution}</p>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
