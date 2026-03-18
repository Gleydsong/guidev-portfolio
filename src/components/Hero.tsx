import React from "react";
import "../styles/components/Hero.css";

const Hero: React.FC = () => {
  return (
    <div id="hero">
      <div className="hero-content" data-aos="fade-up">
        <p className="hero-eyebrow">Desenvolvedor Full Stack</p>
        <h1>Olá, sou o Gleydson</h1>
        <p className="hero-lead">
          Construo experiências digitais com foco em performance, acessibilidade e automação inteligente.
          Desde dashboards corporativos até APIs de apoio a operações, entrego soluções completas.
        </p>
        <div className="hero-badges">
          <span>IA + Web</span>
          <span>APIs & Dashboards</span>
          <span>Consultoria criativa</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            Veja meus projetos
          </a>
          <a
            href={`${import.meta.env.BASE_URL}curriculo.pdf`}
            download="curriculo.pdf"
            className="btn ghost"
          >
            Baixar currículo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
