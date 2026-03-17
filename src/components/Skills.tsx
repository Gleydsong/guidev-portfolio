import React from "react";
import "../styles/components/Skills.css";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" data-aos="fade-up">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.id}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
