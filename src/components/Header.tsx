import "../styles/components/Header.css";

import logo from "../assets/images/logo.png";
import React, { useState } from "react";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo"></img>Portfólio
        </div>
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <nav className={`nav${isMenuOpen ? " nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
