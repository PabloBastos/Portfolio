import { useState } from 'react'
import { profile } from '../data'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="status">
            <span className="dot" aria-hidden="true" />
            {profile.positioning}
          </p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <p className="lead">{profile.lead}</p>
          <div className="actions">
            <a className="btn" href="#projetos">Meus projetos</a>
            <a className="btn btn-ghost" href="#contato">Contato</a>
          </div>
        </div>

        <div className="photo-wrap">
          <div className="photo">
            {photoFailed ? (
              <span className="photo-fallback" aria-hidden="true">PB</span>
            ) : (
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}foto.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}foto.jpg`}
                  alt={`Foto de ${profile.name}`}
                  width="900"
                  height="900"
                  onError={() => setPhotoFailed(true)}
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
