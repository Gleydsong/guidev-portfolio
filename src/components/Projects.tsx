import "../styles/components/Projects.css";
import React, { useState } from "react";
import { projects } from "../data/projects";
import ImageModal from "./ImageModal"; // Criaremos este logo depois ou faremos interno

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openImage = (imgSrc: string) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <section id="projects" data-aos="fade-up">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.altText}
              loading="lazy"
              onClick={() => openImage(project.image)}
            />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} className="btn primary" target="_blank" rel="noreferrer">
                  Ver Projeto
                </a>
              )}
            </div>
          </div>
          ))}
        </div>
      </section>

      {isModalOpen && modalImage && (
        <ImageModal imgSrc={modalImage} onUnmount={closeModal} />
      )}
    </>
  );
};

export default Projects;
