import { useState, useRef } from 'react'
import NavBar from './component Chunks/navBar'
import Hero from './component Chunks/hero'
import Footer from './component Chunks/footer'
import Protecting from './components/protecting'
function App() {
 
  const navRef = useRef(null)
  return (
    <>
      <NavBar navRef={navRef} />
      <Hero navRef={navRef} />
      <Protecting />
      <Footer />
    </>
  )
}

export default App
