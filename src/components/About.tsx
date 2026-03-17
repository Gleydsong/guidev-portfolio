import React from "react";
import "../styles/components/About.css";

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 data-aos="fade-up">Sobre Mim</h2>
      <p data-aos="fade-up">
        Desenvolvedor Full Stack, Estudante em Analise e Desenvolvimento de
        Sistemas pela Faculdade Estacio. Apaixonado por tecnologia e sempre em
        busca de novos conhecimentos para aprimorar minhas habilidades. Tenho
        experiência em diversas tecnologias, incluindo IA e desenvolvimento web.
        Estou sempre aberto a novos desafios e oportunidades para crescer
        profissionalmente.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}curriculo.pdf`}
        download="curriculo.pdf"
        className="btn"
        data-aos="fade-up"
      >
        Baixar Currículo
      </a>
    </section>
  );
};

export default About;
