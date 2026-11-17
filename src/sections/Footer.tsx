import Logo from '../components/Logo'
import { IMPRINT_URL, PRIVACY_URL } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <Logo disc="var(--blue)" light="var(--yellow)" />
      <nav className="footer-links" aria-label="Footer">
        <a href="#program">Program</a>
        <a href="#about">About</a>
        <a href="#mentor">Become a mentor</a>
        <a href="#partners">For partners</a>
        {IMPRINT_URL && <a href={IMPRINT_URL}>Imprint</a>}
        {PRIVACY_URL && <a href={PRIVACY_URL}>Privacy</a>}
      </nav>
      <p>&copy; {new Date().getFullYear()} Aperture</p>
    </footer>
  )
}
