import Hero from './sections/Hero'
import WhatYouGet from './sections/WhatYouGet'
import WhyCreators from './sections/WhyCreators'
import HowItWorks from './sections/HowItWorks'
import About from './sections/About'
import Join from './sections/Join'
import Closing from './sections/Closing'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <WhatYouGet />
        <WhyCreators />
        <HowItWorks />
        <About />
        <Join />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
