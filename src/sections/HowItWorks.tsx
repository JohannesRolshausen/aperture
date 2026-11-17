const STEPS = [
  {
    title: 'Tell us about you',
    text: 'A short form. There is no minimum follower count.',
  },
  {
    title: 'We get in touch',
    text: 'We look at motivation and reach and put together a small first group.',
  },
  {
    title: 'The pilot',
    text: 'A small remote group. You learn the basics and work 1:1 with a mentor.',
  },
  {
    title: 'You make something',
    text: 'The goal is simple: you publish a piece on AI safety that you are proud of.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="section-head">
        <h2 className="section-title">How it works</h2>
        <p className="tag tag-tilt">Pilot in the making</p>
      </div>
      <ol className="steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step-number" aria-hidden="true">{index + 1}</span>
            <h3 className="step-title">{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
