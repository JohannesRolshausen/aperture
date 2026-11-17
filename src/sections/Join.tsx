import { CONTACT_EMAIL, MENTOR_URL, external } from '../config'

export default function Join() {
  const contact = CONTACT_EMAIL ? { href: `mailto:${CONTACT_EMAIL}` } : { href: '#' }

  return (
    <section className="section join" id="partners">
      <h2 className="section-title">Not here to apply?</h2>
      <div className="cards cards-two">
        <article className="card card-blue card-large" id="mentor">
          <p className="chip chip-top">For experienced creators</p>
          <h3 className="card-title card-title-large">Become a mentor</h3>
          <p>
            You already make content about AI safety? Pass it on. Mentoring is
            1:1 and remote.
          </p>
          <a className="button button-paper" {...external(MENTOR_URL)}>
            Become a mentor
          </a>
        </article>
        <article className="card card-ink card-large">
          <p className="chip chip-top">For organisations and funders</p>
          <h3 className="card-title card-title-large">For partners</h3>
          <p>
            You run a program, teach AI safety or fund this kind of work? We
            would rather build this with you than next to you.
          </p>
          <a className="button button-outline" {...contact}>
            Get in touch
          </a>
        </article>
      </div>
    </section>
  )
}
