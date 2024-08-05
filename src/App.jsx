import { useRef, useEffect,useState } from "react";
import NavBar from "./component Chunks/navBar";
import Hero from "./component Chunks/hero";
import Footer from "./component Chunks/footer";
import Protecting from "./component/protecting";
import Testimonial from "./component Chunks/testimonial";
import MarqueeImg from "./component Chunks/marquee";
import "./component Chunks/locomotive.css";
import Services from "./component Chunks/services";
import ContactForm from "./component Chunks/contactForm";
import About from "./component Chunks/about";
import LocomotiveScroll from "locomotive-scroll"; 
import "./component Chunks/locomotive.css";
import imagesLoaded from "imagesloaded";

function App() {
  const navRef = useRef(null);
  return (
    <>
      <div >
        <NavBar navRef={navRef} />
        <Hero navRef={navRef} />
        <MarqueeImg  />
        <About />
        <Services />
        <Protecting />
        <Testimonial />
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default App;
