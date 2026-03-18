import React, { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Garante que a animação ocorra apenas uma vez ao rolar
    });
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((curr) => (curr === "light" ? "dark" : "light"));

  return (
    <>
      <div className="global-bg">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="global-bg-overlay"></div>
      </div>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main className="page-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};


export default App;
