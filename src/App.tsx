import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import bgVideo from "./assets/images/background.mp4";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Garante que a animação ocorra apenas uma vez ao rolar
    });
  }, []);

  return (
    <>
      <div className="global-bg">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="global-bg-overlay"></div>
      </div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};


export default App;
