import { certificates } from '../data'

export default function Certificates() {
  return (
    <section className="section" id="certificados">
      <div className="wrap">
        <h2>Certificados</h2>
        <ol className="cert-list">
          {certificates.map((cert, i) => (
            <li className={`cert-row ${cert.status}`} key={cert.title}>
              <span className="cert-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="cert-main">
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer}
                  {cert.hours && <span className="cert-hours"> · {cert.hours}</span>}
                </p>
              </div>
              <span className="cert-status">
                {cert.status === 'ongoing' ? 'Em andamento' : 'Concluído'}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
