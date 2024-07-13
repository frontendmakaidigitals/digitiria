import { useState, useRef } from 'react'
import NavBar from './component Chunks/navBar'
import Hero from './component Chunks/hero'
import Footer from './component Chunks/footer'
import Protecting from './components/protecting'
import Testimonial from './component Chunks/testimonial'
function App() {
 
  const navRef = useRef(null)
  return (
    <>
      <NavBar navRef={navRef} />
      <Hero navRef={navRef} />
      <Protecting />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
