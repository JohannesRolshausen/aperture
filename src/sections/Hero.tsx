import Aperture from '../components/Aperture'
import Logo from '../components/Logo'
import { APPLY_URL, external } from '../config'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="nav" aria-label="Main">
        <Logo disc="var(--ink)" light="var(--paper)" />
        <div className="nav-links">
          <a className="nav-link" href="#program">Program</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#partners">For partners</a>
          <a className="nav-link" href="#mentor">Become a mentor</a>
          <a className="nav-apply" {...external(APPLY_URL)}>Apply</a>
        </div>
      </nav>

      <h1 className="hero-title" aria-label="AI safety is now wide open for creators">
        <span className="hero-title-small" aria-hidden="true">AI safety is now</span>
        <span className="hero-title-big" aria-hidden="true">
          <span>Wide</span>
          <span className="hero-title-open">
            <Aperture
              className="hero-aperture"
              disc="var(--ink)"
              light="var(--yellow)"
              line="var(--blue)"
              animated
            />
            pen
          </span>
        </span>
        <span className="hero-title-small" aria-hidden="true">for creators.</span>
      </h1>

      <div className="hero-bottom">
        <div className="hero-copy">
          <p className="hero-tagline">Big problem. Good people. Room for you.</p>
          <p>
            Aperture is a free, remote way into AI safety for creators. You get
            mentoring from experienced creators, the basics of AI risk and a
            network to make things with.
          </p>
        </div>
        <div className="cta-row">
          <a className="button button-yellow" {...external(APPLY_URL)}>
            Apply for the pilot
          </a>
          <a className="text-link" href="#why">New to AI safety? Start here</a>
        </div>
      </div>
    </header>
  )
}
