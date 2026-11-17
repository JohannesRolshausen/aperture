import Aperture from '../components/Aperture'
import { APPLY_URL, external } from '../config'

export default function Closing() {
  return (
    <section className="closing">
      <div className="closing-copy">
        <h2 className="closing-title">Come on in.</h2>
        <p>The pilot group is small and the form is short.</p>
        <div className="cta-row">
          <a className="button button-yellow" {...external(APPLY_URL)}>
            Apply for the pilot
          </a>
          <a className="text-link" href="#mentor">Or become a mentor</a>
        </div>
      </div>
      <Aperture
        className="closing-aperture"
        disc="var(--ink)"
        light="var(--yellow)"
        line="var(--blue)"
        open={1.8}
        rotate={40}
      />
    </section>
  )
}
