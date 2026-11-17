import Aperture from '../components/Aperture'

const CARDS = [
  {
    tone: 'ink',
    stop: 'f/5.6',
    open: 0.45,
    rotate: 5,
    disc: 'var(--blue)',
    line: 'var(--ink)',
    title: 'The basics',
    text: 'What AI risk is about, where to find reliable information, and how to bring the topic into your own content.',
  },
  {
    tone: 'blue',
    stop: 'f/2.8',
    open: 1,
    rotate: 20,
    disc: 'var(--ink)',
    line: 'var(--blue)',
    title: 'Mentoring',
    text: '1:1 with experienced creators who already work on AI safety, such as fellowship alumni.',
  },
  {
    tone: 'outline',
    stop: 'f/1.4 · wide open',
    open: 1.75,
    rotate: 35,
    disc: 'var(--ink)',
    line: 'var(--paper)',
    title: 'A way in',
    text: 'A network of other creators, and an overview of the people and opportunities in the field.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="section" id="program">
      <div className="section-head">
        <h2 className="section-title">
          What you{' '}
          <span className="squiggle">
            get
            <svg aria-hidden="true" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M2 8 Q 14 0 26 7 T 50 7 T 74 7 T 98 5" />
            </svg>
          </span>
        </h2>
        <ul className="tags">
          <li className="tag">Free</li>
          <li className="tag tag-yellow">Remote</li>
          <li className="tag">Open to creators everywhere</li>
        </ul>
      </div>

      <div className="cards">
        {CARDS.map((card) => (
          <article key={card.title} className={`card card-${card.tone}`}>
            <div className="card-top">
              <Aperture
                className="card-aperture"
                disc={card.disc}
                light="var(--yellow)"
                line={card.line}
                open={card.open}
                rotate={card.rotate}
              />
              <p className="chip">{card.stop}</p>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
